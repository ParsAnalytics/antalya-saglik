'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Tüm Haberler' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Thin Bar for Breaking/Links */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span>ANTALYA'NIN EN GÜVENİLİR SAĞLIK PORTALI</span>
          <div className={styles.topLinks}>
            <Link href="#">Künye</Link>
            <Link href="#">İletişim</Link>
          </div>
        </div>
      </div>

      {/* Main Nav Area */}
      <div className={styles.mainNav}>
        {/* Logo */}
        <Link href="/" className={styles.logoWrap}>
          <div className={styles.logoIcon}>A</div>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>ANTALYA SAĞLIK</span>
            <span className={styles.logoSubtitle}>Haber Portalı</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          ☰ MENÜ
        </button>
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
    </header>
  );
}
