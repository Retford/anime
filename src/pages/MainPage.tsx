import { ModeToggle } from '@/components/theme/ModeToggle';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>gaa</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <ModeToggle />
      </main>
      <footer></footer>
    </>
  );
};
