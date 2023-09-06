'use client';

import React from 'react';
import Link from 'next/link';
import styles from './nav.module.css';
const links = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Portfolio',
    path: '/portfolio',
  },
  {
    id: 3,
    name: 'Blog',
    path: '/blog',
  },
  {
    id: 4,
    name: 'About',
    path: '/about',
  },
  {
    id: 5,
    name: 'Contact',
    path: '/contact',
  },
  {
    id: 6,
    name: 'Dashboard',
    path: '/dashboard',
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        yamisagi
      </Link>
      <div className={styles['nav-links']}>
        {links.map((link) => (
          <Link key={link.id} href={link.path} className={styles['nav-link']}>
            {link.name}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => {}}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
