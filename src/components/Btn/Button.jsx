import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

const Button = ({ text, path }) => {
  return (
    <Link href={path}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};

export default Button;
