const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");
let pauseBtn = document.getElementById('pause');
let startBtn = document.getElementById('start');

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

let fly = new Audio();
let score_audio = new Audio();
let failSound = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";
failSound.src = "audio/fail.mp3";

let pipe = [];
pipe[0] = {
	x : cvs.width,
	y : 0
}

let pause = '';
let gap = 90;
let score = 0;
let xPos = 10;
let yPos = 150;
let grav = 1.5;

function moveUp(e) {
	if (e.keyCode === 32 && yPos > 30) {
		yPos -= 30;
		fly.play();
	} else if (e.keyCode === 49) {
		bird.src = "img/bird.png";
	} else if (e.keyCode === 50) {
		bird.src = "img/bird2.png";
	} else if (e.keyCode === 51) {
		bird.src = "img/bird3.png";
	}
}

function draw() {
	ctx.drawImage(bg, 0, 0);

	for (let i = 0; i < pipe.length; i += 1) {
		ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

		pipe[i].x -= 1;

		if (pipe[i].x == 115) {
			pipe.push({
			x : cvs.width,
			y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
			});
		}

		if (xPos + bird.width >= pipe[i].x
			&& xPos <= pipe[i].x + pipeUp.width
			&& (yPos <= pipe[i].y + pipeUp.height
			|| yPos + bird.height >= pipe[i].y + pipeUp.height + gap) 
			|| yPos + bird.height >= cvs.height - fg.height) {

			// bg.src = "img/gameOwer.png";
			// pipe1.src = "img/pipeUpNull.png";
			// pipe2.src = "img/pipeBottomNull.png";
			// yPosition = 820;
			// failSound.play();
			location.reload();
		}

		if (pipe[i].x == 5) {
			score += 1;
			score_audio.play();
		}
	}

	ctx.drawImage(fg, 0, cvs.height - fg.height);
	ctx.drawImage(bird, xPos, yPos);

	yPos += grav;

	ctx.fillStyle = "#000";
	ctx.font = "24px Verdana";
	ctx.fillText("Score: " + score, 10, cvs.height - 20);

	animations = requestAnimationFrame(draw);
}

pipeBottom.onload = draw;

document.addEventListener("keydown", moveUp);
pauseBtn.addEventListener("click", sleep);
startBtn.addEventListener("click", start);

function sleep() {
	cancelAnimationFrame(animations)
	startBtn.style.display = 'block';
	pauseBtn.style.display = 'none';
	document.removeEventListener("keydown", moveUp);
}


function start() {
	requestAnimationFrame(draw)
	startBtn.style.display = 'none';
	pauseBtn.style.display = 'block';
	document.addEventListener("keydown", moveUp);
}