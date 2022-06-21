/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Comfortaa&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --celadon-blue: hsla(194, 100%, 33%, 1);\n    --maximum-blue-green: hsla(183, 100%, 36%, 1);\n    --light-yellow: hsla(58, 89%, 93%, 1);\n    --peach-puff: hsla(29, 97%, 86%, 1);\n    --bittersweet: hsla(4, 82%, 67%, 1);\n    --font-roboto: 'Roboto';\n    --font-comfortaa: 'Comfortaa';\n    --EAAE-1: #798C7A;\n    --EAAE-2: #A8BFAA;\n    --EAAE-3: #F2F2F2;\n    --EAAE-4: #404040;\n    --EAAE-5: #0D0D0D;\n}\n\n/* Color Palette from Adobe Colors */\n/* Color Theme Swatches in Hex */\n.EAAE-1-hex { color: #798C7A; }\n.EAAE-2-hex { color: #A8BFAA; }\n.EAAE-3-hex { color: #F2F2F2; }\n.EAAE-4-hex { color: #404040; }\n.EAAE-5-hex { color: #0D0D0D; }\n\n/* Color Theme Swatches in RGBA */\n.EAAE-1-rgba { color: rgba(120, 140, 121, 1); }\n.EAAE-2-rgba { color: rgba(168, 191, 169, 1); }\n.EAAE-3-rgba { color: rgba(242, 242, 242, 1); }\n.EAAE-4-rgba { color: rgba(63, 63, 63, 1); }\n.EAAE-5-rgba { color: rgba(12, 12, 12, 1); }\n\n/* Color Theme Swatches in HSLA */\n.EAAE-1-hsla { color: hsla(123, 7, 51, 1); }\n.EAAE-2-hsla { color: hsla(123, 15, 70, 1); }\n.EAAE-3-hsla { color: hsla(0, 0, 95, 1); }\n.EAAE-4-hsla { color: hsla(0, 0, 25, 1); }\n.EAAE-5-hsla { color: hsla(0, 0, 5, 1); }\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    background-color: var(--light-yellow);\n}\n\n#content {\n    width: 80%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 5fr;\n}\n\n.header {\n    background-color: var(--EAAE-4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 24px 0px;\n    grid-column: 1 / 3;\n}\n\n.header > p {\n    color: var(--light-yellow);\n    font-family: var(--font-comfortaa);\n    margin: 0; \n    font-size: 2em;\n    font-weight: bold;\n}\n\n/* Todo Section CSS */\n\n#todo-section {\n    grid-column: 2 / 3;\n    padding: 18px;\n    background-color: var(--EAAE-2);\n}\n\n#todo-form {\n    display: none;\n}\n\n#todo-form > form {\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n}\n\n#todo-wrapper {\n    display: flex;\n    flex-direction: column;\n    padding: 18px;\n    gap: 18px;\n}\n\n.task {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    border: 2px solid rgba(128, 128, 128, 0.5);\n    border-radius: 15px;\n    background-color: var(--EAAE-1);\n}\n\n.task > p {\n    color: var(--EAAE-3);\n    font-family: var(--font-roboto);\n}\n\n\n/* Project Section CSS */\n\n#project-section {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n    align-items: flex-start;\n    background-color: var(--EAAE-1);\n    padding: 16px;\n}\n\n#inner-project > div {\n    text-align: left;\n    width: 100%;\n    padding: 10px;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n#inner-project > div:hover {\n    background-color: rgba(242, 242, 242, 0.3);\n}\n\n#inner-project > div > p {\n    margin: 0;\n    color: var(--EAAE-5);\n}", "",{"version":3,"sources":["webpack://./src/assets/style/style.css"],"names":[],"mappings":"AAEA;IACI,uCAAuC;IACvC,6CAA6C;IAC7C,qCAAqC;IACrC,mCAAmC;IACnC,mCAAmC;IACnC,uBAAuB;IACvB,6BAA6B;IAC7B,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA,oCAAoC;AACpC,gCAAgC;AAChC,cAAc,cAAc,EAAE;AAC9B,cAAc,cAAc,EAAE;AAC9B,cAAc,cAAc,EAAE;AAC9B,cAAc,cAAc,EAAE;AAC9B,cAAc,cAAc,EAAE;;AAE9B,iCAAiC;AACjC,eAAe,6BAA6B,EAAE;AAC9C,eAAe,6BAA6B,EAAE;AAC9C,eAAe,6BAA6B,EAAE;AAC9C,eAAe,0BAA0B,EAAE;AAC3C,eAAe,0BAA0B,EAAE;;AAE3C,iCAAiC;AACjC,eAAe,0BAA0B,EAAE;AAC3C,eAAe,2BAA2B,EAAE;AAC5C,eAAe,wBAAwB,EAAE;AACzC,eAAe,wBAAwB,EAAE;AACzC,eAAe,uBAAuB,EAAE;;AAExC;IACI,WAAW;IACX,YAAY;IACZ,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,kCAAkC;IAClC,SAAS;IACT,cAAc;IACd,iBAAiB;AACrB;;AAEA,qBAAqB;;AAErB;IACI,kBAAkB;IAClB,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,0CAA0C;IAC1C,mBAAmB;IACnB,+BAA+B;AACnC;;AAEA;IACI,oBAAoB;IACpB,+BAA+B;AACnC;;;AAGA,wBAAwB;;AAExB;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;IACvB,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,SAAS;IACT,oBAAoB;AACxB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Roboto&display=swap');\n\n:root {\n    --celadon-blue: hsla(194, 100%, 33%, 1);\n    --maximum-blue-green: hsla(183, 100%, 36%, 1);\n    --light-yellow: hsla(58, 89%, 93%, 1);\n    --peach-puff: hsla(29, 97%, 86%, 1);\n    --bittersweet: hsla(4, 82%, 67%, 1);\n    --font-roboto: 'Roboto';\n    --font-comfortaa: 'Comfortaa';\n    --EAAE-1: #798C7A;\n    --EAAE-2: #A8BFAA;\n    --EAAE-3: #F2F2F2;\n    --EAAE-4: #404040;\n    --EAAE-5: #0D0D0D;\n}\n\n/* Color Palette from Adobe Colors */\n/* Color Theme Swatches in Hex */\n.EAAE-1-hex { color: #798C7A; }\n.EAAE-2-hex { color: #A8BFAA; }\n.EAAE-3-hex { color: #F2F2F2; }\n.EAAE-4-hex { color: #404040; }\n.EAAE-5-hex { color: #0D0D0D; }\n\n/* Color Theme Swatches in RGBA */\n.EAAE-1-rgba { color: rgba(120, 140, 121, 1); }\n.EAAE-2-rgba { color: rgba(168, 191, 169, 1); }\n.EAAE-3-rgba { color: rgba(242, 242, 242, 1); }\n.EAAE-4-rgba { color: rgba(63, 63, 63, 1); }\n.EAAE-5-rgba { color: rgba(12, 12, 12, 1); }\n\n/* Color Theme Swatches in HSLA */\n.EAAE-1-hsla { color: hsla(123, 7, 51, 1); }\n.EAAE-2-hsla { color: hsla(123, 15, 70, 1); }\n.EAAE-3-hsla { color: hsla(0, 0, 95, 1); }\n.EAAE-4-hsla { color: hsla(0, 0, 25, 1); }\n.EAAE-5-hsla { color: hsla(0, 0, 5, 1); }\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    background-color: var(--light-yellow);\n}\n\n#content {\n    width: 80%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 5fr;\n}\n\n.header {\n    background-color: var(--EAAE-4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 24px 0px;\n    grid-column: 1 / 3;\n}\n\n.header > p {\n    color: var(--light-yellow);\n    font-family: var(--font-comfortaa);\n    margin: 0; \n    font-size: 2em;\n    font-weight: bold;\n}\n\n/* Todo Section CSS */\n\n#todo-section {\n    grid-column: 2 / 3;\n    padding: 18px;\n    background-color: var(--EAAE-2);\n}\n\n#todo-form {\n    display: none;\n}\n\n#todo-form > form {\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n}\n\n#todo-wrapper {\n    display: flex;\n    flex-direction: column;\n    padding: 18px;\n    gap: 18px;\n}\n\n.task {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    border: 2px solid rgba(128, 128, 128, 0.5);\n    border-radius: 15px;\n    background-color: var(--EAAE-1);\n}\n\n.task > p {\n    color: var(--EAAE-3);\n    font-family: var(--font-roboto);\n}\n\n\n/* Project Section CSS */\n\n#project-section {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n    align-items: flex-start;\n    background-color: var(--EAAE-1);\n    padding: 16px;\n}\n\n#inner-project > div {\n    text-align: left;\n    width: 100%;\n    padding: 10px;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n#inner-project > div:hover {\n    background-color: rgba(242, 242, 242, 0.3);\n}\n\n#inner-project > div > p {\n    margin: 0;\n    color: var(--EAAE-5);\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/style/style.css":
/*!************************************!*\
  !*** ./src/assets/style/style.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/modules/header.js":
/*!**************************************!*\
  !*** ./src/assets/modules/header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHeader = () => {
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.classList.add("header");

    const title = document.createElement("p");
    title.textContent = 'To Do';

    header.appendChild(title);
    content.appendChild(header);
    
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/assets/modules/projects.js":
/*!****************************************!*\
  !*** ./src/assets/modules/projects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectForm": () => (/* binding */ addProjectForm),
