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

// define function with two parameters
function maxOfTwoNumbers(x, y) {

    // if x is greater than or equal to y, return/produce x
    if (x >= y) {
      return x;
      // otherwise, y must be greater, so return/produce y
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  // print result
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
    
    // define and set variable to falsy
    let vowelCount = 0;

    // iterate through the vowels array defined and assigned above and compare each vowel to the char provided
    vowels.forEach(function(vowel) {
        if ((char.toUpperCase()) === vowel) {

            // if it's a match, meaning if it's a vowel, add 1 to the vowelCount sum, making the variable truthy
            vowelCount += 1;
        };
    });

    // if none of the vowels in the vowels array match the provided char argument, the value of vowelCount is zero so it's falsy; otherwise, it's 1, making it truthy
    // if it's truthy / true, the returned output is true; if it's falsy / false, the returned output is false
    return vowelCount ? true : false;
};

// print results
console.log(`js-functions-lab #3: O is a vowel. True or false? ${isCharAVowel("O")}`);
console.log(`js-functions-lab #3: B is a vowel. True or false? ${isCharAVowel("b")}`);


// 4.
// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

// define function with a parameter named array
const sumArray = function(array) {

    // define a variable so the numbers in the array have something they can be added onto
    let sum = 0;

    // iterate through the array of numbers and add each number, labeled num, to the sum variable
    array.forEach(function(num) {
        sum += num;
    })

    // return/produce the value of sum
    return sum;
};

// print results
console.log(`js-functinos-lab #4: sumArray([1, 2, 3, -1]) === ${sumArray([1, 2, 3, -1])}`);


// 5.
// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

// define a function with a parameter
function multiplyArray(array) {

    // use one as a impactless factor to multiply the first number against and have product serve as the variable which will eventually hold our desired final value
    let product = 1;

    // iterate through the array of numbers, calling each number num
    array.forEach(function(num) {
        // multiply the first num by 1 then multiply each following num by the previous product
        product = product * num;
    });

    // have the function return/produce the final product
    return product;
};

//print results
console.log(`js-functions-lab #5: multiplyArray([2, 4, 5]) === ${multiplyArray([2, 4, 5])} `);


// 6.
// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

// define a function named numArgs with an unspecified number of arguements
const numArgs = function() {
    //return the length or number of arguments placed in the function
    return arguments.length;
};

//print string and execute the function which will return the length of the arguments
console.log(`js-functions-lab #6: numArgs(5, "hello", false) === ${numArgs(5, "hello", false)}`);


// 7.
// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

// define a function named reverseString where the parameter is the inputText
function reverseString(inputText) {
    // define an empty array to serve as the placeholder for the reversed letters
    const reverseArray = [];
    
    // loop through the string from the beginning 0 index to the final index of the string
    for (i = 0; i < inputText.length; i++) {
        // add each letter to the beginning of the array, effectively reversing the order of the letters
        reverseArray.unshift(inputText.charAt(i));
    };

    // join the letters together without a delimiting character such as a comma
    return reverseArray.join("");
};

// print results
console.log(`js-functions-lab #7: reverseString("rockstar") === ${reverseString("rockstar")}`);