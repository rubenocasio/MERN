/* 
    Given by Riot games.
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**

 */
function rehash(s) {}

/*****************************************************************************/

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(n + n(log(n))) linearithmic. The n(log(n)) is from sorting.
 * Space: O(2n) -> O(n) linear. Duplicate storage of str in obj and new str.
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(str) {
    const letterHashCounts = {};
    let numStr = "";
    let letter = str[0];

    for (let i = 1; i < str.length; i++) {
        const num = parseInt(str[i]);
    if (!isNaN(num)) {
        numStr += str[i];
    }
    if (isNaN(num) || i === str.length - 1) {
        const letterCount = parseInt(numStr);

        if (letter in letterHashCounts) {
            letterHashCounts[letter] += letterCount;
        } else {
            letterHashCounts[letter] = letterCount;
        }
        letter = str[i];
        numStr = "";
        }
    }

    const alphabetized = Object.keys(letterHashCounts).sort();

    let newHash = "";
    for (let i = 0; i < alphabetized.length; i++) {
        const letter = alphabetized[i];
        newHash += letter + letterHashCounts[letter];
    }
    return newHash;
}
console.log(rehash(str1));

/**
 * Time:  * Time: O(n + n(log(n))) linearithmic. The n(log(n)) is from sorting.
 *    The nested while loop increments "i" as well so every
 *    iteration of it reduces the iterations of the outer for loop so there
 *    is no back-tracking.
 * Space: O(2n) -> O(n) linear. Duplicate storage of str in obj and new str.
 */
function rehash2(s) {
    const letterHashCounts = {};

  // This for loop could be a while loop. It doesn't increment up here because
  // we are incrementing inside it.
    for (let i = 0; i < s.length; ) {
    // Retrieve letter at current index then increment to the num after.
    let char = s[i++];
    let numStr = "";

    /**
     * Look ahead to find potentially multiple digits after letter.
     * parseInt returns NaN if it fails to parse to a number.
     * We can't simply check for a truthy parsed int because 0 is falsy.
     * We can't use typeof because typeof NaN is "number". This is why we use
     * not Not a Number to check if we parsed a number.
     */
    while (i < s.length && !isNaN(parseInt(s[i]))) {
        numStr += s[i++];
        }

        if (letterHashCounts.hasOwnProperty(char)) {
        letterHashCounts[char] += parseInt(numStr);
        } else {
        letterHashCounts[char] = parseInt(numStr);
        }
    }

    const alphabetized = Object.keys(letterHashCounts).sort();

    let newHash = "";

    for (let i = 0; i < alphabetized.length; i++) {
        const letter = alphabetized[i];
        newHash += letter + letterHashCounts[letter];
    }

    return newHash;
}

module.exports = { rehash, rehash2 };
