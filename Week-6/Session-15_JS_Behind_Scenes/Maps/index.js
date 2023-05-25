// Creating a WeakMap to store product views
const productViews = new WeakMap();

// Creating a WeakSet to store cart items
const cartItems = new WeakSet();

// Function to increment product views
function incrementProductViews(productId) {
  if (productViews.has(productId)) {
    // If the product ID exists in the WeakMap, increment the count by 1
    productViews.set(productId, productViews.get(productId) + 1);
  } else {
    // If the product ID doesn't exist, add it to the WeakMap with an initial count of 1
    productViews.set(productId, 1);
  }
}

// Function to add a product to the cart
function addToCart(productId) {
  if (cartItems.has(productId)) {
    return "Product already in cart";
  } else {
    cartItems.add(productId);
    return "Product added to cart";
  }
}

// Testing the functions
const product1 = { id: 1, name: "Product 1" };
const product2 = { id: 2, name: "Product 2" };

incrementProductViews(product1); // Incrementing views for product 1
incrementProductViews(product1); // Incrementing views for product 1 again
incrementProductViews(product2); // Incrementing views for product 2

console.log(productViews.get(product1)); // Output: 2
console.log(productViews.get(product2)); // Output: 1


console.log(addToCart(product1)); // Output: Product added to cart
console.log(addToCart(product1)); // Output: Product already in cart
console.log(addToCart(product2)); // Output: Product added to cart
