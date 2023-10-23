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
const updatedObj = {...oldObj, alpha: 1};
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
// * Methods are functions and functions have methods themselves.
obj.someMethod('a', 'b');
// * This invocation is equivalent to:
obj.someMethod.call(obj, 'a', 'b');
// * Which is also equivalent to:
const func = obj.someMethod;
func.call(obj, 'a', 'b');
// * .call() makes the normally implicit parameter "this" explicit: When invoking a function via .call(),
// * -the first parameter is "this", followed by the regular (explicit) function parameters.


// * 28.5.4 Methods and .bind()
// todo: In the following code, we use .bind() to turn method .says() into the stand-alone function func():
const loveSong = {
    first: 'Jane',
    says(text) {
        return `${this.first} says "${text}"`; // (A)
    },
};
// * Setting "this" to loveSong via .bind() is crucial here. Otherwise, func_() wouldn't work properly because
// * -"this" is used in line A.
const func_ = loveSong.says.bind(loveSong, 'hello');
asserts.equal(func(), 'Jane says "hello');

// * 28.5.5 "this" pitfall: extracting methods
// todo: In the following example, we fail when we extract method orangeMoon.says(), store it in the fun, and function-call fun.
const orangeMoon = {
    first: 'hidden',
    says(text) {
        return `${this.first} says "${text}"`;
    },
};
const fun = orangeMoon.says; // extract the method
asserts.throws(
    () => fun('hello'), // (A)
    {
        name: 'TypeError',
        message: "Cannot read properties of undefined (reading 'first')",
    }
);
// * "this" is undefined. Line A is therefore equivalent to:
assert.throws(
    () => orangeMoon.says.call(undefined, 'hello'), // `this` is undefined!
    {
        name: 'TypeError',
        message: "Cannot read properties of undefined (reading 'first')",
    }
);

// ? How do we fix this ? We need to use .bind() to extract method .says():
// * The .bind() ensures that `this` is always orangeMoon when we call func2().
const func2 = orangeMoon.says.bind(orangeMoon);
asserts.equal(func2('hello'), 'Jane says "hello"');
// * We can also use arrow functions to extract methods:
const func3 = text => orangeMoon.says(text);
asserts.equal(func3('hello'), 'Jane says "hello"');

// * Actual web development:
class ClickHandler {
    constructor(id, elem) {
        this.id = id;
        elem.addEventListener('click', this.handlerClick); // (A)
    }
    handlerClick(event) {
        alert('Clicked' + this.id);
    }
}
// * In line A, we don't extract the method .handleClick()properly. Instead, we should do:
const listener = this.handleClick.bind(this);
elem.addEventListener('click', listener);
// Later, possibly:
elem.removeEventListener('click', listener);
// * Each invocation of .bind() creates a new function. That's why we need to store the result somewhere of we want to remove it later on.

// ? 28.5.5.2 How to avoid the pitfall of extracting methods ?
// * By binding `this` or by using an arrow function.

// * 28.5.6 `this` pitfall: accidentally shadowing `this`
// ! Accidentally shadowing `this` is only an issue with ordinary functions - Arrow functions don't shadow `this`.
// ? Consider the following problem: when we are inside an ordinary function, we can't access
// ? -the `this` of the surrounding scope because the ordinary function has its own `this`.
// ? -In other words, a variable in an inner scope hides a variable in an outer scope. That is called `shadowing`.
const prefixer = {
    prefix: '==>',
    prefixStringArray(stringArray) {
        return stringArray.map(
            function (x) {
                return this.prefix + x; // (A)
            }
        );
    },
};
asserts.throws(
    () => prefixer.prefixStringArray(['a', 'b']),
    {
        name: 'TypeError',
        message: "Cannot read properties of undefined (reading 'prefix')",
    }
);

// todo: The simplest way to fix this problem is via an arrow function, which doesn't have its own this and therefore doesn't shadow anything:
const fixPrefixer = {
    prefix: '==>',
    prefixStringArray(stringArray) {
        return stringArray.map(
            () => {
                return this.prefix + x;
            }
        );
    },
};
asserts.deepEqual(
    fixPrefixer.prefixStringArray(['a', 'b']),
    ['==> a', '==> b']
);
// todo: We can also store `this` in a different variable (line A), so that it doesn't get shadowed:
prefixStringArray(stringArray) {
    const that = this; // (A)
    return stringArray.map(
      function (x) {
        return that.prefix + x;
      });
  },
// todo: Another option is to specify a fixed `this` for callback via .bing() (line A):
prefixStringArray(stringArray) {
    return stringArray.map(
        function (x) {
            return this.prefix + x;
        }.bind(this) // (A)
    );
},
// todo: Lastly .map() lets us specify a value for `this` (line A) that it uses when invoking the callback:
prefixStringArray(stringArray) {
    return stringArray.map(
      function (x) {
        return this.prefix + x;
      },
      this); // (A)
  },

