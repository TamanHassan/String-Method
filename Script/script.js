let priceInput = prompt("Enter the price tag ($49.99):");
let priceWithoutDollar = priceInput.replace("$", "");
let price = parseFloat(priceWithoutDollar);
if(isNaN (price)) {
    console.log("Invalid price entered. Please enter a valid number.");
} else {
    let discountedPrice = price * 0.9;
    console.log("Your new price is: $" + discountedPrice.toFixed(2));
} 

