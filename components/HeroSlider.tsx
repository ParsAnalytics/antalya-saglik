'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NewsItem } from '@/lib/newsService';
import styles from './HeroSlider.module.css';

interface Props {
  news: NewsItem[];
}

export default function HeroSlider({ news }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderNews = news.slice(0, 10); // Standard Turkish news slider usually has 10 items

  useEffect(() => {
    if (sliderNews.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderNews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [sliderNews.length]);

  if (!sliderNews.length) return null;

  return (
    <div className={styles.hero}>
      {/* Main Display */}
      <div className={styles.mainDisplay}>
        {sliderNews.map((item, idx) => (
          <div
            key={`hero-${item.id}-${idx}`}
            className={`${styles.slide} ${idx === currentIndex ? styles.active : ''}`}
          >
            {item.image && (
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} />
              </div>
            )}
            <div className={styles.contentOverlay}>
              <span className={styles.categoryBadge}>{item.category}</span>
              <h2 className={styles.title}>
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </Link>
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Numbered Pagination */}
      <div className={styles.pagination}>
        {sliderNews.map((_, idx) => (
          <button
            key={`page-${idx}`}
            className={`${styles.pageBtn} ${idx === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Slayt ${idx + 1}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
