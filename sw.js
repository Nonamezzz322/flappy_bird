/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "accept.2764c54e.png",
    "revision": "3b7b5888a5d39e31aa2e7ab1fcb955b7"
  },
  {
    "url": "audio/fail.mp3",
    "revision": "75b9dd76b25c1e1a4132016559a0a567"
  },
  {
    "url": "audio/fly.mp3",
    "revision": "115aeb7ab95ecaf6879d56b9b4d2185b"
  },
  {
    "url": "audio/score.mp3",
    "revision": "30b534d8c4c5e9617a87f8e96949a090"
  },
  {
    "url": "audio/skin_4.mp3",
    "revision": "0be746e2b58ca43f66aa854bc5cc319c"
  },
  {
    "url": "back.b0903292.png",
    "revision": "057e69f7923226d5247d89963543bec0"
  },
  {
    "url": "bg.05c34d5a.png",
    "revision": "56422d3413fbf2a9cc6d5e29a258c5dc"
  },
  {
    "url": "dodge-screenshot.a15a5fce.png",
    "revision": "ac977fff9d6df9e41072089a33fbe590"
  },
  {
    "url": "exit.8a580015.png",
    "revision": "15a95a55922dabc029e616ce507d5d5e"
  },
  {
    "url": "facebook.a098c94f.png",
    "revision": "5cadf3e9e44dd3f5d90f920a110f862a"
  },
  {
    "url": "flappy_bird.8fd28ae4.js",
    "revision": "2fdf710d6772b9dab1a25fb42b6acafc"
  },
  {
    "url": "flappy-background_lg.db223402.png",
    "revision": "46533880b2755e523dd474be76d9274c"
  },
  {
    "url": "flappy-bird-logo.b186aca7.png",
    "revision": "26c83acb230532a2fd3a61f63bb22d48"
  },
  {
    "url": "flappy-icon.eeef2d08.png",
    "revision": "ca4d693f51c7527dddf6892ac110fcef"
  },
  {
    "url": "game-over.c1665d07.png",
    "revision": "ceb758d9c7cfea90c250215aa5d5aae1"
  },
  {
    "url": "google.7dac0288.png",
    "revision": "7d13a5c361e926af029a4f85a95c9541"
  },
  {
    "url": "img/accept.png",
    "revision": "3b7b5888a5d39e31aa2e7ab1fcb955b7"
  },
  {
    "url": "img/back.png",
    "revision": "057e69f7923226d5247d89963543bec0"
  },
  {
    "url": "img/bg.png",
    "revision": "56422d3413fbf2a9cc6d5e29a258c5dc"
  },
  {
    "url": "img/bg3.png",
    "revision": "9e3d7874e1c077c8ff28b626c023801e"
  },
  {
    "url": "img/bgGray.png",
    "revision": "ba992e812f209f2d2b2a0694d099b879"
  },
  {
    "url": "img/bgSpace.jpg",
    "revision": "b1c22983acc8bec1d955696137a040a7"
  },
  {
    "url": "img/bird.png",
    "revision": "43698b595369a9a49f24694d35c63243"
  },
  {
    "url": "img/bird3.png",
    "revision": "0984bd779ee126f37bf7525f8ae105a9"
  },
  {
    "url": "img/birdCat.png",
    "revision": "01f2e947277a2a0d19474afc60606b23"
  },
  {
    "url": "img/birdGray.png",
    "revision": "42911a7354aac4c238c631917865f214"
  },
  {
    "url": "img/dodge-screenshot.png",
    "revision": "ac977fff9d6df9e41072089a33fbe590"
  },
  {
    "url": "img/exit.png",
    "revision": "15a95a55922dabc029e616ce507d5d5e"
  },
  {
    "url": "img/facebook.png",
    "revision": "5cadf3e9e44dd3f5d90f920a110f862a"
  },
  {
    "url": "img/fg.png",
    "revision": "ce0eb5905b787a7f218cd9aa9ad5e42e"
  },
  {
    "url": "img/fg3.png",
    "revision": "fd2dd89c95bd959bd56aea516091ceeb"
  },
  {
    "url": "img/fgGray.png",
    "revision": "387bab406ebc939a888f789771745413"
  },
  {
    "url": "img/fgRainbow.png",
    "revision": "019938be9f2cedaf1d3fe0c75c551839"
  },
  {
    "url": "img/flappy-background_lg.png",
    "revision": "46533880b2755e523dd474be76d9274c"
  },
  {
    "url": "img/flappy-bird-logo.png",
    "revision": "26c83acb230532a2fd3a61f63bb22d48"
  },
  {
    "url": "img/flappy-icon.png",
    "revision": "ca4d693f51c7527dddf6892ac110fcef"
  },
  {
    "url": "img/game-over.png",
    "revision": "ceb758d9c7cfea90c250215aa5d5aae1"
  },
  {
    "url": "img/google.png",
    "revision": "7d13a5c361e926af029a4f85a95c9541"
  },
  {
    "url": "img/input.png",
    "revision": "258bfccebe77dfc8131bc811f4208400"
  },
  {
    "url": "img/leaders.png",
    "revision": "502f54a36afe6d9670f6c23c56624b5e"
  },
  {
    "url": "img/leave.png",
    "revision": "302582eb82c83bc2a5a56b3d93aa4471"
  },
  {
    "url": "img/menu.png",
    "revision": "879e80d023ad0d3ba72d43f401c0cb7b"
  },
  {
    "url": "img/name.png",
    "revision": "c5edf1ec94fe8f9e7f7b756685bfe8ab"
  },
  {
    "url": "img/pause.png",
    "revision": "de18a70ffbbadd7d5487a6716cb239d8"
  },
  {
    "url": "img/phone.png",
    "revision": "7874cfbcce1c863d472f6d5413103474"
  },
  {
    "url": "img/pipeBottom.png",
    "revision": "dbed332420382640395641ecfb6e4866"
  },
  {
    "url": "img/pipeBottomGray.png",
    "revision": "af4a7c391877cd82e1a63ac9d69dd09c"
  },
  {
    "url": "img/pipeBottomOrange.png",
    "revision": "f768c892ed176b1b21f240eb1251eed7"
  },
  {
    "url": "img/pipeBottomPink.png",
    "revision": "c6b46879a99625c44420ec4344c8c8d9"
  },
  {
    "url": "img/pipeUp.png",
    "revision": "3b4ac1b49b46129dbca3000cd5b4d8e0"
  },
  {
    "url": "img/pipeUpGray.png",
    "revision": "5c4d267b2121568da7f88fbbdb61d4f2"
  },
  {
    "url": "img/pipeUpOrange.png",
    "revision": "d80c322423cef637648131765ee14c89"
  },
  {
    "url": "img/pipeUpPink.png",
    "revision": "fce799f1a8e9897ab65165f525690675"
  },
  {
    "url": "img/play.png",
    "revision": "880cd29c6c78cb170bc42c28f6b1d840"
  },
  {
    "url": "img/restart.png",
    "revision": "28c5caf2f2bfcb8453533ebbabb52669"
  },
  {
    "url": "img/score-screenshot.png",
    "revision": "99a73c52751109177213eafff2533516"
  },
  {
    "url": "img/score-table.png",
    "revision": "64cf6b764bd64aa8d969fa79fd858ce9"
  },
  {
    "url": "img/share-screenshot.png",
    "revision": "7fbfb80bb19064a103ccf81ffd9730a0"
  },
  {
    "url": "img/skin_1.png",
    "revision": "ad92459aec9dc57c948db2173fdba2b2"
  },
  {
    "url": "img/skin_2.png",
    "revision": "be68a34360850feb110501387943d6a6"
  },
  {
    "url": "img/skin_3.png",
    "revision": "16e461724507c6e56a5d6e62160674ae"
  },
  {
    "url": "img/skin_4.png",
    "revision": "1128933baad8bb3556556582685ef44c"
  },
  {
    "url": "img/skins.png",
    "revision": "9517d102ce625a94c4d55b988f976f2f"
  },
  {
    "url": "img/table.png",
    "revision": "a8509abd75d2350246d22ea77c889829"
  },
  {
    "url": "img/twitter.png",
    "revision": "fa5e70a1506bffdb865e99c5360b610e"
  },
  {
    "url": "index.html",
    "revision": "f73388a1046f9795e25823bb36d53c55"
  },
  {
    "url": "input.91b26918.png",
    "revision": "258bfccebe77dfc8131bc811f4208400"
  },
  {
    "url": "leaders.54656e36.png",
    "revision": "502f54a36afe6d9670f6c23c56624b5e"
  },
  {
    "url": "leave.5e1fb0d9.png",
    "revision": "302582eb82c83bc2a5a56b3d93aa4471"
  },
  {
    "url": "menu.5ebff17b.png",
    "revision": "879e80d023ad0d3ba72d43f401c0cb7b"
  },
  {
    "url": "name.8416a81b.png",
    "revision": "c5edf1ec94fe8f9e7f7b756685bfe8ab"
  },
  {
    "url": "pause.5c3d36e3.png",
    "revision": "de18a70ffbbadd7d5487a6716cb239d8"
  },
  {
    "url": "phone.a67fd003.png",
    "revision": "7874cfbcce1c863d472f6d5413103474"
  },
  {
    "url": "play.2326d41d.png",
    "revision": "880cd29c6c78cb170bc42c28f6b1d840"
  },
  {
    "url": "restart.5b9b7b45.png",
    "revision": "28c5caf2f2bfcb8453533ebbabb52669"
  },
  {
    "url": "score-screenshot.3be158d6.png",
    "revision": "99a73c52751109177213eafff2533516"
  },
  {
    "url": "share-screenshot.0a8e81a2.png",
    "revision": "7fbfb80bb19064a103ccf81ffd9730a0"
  },
  {
    "url": "skin_1.4d9fad97.png",
    "revision": "ad92459aec9dc57c948db2173fdba2b2"
  },
  {
    "url": "skin_2.bc527623.png",
    "revision": "be68a34360850feb110501387943d6a6"
  },
  {
    "url": "skin_3.5f48bb1b.png",
    "revision": "16e461724507c6e56a5d6e62160674ae"
  },
  {
    "url": "skin_4.e42bd335.png",
    "revision": "1128933baad8bb3556556582685ef44c"
  },
  {
    "url": "skins.217e526a.png",
    "revision": "9517d102ce625a94c4d55b988f976f2f"
  },
  {
    "url": "styles.e24526c0.css",
    "revision": "712a3bd94fc18fedb8c48f150270429c"
  },
  {
    "url": "table.e55181e2.png",
    "revision": "a8509abd75d2350246d22ea77c889829"
  },
  {
    "url": "twitter.cf3576d8.png",
    "revision": "fa5e70a1506bffdb865e99c5360b610e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("index.html");
