const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");
const pauseBtn = document.getElementById('pause');
const startBtn = document.getElementById('start');
const reloadBtn = document.getElementById('reload');
const canvasGame = document.getElementById("canvas_game");
const gameBlock = document.getElementById("game_block");
const menuBlock = document.getElementById("menu_block");
const playNow = document.getElementById("play_now");
const menuPlay = document.getElementById("menu_play");
const menuSkins = document.getElementById("menu_skins");
const skinsBlock = document.getElementById("skins");
const menuLeaders = document.getElementById("menu_leaders");
const menuLeadersTable = document.getElementById("menu_leaders_table");
const menuExit = document.getElementById("menu_exit");
const nameChange = document.getElementById("name_change");
const acceptNameChange = document.getElementById("accept_name_change");
const menuEnterGame = document.getElementById("menu_enter_name");
const menuAccept = document.getElementById("menu_accept");
const menuBack = document.getElementById("back_menu");
const nickname = document.getElementById('name');
const afterGame = document.getElementById("after_game");
const scoreAfterDiv = document.getElementById("score_after");
const highscoreDiv = document.getElementById("highscore");
const tableData = document.getElementById("table_data");
const backToMenu = document.getElementById("back_to_menu");
const leaveGame = document.getElementById("leave");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();
let fly = new Audio();
let score_audio = new Audio();
let failSound = new Audio();

skinChange();

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
let bestScore = 0; //нужна для вывода highScore
let xPos = 10;
let yPos = 150;
let grav = 1.5;
let leadArr = []; // массив лидерборда
let birdLive = true; //проверяет мертва ли птичка сейчас

getBestScore();

function moveUp(e) {
	if(e.type == "touchmove") {
		e.preventDefault();
	}
	if ((e.keyCode === 32 || e.type == "touchstart") && yPos > 30) {
		fly.currentTime = 0;
		fly.play();
		if(e.keyCode === 32) {
			let moveUpBird = setInterval(() => yPos -= grav + 2.5, 1) //плавная анимация птички
			setTimeout(() => clearInterval(moveUpBird), 30)	
		} else if (e.type == "touchstart") {
			yPos -= 30;
		}	
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

			// failSound.play();
			birdLive = false;
			requestAnimationFrame(gameOver);
		}

		if (pipe[i].x == 5) {
			score += 1;
			setScoreObj()
			setBestScore()
			getBestScore()
			score_audio.play();
		}
	}

	ctx.drawImage(fg, 0, cvs.height - fg.height);
	ctx.drawImage(bird, xPos, yPos);

	yPos += grav;

	ctx.fillStyle = "#000";
	ctx.font = "24px Verdana";
	ctx.strokeText("Score: " + score, 10, cvs.height - 20);
	
	animations = requestAnimationFrame(draw);
}

document.addEventListener("keydown", moveUp);
canvasGame.addEventListener("touchstart", moveUp);
canvasGame.addEventListener("touchmove", moveUp);
pauseBtn.addEventListener("click", sleep);
startBtn.addEventListener("click", start);
reloadBtn.addEventListener("click", reload); //reload button

function sleep() {
	cancelAnimationFrame(animations);
	startBtn.style = "display: block";
	leaveGame.style = "display: block";
	pauseBtn.style = "display: none";
	document.removeEventListener("keydown", moveUp);
}

function start() {
	requestAnimationFrame(draw);
	startBtn.style = "display: none";
	leaveGame.style = "display: none";
	pauseBtn.style = "display: block";
	document.addEventListener("keydown", moveUp);
}

function gameOver() {  //функция вызываемая после столкновения
	cancelAnimationFrame(animations);
	if(score > 0){
		checkLocalStorage();
	}	
	canvasGame.style = "display: none";
	startBtn.style = "display: none";
	leaveGame.style = "display: none";
	pauseBtn.style = "display: block";
	afterGame.style = "display: block";
	scoreAfterDiv.innerText = `${score}`;
	if(score == bestScore) {
		highscoreDiv.innerText = `New best: 
		${bestScore}`;
	} else if(score < bestScore) {
		highscoreDiv.innerText = `Best: 
		${bestScore}`;
	} else if(bestScore === 0) {
		highscoreDiv.innerText = `New best: 
		${score}`;
	}

	document.removeEventListener("keydown", moveUp);
}

