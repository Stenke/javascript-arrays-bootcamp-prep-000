var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
 arrayNew = [element, ...array]
 return arrayNew
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [1];
  element = "foo";
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array2, element2) {
 array2 = [1];
 element2 = 'foo';
 arrayNew2 = [...array, element]
 return arrayNew2
}
function destructivelyAddElementToEndOfArray(array3, element3) {
  array3 = [1];
  element3 = "foo";
  array3.push(element3);
  return array3
}