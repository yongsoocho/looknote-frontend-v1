import React, { useCallback } from 'react';
import styles from '../css/FilterContent.module.css';
import { useDispatch } from 'react-redux';
import { addFilters, addDetail } from '../redux/slices/category';
import { detail } from '../json/newDetail';

const FilterContent = props => {
  const { type } = props;

  const dispatch = useDispatch();

  const addFilterContent = useCallback(
    item => {
      Promise.all([dispatch(addDetail(item)), dispatch(addFilters(item))]);
    },
    [dispatch],
  );

  if (type === 'de_se_000') {
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          {detail.slice(0, 4).map(item => (
            <div key={item.valueCode}>
              <input type="radio" name={item.typeCode} id={item.valueCode} className="filter_content_item" />
              <label htmlFor={item.valueCode} onClick={() => addFilterContent(item)}>
                {item.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (type === 'de_co_000') {
    return (
      <div className={styles.container}>
        {detail.slice(5, 35).map(item => (
          <div
            key={item.valueCode}
            className={`filter_content_item ${styles.colors} }`}
            onClick={e => addFilterContent(item)}
          >
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    );
  } else if (type === 'de_tl_000') {
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          {detail.slice(36, 39).map(item => (
            <div key={item.valueCode}>
              <input type="radio" name="length" id={item.valueCode} className="filter_content_item" />
              <label htmlFor={item.valueCode} onClick={e => addFilterContent(item)}>
                {item.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (type === 'de_sl_000') {
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          {detail.slice(40, 44).map(item => (
            <div key={item.valueCode}>
              <input type="radio" name="sleevelength" id={item.valueCode} className="filter_content_item" />
              <label htmlFor={item.valueCode} onClick={e => addFilterContent(item)}>
                {item.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (type === 'dt_bl_000') {
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          {detail.slice(45, 49).map(item => (
            <div key={item.valueCode}>
              <input type="radio" name="sleevelength" id={item.valueCode} className="filter_content_item" />
              <label htmlFor={item.valueCode} onClick={e => addFilterContent(item)}>
                {item.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (type === 'de_pt_000') {
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          {detail.slice(70, 82).map(item => (
            <div key={item.valueCode}>
              <input type="radio" name="pattern" id={item.valueCode} className="filter_content_item" />
              <label htmlFor={item.valueCode} onClick={e => addFilterContent(item)}>
                {item.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (type === 'de_mt_000') {
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          {detail.slice(50, 65).map(item => (
            <div key={item.valueCode}>
              <input type="radio" name="material" id={item.value} className="filter_content_item" />
              <label htmlFor={item.value} onClick={e => addFilterContent(item)}>
                {item.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (type === 'dt_ol_000') {
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          {detail.slice(66, 69).map(item => (
            <div key={item.valueCode}>
              <input type="radio" name="onepiecelength" id={item.valueCode} className="filter_content_item" />
              <label htmlFor={item.valueCode} onClick={e => addFilterContent(item)}>
                {item.value}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <span></span>;
  }
};

export default React.memo(FilterContent);
