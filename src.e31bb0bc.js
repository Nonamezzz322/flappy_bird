// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"variables.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grav = exports.yPos = exports.xPos = exports.bestScore = exports.score = exports.gap = exports.pipe = exports.setSkin4 = exports.setSkin3 = exports.setSkin2 = exports.setSkin1 = exports.leaveGame = exports.backToMenu = exports.tableData = exports.highscoreDiv = exports.scoreAfterDiv = exports.afterGame = exports.nickname = exports.menuBack = exports.gameContent = exports.gameBorder = exports.menuAccept = exports.menuEnterGame = exports.acceptNameChange = exports.nameChange = exports.menuExit = exports.menuLeadersTable = exports.menuLeaders = exports.skinsBlock = exports.menuSkins = exports.menuPlay = exports.playNow = exports.menuBlock = exports.gameBlock = exports.canvasGame = exports.reloadBtn = exports.startBtn = exports.pauseBtn = exports.ctx = exports.cvs = exports.birdLive = void 0;
var cvs = document.getElementById("game");
exports.cvs = cvs;
var ctx = cvs.getContext("2d");
exports.ctx = ctx;
var pauseBtn = document.getElementById('pause');
exports.pauseBtn = pauseBtn;
var startBtn = document.getElementById('start');
exports.startBtn = startBtn;
var reloadBtn = document.getElementById('reload');
exports.reloadBtn = reloadBtn;
var canvasGame = document.getElementById("canvas_game");
exports.canvasGame = canvasGame;
var gameBlock = document.getElementById("game_block");
exports.gameBlock = gameBlock;
var menuBlock = document.getElementById("menu_block");
exports.menuBlock = menuBlock;
var playNow = document.getElementById("play_now");
exports.playNow = playNow;
var menuPlay = document.getElementById("menu_play");
exports.menuPlay = menuPlay;
var menuSkins = document.getElementById("menu_skins");
exports.menuSkins = menuSkins;
var skinsBlock = document.getElementById("skins");
exports.skinsBlock = skinsBlock;
var menuLeaders = document.getElementById("menu_leaders");
exports.menuLeaders = menuLeaders;
var menuLeadersTable = document.getElementById("menu_leaders_table");
exports.menuLeadersTable = menuLeadersTable;
var menuExit = document.getElementById("menu_exit");
exports.menuExit = menuExit;
var nameChange = document.getElementById("name_change");
exports.nameChange = nameChange;
var acceptNameChange = document.getElementById("accept_name_change");
exports.acceptNameChange = acceptNameChange;
var menuEnterGame = document.getElementById("menu_enter_name");
exports.menuEnterGame = menuEnterGame;
var menuAccept = document.getElementById("menu_accept");
exports.menuAccept = menuAccept;
var menuBack = document.getElementById("back_menu");
exports.menuBack = menuBack;
var gameBorder = document.getElementById("game_border");
exports.gameBorder = gameBorder;
var gameContent = document.getElementById("game_content");
exports.gameContent = gameContent;
var nickname = document.getElementById('name');
exports.nickname = nickname;
var afterGame = document.getElementById("after_game");
exports.afterGame = afterGame;
var scoreAfterDiv = document.getElementById("score_after");
exports.scoreAfterDiv = scoreAfterDiv;
var highscoreDiv = document.getElementById("highscore");
exports.highscoreDiv = highscoreDiv;
var tableData = document.getElementById("table_data");
exports.tableData = tableData;
var backToMenu = document.getElementById("back_to_menu");
exports.backToMenu = backToMenu;
var leaveGame = document.getElementById("leave");
exports.leaveGame = leaveGame;
var setSkin1 = document.getElementById("skin_1");
exports.setSkin1 = setSkin1;
var setSkin2 = document.getElementById("skin_2");
exports.setSkin2 = setSkin2;
var setSkin3 = document.getElementById("skin_3");
exports.setSkin3 = setSkin3;
var setSkin4 = document.getElementById("skin_4");
exports.setSkin4 = setSkin4;
var pipe = []; //массив игрового мира

exports.pipe = pipe;
pipe[0] = {
  x: cvs.width,
  y: 0
};
var gap = 100;
exports.gap = gap;
var score = 0;
exports.score = score;
var bestScore = 0; //нужна для вывода highScore

