(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>g});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),s=t(417),c=t.n(s),l=new URL(t(869),t.b),d=new URL(t(227),t.b),u=new URL(t(193),t.b),p=a()(o()),f=c()(l),h=c()(d),m=c()(u);p.push([n.id,`@font-face {\n  font-family: 'norse-bold';\n  src: url(${f});\n}\n\n@font-face {\n  font-family: 'ktf-roadbrush';\n  src: url(${h});\n}\n\n@font-face {\n  font-family: 'inter-regular';\n  src: url(${m});\n}\n\n:root {\n  height: 100%;\n  --header-bg: #A294F9;\n  --main-bg: #F5EFFF;\n  --footer-bg: #E5D9F2;\n  --text-clr: #303030;\n  --accent-clr: #CDC1FF;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  color: var(--text-clr);\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  background-color: var(--header-bg);\n  box-shadow: 0px 2px 6px;\n  margin-bottom: 5px\n}\n\nmain {\n  flex-grow: 1;\n  background-color: var(--main-bg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter {\n  padding: 8px;\n  background-color: var(--footer-bg);\n}\n\nh1 {\n  display: flex;\n  align-items: center;\n  font-family: 'norse-bold';\n}\n\nh1 > img {\n  width: 52px;\n  height: 52px;\n}\n\nfooter p {\n  font-size: 1rem;\n  font-family: "ktf-roadbrush";\n}\n\nfooter a {\n  color: inherit;\n  display: inline-flex;\n  gap: 5px;\n}\n\nfooter img {\n  width: 1rem;\n  height: 1rem;\n  align-self: center;\n}\n\n.weather-card {\n  width: 300px;\n  display: grid;\n  grid-template-rows: 25px 35px 1fr;\n  gap: 8px;\n}\n\n.search-bar {\n  display: flex;\n  gap: 5px;\n}\n\ninput {\n  width: 100%;\n  padding: 2px 4px;\n  border: none;\n  border-radius: 5px;\n  background-color: #e8e8e8;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: 0px 2px 6px;\n}\n\n.search-bar > button {\n  padding: 2px 4px;\n  border: none;\n  border-radius: 5px;\n  color: var(--main-bg);\n  background: var(--text-clr);\n  font-family: 'inter-regular';\n}\n\n.location-info {\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 2px 6px;\n  border-radius: 5px;\n  padding: 0 5px;\n}\n\n.location-info > img {\n  width: 1rem;\n  height: 1rem;\n}\n\n.location-info > p {\n  font-size: 1rem;\n  font-weight: 600;\n  font-family: 'inter-regular';\n}\n\n.weather-info {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n\n.col {\n  box-shadow: 0px 2px 6px;\n  padding: 5px;\n  border-radius: 5px;\n  display: grid;\n  grid-template-rows: 82px 200px;\n}\n\n.text > p {\n  font-family: 'inter-regular';\n}\n\n.bold {\n  font-weight: 600;\n}\n\n.temp {\n  font-size: 2rem;\n  display: flex;\n}\n\n.small {\n  font-size: 0.9rem;\n  padding: 2px 0;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.loading-component {\n  border-radius: 5px;\n  grid-row: 2 / 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loading-component > img:nth-child(1) {\n  width: 25px;\n  height: 25px;\n}\n\n.loading-component > img:nth-child(n+2) {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\n\n.hide {\n  display: none;\n}\n\n.greyed-out {\n  color: rgb(48 48 48 / .5);\n}\n\n.temp > button, span.greyed-out {\n  font-family: 'inter-regular';\n  font-size: 1rem;\n  font-weight: 600;\n  border: none;\n  background: none;\n}\n\n.temp > button {\n  align-self: flex-start;\n}\n\n.gif > img {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  box-shadow: 0px 2px 6px;\n}`,""]);const g=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},193:(n,e,t)=>{n.exports=t.p+"e9b898342ed8036ee8ea.otf"},227:(n,e,t)=>{n.exports=t.p+"add5c592288cf79f386a.ttf"},869:(n,e,t)=>{n.exports=t.p+"5efe60ef5042faec1224.otf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),s=t(659),c=t.n(s),l=t(56),d=t.n(l),u=t(540),p=t.n(u),f=t(113),h=t.n(f),m=t(365),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals;const x=document.querySelector(".location-info>p"),b=[...document.querySelectorAll(".text>p")].slice(2),y=document.querySelector("span"),v=document.querySelectorAll(".gif"),w=document.querySelector("input"),A=document.querySelector("button"),C=document.querySelector(".loading-component"),S=document.querySelector(".location-info"),k=document.querySelector(".weather-info"),$=document.querySelector(".temp>button"),E=document.querySelectorAll(".temp>button")[1],q=C.querySelectorAll("img");let F,M;A.addEventListener("click",(async()=>{if(!w.value||M===w.value)return;M=w.value,S.setAttribute("class","location-info hide"),k.setAttribute("class","weather-info hide"),[...q].slice(1).forEach((n=>{n.setAttribute("class","hide")})),C.setAttribute("class","loading-component"),q[0].setAttribute("class","");const n=await async function(n){try{return await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?key=MCLJCAXDNQF9KKTXDQNEC63JL`)}catch(n){console.error(n.message)}}(M);if(void 0===n)q[0].setAttribute("class","hide"),q[2].setAttribute("class","");else if(n.ok){const e=await async function(n){return await n.json()}(n);F=function(n){const{address:e,currentConditions:t}=n,{conditions:r,feelslike:o,humidity:i,temp:a,windspeed:s}=t;return{address:e,conditions:r,feelslike:o,humidity:i,temp:a,windspeed:s}}(e);const t=(await async function(n){(n=n.toLowerCase()).includes(",")&&(n=n.split(",")[0]),"clear"===n?n+=" sky weather":n.includes("partially")&&(n=n.replace("partially","Partly"));const e=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=q7r5GoJBLCiQ2DtH8d7qLfjAIhWW79Ut&s=${n}`);return await e.json()}(F.conditions)).data.images.original.url;C.setAttribute("class","loading-component hide"),S.setAttribute("class","location-info"),function(n,e,t){x.textContent=`${n[0].toUpperCase()}${n.slice(1)}`,y.textContent=Math.ceil(e.temp),b[0].textContent=`Feels like ${e.feelslike}°`,b[1].textContent=e.conditions,b[2].textContent=`Humidity: ${e.humidity}%`,b[3].textContent=`Wind: ${e.windspeed} mph`,v.forEach((n=>{for(;n.firstChild;)n.removeChild(n.firstChild);const e=document.createElement("img");e.src=t,n.appendChild(e)}))}(M,F,t),k.setAttribute("class","weather-info"),$.setAttribute("class","greyed-out"),E.setAttribute("class","")}else q[0].setAttribute("class","hide"),q[1].setAttribute("class","")})),E.addEventListener("click",(n=>{!function(n,e){const t=Math.ceil(e.temp),r=e.feelslike;y.textContent=t,n.target.previousSibling.previousSibling.setAttribute("class","greyed-out"),n.target.setAttribute("class",""),b[0].textContent=`Feels like ${r}°`,b[3].textContent=`Wind: ${e.windspeed} mph`}(n,F)})),$.addEventListener("click",(n=>{!function(n,e){const t=5*(e.temp-32)/9,r=Math.ceil(5*(e.feelslike-32)/9),o=Math.ceil(1.60934*e.windspeed);y.textContent=Math.ceil(t),b[0].textContent=`Feels like ${r}°`,b[3].textContent=`Wind: ${o} km/h`,n.target.nextSibling.nextSibling.setAttribute("class","greyed-out"),n.target.setAttribute("class","")}(n,F)}))})();