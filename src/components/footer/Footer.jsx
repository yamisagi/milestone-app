import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} yamisagi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
