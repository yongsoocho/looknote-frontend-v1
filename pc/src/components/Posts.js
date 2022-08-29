import React, { useCallback, useEffect, useState } from 'react';
import styles from '../css/Posts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPostDetailUrl, indexSearch } from '../redux/actions/posts';
import Post from '../mixins/Posts';
import { throttle } from 'lodash';

const Posts = () => {
  const filters = useSelector(state => state.category.filters);
  const top = useSelector(state => state.category.top);
  const middle = useSelector(state => state.category.middle);
  const low = useSelector(state => state.category.low);
  const posts = useSelector(state => state.posts.posts);
  const page = useSelector(state => Math.ceil(state.posts.page));
  const [translater, setTranslater] = useState(0);

  const indexes = new Array(page).fill(0);

  const dispatch = useDispatch();

  const onClickSearch = useCallback(() => {
    if (document.querySelectorAll(`.${styles.indexer}`).length > 1) {
      const indexer = document.querySelectorAll(`.${styles.indexer}`);
      indexer[0].classList.add(`${styles.active}`);
      indexer.forEach(element => {
        element.classList.remove(`${styles.active}`);
      });
    }
    return dispatch(getPostDetailUrl());
  }, [dispatch, page]);

  const onClickLeft = useCallback(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`);
    if (translater > 0) {
      return;
    } else {
      setTranslater(translater + 120);
      return (wrapper.style.transform = `translateX(${translater}px)`);
    }
  }, [translater]);

  const onClickRight = useCallback(() => {
    const wrapper = document.querySelector(`.${styles.wrapper}`);
    if (translater < -wrapper.scrollWidth + 200) {
      return;
    } else {
      setTranslater(translater - 120);
      wrapper.style.transform = `translateX(${translater}px)`;
    }
  }, [translater]);

  useEffect(() => {
    if (document.querySelectorAll(`.${styles.indexer}`).length > 1) {
      const indexer = document.querySelectorAll(`.${styles.indexer}`);
      indexer[0].classList.add(`${styles.active}`);
      indexer.forEach(element => {
        element.addEventListener('click', e => {
          indexer.forEach(ele => ele.classList.remove(`${styles.active}`));
          element.classList.add(`${styles.active}`);
          return dispatch(indexSearch(e.target.innerText));
        });
      });
    }
  }, [dispatch, page]);

  return (
    <div className={styles.container}>
      <div className={styles.filter_filters}>
        <span>검색 필터 |</span>
        {top ? <span className={styles.filter_filter}>#{top}</span> : ''}
        {middle ? <span className={styles.filter_filter}>#{middle}</span> : ''}
        {low ? <span className={styles.filter_filter}>#{low}</span> : ''}
        {filters.map((item, index) => {
          return (
            <span className={styles.filter_filter} key={index}>
              #{item.value}
            </span>
          );
        })}
        <div className={styles.search} onClick={() => onClickSearch()}>
          <span>검색하기</span>
        </div>
      </div>
      <div className={styles.post_container}>
        {posts.length === 0
          ? ''
          : posts.map(item => {
              return <Post key={item.id} id={item.id} imageURL={item.imageURL} />;
            })}
      </div>
      {posts.length === 0 ? <h1 style={{ textAlign: 'center' }}>검색 결과가 없어요 😢</h1> : ''}
      <div className={styles.index_container}>
        <i className="fas fa-chevron-left" onClick={onClickLeft}></i>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            {page !== 0
              ? indexes.map((item, index) => {
                  return (
                    <span key={index} className={styles.indexer}>
                      {index + 1}
                    </span>
                  );
                })
              : ''}
          </div>
        </div>
        <i className="fas fa-chevron-right" onClick={onClickRight}></i>
      </div>
    </div>
  );
};

export default React.memo(Posts);
