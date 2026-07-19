'use client';
// components/NewsCard.tsx
import Link from 'next/link';
import { NewsItem, formatDate } from '@/lib/newsService';
import styles from './NewsCard.module.css';

interface Props {
  item: NewsItem;
  featured?: boolean;
}

export default function NewsCard({ item, featured = false }: Props) {

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      {item.image && (
        <Link href={item.link} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
          <div className={styles.imageWrap}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.image}
              onError={(e) => {
                (e.target as HTMLElement).parentElement!.style.display = 'none';
              }}
            />
            <div className={styles.imageOverlay} />
            <span className={`${styles.categoryBadge} badge badge-${item.categoryColor}`}>
              {item.category}
            </span>
          </div>
        </Link>
      )}

      <div className={styles.body}>
        <Link href={item.link} target="_blank" rel="noopener noreferrer">
          <h2 className={`${styles.title} ${featured ? styles.titleFeatured : ''}`}>
            {item.title}
          </h2>
        </Link>

        {item.description && (
          <p className={styles.description}>{item.description}</p>
        )}

        <footer className={styles.footer}>
          <div className={styles.meta}>
            <span className={styles.source}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
              {item.sourceLabel}
            </span>
            <span className={styles.date}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {formatDate(item.pubDate)}
            </span>
          </div>

          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.readMore}
          >
            Oku
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </footer>
      </div>
    </article>
  );
}
