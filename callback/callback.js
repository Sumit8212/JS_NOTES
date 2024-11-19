// 1. callback :- In Node.js, a callback is a function passed as an argument to another function,
// and it is executed once the main function completes its task.

// Define a function that accepts another function as a callback
function greetUser(name, callback) {
    try {
        console.log("Hello, " + name + "!");
        callback();
    } catch (error) {
        console.error("An error occurred while greeting the user:", error);
    }
}

// Define a callback function
function showGreetingCompleted() {
    console.log("Greeting is completed.");
}

// Call the greetUser function and pass showGreetingCompleted as a callback
greetUser("Vikram", showGreetingCompleted);


// Real-World Example with Asynchronous Operation
const fs = require('fs');

// Define a callback function
function callback(err, data) {
    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
}
fs.readFile('example.txt', 'utf8', callback); // Asynchronous operation with callback
// output : File content: Hello callback.


