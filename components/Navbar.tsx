'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/kategori/evde-bakim', label: 'Evde Bakım' },
  { href: '/kategori/hastane', label: 'Hastane' },
  { href: '/kategori/universite', label: 'Üniversite Tıbbı' },
  { href: '/kategori/saglik', label: 'Genel Sağlık' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🏥</span>
          <span className={styles.logoText}>
            Antalya<span className={styles.logoAccent}>Sağlık</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Live Badge + Hamburger */}
        <div className={styles.navRight}>
          <div className={styles.liveBadge}>
            <span className={styles.liveDot} />
            CANLI
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <span className={menuOpen ? styles.barOpen : styles.bar} />
            <span className={menuOpen ? styles.barOpenMid : styles.bar} />
            <span className={menuOpen ? styles.barOpenLast : styles.bar} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
