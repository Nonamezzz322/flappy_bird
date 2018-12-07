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
    "url": "accept.e9230d10.png",
    "revision": "57214046bad5e6ac32e7b6159b5f9f0c"
  },
  {
    "url": "back.6501abe3.png",
    "revision": "506842d27146e52c82a570c778bbadde"
  },
  {
    "url": "bg.780a80f7.jpg",
    "revision": "e90b9653d8fde43ea1292cace3b9fa02"
  },
  {
    "url": "bg3.698868f0.jpg",
    "revision": "ec37ae09aa64cb5c22a429f612941acf"
  },
  {
    "url": "bgGray.ca2a5f89.jpg",
    "revision": "a06ed4597c24c9ced0bfd72b12aefa77"
  },
  {
    "url": "bgSpace.04498f20.jpg",
    "revision": "3d537e566c20f3717b426305c5d81558"
  },
  {
    "url": "bird.f0add8c5.png",
    "revision": "404dbc2bbc7f65e70544cd21a7e733da"
  },
  {
    "url": "bird3.1f1f52bc.png",
    "revision": "0984bd779ee126f37bf7525f8ae105a9"
  },
  {
    "url": "birdCat.4f62d25b.png",
    "revision": "01f2e947277a2a0d19474afc60606b23"
  },
  {
    "url": "birdGray.bf57aee1.png",
    "revision": "42911a7354aac4c238c631917865f214"
  },
  {
    "url": "chack.09d09947.png",
    "revision": "4e65af963b1b52c53586ffc912f17166"
  },
  {
    "url": "dart.26ae1065.png",
    "revision": "27675970e6d0bb1da3349956d28cb383"
  },
  {
    "url": "exit.9e924640.png",
    "revision": "82013500a27deda6aac6fd101dab7bc4"
  },
  {
    "url": "facebook.a098c94f.png",
    "revision": "5cadf3e9e44dd3f5d90f920a110f862a"
  },
  {
    "url": "fail.9bc4fc69.mp3",
    "revision": "1c791e772e7472dd5ffc8610c98f3e40"
  },
  {
    "url": "fg.3f12a1ea.jpg",
    "revision": "83756fcd20ef56504ba45c70ac3427f3"
  },
  {
    "url": "fg3.4ae7df0f.jpg",
    "revision": "294b019ec81cbc79d55c39506d1e9293"
  },
  {
    "url": "fgGray.10ada962.jpg",
    "revision": "67d22f3f599ad33c08195bfc98b8aa67"
  },
  {
    "url": "fgRainbow.29648938.png",
    "revision": "019938be9f2cedaf1d3fe0c75c551839"
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
    "url": "fly.fd1a2368.mp3",
    "revision": "115aeb7ab95ecaf6879d56b9b4d2185b"
  },
  {
    "url": "game-over.c1665d07.png",
    "revision": "ceb758d9c7cfea90c250215aa5d5aae1"
  },
  {
    "url": "ghost.efe93a02.png",
    "revision": "9a90a526ac20adb9a2f8402a887866ee"
  },
  {
    "url": "google.7dac0288.png",
    "revision": "7d13a5c361e926af029a4f85a95c9541"
  },
  {
    "url": "icon-128x128.7a8b05c5.png",
    "revision": "17686ab650d2da340ae63a5ff4ff970e"
  },
  {
    "url": "icon-144x144.270707cc.png",
    "revision": "2b48c7376fbf70bfc828960bd8b8145f"
  },
  {
    "url": "icon-152x152.11df3a8b.png",
    "revision": "f5aea2f17959d9d2b527997dc6cb5a8b"
  },
  {
    "url": "icon-192x192.3ec8b2cd.png",
    "revision": "968656236afc5d2d0fa77310b6b646d3"
  },
  {
    "url": "icon-384x384.26eb4846.png",
    "revision": "461211446dffd81545bb2261257a1f2f"
  },
  {
    "url": "icon-512x512.d765aa0c.png",
    "revision": "28e6e1627f587d89f36c4c3643702686"
  },
  {
    "url": "icon-72x72.919a13e6.png",
    "revision": "315dd3ccee50415c5abbbd662732e1e8"
  },
  {
    "url": "icon-96x96.1ba4a133.png",
    "revision": "077c2ec0cf3a8e428cf51269b59b898f"
  },
  {
    "url": "index.html",
    "revision": "18bb8b7059b7c05b8e178d23a9fd3610"
  },
  {
    "url": "input.f9f45339.png",
    "revision": "492463ea2a869218791b06c52cc81e42"
  },
  {
    "url": "leaders.7d4f48fb.png",
    "revision": "68dc4d882e1697a86f60bb1e2e1891c6"
  },
  {
    "url": "leave.16b0604c.png",
    "revision": "8ebbc9f3c49ecc913ce659949f3c618d"
  },
  {
    "url": "manifest.75d56f4a.webmanifest",
    "revision": "1195a7d875d9600d1f8ca92bc4f61cf6"
  },
  {
    "url": "menu.16d09928.png",
    "revision": "16de055749471a5ddd2ca9612c34d41b"
  },
  {
    "url": "name.77411783.png",
    "revision": "effefb0f8faccbf774f5e6dd5cfa8cc6"
  },
  {
    "url": "pause.c2116398.png",
    "revision": "a25bd0604621bea95e175d76875fc5e3"
  },
  {
    "url": "phone.a67fd003.png",
    "revision": "7874cfbcce1c863d472f6d5413103474"
  },
  {
    "url": "pipeBottom.92afd5f5.png",
    "revision": "dbed332420382640395641ecfb6e4866"
  },
  {
    "url": "pipeBottomGray.0bbadd97.png",
    "revision": "af4a7c391877cd82e1a63ac9d69dd09c"
  },
  {
    "url": "pipeBottomOrange.dca3c2fa.png",
    "revision": "f768c892ed176b1b21f240eb1251eed7"
  },
  {
    "url": "pipeBottomPink.a67e8681.png",
    "revision": "c6b46879a99625c44420ec4344c8c8d9"
  },
  {
    "url": "pipeUp.f9cbed87.png",
    "revision": "3b4ac1b49b46129dbca3000cd5b4d8e0"
  },
  {
    "url": "pipeUpGray.cc44c988.png",
    "revision": "5c4d267b2121568da7f88fbbdb61d4f2"
  },
  {
    "url": "pipeUpOrange.3871e647.png",
    "revision": "d80c322423cef637648131765ee14c89"
  },
  {
    "url": "pipeUpPink.5f59d00f.png",
    "revision": "fce799f1a8e9897ab65165f525690675"
  },
  {
    "url": "play.6951e123.png",
    "revision": "f78b758238a15cfabec468b5978c6454"
  },
  {
    "url": "punch.29919b3f.mp3",
    "revision": "88d8e4cc3a8a5b290e4df253de8f156f"
  },
  {
    "url": "rainbow_cat.bb9e05ef.png",
    "revision": "7b2f21841f6ebd447aa97d6375caa661"
  },
  {
    "url": "restart.1d900eb0.png",
    "revision": "4adafb0e5728686ad57084972024f20a"
  },
  {
    "url": "rip.e95fe758.png",
    "revision": "d19adc7bcc7db17727f906f6b07f5a39"
  },
  {
    "url": "score-icon.90a10202.jpg",
    "revision": "cac4f49378f03dbacb96f7cc4cd919eb"
  },
  {
    "url": "score.18c5c818.mp3",
    "revision": "30b534d8c4c5e9617a87f8e96949a090"
  },
  {
    "url": "skin_1.cb693f1a.jpg",
    "revision": "fe8d90ac82e4cfbf5bb81f5de432c78f"
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
    "url": "skin_4.20abd527.mp3",
    "revision": "0be746e2b58ca43f66aa854bc5cc319c"
  },
  {
    "url": "skin_4.2a685150.jpg",
    "revision": "3fc47f31f84500f6e3a304a6327bccf9"
  },
  {
    "url": "skins-icon.a85b3f32.jpg",
    "revision": "e4b8469e8fe48009c57fdab94919ec44"
  },
  {
    "url": "skins.5b9ec823.png",
    "revision": "d43dbb644d432b3a4b8cba3313c0fdcb"
  },
  {
    "url": "src.9d1db8fd.js",
    "revision": "0366ed1139dcb4b3e67b38ed19619a73"
  },
  {
    "url": "styles.78152145.css",
    "revision": "eea61a6ac02f7becfaae3d473c7838f8"
  },
  {
    "url": "sword.14ee1961.mp3",
    "revision": "73ed9e9c5cb1e700ad44ed51a1405d6f"
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
