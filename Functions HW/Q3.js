// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is 
//    a vowel, false otherwise.

function isCharacterAVowel(x) {
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
        return true
    } else {
        return false
    }
}

console.log(isCharacterAVowel("i"))
console.log(isCharacterAVowel("s"))
