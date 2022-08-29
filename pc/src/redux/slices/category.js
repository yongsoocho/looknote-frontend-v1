import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [],
  ct_ct_001: '',
  ct_ct_002: '',
  ct_ct_003: '',
  top: '',
  middle: '',
  low: '',
  details: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addFilters(state, action) {
      const index = state.filters.findIndex(ele => {
        return ele.typeCode === action.payload.typeCode;
      });
      if (index === -1) {
        state.filters.push(action.payload);
      } else {
        state.filters[index] = action.payload;
      }
    },
    deleteFilters(state, action) {
      let result = [...state.filters];
      result.filter(element => action.payload !== element);
      state.filters = result;
    },
    emptyFilters(state, action) {
      state.filters = [];
    },
    addDetail(state, action) {
      const index = state.filters.findIndex(ele => {
        return ele.typeCode === action.payload.typeCode;
      });
      if (index === -1) {
        state.filters.push(action.payload);
      } else {
        state.filters[index] = action.payload;
      }
    },
    deleteDetail(state, action) {
      let result = [...state.details];
      result.filter(element => action.payload !== element);
      state.details = result;
    },
    emptyDetail(state, action) {
      state.details = [];
    },
    setCategory1(state, action) {
      state.ct_ct_001 = action.payload;
    },
    setCategory2(state, action) {
      state.ct_ct_002 = action.payload;
    },
    setCategory3(state, action) {
      state.ct_ct_003 = action.payload;
    },
    setTop(state, action) {
      state.top = action.payload;
    },
    setMid(state, action) {
      state.middle = action.payload;
    },
    setLow(state, action) {
      state.low = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  addFilters,
  deleteFilters,
  addDetail,
  deleteDetail,
  setCategory1,
  setCategory2,
  setCategory3,
  setTop,
  setMid,
  setLow,
  emptyDetail,
  emptyFilters,
} = categorySlice.actions;

export default categorySlice.reducer;
