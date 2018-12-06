import {openMenu, exitMenu, skinsMenu, backMenu, changeName, 
	reload, sleep, start, gameOver, playMenu, 
	leadersMenu, acceptName, acceptChangeName, whereNameInput} from "./menu";
import * as variables from "./variables";
import {moveUp, skinChange} from "./app";

document.onkeydown = function(e) { // убирает скролл страницы при нажатии на пробел.
	let keyCode = e.keyCode || e.charCode;
	if (keyCode == 32) 
	e.preventDefault();
}

document.addEventListener("keydown", moveUp);
variables.canvasGame.addEventListener("touchstart", moveUp);
variables.canvasGame.addEventListener("touchmove", moveUp);
variables.pauseBtn.addEventListener("click", sleep);
variables.startBtn.addEventListener("click", start);
variables.reloadBtn.addEventListener("click", reload);
variables.playNow.addEventListener('click', openMenu);
variables.menuPlay.addEventListener('click', playMenu);
variables.menuSkins.addEventListener('click', skinsMenu);
variables.menuLeaders.addEventListener('click', leadersMenu);
variables.menuExit.addEventListener('click', exitMenu);
variables.menuBack.addEventListener('click', backMenu);
variables.backToMenu.addEventListener('click', backMenu);
variables.leaveGame.addEventListener('click', gameOver);
variables.menuAccept.addEventListener('click', acceptName);
variables.nameChange.addEventListener('click', changeName);
variables.acceptNameChange.addEventListener('click', acceptChangeName);
variables.nickname.addEventListener('keydown', whereNameInput);

variables.setSkin1.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 1));
	skinChange();
});
variables.setSkin2.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 2));
	skinChange();
});
variables.setSkin3.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 3));
	skinChange();
});
variables.setSkin4.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 4));
	skinChange();
});