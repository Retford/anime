import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

export const MainPage = () => {
  return (
    <>
      <div className='grid grid-rows-[auto_1fr_auto] place-content-center h-screen'>
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
};
