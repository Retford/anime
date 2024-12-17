import { Route, Routes } from 'react-router-dom';
import { MangaPage } from '../pages/MangaPage';

export const MangaRouter = () => {
  return (
    <Routes>
      <Route path='genres' element={<MangaPage />} />
    </Routes>
  );
};
