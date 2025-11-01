// COMP 484 - HW9 JavaScript Coding Exercises Solutions
// Author: (your name here)
// File: comp484-hw9-solutions.js
// NOTE: All declarations use 'var', camelCase naming, and semicolons as required.

// Exercise 1: Complex Arithmetic and Standard Rules
var finalResult = 3 + 5 * (10 / 2) - (8 - 4);
console.log("Exercise 1:", finalResult); // Expected: 24

// Exercise 2: Case Sensitivity Test
var projectIdentifier = "COMP484";
// ProjectIdentifier = "JS_Advanced"; // ❌ Fails: JavaScript is case-sensitive; 'ProjectIdentifier' is a different identifier from 'projectIdentifier'.
projectIdentifier = "JS_Advanced"; // ✅ Correct reassignment
console.log("Exercise 2:", projectIdentifier);

// Exercise 3: String Quoting Challenge
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log("Exercise 3:", courseDescription);

// Exercise 4: Escaping and Console Output
var errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log("Exercise 4:", errorMessage);

// Exercise 5: Type Coercion with Non-Plus Operators
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;
console.log("Exercise 5 (results):", resultSubtraction, resultMultiplication);
console.log("Exercise 5 (typeof resultSubtraction):", typeof resultSubtraction);
console.log("Exercise 5 (typeof resultMultiplication):", typeof resultMultiplication);

// Exercise 6: Understanding `null` and `undefined` Types
var unassignedVar;
var explicitNull = null;
console.log("Exercise 6 (typeof unassignedVar):", typeof unassignedVar); // "undefined"
console.log("Exercise 6 (typeof explicitNull):", typeof explicitNull);   // "object"
/*
 In JavaScript, 'typeof null' returns "object" due to a historical implementation quirk
 dating back to the earliest versions of the language where values were tagged, and the
 null tag overlapped the "object" type tag. This behavior is preserved for backward compatibility.
*/

// Exercise 7: Boolean Assignment and Type Identification
var isBlocking = true;
console.log("Exercise 7 (typeof after boolean):", typeof isBlocking); // "boolean"
isBlocking = "true";
console.log("Exercise 7 (typeof after string):", typeof isBlocking);  // "string"

// Exercise 8: Invalid Variable Naming
// var 2cool = 1; Invalid: cannot start an identifier with a number.
// var my var = 2; Invalid: spaces are not allowed in identifiers.
// var @handle = 3; Invalid: '@' is not permitted in identifier names.

// Exercise 9: Chained Shorthand Arithmetic
var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log("Exercise 9:", counterValue); // Expected: (50/5) - 3 = 7

// Exercise 10: Prefix vs. Postfix Unary Operators
var x = 10;
// Postfix: returns the value before incrementing
var y_post = x++;
console.log("Exercise 10 (postfix): y_post =", y_post, ", x =", x);
// Reset x
x = 10;
// Prefix: increments first, then returns the incremented value
var z_pre = ++x;
console.log("Exercise 10 (prefix): z_pre =", z_pre, ", x =", x);

// Exercise 11: Loose Equality and Coercion
var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean) {
  console.log("Exercise 11: 0 == false is true due to type coercion.");
}
// Explanation: With '==', false is coerced to 0 before comparison, so 0 == 0 is true.

// Exercise 12: Strict Inequality Test
var versionA = 10.0;
var versionB = "10.0";
if (versionA !== versionB) {
  console.log("Exercise 12: versionA and versionB are NOT strictly equal (different types).");
} else {
  console.log("Exercise 12: versionA and versionB are strictly equal.");
}

// Exercise 13: Logical OR and AND Combination
var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = false;
if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
  console.log("Exercise 13: Access granted.");
} else {
  console.log("Exercise 13: Access denied.");
}

// Exercise 14: Simulating XOR using Nested Conditionals
var conditionA = true;
var conditionB = false;
if ((conditionA || conditionB) && !(conditionA && conditionB)) {
  console.log("Exercise 14: XOR Success");
} else {
  console.log("Exercise 14: XOR Fail");
}

// Exercise 15: Converting IF/ELSE to Ternary Operator
var scriptLoadType = "deferred";
var loadStatus;
if (scriptLoadType === "deferred") {
  loadStatus = "Non-blocking";
} else {
  loadStatus = "Potentially Blocking";
}
console.log("Exercise 15 (if/else):", loadStatus);
var loadStatusTernary = (scriptLoadType === "deferred") ? "Non-blocking" : "Potentially Blocking";
console.log("Exercise 15 (ternary):", loadStatusTernary);

// Exercise 16: Commenting and Code Structure
/**
 * calculateRenderTime
 * Purpose: Calculate the time taken to parse HTML and execute JavaScript
 * to produce the first meaningful render for a page.
 */
function calculateRenderTime() {
  // Implementation would measure parse/execution times and return a duration.
}

// Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)
var now = new Date();
var month = now.getMonth() + 1; // 0-based
var day = now.getDate();
var year = now.getFullYear();
// zero-pad month/day to 2 digits
var mm = (month < 10 ? "0" : "") + month;
var dd = (day < 10 ? "0" : "") + day;
var formatted = "Today is " + mm + "/" + dd + "/" + year;
console.log("Exercise 17:", formatted);

// Exercise 18: Mixed Type Arithmetic Explanation
var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2;
var diffResult = val1 - val2;
console.log("Exercise 18 (sum):", sumResult);  // "205"
console.log("Exercise 18 (diff):", diffResult); // 15
/*
 '+' is both numeric addition and string concatenation. If either operand is a string,
 JavaScript converts the other operand to a string and concatenates. For '-', '*', '/',
 JavaScript coerces operands to numbers, so '20' - '5' (or 20 - "5") yields 15 as a number.
*/

// Exercise 19: Conditional based on Type Check
var dataInput = 484;
if (typeof dataInput === "number") {
  console.log("Exercise 19: Input is numeric.");
} else {
  dataInput = true;
  console.log("Exercise 19: New typeof = ", typeof dataInput);
}

// Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)
/*
 If this script runs in the <head> without 'defer' or 'async', it executes before the DOM
 for <body> is parsed. Querying or modifying elements that don't exist yet (e.g., document.body
 or an element by ID) can return null. Attempting to set properties on null (like innerHTML)
 throws an error such as "Cannot set property 'innerHTML' of null". Using 'defer', placing
 the script at the end of <body>, or listening for DOMContentLoaded ensures elements exist.
*/
var heading = document.createElement("h1");
heading.textContent = "Interactive Layer Loaded";
document.body.appendChild(heading);
