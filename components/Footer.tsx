// components/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';

const SOURCES = [
  { label: 'Haber Antalya', href: 'https://www.haberantalya.com/rss/category/saglik' },
  { label: 'Antalya Yaşam', href: 'https://antalyayasam.com.tr/rss/saglik' },
  { label: 'My Gazete', href: 'https://www.mygazete.com.tr/saglik' },
  { label: 'Akdeniz Üniversitesi Hastanesi', href: 'https://hastane.akdeniz.edu.tr/' },
  { label: 'Antalya Eğitim Araştırma Hastanesi', href: 'https://antalyaeah.saglik.gov.tr/' },
];

const CATEGORIES = [
  { label: 'Evde Bakım', href: '/kategori/evde-bakim' },
  { label: 'Hastane Haberleri', href: '/kategori/hastane' },
  { label: 'Üniversite Tıbbı', href: '/kategori/universite' },
  { label: 'Genel Sağlık', href: '/kategori/saglik' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span>🏥</span>
              <span>Antalya<span className={styles.accent}>Sağlık</span></span>
            </div>
            <p className={styles.tagline}>
              Antalya&apos;nın sağlık, evde bakım ve tıp haberlerini anlık takip edin. Akdeniz kenti için güvenilir sağlık habercisi.
            </p>
            <div className={styles.badges}>
              <span className={styles.statBadge}>📍 Antalya</span>
              <span className={styles.statBadge}>🏥 5 Kaynak</span>
              <span className={styles.statBadge}>🔄 15dk Güncelleme</span>
            </div>
          </div>

          {/* Kategoriler */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Kategoriler</h3>
            <ul className={styles.links}>
              {CATEGORIES.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={styles.link}>
                    <span className={styles.linkArrow}>›</span>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kaynaklar */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Haber Kaynakları</h3>
            <ul className={styles.links}>
              {SOURCES.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <span className={styles.linkArrow}>›</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} AntalyaSağlık — Tüm haklar saklıdır.
          </p>
          <p className={styles.disclaimer}>
            Bu site bağımsız bir haber toplayıcısıdır. İçerikler kaynak sitelerden çekilmektedir.
          </p>
        </div>
      </div>
    </footer>
  );
}