function reload() { //должна перезагружать страницу
	pipe = [];
	pipe[0] = {
		x : cvs.width,
		y : 0
	}
	score = 0;
	xPos = 10;
	yPos = 150;

	canvasGame.style = "display: block";
	afterGame.style = "display: none";
	pauseBtn.style = "display: block";
	startBtn.style = "display: none";
	requestAnimationFrame(draw);
	document.addEventListener("keydown", moveUp);
}

function pushNick() { //добавляет ник в LocalStorage 
	localStorage.setItem('name', nickname.value);
	nickname.value = "";
}

function setScoreObj() { //обновляет объект в LocalStorage при изменении счета 
	let scoreObj = {'name': localStorage.getItem('name', nickname.value), 'score': score};
	let promise = new Promise(function(res,rej){
		res(scoreObj)
	}) 
		.then(res => JSON.stringify(res))
		.then(res => localStorage.setItem('scoreObj', res));
}

function setBestScore() { // добавляет highScore
	let storage = localStorage.getItem("highScore");
	if (storage) {
		if (score > storage) {
			localStorage.setItem("highScore", score);
		}
	} else {
			localStorage.setItem("highScore", 0);
	}
}	

function getBestScore() { //выводит счетчик highScore
	let storage = localStorage.getItem("highScore");
    if (storage) {
      bestScore = storage;
    } else {
      bestScore = 0;
    }
}

function leadTablePush() {  // если в LocalStorage есть ключ 'leadArr' - выполняет пуш
	sortArray(leadArr);

	leadArr = JSON.parse(localStorage.getItem('leadArr'));
	let scoreObj = {'name': localStorage.getItem('name', nickname.value), 'score': score};
	if(score > 0 && leadArr.length <= 4){
		leadArr.push(scoreObj)
		localStorage.setItem('leadArr', JSON.stringify(leadArr))
	} else if (score > leadArr[4].score && leadArr.length > 4 ){
		leadArr.splice(4, 1, scoreObj)
		localStorage.setItem('leadArr', JSON.stringify(leadArr))
	} else {
		return console.log('you are not worthy to get on the leaderboard')
	}
	sortArray();
}


function sortArray(leadArr) {  //сортировщик по значению
	leadArr = JSON.parse(localStorage.getItem('leadArr'));
	leadArr.sort((a,b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0))
	let leadTableArr = leadArr.reverse();
	localStorage.setItem('leadArr', JSON.stringify(leadTableArr))
}


function leadTableNew() { // если в LocalStorage нет ключа 'leadArr' - создает его с текущими данными
	let scoreObj = {'name': localStorage.getItem('name', nickname.value), 'score': score};
	leadArr.push(scoreObj)
	let promise = new Promise(function(res, rej) {
		res(leadArr)
	}) 
		.then(res => JSON.stringify(res))
		.then(res => localStorage.setItem('leadArr', res))
}

function checkLocalStorage() { // проверяет LocalStorage на наличие нужного ключа.
	if (localStorage.getItem('leadArr') !== null) {
		leadTablePush();
	} else {
		leadTableNew();
	}
}


function createTable() {
	leadArr = JSON.parse(localStorage.getItem('leadArr'));
	if(leadArr) {	
		for (let i = 0; i < leadArr.length; i += 1) {
			tableData.rows[i+1].cells[0].innerText = leadArr[i].name;
			tableData.rows[i+1].cells[1].innerText = leadArr[i].score;
		}
	}
}

document.onkeydown = function(e) { // убирает скролл страницы при нажатии на пробел.
	let keyCode = e.keyCode || e.charCode;
	if (keyCode == 32) 
	e.preventDefault();
}

// слушатели на кнопки
function openMenu() {
	gameBlock.style = "display: block";
}

function exitMenu() {
	gameBlock.style = "display: none";
}

function playMenu() {
	menuPlay.style = "display: none";
	menuSkins.style = "display: none";
	menuLeaders.style = "display: none";
	menuExit.style = "display: none";
	nameChange.style = "display: none";
	if(localStorage.getItem('name')){
		if(birdLive === true) {
			requestAnimationFrame(draw);
		}
		enterGame();
	} else {
		menuEnterGame.style = "display: block";
		menuAccept.style = "display: block";
		menuBack.style = "display: block";
	}
	if(birdLive === false){
		reload();
	}
}

