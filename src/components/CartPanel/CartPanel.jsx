import { useContext, useMemo } from 'react';
import CartItemCard from './CartCard';
import QuestContext from '../../QuestContext';
import cl from './CartPanel.module.scss';

export default function CartPanel({ isOpen, close }) {
  const [userData] = useContext(QuestContext);
  const sum = useMemo(
    () => userData.cart.reduce((sum, item) => (sum += item.price), 0),
    [userData.cart],
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={close} className={cl.overlay}>
      <aside onClick={(e) => e.stopPropagation()} className={cl.content}>
        <h2>Cart</h2>
        {!userData.cart.length ? (
          <p>Nothing...</p>
        ) : (
          <ul className={cl.cart_content}>
            {userData.cart.map((item, index) => (
              <li key={index}>
                <CartItemCard item={item} />
              </li>
            ))}
          </ul>
        )}
        <div className={cl.cart_total}>
          <div>
            <span>Totally:</span>
            <span className={cl.cart_total__separator}></span>
            <strong>{sum}</strong>
          </div>
        </div>
        <button className={cl.order_btn}>
          Make an order
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </aside>
    </div>
  );
}
