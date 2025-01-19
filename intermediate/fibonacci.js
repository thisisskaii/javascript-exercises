/**
 * Problem:
 * Write a function that prints the Fibonacci sequence up to a given number of terms.
 *
 * Your task:
 * Implement the function `fibonacci` that returns an array of Fibonacci numbers up to the specified count.
 *
 * Example:
 * fibonacci(5) should return [0, 1, 1, 2, 3].
 * fibonacci(3) should return [0, 1, 1].
 */

// Write your solution here
let fibonacci=num=>{
    let arr=[0,1]
    for(let i =1;i<num-1;i++){
        arr.push(arr[i]+arr[i-1])
    }
    return arr
}
module.exports = fibonacci;
