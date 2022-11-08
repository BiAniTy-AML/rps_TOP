/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\nbody {\n  background: #02182b;\n}\n\nbutton {\n  border: none;\n}\n\nheader {\n  background: #95a3b3;\n  padding: 0.7rem;\n  display: flex;\n}\nheader .game_title {\n  font-weight: bold;\n  font-size: 2rem;\n  margin-left: auto;\n}\nheader .links {\n  margin-left: auto;\n}\nheader .links img {\n  width: 50px;\n}\n\nbutton.skip {\n  background-color: #8161a9;\n  cursor: pointer;\n  border: none;\n  padding: 5px 20px 5px 10px;\n  border-radius: 5px;\n  position: fixed;\n  top: 100px;\n  left: 0;\n  transform: translateX(-88%);\n  transition: transform 0.3s ease-out;\n}\nbutton.skip.selected {\n  background-color: #ad7ba4;\n}\nbutton.skip:hover {\n  transform: translateX(-3px);\n}\n\n.player.choices.collapsed .card {\n  transition: transform 1s ease, opacity 1s ease, max-height 1s ease, max-width 1s ease;\n}\n.player.choices.collapsed .card.chosen {\n  pointer-events: none;\n}\n.player.choices.collapsed .card:not(.chosen) {\n  z-index: -1;\n  opacity: 0;\n}\n.player.choices.collapsed .card:not(.chosen).horizontal {\n  max-height: 0;\n}\n.player.choices.collapsed .card:not(.chosen).vertical {\n  max-width: 0;\n}\n\n.cards {\n  position: relative;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 3rem;\n  margin: 2rem 0;\n}\n.cards .player,\n.cards .computer {\n  margin: 0 auto;\n  min-width: 80%;\n  display: flex;\n  flex-flow: column nowrap;\n}\n.cards .player {\n  gap: 1rem;\n}\n.cards .computer {\n  overflow: hidden;\n}\n.cards .computer .card.ready.horizontal .symbol {\n  animation: right_left 1.3s 4;\n}\n.cards .computer .card.ready.horizontal .type {\n  animation: left_right 1.3s 4;\n}\n.cards .computer .card.ready.vertical .symbol {\n  animation: down_up 1.3s 4;\n}\n.cards .computer .card.ready.vertical .type {\n  animation: up_down 1.3s 4;\n}\n.cards .computer .type span {\n  font-size: 2rem;\n  animation: dots 2s infinite;\n  display: inline-block;\n}\n.cards .computer .type span:nth-child(1) {\n  animation-delay: 0.3s;\n}\n.cards .computer .type span:nth-child(2) {\n  animation-delay: 0.6s;\n}\n.cards .computer .type span:nth-child(3) {\n  animation-delay: 0.9s;\n}\n\n.card {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  background: #d0c4df;\n  border-radius: 10px;\n  transition: max-height 1s ease, max-width 1s ease;\n}\n.card:not(.random):not(.chosen):hover {\n  cursor: pointer;\n  animation: card 3s infinite;\n}\n.card.horizontal {\n  max-height: 200vh;\n}\n.card.vertical {\n  max-width: 200vw;\n}\n.card:hover {\n  background: #a892c4;\n}\n.card .symbol {\n  font-size: 7rem;\n}\n.card .type {\n  font-size: 2rem;\n}\n\n.scores {\n  user-select: none;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  gap: 1rem;\n  color: #d0c4df;\n}\n.scores h1 {\n  font-size: 3rem;\n}\n.scores .values {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10px;\n  align-self: stretch;\n}\n.scores .values .score {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n.scores .values .score * {\n  font-size: 2rem;\n}\n.scores .values .score .number {\n  background: #bfa0c2;\n  padding: 5px;\n  border-radius: 13px;\n  color: black;\n}\n\n.final_result {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 1rem;\n  opacity: 0;\n  max-height: 0;\n  max-width: 0;\n  transition: max-height 1s ease, opacity 1s ease;\n}\n.final_result * {\n  font-size: 0;\n  font-weight: bold;\n  pointer-events: none;\n}\n.final_result .restart {\n  border: none;\n  padding: 0;\n  border-radius: 3px;\n  cursor: pointer;\n  background: #ad7ba4;\n}\n.final_result.visible {\n  opacity: 1;\n  max-width: 200vw;\n  padding: 5px 10px;\n}\n.final_result.visible * {\n  font-size: 2rem;\n  pointer-events: all;\n}\n\n@media (min-width: 600px) {\n  .cards {\n    flex-flow: row nowrap;\n  }\n  .cards .player.choices {\n    flex-flow: row nowrap;\n    justify-content: space-evenly;\n  }\n  .cards .player,\n.cards .computer {\n    min-width: 0;\n  }\n  .card {\n    width: 20vw;\n    height: 50vh;\n  }\n}\n@keyframes card {\n  0%, 100% {\n    transform: translateY(0);\n    transition: ease;\n  }\n  50% {\n    transform: translateY(-30px);\n    transition: ease;\n  }\n}\n@keyframes dots {\n  0%, 100% {\n    transform: translateY(0);\n    transition: ease;\n  }\n  50% {\n    transform: translateY(-10px);\n    transition: ease;\n  }\n}\n@keyframes right_left {\n  0%, 100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  1% {\n    display: none;\n  }\n  33% {\n    transform: translateX(-150vw);\n    opacity: 0;\n  }\n  66% {\n    transform: translateX(150vw);\n    opacity: 0;\n  }\n}\n@keyframes left_right {\n  0%, 100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  1% {\n    display: none;\n  }\n  33% {\n    transform: translateX(150vw);\n    opacity: 0;\n  }\n  66% {\n    transform: translateX(-150vw);\n    opacity: 0;\n  }\n}\n@keyframes up_down {\n  0%, 100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  1% {\n    display: none;\n  }\n  33% {\n    transform: translateY(30vh);\n    opacity: 0;\n  }\n  66% {\n    transform: translateY(-30vh);\n    opacity: 0;\n  }\n}\n@keyframes down_up {\n  0%, 100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  1% {\n    display: none;\n  }\n  33% {\n    opacity: 0;\n  }\n  66% {\n    transform: translateY(30vh);\n    opacity: 0;\n  }\n}\n\n/*# sourceMappingURL=styles.css.map */\n", "",{"version":3,"sources":["webpack://./src/styles/styles.scss","webpack://./src/styles/styles.css","webpack://./src/styles/abstract/_colors.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/Animations.js":
/*!******************************!*\
  !*** ./src/js/Animations.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");


const Animations = (function () {
    const base_timing = 1000;

    // Array because easier to modify
    const skip_animations = [false];

    // Animation for the cards collapsing into each other when one of them is clicked
    const collapse_cards = (chosen_card) => {
        const chosen_rect = chosen_card.getBoundingClientRect();

        const cards_rect = {};
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.player.forEach((card) => {
            if (!card.classList.contains("chosen")) {
                cards_rect[card.querySelector(".type").textContent] = {
                    element: card,
                    rect: card.getBoundingClientRect(),
                };
            }
        });

        const chosen_top = chosen_rect.top + window.scrollY;
        const chosen_left = chosen_rect.left + window.scrollX;

        const position = _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.player[0].classList.contains("horizontal")
            ? "horizontal"
            : "vertical";

        // Attracts the other cards into the one the was selected
        // by overlapping their position, using their top as reference
        for (const [_, value] of Object.entries(cards_rect)) {
            // Distance the card has to travel
            // adds scrollY to the top to get an absolute value

            console.log(value.rect.left);

            let distance = null;

            if (position === "horizontal") {
                distance = chosen_top - (value.rect.top + window.scrollY);

                value.element.setAttribute(
                    "style",
                    `transform: translateY(${distance}px);`,
                );
            } else {
                distance = chosen_left - (value.rect.left + window.scrollX);

                value.element.setAttribute(
                    "style",
                    `transform: translateX(${distance}px);`,
                );
            }
        }
    };

    // Show what the computer picked after a brief animation
    const transition_image = (chosen) => {
        const card = _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.computer;
        const { type, icon } = chosen;

        const symbol_el = card.querySelector(".symbol");
        const type_el = card.querySelector(".type");

        // TODO: fix the repetition here
        if (skip_animations[0]) {
            type_el.textContent = type;
            symbol_el.textContent = icon;
        } else {
            setTimeout(() => {
                type_el.textContent = "Rock";
                symbol_el.textContent = "R";
            }, base_timing * 1);

            setTimeout(() => {
                type_el.textContent = "Paper";
                symbol_el.textContent = "P";
            }, base_timing * 2);

            setTimeout(() => {
                type_el.textContent = "Scissors";
                symbol_el.textContent = "S";
            }, base_timing * 3);

            setTimeout(() => {
                type_el.textContent = type;
                symbol_el.textContent = icon;
            }, base_timing * 4);
        }
    };

    return {
        skip_animations,
        base_timing,
        collapse_cards,
        transition_image,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animations);


/***/ }),

