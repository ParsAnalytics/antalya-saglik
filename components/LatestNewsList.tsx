'use client';
import { NewsItem } from '@/lib/newsService';
import styles from './LatestNewsList.module.css';

interface Props {
  items: NewsItem[];
}

export default function LatestNewsList({ items }: Props) {
  return (
    <div className={styles.latestList}>
      <div className={styles.latestHeader}>SON HABERLER</div>
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
                onError={(e) => { (e.target as HTMLElement).parentElement!.style.display = 'none'; }}
              />
            </div>
          )}
          <div className={styles.latestBody}>
            <h3 className={styles.latestTitle}>{item.title}</h3>
            <div className={styles.latestMeta}>
              <span className={`badge badge-${item.categoryColor}`}>{item.category}</span>
              <span className={styles.latestDate}>
                {new Date(item.pubDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
