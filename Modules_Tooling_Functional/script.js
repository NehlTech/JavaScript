// import ShoppingCart from './ShoppingCart';

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQty = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} orderd from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQty,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
