function bubbleSort(arr){
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            if (arr[j] > arr [j + 1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }

    }
    return arr
}
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));
console.log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));