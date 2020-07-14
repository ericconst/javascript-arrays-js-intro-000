var chocolateBars = [ "snickers" , "hundred grand" , "kitkat" , "skittles"]

function destructivelyAddElementToBeginningOfArray(array,n) {
  array = array.shift(n)
  return array
}

function addElementToBeginningOfArray(array, n) {
  return [...n, array]
}
