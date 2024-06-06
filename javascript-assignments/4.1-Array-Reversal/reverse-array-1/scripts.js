function reverse_array(arr) {
    // Create a new empty array to hold the reversed elements
    let reversedArr = [];

    // Loop through the input array from the last element to the first
    for (let i = arr.length - 1; i >= 0; i--) {
        // Add each element to the new array
        reversedArr.push(arr[i]);
    }

    // Return the new array
    return reversedArr;
}

// Example usage:
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverse_array(originalArray);

console.log("Original array:", originalArray); // Output: [1, 2, 3, 4, 5]
console.log("Reversed array:", reversedArray); // Output: [5, 4, 3, 2, 1]
