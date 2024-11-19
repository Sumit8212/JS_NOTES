/*
CALLBACK HELL : Callback Hell is a term used in JavaScript to describe a situation 
where multiple nested callbacks are used, making the code difficult to read, understand, and maintain.

It typically arises when asynchronous operations are performed in sequence,
and each operation depends on the result of the previous one

Problems with Callback Hell:
1.Poor Readability: The code becomes hard to read and understand.
2.Difficult Debugging: Finding errors in deeply nested callbacks can be challenging.
3.Tight Coupling: Callbacks are tightly bound to each other, reducing code modularity.
4.Error Handling: Managing errors becomes cumbersome when callbacks are deeply nested.

 */

const getUserData = (userId, callback) => {
    setTimeout(() => {
        console.log("Fetched user data");
        callback({ userId, name: "John Doe" });
    }, 1000);
};

const getOrders = (userId, callback) => {
    setTimeout(() => {
        console.log("Fetched user orders of user " + userId);
        callback(["order1", "order2", "order3"]);
    }, 1000);
};

const getOrderDetails = (orderId, callback) => {
    setTimeout(() => {
        console.log(`Fetched details for ${orderId}`);
        callback({ orderId, product: "Laptop", price: 1200 });
    }, 1000);
};

// Executing these functions in sequence
getUserData(1, (user) => {
    console.log(user);

    getOrders(user.userId, (orders) => {
        console.log(orders);

        getOrderDetails(orders[0], (orderDetails) => {
            console.log(orderDetails);

            // Further nested callbacks if needed
        });
    });
});
