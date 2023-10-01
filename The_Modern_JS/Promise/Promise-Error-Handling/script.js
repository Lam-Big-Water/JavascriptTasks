// * Error handling with promises

// * The URL to "fetch" is wrong (no such site) and ".catch" handles the error:
// * When a promise rejects, the control jumps to the closest rejection handler.
fetch('wrongURL') // rejects
    .then(response => response.json())
    .catch(err => alert(err)) // TypeError: failed to fetch (the text may vary)
// * As you can see, the ".catch" doesn't have to be immediate. It may appear after one or maybe several ".then".
// * The easiest way to catch all errors is to append ".catch" to the end of chain

// * Implicit try...catch
// * The code of a promise executor and promise handlers has an "invisible try..catch" around it.
new Promise((resolve, reject) => {
    throw new Error("fuck");
}).catch(alert); // Error: fuck
// ...Works exactly the same as this:
new Promise((resolve, reject) => {
    reject(new Error("fuck"));
}).catch(alert); // Error: fuck
// * The "Invisible try..catch" around the executor automatically catches the error and turns it into rejected promise.
// * The final, ".catch" not only catches explicit rejections, but also accidental error in the handlers above.

// * Rethrowing
// * In a regular "try..catch" we can analyze the error and maybe rethrow it if it can't be handled. The same thing is possible for promises.
// todo: In the example below the ".catch" successfully handles the error:
// the execution: catch -> then
new Promise((resolve, reject) => {
    throw new Error("fuck");
}).catch(function(error) {
    alert("The error is handled, continue normally");
}).then(() => alert("Next successful handler runs"));

// * The other situation with ".catch". The handler catches the error and just can't handle it, so it throw it again:
// the execution: catch -> catch
new Promise((resolve, reject) => {
    throw new Error('fuck');
}).catch(function(error) {
    if (error instanceof URIError) {
        // handle it
    } else {
        alert("Can't handle such error");

        throw error;
    }
}).then(function() {
    // doesn't run here
}).catch(error => {
    alert(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way
})

// * Unhandled rejections
// ? What happens when an error is not handled ?
// *  
new Promise(function() {
    noSuchFunction(); // Error here (no such function)
})
    .then(() => {
        // successful promise handlers, one or more
    }); // without .catch at the end !
// * The JavaScript engine tracks such rejections and generates a global error in that case.
// * In the browser we can catch such errors using the event "unhandledrejection":
window.addEventListener('unhandledrejection', function(event) {
    // the event object has two special properties:
    alert(event.promise); // [object Promise] - the promise that generated the error
    alert(event.reason); // Error: Fuck ! - the unhandled error object
});

new Promise(function() {
    throw new Error("Whoops!");
}); // no catch to handle the error