/***/ "./src/js/DOM_elements.js":
/*!********************************!*\
  !*** ./src/js/DOM_elements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOM_el = (function () {
    const cards = {
        container: document.querySelector(".cards"),
        player_container: document.querySelector(".player.choices"),
        player: document.querySelectorAll(".player .card"),
        computer: document.querySelector(".computer .card"),
    };

    const scores = {
        container: document.querySelector(".scores"),
        values: document.querySelector(".values"),
        names: document.querySelectorAll(".name"),
        numbers: document.querySelectorAll(".number"),

        player: {
            container: document.querySelector(".score.player"),
            name: document.querySelector(".score.player .name"),
            number: document.querySelector(".score.player .number"),
        },

        computer: {
            container: document.querySelector(".score.computer"),
            name: document.querySelector(".score.computer .name"),
            number: document.querySelector(".score.computer .number"),
        },

        final_result: document.querySelector(".final_result"),
    };

    const skip_animations = document.querySelector("button.skip");

    return {
        cards,
        scores,
        skip_animations,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM_el);


/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animations */ "./src/js/Animations.js");



const Game = (function () {
    let player_score = 0;
    let computer_score = 0;
    let rounds = 0;

    let max_rounds = 5;

    // Gets a random int between 0 and num(exclusive)
    const random_int = (num) => {
        return Math.floor(Math.random() * num);
    };

    const update_score_elements = () => {
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].scores.computer.number.textContent = computer_score;
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].scores.player.number.textContent = player_score;
    };

    // Simulates a round
    const play_round = (player_choice) => {
        // Determines the player and the computer choice
        const computer_choice = computer_play();

        const hash = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper",
        };

        _Animations__WEBPACK_IMPORTED_MODULE_1__["default"].transition_image(computer_choice);

        const pc_type = computer_choice.type.toLowerCase();

        switch (true) {
            case player_choice === pc_type:
                return {
                    code: 0,
                    message: "It's a tie!",
                };

            case hash[player_choice] === pc_type:
                return {
                    code: 1,
                    message: "You won!",
                };

            case hash[pc_type] === player_choice:
                return {
                    code: 2,
                    message: "You lost!",
                };

            default:
                return "Error in play_round";
        }
    };

    const get_player_choice = (e) => {
        const chosen_card = e.target.closest(".card");

        let result = round_results(
            chosen_card.querySelector(".type").textContent.toLowerCase(),
        );

        chosen_card.classList.add("chosen");

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.player_container.classList.add("collapsed");

        player_score += result.scores.player;
        computer_score += result.scores.computer;
        rounds += result.rounds;

        check_scores();

        if (_Animations__WEBPACK_IMPORTED_MODULE_1__["default"].skip_animations[0]) {
            _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.computer.classList.toggle("skipped");

            update_score_elements();

            setTimeout(() => {
                restart_round(chosen_card);
            }, _Animations__WEBPACK_IMPORTED_MODULE_1__["default"].base_timing * 3);
        } else {
            _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.computer.classList.add("ready");

            // When the animation ends
            setTimeout(() => {
                update_score_elements();
            }, _Animations__WEBPACK_IMPORTED_MODULE_1__["default"].base_timing * 5);

            // A little bit of time so the player can see what happened
            setTimeout(() => {
                restart_round(chosen_card);
            }, _Animations__WEBPACK_IMPORTED_MODULE_1__["default"].base_timing * 7);
        }

        _Animations__WEBPACK_IMPORTED_MODULE_1__["default"].collapse_cards(chosen_card);
    };

    const check_scores = () => {
        if (player_score === max_rounds || computer_score === max_rounds) {
            const final_result_element = _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].scores.final_result;
            const fr_message = final_result_element.querySelector(".message");

            final_result_element.classList.add("visible");

            switch (true) {
                case player_score === computer_score:
                    fr_message.textContent = `A tie!, you've won ${player_score} times out of ${rounds}!!!`;
                    break;

                case player_score > computer_score:
                    fr_message.textContent = `Congrats, you've won ${player_score} times out of ${rounds}!!!`;
                    break;

                case player_score < computer_score:
                    fr_message.textContent = `What a shame, you've lost ${computer_score} times out of ${rounds}.`;
                    break;

                default:
                    return "Problem with the check_scores() function";
            }

            _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.player.forEach((card) =>
                card.removeEventListener("click", get_player_choice),
            );
        }

        return {
            player_score,
            computer_score,
            rounds,
        };
    };

    // Scores the game and returns a final result after n rounds
    const round_results = (player_choice) => {
        let player_score = 0;
        let computer_score = 0;
        let rounds = 0;

        // Changes the score depending on the winner
        let result = play_round(player_choice);

        // 0 = tie
        // 1 = player won
        // 2 = computer won
        switch (result.code) {
            case 0:
                break;

            case 1:
                rounds++;
                player_score++;
                break;

            case 2:
                rounds++;
                computer_score++;
                break;

            default:
                break;
        }

        const scores = {
            computer: computer_score,
            player: player_score,
        };

        return {
            scores,
            rounds,
        };
    };

    // The computer randomly chooses rock, paper or scissors
    const computer_play = () => {
        let comp_choice = random_int(3);

        switch (comp_choice) {
            case 0:
                return {
                    type: "Rock",
                    icon: "R",
                };

            case 1:
                return { type: "Scissors", icon: "S" };

            case 2:
                return { type: "Paper", icon: "P" };

            default:
                return "Something went wrong with the function computer_play";
        }
    };

    const restart_round = (chosen_card) => {
        const comp_card = _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.computer;

        comp_card.classList.remove("ready");

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.player_container.classList.remove("collapsed");

        comp_card.querySelector(".symbol").textContent = "?";
        comp_card.querySelector(".type").innerHTML =
            "Waiting <span>.</span> <span>.</span> <span>.</span>";

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.player.forEach((card) => {
            if (!card.classList.contains("chosen")) {
                card.setAttribute("style", "");
            }
        });

        chosen_card.classList.remove("chosen");
    };

    const reset = () => {
        player_score = 0;
        computer_score = 0;
        rounds = 0;

        update_score_elements();

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].scores.final_result.classList.remove("visible");

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.player.forEach((card) =>
            card.addEventListener("click", get_player_choice),
        );
    };

    return {
        play_round,
        update_score_elements,
        get_player_choice,
        check_scores,
        round_results,
        computer_play,
        restart_round,
        reset,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animations */ "./src/js/Animations.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ "./src/js/Game.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");






const main = () => {
    const mq = window.matchMedia("(min-width: 600px)");

    const change_direction_class = (baseline) => {
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.player.forEach((card) => {
            if (baseline.matches) {
                card.classList.add("vertical");
                card.classList.remove("horizontal");
            } else {
                card.classList.add("horizontal");
                card.classList.remove("vertical");
            }
        });

        // TODO: remove this repetition
        if (baseline.matches) {
            _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.computer.classList.remove("horizontal");
            _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.computer.classList.add("vertical");
        } else {
            _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.computer.classList.add("horizontal");
            _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.computer.classList.remove("vertical");
        }
    };

    change_direction_class(mq);

    // media query handler function
    const window_change = (e) => {
        change_direction_class(e);
    };

    mq.addEventListener("change", window_change);

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].cards.player.forEach((card) =>
        card.addEventListener("click", _Game__WEBPACK_IMPORTED_MODULE_2__["default"].get_player_choice),
    );

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].skip_animations.addEventListener("click", (e) => {
        const button = e.target;
        button.classList.toggle("selected");

        _Animations__WEBPACK_IMPORTED_MODULE_1__["default"].skip_animations[0] = !_Animations__WEBPACK_IMPORTED_MODULE_1__["default"].skip_animations[0];

        if (button.classList.contains("selected")) {
            button.textContent = "Show animations";
        } else {
            button.textContent = "Skip animations";
        }
    });

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__["default"].scores.final_result.addEventListener("click", _Game__WEBPACK_IMPORTED_MODULE_2__["default"].reset);

    _Game__WEBPACK_IMPORTED_MODULE_2__["default"].update_score_elements();
};

