function calculateTotalPriceJs(product, quantity, discount) {
    const priceWithoutDiscount = product.price * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}}