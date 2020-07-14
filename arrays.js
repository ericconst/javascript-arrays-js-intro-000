var chocolateBars = [ "snickers" , "hundred grand" , "kitkat" , "skittles"]

function destructivelyAddElementToBeginningOfArray(array,n) {
  var array = array.shift(n)
  return array
}

function addElementToBeginningOfArray(array, n) {
  var newArray = [...n, array]
  return newArray
}
