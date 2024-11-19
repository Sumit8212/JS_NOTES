/*
PROMISE: promise in JavaScript is an object that represents the completion or failure of an asynchronous operation.

USE : 
Promises are used to handle asynchronous operations, such as
reading files or making API calls, in a more organized and readable way.

Promises make code easier to read and maintain by avoiding "callback hell". 
Callback hell is when you have nested callback functions that can make code difficult to understand.

Promises have three states:

Pending: The initial state. The promise hasn't resolved or rejected yet.  (result is undefined)
Fulfilled: The operation completed successfully, and the promise has a resolved value.
Rejected: The operation failed, and the promise has a reason (error).

*/


//********************************************************  Creating a Promise **********************************************************/
const promise = new Promise((resolve, reject) => {
    // Perform asynchronous operation
    // If successful, resolve the promise
    // If not, reject the promise

    // Example:
    const success = true;
    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

// *******************************************************  Using a Promise ********************************************************/
promise
    .then((result) => {
        // Handle success (Runs if promise is resolved)
        console.log(result); // Output: "Operation successful" 
    })
    .catch((error) => {
        // Handle error (Runs if promise is rejected)
        console.error(error); // Output: "Operation failed"
    });

//************************************************ Detailed Example with Promises  ****************************************************/

// Functions returning Promises
const getUserData = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched user data");
            resolve({ userId, name: "John Doe" });
        }, 1000);
    });
};

const getOrders = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched user orders of user ", userId);
            resolve(["order1", "order2", "order3"]);
        }, 1000);
    });
};

const getOrderDetails = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched details for ${orderId}`);
            resolve({ orderId, product: "Laptop", price: 1200 });
        }, 1000);
    });
};

// Using Promises to handle the asynchronous flow

getUserData(1)
    .then((user) => {
        console.log("User Data:", user);
        return getOrders(user.userId); // Returns a new Promise
    })
    .then((orders) => {
        console.log("Orders:", orders);
        return getOrderDetails(orders[0]); // Returns a new Promise
    })
    .then((orderDetails) => {
        console.log("Order Details:", orderDetails);
    })
    .catch((error) => {
        console.error("An error occurred:", error); // Handles any error in the chain
    });

// Output:
// Fetched user data
// User Data: { userId: 1, name: 'John Doe' }
// Fetched user orders
// Orders: [ 'order1', 'order2', 'order3' ]
// Fetched details for order1
// Order Details: { orderId: 'order1', product: 'Laptop', price: 1200 }  


//***************************************** Running multiple promises at once *************************************/

// Use the Promise.all method to run multiple promises at once.
// Promise.all accepts an array of promises and resolves when all of them are resolved
// and returns their results in an array.

Promise.all([getUserData(1), getOrders(1)])
    .then((results) => {
        console.log('results: ', results); // Output: [ { userId: 1, name: 'John Doe' }, [ 'order1', 'order2', 'order3' ] ]
        const [user, orders] = results;
        console.log("User:", user); // Output: { userId: 1, name: 'John Doe' }
        console.log("Orders:", orders); // Output: [ 'order1', 'order2', 'order3' ]
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });

