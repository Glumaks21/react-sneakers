import cl from './CartCard.module.scss';
import useCart from '../../../hooks/useCart';

export default function CartItemCard({ item }) {
  const [cart, addToCart, removeFromCart] = useCart();

  const handleRemoveClick = () => {
    removeFromCart(item);
  };

  return (
    <div className={cl.content}>
      <img src={item.imgUrl} alt="Item" />
      <div className={cl.details}>
        <p>{item.title}</p>
        <span>{item.price}</span>
      </div>
      <button onClick={handleRemoveClick}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}
