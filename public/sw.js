if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7263a93a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c9d32c76dfd224ddf15297092069aee8"},{url:"/_next/static/ZDgishryY7jtmPio-FjQA/_buildManifest.js",revision:"39c04c408085e9912adc25c833c9fca1"},{url:"/_next/static/ZDgishryY7jtmPio-FjQA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/472-1808d0902d2f1c85.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/986-16838d80ea0c82b6.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/app/_not-found-2e6eb7e254a87a96.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/app/game/%5Bid%5D/page-70107a4287b19002.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/app/layout-7877faf2dcaf6dd6.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/app/page-62de75bcde3d132b.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/fd9d1056-093553555d54bd99.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/main-58c64551ed3b837d.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/main-app-72747d88ee44dad0.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/pages/_app-ee276fea40a4b191.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d5dd3b44ccc2bf86.js",revision:"ZDgishryY7jtmPio-FjQA"},{url:"/_next/static/css/4394038f310b00ab.css",revision:"4394038f310b00ab"},{url:"/_next/static/css/f946d1fd2b7fbb75.css",revision:"f946d1fd2b7fbb75"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/die.41b99f99.webp",revision:"52b8c0e8a5ed506261327bb30820eb1f"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/prize.2cf6515a.jpg",revision:"ade075fc98489e9a2614416e1d5d8b72"},{url:"/_next/static/media/square-svgrepo-com.0d7b2bdc.svg",revision:"3c27a50c3152c9638255996f3fd83840"},{url:"/_next/static/media/triangle-svgrepo-com.bbeab9f1.svg",revision:"5211a3614737ce7a9073a69c009a3001"},{url:"/android-chrome-192x192.png",revision:"332deb49f949bbfd35726f9c0067c817"},{url:"/android-chrome-512x512.png",revision:"84ba413424a66127326df11af2de266f"},{url:"/apple-touch-icon.png",revision:"3ceb2fbe9d991f69194d320acbfc0c27"},{url:"/die.webp",revision:"52b8c0e8a5ed506261327bb30820eb1f"},{url:"/favicon-16x16.png",revision:"d81b56c8893bcc51d76133b3c8ef442d"},{url:"/favicon-32x32.png",revision:"8a97e4a40811fb729d8d46d930fd4996"},{url:"/favicon.ico",revision:"03549b74c07e9234803fa1293574f380"},{url:"/manifest.json",revision:"8ff1bab8fa98374d7fdd5e7d9c687e89"},{url:"/music sg.m4a",revision:"6a63d907dc6111ee5e9d360d83aa8b76"},{url:"/prize.jpg",revision:"ade075fc98489e9a2614416e1d5d8b72"},{url:"/square-svgrepo-com.svg",revision:"3c27a50c3152c9638255996f3fd83840"},{url:"/squidgamebg.webp",revision:"016c318ec01f1074457e01e03b7f47ef"},{url:"/triangle-svgrepo-com.svg",revision:"5211a3614737ce7a9073a69c009a3001"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
