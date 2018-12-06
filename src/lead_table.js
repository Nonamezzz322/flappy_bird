import * as vars from "./variables";
export {pushNick, setScoreObj, setBestScore, getBestScore, createTable, checkLocalStorage};

let leadArr = []; // массив лидерборда

function pushNick() { //добавляет ник в LocalStorage 
	localStorage.setItem('name', vars.nickname.value);
	vars.nickname.value = "";
}

function setScoreObj() { //обновляет объект в LocalStorage при изменении счета 
	let scoreObj = {'name': localStorage.getItem('name', vars.nickname.value), 'score': vars.score};
	let promise = new Promise(function(res, rej){
		res(scoreObj)
	}) 
		.then(res => JSON.stringify(res))
		.then(res => localStorage.setItem('scoreObj', res));
}

function setBestScore() { // добавляет highScore
	let storage = localStorage.getItem("highScore");
	if (storage) {
		if (vars.score > storage) {
			localStorage.setItem("highScore", vars.score);
		}
	} else {
			localStorage.setItem("highScore", 1);
	}
}	

function getBestScore() { //выводит счетчик highScore
	let storage = localStorage.getItem("highScore");
    if (storage) {
      vars.bestScore = storage;
    } else {
      vars.bestScore = 0;
    }
}

function leadTablePush() {  // если в LocalStorage есть ключ 'leadArr' - выполняет пуш
	sortArray(leadArr);

	leadArr = JSON.parse(localStorage.getItem('leadArr'));
	let scoreObj = {'name': localStorage.getItem('name', vars.nickname.value), 'score': vars.score};
	if(vars.score > 0 && leadArr.length <= 4){
		leadArr.push(scoreObj)
		localStorage.setItem('leadArr', JSON.stringify(leadArr))
	} else if (vars.score > leadArr[4].score && leadArr.length > 4 ){
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
	let scoreObj = {'name': localStorage.getItem('name', vars.nickname.value), 'score': vars.score};
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
			vars.tableData.rows[i+1].cells[0].innerText = leadArr[i].name;
			vars.tableData.rows[i+1].cells[1].innerText = leadArr[i].score;
		}
	}
}