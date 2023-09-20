// Converting and Checking Numbers

// Base 
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// Conversion
// console.log(Number('23'));
// console.log(+'23');

// Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e30', 10));

// console.log(Number.parseInt(' 2.5rem '));
// console.log(Number.parseFloat(' 2.5rem '));

// Check if value is NaN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20x'));
// console.log(Number.isNaN(23 / 0));

// Checking if value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(20));
// console.log(Number.isInteger(20.0));
// console.log(Number.isInteger(23 / 0));

// Math and Rounding

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2));
// console.log(Math.max(5, 18, '23px', 11, 2));

// console.log(Math.min(5, 18));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) +1);

// const randomInt = (min, max) => 
// Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(1,5));

// Rounding integers
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor('23.9'));

// console.log(Math.trunc(23.3));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.234).toFixed(3));
// console.log(+(2.234).toFixed(3));


// The Remainder
// console.log(5 % 2);
// console.log(5 / 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// labelBalance.addEventListener('click', function () {
//     [...document.querySelectorAll('.movements__row')]
//     .forEach(function (row, i) {
//         if (i % 2 === 0) row.style.backgroundColor = 'red';
//         if (i % 3 === 0) row.style.backgroundColor = 'blue';
//     });
// });

// Numeric Separators
// const diameter = 287_460_000_000;
// const diameter2 = 1_500;
// const diameter3 = 15_00;

// console.log(diameter,diameter2,diameter3);

// console.log(Number('230_000'));
// console.log(parseInt('230_000'));


// BigInt
// console.log(2 ** 53 -1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 +1);

// console.log(8888888888888888888888n);
// console.log(BigInt(666666666));

// // Operations
// console.log(10000n + 10000n);
// console.log(88888888888888888n * 666666666666666n);

// Exception
// console.log(Math.sqrt(16n));

// const huge = 202020202202020202020n;
// const num = 23;
// console.log(huge * BigInt(num));

// console.log(23n > 15);
// console.log(23n === 23);
// console.log(23n == '23');
// console.log(typeof 23n);

// console.log(huge + 'is REALLY big!!!');

// Divisions
// console.log(11n / 3n);
// console.log(10 / 3);


// create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('Aug 02 2020 18:00:30'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date('2019-11-18T21:31:17.178Z'))

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142228180000));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);


const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) => 
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);