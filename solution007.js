
//codewars

//parameters: word / a string

//return: return

//Example:  getMiddle(browser) = 'w'

//psuedo code: 
// deteremine if the string length is even
// use slice method to return just the middle or middle two characters based on their index



function getMiddle(s)
{
  if(s.length % 2 == 0) {
    return s.slice((s.length / 2) - 1, (s.length / 2) + 1)
  }
  else if(s.length % 2 !== 0) {
    return s.slice((Math.floor(s.length / 2)), (Math.floor(s.length / 2) + 1 ))
  }
}


