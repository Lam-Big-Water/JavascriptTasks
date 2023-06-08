# Modifying The Document

1.Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

### Code

```javascript
function animateText(id) {
    const element = document.getElementById(id);
    const textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;

    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}
```

### Knowledge Points:
The **substring()** method returns the part of the **string** from the start index up to and excluding the end index, or the end of the string if no end index is supplied.
```javascript
const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: 'oz'
console.log(str.substring(2));
// Expected output: 'zilla'
```