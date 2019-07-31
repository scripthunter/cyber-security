var ctx, WIDTH, HEIGHT, dx = 20,
  dy = 20,
  dr = 10,
  direction, snake, size, food, id;
  travelling = "Everyone starts with zero";
  

function init() {
  ctx = $("#canvas")[0].getContext("2d"), WIDTH = $("#canvas").width(), HEIGHT = $("#canvas").height(), createsnake(), newfood(0), direction = 0, size = 1, id = setInterval(step, 200)
}

function onKeyDown(a) {
  32 == a.keyCode || (newdir = a.keyCode - 37, newdir != direction && newdir != direction + 2 && newdir != direction - 2 && (direction = newdir))
}
$.browser.mozilla ? $(document).keypress(onKeyDown) : $(document).keydown(onKeyDown);

function createsnake() {
  snake = [];
  var a = [];
  a.x = WIDTH / 2, a.y = HEIGHT / 2, snake.push(a)
}

function hex_to_ascii(str1)
 {
  var hex  = str1.toString();
  var a = []
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		a.push(parseInt(hex.substr(n, 2), 16));
	}
	return a;
 }

function collision(a) {
  if (0 > a.x || a.x > WIDTH - 1 || 0 > a.y || a.y > HEIGHT - 1) return !0;
  for (var b = 0; b < snake.length; b++)
    if (snake[b].x == a.x && snake[b].y == a.y) return !0;
  return !1
}

function lib_C()
{
  var key = hex_to_ascii(travelling);
  var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  var encryptedBytes = aesjs.utils.hex.toBytes('9917d02b060a6ffe0170922b469553ad174e352ccd3de716bbbe8e87ca81d23456439ee4');
  var decryptedBytes = aesCtr.decrypt(encryptedBytes);
  flag = aesjs.utils.utf8.fromBytes(decryptedBytes);
}

function showscore(a)
{
	b = document.getElementById("canvas");
	c = b.getContext("2d");
	c.font = "20px Arial"; c.fillStyle = "white"; c.textAlign = "center"; c.fillText("Score: " + a, b.width-60, 30);
}

function GoThroughThis()
{
  if(size == 200)
  {
    showflag();
  }
}

function newfood(score) {
  var a = WIDTH / dx,
    b = HEIGHT / dy,
    c = Math.floor(Math.random() * a),
    d = Math.floor(Math.random() * b);
  food = [], food.x = c * dx, food.y = d * dy, food.r = dr, ++size;
  travelling = sha256(travelling);
  lib_C();
  GoThroughThis();
  }

function meal(a) {	
  return a.x == food.x && a.y == food.y;
}

function movesnake() {
  h = snake[0];
  var a = [];
  return (0 === direction ? (a.x = h.x - dx, a.y = h.y) : 1 === direction ? (a.x = h.x, a.y = h.y - dy) : 2 === direction ? (a.x = h.x + dx, a.y = h.y) : 3 === direction ? (a.x = h.x, a.y = h.y + dy) : void 0, !collision(a)) && (snake.unshift(a), meal(a) ? newfood(a) : snake.pop(), !0)
}

function die() {
  id && clearInterval(id), gameStarted = !1
}

function circle(a, b, c) {
  ctx.beginPath(), ctx.arc(a, b, c, 0, 2 * Math.PI, !0), ctx.closePath(), ctx.fill()
}

function rect(a, b, c, d) {
  ctx.beginPath(), ctx.rect(a, b, c, d), ctx.closePath(), ctx.fill()
}

function screenclear() {
  ctx.fillStyle = "#000000", ctx.clearRect(0, 0, WIDTH, HEIGHT), rect(0, 0, WIDTH, HEIGHT)
}

function drawsnake() {
  ctx.fillStyle = "#FFFFFF", snake.forEach(function (a) {
    rect(a.x, a.y, dx, dy)
  })
}

function drawfood() {
  ctx.fillStyle = "#FF0000", circle(food.x + food.r, food.y + food.r, food.r)
}
