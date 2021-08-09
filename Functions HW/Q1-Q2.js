// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 

// FUNCTION
function maxOfTwoNumbers(x,y) {
    if (x > y){
        return x
    } else {
        return y
    }
} 

// ARROW FUNCTION
maxOfTwoNumbers = (x,y) => x > y ? console.log(x) : console.log(y);

console.log(maxOfTwoNumbers(40,9))


// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(x,y,z){
    if (x > y && x > z) {
        return x
    } else if (y > x && y > z) {
        return y
    } else {
        return z
    }
}

console.log(maxOfThree(1,2,45))
console.log(maxOfThree(23,5,3))
console.log(maxOfThree(5,79,4))