exports.bestScore = bestScore;
var xPos = 0;
exports.xPos = xPos;
var yPos = 150;
exports.yPos = yPos;
var grav = 1.5;
exports.grav = grav;
var birdLive = true; //проверяет мертва ли птичка сейчас

exports.birdLive = birdLive;
},{}],"lead_table.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushNick = pushNick;
exports.setScoreObj = setScoreObj;
exports.setBestScore = setBestScore;
exports.getBestScore = getBestScore;
exports.createTable = createTable;
exports.checkLocalStorage = checkLocalStorage;

var vars = _interopRequireWildcard(require("./variables"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var leadArr = []; // массив лидерборда

function pushNick() {
  //добавляет ник в LocalStorage 
  localStorage.setItem('name', vars.nickname.value);
  vars.nickname.value = "";
}

function setScoreObj() {
  //обновляет объект в LocalStorage при изменении счета 
  var scoreObj = {
    'name': localStorage.getItem('name', vars.nickname.value),
    'score': vars.score
  };
  var promise = new Promise(function (res, rej) {
    res(scoreObj);
  }).then(function (res) {
    return JSON.stringify(res);
  }).then(function (res) {
    return localStorage.setItem('scoreObj', res);
  });
}

function setBestScore() {
  // добавляет highScore
  var storage = localStorage.getItem("highScore");

  if (storage) {
    if (vars.score > storage) {
      localStorage.setItem("highScore", vars.score);
    }
  } else {
    localStorage.setItem("highScore", 1);
  }
}

function getBestScore() {
  //выводит счетчик highScore
  var storage = localStorage.getItem("highScore");

  if (storage) {
    vars.bestScore = storage;
  } else {
    vars.bestScore = 0;
  }
}

function leadTablePush() {
  // если в LocalStorage есть ключ 'leadArr' - выполняет пуш
  sortArray(leadArr);
  leadArr = JSON.parse(localStorage.getItem('leadArr'));
  var scoreObj = {
    'name': localStorage.getItem('name', vars.nickname.value),
    'score': vars.score
  };

  if (vars.score > 0 && leadArr.length <= 4) {
    leadArr.push(scoreObj);
    localStorage.setItem('leadArr', JSON.stringify(leadArr));
  } else if (vars.score > leadArr[4].score && leadArr.length > 4) {
    leadArr.splice(4, 1, scoreObj);
    localStorage.setItem('leadArr', JSON.stringify(leadArr));
  } else {
    return console.log('you are not worthy to get on the leaderboard');
  }

  sortArray();
}

function sortArray(leadArr) {
  //сортировщик по значению
  leadArr = JSON.parse(localStorage.getItem('leadArr'));
  leadArr.sort(function (a, b) {
    return a.score > b.score ? 1 : b.score > a.score ? -1 : 0;
  });
  var leadTableArr = leadArr.reverse();
  localStorage.setItem('leadArr', JSON.stringify(leadTableArr));
}

function leadTableNew() {
  // если в LocalStorage нет ключа 'leadArr' - создает его с текущими данными
  var scoreObj = {
    'name': localStorage.getItem('name', vars.nickname.value),
    'score': vars.score
  };
  leadArr.push(scoreObj);
  var promise = new Promise(function (res, rej) {
    res(leadArr);
  }).then(function (res) {
    return JSON.stringify(res);
  }).then(function (res) {
    return localStorage.setItem('leadArr', res);
  });
}

function checkLocalStorage() {
  // проверяет LocalStorage на наличие нужного ключа.
  if (localStorage.getItem('leadArr') !== null) {
    leadTablePush();
  } else {
    leadTableNew();
  }
}

function createTable() {
  leadArr = JSON.parse(localStorage.getItem('leadArr'));

  if (leadArr) {
    for (var i = 0; i < leadArr.length; i += 1) {
      vars.tableData.rows[i + 1].cells[0].innerText = leadArr[i].name;
      vars.tableData.rows[i + 1].cells[1].innerText = leadArr[i].score;
    }
  }
}
},{"./variables":"variables.js"}],"../assets/audio/score.mp3":[function(require,module,exports) {
module.exports = "/score.c336131a.mp3";
},{}],"../assets/audio/fail.mp3":[function(require,module,exports) {
module.exports = "/fail.100cdbd2.mp3";
},{}],"../assets/img/rip.png":[function(require,module,exports) {
module.exports = "/rip.1a26461b.png";
},{}],"../assets/img/bird.png":[function(require,module,exports) {
module.exports = "/bird.e166bc25.png";
},{}],"../assets/audio/fly.mp3":[function(require,module,exports) {
module.exports = "/fly.152fb99f.mp3";
},{}],"../assets/img/bg.jpg":[function(require,module,exports) {
module.exports = "/bg.f47cb84e.jpg";
},{}],"../assets/img/fg.jpg":[function(require,module,exports) {
module.exports = "/fg.9b141d73.jpg";
},{}],"../assets/img/pipeUp.png":[function(require,module,exports) {
module.exports = "/pipeUp.7dbd0d98.png";
},{}],"../assets/img/pipeBottom.png":[function(require,module,exports) {
module.exports = "/pipeBottom.9e92c7ef.png";
},{}],"../assets/img/birdGray.png":[function(require,module,exports) {
module.exports = "/birdGray.83ec92d3.png";
},{}],"../assets/img/bgGray.jpg":[function(require,module,exports) {
module.exports = "/bgGray.1892ae9a.jpg";
},{}],"../assets/img/fgGray.jpg":[function(require,module,exports) {
module.exports = "/fgGray.bec2a3c5.jpg";
},{}],"../assets/img/pipeUpGray.png":[function(require,module,exports) {
module.exports = "/pipeUpGray.4accac8a.png";
},{}],"../assets/img/pipeBottomGray.png":[function(require,module,exports) {
module.exports = "/pipeBottomGray.e68cdddc.png";
},{}],"../assets/img/bird3.png":[function(require,module,exports) {
module.exports = "/bird3.657a2a55.png";
},{}],"../assets/img/bg3.jpg":[function(require,module,exports) {
module.exports = "/bg3.fa999dd3.jpg";
},{}],"../assets/img/fg3.jpg":[function(require,module,exports) {
module.exports = "/fg3.fed2d088.jpg";
},{}],"../assets/img/pipeUpOrange.png":[function(require,module,exports) {
module.exports = "/pipeUpOrange.fea33b1e.png";
},{}],"../assets/img/pipeBottomOrange.png":[function(require,module,exports) {
module.exports = "/pipeBottomOrange.37a5675b.png";
},{}],"../assets/img/birdCat.png":[function(require,module,exports) {
module.exports = "/birdCat.06c6f54c.png";
},{}],"../assets/audio/skin_4.mp3":[function(require,module,exports) {
module.exports = "/skin_4.f1c29000.mp3";
},{}],"../assets/img/rainbow_cat.png":[function(require,module,exports) {
module.exports = "/rainbow_cat.5740c4cc.png";
},{}],"../assets/img/bgSpace.jpg":[function(require,module,exports) {
module.exports = "/bgSpace.2b60c625.jpg";
},{}],"../assets/img/fgRainbow.png":[function(require,module,exports) {
module.exports = "/fgRainbow.0af868e3.png";
},{}],"../assets/img/pipeUpPink.png":[function(require,module,exports) {
module.exports = "/pipeUpPink.6cfba04a.png";
},{}],"../assets/img/pipeBottomPink.png":[function(require,module,exports) {
module.exports = "/pipeBottomPink.463949f2.png";
},{}],"../assets/img/chack.png":[function(require,module,exports) {
module.exports = "/chack.d7b09fca.png";
},{}],"../assets/audio/punch.mp3":[function(require,module,exports) {
module.exports = "/punch.b75a873e.mp3";
},{}],"../assets/img/anton.png":[function(require,module,exports) {
module.exports = "/anton.a1ce0fac.png";
},{}],"../assets/audio/horse.mp3":[function(require,module,exports) {
module.exports = "/horse.1adec3fc.mp3";
},{}],"../assets/img/ghost.png":[function(require,module,exports) {
module.exports = "/ghost.af4bd7f0.png";
},{}],"app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draw = draw;
exports.moveUp = moveUp;
exports.skinChange = skinChange;
exports.canvasWidth = canvasWidth;
exports.animations = void 0;

