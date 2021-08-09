// 5. Write a function that returns the number of arguments passed to the function when called.

function number() {
    for (i = 0; i < arguments.length; i++) {
        return arguments.length;
    }
}

console.log(number(12,78,23,66,34,59));