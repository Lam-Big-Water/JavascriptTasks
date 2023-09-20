
## prototype

```javascript
function Person() {

}

Person.prototype.name = 'Kevin';
let person1 = new Person();
let person2 = new Person();

console.log(person1.name)// Kevin
console.log(person2.name)// Kevin
```
![Relationship](https://camo.githubusercontent.com/02789d6806b75d34b2017021f58efa3aa7a2ee6be8a0c05fb3293438884b9ec0/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065312e706e67)

---
---


## __proto__

```javascript
function Person() {

}

let person = new Person();
console.log(person.__proto__ === Person.prototype);// true
```
![Relationship](https://camo.githubusercontent.com/3dde335faa15d03ffe3b907f6e5c2b5f4d2183caa4c47ac7486794bc407f663c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065322e706e67)

---
---

## constructor

```javascript
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
```
![Relationship](https://camo.githubusercontent.com/0aaf005afda83d4e2fdd2bbe523df228b567a091317a2154181771b2706ea2ef/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065332e706e67)

---
---

## summary

```javascript
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
```
---
---

## instances & prototype

```javascript
function Person() {

}

Person.prototype.name = 'Kevin';

let person = new Person();

person.name = 'Daisy';
console.log(person.name);// Daisy

delete person.name;
console.log(person.name);// Kevin
```

## prototype of prototype

```javascript
var obj = new Object();
obj.name = 'Kevin'
console.log(obj.name) // Kevin
```
![relationship](https://camo.githubusercontent.com/ad0ee0e2594c1ac471bbb42321963c130f4fe1ef9ec70389c8ced54544d3fd6c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065342e706e67)

## prototype chaining

what about the prototype of Object.prototype ?
```javascript
console.log(Object.prototype.__proto__ === null) // true
```
![relationship](https://camo.githubusercontent.com/9a69b0f03116884e80cf566f8542cf014a4dd043fce6ce030d615040461f4e5a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065352e706e67)

## question

constructor
```javascript
function Person() {

}
var person = new Person();
console.log(person.constructor === Person); // true

person.constructor === Person.prototype.constructor

// There is no constructor attribute in person, it reads this attribute in Person.prototype
```