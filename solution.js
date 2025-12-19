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


// Reverse a String Using Recursion;
function printChars(str, index = 0) {
    if (index === str.length) return ;
    console.log(str[index]);
    printChars(str, index + 1);
}
printChars("Hello");
// Recerse String;
function reverseString(str, index = str.length - 1) {
    if (index < 0) return "";
    console.log(str[index]);
    return str[index] + reverseString(str, index - 1);
}
reverseString("Hello");


// Check if a String Is Palindrome Using Recursion;
function isPalindrome(str, left = 0, right = str.length - 1) {
    if (left >= right ) return true;
    if (str[left] !== str[right]) return false;
    return isPalindrome(str, left + 1, right - 1);
}
console.log(isPalindrome("madam"));