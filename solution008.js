
//codewars
//Write a function that returns both the minimum and maximum number of the given list/array.

//parameters: an array of numbers

//return: return array of numbers

//Example:  [1,2,3,4,5] --> [1,5]

//psuedo code: 
// sort an array of numbers in order
// return the number at the first and last index





function minMax(arr){
  console.log(arr.sort(function(a,b) {
   return a - b }))
   return [arr[0],arr[arr.length-1]]
}


