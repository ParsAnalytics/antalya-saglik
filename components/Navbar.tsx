'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {

  return (
    <header className={styles.header}>
      {/* Top Thin Bar for Breaking/Links */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span>ANTALYA'NIN EN GÜVENİLİR SAĞLIK PORTALI</span>
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
      </div>
    </header>
  );
}
