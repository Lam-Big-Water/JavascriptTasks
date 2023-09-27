// ? Why do we need Promise ?
// todo: Promises allow us to do things in the natural order.


// * This is a real-life analogy for things we often have in programming:
// * 1. A "producing code" that does something and takes time.
// * 2. A "consuming code" that wants the result of the "producing code" once it's ready.
// * A "promise" is a special JavaScript object that links the "producing" and "consuming" to together

// * The constructor syntax for a promise object is:

let promise = new Promise (function (resolve, reject) {
    // * executor (the producing code)

    // todo: The function passed to "new Promise" is called the executor.
    // todo: When "new Promise" is created, the executor runs automatically

    // * Its arguments "resolve" and "reject" are callbacks provided by JavaScript itself.
    // * Our code is only inside the executor.

    // * When the executor obtains the result, be it soon or late, doesn't matter, it should call one of these callbacks:
    // todo: "resolve (value)" - if the job is finished successfully, with result "value".
    // todo: "reject (error)" - if an error has occurred, error is the error object.

    // * The promise object returned by the "new Promise" constructor has these internal properties:
    // todo: "state" - initially "pending", then changes to either "fulfilled" & "rejected" when "resolve" & "reject" is called.
    // todo: - initially "undefined", then changes to value & error when resolve (value) & reject (error) is called.
    
    // * figure https://javascript.info/article/promise-basics/promise-resolve-reject.svg
})

// todo: Here's an example of a promise constructor and a simple executor function with "producing code" that takes time.
let promise_2 = new Promise (function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});
// * figure https://javascript.info/article/promise-basics/promise-resolve-1.svg
// ! A promise that is either resolved or rejected is called "settled", as opposed to an initially "pending" promise.


// * There can be only a single result or an error
let promise_3 = new Promise(function (resolve, reject) {
    resolve("done");

    reject(new Error("...")); // ignored
    setTimeout(() => resolve("...")); // ignored
    // * Also, "resolve/reject" expect only one argument (or none) amd will ignore additional arguments.
})

// * Immediately calling "resolve/reject"
let promise_4 = new Promise(function (resolve, reject) {
    // not taking our time to do the job
    resolve(123); // immediately give the result: 123
});

// * The "state" and "result" are internal. We can use the method ".then/.catch/.finally" to access them.
// Todo: ".then"
promise.then(
    function (result) {/* handle a successful result */},
    function (error) {/* handle an error */}
);
// * For instance, here's a reaction to a successfully resolved promise:
let promise_5 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});
// resolve runs the first function in .then
promise.then(
    // * The first function was executed. And in the case of a rejection, the second one.
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
);

// todo: If we're interested only in successful completions, then we can provide only one function argument to ".then":
let promise_6 = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
});
promise.then(alert); // shows "done!" after 1 second

// * If we're interested only in errors, then we can use "null" as the first argument:
// todo: .catch(errorHandlingFunction)
let promise_7 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// * .catch(f) is the same as promise.then(null, f). The call .catch(f) is a complete analog of .then(null, f), it's just a shorthand.
promise_7.catch(alert);

// * finally 
// todo: finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.
new Promise((resolve, reject) => {
    // call resolve or reject
})
    // runs when the promise is settled, doesn't matter successfully or not
    .finally(() => 'stop loading indicator')
    // so the loading indicator is always stopped before we go on
    .then(result => 'show result', err => 'show error');


// ! There are important differences:
// ! 1.A "finally" handler has no arguments.
// ! 2.A "finally" handler `passes through` the result or error to the next suitable handler.
// ! 3.A "finally" handler also shouldn't return anything. If it does, returned value is silently ignored.
new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
    throw new Error('error');
})
    .finally(() => alert("Promise ready")) // triggers first
    .then(result => alert(result)) // .then shows "value"
    .catch(err => alert(err)); // .catch shows the error

    // * Promises are more flexible. We can add handlers any time: if the result is already there, they just execute.
    // the promise becomes resolved immediately upon creation
    let promise_8 = new Promise(resolve => resolve("done!"));
    promise_8.then(alert); // done! (shows up right now)

// todo: rewrite the "loadScript function"
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}

let promise_src = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise_src.then(
    script => alert(`${script.src} is loaded`),
    error => alert(`Error: ${error.message}`)
);

promise_src.then(script => alert('Another handler...'));