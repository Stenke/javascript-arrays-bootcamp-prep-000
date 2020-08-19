var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
 array = [1];
 element = 'foo';
 arrayNew = [element, ...array]
 return arrayNew
}
function destructivelyAddElementToBeginningOfArray(array1, element1) {
  array1 = [1];
  element1 = "foo";
  array1.unshift(element1);
  return array1
}
function addElementToEndOfArray(array2, element2) {
 array2 = [1];
 element2 = 'foo';
 arrayNew2 = [array2,... element2]
 return arrayNew2
}
function destructivelyAddElementToEndOfArray(array3, element3) {
  array3 = [1];
  element3 = "foo";
  array3.push(element3);
  return array3
}