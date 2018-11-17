let cvs = document.getElementById("game");
let context = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipe1 = new Image();
let pipe2 = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipe1.src = "img/pipeUp.png";
pipe2.src = "img/pipeBottom.png";


let flySound = new Audio();
let plusScoreSound = new Audio();
let failSound = new Audio();

flySound.src = "audio/fly.mp3";
failSound.src = "audio/fail.mp3";
plusScoreSound.src = "audio/score.mp3";

function moveUp(e) {
	if (e.keyCode === 49) {
		bird.src = "img/bird.png";
	} else if (e.keyCode === 50) {
		bird.src = "img/bird2.png";
	} else if (e.keyCode === 51) {
		bird.src = "img/bird3.png";
	} else {
		yPosition -= 40;
		flySound.play();
	}
}


let pipeArr = [];
pipeArr[0] = {
 x : cvs.width,
 y : 0
}
let pauseBtn = document.getElementById('pause');
let startBtn = document.getElementById('start');
let pause = '';
let score = 0;
let xPosition = 35;
let yPosition = 150;
let gravitation = 1.5;
let gap = 90;

function gameWorld() {

	yPosition += gravitation;

 	context.drawImage(bg, 0, 0);
	for(let i = 0; i < pipeArr.length; i++) {
	context.drawImage(pipe1, pipeArr[i].x, pipeArr[i].y);
	context.drawImage(pipe2, pipeArr[i].x, pipeArr[i].y + pipe1.height + gap)

		pipeArr[i].x-=1;
		if(pipeArr[i].x == 110) {
			pipeArr.push({
			x : cvs.width,
			y : Math.floor(Math.random() * pipe1.height) - pipe1.height
			});
	}
		if(xPosition + bird.width >= pipeArr[i].x && xPosition <= pipeArr[i].x + pipe1.width && (yPosition <= pipeArr[i].y + pipe1.height 
		|| yPosition + bird.height >= pipeArr[i].y + pipe1.height + gap) 
		|| yPosition + bird.height >= cvs.height - fg.height) {

			bg.src = "img/gameOwer.png";
			pipe1.src = "img/pipeUpNull.png";
			pipe2.src = "img/pipeBottomNull.png";
			yPosition = 820;
			failSound.play();
			// setTimeout('alert(`Вы проиграли, ваш счет: ${score}`)', 100);
			location.reload();
		}
		if(pipeArr[i].x == 5) {
			score++;
			plusScoreSound.play();
		}
	}

 context.drawImage(fg, 0, cvs.height - fg.height);
 context.drawImage(bird, xPosition, yPosition);



context.fillStyle = "white";
context.font = "24px Arial";
context.fillText("Счет: " + score, 10, cvs.height - 20);

pause = requestAnimationFrame(gameWorld);
}

pipe2.onload = gameWorld;
document.addEventListener("keydown", moveUp);
pauseBtn.addEventListener("click", sleep);
startBtn.addEventListener("click", start);

function sleep() {
		cancelAnimationFrame(pause)
		startBtn.style.display = 'block'
		pauseBtn.style.display = 'none'
		flySound.src = "";
		document.addEventListener("keydown", ()=>{ yPosition += 40; });
}


function start() {
		requestAnimationFrame(gameWorld)
		startBtn.style.display = 'none'
		pauseBtn.style.display = 'block'
		flySound.src = "audio/fly.mp3";
		document.addEventListener("keydown", ()=>{ yPosition -= 40; });
	}