import { AnimeRouter } from '@/anime/router/AnimeRouter';
import { MangaRouter } from '@/manga/router/MangaRouter';
import { MainPage } from '@/pages/MainPage';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/anime/*' element={<AnimeRouter />} />
      <Route path='/manga/*' element={<MangaRouter />} />
    </Routes>
  );
};
