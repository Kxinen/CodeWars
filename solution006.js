
//codewars

//parameters:

//return:

//Example:

//psuedo code:


var lastDigit = function(str1, str2){ 
  if(str2 == 0){
      return 1;
  }
  var a = str1.charAt(str1.length - 1) - 0;
  var b = str2.slice(str2.length - 2) - 0;
  switch(a){
      case 0:
      case 1:
      case 5:
      case 6:
          return a;
      case 2:
          return [6,2,4,8][b % 4];
      case 3:
          return [1,3,9,7][b % 4];
      case 7:
          return [1,7,9,3][b % 4];
      case 8:
          return [6,8,4,2][b % 4];
      case 4:
          return [4,6][b % 2 == 0 ? 1 : 0];
      case 9:
          return [9,1][b % 2 == 0 ? 1 : 0];
  }
}