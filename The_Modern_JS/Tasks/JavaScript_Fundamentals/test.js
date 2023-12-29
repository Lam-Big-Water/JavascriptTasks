// let input = prompt('please enter your data', '');
// alert(input);


// let move = 0;
// while(move < 3) {
//     console.log(`number ${move}!`);
//     move++;
// }

// let browser = prompt('Which browser are you using ?', '');
// if (browser === 'Edge') {
//     alert('fuck');
// } else if (browser === 'Chrome') {
//     alert('great');
// } else alert('We hope that this page looks ok!');

// let o = +prompt('a', '');

// switch (o) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// console.log(pow(3, 2));

const ask = (question, yes, no) => {
    confirm(question) ? yes() : no()
  }
  
  ask(
    "Do you agree?",
    function() { console.log("You agreed.") },
    function() { console.log("You canceled the execution.") }
  )