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

// function loadScript (src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(script);

//     document.head.append(script);
// };

// loadScript('./test.js', function () {
     // * the callback runs after the script is loaded
//     newFunction(); // * so now it  works
// });

// * Here's a runnable example with a real script:

// function realScript (src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }

// realScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     alert(`Cool, the script ${script.src} is loaded`);
//     alert( _ ); // * _ is a function declared in the loaded script
// });

// ? In the above examples we didn't consider errors. What if the script loading fails ?
// todo: Here's an improved version of 'loadScript' that tracks loading errors:

function loadScript (src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}
loadScript('./test.js', function (error, script) {
    if (error) {
        handleError(error)
    } else {
        newFunction();
    }
});

// ! Pyramid of Doom
// * example

// loadScript('1.js', function(error, script) {

//     if (error) {
//       handleError(error);
//     } else {
//       // ...
//       loadScript('2.js', function(error, script) {
//         if (error) {
//           handleError(error);
//         } else {
//           // ...
//           loadScript('3.js', function(error, script) {
//             if (error) {
//               handleError(error);
//             } else {
//               // ...continue after all scripts are loaded (*)
//             }
//           });
  
//         }
//       });
//     }
//   });

