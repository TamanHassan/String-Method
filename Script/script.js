let priceInput = prompt("Enter the price tag (49.99):");
let price = parseFloat(priceInput);
let discountedPrice = price * 0.9;
console.log("Your new price is: $" + discountedPrice.toFixed(2));
