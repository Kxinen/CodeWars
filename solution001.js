
//codewars
//Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?



function roundToNext5(n){
    let decimalValue = n / 5
    return Math.ceil(decimalValue) * 5
  }