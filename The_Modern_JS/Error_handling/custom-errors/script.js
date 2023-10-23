// * Custom errors, extending Error
// todo: When we develop something, we often need our own error classes to reflect things that may go wrong in our tasks.

// * Extending Error
// * in this case, it may not have `address` properties that are essential for our users.
let json = `{"name": "John", "age": 30}`;

// * The "pseudocode" for the built-in Error class defined by JavaScript itself
class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error"; // (different names for different built-in error classes)
        this.stack = `<call stack>`; // non-standard, but most environments support it
    }
}
// * Now let's inherit `ValidationError` from it and try it in action:
class ValidationError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "ValidationError"; // (2)
    }
}

function test() {
    throw new ValidationError("Whoops!");
}

try {
    test();
} catch(err) {
    alert(err.message); // Whoops !
    alert(err.name) // ValidationError
    alert(err.stack); // a list of nested calls with line numbers for each
}

// * let's try to use it in `readUser(json)`:
// Usage
function readUser(json) {
    let user = JSON.parse(json);
    
    if (!user.address) {
        throw new ValidationError("No field: age");
    }

    return user;
}

// Working example with try..catch

try {
    let user = readUser(json);
} catch (err) {
    if (err instanceof ValidationError) {
        alert(`Invalid data:` + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) { // (*)
        alert(`JSON Syntax Error:` + err.message);
    } else {
        throw err; // unknown error, rethrow it (**)
    }
}

// * Further inheritance
class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property:" + property);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}

try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Invalid data: " + err.message); // Invalid data: No property: name
      alert(err.name); // PropertyRequiredError
      alert(err.property); // name
    } else if (err instanceof SyntaxError) {
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err; // unknown error, rethrow it
    }
  }

// * Please note that this.name in PropertyRequiredError constructor is again assigned manually.
// todo: Let's call it `MyError`
class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError extends MyError {}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: " + property);
        this.property = property
    }
}

// name is correct
alert(new PropertyRequiredError("field").name); // PropertyRequiredError

try {
    //...
    readUser()  // the potential error source
    //...
  } catch (err) {
    if (err instanceof ValidationError) {
      // handle validation errors
    } else if (err instanceof SyntaxError) {
      // handle syntax errors
    } else {
      throw err; // unknown error, rethrow it
    }
  }
// * In the code above we can see two types of errors, but there can be more.

// ? do we really want to check for all error types one-by-one every time? -- NO
// * The technique that we describe here is called “wrapping exceptions”.

/*

* We’ll make a new class ReadError to represent a generic “data reading” error.
* The function readUser will catch data reading errors that occur inside it, such as ValidationError and SyntaxError, and generate a ReadError instead.
* The ReadError object will keep the reference to the original error in its cause property.

* Then the code that calls readUser will only have to check for ReadError, not for every kind of data reading errors. And if it needs more details of an error, it can check its cause property.

*/

class ReadError extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
      this.name = 'ReadError';
    }
  }
  
  class ValidationError extends Error { /*...*/ }
  class PropertyRequiredError extends ValidationError { /* ... */ }
  
  function validateUser(user) {
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
  
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
  }
  
  function readUser(json) {
    let user;
  
    try {
      user = JSON.parse(json);
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw new ReadError("Syntax Error", err);
      } else {
        throw err;
      }
    }
  
    try {
      validateUser(user);
    } catch (err) {
      if (err instanceof ValidationError) {
        throw new ReadError("Validation Error", err);
      } else {
        throw err;
      }
    }
  
  }
  
  try {
    readUser('{bad json}');
  } catch (e) {
    if (e instanceof ReadError) {
      alert(e);
      // Original error: SyntaxError: Unexpected token b in JSON at position 1
      alert("Original error: " + e.cause);
    } else {
      throw e;
    }
  }