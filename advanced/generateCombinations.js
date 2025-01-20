/**
 * Problem:
 * Write a function that generates all combinations of a set of numbers.
 * The function should return an array of arrays, where each array is a combination of the input numbers.
 *
 * Your task:
 * Implement the function `generateCombinations` that returns all combinations of the given numbers.
 *
 * Example:
 * generateCombinations([1, 2, 3]) should return
 * [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
 */

function generateCombinations(list) {
    const result = [];

    function findCombinations(currentCombinations, currentIndex) {
        // Start looping from the given currentIndex
        for (let i = currentIndex; i < list.length; i++) {
            // Start a new combination with this element
            currentCombinations.push(list[i]);
            // Add the current combination to the result
            result.push([...currentCombinations]);
            // Recursively generate all further combinations with remaining elements
            findCombinations(currentCombinations, i + 1);
            // Backtrack to explore other combinations
            currentCombinations.pop();
        }
    }

    findCombinations([], 0);

    // Sort the combinations by length and lexicographically within the same length
    result.sort((a, b) => a.length - b.length || a[0] - b[0]);

    return result;
}


module.exports = generateCombinations;
