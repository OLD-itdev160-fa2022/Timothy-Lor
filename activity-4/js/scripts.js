//welcome message
var user = "Timothy";
var salutation = "Hello, ";
var greeting = salutation + user + "! Here are the latest Monarch Matte Paste reviews";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

// product prices
var price = 22.50,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById("price"),
    studentPriceEl = document.getElementById("student-price");

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);