// function loadScript (src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     alert('created');
//     script.onload = () => callback('got it');
//     alert('loaded');
//     document.head.append(script);
//     alert('appended');
// };

// loadScript('./test.js', function (text) {
     //  * the callback runs after the script is loaded
//     alert(text);
//     newFunction(); // * so now it  works
// });

function loadScript (src) {
    return new Promise (function (resolve, reject) {
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
// * The outer code can add handlers
promise_src.then(script => alert('Another handler...'));