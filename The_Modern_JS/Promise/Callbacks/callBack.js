function loadScript (src, callback) {
    let script = document.createElement('script');
    script.src = src;
    alert('created');
    script.onload = () => callback('got it');
    alert('loaded');
    document.head.append(script);
    alert('appended');
};

loadScript('./test.js', function (text) {
    //  * the callback runs after the script is loaded
    alert(text);
    newFunction(); // * so now it  works
});