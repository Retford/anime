import { Navigate, Route, Routes } from 'react-router-dom';
import { GenrePage } from '../genres/pages/GenrePage';
import { MangaPage } from '../pages/MangaPage';

export const MangaRouter = () => {
  return (
    <Routes>
      <Route index path='genres' element={<GenrePage />} />
      <Route path=':mangaId' element={<MangaPage />} />

      <Route path='*' element={<Navigate to='genres' />} />
    </Routes>
  );
};
