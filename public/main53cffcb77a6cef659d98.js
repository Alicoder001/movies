/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/bootstrap.css":
/*!*******************************!*\
  !*** ./src/css/bootstrap.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://movies/./src/css/bootstrap.css?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://movies/./src/css/main.css?");

/***/ }),

/***/ "./src/js/bookmarks.js":
/*!*****************************!*\
  !*** ./src/js/bookmarks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/js/localStorage.js\");\n\r\nconst headerBtn = document.querySelector(\".headerBtn\");\r\n\r\nheaderBtn.addEventListener(\"click\", (e) => {\r\n\te.preventDefault();\r\n\tconst bookmark = document.querySelector(\".bookmark\");\r\n\tbookmark.classList.toggle(\"hidden\");\r\n\tbookmarkF();\r\n});\r\n\r\nfunction bookmarkF() {\r\n\tconst bookmarkList = document.querySelector(\".bookmarkList\");\r\n\tconst removeBtn = document.querySelector(\".removekBtn\");\r\n\tbookmarkList.innerHTML = \"\";\r\n\tif (JSON.parse(localStorage.getItem(\"fulldata\"))) {\r\n\t\t_localStorage__WEBPACK_IMPORTED_MODULE_0__.array.forEach((item) => {\r\n\t\t\tconst { id, img, lang, name, runt, summary, year, genre } = item;\r\n\t\t\tbookmarkList.innerHTML += `<li class=\"bookmarkItem\"  data-id=\"${id}\" data-img=\"${img}\" data-name=\"${name}\" data-year=\"${year}\" data-lang=\"${lang}\" data-runt=\"${runt}\" data-summary=\"${summary}\" data-genre=\"${genre}\">${name}</li>`;\r\n\t\t\tconst bookmarkItem = document.querySelectorAll(\".bookmarkItem\");\r\n\t\t\tbookmarkItem.forEach((li) => {\r\n\t\t\t\tconst modal = document.getElementById(\"about\");\r\n\t\t\t\tmodal.innerHTML = \"\";\r\n\t\t\t\tli.addEventListener(\"click\", (e) => {\r\n\t\t\t\t\te.preventDefault();\r\n\t\t\t\t\tmodal.classList.remove(\"hidden\");\r\n\t\t\t\t\tconst { id, img, lang, name, runt, summary, year, genre } =\r\n\t\t\t\t\t\tli.dataset;\r\n\t\t\t\t\tmodal.innerHTML = `\r\n\t\t\t<div class=\"aboutWrap\">\r\n\t\t\t\t<div class=\"aboutHeader\">\r\n\t\t\t\t\t<h2 class=\"aboutHeaderTitle\">About Movie</h2>\r\n\t\t\t\t\t<i\r\n\t\t\t\t\t\tid=\"exitBtn\"\r\n\t\t\t\t\t\tclass=\"exit fa-5x fa-solid fa-xmark\"\r\n\t\t\t\t\t\tstyle=\"color: gray\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"aboutMain\">\r\n\t\t\t\t\t<img src=\"${img}\" alt=\"img\" />\r\n\t\t\t\t\t<h1 class=\"aboutTitle\">${name}</h1>\r\n\t\t\t\t\t<div class=\"aboutInfo\">\r\n\t\t\t\t\t\t<div class=\"infoBlock\">\r\n\t\t\t\t\t\t\t<p class=\"aboutMainSubt\">Genre</p>\r\n\t\t\t\t\t\t\t<p class=\"aboutSubt\">${genre}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"infoBlock\">\r\n\t\t\t\t\t\t\t<p class=\"aboutMainSubt\">Year</p>\r\n\t\t\t\t\t\t\t<p class=\"aboutSubt\">${year}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"infoBlock\">\r\n\t\t\t\t\t\t\t<p class=\"aboutMainSubt\">Language</p>\r\n\t\t\t\t\t\t\t<p class=\"aboutSubt\">${lang}{</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"infoBlock\">\r\n\t\t\t\t\t\t\t<p class=\"aboutMainSubt\">Runtime</p>\r\n\t\t\t\t\t\t\t<p class=\"aboutSubt\">${runt}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"infoBlock\">\r\n\t\t\t\t\t\t\t<p class=\"aboutMainSubt\">Summary:    <span class=\"aboutSubt\">${summary}</p></span>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t`;\r\n\t\t\t\t\tconst exit = document.getElementById(\"exitBtn\");\r\n\t\t\t\t\texit.addEventListener(\"click\", (t) => {\r\n\t\t\t\t\t\tt.preventDefault();\r\n\t\t\t\t\t\tmodal.classList.add(\"hidden\");\r\n\t\t\t\t\t});\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t});\r\n\t\tremoveBtn.classList.remove(\"hidden\");\r\n\t} else {\r\n\t\tremoveBtn.classList.add(\"hidden\");\r\n\t\tbookmarkList.innerHTML = \"\";\r\n\t}\r\n}\r\n\r\n// const bookmarkBtn = document.querySelectorAll(\".bookmarkBtn\");\r\ndocument.addEventListener(\"click\", (e) => {\r\n\tif (e.target.className.includes(\"bookmarkBtn\")) {\r\n\t\tconst { id, img, lang, name, runt, summary, year, genre } =\r\n\t\t\te.target.dataset;\r\n\t\tconst newData = { name, id, img, lang, runt, summary, year, genre };\r\n\t\t(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setLocal)(newData);\r\n\r\n\t\tbookmarkF();\r\n\t} else if (e.target.className.includes(\"removekBtn\")) {\r\n\t\tlocalStorage.clear();\r\n\r\n\t\tbookmarkF();\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://movies/./src/js/bookmarks.js?");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies */ \"./src/js/movies.js\");\n\r\nconst { updateUI } = __webpack_require__(/*! ./update */ \"./src/js/update.js\");\r\n\r\nconst categories = document.getElementById(\"categories\");\r\n\r\ncategories.addEventListener(\"change\", (e) => {\r\n\tconst value = e.target.value;\r\n\tconst infoSubt = document.querySelectorAll(\".infoSubt\");\r\n\tinfoSubt.forEach((item) => {\r\n\t\tif (value == \"All\") {\r\n\t\t\titem.parentElement.parentElement.classList.remove(\"hidden\");\r\n\t\t} else if (!item.textContent.includes(value)) {\r\n\t\t\titem.parentElement.parentElement.classList.add(\"hidden\");\r\n\t\t} else item.parentElement.parentElement.classList.remove(\"hidden\");\r\n\t});\r\n});\r\nconst alphabet = document.getElementById(\"alphabet\");\r\nalphabet.addEventListener(\"change\", (e) => {\r\n\tconst value = e.target.value;\r\n\tupdateUI(_movies__WEBPACK_IMPORTED_MODULE_0__[\"default\"], parseInt(value));\r\n});\r\n\n\n//# sourceURL=webpack://movies/./src/js/filter.js?");

