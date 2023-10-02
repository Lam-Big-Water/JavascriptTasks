// * Promise.all
// * Let's say we want many promises to execute in parallel and wait until all of them are ready.
// * "Promise.all" takes an iterable (usually, an array of promises) and returns a new promise.
// * The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.
let promise = Promise.all(iterable);
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
])  // ! Please note that the order of the resulting array members is the same as in its source promises.
    .then(alert); // 1, 2, 3
// * A common trick is to map an array of job data into an array of promises, and then wrap that into "Promise.all".
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];
// map every url to the promise of the fetch
requests = urls.map(url => fetch(url));
// Promise.all waits until all jobs are resolved
Promise.all(requests)
    .then(response => response.forEach(
        response => alert(`${response.url}: ${response.status}`)
    ));

// * A bigger example 
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)));

// * If any of the promises is rejected, the promise returned by "Promise.all" immediately rejects with that error.
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(alert); // Error: Whoops!
// * The rejection error becomes the outcome of the entire "Promise.all".
// ! In case of an error, other promise are ignored
// * For example, if there are multiple "fetch" calls, and one fails, the others will
// * -still continue to execute, but "Promise.all" won't watch them anymore. They will probably settle, but their results will be ignored.

// * Promise.all(iterable) allows non-promise "regular" values in iterable
// * If any of those objects is not a promise, it's passed to the resulting array "as is".
Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
  ]).then(alert); // 1, 2, 3

// * Promise.allSettled (Old browsers may need polyfills)
// * "Promise.allSettled" just waits for all promises to settle, regardless of the result. The resulting array has:
// todo: {status: "fulfilled", value: result} for successful responses
// todo: {status: "rejected", reason: error} for errors.
urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];
  
  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
          alert(`${urls[num]}: ${result.reason}`);
        }
      });
    });
// * The results in the line (*) above will be:
[
    {status: 'fulfilled', value: ...response...},
    {status: 'fulfilled', value: ...response...},
    {status: 'rejected', reason: ...error object...}
]
// * Polyfill
if (!Promise.allSettled) {
    const rejectHandler = reason => ({ status: 'rejected', reason });
  
    const resolveHandler = value => ({ status: 'fulfilled', value });
  
    Promise.allSettled = function (promises) {
      const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
      return Promise.all(convertedPromises);
    };
  }

// * Promise.race
// * Similar to "Promise.all", but waits only for the first settled promise and gets its result (or error).
promise = Promise.race(iterable);
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert); // 1

// * Promise.any
// * Similar to "Promise.race", but waits only for the first fulfilled promise and gets its result.
// * -If all of the given promises are rejected, then the returned promise is rejected with "AggregateError"
promise = Promise.any(iterable);
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert); // 1
// * Here's an example when all promises fail:
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
  ]).catch(error => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error: Ouch!
    console.log(error.errors[1]); // Error: Error!
  });
