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

function main() {
    // Initialize an array
    let originalArray = [1, 2, 3, 4, 5];
    
    // Reverse the array using reverse_array function
    let reversedArray = reverse_array(originalArray);
    
    // Print the original array
    console.log(`Original array: ${originalArray}`);
    
    // Print the reversed array
    console.log(`Reversed array: ${reversedArray}`);
}

// Call the main function to execute the code
main();
