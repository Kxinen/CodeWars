
//codewars 

//parameters: an operator as a string, value1(number), value2(number)

//return: return result of numbers after applying chosen operation

//example 
// ('+', 4, 7) --> 11

//psuedo code: 



function basicOp(operation, value1, value2)
{
    return eval(value1 + operation + value2)
}

console.log(basicOp('+',4,7))