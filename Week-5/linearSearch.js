/**
 * Linear Search Function
 * Searches for a target value in an array and returns its index
 * @param {Array} array - The array to search through
 * @param {*} target - The value to search for
 * @returns {number} - The index of the first occurrence of target, or -1 if not found
 */
function linearSearch(array, target) {
    // Iterate through each element in the array
    for (let i = 0; i < array.length; i++) {
        // Check if current element matches the target
        if (array[i] === target) {
            // Return the index of the first occurrence
            return i;
        }
    }
    // Return -1 if target is not found
    return -1;
}

// Example usage and testing
console.log("=== Linear Search Examples ===");

// Test with numbers
const numbers = [10, 25, 3, 8, 15, 42];
console.log("Array:", numbers);
console.log("Search for 15:", linearSearch(numbers, 15)); // Should return 4
console.log("Search for 3:", linearSearch(numbers, 3));   // Should return 2
console.log("Search for 99:", linearSearch(numbers, 99)); // Should return -1

// Test with strings
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("\nArray:", fruits);
console.log("Search for 'orange':", linearSearch(fruits, "orange")); // Should return 2
console.log("Search for 'mango':", linearSearch(fruits, "mango"));   // Should return -1

// Test with mixed data types
const mixed = [1, "hello", true, 3.14, "world"];
console.log("\nArray:", mixed);
console.log("Search for true:", linearSearch(mixed, true));     // Should return 2
console.log("Search for 'hello':", linearSearch(mixed, "hello")); // Should return 1
console.log("Search for false:", linearSearch(mixed, false));   // Should return -1

// Test with empty array
const empty = [];
console.log("\nEmpty array:", empty);
console.log("Search for anything:", linearSearch(empty, 5)); // Should return -1

// Export the function for use in other modules (if needed)
// module.exports = linearSearch;