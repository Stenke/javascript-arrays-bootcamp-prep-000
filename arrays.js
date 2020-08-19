var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
 return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array2, element2) {
 array = [...array, element];
 return array
}
function destructivelyAddElementToEndOfArray(array3, element3) {
  array.push(element);
  return array
}