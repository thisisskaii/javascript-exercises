/**
 * Problem:
 * Write a recursive function that calculates the factorial of a given number.
 *
 * Your task:
 * Implement the function `factorial` which calculates the factorial of the input number recursively.
 *
 * Example:
 * factorial(5) should return 120.
 * factorial(0) should return 1.
 */

// Write your solution here
let factorial=num=>{
    if(num==1||num==0)
        return 1
    return num*factorial(num-1)
}
module.exports = factorial;
