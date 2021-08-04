// -Create an array of at least 10 values.
// -Take an input from the user to look for in the array
// -Find and display the total number of occurrences of the user input value in the array
// -Also, display the positions in which they occur. HINT: Create another array for keeping track of positions

array = [3, 19, 50, -1, 73, 19, 2, 29, 19, 27, -5, 48, -25]
console.log(array)

var prompt = require('prompt-sync')();
var num = Number(Math.floor(prompt('Enter a number from the array: ')))

positions = []
occurrence = 0
found = false;

for (let i=0; i<array.length; i++) {
    if (num == array[i]) {
        found = true;
        occurrence++
        positions.push(num + ' is in position ' + (i+1))
    } 
}
if (!found) {
    console.log('Invalid number!')
}

console.log('The number ' + num + ' occurs ' + occurrence + ' times in the array.')
console.log(positions)