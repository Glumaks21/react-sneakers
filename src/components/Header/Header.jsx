import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import QuestContext from '../../QuestContext';
import AuthContext from '../../AuthContenxt';
import cl from './Header.module.scss';

export default function Header({ openCart }) {
  const [questData] = useContext(QuestContext);
  const [auth] = useContext(AuthContext);

  const cartItemPrice = useMemo(
    () => questData.cart.reduce((sum, item) => (sum += item.price), 0),
    [questData.cart],
  );

  return (
    <header>
      <Link to="/">
        <div className={cl.logo}>
          <img src="/img/icons/logo.svg" alt="Logo" />
          <div>
            <h2>React Sneakers</h2>
            <p>Shop of best shoes</p>
          </div>
        </div>
      </Link>

      <div className={cl.tabs}>
        <div onClick={openCart}>
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>{cartItemPrice}</span>
        </div>
        <div>
          <span className="material-symbols-outlined">star</span>
          <Link to="/favorites">Favorites</Link>
        </div>
        <div>
          <span className="material-symbols-outlined">account_circle</span>
          {auth ? <Link to="/profile">{auth.username}</Link> : <Link to="/auth">Login</Link>}
        </div>
      </div>
    </header>
  );
}
