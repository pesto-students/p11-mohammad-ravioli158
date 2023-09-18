import { useDispatch, useSelector } from "react-redux";
import {
  productAdded,
  productRemoved,
  quantityDecreased,
  quantityIncreased,
} from "./store/cart";
import Product from "./components/Product";
import Cart from "./components/Cart";
const App = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      dispatch(quantityIncreased(product.id));
    } else {
      dispatch(productAdded({ ...product, quantity: 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    dispatch(productRemoved(itemId));
  };

  const increaseQuantity = (itemId) => {
    dispatch(quantityIncreased(itemId));
  };
  const decreaseQuantity = (itemId, quantity) => {
    if (quantity === 1) dispatch(productRemoved(itemId));
    else dispatch(quantityDecreased(itemId));
  };

  const products = [
    { id: 1, name: "Product 1", price: 10.0 },
    { id: 2, name: "Product 2", price: 15.0 },
    { id: 3, name: "Product 3", price: 20.0 },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart
        cartItems={cartItems}
        onRemove={removeFromCart}
        onQuantityIncrease={increaseQuantity}
        onQuantityDecrease={decreaseQuantity}
      />
    </div>
  );
};

export default App;
