import React, { useState, useCallback } from 'react';
import '../css/NewFilter.css';
import { ct_ct_001 } from './../json/ct_ct_001';
import { useEffect } from 'react';
import { toggleActive } from '../hooks/toggleActive';
import { useDispatch } from 'react-redux';
import {
  emptyDetail,
  emptyFilters,
  setCategory1,
  setCategory2,
  setCategory3,
  setLow,
  setMid,
  setTop,
} from '../redux/slices/category';
import { ct_ct_002 } from './../json/ct_ct_002';
import { ct_ct_003 } from './../json/ct_ct_003';
import { onepiece, outer, pants, top } from './../json/details';
import FilterContent from '../mixins/FilterContent';

const NewFilter = () => {
  const dispatch = useDispatch();
  const [filter2, setFilter2] = useState([]);
  const [filter3, setFilter3] = useState([]);
  const [detail, setDetail] = useState([
    {
      type: '계절',
      typeCode: 'de_se_000',
    },
    {
      type: '컬러',
      typeCode: 'de_co_000',
    },
    {
      type: '기장',
      typeCode: 'de_tl_000',
    },
    {
      type: '소매 기장',
      typeCode: 'de_sl_000',
    },
    {
      type: '하의 기장',
      typeCode: 'dt_bl_000',
    },
    {
      type: '소재',
      typeCode: 'de_mt_000',
    },
    {
      type: '원피스 기장',
      typeCode: 'dt_ol_000',
    },
    {
      type: '패턴',
      typeCode: 'de_pt_000',
    },
  ]);
  const [type, setType] = useState('');

  useEffect(() => {
    const category1 = document.querySelectorAll('li.new_filter_ct_ct_001_items');
    category1.forEach(item => {
      item.addEventListener('click', () => {
        toggleActive(item, category1);
      });
    });

    const category2 = document.querySelectorAll('li.new_filter_ct_ct_002_items');
    category2.forEach(item => {
      item.addEventListener('click', () => {
        toggleActive(item, category2);
      });
    });

    const category3 = document.querySelectorAll('li.new_filter_ct_ct_003_items');
    category3.forEach(item => {
      item.addEventListener('click', () => {
        toggleActive(item, category3);
      });
    });

    const detailfilter = document.querySelectorAll('li.new_filter_details_items');
    detailfilter.forEach(item => {
      item.addEventListener('click', () => {
        toggleActive(item, detailfilter);
      });
    });
  }, [dispatch, filter2, filter3, detail]);

  const onClickSetFilter = useCallback(
    (id, value) => {
      if (id === 'ot_ot_000') {
        Promise.all([
          setFilter2(ct_ct_002.slice(0, 3)),
          setFilter3([]),

          setType(''),
          dispatch(setCategory1(id)),
          dispatch(setCategory2()),
          dispatch(setCategory3()),
          dispatch(setTop(value)),
          dispatch(setMid()),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'tp_tp_000') {
        Promise.all([
          setFilter2(ct_ct_002.slice(3, 7)),
          setFilter3([]),

          setType(''),
          dispatch(setCategory1(id)),
          dispatch(setCategory2()),
          dispatch(setCategory3()),
          dispatch(setTop(value)),
          dispatch(setMid()),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_bt_000') {
        Promise.all([
          setFilter2(ct_ct_002.slice(7, 10)),
          setFilter3([]),

          setType(''),
          dispatch(setCategory1(id)),
          dispatch(setCategory2()),
          dispatch(setCategory3()),
          dispatch(setTop(value)),
          dispatch(setMid()),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'op_op_000') {
        Promise.all([
          setFilter2(ct_ct_002.slice(10, 12)),
          setFilter3([]),

          setType(''),
          dispatch(setCategory1(id)),
          dispatch(setCategory2()),
          dispatch(setCategory3()),
          dispatch(setTop(value)),
          dispatch(setMid()),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_000') {
        // ct_ct_002
        Promise.all([
          setFilter3(ct_ct_003.slice(0, 11)),

          setType(''),
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_ct_000') {
        Promise.all([
          setFilter3(ct_ct_003.slice(11, 13)),

          setType(''),
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_pd_000') {
        Promise.all([
          setFilter3(ct_ct_003.slice(13, 16)),

          setType(''),
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'tp_sw_000') {
        Promise.all([
          setFilter3(ct_ct_003.slice(16, 18)),

          setType(''),
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'st_sh_000') {
        Promise.all([
          setFilter3(ct_ct_003.slice(18, 20)),

          setType(''),
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'tp_ts_000') {
        Promise.all([
          setFilter3([]),

          setType(''),
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'tp_kt_000') {
        Promise.all([
          setFilter3(ct_ct_003.slice(20, 24)),

          setType(''),
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_pt_000') {
        Promise.all([
          setFilter3(ct_ct_003.slice(24, 30)),

          setType(''),
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_lg_000') {
        Promise.all([
          setFilter3([]),

          setType(''),
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_sk_000') {
        Promise.all([
          setFilter3(ct_ct_003.slice(30, 33)),

          setType(''),
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'op_ds_000') {
        setFilter3(ct_ct_003.slice(33, 36));

        Promise.all([
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'op_js_000') {
        setFilter3(ct_ct_003.slice(36, 38));

        Promise.all([
          dispatch(setCategory2(id)),
          dispatch(setCategory3()),
          dispatch(setMid(value)),
          dispatch(setLow()),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_001') {
        // ct_ct_003
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_002') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_003') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_004') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_005') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_006') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_007') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_008') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_009') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_010') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_jk_011') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_ct_001') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_ct_002') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_pd_001') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_pd_002') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'ot_pd_003') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'tp_sw_001') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'tp_sw_002') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'st_sh_001') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'st_sh_002') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'tp_kt_001') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'tp_kt_002') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'tp_kt_003') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'tp_kt_004') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_pt_001') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_pt_002') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_pt_003') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_pt_004') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_pt_005') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_pt_006') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_sk_001') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_sk_002') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'bt_sk_003') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'op_ds_001') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'op_ds_002') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'op_ds_003') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'op_js_001') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      } else if (id === 'op_js_002') {
        Promise.all([
          dispatch(setCategory3(id)),
          dispatch(setLow(value)),
          dispatch(emptyDetail()),
          dispatch(emptyFilters()),
        ]);
      }
    },
    [dispatch],
  );

  const onClickSetFilterContent = useCallback(typeCode => {
    setType(typeCode);
  }, []);

  return (
    <div className="new_filter_container">
      <div className="new_filter_ct_ct_001">
        <ul className="new_filter_ct_ct_001_list">
          {ct_ct_001.map(item => (
            <li
              className="new_filter_ct_ct_001_items"
              key={item.valueCode}
              id={item.valueCode}
              onClick={() => onClickSetFilter(item.valueCode, item.value)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="new_filter_ct_ct_002">
        <ul className="new_filter_ct_ct_002_list">
          {filter2.map(item => (
            <li
              className="new_filter_ct_ct_002_items"
              key={item.valueCode}
              id={item.valueCode}
              onClick={() => onClickSetFilter(item.valueCode, item.value)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="new_filter_ct_ct_003">
        <ul className="new_filter_ct_ct_003_list">
          {filter3.map(item => (
            <li
              className="new_filter_ct_ct_003_items"
              key={item.valueCode}
              id={item.valueCode}
              onClick={() => onClickSetFilter(item.valueCode, item.value)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="new_filter_details">
        <ul className="new_filter_details_list">
          {detail.map((item, index) => (
            <li
              className="new_filter_details_items"
              key={index + '_' + item.typeCode}
              id={item.typeCode}
              onClick={() => onClickSetFilterContent(item.typeCode, item.value)}
            >
              {item.type}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <FilterContent type={type} />
      </div>
    </div>
  );
};

export default React.memo(NewFilter);
