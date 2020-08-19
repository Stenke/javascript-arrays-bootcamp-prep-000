var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
 var array = [1];
 var element = 'foo';
 arrayNew = [element, ...array]
 return arrayNew
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [1];
  element = 'foo'
  array.unshift(element);
  return array
}