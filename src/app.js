import {gameOver} from "./menu";
import {setScoreObj, setBestScore, getBestScore} from "./lead_table";
import * as vars from "./variables";
export {step, draw, animations, moveUp, skinChange, birdLive, canvasWidth};

let bird = new Image();
let rainbowCat = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();
let fly = new Audio();
let scoreAudio = new Audio();
let failSound = new Audio();
let animations;
let birdLive = true; //проверяет мертва ли птичка сейчас

scoreAudio.src = require('../assets/audio/score.mp3');
failSound.src =  require('../assets/audio//fail.mp3');


function moveUp(e) {
	e = e.originalEvent || e;
	if(e.type == "touchmove" || e.scale >= 1 ){
		e.preventDefault();
	}
	if ((e.keyCode === 32 || e.type == "touchstart") && vars.yPos > 30) {
		fly.currentTime = 0;
		fly.play();
		if(e.keyCode === 32) {
			let moveUpBird = setInterval(() => vars.yPos -= vars.grav + 2.5, 1) //плавная анимация птички
			setTimeout(() => clearInterval(moveUpBird), 30)	
		} else if (e.type == "touchstart") {
			vars.yPos -= 30;
		} else if (e.type == "click") {

			e.preventDefault();
			vars.yPos -= 30;
		}	
	}
}

var fps = 60;

function step() {
    setTimeout(function() {
        requestAnimationFrame(step);
        requestAnimationFrame(draw);
    }, 1000 / fps);
}


function draw() {
	if (/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		vars.ctx.drawImage(bg, 0, 0, vars.cvs.width, vars.cvs.height);
	} else {
		vars.ctx.drawImage(bg, 0, 0);
	}

	for (let i = 0; i < vars.pipe.length; i += 1) {
		vars.ctx.drawImage(pipeUp, vars.pipe[i].x, vars.pipe[i].y);
		vars.ctx.drawImage(pipeBottom, vars.pipe[i].x, vars.pipe[i].y + pipeUp.height + vars.gap);

		vars.pipe[i].x -= 1;
		if (/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			if (vars.pipe[i].x == 170) {
				vars.pipe.push({
					x : vars.cvs.width,
					y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
				});
			}
		} else {
			if (vars.pipe[i].x == 105) {
				vars.pipe.push({
					x : vars.cvs.width,
					y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
				});
			}
		}
		
		if (vars.xPos + bird.width >= vars.pipe[i].x
			&& vars.xPos <= vars.pipe[i].x + pipeUp.width
			&& (vars.yPos <= vars.pipe[i].y + pipeUp.height
			|| vars.yPos + bird.height >= vars.pipe[i].y + pipeUp.height + vars.gap) 
			|| vars.yPos + bird.height >= vars.cvs.height - fg.height) {
			
			failSound.play();
			birdLive = false;
			requestAnimationFrame(gameOver);
		}

		if (vars.pipe[i].x == 5) {
			vars.score += 1;
			setScoreObj()
			setBestScore()
			getBestScore()
			scoreAudio.play();
		}
	}

	if(JSON.parse(localStorage.getItem('skinKey')) === 4) {
		vars.ctx.drawImage(rainbowCat, vars.xPos - 38, vars.yPos - 2);
	}


	if (/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		vars.ctx.drawImage(fg, 0, vars.cvs.height - fg.height, vars.cvs.width, 118);
	} else {
		vars.ctx.drawImage(fg, 0, vars.cvs.height - fg.height);
	}

	vars.ctx.drawImage(bird, vars.xPos, vars.yPos);

	
	vars.yPos += vars.grav;

	vars.ctx.fillStyle = "#000";
	vars.ctx.font = "2.5rem Caveat";
	vars.ctx.fillText("Score: " + vars.score, 10, vars.cvs.height - 20);
	
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
		vars.menuBlock.style.background = `url(${require('../assets/img/bg.jpg')}`;
		vars.afterGame.style.background = `url(${require('../assets/img/bg.jpg')} `;
		vars.menuBlock.style.backgroundSize = "cover";
		vars.afterGame.style.backgroundSize = "cover";
		fly.src = require('../assets/audio/fly.mp3');
		vars.setSkin1.className = "active";
		vars.setSkin2.className = "";
		vars.setSkin3.className = "";
		vars.setSkin4.className = "";
	} else if (storageSkinKey === 2) {
		bird.src = require('../assets/img/birdGray.png');
		bg.src = require('../assets/img/bgGray.jpg');
		fg.src = require('../assets/img/fgGray.jpg');
		pipeUp.src = require('../assets/img/pipeUpGray.png');
		pipeBottom.src = require('../assets//img/pipeBottomGray.png');
		vars.menuBlock.style.background = `url(${require('../assets/img/bgGray.jpg')}`;
		vars.afterGame.style.background = `url(${require('../assets/img/bgGray.jpg')}`;
		vars.menuBlock.style.backgroundSize = "cover";
		vars.afterGame.style.backgroundSize = "cover";
		fly.src = require('../assets//audio/fly.mp3');
		vars.setSkin1.className = "";
		vars.setSkin2.className = "active";
		vars.setSkin3.className = "";
		vars.setSkin4.className = "";
	} else if (storageSkinKey === 3) {
		bird.src = require('../assets/img/bird3.png');
		bg.src = require('../assets/img/bg3.jpg');
		fg.src = require('../assets/img/fg3.jpg');
		pipeUp.src = require('../assets/img/pipeUpOrange.png');
		pipeBottom.src = require('../assets/img/pipeBottomOrange.png');
		vars.menuBlock.style.background = `url(${require('../assets/img/bg3.jpg')}`;
		vars.afterGame.style.background = `url(${require('../assets/img/bg3.jpg')}`;
		vars.menuBlock.style.backgroundSize = "cover";
		vars.afterGame.style.backgroundSize = "cover";
		fly.src = require('../assets/audio/fly.mp3');
		vars.setSkin1.className = "";
		vars.setSkin2.className = "";
		vars.setSkin3.className = "active";
		vars.setSkin4.className = "";
	} else if (storageSkinKey === 4) {
		bird.src = require('../assets/img/birdCat.png');
		rainbowCat.src = require('../assets/img/rainbow_cat.png');
		bg.src = require('../assets/img/bgSpace.jpg');
		fg.src = require('../assets/img/fgRainbow.png');
		pipeUp.src = require('../assets/img/pipeUpPink.png');
		pipeBottom.src = require('../assets/img/pipeBottomPink.png');
		vars.menuBlock.style.background = `url(${require('../assets/img/bgSpace.jpg')}`;
		vars.afterGame.style.background = `url(${require('../assets/img/bgSpace.jpg')}`;
		vars.menuBlock.style.backgroundSize = "cover";
		vars.afterGame.style.backgroundSize = "cover";
		fly.src = require('../assets/audio/skin_4.mp3');
		vars.setSkin1.className = "";
		vars.setSkin2.className = "";
		vars.setSkin3.className = "";
		vars.setSkin4.className = "active";
	}	
}

function canvasWidth() {
	if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { // определение мобильного браузера
		  vars.cvs.width = innerWidth;
		  vars.gameBorder.style.width = "100%";
		  vars.gameBorder.style.height = "100%";
		  vars.gameBorder.style.left = "0";
		  vars.gameBorder.style.top = "0";
		  vars.gameBorder.style.background = "black";
		  vars.gameContent.style.left = "0";
		  vars.gameContent.style.width = "100%";
	}
}