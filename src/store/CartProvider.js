import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type == "ADD_CART_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemtoCartHandler = (id) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: id });
  };
  const removeItemtoCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", item: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemtoCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
