// Get user name
let userName = prompt("Please type your name: ");
while (userName == "") {
     userName = prompt("That's not right. Try typing your name in again: ");
}
alert("Hello, " + userName + " and welcome to my portfolio!");

// Question 1:
let userResponse1 = +prompt("Have I ever lived in another Country?");
if (userResponse1 == yes || userResponse1 == y) {
    alert('Good job, ${userName}! That is correct!');
} else {
    alert('Sorry, ${userName}. That is not correct.');
}

// Question 2:
let userResponse2 = +prompt("Do I coash baseball?");
if (userResponse2 == yes || userResponse2 == y) {
    alert('Good job, ${userName}! That is correct!');
} else {
    alert('Sorry, ${userName}. That is not correct.');
}
// Question 3:
let userResponse3 = +prompt("Was I in the military?");
if (userResponse3 == yes || userResponse3 == y) {
    alert('Good job, ${userName}! That is correct!');
} else {
    alert('Sorry, ${userName}. That is not correct.');
}
// Question 4:
let userResponse4 = +prompt("Have I ever lived in Canada?");
if (userResponse4 == no || userResponse4 == n) {
    alert('Good job, ${userName}! That is correct!');
} else {
    alert('Sorry, ${userName}. That is not correct.');
}
// Question 5:
let userResponse5 = +prompt("Do I like programming?");
if (userResponse5 == yes || userResponse5 == y) {
    alert('Good job, ${userName}! That is correct!');
} else {
    alert('Sorry, ${userName}. That is not correct.');
}
