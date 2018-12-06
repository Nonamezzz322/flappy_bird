import {openMenu, exitMenu, skinsMenu, backMenu, changeName, 
	reload, sleep, start, gameOver, playMenu, 
	leadersMenu, acceptName, acceptChangeName, whereNameInput} from "./menu";
import * as vars from "./variables";
import {moveUp, skinChange} from "./app";

document.onkeydown = function(e) { // убирает скролл страницы при нажатии на пробел.
	let keyCode = e.keyCode || e.charCode;
	if (keyCode == 32) 
	e.preventDefault();
}

document.addEventListener("keydown", moveUp);
vars.canvasGame.addEventListener("touchstart", moveUp);
vars.canvasGame.addEventListener("touchmove", moveUp);
vars.pauseBtn.addEventListener("click", sleep);
vars.startBtn.addEventListener("click", start);
vars.reloadBtn.addEventListener("click", reload);
vars.playNow.addEventListener('click', openMenu);
vars.menuPlay.addEventListener('click', playMenu);
vars.menuSkins.addEventListener('click', skinsMenu);
vars.menuLeaders.addEventListener('click', leadersMenu);
vars.menuExit.addEventListener('click', exitMenu);
vars.menuBack.addEventListener('click', backMenu);
vars.backToMenu.addEventListener('click', backMenu);
vars.leaveGame.addEventListener('click', gameOver);
vars.menuAccept.addEventListener('click', acceptName);
vars.nameChange.addEventListener('click', changeName);
vars.acceptNameChange.addEventListener('click', acceptChangeName);
vars.nickname.addEventListener('keydown', whereNameInput);

vars.setSkin1.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 1));
	skinChange();
});
vars.setSkin2.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 2));
	skinChange();
});
vars.setSkin3.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 3));
	skinChange();
});
vars.setSkin4.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 4));
	skinChange();
});