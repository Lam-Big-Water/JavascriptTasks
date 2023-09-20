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


---
---

Function-basics

Is "else" required?
importance: 4

Is there any difference in the behavior of these two variants ?
```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Did parents allow you?');
}

```
The answer: No difference ! In both cases, return confirm('Did parents allow you ?') executes exactly when the if condition is falsy.


Rewrite the function using '?' or '||'
importance: 4
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```

Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||

```javascript
function checkAge(age) {
  return  (age > 18) ? true : confirm('Did parents allow you ?');
}

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you ?');
}

```


Function min(a, b)
importance: 1
Write a function min(a,b) which returns the least of two numbers a and b.

```javascript
function min(a, b) {
  return (a > b) ? b : a;
}
console.log(min(3,2));

```

Function pow(x,n)
importance: 4
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

```javascript
function getPow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( getPow(x, n) );
}
```


---
---

Arrow-Function-Basics

Rewrite with arrow functions
Replace Function Expressions with arrow functions in the code below:

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

The answer:
const ask = (question, yes, no) => {
  if(confirm(question)) yes();
  else no();
}

ask(
  "Do you agree ?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
```

---
---

Object

Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

```javascript
let user = {
  name: 'John',
  surname: 'Smith',
}

user.name = 'Pete';
delete user.name;

alert(user.name);
```


Check for emptiness
importance: 5
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

```javascript
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
```


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

```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let result = 0;
function sum(obj) {
  for(let key in obj) {
    result += obj[key];
  }
  alert(result);
}

sum(salaries);
```


Multiply numeric property values by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

after the call

menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.


```javascript
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multipleNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

multipleNumeric(menu);

console.log(menu);
```


---
---


This

Using "this" in object literal
importance: 5
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

```javascript

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?

The answer: Error: Cannot read property 'name' of undefined

rewrite:

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John

```


Create a calculator
importance: 5
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.

```javascript
let calculator = {
 ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

answer:
let calculator = {
  read() {
    this.a = +prompt('a', 0);
    this.b = +prompt('b', 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
}

calculator.read();

alert(calculator.sum());
alert(calculator.mul());

```


Chaining
importance: 2
There’s a ladder object that allows to go up and down:

```javascript

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder
.up()
.up()
.down()
.showStep();

```


---
---
constructor-new

Two functions – one object
importance: 2
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
If it is, then provide an example of their code.

```javascript
let obj = {};
function A() {return obj;}
function B() {return obj;}

alert(new A() == new B()); //true
```


Create new Calculator
importance: 5
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


```javascript

function Calculator() {
  this.read = function() {
    this.a = +prompt('a', 0);
    this.b = +prompt('b', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  }

  this.mul = function() {
    return this.a + this.b;
  }
}

let start = new Calculator();

start.read();
alert(start.sum());
alert(start.mul());
```

Create new Accumulator
importance: 5
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

```javascript

function Accumulator (startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add ?', 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
```
*/
