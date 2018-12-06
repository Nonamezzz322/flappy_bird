import {gameOver} from "./menu";
import {setScoreObj, setBestScore, getBestScore} from "./lead_table";
import * as variables from "./variables";
export {draw, animations, moveUp, skinChange, birdLive, canvasWidth};

let bird = new Image();
let rainbowCat = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();
let fly = new Audio();
let score_audio = new Audio();
let failSound = new Audio();
let animations;
let birdLive = true; //проверяет мертва ли птичка сейчас

score_audio.src = require('../assets/audio/score.mp3');
failSound.src =  require('../assets/audio//fail.mp3');


function moveUp(e) {
	e = e.originalEvent || e;
	if(e.type == "touchmove" || e.scale >= 1 ){
		e.preventDefault();
	}
	if ((e.keyCode === 32 || e.type == "touchstart") && variables.yPos > 30) {
		fly.currentTime = 0;
		fly.play();
		if(e.keyCode === 32) {
			let moveUpBird = setInterval(() => variables.yPos -= variables.grav + 2.5, 1) //плавная анимация птички
			setTimeout(() => clearInterval(moveUpBird), 30)	
		} else if (e.type == "touchstart") {
			variables.yPos -= 30;
		} else if (e.type == "click") {

			e.preventDefault();
			variables.yPos -= 30;
		}	
	}
}

function draw() {
	if (/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		variables.ctx.drawImage(bg, 0, 0, variables.cvs.width, variables.cvs.height);
	} else {
		variables.ctx.drawImage(bg, 0, 0);
	}

	for (let i = 0; i < variables.pipe.length; i += 1) {
		variables.ctx.drawImage(pipeUp, variables.pipe[i].x, variables.pipe[i].y);
		variables.ctx.drawImage(pipeBottom, variables.pipe[i].x, variables.pipe[i].y + pipeUp.height + variables.gap);

		variables.pipe[i].x -= 1;
		if (/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			if (variables.pipe[i].x == 170) {
				variables.pipe.push({
					x : variables.cvs.width,
					y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
				});
			}
		} else {
			if (variables.pipe[i].x == 105) {
				variables.pipe.push({
					x : variables.cvs.width,
					y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
				});
			}
		}
		
		if (variables.xPos + bird.width >= variables.pipe[i].x
			&& variables.xPos <= variables.pipe[i].x + pipeUp.width
			&& (variables.yPos <= variables.pipe[i].y + pipeUp.height
			|| variables.yPos + bird.height >= variables.pipe[i].y + pipeUp.height + variables.gap) 
			|| variables.yPos + bird.height >= variables.cvs.height - fg.height) {
			
			failSound.play();
			birdLive = false;
			requestAnimationFrame(gameOver);
		}

		if (variables.pipe[i].x == 5) {
			variables.score += 1;
			setScoreObj()
			setBestScore()
			getBestScore()
			score_audio.play();
		}
	}

	if(JSON.parse(localStorage.getItem('skinKey')) === 4) {
		variables.ctx.drawImage(rainbowCat, variables.xPos - 38, variables.yPos - 2);
	}


	if (/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		variables.ctx.drawImage(fg, 0, variables.cvs.height - fg.height, variables.cvs.width, 118);
	} else {
		variables.ctx.drawImage(fg, 0, variables.cvs.height - fg.height);
	}

	variables.ctx.drawImage(bird, variables.xPos, variables.yPos);

	
	variables.yPos += variables.grav;

	variables.ctx.fillStyle = "#000";
	variables.ctx.font = "2.5rem Caveat";
	variables.ctx.fillText("Score: " + variables.score, 10, variables.cvs.height - 20);
	
	animations = requestAnimationFrame(draw);
}

