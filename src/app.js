import {gameOver} from "./menu";
import {setScoreObj, setBestScore, getBestScore} from "./lead_table";
import * as vars from "./variables";
export {draw, animations, moveUp, skinChange, canvasWidth, ghost};

let bird = new Image();
let rip = new Image();
let rainbowCat = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();
let fly = new Audio();
let scoreAudio = new Audio();
let ghost = new Audio();
let failSound = new Audio();
let animations;
let upFrames = 0;

scoreAudio.volume=0.5;
fly.volume = 0.5;
failSound.volume = 0.5;
scoreAudio.src = require('../assets/audio/score.mp3');
failSound.src =  require('../assets/audio/fail.mp3');
ghost.src = require('../assets/audio/smeh-prividenija.mp3');
rip.src = require('../assets/img/rip.png');




function moveUp(e) {
	e = e.originalEvent || e;
	if((e.type == "touchmove" || e.scale >= 1) && e.target.id !== 'pause'){
		e.preventDefault();
	}
	if ((e.keyCode === 32 || e.type == "touchstart") && vars.yPos > 30) {
		upFrames = 8;
		fly.currentTime = 0;
		fly.play();
	} else if (e.type == "click") {
		upFrames = 8;
		e.preventDefault();
	}	
}

function draw() {
	const stName = localStorage.getItem('name');
	if (upFrames > 0) {
		vars.yPos -= 30 / 8 + 1.5;
		upFrames -= 1;
	}
	if (/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		vars.ctx.drawImage(bg, 0, 0, vars.cvs.width, vars.cvs.height);
	} else {
		vars.ctx.drawImage(bg, 0, 0);
	}

	for (let i = 0; i < vars.pipe.length; i += 1) {
		vars.ctx.drawImage(pipeUp, vars.pipe[i].x, vars.pipe[i].y);
		vars.ctx.drawImage(pipeBottom, vars.pipe[i].x, vars.pipe[i].y + pipeUp.height + vars.gap);

		vars.pipe[i].x -= 1;

		if (vars.pipe[i].x == vars.cvs.width - 200) {
			gapReduction();
			vars.pipe.push({
				x : vars.cvs.width,
				y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
			});
		}
		
		if (vars.xPos + bird.width >= vars.pipe[i].x
			&& vars.xPos <= vars.pipe[i].x + pipeUp.width
			&& (vars.yPos <= vars.pipe[i].y + pipeUp.height
			|| vars.yPos + bird.height >= vars.pipe[i].y + pipeUp.height + vars.gap) 
			|| vars.yPos + bird.height >= vars.cvs.height - fg.height) {
			
			document.removeEventListener("keydown", moveUp);
			failSound.play();
			vars.birdLive = false;
			setTimeout(() => {
				requestAnimationFrame(gameOver);
			}, 600);
		}

		if (vars.pipe[i].x == 5 && vars.birdLive === true)  {
			vars.score += 1;	
			setScoreObj()
			setBestScore()
			getBestScore()
			scoreAudio.play();
		}
	}

	if (/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		vars.ctx.drawImage(fg, 0, vars.cvs.height - fg.height, vars.cvs.width, 118);
	} else {
		vars.ctx.drawImage(fg, 0, vars.cvs.height - fg.height);
	}
 
	vars.ctx.save();
	if (upFrames > 0 && stName != "Nonamezzz" && stName != "Antonster") {
		vars.ctx.translate(vars.xPos, vars.yPos);
		vars.ctx.rotate((-45 * upFrames / 8) / 180 * Math.PI);
		vars.ctx.translate(-vars.xPos, -vars.yPos);
	}
	if(vars.birdLive === false) {
		vars.ctx.drawImage(rip, vars.xPos, vars.yPos);
		vars.grav = 4;
	} else{
		vars.ctx.drawImage(bird, vars.xPos, vars.yPos);
	}

	if(JSON.parse(localStorage.getItem('skinKey')) === 4 && vars.birdLive === true 
	&& stName != "Nonamezzz" && stName != "Antonster" && stName != "WorldThirteen")  {
		vars.ctx.drawImage(rainbowCat, vars.xPos - 38, vars.yPos - 2);
	}
	vars.ctx.restore();

	
	vars.yPos += vars.grav;

	vars.ctx.fillStyle = "#000";
	vars.ctx.font = "2.5rem Caveat";
	vars.ctx.fillText("Score: " + vars.score, 10, vars.cvs.height - 20);
	
	animations = requestAnimationFrame(draw);
}

