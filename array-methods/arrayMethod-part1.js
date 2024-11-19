// 1. Array.length :-  Return the number of elements in an array.
let arr = [1, 2, 3, 4, 5];

const length = arr.length;
console.log("length: ", length); // length:  5

// 2. array.push() :- Add elements to the end of an array;

arr.push(6);
console.log("arr: ", arr); // arr:  [ 1, 2, 3, 4, 5, 6 ]

// 3. arr.pop() : Remove and returns the last element.

const element = arr.pop();
console.log("element: ", element);    // element:  6
console.log("arr: ", arr);           // arr:  [ 1, 2, 3, 4, 5 ]


// 4. arr.unshift() : Add element to the start of array.

arr.unshift(0);
console.log('arr: ', arr);    // arr:  [ 0, 1, 2, 3, 4, 5 ]

// 5. arr.shift() : Remove and returns the first element.

const shiftedElement = arr.shift();
console.log('shiftedElement: ', shiftedElement);    // shiftedElement:  0
console.log("arr: ", arr);                         // arr:  [ 1, 2, 3, 4, 5 ]

// 6. Arr.concat :- Combines two or more arrays and returns a new array.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const concatArr = arr1.concat(arr2);
console.log("concatArr: ", concatArr); // concatArr:  [ 1, 2, 3, 4, 5, 6 ]

const concatArr2 = arr1.concat(arr2, arr3);
console.log("concatArr2: ", concatArr2); // concatArr2:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// 7. arr.slice() : Returns a shallow copy of a portion of an array into a new array.

const sliceArr = arr.slice(1, 3);
console.log('sliceArr: ', sliceArr); // sliceArr:  [ 2, 3 ]
console.log("arr: ", arr); // arr:  [ 1, 2, 3, 4, 5 ]

// 8. arr.splice() : Changes the content of an array by removing or replacing existing elements and/or 
//                   adding new elements in place of existing elements.

// arr.splice(startIndex, deleteCount, item1, item2, item3, ....)

// 8.1 Remove element from array
/*
when only start and deleteCount is specified,
splice will remove deleteCount elements from the array,
starting at the index.
*/
const removedElement = arr.splice(1, 2);
console.log('removedElement: ', removedElement); // removedElement:  [ 2, 3 ]
console.log("arr: ", arr); // arr:  [ 1, 4, 5 ]


// 8.2 Add element to array
/*
if deleteCount is 0, and additional items are specified,
splice() will insert the items at the start index without deleting any elements.
*/
arr.splice(1, 0, 2, 3);
console.log("arr: ", arr); // arr:  [ 1, 2, 3, 4, 5 ]


// 8.3 Replace element from array
/*
if deleteCount is greater than 0, along with the items you want to add,
splice will remove the specified number of elements (2) and 
replace them with new items.
*/
const replacedElement = arr.splice(1, 2, 7, 8, 9);
console.log('replacedElement: ', replacedElement); // replacedElement:  [2, 3]
console.log("arr: ", arr); // arr:  [ 1, 7, 8, 9, 4, 5 ]

// 8.4 clear the array OR remove from index onward
// arr.splice(0);          // splice(0) removes all elements from index 0.
console.log('arr: ', arr); // arr:  []

// 9. Array.indexOf() :-  Returns the first index of occurence of an element or -1 if not found.
const languages = ["java", "js", "c", "js"];
const index = languages.indexOf("js");
console.log('index: ', index);   //index:  1  because first occurence of "js" is at index 1.

// 10. Array.lastIndexOf() : returns the index of last occurence of element.
const lastIndex = languages.lastIndexOf("js");
console.log('lastIndex: ', lastIndex); //lastIndex:  3 because last occurence of "js" is at index 3.

// 11. Array.find() : Returns the first element that satisfies a condition.
// Useful to retrieve an item based on specific criteria.

const foundArr = [1, 2, 3, 4, 5];
const found = foundArr.find(element => element > 2);
console.log('found: ', found);  //found:  3

// 12. findIndex :- Returns the index of the first element that satisfies a condition.
const foundIndex = foundArr.findIndex(element => element > 2);
console.log('foundIndex: ', foundIndex);  // foundIndex:  2

// 13. array.every :- Tests if all elements pass a given condition
// return true if all elements meet the condtion.

const allPositive = arr.every(num => num > 0);
console.log('allPositive: ', allPositive);   //allPositive:  true

// 14. array.some() : Tests if atleat one element passes a given test condtion
// Return true if any element meets the condtion.

const hasNegative = arr.some(num => num < 0);
console.log('hasNegative: ', hasNegative); //hasNegative:  false

// 15. array.map :- 