/***/ }),

/***/ "./src/js/localStorage.js":
/*!********************************!*\
  !*** ./src/js/localStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"array\": () => (/* binding */ array),\n/* harmony export */   \"getLocal\": () => (/* binding */ getLocal),\n/* harmony export */   \"setLocal\": () => (/* binding */ setLocal)\n/* harmony export */ });\nlet array = JSON.parse(localStorage.getItem(\"fulldata\"))\r\n\t? JSON.parse(localStorage.getItem(\"fulldata\"))\r\n\t: [];\r\nfunction getLocal() {\r\n\tlet array = JSON.parse(localStorage.getItem(\"fulldata\"))\r\n\t\t? JSON.parse(localStorage.getItem(\"fulldata\"))\r\n\t\t: [];\r\n}\r\n\r\nfunction setLocal(data) {\r\n\tarray = JSON.parse(localStorage.getItem(\"fulldata\"))\r\n\t\t? JSON.parse(localStorage.getItem(\"fulldata\"))\r\n\t\t: [];\r\n\tlet s = 0;\r\n\tarray.forEach((e) => {\r\n\t\te.id == data.id ? (s += 1) : (s = s);\r\n\t});\r\n\tif (s == 0) {\r\n\t\tarray.push(data);\r\n\t}\r\n\r\n\tlocalStorage.setItem(\"fulldata\", JSON.stringify(array));\r\n}\r\n\r\nJSON.parse(localStorage.getItem(\"fulldata\"))\r\n\t? (array = JSON.parse(localStorage.getItem(\"fulldata\")))\r\n\t: [];\r\n\r\n\n\n//# sourceURL=webpack://movies/./src/js/localStorage.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/bootstrap.css */ \"./src/css/bootstrap.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies */ \"./src/js/movies.js\");\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update.js */ \"./src/js/update.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ \"./src/js/search.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter */ \"./src/js/filter.js\");\n/* harmony import */ var _bookmarks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookmarks */ \"./src/js/bookmarks.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localStorage */ \"./src/js/localStorage.js\");\n/* harmony import */ var _moreInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moreInfo */ \"./src/js/moreInfo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_update_js__WEBPACK_IMPORTED_MODULE_3__.updateUI)(_movies__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n// console.log(movies);\r\n\n\n//# sourceURL=webpack://movies/./src/js/main.js?");

