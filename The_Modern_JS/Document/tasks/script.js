'use strict';

/*
createTextNode vs innerHTML vs textContent
importance: 5
We have an empty DOM element elem and a string text.

Which of these 3 commands will do exactly the same?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text

* answer: 1 & 3. Both commands result in adding the text “as text” into the elem.

*/


/*
Clear the element
importance: 5
Create a function clear(elem) that removes everything from the element.
*/ 

// function clear (num) {
//     let elem = document.querySelector('.elem');
//     console.log(elem);
//     setTimeout(() => elem.remove(), num * 1000);
// };
// clear(3);

/*
Create a list
importance: 4
Write an interface to create a list from user input.

For every list item:

Ask a user about its content using prompt.
Create the <li> with it and add it to <ul>.
Continue until the user cancels the input (by pressing Esc or via an empty entry).
All elements should be created dynamically.

If a user types HTML-tags, they should be treated like a text.
*/ 

// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//     let data = prompt('Enter the text for the list item', '');

//     if (!data) {
//         break;
//     }

//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
// }
// (function createLi() {
//   // get elem
//   const createBtn = document.querySelector('.create-btn');
//   const container = document.querySelector('.container');
//   const ul = document.createElement('ul');
//   container.append(ul);

//   createBtn.addEventListener('click',  function() {
//     const li = document.createElement('li');
//     ul.append(li);
//   });

// })();

/*
Create a tree from the object
importance: 5
Write a function createTree that creates a nested ul/li list from the nested object.

For instance:

let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

*/

let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };

// const container = document.querySelector('.container');

// function createTree(container, data) {
//   for (const key in data) {
//     console.log(key);
//     console.log(Object.keys(data[key]));
//     if (!Object.keys(data[key]).length) {
//       let li = document.createElement('li');
//       li.innerHTML = key;
//       container.append(li);
//       continue;
//     }
//     let li = document.createElement('li');
//     let ul = document.createElement('ul');
//     container.append(li);
//     li.append(key, ul);
//     console.log(data[key]);
//     createTree(ul, data[key]);
//   }
// }

// createTree(container, data);

const container = document.querySelector('.container');
function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(data) {
    let li = '';
    let ul;
    Object.keys(data)
        .forEach((k) => {
            console.log(k);
            console.log(data[k]);
            li += '<li>' + k + createTreeText(data[k]) + '</li>';

            console.log(li);

            if (li) {
                ul = '<ul>' + li + '</ul>';
            }
        })
        // <li>Fish <ul><li>trout</li></ul> </li>
    // for (let key of convent) {
    //     li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    // }

    // if (li) {
    //     ul = '<ul>' + li + '</ul>';
    // }



    return ul || '';
}

createTree(container, data);
// step 1
// Object.keys(data).forEach((k) => {
//   console.log(k);
// })
// Fish
// Tree

// step 2
// Object.keys(data.Fish).forEach((k) => {
//   console.log(k + '-Fish');
// })
// Object.keys(data.Tree).forEach((k) => {
//   console.log(k + '-Tree');
// })

/*
trout-Fish
salmon-Fish

Huge-Tree
Flowering-Tree
*/

// step 3
// Object.keys(data.Fish.trout).forEach((k) => {
//  console.log('none');
// })
// Object.keys(data.Tree.Huge).forEach((k) => {
//   console.log(k + '-Huge');
// })
// Object.keys(data.Tree.Flowering).forEach((k) => {
//   console.log(k + '-Tree');
// })


/*
Show descendants in a tree
importance: 5
There’s a tree organized as nested ul/li.

Write the code that adds to each <li> the number of its descendants. Skip leaves (nodes without children).

*/

// let lis = document.getElementsByTagName('li');
// console.log(lis);

// for (let li of lis) {
//   // get the count of all <li> below this <li>
//   let descendantsCount = li.getElementsByTagName('li').length;
//   console.log(descendantsCount);

//   if (!descendantsCount) continue;

//   // add directly to the text node (append to the text)
//   li.firstChild.data += ' [' + descendantsCount + ']';
// }

/*
Create a calendar
importance: 4
Write a function createCalendar(elem, year, month).

The call should create a calendar for the given year/month and put it inside elem.

The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on till Sunday.

For instance, createCalendar(cal, 2012, 9) should generate in element cal the following calendar:

P.S. For this task it’s enough to generate the calendar, should not yet be clickable.

*/

// const calendar = document.querySelector('.container');

// function createCalendar(elem, year, month) {
//   let mon = month - 1;

//   let d = new Date(year, mon);
//   console.log(d);
//   let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';


//   for (let i = 0; i < getDay(d); i++) {
    
//     table += '<td></td>';
//   }


//   while (d.getMonth() == mon) {
//     table += '<td>' + d.getDate() + '</td>';

//     if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
//       table += '</tr><tr>';
//     }

//     d.setDate(d.getDate() + 1);
//   }

//   if (getDay(d) != 0) {
//     for (let i = getDay(d); i < 7; i++) {
//       table += '<td></td>';
//     }
//   }

//   // close the table
//   table += '</tr></table>';


//   elem.innerHTML = table;
// }

// function getDay(data) {
//   console.log(data);
//   let day = data.getDate();
//   // console.log(day);
//   if (day == 0) day = 7;
//   return day - 1;
// }

// createCalendar(calendar, 2023, 11);

/*
Colored clock with setInterval
importance: 4
Use HTML/CSS for the styling, JavaScript only updates time in elements.
*/ 
// let container = document.querySelector('.container');
// let hours = document.querySelector('.hour');
// let minutes = document.querySelector('.minutes');
// let seconds = document.querySelector('.seconds');
// let start = document.querySelector('.start');
// let stop = document.querySelector('.stop');

// function update () {
//   let date = new Date();
//   let hours = date.getHours();
//   if (hours < 10) hours = '0' + hours;
//   container.children[0].innerHTML = hours;

//   let minutes = date.getMinutes();
//   if (minutes < 10) minutes = '0' + minutes;
//   container.children[1].innerHTML = minutes;

//   let seconds = date.getSeconds();
//   if (seconds < 10) seconds = '0' + seconds;
//   container.children[2].innerHTML = seconds;
// }
// update();


// let timerId;

// start.addEventListener('click', () => clockStart());
// stop.addEventListener('click', () => clockStop());

// function clockStart () {
//   if (!timerId) {
//     timerId = setInterval(update, 1000);
//   }
//   update();
// }

// function clockStop () {
//   clearInterval(timerId);
//   timerId = null;
// }