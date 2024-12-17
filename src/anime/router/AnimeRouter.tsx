import { Route, Routes } from 'react-router-dom';
import { GenrePage } from '../genres/pages/GenrePage';

export const AnimeRouter = () => {
  return (
    <Routes>
      <Route path='genres' element={<GenrePage />} />
    </Routes>
  );
};
