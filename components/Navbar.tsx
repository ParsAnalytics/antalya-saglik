'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {

  return (
    <header className={styles.header}>
      {/* Background Image & Overlay */}
      <div className={styles.headerBg} />
      <div className={styles.headerOverlay} />
      
      {/* Main Nav Area */}
      <div className={styles.mainNav}>
        {/* Masthead Logo */}
        <Link href="/" className={styles.logoWrap}>
          <div className={styles.logoText}>
            <h1 className={styles.logoTitle}>ANTALYA SAĞLIK</h1>
            <span className={styles.logoSubtitle}>Türkiye'nin En Güvenilir Sağlık Haber Portalı</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
