import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { ThemeProvider } from './context/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const Anime = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='ui-theme'>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};
