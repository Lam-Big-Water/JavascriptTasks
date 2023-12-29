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

// * 28.6.5 Frequently asked questions
// * 28.6.5.1 What is a good mnemonic for the optional chaining operator (?.)? 
// todo: IF (?) the left-hand side is not nullish
// todo: THEN (.) access a property.

// * 28.6.5.3 Why does null?.prop evaluate to undefined and not null? 
/* 
* The operator ?. is mainly about its right-hand side: Does property .prop exist? If not, stop early.
* Therefore, keeping information about its left-hand side is rarely useful.
*/

// * 28.7 Dictionary objects (advanced)
// * Objects work best as fixed-layout objects. But before ES6, JavaScript did not have a data structure for dictionaries (ES6 brought Maps). 
// * 28.7.1 Quoted keys in object literals
// * So far, we have always used fixed-layout objects. Property keys were fixed tokens that had to be valid identifiers and internally became strings:
const obj = {
    mustBeAnIdentifier: 123,
  };
  
  // Get property
  assert.equal(obj.mustBeAnIdentifier, 123);
  
  // Set property
  obj.mustBeAnIdentifier = 'abc';
  assert.equal(obj.mustBeAnIdentifier, 'abc');

// * Two syntaxes enable us to use arbitrary strings as property keys.
const obj = {
    'Can be any string!': 123,
  };
// Get property
assert.equal(obj['Can be any string!'], 123);

// Set property
obj['Can be any string!'] = 'abc';
assert.equal(obj['Can be any string!'], 'abc');

// We can also use these syntaxes for methods:
const obj = {
    'A nice method'() {
      return 'Yes!';
    },
  };
  
  assert.equal(obj['A nice method'](), 'Yes!');

// * 28.7.2 Computed keys in object literals 
const obj = {
    ['Hello world!']: true,
    ['p'+'r'+'o'+'p']: 123,
    [Symbol.toStringTag]: 'Goodbye', // (A)
    // The main use case for computed keys is having symbols as property keys (line A).
};

assert.equal(obj['Hello world!'], true);
assert.equal(obj.prop, 123);
assert.equal(obj[Symbol.toStringTag], 'Goodbye');

// * Note that the square brackets operator for getting and setting properties works with arbitrary expressions:
assert.equal(obj['p'+'r'+'o'+'p'], 123);
assert.equal(obj['==> prop'.slice(4)], 123);

// Methods can have computed property keys, too:
const methodKey = Symbol();
const obj = {
  [methodKey]() {
    return 'Yes!';
  },
};

assert.equal(obj[methodKey](), 'Yes!');

// * 28.7.3 The in operator: is there a property with a given key? #
const obj = {
    alpha: 'abc',
    beta: false,
  };
  
  assert.equal('alpha' in obj, true);
  assert.equal('beta' in obj, true);
  assert.equal('unknownKey' in obj, false);
  
// * 28.7.3.1 Checking if a property exists via truthiness 
// We can also use a truthiness check to determine if a property exists:
assert.equal(
    obj.alpha ? 'exists' : 'does not exist',
    'exists');
assert.equal(
    obj.unknownKey ? 'exists' : 'does not exist',
    'does not exist');
// ! There is, however, one important caveat: truthiness checks fail if the property exists, but has a falsy value (undefined, null, false, 0, "", etc.):
assert.equal(
    obj.beta ? 'exists' : 'does not exist',
    'does not exist'); // should be: 'exists'

// * 28.7.4 Deleting properties 
const obj = {
    myProp: 123,
  };
  
  assert.deepEqual(Object.keys(obj), ['myProp']);
  delete obj.myProp;
  assert.deepEqual(Object.keys(obj), []);
  
// * 28.7.5 Enumerability 
const enumerableSymbolKey = Symbol('enumerableSymbolKey');
const nonEnumSymbolKey = Symbol('nonEnumSymbolKey');

// We create enumerable properties via an object literal
const obj = {
  enumerableStringKey: 1,
  [enumerableSymbolKey]: 2,
}

