/**
Async/Await : Async and await are JavaScript keywords that allow for the use of asynchronous, 
non-blocking functions in a way that's similar to synchronous functions.
                                  OR                         
async/await is a modern syntax in JavaScript that makes working with asynchronous code more readable and easier to manage.
It is built on top of Promises and allows you to write asynchronous code that looks synchronous.

async: Used before a function to indicate that it returns a promise 
await: Used inside an async function to make it wait for a promise to resolve

Why Use async/await?
1. Improves code readability by avoiding chaining .then() calls.
2. Simplifies error handling with try-catch.
3. Provides a cleaner alternative to handling asynchronous tasks compared to promises or callbacks.

*/


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
            console.log("Fetched user orders of user " + userId);
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

// Async function using await

async function processOrder() {
    try {
        const user = await getUserData(1);
        console.log("User Data:", user);

        const orders = await getOrders(user.userId);
        console.log("Orders:", orders);

        const orderDetails = await getOrderDetails(orders[0]);
        console.log("Order Details:", orderDetails);
    } catch (error) {
        console.error("An error occurred:", error); // Handles any error
    }
}

// processOrder();

// Promise.all()
// You can combine async/await with Promise.all() to execute multiple promises in parallel:
async function processMultiple() {
    try {
        const [user, orders] = await Promise.all([getUserData(1), getOrders(1)]);
        console.log("User:", user); // Output: { userId: 1, name: 'John Doe' }
        console.log("Orders:", orders); // Output: [ 'order1', 'order2', 'order3' ]
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// processMultiple();



async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data[0]);
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}
// fetchProducts();

// Error handling
// Async and await enable the use of try / catch blocks around asynchronous code.
//  If the promise is rejected, the rejected value is thrown


