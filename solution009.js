
//codewars 
//In this kata, you are asked to square every digit of a number and concatenate them.


//parameters: a number

//return: a number

//Example: 9119  => 81118

//psuedo code: 
// turn number to a string
// split string into an array of substrings
// iterate through array, square each number 
// join the results into 1 number
//return number


function squareDigits(num){
  let str = num.toString()
  let splitStrArr = str.split('')
  let newArr = splitStrArr.map(x => (Number(x)**2))
  return (Number(newArr.join('')))
}



