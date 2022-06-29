
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



function find_average(num) {
    if(num.length === 0) {
        return 0
    }
    else {
    let ogLength = num.length
   return num.reduce(function(currentvalue,previousVal) {
            return currentvalue += previousVal
    },0) / ogLength
    }
}
