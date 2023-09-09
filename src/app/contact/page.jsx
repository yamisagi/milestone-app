import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Btn/Button';
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Let&apos;s get in touch!</h1>
      <div className={styles.contact}>
        <div className={styles['image-container']}>
          <Image
            src='/contact.png'
            alt='Contact me'
            className={styles.image}
            fill
            lazyBoundary='200px'
          />
        </div>
        <form className={styles.form}>
          <div className={styles['form-group']}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows='5' cols='33' />
          </div>
          <Button path='#' text='Send' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
