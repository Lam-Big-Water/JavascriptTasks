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
    
})


