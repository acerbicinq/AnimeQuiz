const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//Grabs Available Questions from json file
let questions = [];
fetch("questions.json").then(res => {
  return res.json();
}).then(loadedQuestions => {
    console.log(loadedQuestions);
    questions = loadedQuestions;
    startGame();
}).catch(err => {
  console.error(err);
});

//Constants
const ADD_POINTS = 10;
const MAX_QUESTIONS = 10;


//GAME
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
  loader.classList.add("hidden");
  game.classList.remove("hidden");
};

//Move On To Next Question
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign('./end.html');
  }
  questionCounter++;
  questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });
availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;
};

//Assigning Correct/Incorrect class to choices
choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
//Calulating Score
  switch (selectedAnswer) {
    case '1':
    incrementScore(ADD_POINTS);
    console.log('I\'m #1!');
      break;
      case '2':
      incrementScore(ADD_POINTS * 2);
      console.log('I\'m #2!');
        break;
        case '3':
        incrementScore(ADD_POINTS * 3);
        console.log('I\'m #3!');
          break;
          case '4':
          incrementScore(ADD_POINTS * 4);
          console.log('I\'m #4!');
            break;
    default:
    console.log('Sorry, you broke something.');
  }
    setTimeout(() => {
      getNewQuestion();
    }, 500)
  });
});

incrementScore = num => {
  score +=num;
  scoreText.innerText = score;
};
