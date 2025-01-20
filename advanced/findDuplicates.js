/**
 * Problem:
 * Write a function that finds the duplicate elements in an array.
 *
 * Your task:
 * Implement the function `findDuplicates` that returns an array of all duplicate elements in the input array.
 *
 * Example:
 * findDuplicates([1, 2, 2, 3, 4, 4]) should return [2, 4].
 * findDuplicates([1, 2, 3]) should return [].
 */

// Write your solution here

function findDuplicates(list){
    let duplicateList=[];
    for(let i=0;i<list.length;i++){
        for(let j=i+1;j<list.length;j++){
            if(list[i]==list[j]) duplicateList.push(list[i])
        }
    }
    //making the duplicateList unique:
    let uniqueArray=new Set(duplicateList);
    duplicateList.length=0;
    for(let item of uniqueArray) duplicateList.push(item);
    return duplicateList;
}

module.exports = findDuplicates;
