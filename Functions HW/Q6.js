// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string 
//    "ratset gaj".

function reverseString(input) {
    var reverse = input.split('').reverse().join('')
    return reverse;
}

console.log(reverseString('jag testar'));
