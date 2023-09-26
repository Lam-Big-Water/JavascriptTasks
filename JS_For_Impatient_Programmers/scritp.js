// * Object

// * Figure   https://exploringjs.com/impatient-js/img-book/objects/oop_steps_1_2.svg

// * 1.Single object: How do object, JavaScript's basic OOP building blocks, work in isolation ?

// * 28.1.1 Single object

// * Creating an object via an object literal
const myObject = {
    myProperty: 1,
    myMethod() {
        return 2;
    },
};
console.log(myObject.myProperty, myObject.myMethod());

// * Spreading into object:
const original = {
    a: 1,
    b: {
        c: 3,
    },
};
// todo: Spreading "..." copies one object into another one.
const modifiedCopy = {
    ...original,
    d: 4,
};
console.log(modifiedCopy);
// ! spreading copies shallowly (property values are shared)
modifiedCopy.a = 5; // does not affect "original"
modifiedCopy.b.c = 6; // affects "original"

// todo: We can also use spreading to make an unmodified (shallow) copy of an object:
const newOne = {...original};
console.log(newOne);



























// * 2.Prototype chains: Each object has a chain of zero or more prototype objects.
// * Prototypes are JavaScript's core inheritance mechanism.

// * 3.Classes: JavaScript's classes are factories for objects.
// * The relationship between a class and its instances is based on prototypal inheritance.

// * 4. Sub-classing: The relationship between a subclass and its superclass is also based on prototypal inheritance.

