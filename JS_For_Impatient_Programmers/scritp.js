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

// * 28.1.2 Prototype chains
// * Each object has null or an object as its prototype.

// ! `obj1` has no prototype (its prototype is `null`)
const  obj1 = Object.create(null); //(A)
asserts.equal(
    Object.getPrototypeOf(obj1), null // (B)
);

// ! `obj2` has the prototype `proto`
const proto = {
    protoProp: 'protoProp',
};
const obj2 = {
    __proto__: proto, // (C)
    objProp: 'objProp',
}
asserts.equal(
    Object.getPrototypeOf(obj2), proto
);

// * Notes:
// * -Setting an object's prototype while creating the object: line A, Line C
// * -Retrieving the prototype of an object: line B

// * Each object inherits all the properties of its prototype:
// ! `obj2` inherits .protoProp from `proto`
asserts.equal(
    obj2.protoProp, 'protoProp'
);
asserts.deepEqual(
    Reflect.ownKeys(obj2),
    ['objProp'] // own properties of `obj2`
)
// * The non-inherited properties of an object are called its own properties.
// * The most important use case for prototypes is that several objects share methods
// * -by inheriting them from a common prototype.


// * 28.2 What is an object ?
// todo: Objects in JavaScript:
// * An object is a set of slots (key-value entries).
// * Public slots & Private slots

// * 28.2.1 The two ways of using objects
// todo: There are two ways of using objects in JavaScript:
// * Fixed-layout objects: Whose keys are known at development time.
const fixedLayoutObject = {
    product: 'carrot',
    quantity: 4,
};
// * Dictionary objects: Whose keys are not known at development time.
const dictionaryObject = {
    ['one']: 1,
    ['two']: 2,
};
// * Note that the two ways can also be mixed: Some objects are both fixed-layout objects and dictionary objects.

// * 28.3 Fixed-layout object
// * 28.3.1 Object literals: properties
// * We can directly create objects - no need for classes!
const jane = {
    first: 'jane',
    last: 'Doe', // optional trailing comma
};

// * Reserved words are allowed:
const obj = {
    if: true,
    const: true,
};

// * Check object property keys:
Object.keys({a:1}); //['a']

// * 28.3.2 Object literals: property value shorthands
// * Whenever the value of a property is defined via a variable that has the same name as the key, we can omit the key.
function createPoint(x, y) {
    return {x, y}; // Same as: {x: x, y: y}
}
assert.deepEqual(
    createPoint(9, 2),
    {x: 9, y: 2}
);

// * 28.3.3 Getting properties
// * This is how we get(read) a property(line A):
const jan = {
    first: 'Jane',
    last: 'Doe',
};
//  Get property .first
assert.equal(jan.first, 'Jane'); // (A)

// * Getting an unknown property produces undefined:
assert.equal(jan.unknownProperty, undefined);

// * 28.3.4 Setting properties
// * This is how we set(write to) a property(line A):
const obj_ = {
    prop: 1,
};
assert.equal(obj.prop, 1);
obj.prop = 2; // (A)
assert.equal(obj.prop, 2);

// * We just changed an existing property via setting. If we set an unknown property, we create a new entry:
const obj = {};
assert.deepEqual(
    Object.keys(obj),[]
);

obj.unknownProperty = 'abc';
assert.deepEqual(
    Object.keys(obj), ['unknownProperty']
);

// * 28.3.5 Object literals; methods
const jazz = {
    first: 'jane', // value property
    says(text) {
        return `${this.first} says "${text}"`; // (A)
    }, // comma as separator (optional at end)
};
// * During the method call jazz.say('hello'), jazz is called the receiver of the method call and assigned to the special variable this.
// * -That enables method .says() to access the sibling property .first in line A.
assert.equal(jane.says('hello'), 'jane says "hello"');

// * 28.3.6 Object literals: accessors
// * An accessor is defined via syntax inside an object literal that looks like methods:
// * -a getter and a setter (i.e, each accessor has one or both of them).
// todo: Reading the property invokes the getter.
// todo: Writing to the property invokes the setter.

// * 28.3.6.1 Getters
// todo: A getter is created by prefixing a method definition with the modifier get:
const jac = {
    first: 'Jane',
    last: 'Doe',
    get full() {
        return `${this.first} ${this.last}`;
    },
};
assert.equal(jane.full, 'jane Doe');
jac.first = 'John';
assert.equal(jane.full, 'John Doe');

