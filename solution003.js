
//codewars
//Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

function findChildren(dancingBrigade) {
  let newArr = dancingBrigade.split('')
  let sortedLetters = (newArr.sort((a,b) => a.localeCompare(b, 'kf', {caseFirst:"upper"} )) ) 
  return sortedLetters.join('')
      }



