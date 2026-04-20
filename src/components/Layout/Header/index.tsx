import './index.css';

import { Link } from '../../Link';

export const Header = () => {
  return (
    <header className='header'>
      <Link className='logo' href='/'>Velouria</Link>
      <ul className='header__items'>
        <li>
          <Link className='header__items--item' href='/'>Home</Link>
        </li>
        <li>
          <Link className='header__items--item' href='/equipe'>Equipe</Link>
        </li>
        <li>
          <Link className='header__items--item' href='/fale-conosco'>Contato</Link>
        </li>
        <li>
          <Link className='header__items--item' href='/sobre'>Sobre</Link>
        </li>
      </ul>
    </header>
  );
};
