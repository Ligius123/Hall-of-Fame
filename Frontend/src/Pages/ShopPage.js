import { useState } from "react";

import Header from "../Components/Layout/Header";
import Articles from "../Components/Articles/Articles";
import Cart from "../Components/Cart/Cart";
import CartProvider from "../store/CartProvider";
const ShopPage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <div>
        <Articles />
      </div>
    </CartProvider>
  );
};

export default ShopPage;
