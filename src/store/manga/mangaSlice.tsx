import { createSlice } from '@reduxjs/toolkit';

export const mangaSlice = createSlice({
  name: 'manga',
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = mangaSlice.actions;
