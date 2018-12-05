import * as variables from "./variables";
import {draw, animations, moveUp, skinChange, birdLive} from "./index";
import {checkLocalStorage, createTable, pushNick} from "./lead_table";
export {openMenu, exitMenu, skinsMenu, backMenu,
  changeName, reload, sleep, start, gameOver, playMenu, 
  leadersMenu, acceptName, acceptChangeName};

function openMenu() {
	variables.gameBlock.style.display = "block";
	document.body.style.overflow = "hidden";
	document.body.style.height = "100%";
	document.body.touchAction = "manipulation";
}

function exitMenu() {
	variables.gameBlock.style.display = "none";
	document.body.style.overflow = "auto";
	document.body.touchAction = "auto";
}

function skinsMenu() {
	variables.menuPlay.style.display = "none";
	variables.menuSkins.style.display = "none";
	variables.menuLeaders.style.display = "none";
	variables.menuExit.style.display = "none";
	variables.nameChange.style.display = "none";
	variables.menuBack.style.display = "block";
	variables.skinsBlock.style.display = "block";
}

function backMenu() {
	variables.menuEnterGame.style.display = "none";
	variables.menuBack.style.display = "none";
	variables.menuLeadersTable.style.display = "none";
	variables.canvasGame.style.display = "none";
	variables.afterGame.style.display = "none";
	variables.menuAccept.style.display = "none";
	variables.acceptNameChange.style.display = "none";
	variables.skinsBlock.style.display = "none";
	variables.menuBlock.style.display = "block";
	variables.menuPlay.style.display = "block";
	variables.menuSkins.style.display = "block";
	variables.menuLeaders.style.display = "block";
	variables.menuExit.style.display = "block";
	variables.nameChange.style.display = "block";
}

function enterGame() {
	variables.pipe = [];
	variables.pipe[0] = {
		x : variables.cvs.width,
		y : 0
	}
	variables.score = 0;
	variables.xPos = 10;
	variables.yPos = 150;

	variables.menuBlock.style.display = "none";
	variables.canvasGame.style.display = "block";
	variables.afterGame.style.display = "none";
}

function changeName() {
	variables.menuPlay.style.display = "none";
	variables.menuSkins.style.display = "none";
	variables.menuLeaders.style.display = "none";
	variables.menuExit.style.display = "none";
	variables.nameChange.style.display = "none";
	variables.menuEnterGame.style.display = "block";
	variables.acceptNameChange.style.display = "block";
	variables.menuBack.style.display = "block";	
}

function reload() { //должна перезагружать страницу
	variables.pipe = [];
	variables.pipe[0] = {
		x : variables.cvs.width,
		y : 0
	}
	variables.score = 0;
	variables.xPos = 10;
	variables.yPos = 150;

	variables.canvasGame.style.display = "block";
	variables.afterGame.style.display = "none";
	variables.pauseBtn.style.display = "block";
	variables.startBtn.style.display = "none";
	requestAnimationFrame(draw);
	document.addEventListener("keydown", moveUp);
}

function sleep() {
	cancelAnimationFrame(animations);
	variables.startBtn.style.display = "block";
	variables.leaveGame.style.display = "block";
	variables.pauseBtn.style.display = "none";
	document.removeEventListener("keydown", moveUp);
}

function start() {
	requestAnimationFrame(draw);
	variables.startBtn.style.display = "none";
	variables.leaveGame.style.display = "none";
	variables.pauseBtn.style.display = "block";
	document.addEventListener("keydown", moveUp);
}

function gameOver() {  //функция вызываемая после столкновения
	cancelAnimationFrame(animations);
	skinChange();
	if(variables.score > 0){
		checkLocalStorage();
	}	
	variables.canvasGame.style.display = "none";
	variables.startBtn.style.display = "none";
	variables.leaveGame.style.display = "none";
	variables.pauseBtn.style.display = "block";
	variables.afterGame.style.display = "block";
	variables.scoreAfterDiv.innerText = `${variables.score}`;
	if(variables.score == variables.bestScore) {
		variables.highscoreDiv.innerText = `New best: 
		${variables.bestScore}`;
	} else if(variables.score < variables.bestScore) {
		variables.highscoreDiv.innerText = `Best: 
		${variables.bestScore}`;
	} else if(variables.bestScore === 0) {
		variables.highscoreDiv.innerText = `New best: 
		${variables.score}`;
	}
	document.removeEventListener("keydown", moveUp);
}

function playMenu() {
	skinChange();
	variables.menuPlay.style.display = "none";
	variables.menuSkins.style.display = "none";
	variables.menuLeaders.style.display = "none";
	variables.menuExit.style.display = "none";
	variables.nameChange.style.display = "none";
	if(localStorage.getItem('name')){
		if(birdLive === true) {
			requestAnimationFrame(draw);
		}
		enterGame();
	} else {
		variables.menuEnterGame.style.display = "block";
		variables.menuAccept.style.display = "block";
		variables.menuBack.style.display = "block";
	}
	if(birdLive === false){
		reload();
	}
}

function leadersMenu() {
	variables.menuPlay.style.display = "none";
	variables.menuSkins.style.display = "none";
	variables.menuLeaders.style.display = "none";
	variables.menuExit.style.display = "none";
	variables.nameChange.style.display = "none";
	variables.menuBack.style.display = "block";
	variables.menuLeadersTable.style.display = "block";
	createTable();
}

function acceptName() {
	if (variables.nickname.value) {
		pushNick();
		enterGame();
		requestAnimationFrame(draw);
	}
}

function acceptChangeName() {
	if (variables.nickname.value) {
		pushNick();
		backMenu();
	}
}