function skinChange() {
	const stName = localStorage.getItem('name');
	const storageSkinKey = JSON.parse(localStorage.getItem('skinKey'));
	if (storageSkinKey === 1 || !storageSkinKey) {
		if (stName == "Nonamezzz" || stName == "Antonster" || stName == "WorldThirteen") {
			eastEgg();
		} else {
			bird.src = require('../assets/img/bird.png');
			fly.src = require('../assets/audio/fly.mp3');		
		}
		bg.src = require('../assets/img/bg.jpg');
		fg.src = require('../assets/img/fg.jpg');
		pipeUp.src = require('../assets/img/pipeUp.png');
		pipeBottom.src = require('../assets/img/pipeBottom.png');
		vars.menuBlock.style.background = `url(${require('../assets/img/bg.jpg')}`;
		vars.afterGame.style.background = `url(${require('../assets/img/bg.jpg')} `;
		vars.setSkin1.className = "active";
		vars.setSkin2.className = "";
		vars.setSkin3.className = "";
		vars.setSkin4.className = "";
	} else if (storageSkinKey === 2) {
		if (stName == "Nonamezzz" || stName == "Antonster" || stName == "WorldThirteen") {
			eastEgg();
		} else {
			bird.src = require('../assets/img/birdGray.png');
			fly.src = require('../assets/audio/fly.mp3');	
		}		
		bg.src = require('../assets/img/bgGray.jpg');
		fg.src = require('../assets/img/fgGray.jpg');
		pipeUp.src = require('../assets/img/pipeUpGray.png');
		pipeBottom.src = require('../assets//img/pipeBottomGray.png');
		vars.menuBlock.style.background = `url(${require('../assets/img/bgGray.jpg')}`;
		vars.afterGame.style.background = `url(${require('../assets/img/bgGray.jpg')}`;
		vars.setSkin1.className = "";
		vars.setSkin2.className = "active";
		vars.setSkin3.className = "";
		vars.setSkin4.className = "";
	} else if (storageSkinKey === 3) {
		if (stName == "Nonamezzz" 	|| stName == "Antonster" || stName == "WorldThirteen") {
				eastEgg();
			} else {
				bird.src = require('../assets/img/bird3.png');
				fly.src = require('../assets/audio/fly.mp3');		
			}
		bg.src = require('../assets/img/bg3.jpg');
		fg.src = require('../assets/img/fg3.jpg');
		pipeUp.src = require('../assets/img/pipeUpOrange.png');
		pipeBottom.src = require('../assets/img/pipeBottomOrange.png');
		vars.menuBlock.style.background = `url(${require('../assets/img/bg3.jpg')}`;
		vars.afterGame.style.background = `url(${require('../assets/img/bg3.jpg')}`;
		vars.setSkin1.className = "";
		vars.setSkin2.className = "";
		vars.setSkin3.className = "active";
		vars.setSkin4.className = "";
	} else if (storageSkinKey === 4) {
		if (stName == "Nonamezzz" || stName == "Antonster" || stName == "WorldThirteen") {
				eastEgg();
			} else {
				bird.src = require('../assets/img/birdCat.png');
				fly.src = require('../assets/audio/skin_4.mp3');
			}
		rainbowCat.src = require('../assets/img/rainbow_cat.png');
		bg.src = require('../assets/img/bgSpace.jpg');
		fg.src = require('../assets/img/fgRainbow.png');
		pipeUp.src = require('../assets/img/pipeUpPink.png');
		pipeBottom.src = require('../assets/img/pipeBottomPink.png');
		vars.menuBlock.style.background = `url(${require('../assets/img/bgSpace.jpg')}`;
		vars.afterGame.style.background = `url(${require('../assets/img/bgSpace.jpg')}`;
		vars.setSkin1.className = "";
		vars.setSkin2.className = "";
		vars.setSkin3.className = "";
		vars.setSkin4.className = "active";
	} 
}

function canvasWidth() {
	if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { // определение мобильного браузера
		vars.cvs.width = innerWidth;	
			// vars.cvs.width = vars.cvs.width * window.devicePixelRatio;
			// vars.cvs.height = vars.cvs.height * window.devicePixelRatio;
		vars.gameBorder.style.width = "100%";
		vars.gameBorder.style.height = "100%";
		vars.gameBorder.style.left = "0";
		vars.gameBorder.style.top = "0";
		vars.gameBorder.style.background = "black";
		vars.gameContent.style.left = "0";
		vars.gameContent.style.width = "100%";
	}
}

function gapReduction() {//умньшает зазор до 30-й трубы
	if(vars.score <= 30){
		vars.gap -= 1;
	}
}

function eastEgg() {
	if (localStorage.getItem('name') == "Nonamezzz") {
		bird.src = require('../assets/img/chack.png');
		fly.src = require('../assets/audio/punch.mp3');
	} else if (localStorage.getItem('name') == "Antonster") {
		bird.src = require('../assets/img/dart.png');
		fly.src = require('../assets/audio/sword.mp3');
	} if (localStorage.getItem('name') == "WorldThirteen") {
		bird.src = require('../assets/img/ghost.png');
		fly.src = require('../assets/audio/fly.mp3');
	}
}