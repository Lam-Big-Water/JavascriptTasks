new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
    throw new Error('error');
})
    .finally(() => alert("Promise ready")) // triggers first
    .then(result => alert(result)) // .then shows "value"
    .catch(err => alert(err)); // .catch shows the error

