// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.



// we will use a .map() method 
// for every num in the array we will applie an arrow function (num => -num)
// the arrow function negates the numbers in the array
// then it all gets returned
function invert(array){
    return array.map(num => -num)
}