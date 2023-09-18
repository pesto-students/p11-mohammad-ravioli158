import React from "react";
import CartItem from "./CartItem";

const Cart = ({
  cartItems,
  onRemove,
  onQuantityDecrease,
  onQuantityIncrease,
}) => {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="border rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              onQuantityDecrease={onQuantityDecrease}
              onQuantityIncrease={onQuantityIncrease}
            />
          ))}
          <div className="mt-4">
            <p className="text-lg font-semibold">Total: ${getTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
