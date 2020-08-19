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
function addElementToEndOfArray(array, element) {
 var array = [1];
 var element = 'foo';
 arrayNew = [array,... element]
 return arrayNew
}
function destructivelyAddElementToEndOfArray(array, element) {
  var array = [1];
  var element = "foo";
  array.push(element);
  return array
}