function skinChange() {
	const storageSkinKey = JSON.parse(localStorage.getItem('skinKey'));
	if (storageSkinKey === 1 || !storageSkinKey) {
		bird.src = require('../assets/img/bird.png');
		bg.src = require('../assets/img/bg.jpg');
		fg.src = require('../assets/img/fg.jpg');
		pipeUp.src = require('../assets/img/pipeUp.png');
		pipeBottom.src = require('../assets/img/pipeBottom.png');
		variables.menuBlock.style.background = `url(${require('../assets/img/bg.jpg')}`;
		variables.afterGame.style.background = `url(${require('../assets/img/bg.jpg')} `;
		variables.menuBlock.style.backgroundSize = "cover";
		variables.afterGame.style.backgroundSize = "cover";
		fly.src = require('../assets/audio/fly.mp3');
		variables.setSkin1.className = "active";
		variables.setSkin2.className = "";
		variables.setSkin3.className = "";
		variables.setSkin4.className = "";
	} else if (storageSkinKey === 2) {
		bird.src = require('../assets/img/birdGray.png');
		bg.src = require('../assets/img/bgGray.jpg');
		fg.src = require('../assets/img/fgGray.jpg');
		pipeUp.src = require('../assets/img/pipeUpGray.png');
		pipeBottom.src = require('../assets//img/pipeBottomGray.png');
		variables.menuBlock.style.background = `url(${require('../assets/img/bgGray.jpg')}`;
		variables.afterGame.style.background = `url(${require('../assets/img/bgGray.jpg')}`;
		variables.menuBlock.style.backgroundSize = "cover";
		variables.afterGame.style.backgroundSize = "cover";
		fly.src = require('../assets//audio/fly.mp3');
		variables.setSkin1.className = "";
		variables.setSkin2.className = "active";
		variables.setSkin3.className = "";
		variables.setSkin4.className = "";
	} else if (storageSkinKey === 3) {
		bird.src = require('../assets/img/bird3.png');
		bg.src = require('../assets/img/bg3.jpg');
		fg.src = require('../assets/img/fg3.jpg');
		pipeUp.src = require('../assets/img/pipeUpOrange.png');
		pipeBottom.src = require('../assets/img/pipeBottomOrange.png');
		variables.menuBlock.style.background = `url(${require('../assets/img/bg3.jpg')}`;
		variables.afterGame.style.background = `url(${require('../assets/img/bg3.jpg')}`;
		variables.menuBlock.style.backgroundSize = "cover";
		variables.afterGame.style.backgroundSize = "cover";
		fly.src = require('../assets/audio/fly.mp3');
		variables.setSkin1.className = "";
		variables.setSkin2.className = "";
		variables.setSkin3.className = "active";
		variables.setSkin4.className = "";
	} else if (storageSkinKey === 4) {
		bird.src = require('../assets/img/birdCat.png');
		rainbowCat.src = require('../assets/img/rainbow_cat.png');
		bg.src = require('../assets/img/bgSpace.jpg');
		fg.src = require('../assets/img/fgRainbow.png');
		pipeUp.src = require('../assets/img/pipeUpPink.png');
		pipeBottom.src = require('../assets/img/pipeBottomPink.png');
		variables.menuBlock.style.background = `url(${require('../assets/img/bgSpace.jpg')}`;
		variables.afterGame.style.background = `url(${require('../assets/img/bgSpace.jpg')}`;
		variables.menuBlock.style.backgroundSize = "cover";
		variables.afterGame.style.backgroundSize = "cover";
		fly.src = require('../assets/audio/skin_4.mp3');
		variables.setSkin1.className = "";
		variables.setSkin2.className = "";
		variables.setSkin3.className = "";
		variables.setSkin4.className = "active";
	}	
}

function canvasWidth() {
	if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { // определение мобильного браузера
		  variables.cvs.width = innerWidth;
		  variables.gameBorder.style.width = "100%";
		  variables.gameBorder.style.height = "100%";
		  variables.gameBorder.style.left = "0";
		  variables.gameBorder.style.top = "0";
		  variables.gameBorder.style.background = "black";
		  variables.gameContent.style.left = "0";
		  variables.gameContent.style.width = "100%";
	}
}