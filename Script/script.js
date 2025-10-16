let priceInput = prompt("Enter the price tag ($49.99):");
if (priceWithoutDollar) = priceInput.replace("$", "")
let priceWithoutDollar = priceInput.replace("$", "");
let price = parseFloat(priceWithoutDollar);
let discountedPrice = price * 0.9;
console.log("Your new price is: $" + discountedPrice.toFixed(2));
