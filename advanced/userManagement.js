/**
 * Problem:
 * Write a simple user management system that allows adding and removing users,
 * and showing the list of users.
 *
 * Your task:
 * Implement the functions `addUser`, `removeUser`, and `showUsers` that
 * manage a list of users.
 *
 * Example:
 * addUser("Alice");
 * showUsers() should return ["Alice"].
 * removeUser("Alice");
 * showUsers() should return [].
 */

let listOfUsers=[]
let addUser=(user)=>{
    if(listOfUsers.indexOf(user)==-1) listOfUsers.push(user);
}
let removeUser=(user)=>{
    let index=listOfUsers.indexOf(user);
    listOfUsers.splice(index,1);
}
let showUsers=()=>{
    return listOfUsers;
}

module.exports = { addUser, removeUser, showUsers };
