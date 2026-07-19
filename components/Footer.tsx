import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>A</div>
            <div className={styles.logoText}>ANTALYA SAĞLIK</div>
          </div>
          <p className={styles.desc}>
            Antalya'nın en güncel sağlık, hastane ve tıp haberleri portalı. Kesintisiz haber takibi.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Kategoriler</h3>
          <ul>
            <li><Link href="/kategori/evde-bakim">Evde Bakım</Link></li>
            <li><Link href="/kategori/hastane">Hastane Haberleri</Link></li>
            <li><Link href="/kategori/universite">Üniversite Tıbbı</Link></li>
            <li><Link href="/kategori/saglik">Genel Sağlık</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Kurumsal</h3>
          <ul>
            <li><Link href="#">Hakkımızda</Link></li>
            <li><Link href="#">Künye</Link></li>
            <li><Link href="#">İletişim</Link></li>
            <li><Link href="#">Gizlilik Politikası</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div>&copy; {new Date().getFullYear()} Antalya Sağlık Haberleri. Tüm hakları saklıdır.</div>
        <div>Haberler: HaberAntalya, AntalyaYaşam, MyGazete</div>
      </div>
    </footer>
  );
}