/* harmony export */   "createProjectSecion": () => (/* binding */ createProjectSecion)
/* harmony export */ });
const createProjectSecion = () => {
    const content = document.getElementById('content');

    const cont = document.createElement('div');
    cont.id = 'project-section';

    const innerCont = document.createElement('div');
    innerCont.id = 'inner-project';

    
    cont.appendChild(innerCont);

    content.appendChild(cont);

    renderProjects();
};

const renderProjects = () => {
    const innerCont = document.getElementById('inner-project');

    innerCont.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const projectName = localStorage.key(i);
        const projectContainer = document.createElement('div');
        const projectTitle = document.createElement('p');
        projectTitle.innerText = `${projectName}`;

        projectContainer.appendChild(projectTitle);

        innerCont.appendChild(projectContainer);
    }

};

const addProjectForm = () => {
    const projectSection = document.getElementById('project-section');

    const addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.innerText = 'Add a Project';

    addBtn.addEventListener('click', () => {
        addBtn.style.display = 'none';
        form.style.display = 'initial';
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Project Name';
    input.id = 'project-input';

    const confirmBtn = document.createElement('button');
    confirmBtn.type = 'button';
    confirmBtn.innerText = 'Confirm';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.innerText = 'Cancel';
    
    cancelBtn.addEventListener('click', () => {
        addBtn.style.display = 'initial';
        form.style.display = 'none';
    });
    
    const form = document.createElement('div');
    form.id = 'add-project-form';
    
    form.style.display = 'none';

    confirmBtn.addEventListener('click', addProjectToStorage);
    
    form.appendChild(input);
    form.appendChild(confirmBtn);
    form.appendChild(cancelBtn);

    projectSection.appendChild(addBtn);
    projectSection.appendChild(form);
};

const addProjectToStorage = () => {
    const input = document.getElementById('project-input');
    localStorage.setItem(input.value, JSON.stringify([]));
    renderProjects();
};



/***/ }),

