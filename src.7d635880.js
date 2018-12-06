parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"yG4r":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.grav=exports.yPos=exports.xPos=exports.bestScore=exports.score=exports.gap=exports.pipe=exports.setSkin4=exports.setSkin3=exports.setSkin2=exports.setSkin1=exports.leaveGame=exports.backToMenu=exports.tableData=exports.highscoreDiv=exports.scoreAfterDiv=exports.afterGame=exports.nickname=exports.menuBack=exports.gameContent=exports.gameBorder=exports.menuAccept=exports.menuEnterGame=exports.acceptNameChange=exports.nameChange=exports.menuExit=exports.menuLeadersTable=exports.menuLeaders=exports.skinsBlock=exports.menuSkins=exports.menuPlay=exports.playNow=exports.menuBlock=exports.gameBlock=exports.canvasGame=exports.reloadBtn=exports.startBtn=exports.pauseBtn=exports.ctx=exports.cvs=void 0;var e=document.getElementById("game");exports.cvs=e;var t=e.getContext("2d");exports.ctx=t;var r=document.getElementById("pause");exports.pauseBtn=r;var o=document.getElementById("start");exports.startBtn=o;var n=document.getElementById("reload");exports.reloadBtn=n;var a=document.getElementById("canvas_game");exports.canvasGame=a;var s=document.getElementById("game_block");exports.gameBlock=s;var m=document.getElementById("menu_block");exports.menuBlock=m;var p=document.getElementById("play_now");exports.playNow=p;var x=document.getElementById("menu_play");exports.menuPlay=x;var c=document.getElementById("menu_skins");exports.menuSkins=c;var d=document.getElementById("skins");exports.skinsBlock=d;var u=document.getElementById("menu_leaders");exports.menuLeaders=u;var l=document.getElementById("menu_leaders_table");exports.menuLeadersTable=l;var g=document.getElementById("menu_exit");exports.menuExit=g;var v=document.getElementById("name_change");exports.nameChange=v;var B=document.getElementById("accept_name_change");exports.acceptNameChange=B;var y=document.getElementById("menu_enter_name");exports.menuEnterGame=y;var i=document.getElementById("menu_accept");exports.menuAccept=i;var E=document.getElementById("back_menu");exports.menuBack=E;var k=document.getElementById("game_border");exports.gameBorder=k;var I=document.getElementById("game_content");exports.gameContent=I;var _=document.getElementById("name");exports.nickname=_;var b=document.getElementById("after_game");exports.afterGame=b;var h=document.getElementById("score_after");exports.scoreAfterDiv=h;var S=document.getElementById("highscore");exports.highscoreDiv=S;var G=document.getElementById("table_data");exports.tableData=G;var f=document.getElementById("back_to_menu");exports.backToMenu=f;var C=document.getElementById("leave");exports.leaveGame=C;var P=document.getElementById("skin_1");exports.setSkin1=P;var D=document.getElementById("skin_2");exports.setSkin2=D;var w=document.getElementById("skin_3");exports.setSkin3=w;var A=document.getElementById("skin_4");exports.setSkin4=A;var L=[];exports.pipe=L,L[0]={x:e.width,y:0};var N=90;exports.gap=N;var T=0;exports.score=T;var M=0;exports.bestScore=M;var j=0;exports.xPos=j;var O=150;exports.yPos=O;var q=1.5;exports.grav=q;
},{}],"AC3F":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pushNick=o,exports.setScoreObj=a,exports.setBestScore=n,exports.getBestScore=c,exports.createTable=u,exports.checkLocalStorage=g;var e=r(require("./variables"));function r(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(r,t,o):r[t]=e[t]}return r.default=e,r}var t=[];function o(){localStorage.setItem("name",e.nickname.value),e.nickname.value=""}function a(){var r={name:localStorage.getItem("name",e.nickname.value),score:e.score};new Promise(function(e,t){e(r)}).then(function(e){return JSON.stringify(e)}).then(function(e){return localStorage.setItem("scoreObj",e)})}function n(){var r=localStorage.getItem("highScore");r?e.score>r&&localStorage.setItem("highScore",e.score):localStorage.setItem("highScore",1)}function c(){var r=localStorage.getItem("highScore");e.bestScore=r||0}function l(){s(t),t=JSON.parse(localStorage.getItem("leadArr"));var r={name:localStorage.getItem("name",e.nickname.value),score:e.score};if(e.score>0&&t.length<=4)t.push(r),localStorage.setItem("leadArr",JSON.stringify(t));else{if(!(e.score>t[4].score&&t.length>4))return console.log("you are not worthy to get on the leaderboard");t.splice(4,1,r),localStorage.setItem("leadArr",JSON.stringify(t))}s()}function s(e){(e=JSON.parse(localStorage.getItem("leadArr"))).sort(function(e,r){return e.score>r.score?1:r.score>e.score?-1:0});var r=e.reverse();localStorage.setItem("leadArr",JSON.stringify(r))}function i(){var r={name:localStorage.getItem("name",e.nickname.value),score:e.score};t.push(r);new Promise(function(e,r){e(t)}).then(function(e){return JSON.stringify(e)}).then(function(e){return localStorage.setItem("leadArr",e)})}function g(){null!==localStorage.getItem("leadArr")?l():i()}function u(){if(t=JSON.parse(localStorage.getItem("leadArr")))for(var r=0;r<t.length;r+=1)e.tableData.rows[r+1].cells[0].innerText=t[r].name,e.tableData.rows[r+1].cells[1].innerText=t[r].score}
},{"./variables":"yG4r"}],"Kraf":[function(require,module,exports) {
module.exports="/flappy_bird/score.18c5c818.mp3";
},{}],"2Mze":[function(require,module,exports) {
module.exports="/flappy_bird/fail.9bc4fc69.mp3";
},{}],"IW06":[function(require,module,exports) {
module.exports="/flappy_bird/bird.f0add8c5.png";
},{}],"0pEy":[function(require,module,exports) {
module.exports="/flappy_bird/bg.780a80f7.jpg";
},{}],"iVo2":[function(require,module,exports) {
module.exports="/flappy_bird/fg.3f12a1ea.jpg";
},{}],"fV0m":[function(require,module,exports) {
module.exports="/flappy_bird/pipeUp.f9cbed87.png";
},{}],"nPy3":[function(require,module,exports) {
module.exports="/flappy_bird/pipeBottom.92afd5f5.png";
},{}],"WOhT":[function(require,module,exports) {
module.exports="/flappy_bird/fly.fd1a2368.mp3";
},{}],"noRy":[function(require,module,exports) {
module.exports="/flappy_bird/birdGray.bf57aee1.png";
},{}],"2pno":[function(require,module,exports) {
module.exports="/flappy_bird/bgGray.ca2a5f89.jpg";
},{}],"R8vY":[function(require,module,exports) {
module.exports="/flappy_bird/fgGray.10ada962.jpg";
},{}],"lJ4x":[function(require,module,exports) {
module.exports="/flappy_bird/pipeUpGray.cc44c988.png";
},{}],"bZnA":[function(require,module,exports) {
module.exports="/flappy_bird/pipeBottomGray.0bbadd97.png";
},{}],"UdyC":[function(require,module,exports) {
module.exports="/flappy_bird/bird3.1f1f52bc.png";
},{}],"VVD2":[function(require,module,exports) {
module.exports="/flappy_bird/bg3.698868f0.jpg";
},{}],"Z2f+":[function(require,module,exports) {
module.exports="/flappy_bird/fg3.4ae7df0f.jpg";
},{}],"cQWy":[function(require,module,exports) {
module.exports="/flappy_bird/pipeUpOrange.3871e647.png";
},{}],"eqFm":[function(require,module,exports) {
module.exports="/flappy_bird/pipeBottomOrange.dca3c2fa.png";
},{}],"xxxe":[function(require,module,exports) {
module.exports="/flappy_bird/birdCat.4f62d25b.png";
},{}],"bf4R":[function(require,module,exports) {
module.exports="/flappy_bird/rainbow_cat.bb9e05ef.png";
},{}],"pvEG":[function(require,module,exports) {
module.exports="/flappy_bird/bgSpace.04498f20.jpg";
},{}],"4eTX":[function(require,module,exports) {
module.exports="/flappy_bird/fgRainbow.29648938.png";
},{}],"h4+z":[function(require,module,exports) {
module.exports="/flappy_bird/pipeUpPink.5f59d00f.png";
},{}],"gmDZ":[function(require,module,exports) {
module.exports="/flappy_bird/pipeBottomPink.a67e8681.png";
},{}],"myyZ":[function(require,module,exports) {
module.exports="/flappy_bird/skin_4.20abd527.mp3";
},{}],"A2T1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.draw=h,exports.moveUp=y,exports.skinChange=b,exports.canvasWidth=v,exports.birdLive=exports.animations=void 0;var e=require("./menu"),s=require("./lead_table"),r=t(require("./variables"));function t(e){if(e&&e.__esModule)return e;var s={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};t.get||t.set?Object.defineProperty(s,r,t):s[r]=e[r]}return s.default=e,s}var i,a=new Image,o=new Image,c=new Image,n=new Image,g=new Image,p=new Image,u=new Audio,m=new Audio,l=new Audio;exports.animations=i;var d=!0;function y(e){if(("touchmove"==(e=e.originalEvent||e).type||e.scale>=1)&&e.preventDefault(),(32===e.keyCode||"touchstart"==e.type)&&r.yPos>30)if(u.currentTime=0,u.play(),32===e.keyCode){var s=setInterval(function(){return r.yPos-=r.grav+2.5},1);setTimeout(function(){return clearInterval(s)},30)}else"touchstart"==e.type?r.yPos-=30:"click"==e.type&&(e.preventDefault(),r.yPos-=30)}function h(){/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)?r.ctx.drawImage(c,0,0,r.cvs.width,r.cvs.height):r.ctx.drawImage(c,0,0);for(var t=0;t<r.pipe.length;t+=1)r.ctx.drawImage(g,r.pipe[t].x,r.pipe[t].y),r.ctx.drawImage(p,r.pipe[t].x,r.pipe[t].y+g.height+r.gap),r.pipe[t].x-=1,/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)?170==r.pipe[t].x&&r.pipe.push({x:r.cvs.width,y:Math.floor(Math.random()*g.height)-g.height}):105==r.pipe[t].x&&r.pipe.push({x:r.cvs.width,y:Math.floor(Math.random()*g.height)-g.height}),(r.xPos+a.width>=r.pipe[t].x&&r.xPos<=r.pipe[t].x+g.width&&(r.yPos<=r.pipe[t].y+g.height||r.yPos+a.height>=r.pipe[t].y+g.height+r.gap)||r.yPos+a.height>=r.cvs.height-n.height)&&(l.play(),exports.birdLive=d=!1,requestAnimationFrame(e.gameOver)),5==r.pipe[t].x&&(r.score+=1,(0,s.setScoreObj)(),(0,s.setBestScore)(),(0,s.getBestScore)(),m.play());4===JSON.parse(localStorage.getItem("skinKey"))&&r.ctx.drawImage(o,r.xPos-38,r.yPos-2),/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)?r.ctx.drawImage(n,0,r.cvs.height-n.height,r.cvs.width,118):r.ctx.drawImage(n,0,r.cvs.height-n.height),r.ctx.drawImage(a,r.xPos,r.yPos),r.yPos+=r.grav,r.ctx.fillStyle="#000",r.ctx.font="2.5rem Caveat",r.ctx.fillText("Score: "+r.score,10,r.cvs.height-20),exports.animations=i=requestAnimationFrame(h)}function b(){var e=JSON.parse(localStorage.getItem("skinKey"));1!==e&&e?2===e?(a.src=require("../assets/img/birdGray.png"),c.src=require("../assets/img/bgGray.jpg"),n.src=require("../assets/img/fgGray.jpg"),g.src=require("../assets/img/pipeUpGray.png"),p.src=require("../assets//img/pipeBottomGray.png"),r.menuBlock.style.background="url(".concat(require("../assets/img/bgGray.jpg")),r.afterGame.style.background="url(".concat(require("../assets/img/bgGray.jpg")),r.menuBlock.style.backgroundSize="cover",r.afterGame.style.backgroundSize="cover",u.src=require("../assets//audio/fly.mp3"),r.setSkin1.className="",r.setSkin2.className="active",r.setSkin3.className="",r.setSkin4.className=""):3===e?(a.src=require("../assets/img/bird3.png"),c.src=require("../assets/img/bg3.jpg"),n.src=require("../assets/img/fg3.jpg"),g.src=require("../assets/img/pipeUpOrange.png"),p.src=require("../assets/img/pipeBottomOrange.png"),r.menuBlock.style.background="url(".concat(require("../assets/img/bg3.jpg")),r.afterGame.style.background="url(".concat(require("../assets/img/bg3.jpg")),r.menuBlock.style.backgroundSize="cover",r.afterGame.style.backgroundSize="cover",u.src=require("../assets/audio/fly.mp3"),r.setSkin1.className="",r.setSkin2.className="",r.setSkin3.className="active",r.setSkin4.className=""):4===e&&(a.src=require("../assets/img/birdCat.png"),o.src=require("../assets/img/rainbow_cat.png"),c.src=require("../assets/img/bgSpace.jpg"),n.src=require("../assets/img/fgRainbow.png"),g.src=require("../assets/img/pipeUpPink.png"),p.src=require("../assets/img/pipeBottomPink.png"),r.menuBlock.style.background="url(".concat(require("../assets/img/bgSpace.jpg")),r.afterGame.style.background="url(".concat(require("../assets/img/bgSpace.jpg")),r.menuBlock.style.backgroundSize="cover",r.afterGame.style.backgroundSize="cover",u.src=require("../assets/audio/skin_4.mp3"),r.setSkin1.className="",r.setSkin2.className="",r.setSkin3.className="",r.setSkin4.className="active"):(a.src=require("../assets/img/bird.png"),c.src=require("../assets/img/bg.jpg"),n.src=require("../assets/img/fg.jpg"),g.src=require("../assets/img/pipeUp.png"),p.src=require("../assets/img/pipeBottom.png"),r.menuBlock.style.background="url(".concat(require("../assets/img/bg.jpg")),r.afterGame.style.background="url(".concat(require("../assets/img/bg.jpg")," "),r.menuBlock.style.backgroundSize="cover",r.afterGame.style.backgroundSize="cover",u.src=require("../assets/audio/fly.mp3"),r.setSkin1.className="active",r.setSkin2.className="",r.setSkin3.className="",r.setSkin4.className="")}function v(){/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(r.cvs.width=innerWidth,r.gameBorder.style.width="100%",r.gameBorder.style.height="100%",r.gameBorder.style.left="0",r.gameBorder.style.top="0",r.gameBorder.style.background="black",r.gameContent.style.left="0",r.gameContent.style.width="100%")}exports.birdLive=d,m.src=require("../assets/audio/score.mp3"),l.src=require("../assets/audio//fail.mp3");
},{"./menu":"Z6FK","./lead_table":"AC3F","./variables":"yG4r","../assets/audio/score.mp3":"Kraf","../assets/audio//fail.mp3":"2Mze","../assets/img/bird.png":"IW06","../assets/img/bg.jpg":"0pEy","../assets/img/fg.jpg":"iVo2","../assets/img/pipeUp.png":"fV0m","../assets/img/pipeBottom.png":"nPy3","../assets/audio/fly.mp3":"WOhT","../assets/img/birdGray.png":"noRy","../assets/img/bgGray.jpg":"2pno","../assets/img/fgGray.jpg":"R8vY","../assets/img/pipeUpGray.png":"lJ4x","../assets//img/pipeBottomGray.png":"bZnA","../assets//audio/fly.mp3":"WOhT","../assets/img/bird3.png":"UdyC","../assets/img/bg3.jpg":"VVD2","../assets/img/fg3.jpg":"Z2f+","../assets/img/pipeUpOrange.png":"cQWy","../assets/img/pipeBottomOrange.png":"eqFm","../assets/img/birdCat.png":"xxxe","../assets/img/rainbow_cat.png":"bf4R","../assets/img/bgSpace.jpg":"pvEG","../assets/img/fgRainbow.png":"4eTX","../assets/img/pipeUpPink.png":"h4+z","../assets/img/pipeBottomPink.png":"gmDZ","../assets/audio/skin_4.mp3":"myyZ"}],"Z6FK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openMenu=a,exports.exitMenu=l,exports.skinsMenu=o,exports.backMenu=i,exports.changeName=c,exports.reload=r,exports.sleep=p,exports.start=d,exports.gameOver=m,exports.playMenu=u,exports.leadersMenu=k,exports.acceptName=b,exports.acceptChangeName=v,exports.checkNameButtonActive=g,exports.whereNameInput=f;var e=s(require("./variables")),n=require("./app"),t=require("./lead_table");function s(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};s.get||s.set?Object.defineProperty(n,t,s):n[t]=e[t]}return n.default=e,n}function a(){e.gameBlock.style.display="block",document.body.style.overflow="hidden",document.body.style.height="100%",document.body.touchAction="manipulation",(0,t.getBestScore)(),(0,n.skinChange)(),g(),(0,n.canvasWidth)()}function l(){e.gameBlock.style.display="none",document.body.style.overflow="auto",document.body.touchAction="auto"}function o(){e.menuPlay.style.display="none",e.menuSkins.style.display="none",e.menuLeaders.style.display="none",e.menuExit.style.display="none",e.nameChange.style.display="none",e.menuBack.style.display="block",e.skinsBlock.style.display="block"}function i(){e.menuEnterGame.style.display="none",e.menuBack.style.display="none",e.menuLeadersTable.style.display="none",e.canvasGame.style.display="none",e.afterGame.style.display="none",e.menuAccept.style.display="none",e.acceptNameChange.style.display="none",e.skinsBlock.style.display="none",e.menuBlock.style.display="block",e.menuPlay.style.display="block",e.menuSkins.style.display="block",e.menuLeaders.style.display="block",e.menuExit.style.display="block",g()}function y(){e.pipe=[],e.pipe[0]={x:e.cvs.width,y:0},e.score=0,e.xPos=10,e.yPos=150,e.menuBlock.style.display="none",e.canvasGame.style.display="block",e.afterGame.style.display="none"}function c(){e.menuPlay.style.display="none",e.menuSkins.style.display="none",e.menuLeaders.style.display="none",e.menuExit.style.display="none",e.nameChange.style.display="none",e.menuEnterGame.style.display="block",e.acceptNameChange.style.display="block",e.menuBack.style.display="block",e.nickname.value=localStorage.getItem("name")}function r(){e.pipe=[],e.pipe[0]={x:e.cvs.width,y:0},e.score=0,e.xPos=10,e.yPos=150,e.canvasGame.style.display="block",e.afterGame.style.display="none",e.pauseBtn.style.display="block",e.startBtn.style.display="none",requestAnimationFrame(n.draw),document.addEventListener("keydown",n.moveUp)}function p(){cancelAnimationFrame(n.animations),e.startBtn.style.display="block",e.leaveGame.style.display="block",e.pauseBtn.style.display="none",document.removeEventListener("keydown",n.moveUp)}function d(){requestAnimationFrame(n.draw),e.startBtn.style.display="none",e.leaveGame.style.display="none",e.pauseBtn.style.display="block",document.addEventListener("keydown",n.moveUp)}function m(){cancelAnimationFrame(n.animations),document.removeEventListener("keydown",n.moveUp),(0,n.skinChange)(),setTimeout(function(){e.score>0&&(0,t.checkLocalStorage)(),e.canvasGame.style.display="none",e.startBtn.style.display="none",e.leaveGame.style.display="none",e.pauseBtn.style.display="block",e.afterGame.style.display="block",e.scoreAfterDiv.innerText="".concat(e.score),e.score==e.bestScore?e.highscoreDiv.innerText="New best: \n\t\t\t".concat(e.bestScore):e.score<e.bestScore?e.highscoreDiv.innerText="Best: \n\t\t\t".concat(e.bestScore):0===e.bestScore&&(e.highscoreDiv.innerText="New best: \n\t\t\t".concat(e.score))},500)}function u(){(0,n.skinChange)(),e.menuPlay.style.display="none",e.menuSkins.style.display="none",e.menuLeaders.style.display="none",e.menuExit.style.display="none",e.nameChange.style.display="none",localStorage.getItem("name")?(!0===n.birdLive&&requestAnimationFrame(n.draw),y()):(e.menuEnterGame.style.display="block",e.menuAccept.style.display="block",e.menuBack.style.display="block"),!1===n.birdLive&&r()}function k(){e.menuPlay.style.display="none",e.menuSkins.style.display="none",e.menuLeaders.style.display="none",e.menuExit.style.display="none",e.nameChange.style.display="none",e.menuBack.style.display="block",e.menuLeadersTable.style.display="block",(0,t.createTable)()}function b(){e.nickname.value&&((0,t.pushNick)(),y(),requestAnimationFrame(n.draw))}function v(){e.nickname.value&&((0,t.pushNick)(),i())}function g(){localStorage.getItem("name")?e.nameChange.style.display="block":e.nameChange.style.display="none"}function f(e){13===e.keyCode&&localStorage.getItem("name")?v():13!==e.keyCode||localStorage.getItem("name")||b()}
},{"./variables":"yG4r","./app":"A2T1","./lead_table":"AC3F"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./menu"),n=a(require("./variables")),t=require("./app");function a(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}document.onkeydown=function(e){32==(e.keyCode||e.charCode)&&e.preventDefault()},document.addEventListener("keydown",t.moveUp),n.canvasGame.addEventListener("touchstart",t.moveUp),n.canvasGame.addEventListener("touchmove",t.moveUp),n.pauseBtn.addEventListener("click",e.sleep),n.startBtn.addEventListener("click",e.start),n.reloadBtn.addEventListener("click",e.reload),n.playNow.addEventListener("click",e.openMenu),n.menuPlay.addEventListener("click",e.playMenu),n.menuSkins.addEventListener("click",e.skinsMenu),n.menuLeaders.addEventListener("click",e.leadersMenu),n.menuExit.addEventListener("click",e.exitMenu),n.menuBack.addEventListener("click",e.backMenu),n.backToMenu.addEventListener("click",e.backMenu),n.leaveGame.addEventListener("click",e.gameOver),n.menuAccept.addEventListener("click",e.acceptName),n.nameChange.addEventListener("click",e.changeName),n.acceptNameChange.addEventListener("click",e.acceptChangeName),n.nickname.addEventListener("keydown",e.whereNameInput),n.setSkin1.addEventListener("click",function(){JSON.stringify(localStorage.setItem("skinKey",1)),(0,t.skinChange)()}),n.setSkin2.addEventListener("click",function(){JSON.stringify(localStorage.setItem("skinKey",2)),(0,t.skinChange)()}),n.setSkin3.addEventListener("click",function(){JSON.stringify(localStorage.setItem("skinKey",3)),(0,t.skinChange)()}),n.setSkin4.addEventListener("click",function(){JSON.stringify(localStorage.setItem("skinKey",4)),(0,t.skinChange)()});
},{"./menu":"Z6FK","./variables":"yG4r","./app":"A2T1"}]},{},["Focm"], null)
//# sourceMappingURL=/flappy_bird/src.f7fd8823.map