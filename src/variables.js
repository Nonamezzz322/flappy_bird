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
const gameBorder = document.getElementById("game_border");
const gameContent = document.getElementById("game_content")
const nickname = document.getElementById('name');
const afterGame = document.getElementById("after_game");
const scoreAfterDiv = document.getElementById("score_after");
const highscoreDiv = document.getElementById("highscore");
const tableData = document.getElementById("table_data");
const backToMenu = document.getElementById("back_to_menu");
const leaveGame = document.getElementById("leave");
const setSkin1 = document.getElementById("skin_1");
const setSkin2 = document.getElementById("skin_2");
const setSkin3 = document.getElementById("skin_3");
const setSkin4 = document.getElementById("skin_4");

let pipe = [];//массив игрового мира
pipe[0] = {
	x : cvs.width,
	y : 0
}
let gap = 100;
let score = 0;
let bestScore = 0; //нужна для вывода highScore
let xPos = 0;
let yPos = 150;
let grav = 1.5;
let birdLive = true; //проверяет мертва ли птичка сейчас

export {
  birdLive,
  cvs, 
  ctx, 
  pauseBtn,
  startBtn,
  reloadBtn,
  canvasGame,
  gameBlock,
  menuBlock,
  playNow,
  menuPlay,
  menuSkins,
  skinsBlock,
  menuLeaders,
  menuLeadersTable,
  menuExit,
  nameChange,
  acceptNameChange,
  menuEnterGame,
  menuAccept,
  gameBorder,
  gameContent,
  menuBack,
  nickname,
  afterGame,
  scoreAfterDiv,
  highscoreDiv,
  tableData,
  backToMenu,
  leaveGame,
  setSkin1,
  setSkin2,
  setSkin3,
  setSkin4,
  pipe,
  gap,
  score,
  bestScore,
  xPos,
  yPos,
  grav
};