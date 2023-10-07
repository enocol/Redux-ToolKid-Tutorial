import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
});

export default cardSlice.reducer;
