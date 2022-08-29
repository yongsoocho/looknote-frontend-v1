import React from 'react';
import styles from '../css/Main.module.css';
import LinkBar from '../components/LinkBar';
import Widget from '../components/Widget';

const Main = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.link_container}>
          <img src="/wordmark.png" alt="wordmark" className={styles.wordmark} />
          <LinkBar page="main" />
        </div>
        <div>
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Main;
