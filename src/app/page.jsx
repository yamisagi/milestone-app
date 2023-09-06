import React from 'react';
import Hero from 'public/hero.png';
import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button/Button';

// If we import Image like this, we dont need to give width and height

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>Hi, I&apos;m Yamisagi</h1>
        <p className={styles.description}>
          I&apos;m a Front End and Flutter Developer
        </p>
        <Button text='See My Work' path='/portfolio' />
      </section>
      <section className={styles.section}>
        <Image src={Hero} alt='Hero' className={styles.hero} />
      </section>
    </div>
  );
}
