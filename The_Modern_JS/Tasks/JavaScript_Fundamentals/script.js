// * Hello-world
/*
Show an alert
importance: 5
Create a page that shows a message “I’m JavaScript!”.

Do it in a sandbox, or on your hard drive, doesn’t matter, just ensure that it works.
*/

// alert(`I'm JavaScript!`);

// * Types
/*
String quotes
importance: 5
What is the output of the script?
*/
// let name = "Ilya";

// alert( `hello ${1}` ); // hello 1

// alert( `hello ${"name"}` ); // hello name

// alert( `hello ${name}` ); // hello Ilya

// * alert-prompt-confirm
/*
A simple page
importance: 4
Create a web-page that asks for a name and outputs it.
*/

// let input = prompt('please enter your data', '');
// alert(input);

// * Operators
/*
The postfix and prefix forms
importance: 5
What are the final values of all variables a, b, c and d after the code below?
*/
// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1

/*
Type conversions
importance: 5
What are results of these expressions?
*/
// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // " -9 5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

/*
Fix the addition
importance: 5
Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.
*/
let a = new Number(prompt("First number?", 1));
let b = new Number(prompt("Second number?", 2));

alert(a + b); // 12

// * Comparisons
/*
Comparisons
importance: 5
What will be the result for these expressions?
*/
5 > 4 // true
"apple" > "pineapple" // false
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === + "\n0\n"; // false