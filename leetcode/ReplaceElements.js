function replaceElements(arr) {
    let maxRight = -1; // Initialize the maximum value for elements to the right as -1
    
    // Iterate through the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
        const currentElement = arr[i];
        arr[i] = maxRight; // Replace the current element with the maximum value to its right
        maxRight = Math.max(maxRight, currentElement); // Update the maximum value encountered so far
    }
    
    return arr;
}

// Example usage:
const arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr)); // Output: [18, 6, 6, 6, 1, -1]
