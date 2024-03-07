import Button from '../UI/Button';
import cl from './Card.module.scss';

export default function Card({ sneakers, isFavorite, addToFavorite, isAdded, addToCart }) {
  return (
    <div className={cl.content}>
      <span
        onClick={() => addToFavorite(sneakers)}
        style={isFavorite ? { color: 'pink' } : {}}
        className="material-symbols-outlined">
        favorite
      </span>
      <img src={sneakers.imgUrl} />
      <h3>{sneakers.title}</h3>
      <div className={cl.details}>
        <div className={cl.details__price}>
          <span>Price</span>
          <strong>{sneakers.price}</strong>
        </div>
        <Button onClick={() => addToCart(sneakers)} className="btn">
          <span className="material-symbols-outlined">{isAdded ? 'done' : 'add'}</span>
        </Button>
      </div>
    </div>
  );
}
