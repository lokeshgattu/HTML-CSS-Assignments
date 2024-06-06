//Write a function `sum_array(arr)` that returns the sum of all elements in an array.

function sum_array(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/*Write a function `average_array(arr)` that returns the average of the elements in the array. 
Use `sum_array` within this function.*/

function average_array(arr) {
    let sum = sum_array(arr);
    return sum / arr.length;
}

/*Write a main function that creates an array of 10 numbers, and uses `sum_array` and `average_array` 
to print the sum and average of the elements.*/

function main() {
    // Create an array of 10 numbers
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // Calculate the sum of the array
    let sum = sum_array(numbersArray);
    
    // Calculate the average of the array
    let average = average_array(numbersArray);
    
    // Print the sum and average of the array
    console.log(`Array: ${numbersArray}`);
    console.log(`Sum of array elements: ${sum}`);
    console.log(`Average of array elements: ${average}`);
}

// Call the main function to execute the code
main();



