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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b5f191aed2b7d2aa52ee14c3ed969392"
  },
  {
    "url": "assets/css/0.styles.748a8065.css",
    "revision": "09dd3c1a0b457ee400fabc0ff4f51cfa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.548cb765.js",
    "revision": "ec4bb58480c00b61d3cb72733846a50f"
  },
  {
    "url": "assets/js/11.11246e07.js",
    "revision": "4359eb58616c9c8b59236fbc38ec552a"
  },
  {
    "url": "assets/js/12.21930df2.js",
    "revision": "197b5b800273673ef32ccd84b091e167"
  },
  {
    "url": "assets/js/13.6178ff22.js",
    "revision": "9096194f42f79463240ade69fdbf1042"
  },
  {
    "url": "assets/js/14.ea482f42.js",
    "revision": "a743204ce572fcb48e12e76aa713234b"
  },
  {
    "url": "assets/js/15.c22956d8.js",
    "revision": "e4676d7e9356f90b41c4b5303f149c85"
  },
  {
    "url": "assets/js/2.7ea3dc2c.js",
    "revision": "e2fb56e010ec9f0a87d9ae87a89ce4fd"
  },
  {
    "url": "assets/js/3.f91aeaa5.js",
    "revision": "3c908349f3dd59ba267910760cea6e5d"
  },
  {
    "url": "assets/js/4.ada9806c.js",
    "revision": "0c18c71a97ddf8a6d50681ea8f56166c"
  },
  {
    "url": "assets/js/5.73ff98f8.js",
    "revision": "0d578ba5ad3f233cc2916415b948b86c"
  },
  {
    "url": "assets/js/6.b9acc3ac.js",
    "revision": "2fb51454222bff261f9febaa2b38424e"
  },
  {
    "url": "assets/js/7.af3c4bf8.js",
    "revision": "9107d372a299139aa9c4923776fa0121"
  },
  {
    "url": "assets/js/8.f98a4fe3.js",
    "revision": "13acc6ab894e63a3bfd938a14197168d"
  },
  {
    "url": "assets/js/9.119f93f0.js",
    "revision": "2c3dd5f73975d2dcba9a71bea9ff8fce"
  },
  {
    "url": "assets/js/app.faf69b6a.js",
    "revision": "4c258b3028af754c1863099963e9024d"
  },
  {
    "url": "cat-08.html",
    "revision": "4ec226605088278664aed0254a93f381"
  },
  {
    "url": "errors.html",
    "revision": "f76ce24495ca299ce281c9a4d5c6af94"
  },
  {
    "url": "get-started.html",
    "revision": "81827e35188fc9f5f0e5806278962071"
  },
  {
    "url": "icon.svg",
    "revision": "55ac3059d5a16443be4c18fb53a623c9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "be52b4ac63ef1423980e7320a886cc99"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "6af00bbbdc6aa03aa60b46cce4d1c893"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "935142d04bbdec4b242e23712803186f"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "af3d4337f21222dafdb3fd12f1e77a3b"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "c4f829c5e88b46a2b8c36705160ad844"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "ba74737bf0781dedc3512de1bb2995a6"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "f97be77924d3fa9496b2adb7c3fd6e7c"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "f471d34ed83620c3fa83fd7ba65b8fc8"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "de54215a5218c550a97c8e0b03da3bb1"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "7885bd1273c5360926919dd69d6fa364"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "4b0a321e589697fc07535c0e50a28e56"
  },
  {
    "url": "index.html",
    "revision": "728a1d5fd65c4907553b83bc999d4a58"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
