/**
 * Problem:
 * Write a program to manage a to-do list.
 * The program should support adding tasks, removing tasks, and displaying all tasks.
 *
 * Your task:
 * Implement the functions `addTask`, `removeTask`, and `showTasks` to manage the to-do list.
 *
 * Example:
 * addTask("Buy groceries") should add a new task.
 * removeTask("Buy groceries") should remove the task.
 * showTasks() should return a list of all current tasks.
 */

// Write your solution here

let listOfTasks=[]
function addTask(task){
    if(listOfTasks.indexOf(task)==-1) listOfTasks.push(task);
}
function removeTask(task){
    let index=listOfTasks.indexOf(task);
    listOfTasks.splice(index,1);
}
function showTasks(){
    return listOfTasks;
}

module.exports = { addTask, removeTask, showTasks };
