var score; 
var startTime; 
var ended = true; 
var durationInP = document.getElementById("durationInP");
var duration = int(durationInP());
var timerTxt = document.getElementById("timer");
var scoreTxt = document.getElementById("score");
var clicksTxt = document.getElementById("clicks");
var startBtn = document.getElementById("start");
var clickArea = document.getElementById("clickarea");
var show = function(elem) {
  elem.style.display = 'inline';
};
var hide = function(elem) {
  elem.style.display = 'none';
};
function startGame() {
  hide(startBtn); 
  hide(durationInP)
  score = -1;
  ended = false;
  startTime = new Date().getTime();
  var timerId = setInterval(function() {
    var total = (new Date().getTime() - startTime) / 1000;
    console.log(total)
    if (total < duration) {
      timerTxt.textContent = total.toFixed(3);
      clicksTxt.textContent = (score / total).toFixed(2);
    } else {
      ended = true;
      clearInterval(timerId);
      endGame();
    }
  }, 1);
}

function endGame() {
var clicsBySeconds = (score / durationInP).toFixed(2);
timerTxt.textContent = durationInP.toFixed(3);
clicksTxt.textContent = clicsBySeconds;
show(startBtn);
show(durationInP)
setTimeout(function() {
  alert('You made ' + score + ' clicks in ' + durationInP + 
  ' seconds. It is ' + clicsBySeconds + 
  ' clicks by seconds. Try again!');
}, 10);
}
startBtn.addEventListener("click", function(e) {
startGame();
});
clickArea.addEventListener("click", function(e) {
if (!ended) {
  score++;
  scoreTxt.textContent = score;
}
});
