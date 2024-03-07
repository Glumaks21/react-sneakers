import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import useLocalStorage from './hooks/useLocalStorage';
import QuestContext from './QuestContext';
import AuthContext from './AuthContenxt';

export default function App() {
  const [cart, setCart] = useLocalStorage('cart');
  const [auth, setAuth] = useLocalStorage('auth');

  const defaultQuestData = { cart: cart || [], currencySymbol: '₴' };
  const [questData, setQuestData] = useState(defaultQuestData);

  useEffect(() => setCart(questData.cart), [questData.cart]);

  return (
    <QuestContext.Provider value={[questData, setQuestData]}>
      <AuthContext.Provider value={[auth, setAuth]}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </QuestContext.Provider>
  );
}
