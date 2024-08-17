/*Add your JavaScript here*/
var questionCount = 0;

var dogScore = 0;
var catScore = 0;

//DOM: changing HTML elements using Js (document object model))

//document > html > body > h1 > p > img
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
//access document's id

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var result = document.getElementById("result");
var restart = document.getElementById("restart");

//FUNCTIONS
//button.addEventListener("click", functionName);

q1a1.addEventListener("click", addCatScore);
q1a2.addEventListener("click", addDogScore);

q2a1.addEventListener("click", addCatScore);
q2a2.addEventListener("click", addDogScore);

q3a1.addEventListener("click", addCatScore);
q3a2.addEventListener("click", addDogScore);

restart.addEventListener("click", restartQuiz);
djsakldjsakjdsa
dashdashdsaj
function addCatScore() {
  catScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " catScore = " + catScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function addDogScore() {
  dogScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " dogScore = " + dogScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

//element.innerHTML = "new text"; changes the text
//ex. document.getElementById("result").innerHTML = "Pick a flavor!";
function updateResult() {
  if (catScore >= 2) {
    result.innerHTML = "You are a cat person!";
    console.log("You are a cat person!");
  } else if (dogScore >= 2) {
    result.innerHTML = "You are a dog person!";
    console.log("You are a dog person!");
  }
}

function restartQuiz() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  catScore = 0;
  dogScore = 0;
  console.log("questionCount = " + questionCount + " catScore = " + catScore + " dogScore = " + dogScore);
}