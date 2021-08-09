// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. 
//    For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

//sumArray
function sumArray(sum) {
    var total = 0;
    for (i = 0; i < sum.length; i++) {
        total += sum[i];
    }
    return total;
}
console.log(sumArray([1,2,3,4]));


//multiplyArray
function multiplyArray(multiply) {
    var total = 1;
    for (i = 0; i < multiply.length; i++) {
        total *= multiply[i];
    }
    return total;
}
console.log(multiplyArray([1,2,3,4]));
