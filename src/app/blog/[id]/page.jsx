import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </h1>
          <div className={styles.author}>
            <Image
              src='/avatar.png'
              alt=''
              width={50}
              height={50}
              className={styles.avatar}
            />
            <span className={styles.username}>Yamisagi</span>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia quod quos voluptas quas
            voluptatibus quidem doloribus quae. Quisquam voluptatum, quibusdam,
            voluptate, quia quod quos voluptas quas voluptatibus quidem
            doloribus quae. Quisquam voluptatum, quibusdam, voluptate, quia quod
            quos voluptas quas voluptatibus quidem doloribus quae. Quisquam
            voluptatum, quibusdam, voluptate, quia quod quos voluptas quas.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/web.png' alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, voluptate, quia quod quos voluptas quas
          voluptatibus quidem doloribus quae. Quisquam voluptatum, quibusdam,
          voluptate, quia quod quos voluptas quas voluptatibus quidem doloribus
          quae. Quisquam voluptatum, quibusdam, voluptate, quia quod quos
          voluptas quas voluptatibus quidem doloribus quae. Quisquam voluptatum,
          quibusdam, voluptate, quia quod quos voluptas quas voluptatibus quidem
          doloribus quae. Quisquam voluptatum, quibusdam, voluptate, quia quod
          quos voluptas quas voluptatibus quidem doloribus quae. Quisquam
          voluptatum, quibusdam, voluptate, quia quod quos voluptas quas.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
