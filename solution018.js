
//codewars 

//parameters: a string of words

//return: string with a space seperating the camelcase character

//example 
// "camelCasing"  =>  "camel Casing"

//psuedo code: 
//split into array of single letters
//check for uppercase
//if found uppercase push an empty string to space right before uppercase
//join back together


function remainder(n, m){
    if(n == 0 || m == 0) {
      return NaN
    }
    else{ 
      if(n > m) {
        return n % m
      }
      else if(m > n) {
        return m % n
      }
      }
    
  }
