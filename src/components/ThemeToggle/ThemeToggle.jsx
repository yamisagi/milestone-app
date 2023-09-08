import React from 'react';
import styles from './theme.module.css';
import { ThemeContext } from '../../../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, theme } = React.useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.toggle}>🌙</div>
      <div className={styles.toggle}>☀️</div>
      <div
        className={styles.ball}
        style={{
          transform: theme === 'light' ? 'translateX(0)' : 'translateX(22px)',
        }}
      />
    </div>
  );
};

export default ThemeToggle;
