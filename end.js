const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const img = document.getElementById('img');
const summary = document.getElementById('summary');
const results = JSON.parse(localStorage.getItem("results")) || [];


const MAX_DISPLAY_RESULTS = 5;
//End Page Content Population
finalScore.innerHTML = mostRecentScore;
  if (mostRecentScore <= 400 && mostRecentScore > 310) {
    finalScore.innerHTML = 'Watch Spirited Away!';
    img.src = './img/spirited.jpg';
    img.alt = 'A young girl blushes while standing next to her blue dragon friend.'
    summary.innerHTML = 'Spirited Away is about a young girl named Chihiro who is already upset about moving away from home. However, when she gets lost in a very strange and whimsical place, all of a sudden a new house and a new school seem less threatening.  <br><br> This is just the beginning into the world of anime. Based on your result, I have curated 5 other recommendations for you and compiled it all into one list. <br>Download the watchlist below!';
  } else if (mostRecentScore <= 310 && mostRecentScore > 260) {
    finalScore.innerHTML = 'Watch Avatar: The Last Airbender!';
    img.src = './img/atla.jpg';
    img.alt = 'A young monk and his friends stand in formation, ready for battle.'
    summary.innerHTML = 'Avatar the Last Airbender is a fun and engaging story about a boy named Aang. The story starts off lighthearted, but quickly develops due to a looming war, and an obsessive Zuko, chasing after Aang. <br><br> This is just the beginning into the world of anime. Based on your result, I have curated 5 other recommendations for you and compiled it all into one list. <br>Download the watchlist below!';
  } else if (mostRecentScore <= 260 && mostRecentScore > 190) {
    finalScore.innerHTML = 'Watch Death Note!';
    img.src = './img/deathnote.png';
    img.alt = 'A self-righteous teenager smirks while holding a book of death in his hands.'
    summary.innerHTML = 'Death Note is an intriguing dive into the question: What is justice? In this world, the Death Note is found by a high school student named Light. He soon realizes that he can kill anyone, simply by writing their name in the notebook. If you got a hold of such a notebook, what would you do? <br><br> This is just the beginning into the world of anime. Based on your result, I have curated 5 other recommendations for you and compiled it all into one list. <br>Download the watchlist below!';
  } else if (mostRecentScore <= 190) {
    finalScore.innerHTML = 'Watch Attack on Titan!';
    img.src = './img/titans.jpg';
    img.alt = 'Several scouts in brown uniforms charge forward with blades at the ready. They seem to enter a battle for survival.'
    summary.innerHTML = 'Attack on Titan is a thrilling and terrifying, 4-season series where regular people face against deadly giants called titans. The world is brutal, but in the midst of the turmoil, we find friendship, passion, and great sacrifice. <br><br> This is just the beginning into the world of anime. Based on your result, I have curated 5 other recommendations for you and compiled it all into one list. <br>Download the watchlist below!';
  } else {
    finalScore.innerText = 'Yup. You definitely cheated, my friend.';
    console.log("nope.");
  };

//username form for PDF download
username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
});

saveResult = e => {
  e.preventDefault();

let score = {
  result: finalScore.innerText,
  name: username.value
};

results.push(score);
results.splice(5);
localStorage.setItem('results', JSON.stringify(results));
//How Users Can Save Result
if (mostRecentScore <= 400 && mostRecentScore > 310) {
  window.location = './pdf/SpiritedAway.pdf';
} else if (mostRecentScore <= 310 && mostRecentScore > 260) {
  window.location = "./pdf/Avatar.pdf";
} else if (mostRecentScore <= 260 && mostRecentScore > 190) {
  window.location = './pdf/DeathNote.pdf';
} else if (mostRecentScore <= 190) {
  window.location = './pdf/AttackOnTitan.pdf'
} else {
  finalScore.innerText = 'You still tryna make your fake score legit?';
  console.log("sad.");
};

};
