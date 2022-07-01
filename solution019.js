
//codewars 

//parameters:

//return: true or false

//example 
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

//psuedo code: 
//check if entered code and correct code are a match
//check if expirationDate is after the currentDate
//if both conditions are true, return true, else false



function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate) 
}

