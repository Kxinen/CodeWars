
//codewars

//parameters:

//return:

//Example:

//psuedo code:



function sevenAte9(str) {

  let arr = str.split('')
 let newArr = arr.filter(function(x,index,array) {
     if(x == 9 && arr[index - 1] == 7 && arr[index + 1] == 7) {
       return false}
       
   else{return true}
     })
   return newArr.join('')
     }
