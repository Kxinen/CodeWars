
//codewars 

//parameters: an array of integers

//return: booleon

//example a=[1,2,0,3] ==> a includes [0,3] , true

//psuedo code: 
//store length of x in a variable
//iterate over array checking if it includes 0
//iterate over array checking if it includes x.length - 1
//if both are true return true
//else return false



function isAllPossibilities(x){
    return x.length > 0 ? x.every((e,i) => x.includes(i)) : false;
  }
