// app/page.tsx
import { getAllNews } from '@/lib/newsService';
import CustomHero from '@/components/CustomHero';
import NewsTicker from '@/components/NewsTicker';
import NewsCard from '@/components/NewsCard';
import LatestNewsList from '@/components/LatestNewsList';
import AdBanner from '@/components/AdBanner';
import styles from './page.module.css';

export const revalidate = 900; // 15 mins

export default async function Home() {
  const allNews = await getAllNews();

  // 10 items for the hero slider
  const heroNews = allNews.slice(0, 10);
  
  // Next 10 items for the sidebar "Son Haberler"
  const sidebarNews = allNews.slice(10, 20);
  
  // The rest of the news for the main grid (from index 20 onwards, up to maybe 50 items to keep it clean, but since the user wants all news, we can show a good chunk, say up to 60)
  const gridNews = allNews.slice(10, 100);

  // Ticker gets top 10 recent
  const tickerNews = allNews.slice(0, 10);

  return (
    <div className={styles.mainContent}>
      {/* 1. Ticker */}
      <NewsTicker news={tickerNews} />

      {/* Manşet (Custom Full-Width Hero) */}
      <CustomHero />

      {/* 2. Classic Grid Layout (Main Content Left, Sidebar Right) */}
      <div className={styles.portalGrid}>
        
        {/* Main Column */}
        <div className={styles.mainColumn}>
          {/* Tüm Haberler Grid */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLeft}>
                <div className={styles.accentBar} />
                <h2 className={styles.sectionTitle}>TÜM HABERLER</h2>
              </div>
            </div>
            <div className={styles.newsGrid}>
              {gridNews.map(item => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <aside className={styles.sidebarColumn}>
          {/* Ad Banner */}
          <AdBanner />
          
          {/* Sidebar Widget: Latest News */}
          <LatestNewsList items={sidebarNews} />
          
        </aside>

      </div>
    </div>
  );
}
