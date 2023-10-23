let json = `{"name": "John", "age": 30}`;

class ValidationError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "ValidationError"; // (2)
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property:" + property);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}
// * let's try to use it in `readUser(json)`:
// Usage
function readUser(json) {
    let user = JSON.parse(json);
    
    if (!user.address) {
        throw new ValidationError("No field: address");
    }

    return user;
}

// Working example with try..catch

try {
    let user = readUser(json);
} catch (err) {
    if (err instanceof ValidationError) {
        alert(`Invalid data:` + err.message); // Invalid data: No field: address
        alert(err.name); // PropertyRequiredError
        alert(err.property); // name
    } else if (err instanceof SyntaxError) { // (*)
        alert(`JSON Syntax Error:` + err.message);
    } else {
        throw err; // unknown error, rethrow it (**)
    }
}

