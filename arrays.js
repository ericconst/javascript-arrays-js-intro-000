var chocolateBars = [ "snickers" , "hundred grand" , "kitkat" , "skittles"]

function destructivelyAddElementToBeginningOfArray(array,n) {
  var array = array.unshift(n)
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

function accessElementInArray(array, n){
  return array[n]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(0)
}

function removeElementFromEndOfArray(array){
  newArray = array.slice(`${length.array - 1}`)
  return newArray
}
