import { useContext, useEffect, useState } from 'react';
import QuestContext from '../QuestContext';

export default function useCart() {
  const [questData, setQuestData] = useContext(QuestContext);
  const [cart, setCart] = useState(questData.cart);

  const add = (item) => {
    setCart([...cart, item]);
  };

  const remove = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  useEffect(() => {
    setCart(questData.cart);
  }, [questData.cart]);

  useEffect(() => {
    setQuestData({ ...questData, cart });
  }, [cart]);

  return [cart, add, remove];
}
