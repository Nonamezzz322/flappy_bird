const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");
const pauseBtn = document.getElementById('pause');
const startBtn = document.getElementById('start');
const reloadBtn = document.getElementById('reload');
const setToScoreList = document.getElementById('set_to_score_list');
const showTable = document.getElementById('show_lead_table');
const canvasGame = document.getElementById("canvas_game");
const gameBlock = document.getElementById("game_block");
const menuBlock = document.getElementById("menu_block");
const playNow = document.getElementById("play_now");
const menuPlay = document.getElementById("menu_play");
const menuSkins = document.getElementById("menu_skins");
const menuLeaders = document.getElementById("menu_leaders");
const menuExit = document.getElementById("menu_exit");
const menuEnterGame = document.getElementById("menu_enter_name");
const menuBack = document.getElementById("back_menu");
const name = document.getElementById("name");


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
let bestScore = 0; //нужна для вывода highScore
let xPos = 10;
let yPos = 150;
let grav = 1.5;
let leadArr = []; // массив лидерборда

getBestScore();

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

			bg.src = "img/gameOwer.png";
			pipeUp.src = "img/pipeUpNull.png";
			pipeBottom.src = "img/pipeBottomNull.png";
			yPos = 820;
			failSound.play();
			location.reload();
	
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
	ctx.fillText("Score: " + score, 10, cvs.height - 20);
	ctx.fillText("Best score: " + bestScore, 10, cvs.height - 40);

	animations = requestAnimationFrame(draw);
}

document.addEventListener("keydown", moveUp);
pauseBtn.addEventListener("click", sleep);
startBtn.addEventListener("click", start);
reloadBtn.addEventListener("click", reload); //reload button
setToScoreList.addEventListener("click", checkLocalStorage);
showTable.addEventListener("click", createTable);

function sleep() {
	cancelAnimationFrame(animations);
	startBtn.style.display = 'block';
	pauseBtn.style.display = 'none';
	document.removeEventListener("keydown", moveUp);
}


function start() {
	requestAnimationFrame(draw);
	startBtn.style.display = 'none';
	pauseBtn.style.display = 'block';
	document.addEventListener("keydown", moveUp);
}


function reload() {  //функция перезагрузки мира по кнопке 
	reloadBtn.style.display = 'none';
	pauseBtn.style.display = 'block';
	location.reload();
}

// таблица лидеров (в работе)
const nickname = document.getElementById('name');
nickname.addEventListener("change", pushNick);

function pushNick() { //добавляет ник в LocalStorage 
	localStorage.setItem('name', nickname.value);
}


function setScoreObj() { //обновляет объект в LocalStorage при изменении счета 
	let scoreObj = {'name': localStorage.getItem('name', nickname.value), 'score': score};
	let promise = new Promise(function(res,rej){
		res(scoreObj)
	}) 
		.then(res => JSON.stringify(res))
		.then(res => localStorage.setItem('scoreObj', res))
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
	if(score > 0 && leadArr.length <= 9){
		leadArr.push(scoreObj)
		localStorage.setItem('leadArr', JSON.stringify(leadArr))
	} else if (score > leadArr[9].score && leadArr.length > 9 ){
		leadArr.splice(9, 1, scoreObj)
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
	console.log(leadTableArr)
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
	let data = JSON.parse(localStorage.getItem('leadArr'));
	let table = '<tbody>'
	for(i = 0;i < data.length; i++){
			table+= '<tr>';
			table+= '<td>' + data[i].name + '</td>';
			table+= '<td>' + data[i].score + '</td>';
			table+= '</tr>';
	}
	table+='</tbody>';
	document.getElementById('tableData').innerHTML = table;
}

document.onkeydown = function(e){ // убирает скролл страницы при нажатии на пробел.
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
	menuEnterGame.style = "display: block";
	menuBack.style = "display: block";
}

function skinsMenu() {
	menuPlay.style = "display: none";
	menuSkins.style = "display: none";
	menuLeaders.style = "display: none";
	menuExit.style = "display: none";
	menuBack.style = "display: block";
}

function backMenu() {
	menuPlay.style = "display: block";
	menuSkins.style = "display: block";
	menuLeaders.style = "display: block";
	menuExit.style = "display: block";
	menuEnterGame.style = "display: none";
	menuBack.style = "display: none";
}

playNow.addEventListener('click', openMenu);
menuPlay.addEventListener('click', playMenu);
menuSkins.addEventListener('click', skinsMenu);
menuExit.addEventListener('click', exitMenu);
menuBack.addEventListener('click', backMenu);
name.addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		menuBlock.style = "display: none";
		canvasGame.style = "display: block";
		requestAnimationFrame(draw);
	}
});