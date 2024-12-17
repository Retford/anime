import { Navigate, Route, Routes } from 'react-router-dom';
import { GenrePage } from '../genres/pages/GenrePage';
import { AnimePage } from '../pages/AnimePage';

export const AnimeRouter = () => {
  return (
    <Routes>
      <Route index path='genres' element={<GenrePage />} />
      <Route path=':animeId' element={<AnimePage />} />

      <Route path='*' element={<Navigate to='genres' />} />
    </Routes>
  );
};
