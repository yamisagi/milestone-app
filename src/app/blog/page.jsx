import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href='/blog/1' className={styles['blog-container']}>
        <div className={styles['blog-image']}>
          <Image
            className={styles.image}
            src='/blog.png'
            alt='Blog Image'
            width={300}
            height={250}
          />
        </div>
        <div className={styles['blog-content']}>
          <h3 className={styles['blog-title']}>Blog Title</h3>
          <p className={styles['blog-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Link>
      <Link href='/blog/1' className={styles['blog-container']}>
        <div className={styles['blog-image']}>
          <Image
            className={styles.image}
            src='/blog.png'
            alt='Blog Image'
            width={300}
            height={250}
          />
        </div>
        <div className={styles['blog-content']}>
          <h3 className={styles['blog-title']}>Blog Title</h3>
          <p className={styles['blog-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Link>
      <Link href='' className={styles['blog-container']}>
        <div className={styles['blog-image']}>
          <Image
            className={styles.image}
            src='/blog.png'
            alt='Blog Image'
            width={300}
            height={250}
          />
        </div>
        <div className={styles['blog-content']}>
          <h3 className={styles['blog-title']}>Blog Title</h3>
          <p className={styles['blog-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Link>
      <Link href='/blog/1' className={styles['blog-container']}>
        <div className={styles['blog-image']}>
          <Image
            className={styles.image}
            src='/blog.png'
            alt='Blog Image'
            width={300}
            height={250}
          />
        </div>
        <div className={styles['blog-content']}>
          <h3 className={styles['blog-title']}>Blog Title</h3>
          <p className={styles['blog-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
