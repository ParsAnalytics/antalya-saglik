'use client';
import { NewsItem } from '@/lib/newsService';
import Link from 'next/link';
import styles from './NewsTicker.module.css';

export default function NewsTicker({ news }: { news: NewsItem[] }) {
  if (!news || news.length === 0) return null;

  return (
    <div className={styles.tickerWrap}>
      <div className={styles.tickerInner}>
        <div className={styles.label}>SON DAKİKA</div>
        <div className={styles.track}>
          <div className={styles.content}>
            {news.map((item, index) => (
              <a
                key={`ticker-${item.id}-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tickerItem}
              >
                <span className={styles.bullet}>•</span>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
