
//codewars 

//parameters: number of blue beads

//return: number of red beads 

//example 
// (3) ==> 4

//psuedo code: 
//check if there are less than 2 blue beads, if true return 0
//if there are 2 or more blue beeds return 2 * n - 2


function countRedBeads(n) {
    return n > 1 ? n * 2 - 2: 0
}

console.log(countRedBeads())
