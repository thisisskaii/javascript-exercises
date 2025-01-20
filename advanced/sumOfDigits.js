/**
 * Problem:
 * Write a function that takes a positive integer as input and returns the sum of its digits.
 *
 * Your task:
 * Implement the function `sumOfDigits` that calculates the sum of digits in the given number.
 *
 * Example:
 * sumOfDigits(123) should return 6 (1 + 2 + 3).
 * sumOfDigits(987) should return 24 (9 + 8 + 7).
 */
let sumOfDigits=(num)=>{
    let k; //kharej ghesmat
    let m=num; //maghsoom
    let sum=0;
    while(m!=0){
        k=Math.floor(m/10);
        sum+=(m%10);
        m=k;
    }
    return sum;
}
module.exports = sumOfDigits;
