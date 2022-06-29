
//codewars 

//parameters: a stromg

//return: a string without vowels

//example n = word ==> [wrd]

//psuedo code: 
//split string into array of seperate words
//iterate through each character removing all vowels
//join array back into a string




function disemvowel(str) {
  return str.replace(/[aeiou0]/g, '')
}


console.log(disemvowel('words good'))