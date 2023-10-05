/**
 * Common array used for various operations.
 * @type {Array<string>} - An array of characters.
 */
const commonArray = ['a', 'b', 'c', 'd', 'e'];

/**
 * Looks up a character in the given array and logs the result.
 *
 * @param {string} char - The character to look up.
 * @param {Array<string>} arr - The array to search within.
 */
const lookUp = (char, arr) => {
    // Check input
    if (!arr || !char) {
        console.log("Please Provide Proper Input");
        return;
    }
    for (let ele of arr) {
        if (ele === char) {
            console.log("Found !!");
            return;
        }
    }
    console.log("Not found");
}

/**
 * Pushes a character to the end of the array and logs the updated array.
 *
 * @param {string} char - The character to push.
 * @param {Array<string>} arr - The array to push the character into.
 */
const pushEle = (char, arr) => {
    // Check input
    if (!arr || !char) {
        console.log("Please Provide Proper Input");
        return;
    }
    let index = arr.length;
    arr[index] = char;
    console.log("After pushing", arr);
}

/**
 * Inserts a character at the specified position in the array and logs the updated array.
 *
 * @param {string} char - The character to insert.
 * @param {Array<string>} arr - The array to insert the character into.
 * @param {number} pos - The position at which to insert the character.
 */
const insertEle = (char, arr, pos) => {
    // Check input
    if (!arr || !char) {
        console.log("Please Provide Proper Input");
        return;
    }

    pushEle(char, arr);
    let length = arr.length - 1;
    let flag = false;

    for (let i = 0; i < length; i++) {
        if (i === pos) {
            flag = true;
        }
        if (flag) {
            let tempVar = arr[i];
            arr[i] = arr[length];
            arr[length] = tempVar;
        }
    }
    console.log("After Insertion", arr);
}

/**
 * Deletes an element at the specified position in the array and logs the updated array.
 *
 * @param {Array<string>} arr - The array to delete an element from.
 * @param {number} pos - The position at which to delete the element.
 */
const deleteEle = (arr, pos) => {
    // Check input
    if (!arr || !pos) {
        console.log("Please Provide Proper Input");
        return;
    }

    for (let index in arr) {
        if (index === pos.toString()) {
            arr.splice(pos, 1);
        }
    }
    console.log("After Deletion", arr);
}

lookUp('a', commonArray);
pushEle('f', commonArray);
insertEle('ab', commonArray, 5);
deleteEle(commonArray, 5);
