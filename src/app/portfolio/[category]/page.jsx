import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Btn/Button';
import Image from 'next/image';
const Category = ({ params }) => {
  const { category } = params;
  const upperCaseCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  // TODO: Add dynamic data
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{upperCaseCategory}</h1>
      <div className={styles['category-container']}>
        <div className={styles['category-content']}>
          <h2 className={styles['category-title']}>Title</h2>
          <p className={styles['category-text']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus
            voluptatibus, quod quas voluptate quibusdam, quia, quos voluptates
            voluptatibus voluptatibus, quod quas voluptate
          </p>
          <Button text='View Project' path='#' />
        </div>
        <div className={styles['category-image']}>
          <Image
            className={styles.image}
            src='/web.png'
            alt='Web Project'
            fill
          />
        </div>
      </div>
      <div className={styles['category-container']}>
        <div className={styles['category-content']}>
          <h2 className={styles['category-title']}>Title</h2>
          <p className={styles['category-text']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus
            voluptatibus, quod quas voluptate quibusdam, quia, quos voluptates
            voluptatibus voluptatibus, quod quas voluptate
          </p>
          <Button text='View Project' path='#' />
        </div>
        <div className={styles['category-image']}>
          <Image
            className={styles.image}
            src='/web.png'
            alt='Web Project'
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
