import { Route, Routes } from 'react-router-dom';

import { AnimeRouter } from '@/anime/router/AnimeRouter';

import { MangaRouter } from '@/manga/router/MangaRouter';

import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/anime/*' element={<AnimeRouter />} />
      <Route path='/manga/*' element={<MangaRouter />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
