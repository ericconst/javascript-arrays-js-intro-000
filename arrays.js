var chocolateBars = [ "snickers" , "hundred grand" , "kitkat" , "skittles"]

function destructivelyAddElementToBeginningOfArray(array,n) {
  var array = array.shift(n)
  return array
}

function addElementToBeginningOfArray(array, n) {
  var newArray = [...n, array]
  return newArray
}

function addElementToEndOfArray(array, n) {
  var newArray = [array, ...n]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, n) {
  array = array.push(n)
  return array
}
