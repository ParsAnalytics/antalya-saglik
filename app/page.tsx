// app/page.tsx
import { getAllNews } from '@/lib/newsService';
import HeroSlider from '@/components/HeroSlider';
import NewsTicker from '@/components/NewsTicker';
import NewsCard from '@/components/NewsCard';
import LatestNewsList from '@/components/LatestNewsList';
import styles from './page.module.css';

export const revalidate = 900;

const STATS = [
  { value: '5', label: 'Haber Kaynağı', icon: '📡' },
  { value: '100K+', label: 'Yıllık Evde Hasta', icon: '🏠' },
  { value: '15dk', label: 'Güncelleme Sıklığı', icon: '⚡' },
  { value: '24/7', label: 'Canlı Takip', icon: '🔄' },
];

const CATEGORIES = [
  { label: 'Evde Bakım', icon: '🏠', color: '#00d4b8', desc: 'Antalya\'da evde sağlık hizmetleri', href: '/kategori/evde-bakim' },
  { label: 'Hastane', icon: '🏥', color: '#3b82f6', desc: 'Yerel hastane haberleri', href: '/kategori/hastane' },
  { label: 'Üniversite Tıbbı', icon: '🎓', color: '#f97316', desc: 'Akdeniz Üniversitesi gelişmeleri', href: '/kategori/universite' },
  { label: 'Genel Sağlık', icon: '💊', color: '#8b5cf6', desc: 'Antalya sağlık gündemi', href: '/kategori/saglik' },
];

export default async function HomePage() {
  const allNews = await getAllNews();
  const tickerTitles = allNews.slice(0, 10).map((n) => n.title);
  const featuredNews = allNews.slice(0, 8);
  const latestNews = allNews.slice(5, 20);

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider items={allNews.slice(0, 5)} />

      {/* News Ticker */}
      <NewsTicker items={tickerTitles} />

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className={styles.statsInner}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statIcon}>{s.icon}</span>
              <div>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.mainContent}>
        {/* Category Chips */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLeft}>
              <div className={styles.accentBar} />
              <h2 className={styles.sectionTitle}>Kategoriler</h2>
            </div>
          </div>
          <div className={styles.categoryGrid}>
            {CATEGORIES.map((cat) => (
              <a key={cat.label} href={cat.href} className={styles.categoryCard}>
                <div className={styles.categoryIcon} style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}>
                  <span>{cat.icon}</span>
                </div>
                <div className={styles.categoryInfo}>
                  <div className={styles.categoryLabel} style={{ color: cat.color }}>{cat.label}</div>
                  <div className={styles.categoryDesc}>{cat.desc}</div>
                </div>
                <svg className={styles.categoryArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Featured News Grid */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLeft}>
              <div className={styles.accentBar} />
              <h2 className={styles.sectionTitle}>Öne Çıkan Haberler</h2>
            </div>
            <a href="/kategori/saglik" className={styles.seeAll}>
              Tümünü Gör
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {featuredNews.length > 0 ? (
            <div className={styles.newsGrid}>
              {featuredNews.map((item, i) => (
                <NewsCard key={item.id} item={item} featured={i === 0} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>📡</div>
              <p>Haberler yükleniyor...</p>
            </div>
          )}
        </section>

        {/* Latest News List */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLeft}>
              <div className={`${styles.accentBar} ${styles.accentBarBlue}`} />
              <h2 className={styles.sectionTitle}>Son Haberler</h2>
            </div>
          </div>

          <LatestNewsList items={latestNews} />
        </section>

        {/* Info Banner */}
        <section className={styles.infoBanner}>
          <div className={styles.infoBannerInner}>
            <div className={styles.infoBannerIcon}>🏥</div>
            <div className={styles.infoBannerContent}>
              <h3>Antalya&apos;da Evde Sağlık Hizmetleri</h3>
              <p>Antalya&apos;da yılda 100.000+ hastaya evde muayene, tahlil ve tıbbi bakım hizmeti verilmektedir. Başvurmak için Sağlık Bakanlığı&apos;nın evde sağlık birimi veya yerel hastanenizle iletişime geçebilirsiniz.</p>
            </div>
            <a
              href="https://evdesaglik.saglik.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoBannerBtn}
            >
              Başvur
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
