import React from "react";

const CartItem = ({
  item,
  onRemove,
  onQuantityIncrease,
  onQuantityDecrease,
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-500">Price: ${item.price}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onQuantityDecrease(item.id, item.quantity)}
          className="text-gray-600 hover:text-gray-800 mr-2"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => onQuantityIncrease(item.id)}
          className="text-gray-600 hover:text-gray-800 ml-2"
        >
          +
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-600 hover:text-red-800 ml-4"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