var _menu = require("./menu");

var _lead_table = require("./lead_table");

var vars = _interopRequireWildcard(require("./variables"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var bird = new Image();
var rip = new Image();
var rainbowCat = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();
var fly = new Audio();
var scoreAudio = new Audio();
var failSound = new Audio();
var animations;
exports.animations = animations;
var upFrames = 0;
scoreAudio.src = require('../assets/audio/score.mp3');
failSound.src = require('../assets/audio//fail.mp3');
rip.src = require('../assets/img/rip.png');

function moveUp(e) {
  e = e.originalEvent || e;

  if ((e.type == "touchmove" || e.scale >= 1) && e.target.id !== 'pause') {
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
  var stName = localStorage.getItem('name');

  if (upFrames > 0) {
    vars.yPos -= 30 / 8 + 1.5;
    upFrames -= 1;
  }

  if (/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    vars.ctx.drawImage(bg, 0, 0, vars.cvs.width, vars.cvs.height);
  } else {
    vars.ctx.drawImage(bg, 0, 0);
  }

  for (var i = 0; i < vars.pipe.length; i += 1) {
    vars.ctx.drawImage(pipeUp, vars.pipe[i].x, vars.pipe[i].y);
    vars.ctx.drawImage(pipeBottom, vars.pipe[i].x, vars.pipe[i].y + pipeUp.height + vars.gap);
    vars.pipe[i].x -= 1;

    if (vars.pipe[i].x == vars.cvs.width - 200) {
      gapReduction();
      vars.pipe.push({
        x: vars.cvs.width,
        y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
      });
    }

    if (vars.xPos + bird.width >= vars.pipe[i].x && vars.xPos <= vars.pipe[i].x + pipeUp.width && (vars.yPos <= vars.pipe[i].y + pipeUp.height || vars.yPos + bird.height >= vars.pipe[i].y + pipeUp.height + vars.gap) || vars.yPos + bird.height >= vars.cvs.height - fg.height) {
      document.removeEventListener("keydown", moveUp);
      failSound.play();
      vars.birdLive = false;
      setTimeout(function () {
        requestAnimationFrame(_menu.gameOver);
      }, 600);
    }

    if (vars.pipe[i].x == 5 && vars.birdLive === true) {
      vars.score += 1;
      (0, _lead_table.setScoreObj)();
      (0, _lead_table.setBestScore)();
      (0, _lead_table.getBestScore)();
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
    vars.ctx.rotate(-45 * upFrames / 8 / 180 * Math.PI);
    vars.ctx.translate(-vars.xPos, -vars.yPos);
  }

  if (vars.birdLive === false) {
    vars.ctx.drawImage(rip, vars.xPos, vars.yPos);
    vars.grav = 4;
  } else {
    vars.ctx.drawImage(bird, vars.xPos, vars.yPos);
  }

  if (JSON.parse(localStorage.getItem('skinKey')) === 4 && vars.birdLive === true && stName != "Nonamezzz" && stName != "Antonster" && stName != "WorldThirteen") {
    vars.ctx.drawImage(rainbowCat, vars.xPos - 38, vars.yPos - 2);
  }

  vars.ctx.restore();
  vars.yPos += vars.grav;
  vars.ctx.fillStyle = "#000";
  vars.ctx.font = "2.5rem Caveat";
  vars.ctx.fillText("Score: " + vars.score, 10, vars.cvs.height - 20);
  exports.animations = animations = requestAnimationFrame(draw);
}

function skinChange() {
  var stName = localStorage.getItem('name');
  var storageSkinKey = JSON.parse(localStorage.getItem('skinKey'));

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
    vars.menuBlock.style.background = "url(".concat(require('../assets/img/bg.jpg'));
    vars.afterGame.style.background = "url(".concat(require('../assets/img/bg.jpg'), " ");
    vars.menuBlock.style.backgroundSize = "cover";
    vars.afterGame.style.backgroundSize = "cover";
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
    vars.menuBlock.style.background = "url(".concat(require('../assets/img/bgGray.jpg'));
    vars.afterGame.style.background = "url(".concat(require('../assets/img/bgGray.jpg'));
    vars.menuBlock.style.backgroundSize = "cover";
    vars.afterGame.style.backgroundSize = "cover";
    vars.setSkin1.className = "";
    vars.setSkin2.className = "active";
    vars.setSkin3.className = "";
    vars.setSkin4.className = "";
  } else if (storageSkinKey === 3) {
    if (stName == "Nonamezzz" || stName == "Antonster" || stName == "WorldThirteen") {
      eastEgg();
    } else {
      bird.src = require('../assets/img/bird3.png');
      fly.src = require('../assets/audio/fly.mp3');
    }

    bg.src = require('../assets/img/bg3.jpg');
    fg.src = require('../assets/img/fg3.jpg');
    pipeUp.src = require('../assets/img/pipeUpOrange.png');
    pipeBottom.src = require('../assets/img/pipeBottomOrange.png');
    vars.menuBlock.style.background = "url(".concat(require('../assets/img/bg3.jpg'));
    vars.afterGame.style.background = "url(".concat(require('../assets/img/bg3.jpg'));
    vars.menuBlock.style.backgroundSize = "cover";
    vars.afterGame.style.backgroundSize = "cover";
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
    vars.menuBlock.style.background = "url(".concat(require('../assets/img/bgSpace.jpg'));
    vars.afterGame.style.background = "url(".concat(require('../assets/img/bgSpace.jpg'));
    vars.menuBlock.style.backgroundSize = "cover";
    vars.afterGame.style.backgroundSize = "cover";
    vars.setSkin1.className = "";
    vars.setSkin2.className = "";
    vars.setSkin3.className = "";
    vars.setSkin4.className = "active";
  }
}

function canvasWidth() {
  if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // определение мобильного браузера
    vars.cvs.width = innerWidth; // vars.cvs.width = vars.cvs.width * window.devicePixelRatio;
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

function gapReduction() {
  //умньшает зазор до 30-й трубы
  if (vars.score <= 30) {
    vars.gap -= 1;
  }
}

function eastEgg() {
  if (localStorage.getItem('name') == "Nonamezzz") {
    bird.src = require('../assets/img/chack.png');
    fly.src = require('../assets/audio/punch.mp3');
  } else if (localStorage.getItem('name') == "Antonster") {
    bird.src = require('../assets/img/anton.png');
    fly.src = require('../assets/audio/horse.mp3');
  }

  if (localStorage.getItem('name') == "WorldThirteen") {
    bird.src = require('../assets/img/ghost.png');
    fly.src = require('../assets/audio/fly.mp3');
  }
}
},{"./menu":"menu.js","./lead_table":"lead_table.js","./variables":"variables.js","../assets/audio/score.mp3":"../assets/audio/score.mp3","../assets/audio//fail.mp3":"../assets/audio/fail.mp3","../assets/img/rip.png":"../assets/img/rip.png","../assets/img/bird.png":"../assets/img/bird.png","../assets/audio/fly.mp3":"../assets/audio/fly.mp3","../assets/img/bg.jpg":"../assets/img/bg.jpg","../assets/img/fg.jpg":"../assets/img/fg.jpg","../assets/img/pipeUp.png":"../assets/img/pipeUp.png","../assets/img/pipeBottom.png":"../assets/img/pipeBottom.png","../assets/img/birdGray.png":"../assets/img/birdGray.png","../assets/img/bgGray.jpg":"../assets/img/bgGray.jpg","../assets/img/fgGray.jpg":"../assets/img/fgGray.jpg","../assets/img/pipeUpGray.png":"../assets/img/pipeUpGray.png","../assets//img/pipeBottomGray.png":"../assets/img/pipeBottomGray.png","../assets/img/bird3.png":"../assets/img/bird3.png","../assets/img/bg3.jpg":"../assets/img/bg3.jpg","../assets/img/fg3.jpg":"../assets/img/fg3.jpg","../assets/img/pipeUpOrange.png":"../assets/img/pipeUpOrange.png","../assets/img/pipeBottomOrange.png":"../assets/img/pipeBottomOrange.png","../assets/img/birdCat.png":"../assets/img/birdCat.png","../assets/audio/skin_4.mp3":"../assets/audio/skin_4.mp3","../assets/img/rainbow_cat.png":"../assets/img/rainbow_cat.png","../assets/img/bgSpace.jpg":"../assets/img/bgSpace.jpg","../assets/img/fgRainbow.png":"../assets/img/fgRainbow.png","../assets/img/pipeUpPink.png":"../assets/img/pipeUpPink.png","../assets/img/pipeBottomPink.png":"../assets/img/pipeBottomPink.png","../assets/img/chack.png":"../assets/img/chack.png","../assets/audio/punch.mp3":"../assets/audio/punch.mp3","../assets/img/anton.png":"../assets/img/anton.png","../assets/audio/horse.mp3":"../assets/audio/horse.mp3","../assets/img/ghost.png":"../assets/img/ghost.png"}],"menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openMenu = openMenu;
exports.exitMenu = exitMenu;
exports.skinsMenu = skinsMenu;
exports.backMenu = backMenu;
exports.changeName = changeName;
exports.reload = reload;
exports.sleep = sleep;
exports.start = start;
exports.gameOver = gameOver;
exports.playMenu = playMenu;
exports.leadersMenu = leadersMenu;
exports.acceptName = acceptName;
exports.acceptChangeName = acceptChangeName;
exports.checkNameButtonActive = checkNameButtonActive;
exports.whereNameInput = whereNameInput;

var vars = _interopRequireWildcard(require("./variables"));

var _app = require("./app");

var _lead_table = require("./lead_table");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function openMenu() {
  vars.gameBlock.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
  document.body.touchAction = "manipulation";
  (0, _lead_table.getBestScore)();
  (0, _app.skinChange)();
  checkNameButtonActive();
  (0, _app.canvasWidth)();
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

  if (vars.score > 0) {
    (0, _lead_table.checkLocalStorage)();
  }

  vars.score = 0;
}

function enterGame() {
  vars.pipe = [];
  vars.pipe[0] = {
    x: vars.cvs.width,
    y: 0
  };
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

function reload() {
  //должна перезагружать страницу
  if (vars.score > 0) {
    (0, _lead_table.checkLocalStorage)();
  }

  vars.pipe = [];
  vars.pipe[0] = {
    x: vars.cvs.width,
    y: 0
  };
  vars.score = 0;
  vars.xPos = 10;
  vars.yPos = 150;
  vars.canvasGame.style.display = "block";
  vars.afterGame.style.display = "none";
  vars.pauseBtn.style.display = "block";
  vars.startBtn.style.display = "none";
  requestAnimationFrame(_app.draw);
  document.addEventListener("keydown", _app.moveUp);
  vars.canvasGame.addEventListener("touchstart", _app.moveUp);
}

function sleep() {
  cancelAnimationFrame(_app.animations);
  vars.startBtn.style.display = "block";
  vars.leaveGame.style.display = "block";
  vars.pauseBtn.style.display = "none";
  document.removeEventListener("keydown", _app.moveUp);
  vars.canvasGame.removeEventListener("touchstart", _app.moveUp);
}

function start() {
  requestAnimationFrame(_app.draw);
  vars.startBtn.style.display = "none";
  vars.leaveGame.style.display = "none";
  vars.pauseBtn.style.display = "block";
  document.addEventListener("keydown", _app.moveUp);
  vars.canvasGame.addEventListener("touchstart", _app.moveUp);
}

function gameOver() {
  //функция вызываемая после столкновения
  cancelAnimationFrame(_app.animations);
  vars.birdLive = true;
  vars.grav = 1.5;
  vars.gap = 100;
  (0, _app.skinChange)();
  vars.canvasGame.style.display = "none";
  vars.startBtn.style.display = "none";
  vars.leaveGame.style.display = "none";
  vars.pauseBtn.style.display = "block";
  vars.afterGame.style.display = "block";
  vars.scoreAfterDiv.innerText = "".concat(vars.score);

  if (vars.score == vars.bestScore) {
    vars.highscoreDiv.innerText = "New best: \n\t\t\t".concat(vars.bestScore);
  } else if (vars.score < vars.bestScore) {
    vars.highscoreDiv.innerText = "Best: \n\t\t\t".concat(vars.bestScore);
  } else if (vars.bestScore === 0) {
    vars.highscoreDiv.innerText = "New best: \n\t\t\t".concat(vars.score);
  }
}

function playMenu() {
  (0, _app.skinChange)();
  vars.menuPlay.style.display = "none";
  vars.menuSkins.style.display = "none";
  vars.menuLeaders.style.display = "none";
  vars.menuExit.style.display = "none";
  vars.nameChange.style.display = "none";

  if (localStorage.getItem('name')) {
    if (vars.birdLive === true) {
      requestAnimationFrame(_app.draw);
    }

    enterGame();
  } else {
    vars.menuEnterGame.style.display = "block";
    vars.menuAccept.style.display = "block";
    vars.menuBack.style.display = "block";
  }

  if (vars.birdLive === false) {
    reload();
  }

  document.addEventListener("keydown", _app.moveUp);
  vars.canvasGame.addEventListener("touchstart", _app.moveUp);
}

function leadersMenu() {
  vars.menuPlay.style.display = "none";
  vars.menuSkins.style.display = "none";
  vars.menuLeaders.style.display = "none";
  vars.menuExit.style.display = "none";
  vars.nameChange.style.display = "none";
  vars.menuBack.style.display = "block";
  vars.menuLeadersTable.style.display = "block";
  (0, _lead_table.createTable)();
}

function acceptName() {
  if (vars.nickname.value) {
    (0, _lead_table.pushNick)();
    enterGame();
    requestAnimationFrame(_app.draw);
  }

  (0, _app.skinChange)();
}

function acceptChangeName() {
  if (vars.nickname.value) {
    (0, _lead_table.pushNick)();
    backMenu();
  }

  (0, _app.skinChange)();
}

function checkNameButtonActive() {
  if (localStorage.getItem("name")) {
    vars.nameChange.style.display = "block";
  } else {
    vars.nameChange.style.display = "none";
  }
}

function whereNameInput(e) {
  if (e.keyCode === 13 && localStorage.getItem("name")) {
    acceptChangeName();
  } else if (e.keyCode === 13 && !localStorage.getItem("name")) {
    acceptName();
  }
}
},{"./variables":"variables.js","./app":"app.js","./lead_table":"lead_table.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _menu = require("./menu");

var vars = _interopRequireWildcard(require("./variables"));

var _app = require("./app");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

document.onkeydown = function (e) {
  // убирает скролл страницы при нажатии на пробел.
  var keyCode = e.keyCode || e.charCode;
  if (keyCode == 32) e.preventDefault();
};

document.addEventListener("keydown", _app.moveUp);
vars.canvasGame.addEventListener("touchstart", _app.moveUp);
vars.canvasGame.addEventListener("touchmove", _app.moveUp);
vars.pauseBtn.addEventListener("click", _menu.sleep);
vars.startBtn.addEventListener("click", _menu.start);
vars.reloadBtn.addEventListener("click", _menu.reload);
vars.playNow.addEventListener('click', _menu.openMenu);
vars.menuPlay.addEventListener('click', _menu.playMenu);
vars.menuSkins.addEventListener('click', _menu.skinsMenu);
vars.menuLeaders.addEventListener('click', _menu.leadersMenu);
vars.menuExit.addEventListener('click', _menu.exitMenu);
vars.menuBack.addEventListener('click', _menu.backMenu);
vars.backToMenu.addEventListener('click', _menu.backMenu);
vars.leaveGame.addEventListener('click', _menu.gameOver);
vars.menuAccept.addEventListener('click', _menu.acceptName);
vars.nameChange.addEventListener('click', _menu.changeName);
vars.acceptNameChange.addEventListener('click', _menu.acceptChangeName);
vars.nickname.addEventListener('keydown', _menu.whereNameInput);
vars.setSkin1.addEventListener("click", function () {
  JSON.stringify(localStorage.setItem('skinKey', 1));
  (0, _app.skinChange)();
});
vars.setSkin2.addEventListener("click", function () {
  JSON.stringify(localStorage.setItem('skinKey', 2));
  (0, _app.skinChange)();
});
vars.setSkin3.addEventListener("click", function () {
  JSON.stringify(localStorage.setItem('skinKey', 3));
  (0, _app.skinChange)();
});
vars.setSkin4.addEventListener("click", function () {
  JSON.stringify(localStorage.setItem('skinKey', 4));
  (0, _app.skinChange)();
});
},{"./menu":"menu.js","./variables":"variables.js","./app":"app.js"}],"../../../../Users/Anton/AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59278" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../Users/Anton/AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.map