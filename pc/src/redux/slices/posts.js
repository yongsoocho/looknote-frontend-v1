import { createSlice } from '@reduxjs/toolkit';
import { getPostDetailUrl, getPostUrl, indexSearch } from '../actions/posts';

const initialState = {
  posts: [],
  isLoading: false,
  isRejuected: false,
  page: 1,
  type: 'normal',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    pageUp(state) {
      state.page += 1;
    },
    pageDn(state) {
      if (state.page === 1) state.page = 1;
      else state.page -= 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPostUrl.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.page = action.payload.count / Math.ceil(30);
        state.type = action.payload.type;
      })
      .addCase(getPostUrl.rejected, (state, action) => {
        state.posts = [];
      })
      .addCase(getPostDetailUrl.pending, (state, action) => {})
      .addCase(getPostDetailUrl.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.page = action.payload.count / Math.ceil(30);
        state.type = action.payload.type;
      })
      .addCase(getPostDetailUrl.rejected, (state, action) => {
        state.posts = [];
      })
      .addCase(indexSearch.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.page = action.payload.count / Math.ceil(30);
        state.type = action.payload.type;
      })
      .addMatcher(
        action => {
          return action.type.includes('/pending');
        },
        (state, action) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        action => {
          return action.type.includes('/rejected');
        },
        (state, action) => {
          state.isRejuected = true;
        },
      )
      .addDefaultCase((state, actin) => {});
  },
});

export const { pageUp, pageDn } = postsSlice.actions;

export default postsSlice.reducer;
