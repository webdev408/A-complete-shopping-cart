import { useState } from "react";

/* eslint-disable react/prop-types */
const Cart = ({ cart, setCart }) => {
  const [checkoutStatus, setCheckoutStatus] = useState("");

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    // here you would normally integrate with a payment gateway
    // for simplicity, we will just that the checkut process always succeeds
    setCheckoutStatus("Your order has been placed successfully!");
    // clear the cart after successful checkout
    setCart([]);
  };

  const increaseQty = (item) => {
    const newCart = [...cart];
    const index = newCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      newCart[index].quantity++;
      setCart(newCart);
    }
  };

  const decreaseQty = (item) => {
    const newCart = [...cart];
    const index = newCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      newCart[index].quantity--;
      setCart(newCart);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Your Cart</h2>
      {cart.map((item, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center"
        >
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} className="card-img-top" />
          <p>Price: ${item.price}</p>
          {/* Add more details as needed */}
          <p>Quantity: {item.quantity}</p>
          <button
            className="btn btn-sm btn-success"
            onClick={() => increaseQty(item)}
          >
            +
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => decreaseQty(item)}
          >
            -
          </button>
        </div>
      ))}
      <div className="container">
        <h3 className="my-4 text-center text-info fst-italic">
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
      </div>
      {/* checkout */}
      <div className="container">
        <button className="btn btn-dark" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
      {checkoutStatus && <p>{checkoutStatus}</p>}
    </div>
  );
};

export default Cart;