function skinsMenu() {
	menuPlay.style = "display: none";
	menuSkins.style = "display: none";
	menuLeaders.style = "display: none";
	menuExit.style = "display: none";
	nameChange.style = "display: none";
	menuBack.style = "display: block";
	skinsBlock.style = "display: block";
}

function backMenu() {
	menuEnterGame.style = "display: none";
	menuBack.style = "display: none";
	menuLeadersTable.style = "display: none";
	canvasGame.style = "display: none";
	afterGame.style = "display: none";
	menuAccept.style = "display: none";
	acceptNameChange.style = "display: none";
	skinsBlock.style = "display: none";
	menuBlock.style = "display: block";
	menuPlay.style = "display: block";
	menuSkins.style = "display: block";
	menuLeaders.style = "display: block";
	menuExit.style = "display: block";
	nameChange.style = "display: block";
}

function leadersMenu() {
	menuPlay.style = "display: none";
	menuSkins.style = "display: none";
	menuLeaders.style = "display: none";
	menuExit.style = "display: none";
	nameChange.style = "display: none";
	menuBack.style = "display: block";
	menuLeadersTable.style = "display: block";
	createTable();
}

function enterGame() {
	pipe = [];
	pipe[0] = {
		x : cvs.width,
		y : 0
	}
	score = 0;
	xPos = 10;
	yPos = 150;

	menuBlock.style = "display: none";
	canvasGame.style = "display: block";
	afterGame.style =  "display: none";
}

function acceptName() {
	if (nickname.value) {
		pushNick();
		enterGame();
		requestAnimationFrame(draw);
	}
}

function acceptChangeName() {
	if (nickname.value) {
		pushNick();
		backMenu();
	}
}

function changeName() {
	menuPlay.style = "display: none";
	menuSkins.style = "display: none";
	menuLeaders.style = "display: none";
	menuExit.style = "display: none";
	nameChange.style = "display: none";
	menuEnterGame.style = "display: block";
	acceptNameChange.style = "display: block";
	menuBack.style = "display: block";	
}

playNow.addEventListener('click', openMenu);
menuPlay.addEventListener('click', playMenu);
menuSkins.addEventListener('click', skinsMenu);
menuLeaders.addEventListener('click', leadersMenu);
menuExit.addEventListener('click', exitMenu);
menuBack.addEventListener('click', backMenu);
backToMenu.addEventListener('click', backMenu);
leaveGame.addEventListener('click', gameOver);
menuAccept.addEventListener('click', acceptName);
nameChange.addEventListener('click', changeName);
acceptNameChange.addEventListener('click', acceptChangeName);

///////////////////////////////////////////// SKINS /////////////////////////////////////

const setSkin1 = document.getElementById("skin_1");
const setSkin2 = document.getElementById("skin_2");
const setSkin3 = document.getElementById("skin_3");
const setSkin4 = document.getElementById("skin_4");

function skinChange() {
	const storageSkinKey = JSON.parse(localStorage.getItem('skinKey'));
	if (storageSkinKey === 1) {
		bird.src = "img/bird.png";
		bg.src = "img/bg.png";
		fg.src = "img/fg.png";
		pipeUp.src = "img/pipeUp.png";
		pipeBottom.src = "img/pipeBottom.png";	
	} else if (storageSkinKey === 2) {
		bird.src = "img/birdGray.png";
		bg.src = "img/bgGray.png";
		fg.src = "img/fgGray.png";
		pipeUp.src = "img/pipeUpGray.png";
		pipeBottom.src = "img/pipeBottomGray.png";
	} else if (storageSkinKey === 3) {
		bird.src = "img/bird3.png";
		bg.src = "img/bg3.png";
		fg.src = "img/fg3.png";
		pipeUp.src = "img/pipeUpOrange.png";
		pipeBottom.src = "img/pipeBottomOrange.png";
	} else if (storageSkinKey === 4) {
		bird.src = "img/birdCat.png";
		bg.src = "img/bgSpace.jpg";
		fg.src = "img/fgRainbow.png";
		pipeUp.src = "img/pipeUpPink.png";
		pipeBottom.src = "img/pipeBottomPink.png";
	}	
}

setSkin1.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 1))
	skinChange();
});
setSkin2.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 2))
	skinChange();
});
setSkin3.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 3))
	skinChange();
});
setSkin4.addEventListener("click", () => {
	JSON.stringify(localStorage.setItem('skinKey', 4))
	skinChange();
});