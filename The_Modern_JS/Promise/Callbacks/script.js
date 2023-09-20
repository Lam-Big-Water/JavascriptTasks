'use strict'

// todo: Take a look at the function loadScript(src), that loads a script with the given src:

// function loadScript (src) {
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
// }
// ! if there's any code below 'loadScript()', it doesn't wait until the script loading finishes.

// loadScript('./test.js'); // * the script has 'newFunction()'

// newFunction(); // ! no such function !

// * But we'd like to know when it happens, to use new functions and variables from the script.


// todo: Let's add a 'callback' function as a second argument to 'loadScript' the should execute when the script loads:

function loadScript (src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
};

loadScript('./test.js', function () {
    // * the callback runs after the script is loaded
    newFunction(); // * so now it  works
});

