/**
 * Reverses a given string using a character array.
 *
 * @param {string} str - The input string to be reversed.
 * @returns {string} - The reversed string.
 */
const stringReverse = (str) => {
    const stringChars = []; // An array to store individual characters.
    let lastIndex = str.length - 1; // Calculate the last index of the input string.
    let index = 0;

    // Iterate through the input string in reverse order.
    for (let i = lastIndex; i >= 0; i--) {
        stringChars[index] = str[i]; // Store each character in the array.
        index += 1;
    }

    return stringChars.join(''); // Return the reversed string.
};

/**
 * Reverses a given string using a concise approach with split, reverse, and join.
 *
 * @param {string} str - The input string to be reversed.
 * @returns {string} - The reversed string.
 */
const stringReverseApproach2 = (str) => str.split('').reverse().join('');

/**
 * Reverses a given string using the spread operator, reverse, and join.
 *
 * @param {string} str - The input string to be reversed.
 * @returns {string} - The reversed string.
 */
const stringReverseApproach3 = (str) => [...str].reverse().join('');

// Example usage and output:
console.log("approach 1:", stringReverse("sai chandan")); // Output the reversed string using approach 1.
console.log("approach 2:", stringReverseApproach2('Sai chandan')); // Output the reversed string using approach 2.
console.log("approach 3:", stringReverseApproach3('Sai chandan')); // Output the reversed string using approach 3.
