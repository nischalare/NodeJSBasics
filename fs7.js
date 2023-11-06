var ArithCalc = require('./ArithematicCalculations');
var fs = require('fs');

// Use the functions from the module
var num1 = 0;
var num2 = 1;
addResult = ArithCalc.add(num1, num2);
console.log("The Sum of " + num1 + " and " + num2 + " is:  " + addResult);

num1 = 5;
num2 = 3;
subResult = ArithCalc.sub(num1, num2);
console.log("The Difference between " + num1 + " and " + num2 + " is:  " + subResult);

num1 = 4;
num2 = 7;
mulResult = ArithCalc.mul(num1, num2);
console.log("The Product of " + num1 + " and " + num2 + " is:  " + mulResult);

num1 = 10;
num2 = 2;
divResult = ArithCalc.div(num1, num2);
console.log("The Quotient of " + num1 + " divided by " + num2 + " is:  " + divResult);

num1 = 2;
num2 = 4;
powResult = ArithCalc.pow(num1, num2);
console.log("The Result of " + num1 + " raised to the power of " + num2 + " is:  " + powResult);

console.log("\n")

// below code is used to dislay output code of ArithematicCalculations.js file in console
fs.readFile('ArithematicCalculations.js','utf-8', function(err, data){
    console.log(data);
})