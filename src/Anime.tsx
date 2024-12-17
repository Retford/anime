import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { ThemeProvider } from './context/ThemeProvider';

export const Anime = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='ui-theme'>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};
