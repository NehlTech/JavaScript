export const cart = [];

/**
 * A function to add to cart
 * @param {productId} productId : this is the id from the clicked product
 */

export const addToCart = (productId) => {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
};
