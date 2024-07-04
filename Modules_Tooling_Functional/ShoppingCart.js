// Exporting Module

console.log('Exporting Module');

const shippingCost = 10;

export const cart = [];

// export const addToCart = function(product, quantity) {
//     cart.push({product, quantity})
//     console.log(`${quantity} ${product} added to cart`);
// }

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQty = 23;

export { totalPrice, totalQty as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
