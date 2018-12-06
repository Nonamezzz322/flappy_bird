import * as vars from "./variables";
import {draw, animations, moveUp, skinChange, birdLive, canvasWidth} from "./app";
import {checkLocalStorage, createTable, pushNick, getBestScore} from "./lead_table";
export {openMenu, exitMenu, skinsMenu, backMenu,
  changeName, reload, sleep, start, gameOver, playMenu, 
  leadersMenu, acceptName, acceptChangeName, checkNameButtonActive, whereNameInput};

function openMenu() {
	vars.gameBlock.style.display = "block";
	document.body.style.overflow = "hidden";
	document.body.style.height = "100%";
	document.body.touchAction = "manipulation";
	getBestScore();
	skinChange();
	checkNameButtonActive();
	canvasWidth();
}

function exitMenu() {
	vars.gameBlock.style.display = "none";
	document.body.style.overflow = "auto";
	document.body.touchAction = "auto";
}

function skinsMenu() {
	vars.menuPlay.style.display = "none";
	vars.menuSkins.style.display = "none";
	vars.menuLeaders.style.display = "none";
	vars.menuExit.style.display = "none";
	vars.nameChange.style.display = "none";
	vars.menuBack.style.display = "block";
	vars.skinsBlock.style.display = "block";
}

function backMenu() {
	vars.menuEnterGame.style.display = "none";
	vars.menuBack.style.display = "none";
	vars.menuLeadersTable.style.display = "none";
	vars.canvasGame.style.display = "none";
	vars.afterGame.style.display = "none";
	vars.menuAccept.style.display = "none";
	vars.acceptNameChange.style.display = "none";
	vars.skinsBlock.style.display = "none";
	vars.menuBlock.style.display = "block";
	vars.menuPlay.style.display = "block";
	vars.menuSkins.style.display = "block";
	vars.menuLeaders.style.display = "block";
	vars.menuExit.style.display = "block";
	checkNameButtonActive();
}

function enterGame() {
	vars.pipe = [];
	vars.pipe[0] = {
		x : vars.cvs.width,
		y : 0
	}
	vars.score = 0;
	vars.xPos = 10;
	vars.yPos = 150;

	vars.menuBlock.style.display = "none";
	vars.canvasGame.style.display = "block";
	vars.afterGame.style.display = "none";
}

function changeName() {
	vars.menuPlay.style.display = "none";
	vars.menuSkins.style.display = "none";
	vars.menuLeaders.style.display = "none";
	vars.menuExit.style.display = "none";
	vars.nameChange.style.display = "none";
	vars.menuEnterGame.style.display = "block";
	vars.acceptNameChange.style.display = "block";
	vars.menuBack.style.display = "block";
	vars.nickname.value = localStorage.getItem('name');
}

function reload() { //должна перезагружать страницу
	vars.pipe = [];
	vars.pipe[0] = {
		x : vars.cvs.width,
		y : 0
	}
	vars.score = 0;
	vars.xPos = 10;
	vars.yPos = 150;

	vars.canvasGame.style.display = "block";
	vars.afterGame.style.display = "none";
	vars.pauseBtn.style.display = "block";
	vars.startBtn.style.display = "none";
	requestAnimationFrame(draw);
	document.addEventListener("keydown", moveUp);
}

function sleep() {
	cancelAnimationFrame(animations);
	vars.startBtn.style.display = "block";
	vars.leaveGame.style.display = "block";
	vars.pauseBtn.style.display = "none";
	document.removeEventListener("keydown", moveUp);
}

function start() {
	requestAnimationFrame(draw);
	vars.startBtn.style.display = "none";
	vars.leaveGame.style.display = "none";
	vars.pauseBtn.style.display = "block";
	document.addEventListener("keydown", moveUp);
}

function gameOver() {  //функция вызываемая после столкновения
	cancelAnimationFrame(animations);
	document.removeEventListener("keydown", moveUp);
	skinChange();
	setTimeout(() => {
		if(vars.score > 0){
			checkLocalStorage();
		}	
		vars.canvasGame.style.display = "none";
		vars.startBtn.style.display = "none";
		vars.leaveGame.style.display = "none";
		vars.pauseBtn.style.display = "block";
		vars.afterGame.style.display = "block";
		vars.scoreAfterDiv.innerText = `${vars.score}`;
		if(vars.score == vars.bestScore) {
			vars.highscoreDiv.innerText = `New best: 
			${vars.bestScore}`;
		} else if(vars.score < vars.bestScore) {
			vars.highscoreDiv.innerText = `Best: 
			${vars.bestScore}`;
		} else if(vars.bestScore === 0) {
			vars.highscoreDiv.innerText = `New best: 
			${vars.score}`;
		}
	}, 500);
}

function playMenu() {
	skinChange();
	vars.menuPlay.style.display = "none";
	vars.menuSkins.style.display = "none";
	vars.menuLeaders.style.display = "none";
	vars.menuExit.style.display = "none";
	vars.nameChange.style.display = "none";
	if(localStorage.getItem('name')){
		if(birdLive === true) {
			requestAnimationFrame(draw);
		}
		enterGame();
	} else {
		vars.menuEnterGame.style.display = "block";
		vars.menuAccept.style.display = "block";
		vars.menuBack.style.display = "block";
	}
	if(birdLive === false){
		reload();
	}
}

function leadersMenu() {
	vars.menuPlay.style.display = "none";
	vars.menuSkins.style.display = "none";
	vars.menuLeaders.style.display = "none";
	vars.menuExit.style.display = "none";
	vars.nameChange.style.display = "none";
	vars.menuBack.style.display = "block";
	vars.menuLeadersTable.style.display = "block";
	createTable();
}

function acceptName() {
	if (vars.nickname.value) {
		pushNick();
		enterGame();
		requestAnimationFrame(draw);
	}
}

function acceptChangeName() {
	if (vars.nickname.value) {
		pushNick();
		backMenu();
	}
}

function checkNameButtonActive() {
	if (localStorage.getItem("name")) {
		vars.nameChange.style.display = "block";
	} else {
		vars.nameChange.style.display = "none";
	}
}

function whereNameInput(e){
	if (e.keyCode === 13 && localStorage.getItem("name")){
		acceptChangeName();
	} else if (e.keyCode === 13 && !localStorage.getItem("name")) {
		acceptName();
	}
}