/***/ "./src/assets/modules/todo-renderer.js":
/*!*********************************************!*\
  !*** ./src/assets/modules/todo-renderer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderTodos = () => {
    const todoSection = document.getElementById('todo-section');

    const cont = document.createElement('div');
    cont.id = 'todo-wrapper';

    const items = JSON.parse(localStorage.getItem('defaultProject'));

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const div = document.createElement('div');
        div.id = `${i}`;

        const title = document.createElement('p');
        title.textContent = item.title;
        const description = document.createElement('p');
        description.textContent = item.description;
        const dueDate = document.createElement('p');
        dueDate.textContent = item.dueDate;
        const priority = document.createElement('p');
        priority.textContent = item.priority;

        const doneBtn = document.createElement('button');
        doneBtn.type = 'button';
        doneBtn.innerText = 'Done';
        doneBtn.id = 'done-btn';
        doneBtn.addEventListener('click', () => {
            items.splice(i,1);
            localStorage.setItem('defaultProject', JSON.stringify(items));
            cont.innerHTML = '';
            renderTodos();
        });

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(dueDate);
        div.appendChild(priority);
        div.appendChild(doneBtn);

        div.classList.add('task');

        cont.appendChild(div);
    }

    todoSection.appendChild(cont);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodos);

/***/ }),

/***/ "./src/assets/modules/todo-section/createTodo.js":
/*!*******************************************************!*\
  !*** ./src/assets/modules/todo-section/createTodo.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-renderer */ "./src/assets/modules/todo-renderer.js");


