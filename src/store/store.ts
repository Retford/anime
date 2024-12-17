import { configureStore } from '@reduxjs/toolkit';
import { animeSlice } from './anime/animeSlice';
import { mangaSlice } from './manga/mangaSlice';

export const store = configureStore({
  reducer: {
    anime: animeSlice.reducer,
    manga: mangaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
