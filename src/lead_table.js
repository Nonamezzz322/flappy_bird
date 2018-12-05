import * as variables from "./variables";
export {pushNick, setScoreObj, setBestScore, getBestScore, createTable, checkLocalStorage};

let leadArr = []; // массив лидерборда

function pushNick() { //добавляет ник в LocalStorage 
	localStorage.setItem('name', variables.nickname.value);
	variables.nickname.value = "";
}

function setScoreObj() { //обновляет объект в LocalStorage при изменении счета 
	let scoreObj = {'name': localStorage.getItem('name', variables.nickname.value), 'score': variables.score};
	let promise = new Promise(function(res, rej){
		res(scoreObj)
	}) 
		.then(res => JSON.stringify(res))
		.then(res => localStorage.setItem('scoreObj', res));
}

function setBestScore() { // добавляет highScore
	let storage = localStorage.getItem("highScore");
	if (storage) {
		if (variables.score > storage) {
			localStorage.setItem("highScore", variables.score);
		}
	} else {
			localStorage.setItem("highScore", 0);
	}
}	

function getBestScore() { //выводит счетчик highScore
	let storage = localStorage.getItem("highScore");
    if (storage) {
      variables.bestScore = storage;
    } else {
      variables.bestScore = 0;
    }
}

function leadTablePush() {  // если в LocalStorage есть ключ 'leadArr' - выполняет пуш
	sortArray(leadArr);

	leadArr = JSON.parse(localStorage.getItem('leadArr'));
	let scoreObj = {'name': localStorage.getItem('name', variables.nickname.value), 'score': variables.score};
	if(variables.score > 0 && leadArr.length <= 4){
		leadArr.push(scoreObj)
		localStorage.setItem('leadArr', JSON.stringify(leadArr))
	} else if (variables.score > leadArr[4].score && leadArr.length > 4 ){
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
	let scoreObj = {'name': localStorage.getItem('name', variables.nickname.value), 'score': variables.score};
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
			variables.tableData.rows[i+1].cells[0].innerText = leadArr[i].name;
			variables.tableData.rows[i+1].cells[1].innerText = leadArr[i].score;
		}
	}
}