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
    "url": "accept.a82f3626.png",
    "revision": "57214046bad5e6ac32e7b6159b5f9f0c"
  },
  {
    "url": "accept.e9230d10.png",
    "revision": "57214046bad5e6ac32e7b6159b5f9f0c"
  },
  {
    "url": "anton.01f8df56.png",
    "revision": "210b61da89748384a4063aa331a2d8b7"
  },
  {
    "url": "anton.a1ce0fac.png",
    "revision": "210b61da89748384a4063aa331a2d8b7"
  },
  {
    "url": "back.6501abe3.png",
    "revision": "506842d27146e52c82a570c778bbadde"
  },
  {
    "url": "back.a15a98ef.png",
    "revision": "506842d27146e52c82a570c778bbadde"
  },
  {
    "url": "bg.780a80f7.jpg",
    "revision": "e90b9653d8fde43ea1292cace3b9fa02"
  },
  {
    "url": "bg.f47cb84e.jpg",
    "revision": "e90b9653d8fde43ea1292cace3b9fa02"
  },
  {
    "url": "bg3.698868f0.jpg",
    "revision": "ec37ae09aa64cb5c22a429f612941acf"
  },
  {
    "url": "bg3.fa999dd3.jpg",
    "revision": "ec37ae09aa64cb5c22a429f612941acf"
  },
  {
    "url": "bgGray.1892ae9a.jpg",
    "revision": "a06ed4597c24c9ced0bfd72b12aefa77"
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
    "url": "bgSpace.2b60c625.jpg",
    "revision": "3d537e566c20f3717b426305c5d81558"
  },
  {
    "url": "bird.e166bc25.png",
    "revision": "404dbc2bbc7f65e70544cd21a7e733da"
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
    "url": "bird3.657a2a55.png",
    "revision": "0984bd779ee126f37bf7525f8ae105a9"
  },
  {
    "url": "birdCat.06c6f54c.png",
    "revision": "01f2e947277a2a0d19474afc60606b23"
  },
  {
    "url": "birdCat.4f62d25b.png",
    "revision": "01f2e947277a2a0d19474afc60606b23"
  },
  {
    "url": "birdGray.83ec92d3.png",
    "revision": "42911a7354aac4c238c631917865f214"
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
    "url": "chack.d7b09fca.png",
    "revision": "4e65af963b1b52c53586ffc912f17166"
  },
  {
    "url": "exit.9e924640.png",
    "revision": "82013500a27deda6aac6fd101dab7bc4"
  },
  {
    "url": "exit.c3090ba1.png",
    "revision": "82013500a27deda6aac6fd101dab7bc4"
  },
  {
    "url": "facebook.a098c94f.png",
    "revision": "5cadf3e9e44dd3f5d90f920a110f862a"
  },
  {
    "url": "facebook.eae879cf.png",
    "revision": "5cadf3e9e44dd3f5d90f920a110f862a"
  },
  {
    "url": "fail.100cdbd2.mp3",
    "revision": "1c791e772e7472dd5ffc8610c98f3e40"
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
    "url": "fg.9b141d73.jpg",
    "revision": "83756fcd20ef56504ba45c70ac3427f3"
  },
  {
    "url": "fg3.4ae7df0f.jpg",
    "revision": "294b019ec81cbc79d55c39506d1e9293"
  },
  {
    "url": "fg3.fed2d088.jpg",
    "revision": "294b019ec81cbc79d55c39506d1e9293"
  },
  {
    "url": "fgGray.10ada962.jpg",
    "revision": "67d22f3f599ad33c08195bfc98b8aa67"
  },
  {
    "url": "fgGray.bec2a3c5.jpg",
    "revision": "67d22f3f599ad33c08195bfc98b8aa67"
  },
  {
    "url": "fgRainbow.0af868e3.png",
    "revision": "019938be9f2cedaf1d3fe0c75c551839"
  },
  {
    "url": "fgRainbow.29648938.png",
    "revision": "019938be9f2cedaf1d3fe0c75c551839"
  },
  {
    "url": "flappy-background_lg.5eeb2ab3.png",
    "revision": "46533880b2755e523dd474be76d9274c"
  },
  {
    "url": "flappy-background_lg.db223402.png",
    "revision": "46533880b2755e523dd474be76d9274c"
  },
  {
    "url": "flappy-bird-logo.4496839b.png",
    "revision": "26c83acb230532a2fd3a61f63bb22d48"
  },
  {
    "url": "flappy-bird-logo.b186aca7.png",
    "revision": "26c83acb230532a2fd3a61f63bb22d48"
  },
  {
    "url": "flappy-icon.76ead062.png",
    "revision": "ca4d693f51c7527dddf6892ac110fcef"
  },
  {
    "url": "flappy-icon.eeef2d08.png",
    "revision": "ca4d693f51c7527dddf6892ac110fcef"
  },
  {
    "url": "fly.152fb99f.mp3",
    "revision": "115aeb7ab95ecaf6879d56b9b4d2185b"
  },
  {
    "url": "fly.fd1a2368.mp3",
    "revision": "115aeb7ab95ecaf6879d56b9b4d2185b"
  },
  {
    "url": "game-over.44f12db7.png",
    "revision": "ceb758d9c7cfea90c250215aa5d5aae1"
  },
  {
    "url": "game-over.c1665d07.png",
    "revision": "ceb758d9c7cfea90c250215aa5d5aae1"
  },
  {
    "url": "ghost.af4bd7f0.png",
    "revision": "9a90a526ac20adb9a2f8402a887866ee"
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
    "url": "google.b88edc06.png",
    "revision": "7d13a5c361e926af029a4f85a95c9541"
  },
  {
    "url": "horse.1adec3fc.mp3",
    "revision": "6d6554d870f65bd14782b13ccc1ff129"
  },
  {
    "url": "horse.b4c91810.mp3",
    "revision": "6d6554d870f65bd14782b13ccc1ff129"
  },
  {
    "url": "icon-128x128.7a8b05c5.png",
    "revision": "17686ab650d2da340ae63a5ff4ff970e"
  },
  {
    "url": "icon-128x128.c5ab3270.png",
    "revision": "17686ab650d2da340ae63a5ff4ff970e"
  },
  {
    "url": "icon-144x144.270707cc.png",
    "revision": "2b48c7376fbf70bfc828960bd8b8145f"
  },
  {
    "url": "icon-144x144.4276bfe6.png",
    "revision": "2b48c7376fbf70bfc828960bd8b8145f"
  },
  {
    "url": "icon-152x152.11df3a8b.png",
    "revision": "f5aea2f17959d9d2b527997dc6cb5a8b"
  },
  {
    "url": "icon-152x152.ca105cc4.png",
    "revision": "f5aea2f17959d9d2b527997dc6cb5a8b"
  },
  {
    "url": "icon-192x192.3ec8b2cd.png",
    "revision": "968656236afc5d2d0fa77310b6b646d3"
  },
  {
    "url": "icon-192x192.e23a4797.png",
    "revision": "968656236afc5d2d0fa77310b6b646d3"
  },
  {
    "url": "icon-384x384.26eb4846.png",
    "revision": "461211446dffd81545bb2261257a1f2f"
  },
  {
    "url": "icon-384x384.27d864af.png",
    "revision": "461211446dffd81545bb2261257a1f2f"
  },
  {
    "url": "icon-512x512.d765aa0c.png",
    "revision": "28e6e1627f587d89f36c4c3643702686"
  },
  {
    "url": "icon-512x512.de4f656d.png",
    "revision": "28e6e1627f587d89f36c4c3643702686"
  },
  {
    "url": "icon-72x72.919a13e6.png",
    "revision": "315dd3ccee50415c5abbbd662732e1e8"
  },
  {
    "url": "icon-72x72.a9091fb6.png",
    "revision": "315dd3ccee50415c5abbbd662732e1e8"
  },
  {
    "url": "icon-96x96.1ba4a133.png",
    "revision": "077c2ec0cf3a8e428cf51269b59b898f"
  },
  {
    "url": "icon-96x96.429576af.png",
    "revision": "077c2ec0cf3a8e428cf51269b59b898f"
  },
  {
    "url": "index.html",
    "revision": "9f0bf251a14634b97d5677e84a3111c3"
  },
  {
    "url": "index.js",
    "revision": "561f987fa767874829b3aa8b19e3a0c6"
  },
  {
    "url": "input.4d384895.png",
    "revision": "492463ea2a869218791b06c52cc81e42"
  },
  {
    "url": "input.f9f45339.png",
    "revision": "492463ea2a869218791b06c52cc81e42"
  },
  {
    "url": "leaders.2b2592f8.png",
    "revision": "68dc4d882e1697a86f60bb1e2e1891c6"
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
    "url": "leave.28c3a9f6.png",
    "revision": "8ebbc9f3c49ecc913ce659949f3c618d"
  },
  {
    "url": "manifest.20e523d6.webmanifest",
    "revision": "9999067c9946383691d4f8f435f14f98"
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
    "url": "menu.47b67758.png",
    "revision": "16de055749471a5ddd2ca9612c34d41b"
  },
  {
    "url": "name.702db1e7.png",
    "revision": "effefb0f8faccbf774f5e6dd5cfa8cc6"
  },
  {
    "url": "name.77411783.png",
    "revision": "effefb0f8faccbf774f5e6dd5cfa8cc6"
  },
  {
    "url": "pause.32c2a9a9.png",
    "revision": "a25bd0604621bea95e175d76875fc5e3"
  },
  {
    "url": "pause.c2116398.png",
    "revision": "a25bd0604621bea95e175d76875fc5e3"
  },
  {
    "url": "phone.1940b223.png",
    "revision": "7874cfbcce1c863d472f6d5413103474"
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
    "url": "pipeBottom.9e92c7ef.png",
    "revision": "dbed332420382640395641ecfb6e4866"
  },
  {
    "url": "pipeBottomGray.0bbadd97.png",
    "revision": "af4a7c391877cd82e1a63ac9d69dd09c"
  },
  {
    "url": "pipeBottomGray.e68cdddc.png",
    "revision": "af4a7c391877cd82e1a63ac9d69dd09c"
  },
  {
    "url": "pipeBottomOrange.37a5675b.png",
    "revision": "f768c892ed176b1b21f240eb1251eed7"
  },
  {
    "url": "pipeBottomOrange.dca3c2fa.png",
    "revision": "f768c892ed176b1b21f240eb1251eed7"
  },
  {
    "url": "pipeBottomPink.463949f2.png",
    "revision": "c6b46879a99625c44420ec4344c8c8d9"
  },
  {
    "url": "pipeBottomPink.a67e8681.png",
    "revision": "c6b46879a99625c44420ec4344c8c8d9"
  },
  {
    "url": "pipeUp.7dbd0d98.png",
    "revision": "3b4ac1b49b46129dbca3000cd5b4d8e0"
  },
  {
    "url": "pipeUp.f9cbed87.png",
    "revision": "3b4ac1b49b46129dbca3000cd5b4d8e0"
  },
  {
    "url": "pipeUpGray.4accac8a.png",
    "revision": "5c4d267b2121568da7f88fbbdb61d4f2"
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
    "url": "pipeUpOrange.fea33b1e.png",
    "revision": "d80c322423cef637648131765ee14c89"
  },
  {
    "url": "pipeUpPink.5f59d00f.png",
    "revision": "fce799f1a8e9897ab65165f525690675"
  },
  {
    "url": "pipeUpPink.6cfba04a.png",
    "revision": "fce799f1a8e9897ab65165f525690675"
  },
  {
    "url": "play.6951e123.png",
    "revision": "f78b758238a15cfabec468b5978c6454"
  },
  {
    "url": "play.f57eac61.png",
    "revision": "f78b758238a15cfabec468b5978c6454"
  },
  {
    "url": "punch.29919b3f.mp3",
    "revision": "88d8e4cc3a8a5b290e4df253de8f156f"
  },
  {
    "url": "punch.b75a873e.mp3",
    "revision": "88d8e4cc3a8a5b290e4df253de8f156f"
  },
  {
    "url": "rainbow_cat.5740c4cc.png",
    "revision": "7b2f21841f6ebd447aa97d6375caa661"
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
    "url": "restart.4845a8ae.png",
    "revision": "4adafb0e5728686ad57084972024f20a"
  },
  {
    "url": "rip.1a26461b.png",
    "revision": "d19adc7bcc7db17727f906f6b07f5a39"
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
    "url": "score-icon.e69dd579.jpg",
    "revision": "cac4f49378f03dbacb96f7cc4cd919eb"
  },
  {
    "url": "score.18c5c818.mp3",
    "revision": "30b534d8c4c5e9617a87f8e96949a090"
  },
  {
    "url": "score.c336131a.mp3",
    "revision": "30b534d8c4c5e9617a87f8e96949a090"
  },
  {
    "url": "skin_1.40355dfb.jpg",
    "revision": "fe8d90ac82e4cfbf5bb81f5de432c78f"
  },
  {
    "url": "skin_1.cb693f1a.jpg",
    "revision": "fe8d90ac82e4cfbf5bb81f5de432c78f"
  },
  {
    "url": "skin_2.068efd33.jpg",
    "revision": "6608886f1ae2954fd9dfa700383c3058"
  },
  {
    "url": "skin_2.f49c587a.jpg",
    "revision": "6608886f1ae2954fd9dfa700383c3058"
  },
  {
    "url": "skin_3.70eb693a.jpg",
    "revision": "2909687d4a2dd0f1928bd35a5bfd8625"
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
    "url": "skin_4.aabe0d07.jpg",
    "revision": "3fc47f31f84500f6e3a304a6327bccf9"
  },
  {
    "url": "skin_4.f1c29000.mp3",
    "revision": "0be746e2b58ca43f66aa854bc5cc319c"
  },
  {
    "url": "skins-icon.a7417a5f.jpg",
    "revision": "e4b8469e8fe48009c57fdab94919ec44"
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
    "url": "skins.90a690a6.png",
    "revision": "d43dbb644d432b3a4b8cba3313c0fdcb"
  },
  {
    "url": "src.ccbd9ec6.js",
    "revision": "c9c6a05c69e515cd70168587b3e14fb1"
  },
  {
    "url": "src.e31bb0bc.js",
    "revision": "8ea312253b624f9a0541174adf9c8ae5"
  },
  {
    "url": "styles.78152145.css",
    "revision": "eea61a6ac02f7becfaae3d473c7838f8"
  },
  {
    "url": "styles.8986bff4.css",
    "revision": "71a6918b8465f7f7b02e6dc090c5cc34"
  },
  {
    "url": "styles.8986bff4.js",
    "revision": "00433fe4d8a7a73db75eeedd823ae068"
  },
  {
    "url": "table.082d62e7.png",
    "revision": "27b6eed81c6cd9b664935144c57ac0d1"
  },
  {
    "url": "table.c407dc40.png",
    "revision": "27b6eed81c6cd9b664935144c57ac0d1"
  },
  {
    "url": "twitter.73c1a9b2.png",
    "revision": "fa5e70a1506bffdb865e99c5360b610e"
  },
  {
    "url": "twitter.cf3576d8.png",
    "revision": "fa5e70a1506bffdb865e99c5360b610e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("index.html");
