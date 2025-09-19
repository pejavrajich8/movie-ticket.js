//area of a circle

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
};

console.log(areaOfCircle(5));

//random password

function randomPassword(length) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
};

console.log(randomPassword(12));

//sales tax

function calculateTax(price, taxRate) {
  return price + (price * taxRate);
};

console.log(calculateTax(10, 0.07));
