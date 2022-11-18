/**
Orientation - JavaScript assignment 1
Solution by: [Oduamadi Ndubuisi]
*/
const userChoice = document.querySelector(
  'input[name="user-choice"]:checked'
).value;
const throwButton = document.querySelector("#throw-button");
const coinImage = document.querySelector("#coin-image");
const resultParagraph = document.querySelector("#result");
const winCount = document.querySelector("#win-count");
const resultHistory = document.querySelector("#result-history");
const headCount = document.querySelector("#head-count");
const reverseCount = document.querySelector("#reverse-count");

let choiceArray = [];
let point = 0;

/* 
Record user’s choice in the beginning (head or reverse)
Simulate tossing the coin by using random value generation
Show the result of the coin flip to user

Display head or reverse image
Tell user if the guess was correct


Record all results (use array(s)) and user's points

Correct guess -> add 1 point


Display the coin flip result history and the user guess history
User can toss the coin multiple times
Refreshing/reloading the web page restarts the application (clears result history, etc.)
Print all output values to console too
*/
/*************** Define the result history array */
var resultHistoryArr = [];
/*************** */

var HEAD = 0;
var TAIL = 1;

const genrateRandomCoin = () => {
  let num = Math.floor(Math.random() * 2);

  /*************** Push the random number into the result array */
  resultHistoryArr.push(num);
  /*************** */
  // = - assign value
  // == & === - compare
  if (num == HEAD) {
    console.log(num);
    coinImage.src = "head.png";
    return "head";
  } else {
    console.log(num);
    coinImage.src = "reverse.png";
    return "reverse";
  }
};

throwButton.addEventListener("click", checkUserChoice);

// Example function for reading user's input values from html form
function checkUserChoice() {
  const result = genrateRandomCoin();
  const userChoice = document.querySelector(
    'input[name="user-choice"]:checked'
  ).value;
  console.log("user choice", userChoice);
  if (result == userChoice) {
    console.log("You won");
  } else {
    console.log("You lost");
  }
  if (result == userChoice) {
    point = point + 1;
    console.log("User points: " + point);
  } else {
    console.log("I didnt get points");
  }
  winCount.textContent = point;
  // show the array result
  /*************** Add the result to the page */
  resultHistory.textContent = resultHistoryArr;
  /*************** */

  headCount.textContent = resultHistoryArr.filter(
    (item) => item === HEAD
  ).length;

  reverseCount.textContent = resultHistoryArr.filter(
    (item) => item === TAIL
  ).length;
}

// Get reference to html element with id "result"

// Change the text content of the paragraph element

// function checkUserChoice() {
//   for (let i = 0; i < 500; i++){
//   }

//   console.log('user choice', userChoice);

//   return userChoice;
// }
// choiceArray.push(userChoice);
// console.log(choiceArray);
// userChoice.addEventListener('change', addChoiceResult);
// // Add functionality to button by binding a button click event and a listener function
// const throwButton = document.querySelector('#throw-button');
// throwButton.addEventListener('click', checkUserChoice);
// // Examples of changing html file content
// function throwTheCoin(){
//   for (let i = 0; i < 500; i++){
//     if (num < 0.5){
//
//     }
//   }
// }

// // Get reference to html element with id "coin-image"
// const coinImage = document.querySelector('#coin-image');
// // Change the value of the src attribute
// coinImage.src = 'head.png';

// // Get reference to html element with id "result"
// const resultParagraph = document.querySelector('#result');
// // Change the text content of the paragraph element
// resultParagraph.textContent = 'You won!';
//
