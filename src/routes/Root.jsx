import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import CartPanel from '../components/CartPanel';

export default function Root() {
  const [isCartOpen, setOpenCart] = useState(false);

  return (
    <>
      <CartPanel isOpen={isCartOpen} close={() => setOpenCart(false)} />
      <Header openCart={() => setOpenCart(true)} />
      <Outlet />
    </>
  );
}
