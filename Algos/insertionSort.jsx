const insertionSort1 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let insertIndex = i;
        if (arr[i] < arr[i-1]){
            for (let j = i-1; j >= 0; j--) {
                if (arr[i] < arr[j]) {
                    insertIndex = j;
                }
            }
        }
        if (insertIndex != i) {
            let temp = arr[i];
            for (let k = i; k > insertIndex; k--) {
                arr[k] = arr[k-1];
            }
            arr[insertIndex] = temp;
        }
    }
    return arr;
}
console.log(insertionSort1([6,4,5,2,8,14,1,3]));