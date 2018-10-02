// Functions Practice 1

// Below are exercises in writing functions. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Write a function called marco that logs "polo" to the screen.

// Exercise 2
// Write a function called greeter that takes a name as an argument and logs a greeting with that name to the screen.

// Exercise 3
// Write a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.

// Exercise 4
// Write a function called triple that takes an number as an argument and logs the result of that number multiplied by 3.

// Exercise 5
// Write a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

// Exercise 6
// Write a function called divisibleBy that takes two numbers as arguments and logs whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Exercise 7
// Consider this variable:
// var product = { name: "chair", price: 14.99 }
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

// Exercise 8
// Consider this function:
function message(product, inBudget){
  if(inBudget) {
    return "Product is within budget"
  } else {
    return "Product is beyond budget"
  }
}
// And consider this variable:
var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00
// Write a function checkBudget that takes a product, budget and the message function as arguments, determines whether the product is within budget and returns the result of the message function.

// Exercise 9
// Refactor the previous exercise to replace "Product" in the return to the name of the product.
// For example, checkBudget(product, budget, message) ----> "OledMonitor is beyond budget"







function marco () {
  console.log ("polo")
}
marco();

function greeter (name){
  console.log("Hello "+ name);
}
greeter("willy")

function oddOrEven(num) {
  if (num % 2 === 0) {
    console.log("Even")
  } else {
    console.log("Odd")
  }
}
oddOrEven(14)
oddOrEven(7)

function triple(num) {
  console.log(num*3)
}
 (triple(7))


function multiply (a,b){
  console.log(a*b)
}
multiply(4,5)

function divisibleBy (a, b) {
  if (a % b === 0) {
    console.log(a + " is evenly divisible by " + b)
  } else {
    console.log(a + " is not evenly divisible by " + b)
  }
}
divisibleBy(10, 5)
divisibleBy(5, 3)

function discribeProduct (name, price){
  console.log("The product is a " +name + ". It costs $" +price)
}
discribeProduct("chair", 15)

//var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00

function message (product, inBudget){
  if(inBudget) {
    return "Product is within budget"
  } else {
    return "Product is beyond budget"
  }
}

function checkBudget(product, budget, message) {
  if (product.price > budget) {
    console.log(product.name + " is too expensive")
  } else {
    console.log(product.name + " is within budget")
  }
}
checkBudget({ name: "TV", price: 500}, budget, message)