// * 28.5.6.1 Avoiding the pitfall of accidentally shadowing `this`

// * 28.5.7 The value of `this` in various contexts (advanced)
// ? What is the value of `this` in various contexts ?
// * Inside a callable entity, the value of `this` depends on how the callable entity 
// * => is invoked and what kind of callable entity it is:
/*
* Function call:
*  Ordinary functions: this === undefined(in strict mode)
*  Arrow functions: `this` is same as in surrounding scope(lexical `this`)
* Method call: `this` is receiver of call
* New: `this` refers to the newly created instance

* We can also access `this` in all common top-level scopes:
  * <script> element: this === globalThis
  * ECMA-Script modules: this === undefined
  * CommonJS modules: this === module.exports

*/

// * 28.6 Optional chaining for property getting and method calls [ES2020] (advanced)
// * The following kinds of optional chaining operations exist:
obj?.prop // optional fixed property getting
obj?.[<<expr>>] // optional dynamic property getting
func?.(<<arg0>>, <<arg1>>) // optional function or method

/*

* The rough idea is:
    * If the value before the question mark is neither `undefined` nor `null`,
    * -then perform the operation after the question mark.
    
    * Otherwise, return `undefined`.
*/
// * Each of the three syntaxes is covered in more detail later. These are a few first examples:
> null?.prop
undefined
> {prop: 1}?.prop
1

> null?.(123)
undefined
> String?.(123)
'123'

// * 28.6.1 Example: optional fixed property getting
const persons = [
    {
      surname: 'Zoe',
      address: {
        street: {
          name: 'Sesame Street',
          number: '123',
        },
      },
    },
    {
      surname: 'Mariner',
    },
    {
      surname: 'Carmen',
      address: {
      },
    },
  ];
// * We can use optional chaining to safely extract street names:
const streetNames = persons.map(
    p => p.address?.street?.name);
  assert.deepEqual(
    streetNames, ['Sesame Street', undefined, undefined]
);

// * 28.6.1.1 Handling defaults via nullish coalescing
// todo: The nullish coalescing operator allows us to use the default value '(no name)' instead of undefined:
streetNames = persons.map(
    p => p.address?.street?.name ?? '(no name)');
  assert.deepEqual(
    streetNames, ['Sesame Street', '(no name)', '(no name)']
  );

// * 28.6.2 The operators in more detail (advanced)
// * 28.6.2.1 Optional fixed property getting
o?.prop
(o !== undefined && o !== null) ? o.prop : undefined
assert.equal(undefined?.prop, undefined);
assert.equal(null?.prop,      undefined);
assert.equal({prop:1}?.prop,  1);

// * 28.6.2.2 Optional dynamic property getting
o?.[«expr»]
(o !== undefined && o !== null) ? o[«expr»] : undefined
const key = 'prop';
assert.equal(undefined?.[key], undefined);
assert.equal(null?.[key], undefined);
assert.equal({prop:1}?.[key], 1);

// * 28.6.2.3 Optional function or method call
f?.(arg0, arg1)
(f !== undefined && f !== null) ? f(arg0, arg1) : undefined
assert.equal(undefined?.(123), undefined);
assert.equal(null?.(123), undefined);
assert.equal(String?.(123), '123');

// ! Note that this operator produces an error if its left-hand side is not callable:
assert.throws(
    () => true?.(123),
    TypeError);

// * 28.6.3 Short-circuiting with optional property getting
function invokeM(value) {
    return value?.a.b.m(); // (A)
  }
  
  const obj = {
    a: {
      b: {
        m() { return 'result' }
      }
    }
  };
  assert.equal(
    invokeM(obj), 'result'
  );
  assert.equal(
    invokeM(undefined), undefined // (B)
  );
// * Other short-circuiting operators are:
(a && b) // : b is only evaluated if a is truthy.
(a || b) // : b is only evaluated if a is falsy.
(c ? t : e) // : If c is truthy, t is evaluated. Otherwise, e is evaluated.

// * 28.6.4 Optional chaining: downsides and alternatives
// * Optional chaining also has downsides:
// * Deeply nested structures are more difficult to manage & harder to debug.

// * An alternative to optional chaining is to extract the information once, in a single location:
// * We can either write a helper function that extracts the data.
// * Or we can write a function whose input is deeply nested data and whose output is simpler, normalized data.
































// * 2.Prototype chains: Each object has a chain of zero or more prototype objects.
// * Prototypes are JavaScript's core inheritance mechanism.

// * 3.Classes: JavaScript's classes are factories for objects.
// * The relationship between a class and its instances is based on prototypal inheritance.

// * 4. Sub-classing: The relationship between a subclass and its superclass is also based on prototypal inheritance.

