
//codewars
// In this kata you should simply determine, whether a given year is a leap year or not. 


 
  function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }
