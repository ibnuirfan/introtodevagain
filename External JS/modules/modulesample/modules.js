function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

export {
    add as add,
    subtract as minus,
    multiply as multiply,
    division as division
};

/**
 * 1. Create a js file to create a module
 * 2. create another js file to use it
 * 
 * 3. Create a module 
 * 4. Export the module so i can use it
 * 5. Import the module in the second js file
 * 6. use the module
 */