main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFFBQVEsTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE9BQU8sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSw2QkFBNkI7QUFDM2dRO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FB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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBb0M7QUFDRTtBQUNaOztBQUVJOztBQUU5QjtBQUNBOztBQUVBO0FBQ0EsUUFBUSwwRUFBMkI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFlBQVkscUZBQXNDO0FBQ2xELFlBQVksa0ZBQW1DO0FBQy9DLFVBQVU7QUFDVixZQUFZLGtGQUFtQztBQUMvQyxZQUFZLHFGQUFzQztBQUNsRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksMEVBQTJCO0FBQy9CLHVDQUF1QywrREFBc0I7QUFDN0Q7O0FBRUEsSUFBSSxzRkFBdUM7QUFDM0M7QUFDQTs7QUFFQSxRQUFRLHNFQUE2QixJQUFJLHNFQUE2Qjs7QUFFdEU7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDBGQUEyQyxVQUFVLG1EQUFVOztBQUVuRSxJQUFJLG1FQUEwQjtBQUM5Qjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvY2tfcGFwZXJfc2Npc3NvcnMvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcm9ja19wYXBlcl9zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcm9ja19wYXBlcl9zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JvY2tfcGFwZXJfc2Npc3NvcnMvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9yb2NrX3BhcGVyX3NjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JvY2tfcGFwZXJfc2Npc3NvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JvY2tfcGFwZXJfc2Npc3NvcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcm9ja19wYXBlcl9zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yb2NrX3BhcGVyX3NjaXNzb3JzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcm9ja19wYXBlcl9zY2lzc29ycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JvY2tfcGFwZXJfc2Npc3NvcnMvLi9zcmMvanMvQW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9yb2NrX3BhcGVyX3NjaXNzb3JzLy4vc3JjL2pzL0RPTV9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yb2NrX3BhcGVyX3NjaXNzb3JzLy4vc3JjL2pzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vcm9ja19wYXBlcl9zY2lzc29ycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2NrX3BhcGVyX3NjaXNzb3JzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JvY2tfcGFwZXJfc2Npc3NvcnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JvY2tfcGFwZXJfc2Npc3NvcnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb2NrX3BhcGVyX3NjaXNzb3JzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9ja19wYXBlcl9zY2lzc29ycy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcm9ja19wYXBlcl9zY2lzc29ycy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzAyMTgyYjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICM5NWEzYjM7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5oZWFkZXIgLmdhbWVfdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuaGVhZGVyIC5saW5rcyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuaGVhZGVyIC5saW5rcyBpbWcge1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbmJ1dHRvbi5za2lwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTYxYTk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMjBweCA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04OCUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XFxufVxcbmJ1dHRvbi5za2lwLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDdiYTQ7XFxufVxcbmJ1dHRvbi5za2lwOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcXG59XFxuXFxuLnBsYXllci5jaG9pY2VzLmNvbGxhcHNlZCAuY2FyZCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlLCBtYXgtaGVpZ2h0IDFzIGVhc2UsIG1heC13aWR0aCAxcyBlYXNlO1xcbn1cXG4ucGxheWVyLmNob2ljZXMuY29sbGFwc2VkIC5jYXJkLmNob3NlbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnBsYXllci5jaG9pY2VzLmNvbGxhcHNlZCAuY2FyZDpub3QoLmNob3Nlbikge1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucGxheWVyLmNob2ljZXMuY29sbGFwc2VkIC5jYXJkOm5vdCguY2hvc2VuKS5ob3Jpem9udGFsIHtcXG4gIG1heC1oZWlnaHQ6IDA7XFxufVxcbi5wbGF5ZXIuY2hvaWNlcy5jb2xsYXBzZWQgLmNhcmQ6bm90KC5jaG9zZW4pLnZlcnRpY2FsIHtcXG4gIG1heC13aWR0aDogMDtcXG59XFxuXFxuLmNhcmRzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBnYXA6IDNyZW07XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuLmNhcmRzIC5wbGF5ZXIsXFxuLmNhcmRzIC5jb21wdXRlciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1pbi13aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG59XFxuLmNhcmRzIC5wbGF5ZXIge1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uY2FyZHMgLmNvbXB1dGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jYXJkcyAuY29tcHV0ZXIgLmNhcmQucmVhZHkuaG9yaXpvbnRhbCAuc3ltYm9sIHtcXG4gIGFuaW1hdGlvbjogcmlnaHRfbGVmdCAxLjNzIDQ7XFxufVxcbi5jYXJkcyAuY29tcHV0ZXIgLmNhcmQucmVhZHkuaG9yaXpvbnRhbCAudHlwZSB7XFxuICBhbmltYXRpb246IGxlZnRfcmlnaHQgMS4zcyA0O1xcbn1cXG4uY2FyZHMgLmNvbXB1dGVyIC5jYXJkLnJlYWR5LnZlcnRpY2FsIC5zeW1ib2wge1xcbiAgYW5pbWF0aW9uOiBkb3duX3VwIDEuM3MgNDtcXG59XFxuLmNhcmRzIC5jb21wdXRlciAuY2FyZC5yZWFkeS52ZXJ0aWNhbCAudHlwZSB7XFxuICBhbmltYXRpb246IHVwX2Rvd24gMS4zcyA0O1xcbn1cXG4uY2FyZHMgLmNvbXB1dGVyIC50eXBlIHNwYW4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYW5pbWF0aW9uOiBkb3RzIDJzIGluZmluaXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uY2FyZHMgLmNvbXB1dGVyIC50eXBlIHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXG59XFxuLmNhcmRzIC5jb21wdXRlciAudHlwZSBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XFxufVxcbi5jYXJkcyAuY29tcHV0ZXIgLnR5cGUgc3BhbjpudGgtY2hpbGQoMykge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZDBjNGRmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXMgZWFzZSwgbWF4LXdpZHRoIDFzIGVhc2U7XFxufVxcbi5jYXJkOm5vdCgucmFuZG9tKTpub3QoLmNob3Nlbik6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYW5pbWF0aW9uOiBjYXJkIDNzIGluZmluaXRlO1xcbn1cXG4uY2FyZC5ob3Jpem9udGFsIHtcXG4gIG1heC1oZWlnaHQ6IDIwMHZoO1xcbn1cXG4uY2FyZC52ZXJ0aWNhbCB7XFxuICBtYXgtd2lkdGg6IDIwMHZ3O1xcbn1cXG4uY2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYTg5MmM0O1xcbn1cXG4uY2FyZCAuc3ltYm9sIHtcXG4gIGZvbnQtc2l6ZTogN3JlbTtcXG59XFxuLmNhcmQgLnR5cGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uc2NvcmVzIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBjb2xvcjogI2QwYzRkZjtcXG59XFxuLnNjb3JlcyBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbi5zY29yZXMgLnZhbHVlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuLnNjb3JlcyAudmFsdWVzIC5zY29yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNjb3JlcyAudmFsdWVzIC5zY29yZSAqIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLnNjb3JlcyAudmFsdWVzIC5zY29yZSAubnVtYmVyIHtcXG4gIGJhY2tncm91bmQ6ICNiZmEwYzI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZmluYWxfcmVzdWx0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBnYXA6IDFyZW07XFxuICBvcGFjaXR5OiAwO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG1heC13aWR0aDogMDtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlO1xcbn1cXG4uZmluYWxfcmVzdWx0ICoge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmZpbmFsX3Jlc3VsdCAucmVzdGFydCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2FkN2JhNDtcXG59XFxuLmZpbmFsX3Jlc3VsdC52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBtYXgtd2lkdGg6IDIwMHZ3O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcbi5maW5hbF9yZXN1bHQudmlzaWJsZSAqIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgLmNhcmRzIHtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgfVxcbiAgLmNhcmRzIC5wbGF5ZXIuY2hvaWNlcyB7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuICAuY2FyZHMgLnBsYXllcixcXG4uY2FyZHMgLmNvbXB1dGVyIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgfVxcbiAgLmNhcmQge1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGNhcmQge1xcbiAgMCUsIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zaXRpb246IGVhc2U7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGRvdHMge1xcbiAgMCUsIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zaXRpb246IGVhc2U7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJpZ2h0X2xlZnQge1xcbiAgMCUsIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxJSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAzMyUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MHZ3KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDY2JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTB2dyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbGVmdF9yaWdodCB7XFxuICAwJSwgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDElIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIDMzJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTB2dyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA2NiUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MHZ3KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB1cF9kb3duIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMSUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgMzMlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwdmgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNjYlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHZoKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBkb3duX3VwIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMSUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgMzMlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDY2JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHZoKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYWJzdHJhY3QvX2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNISjs7QUR5RUE7RUFDSSxtQkU3RWM7QURPbEI7O0FEeUVBO0VBQ0ksWUFBQTtBQ3RFSjs7QUR5RUE7RUFDSSxtQkVwRmU7RUZxRmYsZUFBQTtFQUVBLGFBQUE7QUN2RUo7QUR3RUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxpQkFBQTtBQ3ZFUjtBRDBFSTtFQUNJLGlCQUFBO0FDeEVSO0FEeUVRO0VBQ0ksV0FBQTtBQ3ZFWjs7QUQ0RUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFFQSxVQUFBO0VBQ0EsT0FBQTtFQUVBLDJCQUFBO0VBRUEsbUNBQUE7QUM3RUo7QUQrRUk7RUFDSSx5QkVySE87QUR3Q2Y7QURnRkk7RUFDSSwyQkFBQTtBQzlFUjs7QURtRkk7RUFDSSxxRkFBQTtBQ2hGUjtBRG9GSTtFQUNJLG9CQUFBO0FDbEZSO0FEcUZJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNuRlI7QURxRlE7RUFDSSxhQUFBO0FDbkZaO0FEc0ZRO0VBQ0ksWUFBQTtBQ3BGWjs7QUR5RkE7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSx3QkFBQTtFQUVBLFNBQUE7RUFFQSxjQUFBO0FDekZKO0FEMkZJOztFQUVJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDekZSO0FENEZJO0VBQ0ksU0FBQTtBQzFGUjtBRDZGSTtFQUNJLGdCQUFBO0FDM0ZSO0FEOEZnQjtFQUNJLDRCQUFBO0FDNUZwQjtBRCtGZ0I7RUFDSSw0QkFBQTtBQzdGcEI7QURrR2dCO0VBQ0kseUJBQUE7QUNoR3BCO0FEbUdnQjtFQUNJLHlCQUFBO0FDakdwQjtBRHVHWTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtFQUdBLHFCQUFBO0FDdkdoQjtBRDBHWTtFQUNJLHFCQUFBO0FDeEdoQjtBRDJHWTtFQUNJLHFCQUFBO0FDekdoQjtBRDRHWTtFQUNJLHFCQUFBO0FDMUdoQjs7QURnSEE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUVBLG1CRS9OTztFRmdPUCxtQkFBQTtFQUVBLGlEQUFBO0FDL0dKO0FEaUhJO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FDL0dSO0FEa0hJO0VBQ0ksaUJBQUE7QUNoSFI7QURtSEk7RUFDSSxnQkFBQTtBQ2pIUjtBRG9ISTtFQUNJLG1CQUFBO0FDbEhSO0FEcUhJO0VBQ0ksZUFBQTtBQ25IUjtBRHNISTtFQUNJLGVBQUE7QUNwSFI7O0FEd0hBO0VBQ0ksaUJBQUE7RUFFQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUVBLFNBQUE7RUFFQSxjRXZRTztBRCtJWDtBRDBISTtFQUNJLGVBQUE7QUN4SFI7QUQySEk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7QUMxSFI7QUQ0SFE7RUFhSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ3RJWjtBRHdIWTtFQUNJLGVBQUE7QUN0SGhCO0FEeUhZO0VBQ0ksbUJFelJSO0VGMFJRLFlBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUN4SGhCOztBRGtJQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUVBLFNBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSwrQ0FBQTtBQ2xJSjtBRG9JSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDbElSO0FEcUlJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxtQkVqVU87QUQ2TGY7QUR1SUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3JJUjtBRHVJUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ3JJWjs7QUQwSUE7RUFDSTtJQUNJLHFCQUFBO0VDdklOO0VEd0lNO0lBQ0kscUJBQUE7SUFFQSw2QkFBQTtFQ3ZJVjtFRDBJTTs7SUFFSSxZQUFBO0VDeElWO0VENElFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUMxSU47QUFDRjtBRGxOSTtFQUNJO0lBRUksd0JBQUE7SUFDQSxnQkFBQTtFQ21OVjtFRGhOTTtJQUNJLDRCQUFBO0lBQ0EsZ0JBQUE7RUNrTlY7QUFDRjtBRDVOSTtFQUNJO0lBRUksd0JBQUE7SUFDQSxnQkFBQTtFQzZOVjtFRDFOTTtJQUNJLDRCQUFBO0lBQ0EsZ0JBQUE7RUM0TlY7QUFDRjtBRHZOSTtFQUNJO0lBS1Esd0JBQUE7SUFFSixVQUFBO0VDb05WO0VEak5NO0lBQ0ksYUFBQTtFQ21OVjtFRGhOTTtJQVdZLDZCQUFBO0lBR1IsVUFBQTtFQ3NNVjtFRG5NTTtJQVdZLDRCQUFBO0lBR1IsVUFBQTtFQ3lMVjtBQUNGO0FEeE9JO0VBQ0k7SUFLUSx3QkFBQTtJQUVKLFVBQUE7RUNxT1Y7RURsT007SUFDSSxhQUFBO0VDb09WO0VEak9NO0lBU1ksNEJBQUE7SUFLUixVQUFBO0VDdU5WO0VEcE5NO0lBU1ksNkJBQUE7SUFLUixVQUFBO0VDME1WO0FBQ0Y7QUR6UEk7RUFDSTtJQUdRLHdCQUFBO0lBSUosVUFBQTtFQ3NQVjtFRG5QTTtJQUNJLGFBQUE7RUNxUFY7RURsUE07SUFHWSwyQkFBQTtJQVdSLFVBQUE7RUN3T1Y7RURyT007SUFHWSw0QkFBQTtJQVdSLFVBQUE7RUMyTlY7QUFDRjtBRDFRSTtFQUNJO0lBR1Esd0JBQUE7SUFJSixVQUFBO0VDdVFWO0VEcFFNO0lBQ0ksYUFBQTtFQ3NRVjtFRG5RTTtJQWNJLFVBQUE7RUN3UFY7RURyUE07SUFLWSwyQkFBQTtJQVNSLFVBQUE7RUMyT1Y7QUFDRjs7QUFFQSxxQ0FBcUNcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRE9NX2VsIGZyb20gXCIuL0RPTV9lbGVtZW50c1wiO1xuXG5jb25zdCBBbmltYXRpb25zID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBiYXNlX3RpbWluZyA9IDEwMDA7XG5cbiAgICAvLyBBcnJheSBiZWNhdXNlIGVhc2llciB0byBtb2RpZnlcbiAgICBjb25zdCBza2lwX2FuaW1hdGlvbnMgPSBbZmFsc2VdO1xuXG4gICAgLy8gQW5pbWF0aW9uIGZvciB0aGUgY2FyZHMgY29sbGFwc2luZyBpbnRvIGVhY2ggb3RoZXIgd2hlbiBvbmUgb2YgdGhlbSBpcyBjbGlja2VkXG4gICAgY29uc3QgY29sbGFwc2VfY2FyZHMgPSAoY2hvc2VuX2NhcmQpID0+IHtcbiAgICAgICAgY29uc3QgY2hvc2VuX3JlY3QgPSBjaG9zZW5fY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCBjYXJkc19yZWN0ID0ge307XG4gICAgICAgIERPTV9lbC5jYXJkcy5wbGF5ZXIuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjYXJkLmNsYXNzTGlzdC5jb250YWlucyhcImNob3NlblwiKSkge1xuICAgICAgICAgICAgICAgIGNhcmRzX3JlY3RbY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnR5cGVcIikudGV4dENvbnRlbnRdID0ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBjYXJkLFxuICAgICAgICAgICAgICAgICAgICByZWN0OiBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNob3Nlbl90b3AgPSBjaG9zZW5fcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgY29uc3QgY2hvc2VuX2xlZnQgPSBjaG9zZW5fcmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBET01fZWwuY2FyZHMucGxheWVyWzBdLmNsYXNzTGlzdC5jb250YWlucyhcImhvcml6b250YWxcIilcbiAgICAgICAgICAgID8gXCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgIDogXCJ2ZXJ0aWNhbFwiO1xuXG4gICAgICAgIC8vIEF0dHJhY3RzIHRoZSBvdGhlciBjYXJkcyBpbnRvIHRoZSBvbmUgdGhlIHdhcyBzZWxlY3RlZFxuICAgICAgICAvLyBieSBvdmVybGFwcGluZyB0aGVpciBwb3NpdGlvbiwgdXNpbmcgdGhlaXIgdG9wIGFzIHJlZmVyZW5jZVxuICAgICAgICBmb3IgKGNvbnN0IFtfLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY2FyZHNfcmVjdCkpIHtcbiAgICAgICAgICAgIC8vIERpc3RhbmNlIHRoZSBjYXJkIGhhcyB0byB0cmF2ZWxcbiAgICAgICAgICAgIC8vIGFkZHMgc2Nyb2xsWSB0byB0aGUgdG9wIHRvIGdldCBhbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5yZWN0LmxlZnQpO1xuXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBjaG9zZW5fdG9wIC0gKHZhbHVlLnJlY3QudG9wICsgd2luZG93LnNjcm9sbFkpO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgYHRyYW5zZm9ybTogdHJhbnNsYXRlWSgke2Rpc3RhbmNlfXB4KTtgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY2hvc2VuX2xlZnQgLSAodmFsdWUucmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFgpO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke2Rpc3RhbmNlfXB4KTtgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU2hvdyB3aGF0IHRoZSBjb21wdXRlciBwaWNrZWQgYWZ0ZXIgYSBicmllZiBhbmltYXRpb25cbiAgICBjb25zdCB0cmFuc2l0aW9uX2ltYWdlID0gKGNob3NlbikgPT4ge1xuICAgICAgICBjb25zdCBjYXJkID0gRE9NX2VsLmNhcmRzLmNvbXB1dGVyO1xuICAgICAgICBjb25zdCB7IHR5cGUsIGljb24gfSA9IGNob3NlbjtcblxuICAgICAgICBjb25zdCBzeW1ib2xfZWwgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc3ltYm9sXCIpO1xuICAgICAgICBjb25zdCB0eXBlX2VsID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnR5cGVcIik7XG5cbiAgICAgICAgLy8gVE9ETzogZml4IHRoZSByZXBldGl0aW9uIGhlcmVcbiAgICAgICAgaWYgKHNraXBfYW5pbWF0aW9uc1swXSkge1xuICAgICAgICAgICAgdHlwZV9lbC50ZXh0Q29udGVudCA9IHR5cGU7XG4gICAgICAgICAgICBzeW1ib2xfZWwudGV4dENvbnRlbnQgPSBpY29uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHlwZV9lbC50ZXh0Q29udGVudCA9IFwiUm9ja1wiO1xuICAgICAgICAgICAgICAgIHN5bWJvbF9lbC50ZXh0Q29udGVudCA9IFwiUlwiO1xuICAgICAgICAgICAgfSwgYmFzZV90aW1pbmcgKiAxKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHlwZV9lbC50ZXh0Q29udGVudCA9IFwiUGFwZXJcIjtcbiAgICAgICAgICAgICAgICBzeW1ib2xfZWwudGV4dENvbnRlbnQgPSBcIlBcIjtcbiAgICAgICAgICAgIH0sIGJhc2VfdGltaW5nICogMik7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR5cGVfZWwudGV4dENvbnRlbnQgPSBcIlNjaXNzb3JzXCI7XG4gICAgICAgICAgICAgICAgc3ltYm9sX2VsLnRleHRDb250ZW50ID0gXCJTXCI7XG4gICAgICAgICAgICB9LCBiYXNlX3RpbWluZyAqIDMpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0eXBlX2VsLnRleHRDb250ZW50ID0gdHlwZTtcbiAgICAgICAgICAgICAgICBzeW1ib2xfZWwudGV4dENvbnRlbnQgPSBpY29uO1xuICAgICAgICAgICAgfSwgYmFzZV90aW1pbmcgKiA0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBza2lwX2FuaW1hdGlvbnMsXG4gICAgICAgIGJhc2VfdGltaW5nLFxuICAgICAgICBjb2xsYXBzZV9jYXJkcyxcbiAgICAgICAgdHJhbnNpdGlvbl9pbWFnZSxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9ucztcbiIsImNvbnN0IERPTV9lbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FyZHMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc1wiKSxcbiAgICAgICAgcGxheWVyX2NvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIuY2hvaWNlc1wiKSxcbiAgICAgICAgcGxheWVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllciAuY2FyZFwiKSxcbiAgICAgICAgY29tcHV0ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXIgLmNhcmRcIiksXG4gICAgfTtcblxuICAgIGNvbnN0IHNjb3JlcyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3Jlc1wiKSxcbiAgICAgICAgdmFsdWVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZhbHVlc1wiKSxcbiAgICAgICAgbmFtZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmFtZVwiKSxcbiAgICAgICAgbnVtYmVyczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5udW1iZXJcIiksXG5cbiAgICAgICAgcGxheWVyOiB7XG4gICAgICAgICAgICBjb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUucGxheWVyXCIpLFxuICAgICAgICAgICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS5wbGF5ZXIgLm5hbWVcIiksXG4gICAgICAgICAgICBudW1iZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUucGxheWVyIC5udW1iZXJcIiksXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZXI6IHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS5jb21wdXRlclwiKSxcbiAgICAgICAgICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUuY29tcHV0ZXIgLm5hbWVcIiksXG4gICAgICAgICAgICBudW1iZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUuY29tcHV0ZXIgLm51bWJlclwiKSxcbiAgICAgICAgfSxcblxuICAgICAgICBmaW5hbF9yZXN1bHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmluYWxfcmVzdWx0XCIpLFxuICAgIH07XG5cbiAgICBjb25zdCBza2lwX2FuaW1hdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnNraXBcIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjYXJkcyxcbiAgICAgICAgc2NvcmVzLFxuICAgICAgICBza2lwX2FuaW1hdGlvbnMsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTV9lbDtcbiIsImltcG9ydCBET01fZWwgZnJvbSBcIi4vRE9NX2VsZW1lbnRzXCI7XG5pbXBvcnQgQW5pbWF0aW9ucyBmcm9tIFwiLi9BbmltYXRpb25zXCI7XG5cbmNvbnN0IEdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBwbGF5ZXJfc2NvcmUgPSAwO1xuICAgIGxldCBjb21wdXRlcl9zY29yZSA9IDA7XG4gICAgbGV0IHJvdW5kcyA9IDA7XG5cbiAgICBsZXQgbWF4X3JvdW5kcyA9IDU7XG5cbiAgICAvLyBHZXRzIGEgcmFuZG9tIGludCBiZXR3ZWVuIDAgYW5kIG51bShleGNsdXNpdmUpXG4gICAgY29uc3QgcmFuZG9tX2ludCA9IChudW0pID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZV9zY29yZV9lbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgRE9NX2VsLnNjb3Jlcy5jb21wdXRlci5udW1iZXIudGV4dENvbnRlbnQgPSBjb21wdXRlcl9zY29yZTtcbiAgICAgICAgRE9NX2VsLnNjb3Jlcy5wbGF5ZXIubnVtYmVyLnRleHRDb250ZW50ID0gcGxheWVyX3Njb3JlO1xuICAgIH07XG5cbiAgICAvLyBTaW11bGF0ZXMgYSByb3VuZFxuICAgIGNvbnN0IHBsYXlfcm91bmQgPSAocGxheWVyX2Nob2ljZSkgPT4ge1xuICAgICAgICAvLyBEZXRlcm1pbmVzIHRoZSBwbGF5ZXIgYW5kIHRoZSBjb21wdXRlciBjaG9pY2VcbiAgICAgICAgY29uc3QgY29tcHV0ZXJfY2hvaWNlID0gY29tcHV0ZXJfcGxheSgpO1xuXG4gICAgICAgIGNvbnN0IGhhc2ggPSB7XG4gICAgICAgICAgICByb2NrOiBcInNjaXNzb3JzXCIsXG4gICAgICAgICAgICBwYXBlcjogXCJyb2NrXCIsXG4gICAgICAgICAgICBzY2lzc29yczogXCJwYXBlclwiLFxuICAgICAgICB9O1xuXG4gICAgICAgIEFuaW1hdGlvbnMudHJhbnNpdGlvbl9pbWFnZShjb21wdXRlcl9jaG9pY2UpO1xuXG4gICAgICAgIGNvbnN0IHBjX3R5cGUgPSBjb21wdXRlcl9jaG9pY2UudHlwZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBwbGF5ZXJfY2hvaWNlID09PSBwY190eXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSXQncyBhIHRpZSFcIixcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIGhhc2hbcGxheWVyX2Nob2ljZV0gPT09IHBjX3R5cGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3Ugd29uIVwiLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgaGFzaFtwY190eXBlXSA9PT0gcGxheWVyX2Nob2ljZTpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiAyLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBsb3N0IVwiLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgaW4gcGxheV9yb3VuZFwiO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldF9wbGF5ZXJfY2hvaWNlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hvc2VuX2NhcmQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmNhcmRcIik7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHJvdW5kX3Jlc3VsdHMoXG4gICAgICAgICAgICBjaG9zZW5fY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnR5cGVcIikudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgKTtcblxuICAgICAgICBjaG9zZW5fY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuXCIpO1xuXG4gICAgICAgIERPTV9lbC5jYXJkcy5wbGF5ZXJfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XG5cbiAgICAgICAgcGxheWVyX3Njb3JlICs9IHJlc3VsdC5zY29yZXMucGxheWVyO1xuICAgICAgICBjb21wdXRlcl9zY29yZSArPSByZXN1bHQuc2NvcmVzLmNvbXB1dGVyO1xuICAgICAgICByb3VuZHMgKz0gcmVzdWx0LnJvdW5kcztcblxuICAgICAgICBjaGVja19zY29yZXMoKTtcblxuICAgICAgICBpZiAoQW5pbWF0aW9ucy5za2lwX2FuaW1hdGlvbnNbMF0pIHtcbiAgICAgICAgICAgIERPTV9lbC5jYXJkcy5jb21wdXRlci5jbGFzc0xpc3QudG9nZ2xlKFwic2tpcHBlZFwiKTtcblxuICAgICAgICAgICAgdXBkYXRlX3Njb3JlX2VsZW1lbnRzKCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3RhcnRfcm91bmQoY2hvc2VuX2NhcmQpO1xuICAgICAgICAgICAgfSwgQW5pbWF0aW9ucy5iYXNlX3RpbWluZyAqIDMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRE9NX2VsLmNhcmRzLmNvbXB1dGVyLmNsYXNzTGlzdC5hZGQoXCJyZWFkeVwiKTtcblxuICAgICAgICAgICAgLy8gV2hlbiB0aGUgYW5pbWF0aW9uIGVuZHNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZV9zY29yZV9lbGVtZW50cygpO1xuICAgICAgICAgICAgfSwgQW5pbWF0aW9ucy5iYXNlX3RpbWluZyAqIDUpO1xuXG4gICAgICAgICAgICAvLyBBIGxpdHRsZSBiaXQgb2YgdGltZSBzbyB0aGUgcGxheWVyIGNhbiBzZWUgd2hhdCBoYXBwZW5lZFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdGFydF9yb3VuZChjaG9zZW5fY2FyZCk7XG4gICAgICAgICAgICB9LCBBbmltYXRpb25zLmJhc2VfdGltaW5nICogNyk7XG4gICAgICAgIH1cblxuICAgICAgICBBbmltYXRpb25zLmNvbGxhcHNlX2NhcmRzKGNob3Nlbl9jYXJkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tfc2NvcmVzID0gKCkgPT4ge1xuICAgICAgICBpZiAocGxheWVyX3Njb3JlID09PSBtYXhfcm91bmRzIHx8IGNvbXB1dGVyX3Njb3JlID09PSBtYXhfcm91bmRzKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbF9yZXN1bHRfZWxlbWVudCA9IERPTV9lbC5zY29yZXMuZmluYWxfcmVzdWx0O1xuICAgICAgICAgICAgY29uc3QgZnJfbWVzc2FnZSA9IGZpbmFsX3Jlc3VsdF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZVwiKTtcblxuICAgICAgICAgICAgZmluYWxfcmVzdWx0X2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgcGxheWVyX3Njb3JlID09PSBjb21wdXRlcl9zY29yZTpcbiAgICAgICAgICAgICAgICAgICAgZnJfbWVzc2FnZS50ZXh0Q29udGVudCA9IGBBIHRpZSEsIHlvdSd2ZSB3b24gJHtwbGF5ZXJfc2NvcmV9IHRpbWVzIG91dCBvZiAke3JvdW5kc30hISFgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgcGxheWVyX3Njb3JlID4gY29tcHV0ZXJfc2NvcmU6XG4gICAgICAgICAgICAgICAgICAgIGZyX21lc3NhZ2UudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHMsIHlvdSd2ZSB3b24gJHtwbGF5ZXJfc2NvcmV9IHRpbWVzIG91dCBvZiAke3JvdW5kc30hISFgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgcGxheWVyX3Njb3JlIDwgY29tcHV0ZXJfc2NvcmU6XG4gICAgICAgICAgICAgICAgICAgIGZyX21lc3NhZ2UudGV4dENvbnRlbnQgPSBgV2hhdCBhIHNoYW1lLCB5b3UndmUgbG9zdCAke2NvbXB1dGVyX3Njb3JlfSB0aW1lcyBvdXQgb2YgJHtyb3VuZHN9LmA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvYmxlbSB3aXRoIHRoZSBjaGVja19zY29yZXMoKSBmdW5jdGlvblwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBET01fZWwuY2FyZHMucGxheWVyLmZvckVhY2goKGNhcmQpID0+XG4gICAgICAgICAgICAgICAgY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0X3BsYXllcl9jaG9pY2UpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwbGF5ZXJfc2NvcmUsXG4gICAgICAgICAgICBjb21wdXRlcl9zY29yZSxcbiAgICAgICAgICAgIHJvdW5kcyxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy8gU2NvcmVzIHRoZSBnYW1lIGFuZCByZXR1cm5zIGEgZmluYWwgcmVzdWx0IGFmdGVyIG4gcm91bmRzXG4gICAgY29uc3Qgcm91bmRfcmVzdWx0cyA9IChwbGF5ZXJfY2hvaWNlKSA9PiB7XG4gICAgICAgIGxldCBwbGF5ZXJfc2NvcmUgPSAwO1xuICAgICAgICBsZXQgY29tcHV0ZXJfc2NvcmUgPSAwO1xuICAgICAgICBsZXQgcm91bmRzID0gMDtcblxuICAgICAgICAvLyBDaGFuZ2VzIHRoZSBzY29yZSBkZXBlbmRpbmcgb24gdGhlIHdpbm5lclxuICAgICAgICBsZXQgcmVzdWx0ID0gcGxheV9yb3VuZChwbGF5ZXJfY2hvaWNlKTtcblxuICAgICAgICAvLyAwID0gdGllXG4gICAgICAgIC8vIDEgPSBwbGF5ZXIgd29uXG4gICAgICAgIC8vIDIgPSBjb21wdXRlciB3b25cbiAgICAgICAgc3dpdGNoIChyZXN1bHQuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcm91bmRzKys7XG4gICAgICAgICAgICAgICAgcGxheWVyX3Njb3JlKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByb3VuZHMrKztcbiAgICAgICAgICAgICAgICBjb21wdXRlcl9zY29yZSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NvcmVzID0ge1xuICAgICAgICAgICAgY29tcHV0ZXI6IGNvbXB1dGVyX3Njb3JlLFxuICAgICAgICAgICAgcGxheWVyOiBwbGF5ZXJfc2NvcmUsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjb3JlcyxcbiAgICAgICAgICAgIHJvdW5kcyxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGNvbXB1dGVyIHJhbmRvbWx5IGNob29zZXMgcm9jaywgcGFwZXIgb3Igc2Npc3NvcnNcbiAgICBjb25zdCBjb21wdXRlcl9wbGF5ID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29tcF9jaG9pY2UgPSByYW5kb21faW50KDMpO1xuXG4gICAgICAgIHN3aXRjaCAoY29tcF9jaG9pY2UpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJSXCIsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwiU2Npc3NvcnNcIiwgaWNvbjogXCJTXCIgfTtcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwiUGFwZXJcIiwgaWNvbjogXCJQXCIgfTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBmdW5jdGlvbiBjb21wdXRlcl9wbGF5XCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdGFydF9yb3VuZCA9IChjaG9zZW5fY2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wX2NhcmQgPSBET01fZWwuY2FyZHMuY29tcHV0ZXI7XG5cbiAgICAgICAgY29tcF9jYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWFkeVwiKTtcblxuICAgICAgICBET01fZWwuY2FyZHMucGxheWVyX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xuXG4gICAgICAgIGNvbXBfY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnN5bWJvbFwiKS50ZXh0Q29udGVudCA9IFwiP1wiO1xuICAgICAgICBjb21wX2NhcmQucXVlcnlTZWxlY3RvcihcIi50eXBlXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIldhaXRpbmcgPHNwYW4+Ljwvc3Bhbj4gPHNwYW4+Ljwvc3Bhbj4gPHNwYW4+Ljwvc3Bhbj5cIjtcblxuICAgICAgICBET01fZWwuY2FyZHMucGxheWVyLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGlmICghY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaG9zZW5cIikpIHtcbiAgICAgICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjaG9zZW5fY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hvc2VuXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgcGxheWVyX3Njb3JlID0gMDtcbiAgICAgICAgY29tcHV0ZXJfc2NvcmUgPSAwO1xuICAgICAgICByb3VuZHMgPSAwO1xuXG4gICAgICAgIHVwZGF0ZV9zY29yZV9lbGVtZW50cygpO1xuXG4gICAgICAgIERPTV9lbC5zY29yZXMuZmluYWxfcmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuXG4gICAgICAgIERPTV9lbC5jYXJkcy5wbGF5ZXIuZm9yRWFjaCgoY2FyZCkgPT5cbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldF9wbGF5ZXJfY2hvaWNlKSxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheV9yb3VuZCxcbiAgICAgICAgdXBkYXRlX3Njb3JlX2VsZW1lbnRzLFxuICAgICAgICBnZXRfcGxheWVyX2Nob2ljZSxcbiAgICAgICAgY2hlY2tfc2NvcmVzLFxuICAgICAgICByb3VuZF9yZXN1bHRzLFxuICAgICAgICBjb21wdXRlcl9wbGF5LFxuICAgICAgICByZXN0YXJ0X3JvdW5kLFxuICAgICAgICByZXNldCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBET01fZWwgZnJvbSBcIi4vRE9NX2VsZW1lbnRzXCI7XG5pbXBvcnQgQW5pbWF0aW9ucyBmcm9tIFwiLi9BbmltYXRpb25zXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDYwMHB4KVwiKTtcblxuICAgIGNvbnN0IGNoYW5nZV9kaXJlY3Rpb25fY2xhc3MgPSAoYmFzZWxpbmUpID0+IHtcbiAgICAgICAgRE9NX2VsLmNhcmRzLnBsYXllci5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBpZiAoYmFzZWxpbmUubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwidmVydGljYWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIHJlcGV0aXRpb25cbiAgICAgICAgaWYgKGJhc2VsaW5lLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIERPTV9lbC5jYXJkcy5jb21wdXRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIERPTV9lbC5jYXJkcy5jb21wdXRlci5jbGFzc0xpc3QuYWRkKFwidmVydGljYWxcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBET01fZWwuY2FyZHMuY29tcHV0ZXIuY2xhc3NMaXN0LmFkZChcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICBET01fZWwuY2FyZHMuY29tcHV0ZXIuY2xhc3NMaXN0LnJlbW92ZShcInZlcnRpY2FsXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNoYW5nZV9kaXJlY3Rpb25fY2xhc3MobXEpO1xuXG4gICAgLy8gbWVkaWEgcXVlcnkgaGFuZGxlciBmdW5jdGlvblxuICAgIGNvbnN0IHdpbmRvd19jaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjaGFuZ2VfZGlyZWN0aW9uX2NsYXNzKGUpO1xuICAgIH07XG5cbiAgICBtcS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHdpbmRvd19jaGFuZ2UpO1xuXG4gICAgRE9NX2VsLmNhcmRzLnBsYXllci5mb3JFYWNoKChjYXJkKSA9PlxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLmdldF9wbGF5ZXJfY2hvaWNlKSxcbiAgICApO1xuXG4gICAgRE9NX2VsLnNraXBfYW5pbWF0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgQW5pbWF0aW9ucy5za2lwX2FuaW1hdGlvbnNbMF0gPSAhQW5pbWF0aW9ucy5za2lwX2FuaW1hdGlvbnNbMF07XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTaG93IGFuaW1hdGlvbnNcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2tpcCBhbmltYXRpb25zXCI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIERPTV9lbC5zY29yZXMuZmluYWxfcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHYW1lLnJlc2V0KTtcblxuICAgIEdhbWUudXBkYXRlX3Njb3JlX2VsZW1lbnRzKCk7XG59O1xuXG5tYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=