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




// js-functions-lab

// 1.
// Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log("js-functions-lab #1: " + maxOfTwoNumbers(3, 9));
  

// 2.
// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

// define a function named maxOfThree, with three variables, one for each numnber
const maxOfThree = function(num1, num2, num3) {
    //if num1 is greater than num2 and num3, then return num1
    if ((num1 >= num2) && (num1 >= num3)) {
        return num1;
    //if num2 is greater than num1 and num3, then return num2
    } else if ((num2 >= num1) && (num2 >= num3)) {
        return num2;
    //if both the ifs above aren't true, return num3
    } else {
        return num3;
    };
};

//print string along with largest number of the 3 numbers entered
console.log("js-functions-lab #2: " + maxOfThree(3, 9, 4));


// 3.
// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

// define a function named isCharAVowel with char as the parameter
function isCharAVowel(char) {
    // define array of vowels
    const vowels = ["A", "E", "I", "O", "U"];
    
    let vowelCount = 0;

    vowels.forEach(function(vowel) {
        if ((char.toUpperCase()) === vowel) {
            vowelCount += 1;
        };
    });

    return vowelCount ? true : false;
};

console.log(`js-functions-lab #3: O is a vowel. True or false? ${isCharAVowel("O")}`);
console.log(`js-functions-lab #3: B is a vowel. True or false? ${isCharAVowel("b")}`);


// 4.
// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function(array) {
    let sum = 0;

    array.forEach(function(num) {
        sum += num;
    })

    return sum;
};

console.log(`js-functinos-lab #4: sumArray([1, 2, 3, -1]) === ${sumArray([1, 2, 3, -1])}`);


// 5.
// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(array) {
    let product = 1;
    array.forEach(function(num) {
        product = product * num;
    });

    return product;
};

console.log(`js-functions-lab #5: multiplyArray([2, 4, 5]) === ${multiplyArray([2, 4, 5])} `);