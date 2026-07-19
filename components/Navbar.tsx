'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.mainNav}>
        
        {/* Left: Logo */}
        <Link href="/" className={styles.logoWrap}>
          <div className={styles.logoSvg}>
            {/* Custom SVG Logo mimicking Stethoscope + Heart */}
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
              <path d="M50 10 C20 10 10 30 10 50 C10 70 20 90 50 90 C80 90 90 70 90 50" fill="none" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" />
              <circle cx="90" cy="50" r="8" fill="none" stroke="#2563eb" strokeWidth="6" />
              <path d="M40 45 C40 35 55 35 50 50 C45 60 50 70 50 70" fill="none" stroke="#2563eb" strokeWidth="6" strokeLinecap="round"/>
              <path d="M50 40 C65 25 80 40 50 65 C20 40 35 25 50 40 Z" fill="#f97316" />
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>ANTALYA SAĞLIK</span>
            <span className={styles.logoSubtitle}>GÜNDEMİ</span>
            <span className={styles.logoSubText}>Haber & Güncel</span>
          </div>
        </Link>

        {/* Center: Nav Links */}
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>ANA SAYFA</Link>
          <div className={styles.dropdown}>
            <span className={styles.navLink}>HABERLER</span>
          </div>
          <div className={styles.dropdown}>
            <span className={styles.navLink}>KATEGORİLER</span>
          </div>
          <Link href="#" className={styles.navLink}>İLETİŞİM</Link>
        </nav>

        {/* Right: Social Icons */}
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54A8.496 8.496 0 0 0 22.162 5.656z"/></svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>
    </header>
  );
}
