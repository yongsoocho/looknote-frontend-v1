import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPostUrl = createAsyncThunk('posts/search', async (data = 1, thunkAPI) => {
  const {
    data: { posts, count },
  } = await axios.get(`https://api.looknote.co.kr/post/search?page=${data}`, { credentails: true });
  return { posts, count, type: 'normal' };
});

export const getPostDetailUrl = createAsyncThunk('post/detailsearch ', async (data, thunkAPI) => {
  const ct_ct_001 = thunkAPI.getState().category.ct_ct_001;
  const ct_ct_002 = thunkAPI.getState().category.ct_ct_002;
  const ct_ct_003 = thunkAPI.getState().category.ct_ct_003;
  const filters = thunkAPI.getState().category.filters;
  const details = String(filters.map(item => item.valueCode));
  const {
    data: { posts, count },
  } = await axios.post(`https://api.looknote.co.kr/post/search/tags`, {
    ct_ct_001,
    ct_ct_002,
    ct_ct_003,
    details,
  });
  return { posts: posts.map(item => item.post), count, type: 'filter' };
});

export const indexSearch = createAsyncThunk('posts/index', async (data = 1, thunkAPI) => {
  if (thunkAPI.getState().posts.type === 'normal') {
    const {
      data: { posts, count },
    } = await axios.get(`https://api.looknote.co.kr/post/search?page=${data}`, { credentails: true });
    return { posts, count, type: 'normal' };
  } else if (thunkAPI.getState().posts.type === 'filter') {
    const ct_ct_001 = thunkAPI.getState().category.ct_ct_001;
    const ct_ct_002 = thunkAPI.getState().category.ct_ct_002;
    const ct_ct_003 = thunkAPI.getState().category.ct_ct_003;
    const filters = thunkAPI.getState().category.filters;
    const details = String(filters.map(item => item.valueCode));
    const {
      data: { posts, count },
    } = await axios.post(`https://api.looknote.co.kr/post/search/tags?page=${data}`, {
      ct_ct_001,
      ct_ct_002,
      ct_ct_003,
      details,
    });
    return { posts: posts.map(item => item.post), count, type: 'filter' };
  }
});

// export const getPostIndexUrl = createAsyncThunk('posts/detailsearch ', async (data, thunkAPI) => {
//   const filters = thunkAPI.getState().category.filters;
//   const {
//     data: { posts, count },
//   } = await axios.post('https://api.befferent.co.kr/post', {
//     filters,
//   });
//   return { posts, count };
// });
