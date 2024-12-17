import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Anime } from './Anime.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Anime />
  </StrictMode>
);
