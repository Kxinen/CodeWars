
//codewars 
// Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.
//If the input string is empty, return an empty string. 
//The words in the input String will only contain valid consecutive numbers


//parameters: a sentence in a string

//return: a setence in a string

//Example:  "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

//psuedo code: 
//split the sentence into an array of multiple words
//iterate through each character of each word
//convert type/check to determine position
//store position in a variable
//sort words by position
// join back into string
//return string


function order(words){
if(words.length === 0) {
    return ''
}
else{
let splitWords = words.split(' ')
let sortedWords = splitWords.sort((a,b) => a.match(/\d+/) - b.match(/\d+/))
return sortedWords.join(' ')
}
}


order("is2 Thi1s T4est 3a")
