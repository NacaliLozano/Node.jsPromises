//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let FirstPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("First Promise resolved")
    },6000)})

let SecondPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Second Promise resolved")
    },3000)})
//Console log before calling the promise
console.log("Before calling promises");

//Call the promise and wait for it to be resolved and then print a message.
FirstPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
SecondPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })

//Console log after calling the promise
  console.log("After calling promise");