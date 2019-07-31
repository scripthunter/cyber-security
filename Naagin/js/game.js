let gameStarted = !1;
$(document).ready(function () {
  showIntro(), this.onkeypress = function (a) {
    !1 == gameStarted && 32 == a.keyCode && (gameStarted = !0, gamerun())
  }
});

function gamerun() {
  init()
}

function step() {
  update(), draw()
}

function update() {
  movesnake() || (die(), showConclusion(size))
}

function draw() {
  gameStarted && (screenclear(), drawsnake(), drawfood(),showscore(size))
}

function showflag()
{
  var a = document.getElementById("canvas");
    b = a.getContext("2d");
  b.font = "30px Arial"; b.fillStyle = "white"; b.textAlign = "center"; b.fillText(flag, a.width / 2, a.height / 2); die();
}
function showIntro() {
  let a = document.getElementById("canvas"),
    b = a.getContext("2d");
  b.font = "30px Arial", b.fillStyle = "white", b.textAlign = "center", b.fillText('Naagin', a.width / 2, a.height / 2), b.font = "20px Arial", b.fillText(chrome.i18n.getMessage("start"), a.width / 2, a.height / 2 + 40)
}

function showConclusion(a) {
  screenclear();
  let b = document.getElementById("canvas"),
    c = b.getContext("2d");
  c.font = "30px Arial", c.fillStyle = "white", c.textAlign = "center", c.fillText("GAME OVER", b.width / 2, b.height / 2), c.fillText("Score: " + a, b.width / 2, b.height / 2 - 40), c.font = "20px Arial", c.fillText(chrome.i18n.getMessage("start"), b.width / 2, b.height / 2 + 80)
}
