import React, { useEffect } from 'react';
import styles from '../css/About.module.css';
// import Filter from '../components/Filter';
import Posts from '../components/Posts';
import LinkBar from '../components/LinkBar';
import NewFilter from '../components/NewFilter';
import { useDispatch } from 'react-redux';
import { getPostUrl } from '../redux/actions/posts';

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostUrl());
  });

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.link_container}>
          <img src="/wordmark.png" alt="wordmark" className={styles.wordmark} />
          <LinkBar page="about" />
        </div>
        <div>
          {/* <Filter /> */}
          <NewFilter />
        </div>
        <div>
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default About;