/***/ }),

/***/ "./src/js/moreInfo.js":
/*!****************************!*\
  !*** ./src/js/moreInfo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies */ \"./src/js/movies.js\");\n\r\nfunction modal() {\r\n\tconst seeBtn = document.querySelectorAll(\".seeBtn\");\r\n\tseeBtn.forEach((item) => {\r\n\t\tconst modal = document.getElementById(\"about\");\r\n\t\tmodal.innerHTML = \"\";\r\n\t\titem.addEventListener(\"click\", (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tmodal.classList.remove(\"hidden\");\r\n\t\t\tconst { id, img, lang, name, runt, summary, year, genre } =\r\n\t\t\t\titem.dataset;\r\n\t\t\tmodal.innerHTML = `\r\n\t\t\t<div class=\"aboutWrap\">\r\n\t\t\t\t<div class=\"aboutHeader\">\r\n\t\t\t\t\t<h2 class=\"aboutHeaderTitle\">About Movie</h2>\r\n\t\t\t\t\t<i\r\n\t\t\t\t\t\tid=\"exitBtn\"\r\n\t\t\t\t\t\tclass=\"exit fa-5x fa-solid fa-xmark\"\r\n\t\t\t\t\t\tstyle=\"color: gray\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"aboutMain\">\r\n\t\t\t\t\t<img src=\"${img}\" alt=\"img\" />\r\n\t\t\t\t\t<h1 class=\"aboutTitle\">${name}</h1>\r\n\t\t\t\t\t<div class=\"aboutInfo\">\r\n\t\t\t\t\t\t<div class=\"infoBlock\">\r\n\t\t\t\t\t\t\t<p class=\"aboutMainSubt\">Genre</p>\r\n\t\t\t\t\t\t\t<p class=\"aboutSubt\">${genre}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"infoBlock\">\r\n\t\t\t\t\t\t\t<p class=\"aboutMainSubt\">Year</p>\r\n\t\t\t\t\t\t\t<p class=\"aboutSubt\">${year}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"infoBlock\">\r\n\t\t\t\t\t\t\t<p class=\"aboutMainSubt\">Language</p>\r\n\t\t\t\t\t\t\t<p class=\"aboutSubt\">${lang}{</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"infoBlock\">\r\n\t\t\t\t\t\t\t<p class=\"aboutMainSubt\">Runtime</p>\r\n\t\t\t\t\t\t\t<p class=\"aboutSubt\">${runt}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"infoBlock\">\r\n\t\t\t\t\t\t\t<p class=\"aboutMainSubt\">Summary:    <span class=\"aboutSubt\">${summary}</p></span>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t`;\r\n\t\t\tconst exit = document.getElementById(\"exitBtn\");\r\n\t\t\texit.addEventListener(\"click\", (t) => {\r\n\t\t\t\tt.preventDefault();\r\n\t\t\t\tmodal.classList.add(\"hidden\");\r\n\t\t\t});\r\n\t\t});\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack://movies/./src/js/moreInfo.js?");

/***/ }),

/***/ "./src/js/movies.js":
/*!**************************!*\
  !*** ./src/js/movies.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ (() => {

eval("const mainForm = document.getElementById(\"mainForm\");\r\nconst searchInput = document.getElementById(\"searchInput\");\r\nlet text = \"\";\r\nsearchInput.addEventListener(\"input\", (e) => {\r\n\ttext = searchInput.value;\r\n\r\n\tconst infoTitle = document.querySelectorAll(\".infoTitle\");\r\n\tinfoTitle.forEach((item) => {\r\n\t\tif (!item.textContent.toLowerCase().includes(text)) {\r\n\t\t\titem.parentElement.parentElement.classList.add(\"hidden\");\r\n\t\t} else item.parentElement.parentElement.classList.remove(\"hidden\");\r\n\t});\r\n});\r\ncategories.addEventListener(\"change\", (e) => {\r\n\tconst value = e.target.value;\r\n\tconst infoSubt = document.querySelectorAll(\".infoSubt\");\r\n\tinfoSubt.forEach((item) => {\r\n\t\tif (value == \"All\") {\r\n\t\t\titem.parentElement.parentElement.classList.remove(\"hidden\");\r\n\t\t} else if (!item.textContent.includes(value)) {\r\n\t\t\titem.parentElement.parentElement.classList.add(\"hidden\");\r\n\t\t} else item.parentElement.parentElement.classList.remove(\"hidden\");\r\n\t});\r\n});\r\n\n\n//# sourceURL=webpack://movies/./src/js/search.js?");

/***/ }),

