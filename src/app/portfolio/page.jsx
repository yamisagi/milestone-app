import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose a gallery</h1>
      <div className={styles.gallery}>
        <Link href='/portfolio/websites' className={styles['gallery-item']}>
          <span className={styles['gallery-title']}>Web Sites</span>
        </Link>
        <Link href='/portfolio/mobile-apps' className={styles['gallery-item']}>
          <span className={styles['gallery-title']}>Mobile Apps</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
