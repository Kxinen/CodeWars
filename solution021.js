
//codewars 

//parameters: 2 numbers

//return: sum of all numbers inbetween, + the 2 numebrs passed in

//example 
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)

//psuedo code:
// Loop through each number inbetween a,b to get each number inebetween the parameters
// add them all together
// add a,b
// return result


function getSum( a,b ) {
    if(a === b) {
        return a
    }
    else if(a === 0 && b < a) {
        return b
    }
    else{
    let numArr = []
    for(i = a; i<=b; i++) {

        numArr.push(i)
    }
        if(numArr.length === 0) {
            return a
        }
    console.log((numArr.reduce((a,b) => {
        return a + b
    })))
}   
}


getSum(-419,-483)