const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const img = document.getElementById('img');
const summary = document.getElementById('summary');
const results = JSON.parse(localStorage.getItem("results")) || [];


const MAX_DISPLAY_RESULTS = 5;

finalScore.innerText = mostRecentScore;
  if (mostRecentScore <= 400 && mostRecentScore > 325) {
    finalScore.innerText = 'Watch Spirited Away!';
    img.src = './img/spirited.jpg';
    summary.innerText = 'Spirited Away is...';
  } else if (mostRecentScore <= 325 && mostRecentScore > 250) {
    finalScore.innerText = 'Watch Death Note!';
    img.src = './img/deathnote.png';
    summary.innerText = 'Death Note is...';
  } else if (mostRecentScore <= 250 && mostRecentScore > 175) {
    finalScore.innerText = 'Watch Avatar: The Last Airbender!';
    img.src = './img/atla.jpg';
    summary.innerText = 'Avatar the Last Airbender is...';
  } else if (mostRecentScore <= 175) {
    finalScore.innerText = 'Watch Attack on Titan!';
    img.src = './img/titans.jpg';
    summary.innerText = 'Attack on Titans is...';
  } else {
    finalScore.innerText = 'Yup. You definitely cheated, my friend.';
    console.log("nope.");
  };


username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
});

saveResult = e => {
  console.log('I clicked save!');
  e.preventDefault();

let score = {
  //score: Math.floor(Math.random() * 100),
  score: mostRecentScore,
  name: username.value
};

results.push(score);
results.splice(5);
localStorage.setItem('results', JSON.stringify(results));
//insert function here for what you want this to do after save.
};
