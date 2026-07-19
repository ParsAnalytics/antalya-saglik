// app/page.tsx
import { getAllNews } from '@/lib/newsService';
import HeroSlider from '@/components/HeroSlider';
import NewsTicker from '@/components/NewsTicker';
import NewsCard from '@/components/NewsCard';
import LatestNewsList from '@/components/LatestNewsList';
import styles from './page.module.css';

export const revalidate = 900; // 15 mins

export default async function Home() {
  const allNews = await getAllNews();

  const breakingNews = allNews.filter(n => n.category.includes('Hastane') || n.title.includes('Sağlık'));
  const heroNews = allNews.slice(0, 10);
  const latestNews = allNews.slice(10, 20); // For the sidebar
  const gridNews = allNews.slice(10, 16); // For the main grid
  const tipNews = allNews.filter(n => n.category.includes('Bakım') || n.category.includes('Üniversite'));

  return (
    <div className={styles.mainContent}>
      {/* 1. Ticker */}
      <NewsTicker news={breakingNews} />

      {/* 2. Classic Grid Layout (Main Content Left, Sidebar Right) */}
      <div className={styles.portalGrid}>
        
        {/* Main Column */}
        <div className={styles.mainColumn}>
          {/* Manşet (Hero) */}
          <HeroSlider news={heroNews} />

          {/* Güncel Haberler Grid */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLeft}>
                <div className={styles.accentBar} />
                <h2 className={styles.sectionTitle}>GÜNCEL HABERLER</h2>
              </div>
            </div>
            <div className={styles.newsGrid}>
              {gridNews.map(item => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Üniversite & Evde Bakım Grid */}
          {tipNews.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionLeft}>
                  <div className={styles.accentBar} />
                  <h2 className={styles.sectionTitle}>Tıp & Bakım</h2>
                </div>
              </div>
              <div className={styles.newsGrid}>
                {tipNews.slice(0, 4).map(item => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Column */}
        <aside className={styles.sidebarColumn}>
          
          {/* Sidebar Widget 1: Categories */}
          <div className={styles.categoryGrid}>
            <a href="/kategori/evde-bakim" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🏠</div>
              <div className={styles.categoryLabel}>Evde Bakım</div>
            </a>
            <a href="/kategori/hastane" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🏥</div>
              <div className={styles.categoryLabel}>Hastane</div>
            </a>
            <a href="/kategori/universite" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🎓</div>
              <div className={styles.categoryLabel}>Üniversite</div>
            </a>
            <a href="/kategori/saglik" className={styles.categoryCard}>
              <div className={styles.categoryIcon}>💊</div>
              <div className={styles.categoryLabel}>Sağlık</div>
            </a>
          </div>

          {/* Sidebar Widget 2: Latest News */}
          <LatestNewsList items={latestNews} />
          
          {/* Sidebar Widget 3: Stats */}
          <div className={styles.statsBar}>
            <div className={styles.statsInner}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>{allNews.length}</div>
                <div className={styles.statLabel}>Günlük Haber</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>4</div>
                <div className={styles.statLabel}>Haber Kaynağı</div>
              </div>
            </div>
          </div>
          
        </aside>

      </div>
    </div>
  );
}
