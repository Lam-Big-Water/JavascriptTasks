# Date


1.Write a JavaScript program to display the current day and time in the following format.
    > Sample Output: Today is: Monday.

    > Current time is : 10PM : 05 : 00 .

---

### Code
```javascript
const demo = document.getElementById('demo');

const currentDayTime = () => {
    let today = new Date();
    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
}

let dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let t = '';

t = (hour > 12) ? t = 'PM' : t = 'AM';

minute = (minute < 10) ? minute = '0' + minute : minute;
second = (second < 10) ? second = '0' + second : second;

return `Today is : ${dayList[day]} Current time is ${hour}${t}:${minute}:${second}`;

demo.innerText = currentDayTime();
```

### Explanations: 
Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC. 


### Project Difficulties:

1.1 How to create day list ?

    ```javascript
    let dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    ```

1.2 How to judge time is AM or PM ?

    ```javascript
    t = (hour > 12) ? t = 'PM' : t = 'AM';
    ```

1.3 How to maintain a double-digit format ?

    ```javascript
    minute = (minute < 10) ? minute = '0' + minute : minute;
    second = (second < 10) ? second = '0' + second : second;
    ```

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