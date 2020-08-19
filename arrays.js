var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
 var array = [1];
 var element = 'foo';
 arrayNew = [element, ...array]
 return arrayNew
}
function destructivelyAddElementToBeginningOfArray(array1, element) {
  var array1 = [1];
  var element = "foo";
  array1.unshift(element);
  return array1
}
function addElementToEndOfArray(array2, element) {
 var array2 = [1];
 var element = 'foo';
 arrayNew2 = [array2,... element]
 return arrayNew2
}
function destructivelyAddElementToEndOfArray(array3, element) {
  var array3 = [1];
  var element = "foo";
  array3.push(element);
  return array3
}