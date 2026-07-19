'use client';
import styles from './AdBanner.module.css';

export default function AdBanner() {
  return (
    <a 
      href="https://akdeniz-saglik-danismanligi.vercel.app" 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.banner}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>Doğru Tedavi İçin Rehberiniz</h3>
        <p className={styles.desc}>
          Hangi uzmana veya hastaneye gitmeniz gerektiğini bilmiyor musunuz? 
          Akdeniz Sağlık Danışmanlığı ile ücretsiz destek alın.
        </p>
        <span className={styles.cta}>Hemen Başvur</span>
      </div>
    </a>
  );
}