const createTodoDom = () => {
    const cont = document.createElement('div');
    cont.id = 'todo-form';

    const form = document.createElement('form');

    const title = document.createElement('input');
    title.placeholder = 'Title';
    title.type = 'text';
    title.id = 'title';

    const description = document.createElement('input');
    description.placeholder = 'Description';
    description.type = 'text';
    description.id = 'description';

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.id = 'dueDate';
    dueDate.value = new Date().toJSON().slice(0,10);


    // Create a priority dropdown
    const priority = document.createElement('select');
    priority.id = 'priority';

    const highPrio = document.createElement('option');
    highPrio.value = 'high';
    highPrio.innerText = 'High';

    const mediumPrio = document.createElement('option');
    mediumPrio.value = 'medium';
    mediumPrio.innerText = 'Medium';
    
    const lowPrio = document.createElement('option');
    lowPrio.value = 'low';
    lowPrio.innerText = 'Low';

    priority.appendChild(highPrio);
    priority.appendChild(mediumPrio);
    priority.appendChild(lowPrio);

    const submit = document.createElement('button');
    submit.id = 'submit';
    submit.type = 'submit';
    submit.innerText = 'Add Task';

    submit.addEventListener('click', () => {
        const task = {
            title: title.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value 
        };

        if (task.title !== "") {
            if (localStorage.defaultProject) {
                let currProject = JSON.parse(localStorage.getItem('defaultProject'));
                currProject.push(task);
                localStorage.setItem('defaultProject', JSON.stringify(currProject));
            } else {
                localStorage.setItem('defaultProject', JSON.stringify([task]));
            }

            (0,_todo_renderer__WEBPACK_IMPORTED_MODULE_0__["default"])();
        }
    });
    
    const cancel = document.createElement('button');
    cancel.id = 'cancel';
    cancel.innerText = 'Cancel';
    cancel.type = 'button';

    cancel.addEventListener('click', () => {
        cont.style.display = 'none';
        const addBtn = document.getElementById('add-btn');
        addBtn.style.display = 'block';
    });

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(submit);
    form.appendChild(cancel);

    cont.appendChild(form);

    return cont;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoDom);

/***/ }),

/***/ "./src/assets/modules/todo-section/todo-section.js":
/*!*********************************************************!*\
  !*** ./src/assets/modules/todo-section/todo-section.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ "./src/assets/modules/todo-section/createTodo.js");


const createTodoSection = () => {
    const content = document.getElementById('content');

    const todoSection = document.createElement('div');
    todoSection.id = 'todo-section';

    const addBtn = document.createElement('button');
    addBtn.id = 'add-btn';
    addBtn.innerHTML = 'Add a Task';
    todoSection.appendChild(addBtn);
    
    const todoForm = (0,_createTodo__WEBPACK_IMPORTED_MODULE_0__["default"])();
    todoSection.appendChild(todoForm);

    addBtn.addEventListener('click', () => {
        todoForm.style.display = 'block';
        addBtn.style.display = 'none';
    });


    content.appendChild(todoSection);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoSection);

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/style/style.css */ "./src/assets/style/style.css");
/* harmony import */ var _assets_modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/modules/header */ "./src/assets/modules/header.js");
/* harmony import */ var _assets_modules_todo_section_todo_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/modules/todo-section/todo-section */ "./src/assets/modules/todo-section/todo-section.js");
/* harmony import */ var _assets_modules_todo_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/modules/todo-renderer */ "./src/assets/modules/todo-renderer.js");
/* harmony import */ var _assets_modules_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/modules/projects */ "./src/assets/modules/projects.js");






const body = document.getElementsByTagName("body")[0];
const content = document.createElement("div");
content.id = 'content';
body.appendChild(content);

(0,_assets_modules_header__WEBPACK_IMPORTED_MODULE_1__["default"])();

