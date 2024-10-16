// A higher-order function that takes another function as an argument
function applyFunction(num, func) {
    return func(num);
}
// A simple function that doubles a number
function double(x) {
    return x * 2;
}
// Using the higher-order function
const result = applyFunction(5, double);
console.log(result); // Output: 10
