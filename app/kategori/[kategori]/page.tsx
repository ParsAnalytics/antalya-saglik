// app/kategori/[kategori]/page.tsx
import { Metadata } from 'next';
import { getAllNews } from '@/lib/newsService';
import NewsCard from '@/components/NewsCard';
import styles from './page.module.css';

const CATEGORY_MAP: Record<string, { title: string; description: string; icon: string; filter: string }> = {
  'evde-bakim': {
    title: 'Evde Bakım',
    description: 'Antalya\'da evde sağlık, palyatif bakım ve bakıma muhtaç bireylere yönelik güncel haberler.',
    icon: '🏠',
    filter: 'bakim',
  },
  'hastane': {
    title: 'Hastane Haberleri',
    description: 'Antalya\'daki devlet hastaneleri, özel hastaneler ve sağlık merkezlerinden son gelişmeler.',
    icon: '🏥',
    filter: 'hastane',
  },
  'universite': {
    title: 'Üniversite Tıbbı',
    description: 'Akdeniz Üniversitesi Hastanesi\'nden bilimsel gelişmeler, operasyonlar ve tıbbi başarılar.',
    icon: '🎓',
    filter: 'universite',
  },
  'saglik': {
    title: 'Genel Sağlık',
    description: 'Antalya genelinde tüm sağlık haberleri, sağlık uyarıları ve güncel tıp bilgileri.',
    icon: '💊',
    filter: 'saglik',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ kategori: string }> }): Promise<Metadata> {
  const { kategori } = await params;
  const cat = CATEGORY_MAP[kategori];
  if (!cat) return { title: 'Kategori' };
  return {
    title: `${cat.title} Haberleri — Antalya`,
    description: cat.description,
  };
}

export default async function KategoriPage({ params }: { params: Promise<{ kategori: string }> }) {
  const { kategori } = await params;
  const cat = CATEGORY_MAP[kategori];
  const allNews = await getAllNews();

  const filteredNews = cat
    ? allNews.filter((item) =>
        item.category.toLowerCase().includes(cat.filter) ||
        item.source.toLowerCase().includes(cat.filter) ||
        item.title.toLowerCase().includes(cat.filter) ||
        item.description.toLowerCase().includes(cat.filter)
      )
    : allNews;

  const displayNews = filteredNews.length > 0 ? filteredNews : allNews;

  return (
    <div className={styles.page}>
      {/* Category Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerGlow} />
          <div className={styles.iconWrap}>
            <span className={styles.icon}>{cat?.icon || '📰'}</span>
          </div>
          <h1 className={styles.title}>{cat?.title || 'Haberler'}</h1>
          <p className={styles.description}>{cat?.description || 'Antalya sağlık haberleri'}</p>
          <div className={styles.count}>{displayNews.length} haber bulundu</div>
        </div>
      </div>

      {/* News Grid */}
      <div className={styles.container}>
        {displayNews.length > 0 ? (
          <div className={styles.grid}>
            {displayNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span>📡</span>
            <p>Bu kategoride henüz haber bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
}
