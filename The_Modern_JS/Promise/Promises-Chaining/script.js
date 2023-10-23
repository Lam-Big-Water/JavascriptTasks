// ? We have a sequence of asynchronous tasks to be performed one after another ?
// * Promises chaining
// *    https://javascript.info/article/promise-chaining/promise-then-chain.svg
// * The whole works, because every call to a ".then" returns a new promise, 
// * -so that we can call the next ".then" on it.

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    alert(result); // 1
    return result * 2;
}).then(function (result) {
    alert(result); // 2
    return result * 2;
}).then(function (result) {
    alert(result);
    return result * 2;
}).then(function (result) {
    alert(result);
    // * Returning promises
    // * A handler, used in ".then(handler) may create and return a promise"
    // * In that case further handler wait until it settles, and then get its result.
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    })
})


// * Let's use this feature with the promisified "loadScript", defined in the `previous chapter`
// * -to load scripts one by one, in sequence:
loadScript(`1`)
    .then(script => loadScript(`2`))
    .then(script => loadScript(`3`))
    .then(script => {
        // scripts are loaded, we can use functions declared there
        one();
        two();
        three();
    });

// * Thenables
// * To be precise, a handler may return not exactly a promise, but a so-called "thenable" object
// * -an arbitrary object thant has a method ".then". It will be treated the same way as a promise.
// * This feature allows us to integrate custom objects with promise chains without having to inherit from "Promise".
class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        alert(resolve); // function () {native code}
        // resolve with this.num * 2 after the 1 second
        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result);
    })
    .then(alert); // shows 2 after 1000ms

// * fetch
let promise = fetch(url);
fetch('/article/promise-chaining/user.json')
// .then below runs when the remote server responds
    .then(function (response) {
        // response.text() returns a new promise that resolves with the full response text
        // when it loads
        return response.text();
    })
    .then(function (text) {
        // ...and here's the content of the remote file
        alert(text); // {}
    });

// todo: For instance, we can make one more request to GitHub, load the user profile and show the avatar:
// Make a request for user.json
fetch('/article/promise-chaining/user.json')
// Load it as json
    .then(response => response.json())
    // Make a request to GitHub
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // Load the response as json
    .then(response => response.json())
    // show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
    // * To make the chain extendable, we need to return a promise that resolves when the avatar finishes showing.
    // * That is, the ".then" handler in line now returns "new Promise", that becomes settled only after the call of 
    // * -"resolve(githubUser)" in "setTimeout". Then next .then in the chain will wait for that.
    .then(githubUser => new Promise(function(resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    // triggers after 3 seconds
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));

// * Summary  	https://javascript.info/article/promise-chaining/promise-handler-variants.svg