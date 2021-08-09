// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(array) {
    var longestWord = array[0];
    for (i = 1; i < array.length; i++) {
        if (longestWord.length < array[i].length) {
            longestWord = array[i]
        }
    }
    return longestWord;
}

console.log(findLongestWord(['chicken', 'beef', 'fish']));


// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i 
//    characters long.

function filterLongWords(array, i) {
    var longArray = [];
    for (j = 0; j < array.length; j++) {
        if (array[j].length > i) {
            longArray.push(array[j])
        }
    }
    return longArray;
}
console.log(filterLongWords(['apple','banana', 'kiwi', 'orange'], 5));

