
//codewars 

//parameters: an array of integer pairs [num of people getting onto the bus, num of people getting off the bus]

//return: return number of people who are still on the bus after the last stop

//example 
// [[10,0],[3,5],[5,8]]) ===> 5

//psuedo code: 



var number = function(busStops){
  let ok = busStops.map(x => x[0] - x[1])
  return ok.reduce(function(currentVal,previousVal) {
    return currentVal += previousVal
  }, 0)

}

console.log(number([[10,0],[3,5],[5,8]]))