// For non-enumerable properties, we need a more powerful tool
Object.defineProperties(obj, {
  nonEnumStringKey: {
    value: 3,
    enumerable: false,
  },
  [nonEnumSymbolKey]: {
    value: 4,
    enumerable: false,
  },
});

// Non-enumerable properties are ignored by spreading:
assert.deepEqual(
  {...obj},
  {
    enumerableStringKey: 1,
    [enumerableSymbolKey]: 2,
  }
);

// * 28.7.6 Listing property keys via Object.keys() etc.
const enumerableSymbolKey = Symbol('enumerableSymbolKey');
const nonEnumSymbolKey = Symbol('nonEnumSymbolKey');

const obj = {
  enumerableStringKey: 1,
  [enumerableSymbolKey]: 2,
}
Object.defineProperties(obj, {
  nonEnumStringKey: {
    value: 3,
    enumerable: false,
  },
  [nonEnumSymbolKey]: {
    value: 4,
    enumerable: false,
  },
});

assert.deepEqual(
  Object.keys(obj),
  ['enumerableStringKey']
);
assert.deepEqual(
  Object.getOwnPropertyNames(obj),
  ['enumerableStringKey', 'nonEnumStringKey']
);
assert.deepEqual(
  Object.getOwnPropertySymbols(obj),
  [enumerableSymbolKey, nonEnumSymbolKey]
);
assert.deepEqual(
  Reflect.ownKeys(obj),
  [
    'enumerableStringKey', 'nonEnumStringKey',
    enumerableSymbolKey, nonEnumSymbolKey,
  ]
);

// * 28.7.7 Listing property values via Object.values() 
// todo: Object.values() lists the values of all enumerable string-keyed properties of an object:
const firstName = Symbol('firstName');
const obj = {
  [firstName]: 'Jane',
  lastName: 'Doe',
};
assert.deepEqual(
  Object.values(obj),
  ['Doe']);

// * 28.7.8 Listing property entries via Object.entries() [ES2017]
// todo: Object.entries() lists all enumerable string-keyed properties as key-value pairs. Each pair is encoded as a two-element Array:
const firstName = Symbol('firstName');
const obj = {
  [firstName]: 'Jane',
  lastName: 'Doe',
};
assert.deepEqual(
  Object.entries(obj),
  [
    ['lastName', 'Doe'],
]);

// * 28.7.8.1 A simple implementation of Object.entries() 
function entries(obj) {
    return Object.keys(obj)
    .map(key => [key, obj[key]]);
}

// * 28.7.9 Properties are listed deterministically
// The following example demonstrates how property keys are sorted according to these rules:
> Object.keys({b:0,a:0, 10:0,2:0})
[ '2', '10', 'b', 'a' ]

// * 28.7.10 Assembling objects via Object.fromEntries() [ES2019] 
// todo: Given an iterable over [key, value] pairs, Object.fromEntries() creates an object:
const symbolKey = Symbol('symbolKey');
assert.deepEqual(
  Object.fromEntries(
    [
      ['stringKey', 1],
      [symbolKey, 2],
    ]
  ),
  {
    stringKey: 1,
    [symbolKey]: 2,
  }
);
// * 28.7.10.1 Example: pick() 
// * 28.7.10.2 Example: invert() 

// * 28.7.10.3 A simple implementation of Object.fromEntries()
// todo: The following function is a simplified version of Object.fromEntries():
function fromEntries(iterable) {
    const result = {};
    for (const [key, value] of iterable) {
      let coercedKey;
      if (typeof key === 'string' || typeof key === 'symbol') {
        coercedKey = key;
      } else {
        coercedKey = String(key);
      }
      result[coercedKey] = value;
    }
    return result;
  }

// * 28.7.11 The pitfalls of using an object as a dictionary 
// ! If we use plain objects (created via object literals) as dictionaries, we have to look out for two pitfalls.
// * 1_The first pitfall is that the in operator also finds inherited properties:
const dict = {};
assert.equal('toString' in dict, true);
// * We want dict to be treated as empty, but the in operator detects the properties it inherits from its prototype, Object.prototype.
// * 2_The second pitfall is that we can’t use the property key __proto__ because it has special powers (it sets the prototype of the object):
const dict = {};

