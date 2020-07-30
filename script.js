var startButton = document.querySelector("#startButton");
var timeLeft = document.querySelector("#timeLeft");
var questiontextEl = document.querySelector("#questionText");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var secondsLeft = 15;
var currentQuestion = 0;


var questionList = [
  {
    questionText: "What does Javascript allow us to do to a webpage?",
    choices: [
      "Change the font and background color",
      "Make the page dynamic and alive",
      "Imbed videos and images",
    ],
    answer: 1
  },
  {
    questionText: "What are strings always inside?",
    choices: [
      "Curly brackets",
      "Functions",
      "Quotations",
    ],
    answer: 2  
  },
  {
    questionText: "What are arrays made up of?",
    choices: [
      "Strings, numbers, booleans and other arrays",
      "Functions and for loops",
      "Prompts, confirms and alerts",
    ],
    answer: 0  
  },
  {
    questionText: "What goes inside a loop?",
    choices: [
      "Variable declaration, condition and increment",
      "The DOM, text and pictures",
      "Query Selectors",
    ],
    answer: 0   
  }
];

function startQuiz(){
    grabQuestion()
    grabChoices()



}
function grabQuestion(){
    var currentObject = questionList[currentQuestion]
    questiontextEl.textContent = currentObject.questionText



}
function grabChoices(){
  var currentObject = choices
  choice.textContent = currentObject.choices
}
startButton.addEventListener("click", startQuiz)
