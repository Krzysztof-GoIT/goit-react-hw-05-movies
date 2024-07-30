import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Trending Movies
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Search Movies
        </NavLink>
      </nav>
    </header>
  );
};
