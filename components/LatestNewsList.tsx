'use client';
import { NewsItem } from '@/lib/newsService';
import styles from './LatestNewsList.module.css';

interface Props {
  items: NewsItem[];
}

export default function LatestNewsList({ items }: Props) {
  return (
    <div className={styles.latestList}>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.latestItem}
        >
          {item.image && (
            <div className={styles.latestThumb}>
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          )}
          <div className={styles.latestBody}>
            <div className={styles.latestMeta}>
              <span className={`badge badge-${item.categoryColor}`}>{item.category}</span>
              <span className={styles.latestDate}>
                {new Date(item.pubDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })}
              </span>
            </div>
            <h3 className={styles.latestTitle}>{item.title}</h3>
            <p className={styles.latestSource}>{item.sourceLabel}</p>
          </div>
          <svg className={styles.latestArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      ))}
    </div>
  );
}
