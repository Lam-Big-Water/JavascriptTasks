// * Error handing, "try...catch"

// todo: The "try...catch" syntax
// *  	https://javascript.info/article/try-catch/try-catch-flow.svg
// * First, the code in "try {...}" is executed
// * => If there were no errors, skipping "catch"
// * => If an error occurs, then the "try" execution is stopped, and control flows to the beginning of "catch(err)".
try {
    // code...
} catch (err) {
    // error handling
}

// * So, an error inside the "try {...}" block does not kill the script - we have a chance to handle it in "catch".
try {
    alert('Start of try runs'); // (1) <--
    // ...no errors here
    alert('End of try runs'); // (2) <--
} catch (err) {
    // skip
    alert('Catch is ignored, because there are no errors'); // (3)
}

try {
    alert('Start of try runs'); // (1) <--

    fuck; // error, variable is not defined !
    // stopped
    alert('End of try (never reached)'); // (2)
} catch (err) {
    alert(`Error has occurred`); // (3) <--
}

// ! try...catch only works for runtime errors
try {
    { // SyntaxError: Unexpected token 'catch'
} catch (err) {
    alert(`The engine can't understand this code, it's invalid`);
}
// ! try...catch works synchronously
try {
    setTimeout(function () {
        noSuchVariable; // script will die here
    }, 1000);
} catch (err) {
    alert(`won't work`);
}
// * try...catch must be inside that function
setTimeout(function() {
    try {
        noSuchVariable; // try...catch handles the error !
    } catch {
        alert('error is caught here !');
    }
}, 1000);

// * Error object
// todo: When an error occurs, JavaScript generates an object containing the details about it.
// todo: -The object is then passed as an argument to "catch"
try {
    // ...
} catch (err) { // <-- the "error object", could use another word instead of err
    // ...
}

// todo: For all built-in errors, the error object has two main properties
// ! 
try {
    fuck;
} catch (err) {
    alert(err.name); // ReferenceError
    alert(err.message); // fuck is not defined
    alert(err.stack); // ReferenceError: fuck is not defined at (...call stack)

    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: fuck is not defined
}
// * If we don't need error details, "catch" may omit it
try {
    // ...
} catch {    // <-- without (err)
    // ...
}

// * Using try...catch
let json = {"name": "John", "age": 30}; //data from the server

try {
    let user = JSON.parse(json); // <-- when an error occurs...
    alert(user.name); //doesn't work
} catch (err) {
    // ...the execution jumps here
    alert("Our apologies, the data has errors, we'll try to request it one more time.");
    alert(err.name);
    alert(err.message);
}

// * Throwing our own errors
// ? What if `json` is syntactically correct, but doesn't have a required `name` property ?
// * Here JSON.parse runs normally, but the absence of `name` is actually an error for us.
json = '{"age": 30}'; // incomplete data

try {
    let user = JSON.parse(json); // <-- no errors
    alert(user.name); // no name !
    // output: undefined
} catch (err) {
    alert("doesn't execute");
}

// * "Throw" operator
json = {"name": "John", "age": 30}; //data from the server

try {
    let user = JSON.parse(json); // <-- no errors
    if (!user.name) {
        throw new SyntaxError('Incomplete data: no name'); //(*)
    }
    alert(user.name);
    // output: undefined
} catch (err) {
    alert("JSON Error:" + err.message); // JSON Error: Incomplete data: no name
}
 
// * Rethrowing ==> Catch gets all errors ==> Analyze the error object 
// * ==> If we don't know how to handle it, we do "throw err".
json = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json); // <-- forgot to put "let" before user

  // ...
} catch (err) {
    if (err instanceof ReferenceError) {
        alert("JSON Error: " + err); // "ReferenceError" for accessing an undefined variable
    }
}

// todo: We can also get the error class name from `err.name` property.
// todo: => All native errors have it. Another option is to read `err.constructor.name`.
json = '{"age": 30}';
try {
    let user = JSON.parse(json);

    if(!user.name) {
        throw new SyntaxError('Incomplete data: no name');
    }

    fuck(); // unexpected error

    alert(user.name);
} catch (err) {
    if (err instanceof SyntaxError) {
        alert("JSON Error:" + err.message);
    } else {
        throw err; // rethrow (*)
    }
}
// * Can be caught by one more level of `try...catch`
try {
    readData();
} catch (err) {
    alert("External catch got:" + err); // caught it !
}

// * try...catch...finally
try {
    alert( 'try' );
    if (confirm('Make an error?')) BAD_CODE();
  } catch (err) {
    alert( 'catch' );
  } finally {
    alert( 'finally' );
  }
// * The code has two ways of execution:
// * Yes: try -> catch -> finally.
// * No: try -> finally

// ! `finally` and `return`
function func() {

    try {
      return 1;
  
    } catch (err) {
      /* ... */
    } finally {
      alert( 'finally' );
    }
  }
  
  alert( func() ); // first works alert from finally, and then this one

// * without catch
function func() {
    // start doing something that needs completion (like measurements)
    try {
      // ...
    } finally {
      // complete that thing even if all dies
    }
  }

// * Global catch
window.onerror = function(message, url, line, col, error) {
    // ...
  };