(0,_assets_modules_todo_section_todo_section__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_assets_modules_todo_renderer__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_assets_modules_projects__WEBPACK_IMPORTED_MODULE_4__.createProjectSecion)();
(0,_assets_modules_projects__WEBPACK_IMPORTED_MODULE_4__.addProjectForm)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDWTtBQUN3QjtBQUNsQjtBQUNxQjs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0VBQVk7O0FBRVoscUZBQWlCO0FBQ2pCLHlFQUFXO0FBQ1gsNkVBQW1CO0FBQ25CLHdFQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYXNzZXRzL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9hc3NldHMvc3R5bGUvc3R5bGUuY3NzPzkwZjciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYXNzZXRzL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9hc3NldHMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYXNzZXRzL21vZHVsZXMvdG9kby1yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYXNzZXRzL21vZHVsZXMvdG9kby1zZWN0aW9uL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2Fzc2V0cy9tb2R1bGVzL3RvZG8tc2VjdGlvbi90b2RvLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNlbGFkb24tYmx1ZTogaHNsYSgxOTQsIDEwMCUsIDMzJSwgMSk7XFxuICAgIC0tbWF4aW11bS1ibHVlLWdyZWVuOiBoc2xhKDE4MywgMTAwJSwgMzYlLCAxKTtcXG4gICAgLS1saWdodC15ZWxsb3c6IGhzbGEoNTgsIDg5JSwgOTMlLCAxKTtcXG4gICAgLS1wZWFjaC1wdWZmOiBoc2xhKDI5LCA5NyUsIDg2JSwgMSk7XFxuICAgIC0tYml0dGVyc3dlZXQ6IGhzbGEoNCwgODIlLCA2NyUsIDEpO1xcbiAgICAtLWZvbnQtcm9ib3RvOiAnUm9ib3RvJztcXG4gICAgLS1mb250LWNvbWZvcnRhYTogJ0NvbWZvcnRhYSc7XFxuICAgIC0tRUFBRS0xOiAjNzk4QzdBO1xcbiAgICAtLUVBQUUtMjogI0E4QkZBQTtcXG4gICAgLS1FQUFFLTM6ICNGMkYyRjI7XFxuICAgIC0tRUFBRS00OiAjNDA0MDQwO1xcbiAgICAtLUVBQUUtNTogIzBEMEQwRDtcXG59XFxuXFxuLyogQ29sb3IgUGFsZXR0ZSBmcm9tIEFkb2JlIENvbG9ycyAqL1xcbi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIEhleCAqL1xcbi5FQUFFLTEtaGV4IHsgY29sb3I6ICM3OThDN0E7IH1cXG4uRUFBRS0yLWhleCB7IGNvbG9yOiAjQThCRkFBOyB9XFxuLkVBQUUtMy1oZXggeyBjb2xvcjogI0YyRjJGMjsgfVxcbi5FQUFFLTQtaGV4IHsgY29sb3I6ICM0MDQwNDA7IH1cXG4uRUFBRS01LWhleCB7IGNvbG9yOiAjMEQwRDBEOyB9XFxuXFxuLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gUkdCQSAqL1xcbi5FQUFFLTEtcmdiYSB7IGNvbG9yOiByZ2JhKDEyMCwgMTQwLCAxMjEsIDEpOyB9XFxuLkVBQUUtMi1yZ2JhIHsgY29sb3I6IHJnYmEoMTY4LCAxOTEsIDE2OSwgMSk7IH1cXG4uRUFBRS0zLXJnYmEgeyBjb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTsgfVxcbi5FQUFFLTQtcmdiYSB7IGNvbG9yOiByZ2JhKDYzLCA2MywgNjMsIDEpOyB9XFxuLkVBQUUtNS1yZ2JhIHsgY29sb3I6IHJnYmEoMTIsIDEyLCAxMiwgMSk7IH1cXG5cXG4vKiBDb2xvciBUaGVtZSBTd2F0Y2hlcyBpbiBIU0xBICovXFxuLkVBQUUtMS1oc2xhIHsgY29sb3I6IGhzbGEoMTIzLCA3LCA1MSwgMSk7IH1cXG4uRUFBRS0yLWhzbGEgeyBjb2xvcjogaHNsYSgxMjMsIDE1LCA3MCwgMSk7IH1cXG4uRUFBRS0zLWhzbGEgeyBjb2xvcjogaHNsYSgwLCAwLCA5NSwgMSk7IH1cXG4uRUFBRS00LWhzbGEgeyBjb2xvcjogaHNsYSgwLCAwLCAyNSwgMSk7IH1cXG4uRUFBRS01LWhzbGEgeyBjb2xvcjogaHNsYSgwLCAwLCA1LCAxKTsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRUFBRS00KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI0cHggMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi5oZWFkZXIgPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdyk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWNvbWZvcnRhYSk7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogVG9kbyBTZWN0aW9uIENTUyAqL1xcblxcbiN0b2RvLXNlY3Rpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBhZGRpbmc6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUVBQUUtMik7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdG9kby1mb3JtID4gZm9ybSB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxOHB4O1xcbn1cXG5cXG4jdG9kby13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMThweDtcXG4gICAgZ2FwOiAxOHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUVBQUUtMSk7XFxufVxcblxcbi50YXNrID4gcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1FQUFFLTMpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yb2JvdG8pO1xcbn1cXG5cXG5cXG4vKiBQcm9qZWN0IFNlY3Rpb24gQ1NTICovXFxuXFxuI3Byb2plY3Qtc2VjdGlvbiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1FQUFFLTEpO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4jaW5uZXItcHJvamVjdCA+IGRpdiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNpbm5lci1wcm9qZWN0ID4gZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjMpO1xcbn1cXG5cXG4jaW5uZXItcHJvamVjdCA+IGRpdiA+IHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1FQUFFLTUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVDQUF1QztJQUN2Qyw2Q0FBNkM7SUFDN0MscUNBQXFDO0lBQ3JDLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFDaEMsY0FBYyxjQUFjLEVBQUU7QUFDOUIsY0FBYyxjQUFjLEVBQUU7QUFDOUIsY0FBYyxjQUFjLEVBQUU7QUFDOUIsY0FBYyxjQUFjLEVBQUU7QUFDOUIsY0FBYyxjQUFjLEVBQUU7O0FBRTlCLGlDQUFpQztBQUNqQyxlQUFlLDZCQUE2QixFQUFFO0FBQzlDLGVBQWUsNkJBQTZCLEVBQUU7QUFDOUMsZUFBZSw2QkFBNkIsRUFBRTtBQUM5QyxlQUFlLDBCQUEwQixFQUFFO0FBQzNDLGVBQWUsMEJBQTBCLEVBQUU7O0FBRTNDLGlDQUFpQztBQUNqQyxlQUFlLDBCQUEwQixFQUFFO0FBQzNDLGVBQWUsMkJBQTJCLEVBQUU7QUFDNUMsZUFBZSx3QkFBd0IsRUFBRTtBQUN6QyxlQUFlLHdCQUF3QixFQUFFO0FBQ3pDLGVBQWUsdUJBQXVCLEVBQUU7O0FBRXhDO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsU0FBUztJQUNULGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLCtCQUErQjtBQUNuQzs7O0FBR0Esd0JBQXdCOztBQUV4QjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWZvcnRhYSZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1jZWxhZG9uLWJsdWU6IGhzbGEoMTk0LCAxMDAlLCAzMyUsIDEpO1xcbiAgICAtLW1heGltdW0tYmx1ZS1ncmVlbjogaHNsYSgxODMsIDEwMCUsIDM2JSwgMSk7XFxuICAgIC0tbGlnaHQteWVsbG93OiBoc2xhKDU4LCA4OSUsIDkzJSwgMSk7XFxuICAgIC0tcGVhY2gtcHVmZjogaHNsYSgyOSwgOTclLCA4NiUsIDEpO1xcbiAgICAtLWJpdHRlcnN3ZWV0OiBoc2xhKDQsIDgyJSwgNjclLCAxKTtcXG4gICAgLS1mb250LXJvYm90bzogJ1JvYm90byc7XFxuICAgIC0tZm9udC1jb21mb3J0YWE6ICdDb21mb3J0YWEnO1xcbiAgICAtLUVBQUUtMTogIzc5OEM3QTtcXG4gICAgLS1FQUFFLTI6ICNBOEJGQUE7XFxuICAgIC0tRUFBRS0zOiAjRjJGMkYyO1xcbiAgICAtLUVBQUUtNDogIzQwNDA0MDtcXG4gICAgLS1FQUFFLTU6ICMwRDBEMEQ7XFxufVxcblxcbi8qIENvbG9yIFBhbGV0dGUgZnJvbSBBZG9iZSBDb2xvcnMgKi9cXG4vKiBDb2xvciBUaGVtZSBTd2F0Y2hlcyBpbiBIZXggKi9cXG4uRUFBRS0xLWhleCB7IGNvbG9yOiAjNzk4QzdBOyB9XFxuLkVBQUUtMi1oZXggeyBjb2xvcjogI0E4QkZBQTsgfVxcbi5FQUFFLTMtaGV4IHsgY29sb3I6ICNGMkYyRjI7IH1cXG4uRUFBRS00LWhleCB7IGNvbG9yOiAjNDA0MDQwOyB9XFxuLkVBQUUtNS1oZXggeyBjb2xvcjogIzBEMEQwRDsgfVxcblxcbi8qIENvbG9yIFRoZW1lIFN3YXRjaGVzIGluIFJHQkEgKi9cXG4uRUFBRS0xLXJnYmEgeyBjb2xvcjogcmdiYSgxMjAsIDE0MCwgMTIxLCAxKTsgfVxcbi5FQUFFLTItcmdiYSB7IGNvbG9yOiByZ2JhKDE2OCwgMTkxLCAxNjksIDEpOyB9XFxuLkVBQUUtMy1yZ2JhIHsgY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7IH1cXG4uRUFBRS00LXJnYmEgeyBjb2xvcjogcmdiYSg2MywgNjMsIDYzLCAxKTsgfVxcbi5FQUFFLTUtcmdiYSB7IGNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIDEpOyB9XFxuXFxuLyogQ29sb3IgVGhlbWUgU3dhdGNoZXMgaW4gSFNMQSAqL1xcbi5FQUFFLTEtaHNsYSB7IGNvbG9yOiBoc2xhKDEyMywgNywgNTEsIDEpOyB9XFxuLkVBQUUtMi1oc2xhIHsgY29sb3I6IGhzbGEoMTIzLCAxNSwgNzAsIDEpOyB9XFxuLkVBQUUtMy1oc2xhIHsgY29sb3I6IGhzbGEoMCwgMCwgOTUsIDEpOyB9XFxuLkVBQUUtNC1oc2xhIHsgY29sb3I6IGhzbGEoMCwgMCwgMjUsIDEpOyB9XFxuLkVBQUUtNS1oc2xhIHsgY29sb3I6IGhzbGEoMCwgMCwgNSwgMSk7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUVBQUUtNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyNHB4IDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4uaGVhZGVyID4gcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3cpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1jb21mb3J0YWEpO1xcbiAgICBtYXJnaW46IDA7IFxcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIFRvZG8gU2VjdGlvbiBDU1MgKi9cXG5cXG4jdG9kby1zZWN0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1FQUFFLTIpO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3RvZG8tZm9ybSA+IGZvcm0ge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMThweDtcXG59XFxuXFxuI3RvZG8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDE4cHg7XFxuICAgIGdhcDogMThweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1FQUFFLTEpO1xcbn1cXG5cXG4udGFzayA+IHAge1xcbiAgICBjb2xvcjogdmFyKC0tRUFBRS0zKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcm9ib3RvKTtcXG59XFxuXFxuXFxuLyogUHJvamVjdCBTZWN0aW9uIENTUyAqL1xcblxcbiNwcm9qZWN0LXNlY3Rpb24ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxOHB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRUFBRS0xKTtcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuI2lubmVyLXByb2plY3QgPiBkaXYge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaW5uZXItcHJvamVjdCA+IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC4zKTtcXG59XFxuXFxuI2lubmVyLXByb2plY3QgPiBkaXYgPiBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tRUFBRS01KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RvIERvJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyOyIsImNvbnN0IGNyZWF0ZVByb2plY3RTZWNpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udC5pZCA9ICdwcm9qZWN0LXNlY3Rpb24nO1xuXG4gICAgY29uc3QgaW5uZXJDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5uZXJDb250LmlkID0gJ2lubmVyLXByb2plY3QnO1xuXG4gICAgXG4gICAgY29udC5hcHBlbmRDaGlsZChpbm5lckNvbnQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250KTtcblxuICAgIHJlbmRlclByb2plY3RzKCk7XG59O1xuXG5jb25zdCByZW5kZXJQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBpbm5lckNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5uZXItcHJvamVjdCcpO1xuXG4gICAgaW5uZXJDb250LmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGAke3Byb2plY3ROYW1lfWA7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGlubmVyQ29udC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9XG5cbn07XG5cbmNvbnN0IGFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc2VjdGlvbicpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRCdG4uaW5uZXJUZXh0ID0gJ0FkZCBhIFByb2plY3QnO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBOYW1lJztcbiAgICBpbnB1dC5pZCA9ICdwcm9qZWN0LWlucHV0JztcblxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25maXJtQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjb25maXJtQnRuLmlubmVyVGV4dCA9ICdDb25maXJtJztcbiAgICBcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbmNlbEJ0bi5pbm5lclRleHQgPSAnQ2FuY2VsJztcbiAgICBcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm0uaWQgPSAnYWRkLXByb2plY3QtZm9ybSc7XG4gICAgXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3RUb1N0b3JhZ2UpO1xuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RUb1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlucHV0LnZhbHVlLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG59O1xuXG5leHBvcnQge2NyZWF0ZVByb2plY3RTZWNpb24sIGFkZFByb2plY3RGb3JtfTsiLCJjb25zdCByZW5kZXJUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXNlY3Rpb24nKTtcblxuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250LmlkID0gJ3RvZG8td3JhcHBlcic7XG5cbiAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlZmF1bHRQcm9qZWN0JykpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaWQgPSBgJHtpfWA7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gaXRlbS5wcmlvcml0eTtcblxuICAgICAgICBjb25zdCBkb25lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRvbmVCdG4udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBkb25lQnRuLmlubmVyVGV4dCA9ICdEb25lJztcbiAgICAgICAgZG9uZUJ0bi5pZCA9ICdkb25lLWJ0bic7XG4gICAgICAgIGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZhdWx0UHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XG4gICAgICAgICAgICBjb250LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgcmVuZGVyVG9kb3MoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9uZUJ0bik7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgICAgICBjb250LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kQ2hpbGQoY29udCk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRvZG9zOyIsImltcG9ydCByZW5kZXJUb2RvcyBmcm9tIFwiLi4vdG9kby1yZW5kZXJlclwiO1xuXG5jb25zdCBjcmVhdGVUb2RvRG9tID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250LmlkID0gJ3RvZG8tZm9ybSc7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcbiAgICB0aXRsZS50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcbiAgICBkZXNjcmlwdGlvbi5pZCA9ICdkZXNjcmlwdGlvbic7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZS5pZCA9ICdkdWVEYXRlJztcbiAgICBkdWVEYXRlLnZhbHVlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLDEwKTtcblxuXG4gICAgLy8gQ3JlYXRlIGEgcHJpb3JpdHkgZHJvcGRvd25cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5LmlkID0gJ3ByaW9yaXR5JztcblxuICAgIGNvbnN0IGhpZ2hQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaFByaW8udmFsdWUgPSAnaGlnaCc7XG4gICAgaGlnaFByaW8uaW5uZXJUZXh0ID0gJ0hpZ2gnO1xuXG4gICAgY29uc3QgbWVkaXVtUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZGl1bVByaW8udmFsdWUgPSAnbWVkaXVtJztcbiAgICBtZWRpdW1QcmlvLmlubmVyVGV4dCA9ICdNZWRpdW0nO1xuICAgIFxuICAgIGNvbnN0IGxvd1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsb3dQcmlvLnZhbHVlID0gJ2xvdyc7XG4gICAgbG93UHJpby5pbm5lclRleHQgPSAnTG93JztcblxuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1QcmlvKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvKTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC5pZCA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LnZhbHVlIFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0YXNrLnRpdGxlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmRlZmF1bHRQcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVmYXVsdFByb2plY3QnKSk7XG4gICAgICAgICAgICAgICAgY3VyclByb2plY3QucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShjdXJyUHJvamVjdCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShbdGFza10pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVuZGVyVG9kb3MoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbC5pZCA9ICdjYW5jZWwnO1xuICAgIGNhbmNlbC5pbm5lclRleHQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWwudHlwZSA9ICdidXR0b24nO1xuXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb250LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnRuJyk7XG4gICAgICAgIGFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgIGNvbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZXR1cm4gY29udDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG9Eb207IiwiaW1wb3J0IGNyZWF0ZVRvZG9Eb20gZnJvbSBcIi4vY3JlYXRlVG9kb1wiO1xuXG5jb25zdCBjcmVhdGVUb2RvU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1NlY3Rpb24uaWQgPSAndG9kby1zZWN0aW9uJztcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5pZCA9ICdhZGQtYnRuJztcbiAgICBhZGRCdG4uaW5uZXJIVE1MID0gJ0FkZCBhIFRhc2snO1xuICAgIHRvZG9TZWN0aW9uLmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gICAgXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBjcmVhdGVUb2RvRG9tKCk7XG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgYWRkQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb1NlY3Rpb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kb1NlY3Rpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zcmMvYXNzZXRzL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2Fzc2V0cy9tb2R1bGVzL2hlYWRlclwiO1xuaW1wb3J0IGNyZWF0ZVRvZG9TZWN0aW9uIGZyb20gJy4vYXNzZXRzL21vZHVsZXMvdG9kby1zZWN0aW9uL3RvZG8tc2VjdGlvbic7XG5pbXBvcnQgcmVuZGVyVG9kb3MgZnJvbSAnLi9hc3NldHMvbW9kdWxlcy90b2RvLXJlbmRlcmVyJztcbmltcG9ydCB7Y3JlYXRlUHJvamVjdFNlY2lvbiwgYWRkUHJvamVjdEZvcm19IGZyb20gJy4vYXNzZXRzL21vZHVsZXMvcHJvamVjdHMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuY3JlYXRlSGVhZGVyKCk7XG5cbmNyZWF0ZVRvZG9TZWN0aW9uKCk7XG5yZW5kZXJUb2RvcygpO1xuY3JlYXRlUHJvamVjdFNlY2lvbigpO1xuYWRkUHJvamVjdEZvcm0oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=