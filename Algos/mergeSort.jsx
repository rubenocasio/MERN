/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/

// Merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

// const sortedA4 = [1, 2, 4, 5, 6, 9];
// const sortedB4 = [3, 7, 8, 10];

// [1,2,3,4]
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Solution
function mergeSort(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft]);
        indexLeft++;
        } else {
        result.push(right[indexRight]);
        indexRight++;
        }
    }
    // in case one of the arrays has remaining items due to unequal lengths, all of those can be added
    while (indexLeft < left.length) {
        result.push(left[indexLeft]);
        indexLeft++;
    }
    while (indexRight < right.length) {
        result.push(right[indexRight]);
        indexRight++;
    }
    return result;
}
// console.log(mergeSort([4, 6, 7, 8], [1, 2, 3, 5, 9]));


const mergeSport = () => {
    const newSort = [];
    const sortedB4 = [3, 7, 8, 10];
    const sortedA4 = [1, 2, 4, 5, 6, 9];
    newSort.push.sort(sortedB4);
    newSort.push.sort(sortedA4)
    console.log("Here is my sort: " + newSort);
}
console.log(mergeSport())