// * 28.3.6.2 Setters
// todo: A setter is created by prefixing a method definition with the modifier set:
const jac = {
    first: 'Jane',
    last: 'Doe',
    
    set full(fullName) {
        const parts = fullName.split(' ');
        this.first = parts[0];
        this.last = parts[1];
    },
};
jac.full = 'Richard Roe';
assert.equal(jane.first, 'Richard');
assert.equal(jane.last, 'Roe');

// * 28.4 Spreading into object literals(...)[ES2018]
// * Inside an object literal, a spread property adds the properties of another object to the current one:
const objs = {one: 1, two: 2};
const newObj = {...objs, three: 3}; // {one: 1, two: 2, three: 3}

// * If property keys clash, the property that is mentioned last "wins":
// * All values are spreadable, even undefined and null
const objClash = {one: 1, two: 2, three: 3};
const test = {...objClash, one: true}; // {one: true, two: 2, three: 3}
test = {one: true, ...objClash}; // {one: 1, two: 2, three: 3}

// ! Property ".length" of strings and Arrays is hidden from this kind of operation (it is not enumerable)
// ! Spreading includes properties whose keys are symbols (which are ignored by Object.key().values().entries())

// * 28.4.1 Use case for spreading: copying objects
// todo: We can use spreading to create a copy of an object original:
const original_ = {a: 1, b: {prop: true}};
// ! Copying is shallow
const copy = {...original_};
// * The first level of copy is really a copy: If we change any properties at that level, it does not affect the original:
copy.a = 2
asserts.deepEqual(
    original_, {a: 1, b: {prop: true}} // no change
);
// * However, deeper levels are not copied. For example, the value of ".b"
// * -is shared between original and copy. Changing ".b" in the copy also changes it in the original.
copy.b.prop = false;
asserts.deepEqual(
    original_, {a: 1, b: {prop: false}}
);
// ! JavaScript doesn't have built-in support for deep copying

// * 28.4.2 Use case for spreading: default values for missing properties
const DEFAULTS = {alpha: 'a', beta: 'b'};
const providedData = {alpha: 1};
const allData = {...DEFAULTS, ...providedData};
asserts.deepEqual(allData, {alpha: 1, beta: 'b'}); // Overriding its properties with those of providedData.
// * We can also specify them inside the object literal, individually:
const providedData2 = {alpha: 1};
allData = {alpha: 'a', beta: 'b', ...providedData2};
asserts.deepEqual(allData, {alpha: 1, beta: 'b'});
// * With spreading, we can change ".alpha" non-destructively - we make a copy of obj where ".alpha" has a different value:
const oldObj = {alpha: 'a', beta: 'b'};
const updatedObj = {...obj, alpha: 1};
assert.deepEqual(updatedObj, {alpha: 1, beta: 'b'});

// * 28.4.4 "Destructive spreading": Object.assign()[ES6]
// * This expression assigns all properties of source_1 to target, then all properties of
// * -source_2, etc. At the end, it returns target - for example:
const target = {a: 1};
const result = Object.assign(
    target,
    {b: 2},
    {c: 3, b: true}
);
asserts.deepEqual(
    result, {a: 1, b: true, c: 3}
    // target was modified and returned:
);
asserts.equal(result, target);

// * 28.5 Methods and the special variable this
// * 28.5.1 Methods are properties whose values are functions
const jsonl = {
    first: 'jsonl',
    says(text) {
        return `${this.first} says "${text}"`;
    },
};
// * Somewhat surprisingly, methods are functions:
assert.equal(typeof jsonl.says, 'function');

// * jsonl roughly looks as follows.
jsonl = {
    first: 'jsonl',
    says: function (text) {
        return `${this.first} says "${text}"`;
    },
};

// * 28.5.2 The special variable this
// ? Consider the following code:
// * In line B, "obj" is the receiver of a method call. It is passed to the function stored in 
// * -obj.someMethod via an implicit(hidden) parameter whose name is this (line A).
obj = {
    someMethod(x, y) {
        assert.equal(this, obj); // (A)
        assert.equal(x, 'a');
        assert.equal(y, 'b');
    }
};
obj.someMethod('a', 'b'); // (B)
// ? How to understand this ?
// * The best way to understand this is as an implicit parameter of ordinary functions (and therefore methods, too).

// * 28.5.3 Methods and .call()









// * 2.Prototype chains: Each object has a chain of zero or more prototype objects.
// * Prototypes are JavaScript's core inheritance mechanism.

// * 3.Classes: JavaScript's classes are factories for objects.
// * The relationship between a class and its instances is based on prototypal inheritance.

// * 4. Sub-classing: The relationship between a subclass and its superclass is also based on prototypal inheritance.

