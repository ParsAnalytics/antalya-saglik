'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { NewsItem, formatDate } from '@/lib/newsService';
import styles from './HeroSlider.module.css';

interface Props {
  items: NewsItem[];
}

export default function HeroSlider({ items }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const heroItems = items.slice(0, 5);

  const next = () => setCurrent((c) => (c + 1) % heroItems.length);
  const prev = () => setCurrent((c) => (c - 1 + heroItems.length) % heroItems.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, heroItems.length]);

  if (!heroItems.length) return null;

  const item = heroItems[current];

  const FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Crect fill='%230d1525' width='1200' height='600'/%3E%3Ccircle cx='600' cy='280' r='120' fill='%2300d4b815'/%3E%3Ctext x='600' y='310' text-anchor='middle' fill='%2300d4b8' font-size='90' font-family='Arial'%3E🏥%3C/text%3E%3C/svg%3E";

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image */}
      <div className={styles.bgWrap}>
        <img
          src={item.image || FALLBACK}
          alt={item.title}
          className={styles.bgImage}
          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK; }}
          key={current}
        />
        <div className={styles.bgOverlay} />
        <div className={styles.bgGradient} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.metaRow}>
            <span className={`badge badge-${item.categoryColor}`}>{item.category}</span>
            <span className={styles.breaking}>🔴 GÜNCEL</span>
            <span className={styles.dateLabel}>{formatDate(item.pubDate)}</span>
          </div>

          <h1 className={styles.title}>{item.title}</h1>

          {item.description && (
            <p className={styles.description}>{item.description}</p>
          )}

          <div className={styles.ctaRow}>
            <Link href={item.link} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              Haberin Tamamı
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <span className={styles.sourceLabel}>Kaynak: {item.sourceLabel}</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Önceki">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Sonraki">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {heroItems.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slayt ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          key={current}
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        />
      </div>
    </section>
  );
}
