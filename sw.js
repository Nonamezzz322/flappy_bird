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
    "url": "accept.946d309e.png",
    "revision": "bc9d8d05e12b39d0ed2874d3fb1d1d23"
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
    "url": "back.47ddba69.png",
    "revision": "8d42ba3ab31405e189480cfa257dfcc1"
  },
  {
    "url": "bg.780a80f7.png",
    "revision": "e90b9653d8fde43ea1292cace3b9fa02"
  },
  {
    "url": "exit.f781dd4f.png",
    "revision": "03b93f1a59fb6731e71deca0e7aa6903"
  },
  {
    "url": "facebook.a098c94f.png",
    "revision": "5cadf3e9e44dd3f5d90f920a110f862a"
  },
  {
    "url": "flappy_bird.de4814ca.js",
    "revision": "38a2ca396326aaf248fc83e30f0f74e3"
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
    "revision": "bc9d8d05e12b39d0ed2874d3fb1d1d23"
  },
  {
    "url": "img/back.png",
    "revision": "8d42ba3ab31405e189480cfa257dfcc1"
  },
  {
    "url": "img/bg.jpg",
    "revision": "e90b9653d8fde43ea1292cace3b9fa02"
  },
  {
    "url": "img/bg.png",
    "revision": "e90b9653d8fde43ea1292cace3b9fa02"
  },
  {
    "url": "img/bg3.jpg",
    "revision": "ec37ae09aa64cb5c22a429f612941acf"
  },
  {
    "url": "img/bgGray.jpg",
    "revision": "a06ed4597c24c9ced0bfd72b12aefa77"
  },
  {
    "url": "img/bgSpace.jpg",
    "revision": "3d537e566c20f3717b426305c5d81558"
  },
  {
    "url": "img/bird.png",
    "revision": "404dbc2bbc7f65e70544cd21a7e733da"
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
    "url": "img/exit.png",
    "revision": "03b93f1a59fb6731e71deca0e7aa6903"
  },
  {
    "url": "img/facebook.png",
    "revision": "5cadf3e9e44dd3f5d90f920a110f862a"
  },
  {
    "url": "img/fg.jpg",
    "revision": "83756fcd20ef56504ba45c70ac3427f3"
  },
  {
    "url": "img/fg3.jpg",
    "revision": "294b019ec81cbc79d55c39506d1e9293"
  },
  {
    "url": "img/fgGray.jpg",
    "revision": "67d22f3f599ad33c08195bfc98b8aa67"
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
    "revision": "492463ea2a869218791b06c52cc81e42"
  },
  {
    "url": "img/leaders.png",
    "revision": "5ef5696f879b3ed44da0016f32bcff0a"
  },
  {
    "url": "img/leave.png",
    "revision": "e45c34760954e91d8a2aaa179fb878dc"
  },
  {
    "url": "img/menu.png",
    "revision": "c1d6ad659b8c9e81d0269f77295bacad"
  },
  {
    "url": "img/name.png",
    "revision": "ad6ca560372f84242f5251fabba1cd8e"
  },
  {
    "url": "img/pause.png",
    "revision": "0cff2532d75bb0222b4453eca3280136"
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
    "revision": "d19f9b090ecdba3db3feec310eb85973"
  },
  {
    "url": "img/restart.png",
    "revision": "9ae73d4e6e37b47222df27843549e341"
  },
  {
    "url": "img/score-icon.jpg",
    "revision": "002dcfd93ec08b0f75107f88dc56170e"
  },
  {
    "url": "img/score-table.png",
    "revision": "bcf8e96564a5537679e30b2ac51d8aa0"
  },
  {
    "url": "img/skin_1.jpg",
    "revision": "273cac5a218e9a8454f6f654c71a03dc"
  },
  {
    "url": "img/skin_2.jpg",
    "revision": "6608886f1ae2954fd9dfa700383c3058"
  },
  {
    "url": "img/skin_3.jpg",
    "revision": "2909687d4a2dd0f1928bd35a5bfd8625"
  },
  {
    "url": "img/skin_4.jpg",
    "revision": "3fc47f31f84500f6e3a304a6327bccf9"
  },
  {
    "url": "img/skins-icon.jpg",
    "revision": "3466526be58a2d80338aa3836c65bd60"
  },
  {
    "url": "img/skins.png",
    "revision": "37dbacc1c8db00065e60001a222cc3aa"
  },
  {
    "url": "img/table.png",
    "revision": "27b6eed81c6cd9b664935144c57ac0d1"
  },
  {
    "url": "img/twitter.png",
    "revision": "fa5e70a1506bffdb865e99c5360b610e"
  },
  {
    "url": "index.html",
    "revision": "9ddfa096a38a43ff9058411dd7472d51"
  },
  {
    "url": "input.f9f45339.png",
    "revision": "492463ea2a869218791b06c52cc81e42"
  },
  {
    "url": "leaders.925726bf.png",
    "revision": "5ef5696f879b3ed44da0016f32bcff0a"
  },
  {
    "url": "leave.9364070b.png",
    "revision": "e45c34760954e91d8a2aaa179fb878dc"
  },
  {
    "url": "menu.e75e801c.png",
    "revision": "c1d6ad659b8c9e81d0269f77295bacad"
  },
  {
    "url": "name.7d723b4e.png",
    "revision": "ad6ca560372f84242f5251fabba1cd8e"
  },
  {
    "url": "pause.eef8aae1.png",
    "revision": "0cff2532d75bb0222b4453eca3280136"
  },
  {
    "url": "phone.a67fd003.png",
    "revision": "7874cfbcce1c863d472f6d5413103474"
  },
  {
    "url": "play.ee69ab1e.png",
    "revision": "d19f9b090ecdba3db3feec310eb85973"
  },
  {
    "url": "restart.1815c151.png",
    "revision": "9ae73d4e6e37b47222df27843549e341"
  },
  {
    "url": "score-icon.e113f657.jpg",
    "revision": "002dcfd93ec08b0f75107f88dc56170e"
  },
  {
    "url": "skin_1.937be60e.jpg",
    "revision": "273cac5a218e9a8454f6f654c71a03dc"
  },
  {
    "url": "skin_2.f49c587a.jpg",
    "revision": "6608886f1ae2954fd9dfa700383c3058"
  },
  {
    "url": "skin_3.c7767c7e.jpg",
    "revision": "2909687d4a2dd0f1928bd35a5bfd8625"
  },
  {
    "url": "skin_4.2a685150.jpg",
    "revision": "3fc47f31f84500f6e3a304a6327bccf9"
  },
  {
    "url": "skins-icon.5dd099d4.jpg",
    "revision": "3466526be58a2d80338aa3836c65bd60"
  },
  {
    "url": "skins.8ff2091b.png",
    "revision": "37dbacc1c8db00065e60001a222cc3aa"
  },
  {
    "url": "styles.1bbb63f5.css",
    "revision": "1d7ca8fdf7e05506a372057d844a3f27"
  },
  {
    "url": "table.c407dc40.png",
    "revision": "27b6eed81c6cd9b664935144c57ac0d1"
  },
  {
    "url": "twitter.cf3576d8.png",
    "revision": "fa5e70a1506bffdb865e99c5360b610e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("index.html");
