/*
Repeat until the input is a number
importance: 5
Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.
*/

// function readNumber() {
//     let num;

//     do {
//         num = prompt('input', 0);
//     } while (!isFinite(num));

//     if(num === null || num === '') return null;

//     return +num;
// }

// alert(`Read: ${readNumber()}`);


//------------------- array methods---------------------

/*
Is array copied?
importance: 3
What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length );

The answer is: 4. That's because arrays are objects.
*/


/*
Array operations.
importance: 5
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll


The answer:
//1
const styles = ['Jazz', 'Blues'];
//2
styles.push('Rock-n-Roll');
//3
styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
//4
styles.shift();
//5
styles.unshift('Rap', 'Reggae');
console.log(styles);
*/


/*
Calling in an array context
importance: 5
What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2]();

The answer: a,b,function(){...}
*/


function sumInput () {
    let numbers = [];

    while (true) {
        let value = prompt('A number please ?', 0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert(sumInput());