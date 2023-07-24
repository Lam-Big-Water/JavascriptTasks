/* 
Hello, World!

Show an alert
importance: 5
Create a page that shows a message “I’m JavaScript!”.

Do it in a sandbox, or on your hard drive, doesn’t matter, just ensure that it works.


alert('I\'m JavaScript!');
---
---

Variables

Working with variables
importance: 2
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).

let admin, name; // can declare two variables at once

name = 'John';

admin = name;

alert(admin); // 'John'

---
---

Types

String quotes
importance: 5
What is the output of the script?

```javascript
let name = "Ilya";

alert( `hello ${1}` ); // 'hello 1'

alert( `hello ${"name"}` ); // 'hello name'

alert( `hello ${name}` ); // 'hello Ilya'
```

---
---

alert-prompt-confirm

A simple page
importance: 4
Create a web-page that asks for a name and outputs it.

let name = prompt('what is your name','');
alert(name);

---
---

operators

The postfix and prefix forms
importance: 5
What are the final values of all variables a, b, c and d after the code below?

```javascript
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

alert(a); // 2
alert(b); // 2
```

Type conversions
importance: 5
What are results of these expressions?

```javascript
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // ' -9 5'
"  -9  " - 5 // ' -14 '
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2
```
Think well, write down and then compare with the answer.


Fix the addition
importance: 5
Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

Fixed: alert(+a + +b); // 12


---
---

Comparisons

importance: 5
What will be the result for these expressions?

```javascript
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // false
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false
```

---
---

ifelse

if (a string with zero)
importance: 5
Will alert be shown?

```javascript
if ("0") {
  alert( 'Hello' ); // 'Hello'
}
```

The name of JavaScript
importance: 2
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

```javascript
let question = prompt('What\'s the official name of JavaScript?', '');

if (question == 'ECMAScript') {
    alert('right');
} else {
    alert('You don\'t know? ECMAScript!');
}
```

Show the sign
importance: 2
Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.

```javascript
let value = prompt('Type a number', 0);

if (value > 0) {
    alert(1);
} else if (value < 0) {
    alter(-1);
} else {
    alter(0);
}
```

Rewrite 'if' into '?'
importance: 5
Rewrite this if using the conditional operator '?':

```javascript
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

rewrite: let result = (a + b < 4) ? 'Below' : 'Over';
```

Rewrite 'if..else' into '?'
importance: 5
Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

```javascript
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
```
let message = prompt('account', '');
alert((message == 'Employee') ? 'Hello' :
(message == 'Director') ? 'Greeting' : 
(message == '') ? 'No login' : 
'');

---
---

logical-operators

What's the result of OR?
importance: 5
What is the code below going to output?

```javascript
alert( null || 2 || undefined );
```
The answer is 2, that's the first truthy value.

What's the result of OR'ed alerts?
importance: 3
What will the code below output?

```javascript
alert( alert(1) || 2 || alert(3) );
```
The answer: first 1, then 2.


What is the result of AND?
importance: 5
What is this code going to show?

```javascript
alert( 1 && null && 2 );
```
The answer: null, because it's the first falsy value from the list.


What is the result of AND'ed alerts?
importance: 3
What will this code show?

```javascript
alert( alert(1) && alert(2) );
```
The answer: 1, and then undefined.


The result of OR AND OR
importance: 5
What will the result be?

```javascript
alert( null || 2 && 3 || 4 );
```
The answer: 3. The precedence of AND && is higher than ||, so it executes first.


Check the range between
importance: 3
Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.

```javascript
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value = getRandomIntInclusive(0, 120);
alert(value);

let output = (value >= 14 && value <= 90) ? alert('that age is between 14 and 90') : alert('that age is out of range');

```

A question about "if"
importance: 5
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

```javascript
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
```
The answer: the first and the third will execute.


Check the login
importance: 3
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

```javascript
let account = prompt('who\'s there ?', '');

if (account == 'Admin') {
  let password = prompt('Password?', '');

  if (password == 'TheMaster') {
    alert('Welcome!');
  } else if (password == null) {
    alert('Canceled');
  } else (alert('Wrong password'));

} else if (account == null) {
  alert('Canceled');
} else (alert('I don\'t know you'));
```

---
---

while-for

Last loop value
importance: 3
What is the last value alerted by this code? Why?

```javascript
let i = 3;

while (i) {
  alert( i-- );
}
```
The answer: 3 2 1;


Which values does the while loop show?
importance: 4
For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

```javascript
The prefix form ++i:
let i = 0;
while (++i < 5) alert( i );
The answer: 0 1 2 3 4 

The postfix form i++
let i = 0;
while (i++ < 5) alert( i );
The answer: 0 1 2 3 4 
```
The value returned by the increment is not used here, so there's no difference between i++ and ++i.


Output even numbers in the loop
importance: 5
Use the for loop to output even numbers from 2 to 10.

```javascript
for(i = 2; i <= 10; i++) {
  console.log(i);
}
let num = 2;
while(num <= 10) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num++;
} while (num <= 10);
```

Replace "for" with "while"
importance: 5
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

```javascript
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;

while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
```


Repeat until the input is correct
importance: 5
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

```javascript
let num;

do {
  num = prompt('Enter a number greater than 100 ?', 0);
} while (num <= 100 && num);
The check && num is false when num is null or an empty string. Then the while loop stops too.
```


Output prime numbers
importance: 3
An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

```javascript
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}
```


---
---

Switch

Rewrite the "switch" into an "if"
importance: 5
Write the code using if..else which would correspond to the following switch:

```javascript
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


let browser = 'Chrome';
if (browser == 'Edge') {
  alert('You\'ve got the Edge!');
} else if (browser == 'Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else (alert( 'We hope that this page looks ok!' ));
```


Rewrite "if" into "switch"
importance: 4
Rewrite the code below using a single switch statement:

```javascript

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


let a = +prompt('a?', '');
alert(a);

switch (a) {
  case 0:
   alert(0);
   break;

  case 1:
   alert(1);
   break;

  case 2:
  case 3:
  alert('2,3');
  break;

  default:
  alert('Wrong number!');
}
```
*/