/***/ "./src/js/update.js":
/*!**************************!*\
  !*** ./src/js/update.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateUI\": () => (/* binding */ updateUI)\n/* harmony export */ });\n/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies */ \"./src/js/movies.js\");\n/* harmony import */ var _moreInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moreInfo */ \"./src/js/moreInfo.js\");\nconst list = document.querySelector(\".mainList\");\r\n\r\n\r\nfunction updateUI(data, n = 5) {\r\n\tconst array = data.slice(0, 30);\r\n\tif (n == 0) {\r\n\t\tarray.sort((a, b) =>\r\n\t\t\ta.title > b.title ? 1 : b.title > a.title ? -1 : 0\r\n\t\t);\r\n\t} else if (n == 1) {\r\n\t\tarray.sort((a, b) =>\r\n\t\t\ta.title < b.title ? 1 : b.title < a.title ? -1 : 0\r\n\t\t);\r\n\t} else if (n == 2) {\r\n\t\tarray.sort((a, b) => (a.year < b.year ? 1 : b.year < a.year ? -1 : 0));\r\n\t} else if (n == 3) {\r\n\t\tarray.sort((a, b) =>\r\n\t\t\ta.imdbRating < b.imdbRating\r\n\t\t\t\t? 1\r\n\t\t\t\t: b.imdbRating < a.imdbRating\r\n\t\t\t\t? -1\r\n\t\t\t\t: 0\r\n\t\t);\r\n\t}\r\n\tlist.innerHTML = \"\";\r\n\tarray.forEach((item) => {\r\n\t\tconst {\r\n\t\t\ttitle,\r\n\t\t\tyear,\r\n\t\t\timdbRating,\r\n\t\t\tcategories,\r\n\t\t\tsmallPoster,\r\n\t\t\timdbId,\r\n\t\t\tsummary,\r\n\t\t\tlanguage,\r\n\t\t\truntime,\r\n\t\t} = item;\r\n\t\tlist.innerHTML += `<li class=\"mainItem\" data-id = \"${imdbId}\">\r\n\t    <img class=\"mainImg\" src=\"${smallPoster}\" alt=\"\" />\r\n\t    <div class=\"itemInfo\">\r\n\t\t\t<div class=\"titleSubt block\">\r\n\t        \t<h2 class=\"infoTitle\">${title}</h2>\r\n\t       \t <p class=\"infoSubt\">${categories[0]}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"yearRating block\">\r\n\t        \t<p class=\"infoYear\">${year}</p>\r\n\t        \t<p class=\"infoRating\">⭐${imdbRating}</p>\r\n\t\t\t</div>\r\n\t    </div>\r\n\t    <div class=\"buttons form-control d-flex\">\r\n\t        <button class=\"infoBtn seeBtn btn btn-primary w-100\" data-id=\"${imdbId}\" data-img=\"${smallPoster}\" data-name=\"${title}\" data-year=\"${year}\" data-lang=\"${language}\" data-runt=\"${runtime}\" data-summary=\"${summary}\" data-genre=\"${categories[0]}\">\r\n\t            See More\r\n\t        </button>\r\n\t        <button\r\n\t            class=\"infoBtn bookmarkBtn btn btn-outline-danger w-100\" data-id=\"${imdbId}\" data-img=\"${smallPoster}\" data-name=\"${title}\" data-year=\"${year}\" data-lang=\"${language}\" data-runt=\"${runtime}\" data-summary=\"${summary}\" data-genre=\"${categories[0]}\">\r\n\t            Bookmarks\r\n\t        </button>\r\n\t    </div>\r\n\t</li>`;\r\n\t});\r\n\t(0,_moreInfo__WEBPACK_IMPORTED_MODULE_1__.modal)();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://movies/./src/js/update.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;