
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//map

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSD);

// const movementsUSDfor = [];

// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//     (mov, i) => 
//     `movement ${i + 1}: You ${mov > 0 ? 'deposited' :
//     'withdrew'} ${Math.abs(
//         mov
//     )}  `
// );

// console.log(movementsDescriptions);

// filter
/* 
const deposits = movements.filter(function (mov) {
    return mov > 0;
})

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);


const withdrawal = movements.filter((mov) => mov < 0);

console.log(withdrawal)

*/



//reduce

/*
accumulator -> SNOWBALL

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration${i}: ${acc}`);
  return acc + cur;
}, 0);


const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

// find

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);


const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);

// includes
console.log(movements.includes(-130));

// some

console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


// flat
const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
    console.log(overallBalance);

// flatMap

const overallBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

let result = accounts.map(acc => acc.movements).flat();
console.table(result);


// return < 0 => A, B (keep order)
// return > 0 => B, A (switch order)
// Ascending
/* 
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
*/

movements.sort((a, b) => a - b);
console.log(movements);

// Descending
/* 
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
*/

movements.sort((a, b) => b - a);
console.log(movements);

// fill
const arr = [1, 2, 3];
console.log(new Array (1, 2, 3));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 4);
// x.fill(1);
console.log(x);

arr.fill(23, 0, 2);
console.log(arr);

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'), el => 
    Number(el.textContent.replace('€', ''))
  );
  // convert the pseudo array to array
  console.log(movementsUI);
  // the same thing
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
})