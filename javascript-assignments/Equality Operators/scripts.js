// Define two variables
let var1 = 5;
let var2 = '5';

// Compare using loose equality (==)
let looseEquality = (var1 == var2);

// Compare using strict equality (===)
let strictEquality = (var1 === var2);

// Log the results
console.log(`var1 == var2: ${looseEquality}`);  // true
console.log(`var1 === var2: ${strictEquality}`); // false

// Explanation
console.log("Explanation:");
console.log("Loose equality (==) compares values for equality, after converting both values to a common type.");
console.log("For example, in the case of 5 == '5', the string '5' is converted to the number 5 before comparison, so the result is true.");
console.log("Strict equality (===) compares both the value and the type without converting either value.");
console.log("For example, in the case of 5 === '5', since one is a number and the other is a string, the result is false.");