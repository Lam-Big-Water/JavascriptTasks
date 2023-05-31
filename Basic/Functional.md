# Functional

1.Write a JavaScript program to print the current widow contents.

### Code

```javascript
function print_current_page() {
    window.print();
}
```

### Explanation:

Window.print() is used to open the Print Dialog to print the current document.

---

2.Write a JavaScript program to get the current date.

### Expected Output:
mm-dd-yyyy,mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

### Code

```javascript
let today = new Date();
let yyyy = today.getFullYear();
let mm = today.getMonth()+1;
let dd = today.getDate();

mm = (mm < 10) ? mm = `0${mm}` : mm;
dd = (dd < 10) ? dd = `0${dd}` : dd;

today = `${mm}-${dd}-${yyyy}`;
console.log(today);
```

### Project Difficulties:

2.1getMonth() is an integer between 0 and 11.

```javascript
let mm = today.getMonth()+1;
```