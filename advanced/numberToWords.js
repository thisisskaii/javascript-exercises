/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here
function numberToWords(num){
    let nums1_9=['','one','two','three','four','five','six','seven','eight','nine'];
    let nums11_19=['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let nums10s=['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let bigNums = ['','thousand', 'million']
    function Hundreds(num) {
        let result = '';
        if (num > 99) {
            result += nums1_9[Math.floor(num / 100)] + ' hundred ';
            num %= 100;
        }
        if (num > 10 && num < 20) {
            result += nums11_19[num - 11] + ' ';
        } else {
            if (num > 9) {
                result += nums10s[Math.floor(num / 10)] + ' ';
                num %= 10;
            }
            result += nums1_9[num] + ' ';
        }
        return result.trim();
    }

    if (num === 0) return 'zero';

    let word = '';
    let bigNumsIndex = 0;

    while (num > 0) {
        let digitGroup = num % 1000;
        if (digitGroup) {
            word = Hundreds(digitGroup) + ' ' + bigNums[bigNumsIndex] + ' ' + word;
        }
        bigNumsIndex++;
        num = Math.floor(num / 1000);
    }

    return word.trim();
}

module.exports = numberToWords;
