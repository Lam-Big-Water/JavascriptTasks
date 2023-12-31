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
// let a = new Number(prompt("First number?", 1));
// let b = new Number(prompt("Second number?", 2));

// alert(a + b); // 12

// * Comparisons
/*
Comparisons
importance: 5
What will be the result for these expressions?
*/
// 5 > 4 // true
// "apple" > "pineapple" // false
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === + "\n0\n"; // false

// * ifelse
/*
if (a string with zero)
importance: 5
Will alert be shown?
*/
// if ("0") {
    // alert('Hello'); // Hello
// };

/*
Rewrite 'if' into '?'
importance: 5
Rewrite this if using the conditional operator '?':
*/
// let result;

// if (a + b < 4) {
  // result = 'Below';
// } else {
  // result = 'Over';
// }

// let result_ = (a + b < 4) ? 'Below' : 'Over';

// * logical-operators
/*
What's the result of OR?
importance: 5
What is the code below going to output?
*/
// alert(null || 2 || undefined); // The answer is 2, that’s the first truthy value.

/*
What is the result of AND?
importance: 5
What is this code going to show?
*/
console.log(1 && null && 2); // The answer: null, because it’s the first falsy value from the list.

/*
The result of OR AND OR
importance: 5
What will the result be?
*/
console.log(null || 2 && 3 || 4); // The precedence of AND && is higher than ||, so it executes first.
// The answer: 3
/*

A question about "if"
importance: 5
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?
*/
// if (-1 || 0) alert('first'); // truthy
// if (-1 && 0) alert('second'); // falsy
// if (null || -1 && 1) alert('third'); // truthy

// * while-for
/*
Which values does the while loop show?
importance: 4
For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?
*/
// 1. The prefix from ++i:
// let i = 0;
// while (++i < 5) alert(i); // 1...4
// 2. The postfix from i++:
// let i_ = 0;
// while (i++ < 5) alert(i); // 1...5

/*
Output even numbers in the loop
importance: 5
Use the for loop to output even numbers from 2 to 10.
*/
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }
/*

Replace "for" with "while"
importance: 5
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

*/
// let move = 0;
// while(move < 3) {
//     console.log(`number ${move}!`);
//     move++;
// }

/*
Repeat until the input is correct
importance: 5
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

// let num;

// do {
//     num = prompt('Enter a number greater than 100?', 0);
// } while (num <= 100 && num);

// let num = null;
// console.log(num <= 100 && num);

// * switch
/*
Rewrite the "switch" into an "if"
importance: 5
Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/
// let browser = prompt('Which browser are you using ?', '');
// if (browser === 'Edge') {
//     alert('fuck');
// } else if (browser === 'Chrome') {
//     alert('great');
// } else alert('We hope that this page looks ok!');

/*
Rewrite "if" into "switch"
importance: 4
Rewrite the code below using a single switch statement:
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

// let o = +prompt('a', '');

// switch (o) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case (o == 2 || o == 3):
//         alert('2,3');
//         break;
// }

// * function-basics
/*
Function pow(x,n)
importance: 4
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
*/
// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// let x = prompt('x', '');
// let n = prompt('n', '');

// if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);
// } else {
//     alert(pow(3, 2));
// }

// * function-expressions
// Function Declaration
// function sum(a, b) {
//     return a + b;
// };
// Function Expression
// let sum = function(a, b) {
//     return a + b;
// };
  
// * Arrow functions, the basics

/*
Rewrite with arrow functions
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no()
// }

// ask(
//   "Do you agree?",
//   function() { console.log("You agreed.") },
//   function() { console.log("You canceled the execution.") }
// )

// * object
/*
Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user)


/*
Check for emptiness
importance: 5
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

/*
Sum object properties
importance: 5
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (key in salaries) {
  console.log(salaries[key]);
  sum += salaries[key];
}
console.log(sum)