dict['__proto__'] = 123;
// No property was added to dict:
assert.deepEqual(Object.keys(dict), []);

// * 28.7.11.1 Safely using objects as dictionaries
/*
 * So how do we avoid the two pitfalls?
 * If we can, we use Maps.
 * If we can’t, we use a library
 * If that’s not possible or desired, we use an object without a prototype.
*/
// The following code demonstrates using prototype-less objects as dictionaries:
const dict = Object.create(null); // prototype is `null`

assert.equal('toString' in dict, false); // (A)

dict['__proto__'] = 123;
assert.deepEqual(Object.keys(dict), ['__proto__']);
/*
 * We avoided both pitfalls:
 * First, a property without a prototype does not inherit any properties (line A).
 * Second, in modern JavaScript, __proto__ is implemented via
 * -Object.prototype. That means that it is switched off if Object.prototype is not in the prototype chain.
*/

// * 28.8 Property attributes and freezing objects (advanced) 
// * 28.8.1 Property attributes and property descriptors [ES5]
/* 
* Just as objects are composed of properties, properties are composed of attributes. 
* writable: Is it possible to change the value of the property?
* enumerable: Is the property considered by Object.keys(), spreading, etc.?
*/
const obj = { myProp: 123 };
assert.deepEqual(
  Object.getOwnPropertyDescriptor(obj, 'myProp'),
  {
    value: 123,
    writable: true,
    enumerable: true,
    configurable: true,
  });
// And this is how we change the attributes of obj.myProp:
assert.deepEqual(Object.keys(obj), ['myProp']);

// Hide property `myProp` from Object.keys()
// by making it non-enumerable
Object.defineProperty(obj, 'myProp', {
  enumerable: false,
});

assert.deepEqual(Object.keys(obj), []);

// ? Further reading:
// ? Enumerability is covered in greater detail earlier in this chapter.
// ? For more information on property attributes and property descriptors, see Deep JavaScript.

// * 28.8.2 Freezing objects [ES5]
// todo: Object.freeze(obj) makes obj completely immutable: We can’t change properties, add properties, or change its prototype – for example:
const frozen = Object.freeze({ x: 2, y: 5 });
assert.throws(
  () => { frozen.x = 7 },
  {
    name: 'TypeError',
    message: /^Cannot assign to read only property 'x'/,
  });
// * Under the hood, Object.freeze() changes the attributes of properties.
// ! There is one caveat: Object.freeze(obj) freezes shallowly. That is, only the properties of obj are frozen but not objects stored in properties.

// * 28.9 Prototype chains
/*
 * Prototypes are JavaScript’s only inheritance mechanism: Each object has a prototype that is either null or an object. In the latter case，
 * - the object inherits all of the prototype’s properties.
 */
// * In an object literal, we can set the prototype via the special property __proto__:
const proto = {
    protoProp: 'a',
  };
  const obj = {
    __proto__: proto,
    objProp: 'b',
  };
  
  // obj inherits .protoProp:
  assert.equal(obj.protoProp, 'a');
  assert.equal('protoProp' in obj, true);
/*
 * Given that a prototype object can have a prototype itself, we get a chain of objects – the so-called prototype chain.
 * - Inheritance gives us the impression that we are dealing with single objects, but we are actually dealing with chains of objects.
*/
// * Fig. 9 shows what the prototype chain of obj looks like.
// https://exploringjs.com/impatient-js/img-book/objects/oo_proto_chain.svg
// * Figure 9: obj starts a chain of objects that continues with proto and other objects.
// * Non-inherited properties are called own properties. obj has one own property, .objProp.


// * 28.9.1 JavaScript’s operations: all properties vs. own properties
> const obj = { one: 1 };
> typeof obj.one // own
'number'
> typeof obj.toString // inherited
'function'
> Object.keys(obj)
[ 'one' ]

// * 28.9.2 Pitfall: only the first member of a prototype chain is mutated
const proto = {
  protoProp: 'a',
};
const obj = {
  __proto__: proto,
  objProp: 'b',
};
// In the beginning, obj has one own property
assert.deepEqual(Object.keys(obj), ['objProp']);

