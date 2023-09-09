import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  const images = [
    {
      id: 1,
      src: '/linkedin.png',
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yamisagi/',
    },
    {
      id: 2,
      src: '/twitter.png',
      alt: 'Twitter',
      href: 'https://twitter.com/_yamisagi',
    },
    {
      id: 3,
      src: '/github.png',
      alt: 'GitHub',
      href: 'https://github.com/yamisagi',
    },
  ];

  return (
    <div className={styles.container}>
      <footer>
        <p>© {year} yamisagi. All rights reserved.</p>
      </footer>
      <div className={styles['social']}>
        {images.map((image) => (
          <Link key={image.id} href={image.href} target='_blank'>
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={15}
              height={15}
              className={styles['social-icon']}
              quality={100}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
