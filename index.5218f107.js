function e(e,n,o,t){Object.defineProperty(e,n,{get:o,set:t,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},o.parcelRequired7c6=r),r.register("kyEFX",(function(n,o){var t,i;e(n.exports,"register",(function(){return t}),(function(e){return t=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};t=function(e){for(var n=Object.keys(e),o=0;o<n.length;o++)r[n[o]]=e[n[o]]},i=function(e){var n=r[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r("kyEFX").register(JSON.parse('{"fiOTe":"index.5218f107.js","cytl3":"1.fcac4371.jpg"}'));const a=[{preview:n(new URL(r("kyEFX").resolve("cytl3"),import.meta.url).toString()),name:"Dmitro Kushnaruk",position:"developer"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",name:"",position:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",name:"",position:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",name:"",position:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",name:"",position:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",name:"",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",name:"",position:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",name:"",position:"Nature Landscape"}],c=document.querySelector(".icon-hear"),s=document.querySelector(".footer-modal-close"),p=document.querySelector(".footer-modal"),l=document.querySelector(".footer-foto");c.addEventListener("click",(function(e){e.preventDefault(),p.classList.add("active"),l.insertAdjacentHTML("beforeend",a.map((({preview:e,name:n,position:o})=>`\n        <li class=footer-item>\n            <div class="footer-foto-img">\n                <img\n                    class="footer-foto-image"\n                    src= "${e}"\n                    alt="${o}"\n                    width="360"\n                />\n            </div>   \n            <h2>${n}</h2> \n            <p>${o}</p>\n        </li>\n    `)).join(""))})),s.addEventListener("click",(()=>{p.classList.remove("active"),l.innerHTML=""})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(p.classList.remove("active"),l.innerHTML="")})),window.addEventListener("click",(function(e){"footer-contaiter"!==e.target.className&&"footer-modal active"!==e.target.className||(p.classList.remove("active"),l.innerHTML="")}));
//# sourceMappingURL=index.5218f107.js.map
