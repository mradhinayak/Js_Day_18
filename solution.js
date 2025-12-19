// Print All Elements of an Array Using Recursion;
function printElements(arr, index = 0) {
    if (index === arr.length) return;
    console.log(arr[index]);
    printElements(arr, index + 1);
}
printElements([1, 2, 4])

// Find the Sum of All Elements in an Array Using Recursion;
function sum(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index] + sum(arr, index + 1);
}
console.log(sum([2, 4, 4, 3]));


// Check if an Array Is Sorted (Ascending) Using Recursion;
function isSorted(arr, index = 0) {
    if (index === arr.length - 1) return true;
    if(arr[index] > arr[index + 1]) return false;
    return isSorted(arr, index + 1);
}
console.log(isSorted([2, 4, 6, 7]));