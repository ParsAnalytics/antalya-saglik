import Link from 'next/link';
import Image from 'next/image';
import styles from './CustomHero.module.css';

export default function CustomHero() {
  return (
    <section className={styles.heroWrap}>
      {/* Background Image (Antalya Landscape) */}
      <div className={styles.bgImage}>
        <img 
          src="https://images.unsplash.com/photo-1521581171443-46a485590924?auto=format&fit=crop&w=1920&q=80" 
          alt="Antalya" 
          className={styles.rawImg}
        />
      </div>

      {/* Diagonal Overlay Shape */}
      <div className={styles.waveOverlay}>
        <div className={styles.waveContent}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <h2 className={styles.heroTitle}>ŞEHRİN NABZI, <span className={styles.heroTitleAccent}>SİZİN SAĞLIĞINIZ</span></h2>
            <p className={styles.heroSubtitle}>Antalya'nın Özel Sağlık Platformu: Güncel Haberler, Uzman Görüşleri, Şehir Sağlık Rehberi</p>
          </div>

          {/* Right Links & Cards */}
          <div className={styles.rightContent}>
            <div className={styles.linkList}>
              <Link href="#" className={styles.heroLink}>GÜNCEL HABERLER</Link>
              <Link href="#" className={styles.heroLink}>DOKTOR REHBERİ</Link>
              <Link href="#" className={styles.heroLink}>SAĞLIK TURİZMİ</Link>
              <Link href="#" className={styles.heroLink}>RÖPORTAJLAR</Link>
            </div>
            
            {/* Small image cards as seen in the mockup */}
            <div className={styles.cardList}>
              <div className={styles.heroCard}>
                <img src="https://images.unsplash.com/photo-1552554792-5eb50f58022d?auto=format&fit=crop&w=300&q=80" alt="Haber 1" className={styles.rawImg} />
              </div>
              <div className={styles.heroCard}>
                <img src="https://images.unsplash.com/photo-1536640712-4d4c36ef0e2c?auto=format&fit=crop&w=300&q=80" alt="Haber 2" className={styles.rawImg} />
              </div>
              <div className={styles.heroCard}>
                <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=300&q=80" alt="Haber 3" className={styles.rawImg} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVG Elements (Microphone, Search, Clock - illustrative) */}
      <div className={styles.searchBar}>
        <input type="text" placeholder="Haberlerde ara..." className={styles.searchInput} />
        <button className={styles.searchBtn}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </section>
  );
}