obj.protoProp = 'x'; // (A)

// We created a new own property:
assert.deepEqual(Object.keys(obj), ['objProp', 'protoProp']);

// The inherited property itself is unchanged:
assert.equal(proto.protoProp, 'a');

// The own property overrides the inherited property:
assert.equal(obj.protoProp, 'x');

// * The prototype chain of obj is depicted in fig. 10.
https://exploringjs.com/impatient-js/img-book/objects/oo_overriding.svg

// * 28.9.3 Tips for working with prototypes (advanced) 
// * 28.9.3.1 Getting and setting prototypes 
Object.getPrototypeOf(obj: Object) : Object
Object.create(proto: Object) : Object

// * If we have to, we can use Object.setPrototypeOf() to change the prototype of an existing object. But that may affect performance negatively.

// This is how these features are used:
const proto1 = {};
const proto2a = {};
const proto2b = {};

const obj1 = {
  __proto__: proto1,
  a: 1,
  b: 2,
};
assert.equal(Object.getPrototypeOf(obj1), proto1);

const obj2 = Object.create(
  proto2a,
  {
    a: {
      value: 1,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    b: {
      value: 2,
      writable: true,
      enumerable: true,
      configurable: true,
    },  
  }
);
assert.equal(Object.getPrototypeOf(obj2), proto2a);

Object.setPrototypeOf(obj2, proto2b);
assert.equal(Object.getPrototypeOf(obj2), proto2b);

// * 28.9.3.2 Checking if an object is in the prototype chain of another object
const a = {};
const b = {__proto__: a};
const c = {__proto__: b};

assert.equal(a.isPrototypeOf(b), true);
assert.equal(a.isPrototypeOf(c), true);

assert.equal(c.isPrototypeOf(a), false);
assert.equal(a.isPrototypeOf(a), false);

// * 28.9.4 Object.hasOwn(): Is a given property own (non-inherited)? [ES2022] 
const proto = {
  protoProp: 'protoProp',
};
const obj = {
  __proto__: proto,
  objProp: 'objProp',
}
assert.equal('protoProp' in obj, true); // (A)
assert.equal(Object.hasOwn(obj, 'protoProp'), false); // (B)
assert.equal(Object.hasOwn(proto, 'protoProp'), true); // (C)
// * Alternative before ES2022: .hasOwnProperty() but the referenced section explains how to work around them.

// * 28.9.5 Sharing data via prototypes
// ?  How can we avoid duplicating that method?
const jane = {
  firstName: 'Jane',
  describe() {
    return 'Person named '+this.firstName;
  },
};
const tarzan = {
  firstName: 'Tarzan',
  describe() {
    return 'Person named '+this.firstName;
  },
};

assert.equal(jane.describe(), 'Person named Jane');
assert.equal(tarzan.describe(), 'Person named Tarzan');

// * We can move it to an object PersonProto and make that object a prototype of both jane and tarzan:

const PersonProto = {
  describe() {
    return 'Person named ' + this.firstName;
  },
};
const jane = {
  __proto__: PersonProto,
  firstName: 'Jane',
};
const tarzan = {
  __proto__: PersonProto,
  firstName: 'Tarzan',
};
// * The name of the prototype reflects that both jane and tarzan are persons.
https://exploringjs.com/impatient-js/img-book/objects/oo_person_shared.svg
// * Figure 11: Objects jane and tarzan share method .describe(), via their common prototype PersonProto.

// * When we make the method call jane.describe(), this points to the receiver of that method call, jane
assert.equal(jane.describe(), 'Person named Jane');
assert.equal(tarzan.describe(), 'Person named Tarzan');






// * 2.Prototype chains: Each object has a chain of zero or more prototype objects.
// * Prototypes are JavaScript's core inheritance mechanism.

// * 3.Classes: JavaScript's classes are factories for objects.
// * The relationship between a class and its instances is based on prototypal inheritance.

// * 4. Sub-classing: The relationship between a subclass and its superclass is also based on prototypal inheritance.

