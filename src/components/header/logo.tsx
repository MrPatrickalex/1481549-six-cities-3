import { Link } from 'react-router-dom';
import { Routes } from '../../routes/routes';

export default function Logo(): JSX.Element {
  return (
    <Link
      to={Routes.Main}
      className="header__logo-link header__logo-link--active"
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}
