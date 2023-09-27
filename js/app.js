console.log("This is the console output of js-functions-lab.");

// defining a function
//declaring a function
// creating the reusable block of code
// to be used at a later time in the program
function sayHello (personsName) {
    // write the code to say hello here
    console.log(`Hello ${personsName}`);
};

// execute the fucntion
// invoke the function
// call the function

//write the function's name ()
sayHello("Ben"); // runs the block of code defined by the sayHello function


// create function sayGoodbye with two parameters, one for phrase (e.g. Adios) and one for name (e.g. Bob)
function sayGoodbye(phrase, name) {
    console.log(`${phrase}, ${name}!`);
};

sayGoodbye("Zai jian", "Jim");

// function to add two numbers
function add(x, y) {
    return x + y; // return produces a value for the function when its is called
};

console.log(add(2, 2));


// function to return usernames in a multiplayer game

function getPlayerUserName(username) {
    return username.toUpperCase();
};

// before the game we don't know the players name
let playerOne;
let playerTwo;
let playerThree;
let playerFour;

// after they join the game, we want to set the player's name
playerOne = getPlayerUserName('Luke');
playerTwo = getPlayerUserName('Laura');
playerThree = getPlayerUserName('Kate');
playerFour = getPlayerUserName('Kevin');