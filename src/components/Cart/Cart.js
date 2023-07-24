import { useContext } from "react";
import CartContext from "../../store/cart-contect";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = ({ onClose }) => {

  const cartCtx = useContext(CartContext);

  console.log(cartCtx);

  const selectedCartItems = cartCtx.items;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  }

  const cartItems = selectedCartItems.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  return (
    <Modal onClose={onClose}>
      <ul className={classes["cart-items"]}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {selectedCartItems.length > 0 &&
        <button className={classes.button}>Order</button> }
      </div>
    </Modal>
  );
};

export default Cart;
