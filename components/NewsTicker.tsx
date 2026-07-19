'use client';
import styles from './NewsTicker.module.css';

interface Props {
  items: string[];
}

export default function NewsTicker({ items }: Props) {
  if (!items.length) return null;

  // Duplicate for seamless scroll
  const repeated = [...items, ...items];

  return (
    <div className={styles.ticker}>
      <div className={styles.label}>
        <span className={styles.dot} />
        SON DAKİKA
      </div>
      <div className={styles.track}>
        <div className={styles.inner}>
          {repeated.map((item, i) => (
            <span key={i} className={styles.item}>
              <span className={styles.bullet}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
