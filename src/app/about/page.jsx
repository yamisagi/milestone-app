import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Btn/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <Image
          src='/about.png'
          className={styles.image}
          alt='About'
          fill
          quality={100}
        />
        <div className={styles['image-overlay']}>
          <h1 className={styles['image-title']}>
            Front End & Flutter Developer
          </h1>
          <p className={styles['image-subtitle']}>
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>
      </div>
      <section className={styles['text-container']}>
        <div className={styles['text-content-container']}>
          <h1 className={styles['text-title']}>About Me</h1>
          <p className={styles['text-content']}>
            I am a Front End Developer and Flutter Developer based in Turkey. I
            have serious passion for UI effects, animations and creating
            intuitive, dynamic user experiences.
            <br />I have been working as a Front-end developer for 1 year. I
            have experience in developing websites and single page applications
            using React.js, Next.js and Flutter.
          </p>
        </div>
        <div className={styles['text-content-container']}>
          <h1 className={styles['text-title']}>My Skills</h1>
          <p className={styles['text-content']}>
            I have experience in developing websites and single page
            applications & SSR using React.js, Next.js and Flutter.
            <br />
            <br /> - React.js
            <br /> - Next.js
            <br /> - Tailwind CSS
            <br /> - TypeScript
            <br /> - Flutter
            <br /> - ...
          </p>
          <Button text='View My Work' path='/work' />
        </div>
      </section>
    </div>
  );
};

export default About;
