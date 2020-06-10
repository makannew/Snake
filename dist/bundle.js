/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
window.THREE = __webpack_require__(7);
window.CANNON = __webpack_require__(8);
__webpack_require__(9);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  position: fixed;\n  overflow: hidden;\n}\n\n#loading {\n  background: black;\n  color: yellow;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n#loading > div {\n  padding: 20px 30px;\n}\n\np {\n  margin-bottom: 20px;\n}\n\nh2 {\n  margin-bottom: 10px;\n}\n\n.hide {\n  display: none;\n}\n\n.loader {\n  margin: auto;\n  width: 50%;\n  height: 50%;\n  border: 16px solid #f3f3f3; /* Light grey */\n  border-top: 16px solid #3498db; /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n#loadingMessage {\n  position: absolute;\n  top: 20%;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  z-index: 100;\n  color: rgb(8, 22, 224);\n  transform: translateZ(0);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAkACQAAD/4QCeRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAACQAAAAAQAAAJAAAAABAAOShgAHAAAAEgAAAISgAgAEAAAAAQAAA+igAwAEAAAAAQAAAlwAAAAAQVNDSUkAAABTY3JlZW5zaG90/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAiRJQ0NfUFJPRklMRQABAQAAAhRhcHBsBAAAAG1udHJSR0IgWFlaIAfkAAYACQARACYAEmFjc3BBUFBMAAAAAEFQUEwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbCGyeq5L95mlHaS1aKIe2ssAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAZmNwcnQAAAFkAAAAI3d0cHQAAAGIAAAAFHJYWVoAAAGcAAAAFGdYWVoAAAGwAAAAFGJYWVoAAAHEAAAAFHJUUkMAAAHYAAAAEGNoYWQAAAHoAAAALGJUUkMAAAHYAAAAEGdUUkMAAAHYAAAAEGRlc2MAAAAAAAAADExFTiBTMjdpLTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdGV4dAAAAABDb3B5cmlnaHQgQXBwbGUgSW5jLiwgMjAyMAAAWFlaIAAAAAAAAPNSAAEAAAABFr5YWVogAAAAAAAAb6QAADj2AAADkVhZWiAAAAAAAABilAAAt4YAABjaWFlaIAAAAAAAACSeAAAPhAAAtsJwYXJhAAAAAAAAAAAAAfYEc2YzMgAAAAAAAQw/AAAF3f//8ygAAAeRAAD9kf//+6P///2jAAAD2wAAwHn/wAARCAJcA+gDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAFBQUFBQUIBQUIDAgICAwQDAwMDBAUEBAQEBAUGRQUFBQUFBkZGRkZGRkZHR0dHR0dIiIiIiInJycnJycnJycn/9sAQwEGBgYKCQoRCQkRKBsWGygoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/90ABAA//9oADAMBAAIRAxEAPwD4586b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAl86b++35mjzpv77fmaiooAmEsx/jb/AL6NJ50399vzNWbXUbyyjnitn2LcxmKQbVOVPbkHH1HNUetAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M1ML25EBtt52Fg59cgY69enviqlFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAEvnTf32/M0edN/fb8zUVFAH/9D40ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//R+NKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACgcnFFWrK7ksbqK7iCl4XVxuG4ZX1HcUAViMHBpKnuZ3uriS4cANIxY4GBliScD8agoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9L40ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqUCHymJLeZuGBgbcc5yc5z0xUVFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADkUM4UkKCQMnoPenSoscjIrBwpIDDocHqM9jUdFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9P40ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKvWtl9phnl82NPJTfh32lucYUdz7VRooAUjBI9KSiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBcHGaSrP2uf7KLPd+6DmTGB94jaTnGenbOKrUAFFFFABRRRQAUUVYaOEW6yCUGQsQUwcgDoc9OfTrQBXooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCdEhaJ3dyHXG1QuQcnnJzxj9agoooAKKKKAP/9T40ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK0tUTS47pl0l5XgwuDMAGzjnp79KAM2iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACpZoxE+wOr8A5XJHIz3A6dD71FRQAUVJCyJKjyLvUMCVyRkZ5GRyKa5UsSowCeB6UANooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9X40ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//W+NKK0II7FrGeSaR1uFZPLULlSD94lu2O3rWfQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVP/o/2fq3m7vQbduPzzn8Me9QUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUU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");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// threejs.org/license
(function(l,ja){ true?ja(exports):undefined})(this,function(l){function ja(){}function z(a,b){this.x=a||0;this.y=b||0}function O(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function ka(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function n(a,
b,c){this.x=a||0;this.y=b||0;this.z=c||0}function da(){this.elements=[1,0,0,0,1,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}function X(a,b,c,d,e,f,g,h,k,m){Object.defineProperty(this,"id",{value:Mf++});this.uuid=R.generateUUID();this.name="";this.image=void 0!==a?a:X.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:X.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=void 0!==d?d:1001;this.magFilter=void 0!==
e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new z(0,0);this.repeat=new z(1,1);this.center=new z(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new da;this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null}function ca(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function jb(a,
b,c){this.width=a;this.height=b;this.scissor=new ca(0,0,a,b);this.scissorTest=!1;this.viewport=new ca(0,0,a,b);c=c||{};this.texture=new X(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.texture.generateMipmaps=void 0!==c.generateMipmaps?c.generateMipmaps:!1;this.texture.minFilter=void 0!==c.minFilter?c.minFilter:1006;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=
void 0!==c.depthTexture?c.depthTexture:null}function Ib(a,b,c){jb.call(this,a,b,c);this.activeMipMapLevel=this.activeCubeFace=0}function kb(a,b,c,d,e,f,g,h,k,m,q,p){X.call(this,null,f,g,h,k,m,d,e,q,p);this.image={data:a,width:b,height:c};this.magFilter=void 0!==k?k:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=1}function Wa(a,b){this.min=void 0!==a?a:new n(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new n(-Infinity,-Infinity,-Infinity)}function Ea(a,
b){this.center=void 0!==a?a:new n;this.radius=void 0!==b?b:0}function Pa(a,b){this.normal=void 0!==a?a:new n(1,0,0);this.constant=void 0!==b?b:0}function td(a,b,c,d,e,f){this.planes=[void 0!==a?a:new Pa,void 0!==b?b:new Pa,void 0!==c?c:new Pa,void 0!==d?d:new Pa,void 0!==e?e:new Pa,void 0!==f?f:new Pa]}function Jb(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?
b[c][d]=e.slice():b[c][d]=e}}return b}function ma(a){for(var b={},c=0;c<a.length;c++){var d=Jb(a[c]),e;for(e in d)b[e]=d[e]}return b}function I(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function Wd(){function a(e,f){!1!==c&&(d(e,f),b.requestAnimationFrame(a))}var b=null,c=!1,d=null;return{start:function(){!0!==c&&null!==d&&(b.requestAnimationFrame(a),c=!0)},stop:function(){c=!1},setAnimationLoop:function(a){d=a},setContext:function(a){b=a}}}function Nf(a){function b(b,c){var d=
b.array,e=b.dynamic?35048:35044,h=a.createBuffer();a.bindBuffer(c,h);a.bufferData(c,d,e);b.onUploadCallback();c=5126;d instanceof Float32Array?c=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c=5123:d instanceof Int16Array?c=5122:d instanceof Uint32Array?c=5125:d instanceof Int32Array?c=5124:d instanceof Int8Array?c=5120:d instanceof Uint8Array&&(c=5121);return{buffer:h,type:c,bytesPerElement:d.BYTES_PER_ELEMENT,
version:b.version}}var c=new WeakMap;return{get:function(a){a.isInterleavedBufferAttribute&&(a=a.data);return c.get(a)},remove:function(b){b.isInterleavedBufferAttribute&&(b=b.data);var d=c.get(b);d&&(a.deleteBuffer(d.buffer),c.delete(b))},update:function(d,e){d.isInterleavedBufferAttribute&&(d=d.data);var f=c.get(d);if(void 0===f)c.set(d,b(d,e));else if(f.version<d.version){var g=d,h=g.array,k=g.updateRange;a.bindBuffer(e,f.buffer);!1===g.dynamic?a.bufferData(e,h,35044):-1===k.count?a.bufferSubData(e,
0,h):0===k.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(a.bufferSubData(e,k.offset*h.BYTES_PER_ELEMENT,h.subarray(k.offset,k.offset+k.count)),k.count=-1);f.version=d.version}}}}function Kb(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new n;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new I;this.vertexColors=
Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function lb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||lb.DefaultOrder}function Xd(){this.mask=1}function D(){Object.defineProperty(this,"id",{value:Of++});this.uuid=R.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=D.DefaultUp.clone();var a=new n,b=new lb,c=new ka,d=new n(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});
Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:b},quaternion:{configurable:!0,enumerable:!0,value:c},scale:{configurable:!0,enumerable:!0,value:d},modelViewMatrix:{value:new O},normalMatrix:{value:new da}});this.matrix=new O;this.matrixWorld=new O;this.matrixAutoUpdate=D.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new Xd;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=
0;this.userData={}}function Q(){Object.defineProperty(this,"id",{value:Pf+=2});this.uuid=R.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=
!1}function E(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="";this.array=a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0}function tc(a,b,c){E.call(this,new Int8Array(a),b,c)}function uc(a,b,c){E.call(this,new Uint8Array(a),b,c)}function vc(a,b,c){E.call(this,new Uint8ClampedArray(a),b,c)}function wc(a,b,c){E.call(this,new Int16Array(a),
b,c)}function mb(a,b,c){E.call(this,new Uint16Array(a),b,c)}function xc(a,b,c){E.call(this,new Int32Array(a),b,c)}function nb(a,b,c){E.call(this,new Uint32Array(a),b,c)}function A(a,b,c){E.call(this,new Float32Array(a),b,c)}function yc(a,b,c){E.call(this,new Float64Array(a),b,c)}function Je(){this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=
this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1}function Ke(a){if(0===a.length)return-Infinity;for(var b=a[0],c=1,d=a.length;c<d;++c)a[c]>b&&(b=a[c]);return b}function C(){Object.defineProperty(this,"id",{value:Qf+=2});this.uuid=R.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity};this.userData={}}
function Lb(a,b,c,d,e,f){Q.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new ob(a,b,c,d,e,f));this.mergeVertices()}function ob(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,l,W,B,Mb){var t=f/W,v=g/B,w=f/2,u=g/2,y=l/2;g=W+1;var G=B+1,K=f=0,N,z,A=new n;for(z=0;z<G;z++){var D=z*v-u;for(N=0;N<g;N++)A[a]=(N*t-w)*d,A[b]=D*e,A[c]=y,m.push(A.x,A.y,A.z),A[a]=0,A[b]=0,A[c]=0<l?1:-1,q.push(A.x,A.y,A.z),p.push(N/
W),p.push(1-z/B),f+=1}for(z=0;z<B;z++)for(N=0;N<W;N++)a=r+N+g*(z+1),b=r+(N+1)+g*(z+1),c=r+(N+1)+g*z,k.push(r+N+g*z,a,c),k.push(a,b,c),K+=6;h.addGroup(x,K,Mb);x+=K;r+=f}C.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;a=a||1;b=b||1;c=c||1;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var k=[],m=[],q=[],p=[],r=0,x=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x","z","y",
1,1,a,c,b,d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",1,-1,a,b,c,d,e,4);g("x","y","z",-1,-1,a,b,-c,d,e,5);this.setIndex(k);this.addAttribute("position",new A(m,3));this.addAttribute("normal",new A(q,3));this.addAttribute("uv",new A(p,2))}function zc(a,b,c,d){Q.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new pb(a,b,c,d));this.mergeVertices()}function pb(a,b,c,d){C.call(this);this.type="PlaneBufferGeometry";
this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};a=a||1;b=b||1;var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,k=a/c,m=b/d,q=[],p=[],r=[],x=[];for(a=0;a<h;a++){var l=a*m-f;for(b=0;b<g;b++)p.push(b*k-e,-l,0),r.push(0,0,1),x.push(b/c),x.push(1-a/d)}for(a=0;a<d;a++)for(b=0;b<c;b++)e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,q.push(b+g*a,e,h),q.push(e,f,h);this.setIndex(q);this.addAttribute("position",new A(p,3));this.addAttribute("normal",new A(r,3));this.addAttribute("uv",
new A(x,2))}function L(){Object.defineProperty(this,"id",{value:Rf++});this.uuid=R.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=1;this.side=0;this.flatShading=!1;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;
this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.dithering=!1;this.alphaTest=0;this.premultipliedAlpha=!1;this.visible=!0;this.userData={};this.needsUpdate=!0}function Ba(a){L.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.uniformsNeedUpdate=!1;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}
function qb(a,b){this.origin=void 0!==a?a:new n;this.direction=void 0!==b?b:new n}function ha(a,b,c){this.a=void 0!==a?a:new n;this.b=void 0!==b?b:new n;this.c=void 0!==c?c:new n}function wa(a){L.call(this);this.type="MeshBasicMaterial";this.color=new I(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=
1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a)}function na(a,b){D.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new C;this.material=void 0!==b?b:new wa({color:16777215*Math.random()});this.drawMode=0;this.updateMorphTargets()}function Sf(a,b,c,d){function e(a,c){b.buffers.color.setClear(a.r,a.g,a.b,c,d)}var f=new I(0),g=0,h,k,m=null,q=0;return{getClearColor:function(){return f},setClearColor:function(a,b){f.set(a);g=
void 0!==b?b:1;e(f,g)},getClearAlpha:function(){return g},setClearAlpha:function(a){g=a;e(f,g)},render:function(b,d,x,l){d=d.background;null===d?(e(f,g),m=null,q=0):d&&d.isColor&&(e(d,1),l=!0,m=null,q=0);(a.autoClear||l)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil);if(d&&(d.isCubeTexture||d.isWebGLRenderTargetCube)){void 0===k&&(k=new na(new ob(1,1,1),new Ba({type:"BackgroundCubeMaterial",uniforms:Jb(Qa.cube.uniforms),vertexShader:Qa.cube.vertexShader,fragmentShader:Qa.cube.fragmentShader,
side:1,depthTest:!0,depthWrite:!1,fog:!1})),k.geometry.removeAttribute("normal"),k.geometry.removeAttribute("uv"),k.onBeforeRender=function(a,b,c){this.matrixWorld.copyPosition(c.matrixWorld)},Object.defineProperty(k.material,"map",{get:function(){return this.uniforms.tCube.value}}),c.update(k));l=d.isWebGLRenderTargetCube?d.texture:d;k.material.uniforms.tCube.value=l;k.material.uniforms.tFlip.value=d.isWebGLRenderTargetCube?1:-1;if(m!==d||q!==l.version)k.material.needsUpdate=!0,m=d,q=l.version;b.unshift(k,
k.geometry,k.material,0,null)}else if(d&&d.isTexture){void 0===h&&(h=new na(new pb(2,2),new Ba({type:"BackgroundMaterial",uniforms:Jb(Qa.background.uniforms),vertexShader:Qa.background.vertexShader,fragmentShader:Qa.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.removeAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(h));h.material.uniforms.t2D.value=d;!0===d.matrixAutoUpdate&&d.updateMatrix();h.material.uniforms.uvTransform.value.copy(d.matrix);
if(m!==d||q!==d.version)h.material.needsUpdate=!0,m=d,q=d.version;b.unshift(h,h.geometry,h.material,0,null)}}}}function Tf(a,b,c,d){var e;this.setMode=function(a){e=a};this.render=function(b,d){a.drawArrays(e,b,d);c.update(d,e)};this.renderInstances=function(f,g,h){if(d.isWebGL2)var k=a;else if(k=b.get("ANGLE_instanced_arrays"),null===k){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}k[d.isWebGL2?
"drawArraysInstanced":"drawArraysInstancedANGLE"](e,g,h,f.maxInstancedCount);c.update(h,e,f.maxInstancedCount)}}function Uf(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(35633,36338).precision&&0<a.getShaderPrecisionFormat(35632,36338).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(35633,36337).precision&&0<a.getShaderPrecisionFormat(35632,36337).precision?"mediump":"lowp"}var e,f="undefined"!==typeof WebGL2RenderingContext&&a instanceof
WebGL2RenderingContext,g=void 0!==c.precision?c.precision:"highp",h=d(g);h!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",h,"instead."),g=h);c=!0===c.logarithmicDepthBuffer;h=a.getParameter(34930);var k=a.getParameter(35660),m=a.getParameter(3379),q=a.getParameter(34076),p=a.getParameter(34921),r=a.getParameter(36347),l=a.getParameter(36348),t=a.getParameter(36349),v=0<k,w=f||!!b.get("OES_texture_float");return{isWebGL2:f,getMaxAnisotropy:function(){if(void 0!==e)return e;var c=
b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:d,precision:g,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:k,maxTextureSize:m,maxCubemapSize:q,maxAttributes:p,maxVertexUniforms:r,maxVaryings:l,maxFragmentUniforms:t,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:v&&w}}function Vf(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=
null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;k.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,k),h.normal.toArray(g,d),g[d+3]=h.constant}m.value=g;m.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,h=new Pa,k=new da,m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;
f=c;d=b(a,g,0);e=a.length;return h};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=!1;a()};this.setState=function(c,h,k,l,t,v){if(!f||null===c||0===c.length||g&&!k)g?b(null):a();else{k=g?0:e;var q=4*k,p=t.clippingState||null;m.value=p;p=b(c,l,q,v);for(c=0;c!==q;++c)p[c]=d[c];t.clippingState=p;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=k}}}function Wf(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];switch(c){case "WEBGL_depth_texture":var d=a.getExtension("WEBGL_depth_texture")||
a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;
case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}}}function Xf(a,b,c){function d(a){var g=a.target;a=e[g.id];null!==a.index&&b.remove(a.index);for(var k in a.attributes)b.remove(a.attributes[k]);g.removeEventListener("dispose",d);delete e[g.id];if(k=f[a.id])b.remove(k),delete f[a.id];
c.memory.geometries--}var e={},f={};return{get:function(a,b){var f=e[b.id];if(f)return f;b.addEventListener("dispose",d);b.isBufferGeometry?f=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new C).setFromObject(a)),f=b._bufferGeometry);e[b.id]=f;c.memory.geometries++;return f},update:function(a){var c=a.index,d=a.attributes;null!==c&&b.update(c,34963);for(var e in d)b.update(d[e],34962);a=a.morphAttributes;for(e in a){c=a[e];d=0;for(var f=c.length;d<f;d++)b.update(c[d],34962)}},getWireframeAttribute:function(a){var c=
f[a.id];if(c)return c;c=[];var d=a.index,e=a.attributes;if(null!==d){d=d.array;e=0;for(var g=d.length;e<g;e+=3){var p=d[e+0],r=d[e+1],l=d[e+2];c.push(p,r,r,l,l,p)}}else for(d=e.position.array,e=0,g=d.length/3-1;e<g;e+=3)p=e+0,r=e+1,l=e+2,c.push(p,r,r,l,l,p);c=new (65535<Ke(c)?nb:mb)(c,1);b.update(c,34963);return f[a.id]=c}}}function Yf(a,b,c,d){var e,f,g;this.setMode=function(a){e=a};this.setIndex=function(a){f=a.type;g=a.bytesPerElement};this.render=function(b,d){a.drawElements(e,d,f,b*g);c.update(d,
e)};this.renderInstances=function(h,k,m){if(d.isWebGL2)var q=a;else if(q=b.get("ANGLE_instanced_arrays"),null===q){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}q[d.isWebGL2?"drawElementsInstanced":"drawElementsInstancedANGLE"](e,m,f,k*g,h.maxInstancedCount);c.update(m,e,h.maxInstancedCount)}}function Zf(a){var b={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,
textures:0},render:b,programs:null,autoReset:!0,reset:function(){b.frame++;b.calls=0;b.triangles=0;b.points=0;b.lines=0},update:function(a,d,e){e=e||1;b.calls++;switch(d){case 4:b.triangles+=a/3*e;break;case 5:case 6:b.triangles+=e*(a-2);break;case 1:b.lines+=a/2*e;break;case 3:b.lines+=e*(a-1);break;case 2:b.lines+=e*a;break;case 0:b.points+=e*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d)}}}}function $f(a,b){return Math.abs(b[1])-Math.abs(a[1])}function ag(a){var b={},c=
new Float32Array(8);return{update:function(d,e,f,g){var h=d.morphTargetInfluences,k=h.length;d=b[e.id];if(void 0===d){d=[];for(var m=0;m<k;m++)d[m]=[m,0];b[e.id]=d}var q=f.morphTargets&&e.morphAttributes.position;f=f.morphNormals&&e.morphAttributes.normal;for(m=0;m<k;m++){var p=d[m];0!==p[1]&&(q&&e.removeAttribute("morphTarget"+m),f&&e.removeAttribute("morphNormal"+m))}for(m=0;m<k;m++)p=d[m],p[0]=m,p[1]=h[m];d.sort($f);for(m=0;8>m;m++){if(p=d[m])if(h=p[0],k=p[1]){q&&e.addAttribute("morphTarget"+m,
q[h]);f&&e.addAttribute("morphNormal"+m,f[h]);c[m]=k;continue}c[m]=0}g.getUniforms().setValue(a,"morphTargetInfluences",c)}}}function bg(a,b){var c={};return{update:function(d){var e=b.render.frame,f=d.geometry,g=a.get(d,f);c[g.id]!==e&&(f.isGeometry&&g.updateFromObject(d),a.update(g),c[g.id]=e);return g},dispose:function(){c={}}}}function Xa(a,b,c,d,e,f,g,h,k,m){a=void 0!==a?a:[];X.call(this,a,void 0!==b?b:301,c,d,e,f,g,h,k,m);this.flipY=!1}function Nb(a,b,c,d){X.call(this,null);this.image={data:a,
width:b,height:c,depth:d};this.minFilter=this.magFilter=1003;this.flipY=this.generateMipmaps=!1}function Ob(a,b,c){var d=a[0];if(0>=d||0<d)return a;var e=b*c,f=Le[e];void 0===f&&(f=new Float32Array(e),Le[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function ea(a,b){if(a.length!==b.length)return!1;for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0}function sa(a,b){for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}function Me(a,b){var c=Ne[b];void 0===c&&(c=
new Int32Array(b),Ne[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocTextureUnit();return c}function cg(a,b){var c=this.cache;c[0]!==b&&(a.uniform1f(this.addr,b),c[0]=b)}function dg(a,b){var c=this.cache;c[0]!==b&&(a.uniform1i(this.addr,b),c[0]=b)}function eg(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y)a.uniform2f(this.addr,b.x,b.y),c[0]=b.x,c[1]=b.y}else ea(c,b)||(a.uniform2fv(this.addr,b),sa(c,b))}function fg(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==
b.z)a.uniform3f(this.addr,b.x,b.y,b.z),c[0]=b.x,c[1]=b.y,c[2]=b.z}else if(void 0!==b.r){if(c[0]!==b.r||c[1]!==b.g||c[2]!==b.b)a.uniform3f(this.addr,b.r,b.g,b.b),c[0]=b.r,c[1]=b.g,c[2]=b.b}else ea(c,b)||(a.uniform3fv(this.addr,b),sa(c,b))}function gg(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z||c[3]!==b.w)a.uniform4f(this.addr,b.x,b.y,b.z,b.w),c[0]=b.x,c[1]=b.y,c[2]=b.z,c[3]=b.w}else ea(c,b)||(a.uniform4fv(this.addr,b),sa(c,b))}function hg(a,b){var c=this.cache,d=b.elements;
void 0===d?ea(c,b)||(a.uniformMatrix2fv(this.addr,!1,b),sa(c,b)):ea(c,d)||(Oe.set(d),a.uniformMatrix2fv(this.addr,!1,Oe),sa(c,d))}function ig(a,b){var c=this.cache,d=b.elements;void 0===d?ea(c,b)||(a.uniformMatrix3fv(this.addr,!1,b),sa(c,b)):ea(c,d)||(Pe.set(d),a.uniformMatrix3fv(this.addr,!1,Pe),sa(c,d))}function jg(a,b){var c=this.cache,d=b.elements;void 0===d?ea(c,b)||(a.uniformMatrix4fv(this.addr,!1,b),sa(c,b)):ea(c,d)||(Qe.set(d),a.uniformMatrix4fv(this.addr,!1,Qe),sa(c,d))}function kg(a,b,c){var d=
this.cache,e=c.allocTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture2D(b||Re,e)}function lg(a,b,c){var d=this.cache,e=c.allocTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture3D(b||mg,e)}function ng(a,b,c){var d=this.cache,e=c.allocTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTextureCube(b||Se,e)}function Te(a,b){var c=this.cache;ea(c,b)||(a.uniform2iv(this.addr,b),sa(c,b))}function Ue(a,b){var c=this.cache;ea(c,b)||(a.uniform3iv(this.addr,
b),sa(c,b))}function Ve(a,b){var c=this.cache;ea(c,b)||(a.uniform4iv(this.addr,b),sa(c,b))}function og(a){switch(a){case 5126:return cg;case 35664:return eg;case 35665:return fg;case 35666:return gg;case 35674:return hg;case 35675:return ig;case 35676:return jg;case 35678:case 36198:return kg;case 35679:return lg;case 35680:return ng;case 5124:case 35670:return dg;case 35667:case 35671:return Te;case 35668:case 35672:return Ue;case 35669:case 35673:return Ve}}function pg(a,b){var c=this.cache;ea(c,
b)||(a.uniform1fv(this.addr,b),sa(c,b))}function qg(a,b){var c=this.cache;ea(c,b)||(a.uniform1iv(this.addr,b),sa(c,b))}function rg(a,b){var c=this.cache;b=Ob(b,this.size,2);ea(c,b)||(a.uniform2fv(this.addr,b),this.updateCache(b))}function sg(a,b){var c=this.cache;b=Ob(b,this.size,3);ea(c,b)||(a.uniform3fv(this.addr,b),this.updateCache(b))}function tg(a,b){var c=this.cache;b=Ob(b,this.size,4);ea(c,b)||(a.uniform4fv(this.addr,b),this.updateCache(b))}function ug(a,b){var c=this.cache;b=Ob(b,this.size,
4);ea(c,b)||(a.uniformMatrix2fv(this.addr,!1,b),this.updateCache(b))}function vg(a,b){var c=this.cache;b=Ob(b,this.size,9);ea(c,b)||(a.uniformMatrix3fv(this.addr,!1,b),this.updateCache(b))}function wg(a,b){var c=this.cache;b=Ob(b,this.size,16);ea(c,b)||(a.uniformMatrix4fv(this.addr,!1,b),this.updateCache(b))}function xg(a,b,c){var d=this.cache,e=b.length,f=Me(c,e);!1===ea(d,f)&&(a.uniform1iv(this.addr,f),sa(d,f));for(a=0;a!==e;++a)c.setTexture2D(b[a]||Re,f[a])}function yg(a,b,c){var d=this.cache,
e=b.length,f=Me(c,e);!1===ea(d,f)&&(a.uniform1iv(this.addr,f),sa(d,f));for(a=0;a!==e;++a)c.setTextureCube(b[a]||Se,f[a])}function zg(a){switch(a){case 5126:return pg;case 35664:return rg;case 35665:return sg;case 35666:return tg;case 35674:return ug;case 35675:return vg;case 35676:return wg;case 35678:return xg;case 35680:return yg;case 5124:case 35670:return qg;case 35667:case 35671:return Te;case 35668:case 35672:return Ue;case 35669:case 35673:return Ve}}function Ag(a,b,c){this.id=a;this.addr=
c;this.cache=[];this.setValue=og(b.type)}function We(a,b,c){this.id=a;this.addr=c;this.cache=[];this.size=b.size;this.setValue=zg(b.type)}function Xe(a){this.id=a;this.seq=[];this.map={}}function cb(a,b,c){this.seq=[];this.map={};this.renderer=c;c=a.getProgramParameter(b,35718);for(var d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,k=h.length;for(Zd.lastIndex=0;;){var m=Zd.exec(h),q=Zd.lastIndex,p=m[1],r=m[3];"]"===m[2]&&(p|=0);if(void 0===r||"["===r&&
q+2===k){h=g;e=void 0===r?new Ag(p,e,f):new We(p,e,f);h.seq.push(e);h.map[e.id]=e;break}else r=g.map[p],void 0===r&&(r=new Xe(p),p=g,g=r,p.seq.push(g),p.map[g.id]=g),g=r}}}function Bg(a){a=a.split("\n");for(var b=0;b<a.length;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function Ye(a,b,c){var d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);!1===a.getShaderParameter(d,35713)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==a.getShaderInfoLog(d)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",
35633===b?"vertex":"fragment",a.getShaderInfoLog(d),Bg(c));return d}function Ze(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw Error("unsupported encoding: "+a);}}function vd(a,b){b=Ze(b);return"vec4 "+a+"( vec4 value ) { return "+
b[0]+"ToLinear"+b[1]+"; }"}function Cg(a,b){b=Ze(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+b[0]+b[1]+"; }"}function Dg(a,b){switch(b){case 1:b="Linear";break;case 2:b="Reinhard";break;case 3:b="Uncharted2";break;case 4:b="OptimizedCineon";break;case 5:b="ACESFilmic";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+b+"ToneMapping( color ); }"}function Eg(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap&&!b.objectSpaceNormalMap||
b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ac).join("\n")}function Fg(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}
function Ac(a){return""!==a}function $e(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights)}function af(a,b){return a.replace(/NUM_CLIPPING_PLANES/g,b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,b.numClippingPlanes-b.numClipIntersection)}function $d(a){return a.replace(/^[ \t]*#include +<([\w\d./]+)>/gm,
function(a,c){a=H[c];if(void 0===a)throw Error("Can not resolve #include <"+c+">");return $d(a)})}function bf(a){return a.replace(/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(a,c,d,e){a="";for(c=parseInt(c);c<parseInt(d);c++)a+=e.replace(/\[ i \]/g,"[ "+c+" ]");return a})}function Gg(a,b,c,d,e,f,g){var h=a.context,k=d.defines,m=e.vertexShader,q=e.fragmentShader,p="SHADOWMAP_TYPE_BASIC";1===f.shadowMapType?p="SHADOWMAP_TYPE_PCF":2===f.shadowMapType&&
(p="SHADOWMAP_TYPE_PCF_SOFT");var r="ENVMAP_TYPE_CUBE",l="ENVMAP_MODE_REFLECTION",t="ENVMAP_BLENDING_MULTIPLY";if(f.envMap){switch(d.envMap.mapping){case 301:case 302:r="ENVMAP_TYPE_CUBE";break;case 306:case 307:r="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:r="ENVMAP_TYPE_EQUIREC";break;case 305:r="ENVMAP_TYPE_SPHERE"}switch(d.envMap.mapping){case 302:case 304:l="ENVMAP_MODE_REFRACTION"}switch(d.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD"}}var v=
0<a.gammaFactor?a.gammaFactor:1,w=g.isWebGL2?"":Eg(d.extensions,f,b),n=Fg(k),u=h.createProgram();d.isRawShaderMaterial?(k=[n].filter(Ac).join("\n"),0<k.length&&(k+="\n"),b=[w,n].filter(Ac).join("\n"),0<b.length&&(b+="\n")):(k=["precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+e.name,n,f.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+v,"#define MAX_BONES "+f.maxBones,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp?"#define FOG_EXP2":
"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+l:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.normalMap&&f.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",f.displacementMap&&f.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":
"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.flatShading?"#define FLAT_SHADED":"",f.skinning?"#define USE_SKINNING":"",f.useVertexTexture?"#define BONE_TEXTURE":"",f.morphTargets?"#define USE_MORPHTARGETS":"",f.morphNormals&&!1===f.flatShading?"#define USE_MORPHNORMALS":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+
p:"",f.sizeAttenuation?"#define USE_SIZEATTENUATION":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&(g.isWebGL2||b.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;",
"#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif",
"#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Ac).join("\n"),b=[w,"precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+e.name,n,f.alphaTest?"#define ALPHATEST "+f.alphaTest+(f.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+v,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.matcap?"#define USE_MATCAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?
"#define "+r:"",f.envMap?"#define "+l:"",f.envMap?"#define "+t:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.normalMap&&f.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?
"#define USE_COLOR":"",f.gradientMap?"#define USE_GRADIENTMAP":"",f.flatShading?"#define FLAT_SHADED":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+p:"",f.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",f.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&(g.isWebGL2||b.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":
"",f.envMap&&(g.isWebGL2||b.get("EXT_shader_texture_lod"))?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==f.toneMapping?"#define TONE_MAPPING":"",0!==f.toneMapping?H.tonemapping_pars_fragment:"",0!==f.toneMapping?Dg("toneMapping",f.toneMapping):"",f.dithering?"#define DITHERING":"",f.outputEncoding||f.mapEncoding||f.matcapEncoding||f.envMapEncoding||f.emissiveMapEncoding?H.encodings_pars_fragment:"",f.mapEncoding?vd("mapTexelToLinear",f.mapEncoding):"",
f.matcapEncoding?vd("matcapTexelToLinear",f.matcapEncoding):"",f.envMapEncoding?vd("envMapTexelToLinear",f.envMapEncoding):"",f.emissiveMapEncoding?vd("emissiveMapTexelToLinear",f.emissiveMapEncoding):"",f.outputEncoding?Cg("linearToOutputTexel",f.outputEncoding):"",f.depthPacking?"#define DEPTH_PACKING "+d.depthPacking:"","\n"].filter(Ac).join("\n"));m=$d(m);m=$e(m,f);m=af(m,f);q=$d(q);q=$e(q,f);q=af(q,f);m=bf(m);q=bf(q);g.isWebGL2&&!d.isRawShaderMaterial&&(g=!1,p=/^\s*#version\s+300\s+es\s*\n/,
d.isShaderMaterial&&null!==m.match(p)&&null!==q.match(p)&&(g=!0,m=m.replace(p,""),q=q.replace(p,"")),k="#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n"+k,b=["#version 300 es\n\n#define varying in",g?"":"out highp vec4 pc_fragColor;",g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n")+
"\n"+b);q=b+q;m=Ye(h,35633,k+m);q=Ye(h,35632,q);h.attachShader(u,m);h.attachShader(u,q);void 0!==d.index0AttributeName?h.bindAttribLocation(u,0,d.index0AttributeName):!0===f.morphTargets&&h.bindAttribLocation(u,0,"position");h.linkProgram(u);f=h.getProgramInfoLog(u).trim();g=h.getShaderInfoLog(m).trim();p=h.getShaderInfoLog(q).trim();l=r=!0;if(!1===h.getProgramParameter(u,35714))r=!1,console.error("THREE.WebGLProgram: shader error: ",h.getError(),"35715",h.getProgramParameter(u,35715),"gl.getProgramInfoLog",
f,g,p);else if(""!==f)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",f);else if(""===g||""===p)l=!1;l&&(this.diagnostics={runnable:r,material:d,programLog:f,vertexShader:{log:g,prefix:k},fragmentShader:{log:p,prefix:b}});h.deleteShader(m);h.deleteShader(q);var K;this.getUniforms=function(){void 0===K&&(K=new cb(h,u,a));return K};var G;this.getAttributes=function(){if(void 0===G){for(var a={},b=h.getProgramParameter(u,35721),c=0;c<b;c++){var d=h.getActiveAttrib(u,c).name;a[d]=h.getAttribLocation(u,
d)}G=a}return G};this.destroy=function(){h.deleteProgram(u);this.program=void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});this.name=e.name;this.id=Hg++;this.code=c;this.usedTimes=1;this.program=u;this.vertexShader=m;this.fragmentShader=q;return this}function Ig(a,
b,c){function d(a,b){if(a)a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=a.texture.encoding);else var c=3E3;3E3===c&&b&&(c=3007);return c}var e=[],f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",
MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g="precision supportsVertexTextures map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
this.getParameters=function(b,e,g,q,p,r,l){var h=f[b.type];if(l.isSkinnedMesh){var k=l.skeleton.bones;if(c.floatVertexTextures)k=1024;else{var m=Math.min(Math.floor((c.maxVertexUniforms-20)/4),k.length);m<k.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+k.length+" bones. This GPU supports "+m+"."),k=0):k=m}}else k=0;m=c.precision;null!==b.precision&&(m=c.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));
var x=a.getRenderTarget();return{shaderID:h,precision:m,supportsVertexTextures:c.vertexTextures,outputEncoding:d(x?x.texture:null,a.gammaOutput),map:!!b.map,mapEncoding:d(b.map,a.gammaInput),matcap:!!b.matcap,matcapEncoding:d(b.matcap,a.gammaInput),envMap:!!b.envMap,envMapMode:b.envMap&&b.envMap.mapping,envMapEncoding:d(b.envMap,a.gammaInput),envMapCubeUV:!!b.envMap&&(306===b.envMap.mapping||307===b.envMap.mapping),lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:d(b.emissiveMap,
a.gammaInput),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:1===b.normalMapType,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,combine:b.combine,vertexColors:b.vertexColors,fog:!!q,useFog:b.fog,fogExp:q&&q.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:c.logarithmicDepthBuffer,skinning:b.skinning&&0<k,maxBones:k,
useVertexTexture:c.floatVertexTextures,morphTargets:b.morphTargets,morphNormals:b.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:e.directional.length,numPointLights:e.point.length,numSpotLights:e.spot.length,numRectAreaLights:e.rectArea.length,numHemiLights:e.hemi.length,numClippingPlanes:p,numClipIntersection:r,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&l.receiveShadow&&0<g.length,shadowMapType:a.shadowMap.type,toneMapping:a.toneMapping,
physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,alphaTest:b.alphaTest,doubleSided:2===b.side,flipSided:1===b.side,depthPacking:void 0!==b.depthPacking?b.depthPacking:!1}};this.getProgramCode=function(b,c){var d=[];c.shaderID?d.push(c.shaderID):(d.push(b.fragmentShader),d.push(b.vertexShader));if(void 0!==b.defines)for(var e in b.defines)d.push(e),d.push(b.defines[e]);for(e=0;e<g.length;e++)d.push(c[g[e]]);d.push(b.onBeforeCompile.toString());d.push(a.gammaOutput);
d.push(a.gammaFactor);return d.join()};this.acquireProgram=function(d,f,g,q){for(var h,k=0,m=e.length;k<m;k++){var l=e[k];if(l.code===q){h=l;++h.usedTimes;break}}void 0===h&&(h=new Gg(a,b,q,d,f,g,c),e.push(h));return h};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=e.indexOf(a);e[b]=e[e.length-1];e.pop();a.destroy()}};this.programs=e}function Jg(){var a=new WeakMap;return{get:function(b){var c=a.get(b);void 0===c&&(c={},a.set(b,c));return c},remove:function(b){a.delete(b)},update:function(b,
c,d){a.get(b)[c]=d},dispose:function(){a=new WeakMap}}}function Kg(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program&&b.program&&a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function Lg(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function cf(){function a(a,d,e,k,m){var f=b[c];void 0===f?(f={id:a.id,object:a,geometry:d,material:e,
program:e.program,renderOrder:a.renderOrder,z:k,group:m},b[c]=f):(f.id=a.id,f.object=a,f.geometry=d,f.material=e,f.program=e.program,f.renderOrder=a.renderOrder,f.z=k,f.group=m);c++;return f}var b=[],c=0,d=[],e=[];return{opaque:d,transparent:e,init:function(){c=0;d.length=0;e.length=0},push:function(b,c,h,k,m){b=a(b,c,h,k,m);(!0===h.transparent?e:d).push(b)},unshift:function(b,c,h,k,m){b=a(b,c,h,k,m);(!0===h.transparent?e:d).unshift(b)},sort:function(){1<d.length&&d.sort(Kg);1<e.length&&e.sort(Lg)}}}
function Mg(){var a={};return{get:function(b,c){var d=a[b.id];if(void 0===d){var e=new cf;a[b.id]={};a[b.id][c.id]=e}else e=d[c.id],void 0===e&&(e=new cf,d[c.id]=e);return e},dispose:function(){a={}}}}function Ng(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case "DirectionalLight":var c={direction:new n,color:new I,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new z};break;case "SpotLight":c={position:new n,direction:new n,color:new I,distance:0,coneCos:0,
penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new z};break;case "PointLight":c={position:new n,color:new I,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1E3};break;case "HemisphereLight":c={direction:new n,skyColor:new I,groundColor:new I};break;case "RectAreaLight":c={color:new I,position:new n,halfWidth:new n,halfHeight:new n}}return a[b.id]=c}}}function Og(){var a=new Ng,b={id:Pg++,hash:{stateID:-1,directionalLength:-1,
pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,shadowsLength:-1},ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},c=new n,d=new O,e=new O;return{setup:function(f,g,h){var k=0,m=0,q=0,p=0,r=0,l=0,t=0,v=0;h=h.matrixWorldInverse;for(var w=0,n=f.length;w<n;w++){var u=f[w],K=u.color,G=u.intensity,N=u.distance,W=u.shadow&&u.shadow.map?u.shadow.map.texture:
null;if(u.isAmbientLight)k+=K.r*G,m+=K.g*G,q+=K.b*G;else if(u.isDirectionalLight){var B=a.get(u);B.color.copy(u.color).multiplyScalar(u.intensity);B.direction.setFromMatrixPosition(u.matrixWorld);c.setFromMatrixPosition(u.target.matrixWorld);B.direction.sub(c);B.direction.transformDirection(h);if(B.shadow=u.castShadow)K=u.shadow,B.shadowBias=K.bias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize;b.directionalShadowMap[p]=W;b.directionalShadowMatrix[p]=u.shadow.matrix;b.directional[p]=B;p++}else if(u.isSpotLight){B=
a.get(u);B.position.setFromMatrixPosition(u.matrixWorld);B.position.applyMatrix4(h);B.color.copy(K).multiplyScalar(G);B.distance=N;B.direction.setFromMatrixPosition(u.matrixWorld);c.setFromMatrixPosition(u.target.matrixWorld);B.direction.sub(c);B.direction.transformDirection(h);B.coneCos=Math.cos(u.angle);B.penumbraCos=Math.cos(u.angle*(1-u.penumbra));B.decay=u.decay;if(B.shadow=u.castShadow)K=u.shadow,B.shadowBias=K.bias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize;b.spotShadowMap[l]=W;b.spotShadowMatrix[l]=
u.shadow.matrix;b.spot[l]=B;l++}else if(u.isRectAreaLight)B=a.get(u),B.color.copy(K).multiplyScalar(G),B.position.setFromMatrixPosition(u.matrixWorld),B.position.applyMatrix4(h),e.identity(),d.copy(u.matrixWorld),d.premultiply(h),e.extractRotation(d),B.halfWidth.set(.5*u.width,0,0),B.halfHeight.set(0,.5*u.height,0),B.halfWidth.applyMatrix4(e),B.halfHeight.applyMatrix4(e),b.rectArea[t]=B,t++;else if(u.isPointLight){B=a.get(u);B.position.setFromMatrixPosition(u.matrixWorld);B.position.applyMatrix4(h);
B.color.copy(u.color).multiplyScalar(u.intensity);B.distance=u.distance;B.decay=u.decay;if(B.shadow=u.castShadow)K=u.shadow,B.shadowBias=K.bias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,B.shadowCameraNear=K.camera.near,B.shadowCameraFar=K.camera.far;b.pointShadowMap[r]=W;b.pointShadowMatrix[r]=u.shadow.matrix;b.point[r]=B;r++}else u.isHemisphereLight&&(B=a.get(u),B.direction.setFromMatrixPosition(u.matrixWorld),B.direction.transformDirection(h),B.direction.normalize(),B.skyColor.copy(u.color).multiplyScalar(G),
B.groundColor.copy(u.groundColor).multiplyScalar(G),b.hemi[v]=B,v++)}b.ambient[0]=k;b.ambient[1]=m;b.ambient[2]=q;b.directional.length=p;b.spot.length=l;b.rectArea.length=t;b.point.length=r;b.hemi.length=v;b.hash.stateID=b.id;b.hash.directionalLength=p;b.hash.pointLength=r;b.hash.spotLength=l;b.hash.rectAreaLength=t;b.hash.hemiLength=v;b.hash.shadowsLength=g.length},state:b}}function df(){var a=new Og,b=[],c=[];return{init:function(){b.length=0;c.length=0},state:{lightsArray:b,shadowsArray:c,lights:a},
setupLights:function(d){a.setup(b,c,d)},pushLight:function(a){b.push(a)},pushShadow:function(a){c.push(a)}}}function Qg(){var a={};return{get:function(b,c){if(void 0===a[b.id]){var d=new df;a[b.id]={};a[b.id][c.id]=d}else void 0===a[b.id][c.id]?(d=new df,a[b.id][c.id]=d):d=a[b.id][c.id];return d},dispose:function(){a={}}}}function db(a){L.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=
1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a)}function eb(a){L.call(this);this.type="MeshDistanceMaterial";this.referencePosition=new n;this.nearDistance=1;this.farDistance=1E3;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.lights=this.fog=!1;this.setValues(a)}function ef(a,b,c){function d(b,c,d,e,f,g){var h=b.geometry;var k=p;var m=b.customDepthMaterial;
d&&(k=r,m=b.customDistanceMaterial);m?k=m:(m=!1,c.morphTargets&&(h&&h.isBufferGeometry?m=h.morphAttributes&&h.morphAttributes.position&&0<h.morphAttributes.position.length:h&&h.isGeometry&&(m=h.morphTargets&&0<h.morphTargets.length)),b.isSkinnedMesh&&!1===c.skinning&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b),b=b.isSkinnedMesh&&c.skinning,h=0,m&&(h|=1),b&&(h|=2),k=k[h]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(h=
k.uuid,m=c.uuid,b=l[h],void 0===b&&(b={},l[h]=b),h=b[m],void 0===h&&(h=k.clone(),b[m]=h),k=h);k.visible=c.visible;k.wireframe=c.wireframe;k.side=null!=c.shadowSide?c.shadowSide:t[c.side];k.clipShadows=c.clipShadows;k.clippingPlanes=c.clippingPlanes;k.clipIntersection=c.clipIntersection;k.wireframeLinewidth=c.wireframeLinewidth;k.linewidth=c.linewidth;d&&k.isMeshDistanceMaterial&&(k.referencePosition.copy(e),k.nearDistance=f,k.farDistance=g);return k}function e(c,g,h,k){if(!1!==c.visible){if(c.layers.test(g.layers)&&
(c.isMesh||c.isLine||c.isPoints)&&c.castShadow&&(!c.frustumCulled||f.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,c.matrixWorld);var m=b.update(c),p=c.material;if(Array.isArray(p))for(var r=m.groups,l=0,t=r.length;l<t;l++){var x=r[l],W=p[x.materialIndex];W&&W.visible&&(W=d(c,W,k,q,h.near,h.far),a.renderBufferDirect(h,null,m,W,c,x))}else p.visible&&(W=d(c,p,k,q,h.near,h.far),a.renderBufferDirect(h,null,m,W,c,null))}c=c.children;m=0;for(p=c.length;m<p;m++)e(c[m],g,h,
k)}}var f=new td,g=new O,h=new z,k=new z(c,c),m=new n,q=new n,p=Array(4),r=Array(4),l={},t={0:1,1:0,2:2},v=[new n(1,0,0),new n(-1,0,0),new n(0,0,1),new n(0,0,-1),new n(0,1,0),new n(0,-1,0)],w=[new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,0,1),new n(0,0,-1)],y=[new ca,new ca,new ca,new ca,new ca,new ca];for(c=0;4!==c;++c){var u=0!==(c&1),K=0!==(c&2),G=new db({depthPacking:3201,morphTargets:u,skinning:K});p[c]=G;u=new eb({morphTargets:u,skinning:K});r[c]=u}var N=this;this.enabled=!1;
this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.render=function(b,c,d){if(!1!==N.enabled&&(!1!==N.autoUpdate||!1!==N.needsUpdate)&&0!==b.length){var p=a.state;p.disable(3042);p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0);p.setScissorTest(!1);for(var r,l=0,t=b.length;l<t;l++){var x=b[l];r=x.shadow;var W=x&&x.isPointLight;if(void 0===r)console.warn("THREE.WebGLShadowMap:",x,"has no shadow.");else{var B=r.camera;h.copy(r.mapSize);h.min(k);if(W){var n=h.x,u=h.y;y[0].set(2*n,u,
n,u);y[1].set(0,u,n,u);y[2].set(3*n,u,n,u);y[3].set(n,u,n,u);y[4].set(3*n,0,n,u);y[5].set(n,0,n,u);h.x*=4;h.y*=2}null===r.map&&(r.map=new jb(h.x,h.y,{minFilter:1003,magFilter:1003,format:1023}),r.map.texture.name=x.name+".shadowMap",B.updateProjectionMatrix());r.isSpotLightShadow&&r.update(x);n=r.map;u=r.matrix;q.setFromMatrixPosition(x.matrixWorld);B.position.copy(q);W?(r=6,u.makeTranslation(-q.x,-q.y,-q.z)):(r=1,m.setFromMatrixPosition(x.target.matrixWorld),B.lookAt(m),B.updateMatrixWorld(),u.set(.5,
0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),u.multiply(B.projectionMatrix),u.multiply(B.matrixWorldInverse));a.setRenderTarget(n);a.clear();for(x=0;x<r;x++)W&&(m.copy(B.position),m.add(v[x]),B.up.copy(w[x]),B.lookAt(m),B.updateMatrixWorld(),p.viewport(y[x])),g.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),f.setFromMatrix(g),e(c,d,B,W)}}N.needsUpdate=!1}}}function Rg(a,b,c,d){function e(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,10241,9728);a.texParameteri(b,
10240,9728);for(b=0;b<d;b++)a.texImage2D(c+b,0,6408,1,1,0,6408,5121,e);return f}function f(c,e){y[c]=1;0===u[c]&&(a.enableVertexAttribArray(c),u[c]=1);K[c]!==e&&((d.isWebGL2?a:b.get("ANGLE_instanced_arrays"))[d.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](c,e),K[c]=e)}function g(b){!0!==G[b]&&(a.enable(b),G[b]=!0)}function h(b){!1!==G[b]&&(a.disable(b),G[b]=!1)}function k(b,d,e,f,k,m,p,q){if(0===b)B&&(h(3042),B=!1);else if(B||(g(3042),B=!0),5!==b){if(b!==Mb||q!==F){if(100!==z||100!==
A)a.blendEquation(32774),A=z=100;if(q)switch(b){case 1:a.blendFuncSeparate(1,771,1,771);break;case 2:a.blendFunc(1,1);break;case 3:a.blendFuncSeparate(0,0,769,771);break;case 4:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:a.blendFuncSeparate(770,771,1,771);break;case 2:a.blendFunc(770,1);break;case 3:a.blendFunc(0,769);break;case 4:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}C=
D=Y=Yd=null;Mb=b;F=q}}else{k=k||d;m=m||e;p=p||f;if(d!==z||k!==A)a.blendEquationSeparate(c.convert(d),c.convert(k)),z=d,A=k;if(e!==Yd||f!==Y||m!==D||p!==C)a.blendFuncSeparate(c.convert(e),c.convert(f),c.convert(m),c.convert(p)),Yd=e,Y=f,D=m,C=p;Mb=b;F=null}}function m(b){I!==b&&(b?a.frontFace(2304):a.frontFace(2305),I=b)}function q(b){0!==b?(g(2884),b!==J&&(1===b?a.cullFace(1029):2===b?a.cullFace(1028):a.cullFace(1032))):h(2884);J=b}function p(b,c,d){if(b){if(g(32823),Q!==c||L!==d)a.polygonOffset(c,
d),Q=c,L=d}else h(32823)}function r(b){void 0===b&&(b=33984+R-1);H!==b&&(a.activeTexture(b),H=b)}var l=new function(){var b=!1,c=new ca,d=null,e=new ca(0,0,0,0);return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(-1,0,0,0)}}},t=new function(){var b=!1,c=null,d=null,e=null;return{setTest:function(a){a?g(2929):
h(2929)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(512);break;case 1:a.depthFunc(519);break;case 2:a.depthFunc(513);break;case 3:a.depthFunc(515);break;case 4:a.depthFunc(514);break;case 5:a.depthFunc(518);break;case 6:a.depthFunc(516);break;case 7:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);d=b}},setLocked:function(a){b=a},setClear:function(b){e!==b&&(a.clearDepth(b),e=b)},reset:function(){b=!1;e=
d=c=null}}},v=new function(){var b=!1,c=null,d=null,e=null,f=null,k=null,m=null,p=null,q=null;return{setTest:function(a){a?g(2960):h(2960)},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,g){if(d!==b||e!==c||f!==g)a.stencilFunc(b,c,g),d=b,e=c,f=g},setOp:function(b,c,d){if(k!==b||m!==c||p!==d)a.stencilOp(b,c,d),k=b,m=c,p=d},setLocked:function(a){b=a},setClear:function(b){q!==b&&(a.clearStencil(b),q=b)},reset:function(){b=!1;q=p=m=k=f=e=d=c=null}}},n=a.getParameter(34921),
y=new Uint8Array(n),u=new Uint8Array(n),K=new Uint8Array(n),G={},N=null,W=null,B=null,Mb=null,z=null,Yd=null,Y=null,A=null,D=null,C=null,F=!1,I=null,J=null,O=null,Q=null,L=null,R=a.getParameter(35661),E=!1;n=0;n=a.getParameter(7938);-1!==n.indexOf("WebGL")?(n=parseFloat(/^WebGL ([0-9])/.exec(n)[1]),E=1<=n):-1!==n.indexOf("OpenGL ES")&&(n=parseFloat(/^OpenGL ES ([0-9])/.exec(n)[1]),E=2<=n);var H=null,T={},X=new ca,M=new ca,U={};U[3553]=e(3553,3553,1);U[34067]=e(34067,34069,6);l.setClear(0,0,0,1);t.setClear(1);
v.setClear(0);g(2929);t.setFunc(3);m(!1);q(1);g(2884);k(0);return{buffers:{color:l,depth:t,stencil:v},initAttributes:function(){for(var a=0,b=y.length;a<b;a++)y[a]=0},enableAttribute:function(a){f(a,0)},enableAttributeAndDivisor:f,disableUnusedAttributes:function(){for(var b=0,c=u.length;b!==c;++b)u[b]!==y[b]&&(a.disableVertexAttribArray(b),u[b]=0)},enable:g,disable:h,getCompressedTextureFormats:function(){if(null===N&&(N=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||
b.get("WEBGL_compressed_texture_etc1")||b.get("WEBGL_compressed_texture_astc")))for(var c=a.getParameter(34467),d=0;d<c.length;d++)N.push(c[d]);return N},useProgram:function(b){return W!==b?(a.useProgram(b),W=b,!0):!1},setBlending:k,setMaterial:function(a,b){2===a.side?h(2884):g(2884);var c=1===a.side;b&&(c=!c);m(c);1===a.blending&&!1===a.transparent?k(0):k(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha);t.setFunc(a.depthFunc);
t.setTest(a.depthTest);t.setMask(a.depthWrite);l.setMask(a.colorWrite);p(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)},setFlipSided:m,setCullFace:q,setLineWidth:function(b){b!==O&&(E&&a.lineWidth(b),O=b)},setPolygonOffset:p,setScissorTest:function(a){a?g(3089):h(3089)},activeTexture:r,bindTexture:function(b,c){null===H&&r();var d=T[H];void 0===d&&(d={type:void 0,texture:void 0},T[H]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||U[b]),d.type=b,d.texture=c},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,
arguments)}catch(fa){console.error("THREE.WebGLState:",fa)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(fa){console.error("THREE.WebGLState:",fa)}},texImage3D:function(){try{a.texImage3D.apply(a,arguments)}catch(fa){console.error("THREE.WebGLState:",fa)}},scissor:function(b){!1===X.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),X.copy(b))},viewport:function(b){!1===M.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),M.copy(b))},reset:function(){for(var b=0;b<u.length;b++)1===u[b]&&(a.disableVertexAttribArray(b),
u[b]=0);G={};H=N=null;T={};J=I=Mb=W=null;l.reset();t.reset();v.reset()}}}function Sg(a,b,c,d,e,f,g){function h(a,b){if(a.width>b||a.height>b){if("data"in a){console.warn("THREE.WebGLRenderer: image in DataTexture is too big ("+a.width+"x"+a.height+").");return}b/=Math.max(a.width,a.height);var c=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");c.width=Math.floor(a.width*b);c.height=Math.floor(a.height*b);c.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,c.width,c.height);console.warn("THREE.WebGLRenderer: image is too big ("+
a.width+"x"+a.height+"). Resized to "+c.width+"x"+c.height);return c}return a}function k(a){return R.isPowerOfTwo(a.width)&&R.isPowerOfTwo(a.height)}function m(a,b){return a.generateMipmaps&&b&&1003!==a.minFilter&&1006!==a.minFilter}function q(b,c,e,f){a.generateMipmap(b);d.get(c).__maxMipLevel=Math.log(Math.max(e,f))*Math.LOG2E}function p(a,b){if(!e.isWebGL2)return a;if(6403===a){if(5126===b)return 33326;if(5131===b)return 33325;if(5121===b)return 33321}if(6407===a){if(5126===b)return 34837;if(5131===
b)return 34843;if(5121===b)return 32849}if(6408===a){if(5126===b)return 34836;if(5131===b)return 34842;if(5121===b)return 32856}return a}function r(a){return 1003===a||1004===a||1005===a?9728:9729}function l(b){b=b.target;b.removeEventListener("dispose",l);a:{var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);else{if(void 0===c.__webglInit)break a;a.deleteTexture(c.__webglTexture)}d.remove(b)}b.isVideoTexture&&delete G[b.id];g.memory.textures--}function t(b){b=
b.target;b.removeEventListener("dispose",t);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d.remove(b.texture);d.remove(b)}g.memory.textures--}
function v(a,b){var e=d.get(a);if(a.isVideoTexture){var f=a.id,h=g.render.frame;G[f]!==h&&(G[f]=h,a.update())}if(0<a.version&&e.__version!==a.version)if(f=a.image,void 0===f)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(!1===f.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{y(e,a,b);return}c.activeTexture(33984+b);c.bindTexture(3553,e.__webglTexture)}function n(c,g,h){h?(a.texParameteri(c,10242,f.convert(g.wrapS)),
a.texParameteri(c,10243,f.convert(g.wrapT)),a.texParameteri(c,10240,f.convert(g.magFilter)),a.texParameteri(c,10241,f.convert(g.minFilter))):(a.texParameteri(c,10242,33071),a.texParameteri(c,10243,33071),1001===g.wrapS&&1001===g.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(c,10240,r(g.magFilter)),a.texParameteri(c,10241,r(g.minFilter)),1003!==g.minFilter&&1006!==g.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
!(h=b.get("EXT_texture_filter_anisotropic"))||1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===(e.isWebGL2||b.get("OES_texture_half_float_linear"))||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy)}function y(b,d,r){var x=d.isDataTexture3D?32879:3553;void 0===b.__webglInit&&(b.__webglInit=!0,d.addEventListener("dispose",l),b.__webglTexture=
a.createTexture(),g.memory.textures++);c.activeTexture(33984+r);c.bindTexture(x,b.__webglTexture);a.pixelStorei(37440,d.flipY);a.pixelStorei(37441,d.premultiplyAlpha);a.pixelStorei(3317,d.unpackAlignment);r=h(d.image,e.maxTextureSize);var t=e.isWebGL2?!1:1001!==d.wrapS||1001!==d.wrapT||1003!==d.minFilter&&1006!==d.minFilter;t&&!1===k(r)&&(r instanceof HTMLImageElement||r instanceof HTMLCanvasElement||r instanceof ImageBitmap)&&(void 0===N&&(N=document.createElementNS("http://www.w3.org/1999/xhtml",
"canvas")),N.width=R.floorPowerOfTwo(r.width),N.height=R.floorPowerOfTwo(r.height),N.getContext("2d").drawImage(r,0,0,N.width,N.height),console.warn("THREE.WebGLRenderer: image is not power of two ("+r.width+"x"+r.height+"). Resized to "+N.width+"x"+N.height),r=N);t=k(r);var v=f.convert(d.format),w=f.convert(d.type),u=p(v,w);n(x,d,t);var W=d.mipmaps;if(d.isDepthTexture){u=6402;if(1015===d.type){if(!e.isWebGL2)throw Error("Float Depth Texture only supported in WebGL2.0");u=36012}else e.isWebGL2&&(u=
33189);1026===d.format&&6402===u&&1012!==d.type&&1014!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),d.type=1012,w=f.convert(d.type));1027===d.format&&(u=34041,1020!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),d.type=1020,w=f.convert(d.type)));c.texImage2D(3553,0,u,r.width,r.height,0,v,w,null)}else if(d.isDataTexture)if(0<W.length&&t){for(var B=0,G=W.length;B<G;B++)x=
W[B],c.texImage2D(3553,B,u,x.width,x.height,0,v,w,x.data);d.generateMipmaps=!1;b.__maxMipLevel=W.length-1}else c.texImage2D(3553,0,u,r.width,r.height,0,v,w,r.data),b.__maxMipLevel=0;else if(d.isCompressedTexture){B=0;for(G=W.length;B<G;B++)x=W[B],1023!==d.format&&1022!==d.format?-1<c.getCompressedTextureFormats().indexOf(v)?c.compressedTexImage2D(3553,B,u,x.width,x.height,0,x.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(3553,
B,u,x.width,x.height,0,v,w,x.data);b.__maxMipLevel=W.length-1}else if(d.isDataTexture3D)c.texImage3D(32879,0,u,r.width,r.height,r.depth,0,v,w,r.data),b.__maxMipLevel=0;else if(0<W.length&&t){B=0;for(G=W.length;B<G;B++)x=W[B],c.texImage2D(3553,B,u,v,w,x);d.generateMipmaps=!1;b.__maxMipLevel=W.length-1}else c.texImage2D(3553,0,u,v,w,r),b.__maxMipLevel=0;m(d,t)&&q(3553,d,r.width,r.height);b.__version=d.version;if(d.onUpdate)d.onUpdate(d)}function u(b,e,g,h){var k=f.convert(e.texture.format),m=f.convert(e.texture.type),
q=p(k,m);c.texImage2D(h,0,q,e.width,e.height,0,k,m,null);a.bindFramebuffer(36160,b);a.framebufferTexture2D(36160,g,h,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(36160,null)}function K(b,c){a.bindRenderbuffer(36161,b);c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(36161,33189,c.width,c.height),a.framebufferRenderbuffer(36160,36096,36161,b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(36161,34041,c.width,c.height),a.framebufferRenderbuffer(36160,33306,36161,b)):a.renderbufferStorage(36161,
32854,c.width,c.height);a.bindRenderbuffer(36161,null)}var G={},N;this.setTexture2D=v;this.setTexture3D=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?y(e,a,b):(c.activeTexture(33984+b),c.bindTexture(32879,e.__webglTexture))};this.setTextureCube=function(b,r){var x=d.get(b);if(6===b.image.length)if(0<b.version&&x.__version!==b.version){x.__image__webglTextureCube||(b.addEventListener("dispose",l),x.__image__webglTextureCube=a.createTexture(),g.memory.textures++);c.activeTexture(33984+
r);c.bindTexture(34067,x.__image__webglTextureCube);a.pixelStorei(37440,b.flipY);r=b&&b.isCompressedTexture;for(var t=b.image[0]&&b.image[0].isDataTexture,v=[],u=0;6>u;u++)v[u]=r||t?t?b.image[u].image:b.image[u]:h(b.image[u],e.maxCubemapSize);var w=v[0],W=k(w),B=f.convert(b.format),G=f.convert(b.type),K=p(B,G);n(34067,b,W);for(u=0;6>u;u++)if(r)for(var y,N=v[u].mipmaps,z=0,A=N.length;z<A;z++)y=N[z],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(B)?c.compressedTexImage2D(34069+
u,z,K,y.width,y.height,0,y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(34069+u,z,K,y.width,y.height,0,B,G,y.data);else t?c.texImage2D(34069+u,0,K,v[u].width,v[u].height,0,B,G,v[u].data):c.texImage2D(34069+u,0,K,B,G,v[u]);x.__maxMipLevel=r?N.length-1:0;m(b,W)&&q(34067,b,w.width,w.height);x.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(33984+r),c.bindTexture(34067,x.__image__webglTextureCube)};
this.setTextureCubeDynamic=function(a,b){c.activeTexture(33984+b);c.bindTexture(34067,d.get(a).__webglTexture)};this.setupRenderTarget=function(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",t);f.__webglTexture=a.createTexture();g.memory.textures++;var h=!0===b.isWebGLRenderTargetCube,p=k(b);if(h){e.__webglFramebuffer=[];for(var r=0;6>r;r++)e.__webglFramebuffer[r]=a.createFramebuffer()}else e.__webglFramebuffer=a.createFramebuffer();if(h){c.bindTexture(34067,f.__webglTexture);n(34067,
b.texture,p);for(r=0;6>r;r++)u(e.__webglFramebuffer[r],b,36064,34069+r);m(b.texture,p)&&q(34067,b.texture,b.width,b.height);c.bindTexture(34067,null)}else c.bindTexture(3553,f.__webglTexture),n(3553,b.texture,p),u(e.__webglFramebuffer,b,36064,3553),m(b.texture,p)&&q(3553,b.texture,b.width,b.height),c.bindTexture(3553,null);if(b.depthBuffer){e=d.get(b);f=!0===b.isWebGLRenderTargetCube;if(b.depthTexture){if(f)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported");
a.bindFramebuffer(36160,e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);v(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(36160,
36096,3553,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(36160,33306,3553,e,0);else throw Error("Unknown depthTexture format");}else if(f)for(e.__webglDepthbuffer=[],f=0;6>f;f++)a.bindFramebuffer(36160,e.__webglFramebuffer[f]),e.__webglDepthbuffer[f]=a.createRenderbuffer(),K(e.__webglDepthbuffer[f],b);else a.bindFramebuffer(36160,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),K(e.__webglDepthbuffer,b);a.bindFramebuffer(36160,null)}};this.updateRenderTargetMipmap=
function(a){var b=a.texture,e=k(a);if(m(b,e)){e=a.isWebGLRenderTargetCube?34067:3553;var f=d.get(b).__webglTexture;c.bindTexture(e,f);q(e,b,a.width,a.height);c.bindTexture(e,null)}}}function ff(a,b,c){return{convert:function(a){if(1E3===a)return 10497;if(1001===a)return 33071;if(1002===a)return 33648;if(1003===a)return 9728;if(1004===a)return 9984;if(1005===a)return 9986;if(1006===a)return 9729;if(1007===a)return 9985;if(1008===a)return 9987;if(1009===a)return 5121;if(1017===a)return 32819;if(1018===
a)return 32820;if(1019===a)return 33635;if(1010===a)return 5120;if(1011===a)return 5122;if(1012===a)return 5123;if(1013===a)return 5124;if(1014===a)return 5125;if(1015===a)return 5126;if(1016===a){if(c.isWebGL2)return 5131;var d=b.get("OES_texture_half_float");if(null!==d)return d.HALF_FLOAT_OES}if(1021===a)return 6406;if(1022===a)return 6407;if(1023===a)return 6408;if(1024===a)return 6409;if(1025===a)return 6410;if(1026===a)return 6402;if(1027===a)return 34041;if(1028===a)return 6403;if(100===a)return 32774;
if(101===a)return 32778;if(102===a)return 32779;if(200===a)return 0;if(201===a)return 1;if(202===a)return 768;if(203===a)return 769;if(204===a)return 770;if(205===a)return 771;if(206===a)return 772;if(207===a)return 773;if(208===a)return 774;if(209===a)return 775;if(210===a)return 776;if(33776===a||33777===a||33778===a||33779===a)if(d=b.get("WEBGL_compressed_texture_s3tc"),null!==d){if(33776===a)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===a)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===a)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;
if(33779===a)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(35840===a||35841===a||35842===a||35843===a)if(d=b.get("WEBGL_compressed_texture_pvrtc"),null!==d){if(35840===a)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===a)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===a)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===a)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===a&&(d=b.get("WEBGL_compressed_texture_etc1"),null!==d))return d.COMPRESSED_RGB_ETC1_WEBGL;if(37808===a||37809===a||37810===
a||37811===a||37812===a||37813===a||37814===a||37815===a||37816===a||37817===a||37818===a||37819===a||37820===a||37821===a)if(d=b.get("WEBGL_compressed_texture_astc"),null!==d)return a;if(103===a||104===a){if(c.isWebGL2){if(103===a)return 32775;if(104===a)return 32776}d=b.get("EXT_blend_minmax");if(null!==d){if(103===a)return d.MIN_EXT;if(104===a)return d.MAX_EXT}}if(1020===a){if(c.isWebGL2)return 34042;d=b.get("WEBGL_depth_texture");if(null!==d)return d.UNSIGNED_INT_24_8_WEBGL}return 0}}}function Pb(){D.call(this);
this.type="Group"}function Ra(){D.call(this);this.type="Camera";this.matrixWorldInverse=new O;this.projectionMatrix=new O;this.projectionMatrixInverse=new O}function V(a,b,c,d){Ra.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function Dc(a){V.call(this);this.cameras=a||[]}function gf(a,b,c){hf.setFromMatrixPosition(b.matrixWorld);
jf.setFromMatrixPosition(c.matrixWorld);var d=hf.distanceTo(jf),e=b.projectionMatrix.elements,f=c.projectionMatrix.elements,g=e[14]/(e[10]-1);c=e[14]/(e[10]+1);var h=(e[9]+1)/e[5],k=(e[9]-1)/e[5],m=(e[8]-1)/e[0],q=(f[8]+1)/f[0];e=g*m;f=g*q;q=d/(-m+q);m=q*-m;b.matrixWorld.decompose(a.position,a.quaternion,a.scale);a.translateX(m);a.translateZ(q);a.matrixWorld.compose(a.position,a.quaternion,a.scale);a.matrixWorldInverse.getInverse(a.matrixWorld);b=g+q;g=c+q;a.projectionMatrix.makePerspective(e-m,f+
(d-m),h*c/g*b,k*c/g*b,b,g)}function kf(a){function b(){return null!==e&&!0===e.isPresenting}function c(){if(b()){var c=e.getEyeParameters("left"),f=c.renderWidth*q;c=c.renderHeight*q;K=a.getPixelRatio();u=a.getSize();a.setDrawingBufferSize(2*f,c,1);N.start()}else d.enabled&&a.setDrawingBufferSize(u.width,u.height,K),N.stop()}var d=this,e=null,f=null,g=null,h=[],k=new O,m=new O,q=1,p="stage";"undefined"!==typeof window&&"VRFrameData"in window&&(f=new window.VRFrameData,window.addEventListener("vrdisplaypresentchange",
c,!1));var r=new O,l=new ka,t=new n,v=new V;v.bounds=new ca(0,0,.5,1);v.layers.enable(1);var w=new V;w.bounds=new ca(.5,0,.5,1);w.layers.enable(2);var y=new Dc([v,w]);y.layers.enable(1);y.layers.enable(2);var u,K,G=[];this.enabled=!1;this.getController=function(a){var b=h[a];void 0===b&&(b=new Pb,b.matrixAutoUpdate=!1,b.visible=!1,h[a]=b);return b};this.getDevice=function(){return e};this.setDevice=function(a){void 0!==a&&(e=a);N.setContext(a)};this.setFramebufferScaleFactor=function(a){q=a};this.setFrameOfReferenceType=
function(a){p=a};this.setPoseTarget=function(a){void 0!==a&&(g=a)};this.getCamera=function(a){var b="stage"===p?1.6:0;if(null===e)return a.position.set(0,b,0),a;e.depthNear=a.near;e.depthFar=a.far;e.getFrameData(f);if("stage"===p){var c=e.stageParameters;c?k.fromArray(c.sittingToStandingTransform):k.makeTranslation(0,b,0)}b=f.pose;c=null!==g?g:a;c.matrix.copy(k);c.matrix.decompose(c.position,c.quaternion,c.scale);null!==b.orientation&&(l.fromArray(b.orientation),c.quaternion.multiply(l));null!==b.position&&
(l.setFromRotationMatrix(k),t.fromArray(b.position),t.applyQuaternion(l),c.position.add(t));c.updateMatrixWorld();if(!1===e.isPresenting)return a;v.near=a.near;w.near=a.near;v.far=a.far;w.far=a.far;v.matrixWorldInverse.fromArray(f.leftViewMatrix);w.matrixWorldInverse.fromArray(f.rightViewMatrix);m.getInverse(k);"stage"===p&&(v.matrixWorldInverse.multiply(m),w.matrixWorldInverse.multiply(m));a=c.parent;null!==a&&(r.getInverse(a.matrixWorld),v.matrixWorldInverse.multiply(r),w.matrixWorldInverse.multiply(r));
v.matrixWorld.getInverse(v.matrixWorldInverse);w.matrixWorld.getInverse(w.matrixWorldInverse);v.projectionMatrix.fromArray(f.leftProjectionMatrix);w.projectionMatrix.fromArray(f.rightProjectionMatrix);gf(y,v,w);a=e.getLayers();a.length&&(a=a[0],null!==a.leftBounds&&4===a.leftBounds.length&&v.bounds.fromArray(a.leftBounds),null!==a.rightBounds&&4===a.rightBounds.length&&w.bounds.fromArray(a.rightBounds));a:for(a=0;a<h.length;a++){b=h[a];b:{c=a;for(var d=navigator.getGamepads&&navigator.getGamepads(),
q=0,x=0,n=d.length;q<n;q++){var u=d[q];if(u&&("Daydream Controller"===u.id||"Gear VR Controller"===u.id||"Oculus Go Controller"===u.id||"OpenVR Gamepad"===u.id||u.id.startsWith("Oculus Touch")||u.id.startsWith("Spatial Controller"))){if(x===c){c=u;break b}x++}}c=void 0}if(void 0!==c&&void 0!==c.pose){if(null===c.pose)break a;d=c.pose;!1===d.hasPosition&&b.position.set(.2,-.6,-.05);null!==d.position&&b.position.fromArray(d.position);null!==d.orientation&&b.quaternion.fromArray(d.orientation);b.matrix.compose(b.position,
b.quaternion,b.scale);b.matrix.premultiply(k);b.matrix.decompose(b.position,b.quaternion,b.scale);b.matrixWorldNeedsUpdate=!0;b.visible=!0;d="Daydream Controller"===c.id?0:1;G[a]!==c.buttons[d].pressed&&(G[a]=c.buttons[d].pressed,!0===G[a]?b.dispatchEvent({type:"selectstart"}):(b.dispatchEvent({type:"selectend"}),b.dispatchEvent({type:"select"})))}else b.visible=!1}return y};this.getStandingMatrix=function(){return k};this.isPresenting=b;var N=new Wd;this.setAnimationLoop=function(a){N.setAnimationLoop(a)};
this.submitFrame=function(){b()&&e.submitFrame()};this.dispose=function(){"undefined"!==typeof window&&window.removeEventListener("vrdisplaypresentchange",c)}}function Tg(a){function b(){return null!==h&&null!==m}function c(a){var b=r[l.indexOf(a.inputSource)];b&&b.dispatchEvent({type:a.type})}function d(){a.setFramebuffer(null);u.stop()}function e(a,b){null===b?a.matrixWorld.copy(a.matrix):a.matrixWorld.multiplyMatrices(b.matrixWorld,a.matrix);a.matrixWorldInverse.getInverse(a.matrixWorld)}var f=
a.context,g=null,h=null,k=1,m=null,q="stage",p=null,r=[],l=[],t=new V;t.layers.enable(1);t.viewport=new ca;var v=new V;v.layers.enable(2);v.viewport=new ca;var n=new Dc([t,v]);n.layers.enable(1);n.layers.enable(2);this.enabled=!1;this.getController=function(a){var b=r[a];void 0===b&&(b=new Pb,b.matrixAutoUpdate=!1,b.visible=!1,r[a]=b);return b};this.getDevice=function(){return g};this.setDevice=function(a){void 0!==a&&(g=a);a instanceof XRDevice&&f.setCompatibleXRDevice(a)};this.setFramebufferScaleFactor=
function(a){k=a};this.setFrameOfReferenceType=function(a){q=a};this.setSession=function(b){h=b;null!==h&&(h.addEventListener("select",c),h.addEventListener("selectstart",c),h.addEventListener("selectend",c),h.addEventListener("end",d),h.baseLayer=new XRWebGLLayer(h,f,{framebufferScaleFactor:k}),h.requestFrameOfReference(q).then(function(b){m=b;a.setFramebuffer(h.baseLayer.framebuffer);u.setContext(h);u.start()}),l=h.getInputSources(),h.addEventListener("inputsourceschange",function(){l=h.getInputSources();
console.log(l);for(var a=0;a<r.length;a++)r[a].userData.inputSource=l[a]}))};this.getCamera=function(a){if(b()){var c=a.parent,d=n.cameras;e(n,c);for(var f=0;f<d.length;f++)e(d[f],c);a.matrixWorld.copy(n.matrixWorld);a=a.children;f=0;for(c=a.length;f<c;f++)a[f].updateMatrixWorld(!0);gf(n,t,v);return n}return a};this.isPresenting=b;var y=null,u=new Wd;u.setAnimationLoop(function(a,b){p=b.getDevicePose(m);if(null!==p)for(var c=h.baseLayer,d=b.views,e=0;e<d.length;e++){var f=d[e],g=c.getViewport(f),
k=p.getViewMatrix(f),q=n.cameras[e];q.matrix.fromArray(k).getInverse(q.matrix);q.projectionMatrix.fromArray(f.projectionMatrix);q.viewport.set(g.x,g.y,g.width,g.height);0===e&&n.matrix.copy(q.matrix)}for(e=0;e<r.length;e++){c=r[e];if(d=l[e])if(d=b.getInputPose(d,m),null!==d){"targetRay"in d?c.matrix.elements=d.targetRay.transformMatrix:"pointerMatrix"in d&&(c.matrix.elements=d.pointerMatrix);c.matrix.decompose(c.position,c.rotation,c.scale);c.visible=!0;continue}c.visible=!1}y&&y(a)});this.setAnimationLoop=
function(a){y=a};this.dispose=function(){};this.getStandingMatrix=function(){console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed.");return new THREE.Matrix4};this.submitFrame=function(){}}function be(a){var b;function c(){la=new Wf(P);xa=new Uf(P,la,a);xa.isWebGL2||(la.get("WEBGL_depth_texture"),la.get("OES_texture_float"),la.get("OES_texture_half_float"),la.get("OES_texture_half_float_linear"),la.get("OES_standard_derivatives"),la.get("OES_element_index_uint"),la.get("ANGLE_instanced_arrays"));
la.get("OES_texture_float_linear");ia=new ff(P,la,xa);aa=new Rg(P,la,ia,xa);aa.scissor(Cc.copy(ka).multiplyScalar(U));aa.viewport(S.copy(fa).multiplyScalar(U));da=new Zf(P);Ca=new Jg;ha=new Sg(P,la,aa,Ca,xa,ia,da);ra=new Nf(P);ua=new Xf(P,ra,da);oa=new bg(ua,da);ya=new ag(P);na=new Ig(Y,la,xa);ta=new Mg;pa=new Qg;ma=new Sf(Y,aa,oa,z);za=new Tf(P,la,da,xa);Aa=new Yf(P,la,da,xa);da.programs=na.programs;Y.context=P;Y.capabilities=xa;Y.extensions=la;Y.properties=Ca;Y.renderLists=ta;Y.state=aa;Y.info=
da}function d(a){a.preventDefault();console.log("THREE.WebGLRenderer: Context Lost.");I=!0}function e(){console.log("THREE.WebGLRenderer: Context Restored.");I=!1;c()}function f(a){a=a.target;a.removeEventListener("dispose",f);g(a);Ca.remove(a)}function g(a){var b=Ca.get(a).program;a.program=void 0;void 0!==b&&na.releaseProgram(b)}function h(a,b){a.render(function(a){Y.renderBufferImmediate(a,b)})}function k(a,b,c){if(!1!==a.visible){if(a.layers.test(b.layers))if(a.isLight)C.pushLight(a),a.castShadow&&
C.pushShadow(a);else if(a.isSprite){if(!a.frustumCulled||qa.intersectsSprite(a)){c&&fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Bc);var d=oa.update(a),e=a.material;D.push(a,d,e,fb.z,null)}}else if(a.isImmediateRenderObject)c&&fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Bc),D.push(a,null,a.material,fb.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.update(),!a.frustumCulled||qa.intersectsObject(a))if(c&&fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Bc),
d=oa.update(a),e=a.material,Array.isArray(e))for(var f=d.groups,g=0,h=f.length;g<h;g++){var m=f[g],p=e[m.materialIndex];p&&p.visible&&D.push(a,d,p,fb.z,m)}else e.visible&&D.push(a,d,e,fb.z,null);a=a.children;g=0;for(h=a.length;g<h;g++)k(a[g],b,c)}}function m(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,k=g.geometry,m=void 0===d?g.material:d;g=g.group;if(c.isArrayCamera){X=c;for(var p=c.cameras,r=0,l=p.length;r<l;r++){var t=p[r];if(h.layers.test(t.layers)){if("viewport"in t)aa.viewport(S.copy(t.viewport));
else{var x=t.bounds;aa.viewport(S.set(x.x*V,x.y*M,x.z*V,x.w*M).multiplyScalar(U))}C.setupLights(t);q(h,b,t,k,m,g)}}}else X=null,q(h,b,c,k,m,g)}}function q(a,c,d,e,f,g){a.onBeforeRender(Y,c,d,e,f,g);C=pa.get(c,X||d);a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);if(a.isImmediateRenderObject){aa.setMaterial(f);var k=r(d,c.fog,f,a);H=b=null;ud=!1;h(a,k)}else Y.renderBufferDirect(d,c.fog,e,f,a,g);a.onAfterRender(Y,c,d,e,f,g);C=
pa.get(c,X||d)}function p(a,b,c){var d=Ca.get(a),e=C.state.lights,h=d.lightsHash,k=e.state.hash;c=na.getParameters(a,e.state,C.state.shadowsArray,b,Z.numPlanes,Z.numIntersection,c);var m=na.getProgramCode(a,c),p=d.program,q=!0;if(void 0===p)a.addEventListener("dispose",f);else if(p.code!==m)g(a);else{if(h.stateID!==k.stateID||h.directionalLength!==k.directionalLength||h.pointLength!==k.pointLength||h.spotLength!==k.spotLength||h.rectAreaLength!==k.rectAreaLength||h.hemiLength!==k.hemiLength||h.shadowsLength!==
k.shadowsLength)h.stateID=k.stateID,h.directionalLength=k.directionalLength,h.pointLength=k.pointLength,h.spotLength=k.spotLength,h.rectAreaLength=k.rectAreaLength,h.hemiLength=k.hemiLength,h.shadowsLength=k.shadowsLength;else if(void 0!==c.shaderID)return;q=!1}q&&(c.shaderID?(m=Qa[c.shaderID],d.shader={name:a.type,uniforms:Jb(m.uniforms),vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}):d.shader={name:a.type,uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader},
a.onBeforeCompile(d.shader,Y),m=na.getProgramCode(a,c),p=na.acquireProgram(a,d.shader,c,m),d.program=p,a.program=p);c=p.getAttributes();if(a.morphTargets)for(m=a.numSupportedMorphTargets=0;m<Y.maxMorphTargets;m++)0<=c["morphTarget"+m]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(m=a.numSupportedMorphNormals=0;m<Y.maxMorphNormals;m++)0<=c["morphNormal"+m]&&a.numSupportedMorphNormals++;c=d.shader.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||!0===a.clipping)d.numClippingPlanes=Z.numPlanes,
d.numIntersection=Z.numIntersection,c.clippingPlanes=Z.uniform;d.fog=b;void 0===h&&(d.lightsHash=h={});h.stateID=k.stateID;h.directionalLength=k.directionalLength;h.pointLength=k.pointLength;h.spotLength=k.spotLength;h.rectAreaLength=k.rectAreaLength;h.hemiLength=k.hemiLength;h.shadowsLength=k.shadowsLength;a.lights&&(c.ambientLightColor.value=e.state.ambient,c.directionalLights.value=e.state.directional,c.spotLights.value=e.state.spot,c.rectAreaLights.value=e.state.rectArea,c.pointLights.value=e.state.point,
c.hemisphereLights.value=e.state.hemi,c.directionalShadowMap.value=e.state.directionalShadowMap,c.directionalShadowMatrix.value=e.state.directionalShadowMatrix,c.spotShadowMap.value=e.state.spotShadowMap,c.spotShadowMatrix.value=e.state.spotShadowMatrix,c.pointShadowMap.value=e.state.pointShadowMap,c.pointShadowMatrix.value=e.state.pointShadowMatrix);a=d.program.getUniforms();a=cb.seqWithValue(a.seq,c);d.uniformsList=a}function r(a,b,c,d){ba=0;var e=Ca.get(c),f=e.lightsHash,g=C.state.lights.state.hash;
wd&&(ae||a!==T)&&Z.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,e,a===T&&c.id===E);!1===c.needsUpdate&&(void 0===e.program?c.needsUpdate=!0:c.fog&&e.fog!==b?c.needsUpdate=!0:!c.lights||f.stateID===g.stateID&&f.directionalLength===g.directionalLength&&f.pointLength===g.pointLength&&f.spotLength===g.spotLength&&f.rectAreaLength===g.rectAreaLength&&f.hemiLength===g.hemiLength&&f.shadowsLength===g.shadowsLength?void 0===e.numClippingPlanes||e.numClippingPlanes===Z.numPlanes&&e.numIntersection===
Z.numIntersection||(c.needsUpdate=!0):c.needsUpdate=!0);c.needsUpdate&&(p(c,b,d),c.needsUpdate=!1);var h=!1,k=!1,m=!1;f=e.program;g=f.getUniforms();var q=e.shader.uniforms;aa.useProgram(f.program)&&(m=k=h=!0);c.id!==E&&(E=c.id,k=!0);if(h||T!==a){g.setValue(P,"projectionMatrix",a.projectionMatrix);xa.logarithmicDepthBuffer&&g.setValue(P,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));T!==a&&(T=a,m=k=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap)h=g.map.cameraPosition,
void 0!==h&&h.setValue(P,fb.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&g.setValue(P,"viewMatrix",a.matrixWorldInverse)}if(c.skinning&&(g.setOptional(P,d,"bindMatrix"),g.setOptional(P,d,"bindMatrixInverse"),a=d.skeleton))if(h=a.bones,xa.floatVertexTextures){if(void 0===a.boneTexture){h=Math.sqrt(4*h.length);h=R.ceilPowerOfTwo(h);h=Math.max(h,4);var r=new Float32Array(h*h*4);
r.set(a.boneMatrices);var x=new kb(r,h,h,1023,1015);x.needsUpdate=!0;a.boneMatrices=r;a.boneTexture=x;a.boneTextureSize=h}g.setValue(P,"boneTexture",a.boneTexture);g.setValue(P,"boneTextureSize",a.boneTextureSize)}else g.setOptional(P,a,"boneMatrices");k&&(g.setValue(P,"toneMappingExposure",Y.toneMappingExposure),g.setValue(P,"toneMappingWhitePoint",Y.toneMappingWhitePoint),c.lights&&(k=m,q.ambientLightColor.needsUpdate=k,q.directionalLights.needsUpdate=k,q.pointLights.needsUpdate=k,q.spotLights.needsUpdate=
k,q.rectAreaLights.needsUpdate=k,q.hemisphereLights.needsUpdate=k),b&&c.fog&&(q.fogColor.value=b.color,b.isFog?(q.fogNear.value=b.near,q.fogFar.value=b.far):b.isFogExp2&&(q.fogDensity.value=b.density)),c.isMeshBasicMaterial?l(q,c):c.isMeshLambertMaterial?(l(q,c),c.emissiveMap&&(q.emissiveMap.value=c.emissiveMap)):c.isMeshPhongMaterial?(l(q,c),c.isMeshToonMaterial?(t(q,c),c.gradientMap&&(q.gradientMap.value=c.gradientMap)):t(q,c)):c.isMeshStandardMaterial?(l(q,c),c.isMeshPhysicalMaterial?(v(q,c),q.reflectivity.value=
c.reflectivity,q.clearCoat.value=c.clearCoat,q.clearCoatRoughness.value=c.clearCoatRoughness):v(q,c)):c.isMeshMatcapMaterial?(l(q,c),c.matcap&&(q.matcap.value=c.matcap),c.bumpMap&&(q.bumpMap.value=c.bumpMap,q.bumpScale.value=c.bumpScale,1===c.side&&(q.bumpScale.value*=-1)),c.normalMap&&(q.normalMap.value=c.normalMap,q.normalScale.value.copy(c.normalScale),1===c.side&&q.normalScale.value.negate()),c.displacementMap&&(q.displacementMap.value=c.displacementMap,q.displacementScale.value=c.displacementScale,
q.displacementBias.value=c.displacementBias)):c.isMeshDepthMaterial?(l(q,c),c.displacementMap&&(q.displacementMap.value=c.displacementMap,q.displacementScale.value=c.displacementScale,q.displacementBias.value=c.displacementBias)):c.isMeshDistanceMaterial?(l(q,c),c.displacementMap&&(q.displacementMap.value=c.displacementMap,q.displacementScale.value=c.displacementScale,q.displacementBias.value=c.displacementBias),q.referencePosition.value.copy(c.referencePosition),q.nearDistance.value=c.nearDistance,
q.farDistance.value=c.farDistance):c.isMeshNormalMaterial?(l(q,c),c.bumpMap&&(q.bumpMap.value=c.bumpMap,q.bumpScale.value=c.bumpScale,1===c.side&&(q.bumpScale.value*=-1)),c.normalMap&&(q.normalMap.value=c.normalMap,q.normalScale.value.copy(c.normalScale),1===c.side&&q.normalScale.value.negate()),c.displacementMap&&(q.displacementMap.value=c.displacementMap,q.displacementScale.value=c.displacementScale,q.displacementBias.value=c.displacementBias)):c.isLineBasicMaterial?(q.diffuse.value=c.color,q.opacity.value=
c.opacity,c.isLineDashedMaterial&&(q.dashSize.value=c.dashSize,q.totalSize.value=c.dashSize+c.gapSize,q.scale.value=c.scale)):c.isPointsMaterial?(q.diffuse.value=c.color,q.opacity.value=c.opacity,q.size.value=c.size*U,q.scale.value=.5*M,q.map.value=c.map,null!==c.map&&(!0===c.map.matrixAutoUpdate&&c.map.updateMatrix(),q.uvTransform.value.copy(c.map.matrix))):c.isSpriteMaterial?(q.diffuse.value=c.color,q.opacity.value=c.opacity,q.rotation.value=c.rotation,q.map.value=c.map,null!==c.map&&(!0===c.map.matrixAutoUpdate&&
c.map.updateMatrix(),q.uvTransform.value.copy(c.map.matrix))):c.isShadowMaterial&&(q.color.value=c.color,q.opacity.value=c.opacity),void 0!==q.ltc_1&&(q.ltc_1.value=F.LTC_1),void 0!==q.ltc_2&&(q.ltc_2.value=F.LTC_2),cb.upload(P,e.uniformsList,q,Y));c.isShaderMaterial&&!0===c.uniformsNeedUpdate&&(cb.upload(P,e.uniformsList,q,Y),c.uniformsNeedUpdate=!1);c.isSpriteMaterial&&g.setValue(P,"center",d.center);g.setValue(P,"modelViewMatrix",d.modelViewMatrix);g.setValue(P,"normalMatrix",d.normalMatrix);g.setValue(P,
"modelMatrix",d.matrixWorld);return f}function l(a,b){a.opacity.value=b.opacity;b.color&&(a.diffuse.value=b.color);b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);b.map&&(a.map.value=b.map);b.alphaMap&&(a.alphaMap.value=b.alphaMap);b.specularMap&&(a.specularMap.value=b.specularMap);b.envMap&&(a.envMap.value=b.envMap,a.flipEnvMap.value=b.envMap.isCubeTexture?-1:1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio,a.maxMipLevel.value=Ca.get(b.envMap).__maxMipLevel);
b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity);b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);if(b.map)var c=b.map;else b.specularMap?c=b.specularMap:b.displacementMap?c=b.displacementMap:b.normalMap?c=b.normalMap:b.bumpMap?c=b.bumpMap:b.roughnessMap?c=b.roughnessMap:b.metalnessMap?c=b.metalnessMap:b.alphaMap?c=b.alphaMap:b.emissiveMap&&(c=b.emissiveMap);void 0!==c&&(c.isWebGLRenderTarget&&(c=c.texture),!0===c.matrixAutoUpdate&&c.updateMatrix(),
a.uvTransform.value.copy(c.matrix))}function t(a,b){a.specular.value=b.specular;a.shininess.value=Math.max(b.shininess,1E-4);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale,1===b.side&&(a.bumpScale.value*=-1));b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale),1===b.side&&a.normalScale.value.negate());b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,
a.displacementBias.value=b.displacementBias)}function v(a,b){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale,1===b.side&&(a.bumpScale.value*=-1));b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale),1===b.side&&a.normalScale.value.negate());
b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);b.envMap&&(a.envMapIntensity.value=b.envMapIntensity)}console.log("THREE.WebGLRenderer","100");a=a||{};var w=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),y=void 0!==a.context?a.context:null,u=void 0!==a.alpha?a.alpha:!1,K=void 0!==a.depth?a.depth:!0,G=void 0!==a.stencil?a.stencil:!0,N=void 0!==a.antialias?
a.antialias:!1,z=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,B=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,A=void 0!==a.powerPreference?a.powerPreference:"default",D=null,C=null;this.domElement=w;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=
this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var Y=this,I=!1,J=null,Q=null,L=null,E=-1;var H=b=null;var ud=!1;var T=null,X=null,S=new ca,Cc=new ca,ea=null,ba=0,V=w.width,M=w.height,U=1,fa=new ca(0,0,V,M),ka=new ca(0,0,V,M),sa=!1,qa=new td,Z=new Vf,wd=!1,ae=!1,Bc=new O,fb=new n;try{u={alpha:u,depth:K,stencil:G,antialias:N,premultipliedAlpha:z,preserveDrawingBuffer:B,powerPreference:A};w.addEventListener("webglcontextlost",d,!1);w.addEventListener("webglcontextrestored",e,!1);var P=
y||w.getContext("webgl",u)||w.getContext("experimental-webgl",u);if(null===P){if(null!==w.getContext("webgl"))throw Error("Error creating WebGL context with your selected attributes.");throw Error("Error creating WebGL context.");}void 0===P.getShaderPrecisionFormat&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(Ug){console.error("THREE.WebGLRenderer: "+Ug.message)}var la,xa,aa,da,Ca,ha,ra,ua,oa,na,ta,pa,ma,ya,za,Aa,ia;c();var ja=null;"undefined"!==typeof navigator&&
(ja="xr"in navigator?new Tg(Y):new kf(Y));this.vr=ja;var Ba=new ef(Y,oa,xa.maxTextureSize);this.shadowMap=Ba;this.getContext=function(){return P};this.getContextAttributes=function(){return P.getContextAttributes()};this.forceContextLoss=function(){var a=la.get("WEBGL_lose_context");a&&a.loseContext()};this.forceContextRestore=function(){var a=la.get("WEBGL_lose_context");a&&a.restoreContext()};this.getPixelRatio=function(){return U};this.setPixelRatio=function(a){void 0!==a&&(U=a,this.setSize(V,
M,!1))};this.getSize=function(){return{width:V,height:M}};this.setSize=function(a,b,c){ja.isPresenting()?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(V=a,M=b,w.width=a*U,w.height=b*U,!1!==c&&(w.style.width=a+"px",w.style.height=b+"px"),this.setViewport(0,0,a,b))};this.getDrawingBufferSize=function(){return{width:V*U,height:M*U}};this.setDrawingBufferSize=function(a,b,c){V=a;M=b;U=c;w.width=a*c;w.height=b*c;this.setViewport(0,0,a,b)};this.getCurrentViewport=
function(){return S};this.setViewport=function(a,b,c,d){fa.set(a,M-b-d,c,d);aa.viewport(S.copy(fa).multiplyScalar(U))};this.setScissor=function(a,b,c,d){ka.set(a,M-b-d,c,d);aa.scissor(Cc.copy(ka).multiplyScalar(U))};this.setScissorTest=function(a){aa.setScissorTest(sa=a)};this.getClearColor=function(){return ma.getClearColor()};this.setClearColor=function(){ma.setClearColor.apply(ma,arguments)};this.getClearAlpha=function(){return ma.getClearAlpha()};this.setClearAlpha=function(){ma.setClearAlpha.apply(ma,
arguments)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=16384;if(void 0===b||b)d|=256;if(void 0===c||c)d|=1024;P.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.dispose=function(){w.removeEventListener("webglcontextlost",d,!1);w.removeEventListener("webglcontextrestored",e,!1);ta.dispose();pa.dispose();Ca.dispose();oa.dispose();ja.dispose();va.stop()};this.renderBufferImmediate=
function(a,b){aa.initAttributes();var c=Ca.get(a);a.hasPositions&&!c.position&&(c.position=P.createBuffer());a.hasNormals&&!c.normal&&(c.normal=P.createBuffer());a.hasUvs&&!c.uv&&(c.uv=P.createBuffer());a.hasColors&&!c.color&&(c.color=P.createBuffer());b=b.getAttributes();a.hasPositions&&(P.bindBuffer(34962,c.position),P.bufferData(34962,a.positionArray,35048),aa.enableAttribute(b.position),P.vertexAttribPointer(b.position,3,5126,!1,0,0));a.hasNormals&&(P.bindBuffer(34962,c.normal),P.bufferData(34962,
a.normalArray,35048),aa.enableAttribute(b.normal),P.vertexAttribPointer(b.normal,3,5126,!1,0,0));a.hasUvs&&(P.bindBuffer(34962,c.uv),P.bufferData(34962,a.uvArray,35048),aa.enableAttribute(b.uv),P.vertexAttribPointer(b.uv,2,5126,!1,0,0));a.hasColors&&(P.bindBuffer(34962,c.color),P.bufferData(34962,a.colorArray,35048),aa.enableAttribute(b.color),P.vertexAttribPointer(b.color,3,5126,!1,0,0));aa.disableUnusedAttributes();P.drawArrays(4,0,a.count);a.count=0};this.renderBufferDirect=function(a,c,d,e,f,
g){var h=f.isMesh&&0>f.normalMatrix.determinant();aa.setMaterial(e,h);var k=r(a,c,e,f),m=!1;if(b!==d.id||H!==k.id||ud!==(!0===e.wireframe))b=d.id,H=k.id,ud=!0===e.wireframe,m=!0;f.morphTargetInfluences&&(ya.update(f,d,e,k),m=!0);h=d.index;var q=d.attributes.position;c=1;!0===e.wireframe&&(h=ua.getWireframeAttribute(d),c=2);a=za;if(null!==h){var p=ra.get(h);a=Aa;a.setIndex(p)}if(m){if(d&&d.isInstancedBufferGeometry&!xa.isWebGL2&&null===la.get("ANGLE_instanced_arrays"))console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
else{aa.initAttributes();m=d.attributes;k=k.getAttributes();var l=e.defaultAttributeValues;for(B in k){var t=k[B];if(0<=t){var x=m[B];if(void 0!==x){var v=x.normalized,n=x.itemSize,u=ra.get(x);if(void 0!==u){var w=u.buffer,y=u.type;u=u.bytesPerElement;if(x.isInterleavedBufferAttribute){var G=x.data,K=G.stride;x=x.offset;G&&G.isInstancedInterleavedBuffer?(aa.enableAttributeAndDivisor(t,G.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=G.meshPerAttribute*G.count)):aa.enableAttribute(t);
P.bindBuffer(34962,w);P.vertexAttribPointer(t,n,y,v,K*u,x*u)}else x.isInstancedBufferAttribute?(aa.enableAttributeAndDivisor(t,x.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=x.meshPerAttribute*x.count)):aa.enableAttribute(t),P.bindBuffer(34962,w),P.vertexAttribPointer(t,n,y,v,0,0)}}else if(void 0!==l&&(v=l[B],void 0!==v))switch(v.length){case 2:P.vertexAttrib2fv(t,v);break;case 3:P.vertexAttrib3fv(t,v);break;case 4:P.vertexAttrib4fv(t,v);break;default:P.vertexAttrib1fv(t,v)}}}aa.disableUnusedAttributes()}null!==
h&&P.bindBuffer(34963,p.buffer)}p=Infinity;null!==h?p=h.count:void 0!==q&&(p=q.count);h=d.drawRange.start*c;q=null!==g?g.start*c:0;var B=Math.max(h,q);g=Math.max(0,Math.min(p,h+d.drawRange.count*c,q+(null!==g?g.count*c:Infinity))-1-B+1);if(0!==g){if(f.isMesh)if(!0===e.wireframe)aa.setLineWidth(e.wireframeLinewidth*(null===Q?U:1)),a.setMode(1);else switch(f.drawMode){case 0:a.setMode(4);break;case 1:a.setMode(5);break;case 2:a.setMode(6)}else f.isLine?(e=e.linewidth,void 0===e&&(e=1),aa.setLineWidth(e*
(null===Q?U:1)),f.isLineSegments?a.setMode(1):f.isLineLoop?a.setMode(2):a.setMode(3)):f.isPoints?a.setMode(0):f.isSprite&&a.setMode(4);d&&d.isInstancedBufferGeometry?0<d.maxInstancedCount&&a.renderInstances(d,B,g):a.render(B,g)}};this.compile=function(a,b){C=pa.get(a,b);C.init();a.traverse(function(a){a.isLight&&(C.pushLight(a),a.castShadow&&C.pushShadow(a))});C.setupLights(b);a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var c=0;c<b.material.length;c++)p(b.material[c],a.fog,
b);else p(b.material,a.fog,b)})};var wa=null,va=new Wd;va.setAnimationLoop(function(a){ja.isPresenting()||wa&&wa(a)});"undefined"!==typeof window&&va.setContext(window);this.setAnimationLoop=function(a){wa=a;ja.setAnimationLoop(a);va.start()};this.render=function(a,c,d,e){if(!c||!c.isCamera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else if(!I){H=b=null;ud=!1;E=-1;T=null;!0===a.autoUpdate&&a.updateMatrixWorld();null===c.parent&&c.updateMatrixWorld();ja.enabled&&
(c=ja.getCamera(c));C=pa.get(a,c);C.init();a.onBeforeRender(Y,a,c,d);Bc.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse);qa.setFromMatrix(Bc);ae=this.localClippingEnabled;wd=Z.init(this.clippingPlanes,ae,c);D=ta.get(a,c);D.init();k(a,c,Y.sortObjects);!0===Y.sortObjects&&D.sort();wd&&Z.beginShadows();Ba.render(C.state.shadowsArray,a,c);C.setupLights(c);wd&&Z.endShadows();this.info.autoReset&&this.info.reset();void 0===d&&(d=null);this.setRenderTarget(d);ma.render(D,a,c,e);e=D.opaque;var f=
D.transparent;if(a.overrideMaterial){var g=a.overrideMaterial;e.length&&m(e,a,c,g);f.length&&m(f,a,c,g)}else e.length&&m(e,a,c),f.length&&m(f,a,c);d&&ha.updateRenderTargetMipmap(d);aa.buffers.depth.setTest(!0);aa.buffers.depth.setMask(!0);aa.buffers.color.setMask(!0);aa.setPolygonOffset(!1);a.onAfterRender(Y,a,c);ja.enabled&&ja.submitFrame();C=D=null}};this.allocTextureUnit=function(){var a=ba;a>=xa.maxTextures&&console.warn("THREE.WebGLRenderer: Trying to use "+a+" texture units while this GPU supports only "+
xa.maxTextures);ba+=1;return a};this.setTexture2D=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTarget&&(a||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);ha.setTexture2D(b,c)}}();this.setTexture3D=function(){return function(a,b){ha.setTexture3D(a,b)}}();this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
a=!0);ha.setTexture2D(b,c)}}();this.setTextureCube=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(a||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);b&&b.isCubeTexture||Array.isArray(b.image)&&6===b.image.length?ha.setTextureCube(b,c):ha.setTextureCubeDynamic(b,c)}}();this.setFramebuffer=function(a){J=a};this.getRenderTarget=function(){return Q};this.setRenderTarget=function(a){(Q=
a)&&void 0===Ca.get(a).__webglFramebuffer&&ha.setupRenderTarget(a);var b=J,c=!1;a?(b=Ca.get(a).__webglFramebuffer,a.isWebGLRenderTargetCube&&(b=b[a.activeCubeFace],c=!0),S.copy(a.viewport),Cc.copy(a.scissor),ea=a.scissorTest):(S.copy(fa).multiplyScalar(U),Cc.copy(ka).multiplyScalar(U),ea=sa);L!==b&&(P.bindFramebuffer(36160,b),L=b);aa.viewport(S);aa.scissor(Cc);aa.setScissorTest(ea);c&&(c=Ca.get(a.texture),P.framebufferTexture2D(36160,36064,34069+a.activeCubeFace,c.__webglTexture,a.activeMipMapLevel))};
this.readRenderTargetPixels=function(a,b,c,d,e,f){if(a&&a.isWebGLRenderTarget){var g=Ca.get(a).__webglFramebuffer;if(g){var h=!1;g!==L&&(P.bindFramebuffer(36160,g),h=!0);try{var k=a.texture,m=k.format,q=k.type;1023!==m&&ia.convert(m)!==P.getParameter(35739)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===q||ia.convert(q)===P.getParameter(35738)||1015===q&&(xa.isWebGL2||la.get("OES_texture_float")||la.get("WEBGL_color_buffer_float"))||
1016===q&&(xa.isWebGL2?la.get("EXT_color_buffer_float"):la.get("EXT_color_buffer_half_float"))?36053===P.checkFramebufferStatus(36160)?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&P.readPixels(b,c,d,e,ia.convert(m),ia.convert(q),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{h&&P.bindFramebuffer(36160,
L)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")};this.copyFramebufferToTexture=function(a,b,c){var d=b.image.width,e=b.image.height,f=ia.convert(b.format);this.setTexture2D(b,0);P.copyTexImage2D(3553,c||0,f,a.x,a.y,d,e,0)};this.copyTextureToTexture=function(a,b,c,d){var e=b.image.width,f=b.image.height,g=ia.convert(c.format),h=ia.convert(c.type);this.setTexture2D(c,0);b.isDataTexture?P.texSubImage2D(3553,d||0,a.x,a.y,e,f,g,h,b.image.data):
P.texSubImage2D(3553,d||0,a.x,a.y,g,h,b.image)}}function Qb(a,b){this.name="";this.color=new I(a);this.density=void 0!==b?b:2.5E-4}function Rb(a,b,c){this.name="";this.color=new I(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3}function xd(){D.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0}function rb(a,b){this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0}function Ec(a,
b,c,d){this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d}function gb(a){L.call(this);this.type="SpriteMaterial";this.color=new I(16777215);this.map=null;this.rotation=0;this.sizeAttenuation=!0;this.lights=!1;this.transparent=!0;this.setValues(a)}function Fc(a){D.call(this);this.type="Sprite";if(void 0===Sb){Sb=new C;var b=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]);b=new rb(b,5);Sb.setIndex([0,1,2,0,2,3]);Sb.addAttribute("position",new Ec(b,3,0,!1));Sb.addAttribute("uv",
new Ec(b,2,3,!1))}this.geometry=Sb;this.material=void 0!==a?a:new gb;this.center=new z(.5,.5)}function Gc(){D.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}function Hc(a,b){a&&a.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");na.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new O;this.bindMatrixInverse=new O}function yd(a,b){a=a||[];this.bones=a.slice(0);
this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[],a=0,b=this.bones.length;a<b;a++)this.boneInverses.push(new O)}function ce(){D.call(this);this.type="Bone"}function T(a){L.call(this);this.type="LineBasicMaterial";this.color=new I(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=
!1;this.setValues(a)}function ta(a,b,c){1===c&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");D.call(this);this.type="Line";this.geometry=void 0!==a?a:new C;this.material=void 0!==b?b:new T({color:16777215*Math.random()})}function S(a,b){ta.call(this,a,b);this.type="LineSegments"}function zd(a,b){ta.call(this,a,b);this.type="LineLoop"}function Fa(a){L.call(this);this.type="PointsMaterial";this.color=new I(16777215);this.map=null;this.size=
1;this.sizeAttenuation=!0;this.lights=this.morphTargets=!1;this.setValues(a)}function Tb(a,b){D.call(this);this.type="Points";this.geometry=void 0!==a?a:new C;this.material=void 0!==b?b:new Fa({color:16777215*Math.random()})}function de(a,b,c,d,e,f,g,h,k){X.call(this,a,b,c,d,e,f,g,h,k);this.format=void 0!==g?g:1022;this.minFilter=void 0!==f?f:1006;this.magFilter=void 0!==e?e:1006;this.generateMipmaps=!1}function Ub(a,b,c,d,e,f,g,h,k,m,q,p){X.call(this,null,f,g,h,k,m,d,e,q,p);this.image={width:b,height:c};
this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function Ic(a,b,c,d,e,f,g,h,k){X.call(this,a,b,c,d,e,f,g,h,k);this.needsUpdate=!0}function Jc(a,b,c,d,e,f,g,h,k,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);X.call(this,null,d,e,f,g,h,m,c,k);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=
this.flipY=!1}function Vb(a){C.call(this);this.type="WireframeGeometry";var b=[],c,d,e,f=[0,0],g={},h=["a","b","c"];if(a&&a.isGeometry){var k=a.faces;var m=0;for(d=k.length;m<d;m++){var q=k[m];for(c=0;3>c;c++){var p=q[h[c]];var r=q[h[(c+1)%3]];f[0]=Math.min(p,r);f[1]=Math.max(p,r);p=f[0]+","+f[1];void 0===g[p]&&(g[p]={index1:f[0],index2:f[1]})}}for(p in g)m=g[p],h=a.vertices[m.index1],b.push(h.x,h.y,h.z),h=a.vertices[m.index2],b.push(h.x,h.y,h.z)}else if(a&&a.isBufferGeometry)if(h=new n,null!==a.index){k=
a.attributes.position;q=a.index;var l=a.groups;0===l.length&&(l=[{start:0,count:q.count,materialIndex:0}]);a=0;for(e=l.length;a<e;++a)for(m=l[a],c=m.start,d=m.count,m=c,d=c+d;m<d;m+=3)for(c=0;3>c;c++)p=q.getX(m+c),r=q.getX(m+(c+1)%3),f[0]=Math.min(p,r),f[1]=Math.max(p,r),p=f[0]+","+f[1],void 0===g[p]&&(g[p]={index1:f[0],index2:f[1]});for(p in g)m=g[p],h.fromBufferAttribute(k,m.index1),b.push(h.x,h.y,h.z),h.fromBufferAttribute(k,m.index2),b.push(h.x,h.y,h.z)}else for(k=a.attributes.position,m=0,d=
k.count/3;m<d;m++)for(c=0;3>c;c++)g=3*m+c,h.fromBufferAttribute(k,g),b.push(h.x,h.y,h.z),g=3*m+(c+1)%3,h.fromBufferAttribute(k,g),b.push(h.x,h.y,h.z);this.addAttribute("position",new A(b,3))}function Kc(a,b,c){Q.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Wb(a,b,c));this.mergeVertices()}function Wb(a,b,c){C.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g=[],h=new n,
k=new n,m=new n,q=new n,p=new n,r,l;3>a.length&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");var t=b+1;for(r=0;r<=c;r++){var v=r/c;for(l=0;l<=b;l++){var w=l/b;a(w,v,k);e.push(k.x,k.y,k.z);0<=w-1E-5?(a(w-1E-5,v,m),q.subVectors(k,m)):(a(w+1E-5,v,m),q.subVectors(m,k));0<=v-1E-5?(a(w,v-1E-5,m),p.subVectors(k,m)):(a(w,v+1E-5,m),p.subVectors(m,k));h.crossVectors(q,p).normalize();f.push(h.x,h.y,h.z);g.push(w,v)}}for(r=0;r<c;r++)for(l=0;l<b;l++)a=r*t+l+
1,h=(r+1)*t+l+1,k=(r+1)*t+l,d.push(r*t+l,a,k),d.push(a,h,k);this.setIndex(d);this.addAttribute("position",new A(e,3));this.addAttribute("normal",new A(f,3));this.addAttribute("uv",new A(g,2))}function Lc(a,b,c,d){Q.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new ya(a,b,c,d));this.mergeVertices()}function ya(a,b,c,d){function e(a){h.push(a.x,a.y,a.z)}function f(b,c){b*=3;c.x=a[b+0];c.y=a[b+1];c.z=a[b+2]}function g(a,b,c,
d){0>d&&1===a.x&&(k[b]=a.x-1);0===c.x&&0===c.z&&(k[b]=d/2/Math.PI+.5)}C.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;var h=[],k=[];(function(a){for(var c=new n,d=new n,g=new n,h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var k,m,l=c,y=d,u=g,K=Math.pow(2,a),G=[];for(m=0;m<=K;m++){G[m]=[];var N=l.clone().lerp(u,m/K),z=y.clone().lerp(u,m/K),B=K-m;for(k=0;k<=B;k++)G[m][k]=0===k&&m===K?N:N.clone().lerp(z,k/B)}for(m=0;m<
K;m++)for(k=0;k<2*(K-m)-1;k++)l=Math.floor(k/2),0===k%2?(e(G[m][l+1]),e(G[m+1][l]),e(G[m][l])):(e(G[m][l+1]),e(G[m+1][l+1]),e(G[m+1][l]))}})(d);(function(a){for(var b=new n,c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z})(c);(function(){for(var a=new n,b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],k.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));a=new n;b=new n;for(var c=
new n,d=new n,e=new z,f=new z,l=new z,w=0,y=0;w<h.length;w+=9,y+=6){a.set(h[w+0],h[w+1],h[w+2]);b.set(h[w+3],h[w+4],h[w+5]);c.set(h[w+6],h[w+7],h[w+8]);e.set(k[y+0],k[y+1]);f.set(k[y+2],k[y+3]);l.set(k[y+4],k[y+5]);d.copy(a).add(b).add(c).divideScalar(3);var u=Math.atan2(d.z,-d.x);g(e,y+0,a,u);g(f,y+2,b,u);g(l,y+4,c,u)}for(a=0;a<k.length;a+=6)b=k[a+0],c=k[a+2],d=k[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(k[a+0]+=1),.2>c&&(k[a+2]+=1),.2>d&&(k[a+4]+=1))})();this.addAttribute("position",
new A(h,3));this.addAttribute("normal",new A(h.slice(),3));this.addAttribute("uv",new A(k,2));0===d?this.computeVertexNormals():this.normalizeNormals()}function Mc(a,b){Q.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Xb(a,b));this.mergeVertices()}function Xb(a,b){ya.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Nc(a,b){Q.call(this);
this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new sb(a,b));this.mergeVertices()}function sb(a,b){ya.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Oc(a,b){Q.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Yb(a,b));this.mergeVertices()}function Yb(a,b){var c=
(1+Math.sqrt(5))/2;ya.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Pc(a,b){Q.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Zb(a,b));this.mergeVertices()}function Zb(a,b){var c=
(1+Math.sqrt(5))/2,d=1/c;ya.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters=
{radius:a,detail:b}}function Qc(a,b,c,d,e,f){Q.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new $b(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function $b(a,b,c,d,e){function f(e){q=a.getPointAt(e/b,q);var f=g.normals[e];e=g.binormals[e];for(r=0;r<=d;r++){var m=r/d*Math.PI*
2,p=Math.sin(m);m=-Math.cos(m);k.x=m*f.x+p*e.x;k.y=m*f.y+p*e.y;k.z=m*f.z+p*e.z;k.normalize();t.push(k.x,k.y,k.z);h.x=q.x+c*k.x;h.y=q.y+c*k.y;h.z=q.z+c*k.z;l.push(h.x,h.y,h.z)}}C.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new n,k=new n,m=new z,q=new n,p,r,l=[],t=[],v=[],w=[];for(p=
0;p<b;p++)f(p);f(!1===e?b:0);for(p=0;p<=b;p++)for(r=0;r<=d;r++)m.x=p/b,m.y=r/d,v.push(m.x,m.y);(function(){for(r=1;r<=b;r++)for(p=1;p<=d;p++){var a=(d+1)*r+(p-1),c=(d+1)*r+p,e=(d+1)*(r-1)+p;w.push((d+1)*(r-1)+(p-1),a,e);w.push(a,c,e)}})();this.setIndex(w);this.addAttribute("position",new A(l,3));this.addAttribute("normal",new A(t,3));this.addAttribute("uv",new A(v,2))}function Rc(a,b,c,d,e,f,g){Q.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,
p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new ac(a,b,c,d,e,f));this.mergeVertices()}function ac(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}C.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||1;b=b||.4;c=Math.floor(c)||
64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=[],k=[],m=[],q=[],p,r=new n,l=new n,t=new n,v=new n,w=new n,y=new n,u=new n;for(p=0;p<=c;++p){var K=p/c*e*Math.PI*2;g(K,e,f,a,t);g(K+.01,e,f,a,v);y.subVectors(v,t);u.addVectors(v,t);w.crossVectors(y,u);u.crossVectors(w,y);w.normalize();u.normalize();for(K=0;K<=d;++K){var G=K/d*Math.PI*2,N=-b*Math.cos(G);G=b*Math.sin(G);r.x=t.x+(N*u.x+G*w.x);r.y=t.y+(N*u.y+G*w.y);r.z=t.z+(N*u.z+G*w.z);k.push(r.x,r.y,r.z);l.subVectors(r,t).normalize();m.push(l.x,l.y,l.z);q.push(p/
c);q.push(K/d)}}for(K=1;K<=c;K++)for(p=1;p<=d;p++)a=(d+1)*K+(p-1),b=(d+1)*K+p,e=(d+1)*(K-1)+p,h.push((d+1)*(K-1)+(p-1),a,e),h.push(a,b,e);this.setIndex(h);this.addAttribute("position",new A(k,3));this.addAttribute("normal",new A(m,3));this.addAttribute("uv",new A(q,2))}function Sc(a,b,c,d,e){Q.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new bc(a,b,c,d,e));this.mergeVertices()}function bc(a,b,c,d,e){C.call(this);
this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||1;b=b||.4;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],h=[],k=[],m=new n,q=new n,p=new n,r,l;for(r=0;r<=c;r++)for(l=0;l<=d;l++){var t=l/d*e,v=r/c*Math.PI*2;q.x=(a+b*Math.cos(v))*Math.cos(t);q.y=(a+b*Math.cos(v))*Math.sin(t);q.z=b*Math.sin(v);g.push(q.x,q.y,q.z);m.x=a*Math.cos(t);m.y=a*Math.sin(t);p.subVectors(q,m).normalize();h.push(p.x,p.y,p.z);k.push(l/d);k.push(r/
c)}for(r=1;r<=c;r++)for(l=1;l<=d;l++)a=(d+1)*(r-1)+l-1,b=(d+1)*(r-1)+l,e=(d+1)*r+l,f.push((d+1)*r+l-1,a,e),f.push(a,b,e);this.setIndex(f);this.addAttribute("position",new A(g,3));this.addAttribute("normal",new A(h,3));this.addAttribute("uv",new A(k,2))}function lf(a,b,c,d,e){for(var f,g=0,h=b,k=c-d;h<c;h+=d)g+=(a[k]-a[h])*(a[h+1]+a[k+1]),k=h;if(e===0<g)for(e=b;e<c;e+=d)f=mf(e,a[e],a[e+1],f);else for(e=c-d;e>=b;e-=d)f=mf(e,a[e],a[e+1],f);f&&tb(f,f.next)&&(Tc(f),f=f.next);return f}function Uc(a,b){if(!a)return a;
b||(b=a);do{var c=!1;if(a.steiner||!tb(a,a.next)&&0!==pa(a.prev,a,a.next))a=a.next;else{Tc(a);a=b=a.prev;if(a===a.next)break;c=!0}}while(c||a!==b);return b}function Vc(a,b,c,d,e,f,g){if(a){if(!g&&f){var h=a,k=h;do null===k.z&&(k.z=ee(k.x,k.y,d,e,f)),k.prevZ=k.prev,k=k.nextZ=k.next;while(k!==h);k.prevZ.nextZ=null;k.prevZ=null;h=k;var m,q,p,r,l=1;do{k=h;var t=h=null;for(q=0;k;){q++;var n=k;for(m=p=0;m<l&&(p++,n=n.nextZ,n);m++);for(r=l;0<p||0<r&&n;)0!==p&&(0===r||!n||k.z<=n.z)?(m=k,k=k.nextZ,p--):(m=
n,n=n.nextZ,r--),t?t.nextZ=m:h=m,m.prevZ=t,t=m;k=n}t.nextZ=null;l*=2}while(1<q)}for(h=a;a.prev!==a.next;){k=a.prev;n=a.next;if(f)a:{t=a;r=d;var w=e,y=f;q=t.prev;p=t;l=t.next;if(0<=pa(q,p,l))t=!1;else{var u=q.x>p.x?q.x>l.x?q.x:l.x:p.x>l.x?p.x:l.x,K=q.y>p.y?q.y>l.y?q.y:l.y:p.y>l.y?p.y:l.y;m=ee(q.x<p.x?q.x<l.x?q.x:l.x:p.x<l.x?p.x:l.x,q.y<p.y?q.y<l.y?q.y:l.y:p.y<l.y?p.y:l.y,r,w,y);r=ee(u,K,r,w,y);for(w=t.nextZ;w&&w.z<=r;){if(w!==t.prev&&w!==t.next&&Ad(q.x,q.y,p.x,p.y,l.x,l.y,w.x,w.y)&&0<=pa(w.prev,w,
w.next)){t=!1;break a}w=w.nextZ}for(w=t.prevZ;w&&w.z>=m;){if(w!==t.prev&&w!==t.next&&Ad(q.x,q.y,p.x,p.y,l.x,l.y,w.x,w.y)&&0<=pa(w.prev,w,w.next)){t=!1;break a}w=w.prevZ}t=!0}}else a:if(t=a,q=t.prev,p=t,l=t.next,0<=pa(q,p,l))t=!1;else{for(m=t.next.next;m!==t.prev;){if(Ad(q.x,q.y,p.x,p.y,l.x,l.y,m.x,m.y)&&0<=pa(m.prev,m,m.next)){t=!1;break a}m=m.next}t=!0}if(t)b.push(k.i/c),b.push(a.i/c),b.push(n.i/c),Tc(a),h=a=n.next;else if(a=n,a===h){if(!g)Vc(Uc(a),b,c,d,e,f,1);else if(1===g){g=b;h=c;k=a;do n=k.prev,
t=k.next.next,!tb(n,t)&&nf(n,k,k.next,t)&&Wc(n,t)&&Wc(t,n)&&(g.push(n.i/h),g.push(k.i/h),g.push(t.i/h),Tc(k),Tc(k.next),k=a=t),k=k.next;while(k!==a);a=k;Vc(a,b,c,d,e,f,2)}else if(2===g)a:{g=a;do{for(h=g.next.next;h!==g.prev;){if(k=g.i!==h.i){k=g;n=h;if(t=k.next.i!==n.i&&k.prev.i!==n.i){b:{t=k;do{if(t.i!==k.i&&t.next.i!==k.i&&t.i!==n.i&&t.next.i!==n.i&&nf(t,t.next,k,n)){t=!0;break b}t=t.next}while(t!==k);t=!1}t=!t}if(t=t&&Wc(k,n)&&Wc(n,k)){t=k;q=!1;p=(k.x+n.x)/2;n=(k.y+n.y)/2;do t.y>n!==t.next.y>n&&
t.next.y!==t.y&&p<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(q=!q),t=t.next;while(t!==k);t=q}k=t}if(k){a=of(g,h);g=Uc(g,g.next);a=Uc(a,a.next);Vc(g,b,c,d,e,f);Vc(a,b,c,d,e,f);break a}h=h.next}g=g.next}while(g!==a)}break}}}}function Vg(a,b){return a.x-b.x}function Wg(a,b){var c=b,d=a.x,e=a.y,f=-Infinity;do{if(e<=c.y&&e>=c.next.y&&c.next.y!==c.y){var g=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(g<=d&&g>f){f=g;if(g===d){if(e===c.y)return c;if(e===c.next.y)return c.next}var h=c.x<c.next.x?c:c.next}}c=
c.next}while(c!==b);if(!h)return null;if(d===f)return h.prev;b=h;g=h.x;var k=h.y,m=Infinity;for(c=h.next;c!==b;){if(d>=c.x&&c.x>=g&&d!==c.x&&Ad(e<k?d:f,e,g,k,e<k?f:d,e,c.x,c.y)){var q=Math.abs(e-c.y)/(d-c.x);(q<m||q===m&&c.x>h.x)&&Wc(c,a)&&(h=c,m=q)}c=c.next}return h}function ee(a,b,c,d,e){a=32767*(a-c)*e;b=32767*(b-d)*e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1}function Xg(a){var b=
a,c=a;do b.x<c.x&&(c=b),b=b.next;while(b!==a);return c}function Ad(a,b,c,d,e,f,g,h){return 0<=(e-g)*(b-h)-(a-g)*(f-h)&&0<=(a-g)*(d-h)-(c-g)*(b-h)&&0<=(c-g)*(f-h)-(e-g)*(d-h)}function pa(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function tb(a,b){return a.x===b.x&&a.y===b.y}function nf(a,b,c,d){return tb(a,b)&&tb(c,d)||tb(a,d)&&tb(c,b)?!0:0<pa(a,b,c)!==0<pa(a,b,d)&&0<pa(c,d,a)!==0<pa(c,d,b)}function Wc(a,b){return 0>pa(a.prev,a,a.next)?0<=pa(a,b,a.next)&&0<=pa(a,a.prev,b):0>pa(a,b,a.prev)||
0>pa(a,a.next,b)}function of(a,b){var c=new fe(a.i,a.x,a.y),d=new fe(b.i,b.x,b.y),e=a.next,f=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=c;d.next=c;c.prev=d;f.next=d;d.prev=f;return d}function mf(a,b,c,d){a=new fe(a,b,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a}function Tc(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function fe(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=
this.prev=null;this.steiner=!1}function pf(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function qf(a,b){for(var c=0;c<b.length;c++)a.push(b[c].x),a.push(b[c].y)}function ub(a,b){Q.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:a,options:b};this.fromBufferGeometry(new Sa(a,b));this.mergeVertices()}function Sa(a,b){function c(a){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function g(a,b,c){var d=a.x-
b.x;var e=a.y-b.y;var f=c.x-a.x;var g=c.y-a.y,h=d*d+e*e;if(Math.abs(d*g-e*f)>Number.EPSILON){var k=Math.sqrt(h),m=Math.sqrt(f*f+g*g);h=b.x-e/k;b=b.y+d/k;g=((c.x-g/m-h)*g-(c.y+f/m-b)*f)/(d*g-e*f);f=h+d*g-a.x;d=b+e*g-a.y;e=f*f+d*d;if(2>=e)return new z(f,d);e=Math.sqrt(e/2)}else a=!1,d>Number.EPSILON?f>Number.EPSILON&&(a=!0):d<-Number.EPSILON?f<-Number.EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(f=-e,e=Math.sqrt(h)):(f=d,d=e,e=Math.sqrt(h/2));return new z(f/e,d/e)}function h(a,b){for(M=a.length;0<=
--M;){var c=M;var f=M-1;0>f&&(f=a.length-1);var g,h=u+2*B;for(g=0;g<h;g++){var k=X*g,m=X*(g+1),q=b+f+k,p=b+f+m;m=b+c+m;t(b+c+k);t(q);t(m);t(q);t(p);t(m);k=e.length/3;k=D.generateSideWallUV(d,e,k-6,k-3,k-2,k-1);v(k[0]);v(k[1]);v(k[3]);v(k[1]);v(k[2]);v(k[3])}}}function k(a,b,c){w.push(a);w.push(b);w.push(c)}function l(a,b,c){t(a);t(b);t(c);a=e.length/3;a=D.generateTopUV(d,e,a-3,a-2,a-1);v(a[0]);v(a[1]);v(a[2])}function t(a){e.push(w[3*a]);e.push(w[3*a+1]);e.push(w[3*a+2])}function v(a){f.push(a.x);
f.push(a.y)}var w=[],y=void 0!==b.curveSegments?b.curveSegments:12,u=void 0!==b.steps?b.steps:1,K=void 0!==b.depth?b.depth:100,G=void 0!==b.bevelEnabled?b.bevelEnabled:!0,N=void 0!==b.bevelThickness?b.bevelThickness:6,W=void 0!==b.bevelSize?b.bevelSize:N-2,B=void 0!==b.bevelSegments?b.bevelSegments:3,A=b.extrudePath,D=void 0!==b.UVGenerator?b.UVGenerator:Yg;void 0!==b.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),K=b.amount);var C=!1;if(A){var Y=A.getSpacedPoints(u);
C=!0;G=!1;var F=A.computeFrenetFrames(u,!1);var I=new n;var J=new n;var Q=new n}G||(W=N=B=0);var O;y=a.extractPoints(y);a=y.shape;var L=y.holes;if(!Ya.isClockWise(a)){a=a.reverse();var E=0;for(O=L.length;E<O;E++){var H=L[E];Ya.isClockWise(H)&&(L[E]=H.reverse())}}var R=Ya.triangulateShape(a,L),T=a;E=0;for(O=L.length;E<O;E++)H=L[E],a=a.concat(H);var S,X=a.length,V,ca=R.length;y=[];var M=0;var U=T.length;var fa=U-1;for(S=M+1;M<U;M++,fa++,S++)fa===U&&(fa=0),S===U&&(S=0),y[M]=g(T[M],T[fa],T[S]);A=[];var ea=
y.concat();E=0;for(O=L.length;E<O;E++){H=L[E];var ba=[];M=0;U=H.length;fa=U-1;for(S=M+1;M<U;M++,fa++,S++)fa===U&&(fa=0),S===U&&(S=0),ba[M]=g(H[M],H[fa],H[S]);A.push(ba);ea=ea.concat(ba)}for(fa=0;fa<B;fa++){U=fa/B;var da=N*Math.cos(U*Math.PI/2);S=W*Math.sin(U*Math.PI/2);M=0;for(U=T.length;M<U;M++){var Z=c(T[M],y[M],S);k(Z.x,Z.y,-da)}E=0;for(O=L.length;E<O;E++)for(H=L[E],ba=A[E],M=0,U=H.length;M<U;M++)Z=c(H[M],ba[M],S),k(Z.x,Z.y,-da)}S=W;for(M=0;M<X;M++)Z=G?c(a[M],ea[M],S):a[M],C?(J.copy(F.normals[0]).multiplyScalar(Z.x),
I.copy(F.binormals[0]).multiplyScalar(Z.y),Q.copy(Y[0]).add(J).add(I),k(Q.x,Q.y,Q.z)):k(Z.x,Z.y,0);for(U=1;U<=u;U++)for(M=0;M<X;M++)Z=G?c(a[M],ea[M],S):a[M],C?(J.copy(F.normals[U]).multiplyScalar(Z.x),I.copy(F.binormals[U]).multiplyScalar(Z.y),Q.copy(Y[U]).add(J).add(I),k(Q.x,Q.y,Q.z)):k(Z.x,Z.y,K/u*U);for(fa=B-1;0<=fa;fa--){U=fa/B;da=N*Math.cos(U*Math.PI/2);S=W*Math.sin(U*Math.PI/2);M=0;for(U=T.length;M<U;M++)Z=c(T[M],y[M],S),k(Z.x,Z.y,K+da);E=0;for(O=L.length;E<O;E++)for(H=L[E],ba=A[E],M=0,U=H.length;M<
U;M++)Z=c(H[M],ba[M],S),C?k(Z.x,Z.y+Y[u-1].y,Y[u-1].x+da):k(Z.x,Z.y,K+da)}(function(){var a=e.length/3;if(G){var b=0*X;for(M=0;M<ca;M++)V=R[M],l(V[2]+b,V[1]+b,V[0]+b);b=X*(u+2*B);for(M=0;M<ca;M++)V=R[M],l(V[0]+b,V[1]+b,V[2]+b)}else{for(M=0;M<ca;M++)V=R[M],l(V[2],V[1],V[0]);for(M=0;M<ca;M++)V=R[M],l(V[0]+X*u,V[1]+X*u,V[2]+X*u)}d.addGroup(a,e.length/3-a,0)})();(function(){var a=e.length/3,b=0;h(T,b);b+=T.length;E=0;for(O=L.length;E<O;E++)H=L[E],h(H,b),b+=H.length;d.addGroup(a,e.length/3-a,1)})()}C.call(this);
this.type="ExtrudeBufferGeometry";this.parameters={shapes:a,options:b};a=Array.isArray(a)?a:[a];for(var d=this,e=[],f=[],g=0,h=a.length;g<h;g++)c(a[g]);this.addAttribute("position",new A(e,3));this.addAttribute("uv",new A(f,2));this.computeVertexNormals()}function rf(a,b,c){c.shapes=[];if(Array.isArray(a))for(var d=0,e=a.length;d<e;d++)c.shapes.push(a[d].uuid);else c.shapes.push(a.uuid);void 0!==b.extrudePath&&(c.options.extrudePath=b.extrudePath.toJSON());return c}function Xc(a,b){Q.call(this);this.type=
"TextGeometry";this.parameters={text:a,parameters:b};this.fromBufferGeometry(new cc(a,b));this.mergeVertices()}function cc(a,b){b=b||{};var c=b.font;if(!c||!c.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Q;a=c.generateShapes(a,b.size);b.depth=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);Sa.call(this,a,b);this.type="TextBufferGeometry"}
function Yc(a,b,c,d,e,f,g){Q.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new vb(a,b,c,d,e,f,g));this.mergeVertices()}function vb(a,b,c,d,e,f,g){C.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||1;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==
d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h=f+g,k,m,q=0,p=[],l=new n,x=new n,t=[],v=[],w=[],y=[];for(m=0;m<=c;m++){var u=[],K=m/c;for(k=0;k<=b;k++){var G=k/b;l.x=-a*Math.cos(d+G*e)*Math.sin(f+K*g);l.y=a*Math.cos(f+K*g);l.z=a*Math.sin(d+G*e)*Math.sin(f+K*g);v.push(l.x,l.y,l.z);x.set(l.x,l.y,l.z).normalize();w.push(x.x,x.y,x.z);y.push(G,1-K);u.push(q++)}p.push(u)}for(m=0;m<c;m++)for(k=0;k<b;k++)a=p[m][k+1],d=p[m][k],e=p[m+1][k],g=p[m+1][k+1],(0!==m||0<f)&&t.push(a,d,
g),(m!==c-1||h<Math.PI)&&t.push(d,e,g);this.setIndex(t);this.addAttribute("position",new A(v,3));this.addAttribute("normal",new A(w,3));this.addAttribute("uv",new A(y,2))}function Zc(a,b,c,d,e,f){Q.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new dc(a,b,c,d,e,f));this.mergeVertices()}function dc(a,b,c,d,e,f){C.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,
outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||.5;b=b||1;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],h=[],k=[],m=[],q=a,p=(b-a)/d,l=new n,x=new z,t,v;for(t=0;t<=d;t++){for(v=0;v<=c;v++)a=e+v/c*f,l.x=q*Math.cos(a),l.y=q*Math.sin(a),h.push(l.x,l.y,l.z),k.push(0,0,1),x.x=(l.x/b+1)/2,x.y=(l.y/b+1)/2,m.push(x.x,x.y);q+=p}for(t=0;t<d;t++)for(b=t*(c+1),v=0;v<c;v++)a=v+b,e=a+c+1,f=a+c+2,q=a+1,g.push(a,e,q),g.push(e,
f,q);this.setIndex(g);this.addAttribute("position",new A(h,3));this.addAttribute("normal",new A(k,3));this.addAttribute("uv",new A(m,2))}function $c(a,b,c,d){Q.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new ec(a,b,c,d));this.mergeVertices()}function ec(a,b,c,d){C.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=R.clamp(d,
0,2*Math.PI);var e=[],f=[],g=[],h=1/b,k=new n,m=new z,q;for(q=0;q<=b;q++){var p=c+q*h*d;var l=Math.sin(p),x=Math.cos(p);for(p=0;p<=a.length-1;p++)k.x=a[p].x*l,k.y=a[p].y,k.z=a[p].x*x,f.push(k.x,k.y,k.z),m.x=q/b,m.y=p/(a.length-1),g.push(m.x,m.y)}for(q=0;q<b;q++)for(p=0;p<a.length-1;p++)c=p+q*a.length,h=c+a.length,k=c+a.length+1,m=c+1,e.push(c,h,m),e.push(h,k,m);this.setIndex(e);this.addAttribute("position",new A(f,3));this.addAttribute("uv",new A(g,2));this.computeVertexNormals();if(d===2*Math.PI)for(d=
this.attributes.normal.array,e=new n,f=new n,g=new n,c=b*a.length*3,p=q=0;q<a.length;q++,p+=3)e.x=d[p+0],e.y=d[p+1],e.z=d[p+2],f.x=d[c+p+0],f.y=d[c+p+1],f.z=d[c+p+2],g.addVectors(e,f).normalize(),d[p+0]=d[c+p+0]=g.x,d[p+1]=d[c+p+1]=g.y,d[p+2]=d[c+p+2]=g.z}function wb(a,b){Q.call(this);this.type="ShapeGeometry";"object"===typeof b&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new xb(a,
b));this.mergeVertices()}function xb(a,b){function c(a){var c,h=e.length/3;a=a.extractPoints(b);var m=a.shape,q=a.holes;!1===Ya.isClockWise(m)&&(m=m.reverse());a=0;for(c=q.length;a<c;a++){var l=q[a];!0===Ya.isClockWise(l)&&(q[a]=l.reverse())}var n=Ya.triangulateShape(m,q);a=0;for(c=q.length;a<c;a++)l=q[a],m=m.concat(l);a=0;for(c=m.length;a<c;a++)l=m[a],e.push(l.x,l.y,0),f.push(0,0,1),g.push(l.x,l.y);a=0;for(c=n.length;a<c;a++)m=n[a],d.push(m[0]+h,m[1]+h,m[2]+h),k+=3}C.call(this);this.type="ShapeBufferGeometry";
this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,k=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++)c(a[m]),this.addGroup(h,k,m),h+=k,k=0;this.setIndex(d);this.addAttribute("position",new A(e,3));this.addAttribute("normal",new A(f,3));this.addAttribute("uv",new A(g,2))}function sf(a,b){b.shapes=[];if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++)b.shapes.push(a[c].uuid);else b.shapes.push(a.uuid);return b}function fc(a,b){C.call(this);this.type="EdgesGeometry";
this.parameters={thresholdAngle:b};var c=[];b=Math.cos(R.DEG2RAD*(void 0!==b?b:1));var d=[0,0],e={},f=["a","b","c"];if(a.isBufferGeometry){var g=new Q;g.fromBufferGeometry(a)}else g=a.clone();g.mergeVertices();g.computeFaceNormals();a=g.vertices;g=g.faces;for(var h=0,k=g.length;h<k;h++)for(var m=g[h],q=0;3>q;q++){var l=m[f[q]];var r=m[f[(q+1)%3]];d[0]=Math.min(l,r);d[1]=Math.max(l,r);l=d[0]+","+d[1];void 0===e[l]?e[l]={index1:d[0],index2:d[1],face1:h,face2:void 0}:e[l].face2=h}for(l in e)if(d=e[l],
void 0===d.face2||g[d.face1].normal.dot(g[d.face2].normal)<=b)f=a[d.index1],c.push(f.x,f.y,f.z),f=a[d.index2],c.push(f.x,f.y,f.z);this.addAttribute("position",new A(c,3))}function yb(a,b,c,d,e,f,g,h){Q.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new Za(a,b,c,d,e,f,g,h));this.mergeVertices()}function Za(a,b,c,d,e,f,g,h){function k(c){var e,f=new z,k=new n,
p=0,u=!0===c?a:b,v=!0===c?1:-1;var A=t;for(e=1;e<=d;e++)l.push(0,w*v,0),r.push(0,v,0),x.push(.5,.5),t++;var C=t;for(e=0;e<=d;e++){var D=e/d*h+g,E=Math.cos(D);D=Math.sin(D);k.x=u*D;k.y=w*v;k.z=u*E;l.push(k.x,k.y,k.z);r.push(0,v,0);f.x=.5*E+.5;f.y=.5*D*v+.5;x.push(f.x,f.y);t++}for(e=0;e<d;e++)f=A+e,k=C+e,!0===c?q.push(k,k+1,f):q.push(k+1,k,f),p+=3;m.addGroup(y,p,!0===c?1:2);y+=p}C.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,
openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:1;b=void 0!==b?b:1;c=c||1;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var q=[],l=[],r=[],x=[],t=0,v=[],w=c/2,y=0;(function(){var f,k,p=new n,N=new n,z=0,B=(b-a)/c;for(k=0;k<=e;k++){var A=[],D=k/e,C=D*(b-a)+a;for(f=0;f<=d;f++){var E=f/d,F=E*h+g,I=Math.sin(F);F=Math.cos(F);N.x=C*I;N.y=-D*c+w;N.z=C*F;l.push(N.x,N.y,N.z);p.set(I,B,F).normalize();r.push(p.x,p.y,p.z);x.push(E,1-D);A.push(t++)}v.push(A)}for(f=
0;f<d;f++)for(k=0;k<e;k++)p=v[k+1][f],N=v[k+1][f+1],B=v[k][f+1],q.push(v[k][f],p,B),q.push(p,N,B),z+=6;m.addGroup(y,z,0);y+=z})();!1===f&&(0<a&&k(!0),0<b&&k(!1));this.setIndex(q);this.addAttribute("position",new A(l,3));this.addAttribute("normal",new A(r,3));this.addAttribute("uv",new A(x,2))}function ad(a,b,c,d,e,f,g){yb.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function bd(a,b,
c,d,e,f,g){Za.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function cd(a,b,c,d){Q.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new gc(a,b,c,d));this.mergeVertices()}function gc(a,b,c,d){C.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};
a=a||1;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],h=[],k,m=new n,q=new z;f.push(0,0,0);g.push(0,0,1);h.push(.5,.5);var l=0;for(k=3;l<=b;l++,k+=3){var r=c+l/b*d;m.x=a*Math.cos(r);m.y=a*Math.sin(r);f.push(m.x,m.y,m.z);g.push(0,0,1);q.x=(f[k]/a+1)/2;q.y=(f[k+1]/a+1)/2;h.push(q.x,q.y)}for(k=1;k<=b;k++)e.push(k,k+1,0);this.setIndex(e);this.addAttribute("position",new A(f,3));this.addAttribute("normal",new A(g,3));this.addAttribute("uv",new A(h,2))}function zb(a){L.call(this);
this.type="ShadowMaterial";this.color=new I(0);this.transparent=!0;this.setValues(a)}function hc(a){Ba.call(this,a);this.type="RawShaderMaterial"}function Ta(a){L.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new I(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new I(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;
this.normalMapType=0;this.normalScale=new z(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function Ab(a){Ta.call(this);this.defines={PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=
.5;this.clearCoatRoughness=this.clearCoat=0;this.setValues(a)}function Ga(a){L.call(this);this.type="MeshPhongMaterial";this.color=new I(16777215);this.specular=new I(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new I(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new z(1,1);this.displacementMap=null;this.displacementScale=
1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function Bb(a){Ga.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.gradientMap=null;this.setValues(a)}function Cb(a){L.call(this);this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=
1;this.normalMap=null;this.normalMapType=0;this.normalScale=new z(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.lights=this.fog=!1;this.setValues(a)}function Db(a){L.call(this);this.type="MeshLambertMaterial";this.color=new I(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new I(0);this.emissiveIntensity=
1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function Eb(a){L.call(this);this.defines={MATCAP:""};this.type="MeshMatcapMaterial";this.color=new I(16777215);this.bumpMap=this.map=this.matcap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=
0;this.normalScale=new z(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=null;this.lights=this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function Fb(a){T.call(this);this.type="LineDashedMaterial";this.scale=1;this.dashSize=3;this.gapSize=1;this.setValues(a)}function va(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function Bd(a,b,c,
d){va.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0}function dd(a,b,c,d){va.call(this,a,b,c,d)}function Cd(a,b,c,d){va.call(this,a,b,c,d)}function qa(a,b,c,d){if(void 0===a)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===b||0===b.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a;this.times=ra.convertArray(b,this.TimeBufferType);this.values=ra.convertArray(c,this.ValueBufferType);this.setInterpolation(d||
this.DefaultInterpolation)}function Dd(a,b,c){qa.call(this,a,b,c)}function Ed(a,b,c,d){qa.call(this,a,b,c,d)}function ic(a,b,c,d){qa.call(this,a,b,c,d)}function Fd(a,b,c,d){va.call(this,a,b,c,d)}function ed(a,b,c,d){qa.call(this,a,b,c,d)}function Gd(a,b,c,d){qa.call(this,a,b,c,d)}function jc(a,b,c,d){qa.call(this,a,b,c,d)}function Ha(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=R.generateUUID();0>this.duration&&this.resetDuration()}function Zg(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return ic;
case "vector":case "vector2":case "vector3":case "vector4":return jc;case "color":return Ed;case "quaternion":return ed;case "bool":case "boolean":return Dd;case "string":return Gd}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+a);}function $g(a){if(void 0===a.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");var b=Zg(a.type);if(void 0===a.times){var c=[],d=[];ra.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,
a.times,a.values,a.interpolation)}function ge(a,b,c){var d=this,e=!1,f=0,g=0,h=void 0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)};this.resolveURL=function(a){return h?h(a):a};this.setURLModifier=function(a){h=a;
return this}}function Ia(a){this.manager=void 0!==a?a:za}function tf(a){this.manager=void 0!==a?a:za}function uf(a){this.manager=void 0!==a?a:za;this._parser=null}function he(a){this.manager=void 0!==a?a:za;this._parser=null}function fd(a){this.manager=void 0!==a?a:za}function ie(a){this.manager=void 0!==a?a:za}function Hd(a){this.manager=void 0!==a?a:za}function J(){this.type="Curve";this.arcLengthDivisions=200}function Da(a,b,c,d,e,f,g,h){J.call(this);this.type="EllipseCurve";this.aX=a||0;this.aY=
b||0;this.xRadius=c||1;this.yRadius=d||1;this.aStartAngle=e||0;this.aEndAngle=f||2*Math.PI;this.aClockwise=g||!1;this.aRotation=h||0}function kc(a,b,c,d,e,f){Da.call(this,a,b,c,c,d,e,f);this.type="ArcCurve"}function je(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function(e,f,g,h,k){e=k*(g-e);h=k*(h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},initNonuniformCatmullRom:function(e,f,g,h,k,m,q){e=((f-e)/k-(g-e)/(k+m)+(g-f)/m)*m;h=((g-f)/m-(h-f)/(m+q)+(h-g)/q)*m;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},calc:function(e){var f=
e*e;return a+b*e+c*f+d*f*e}}}function ua(a,b,c,d){J.call(this);this.type="CatmullRomCurve3";this.points=a||[];this.closed=b||!1;this.curveType=c||"centripetal";this.tension=d||.5}function vf(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c}function gd(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}function hd(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}function Ja(a,b,c,d){J.call(this);this.type="CubicBezierCurve";this.v0=
a||new z;this.v1=b||new z;this.v2=c||new z;this.v3=d||new z}function Ua(a,b,c,d){J.call(this);this.type="CubicBezierCurve3";this.v0=a||new n;this.v1=b||new n;this.v2=c||new n;this.v3=d||new n}function Aa(a,b){J.call(this);this.type="LineCurve";this.v1=a||new z;this.v2=b||new z}function Ka(a,b){J.call(this);this.type="LineCurve3";this.v1=a||new n;this.v2=b||new n}function La(a,b,c){J.call(this);this.type="QuadraticBezierCurve";this.v0=a||new z;this.v1=b||new z;this.v2=c||new z}function Va(a,b,c){J.call(this);
this.type="QuadraticBezierCurve3";this.v0=a||new n;this.v1=b||new n;this.v2=c||new n}function Ma(a){J.call(this);this.type="SplineCurve";this.points=a||[]}function $a(){J.call(this);this.type="CurvePath";this.curves=[];this.autoClose=!1}function Na(a){$a.call(this);this.type="Path";this.currentPoint=new z;a&&this.setFromPoints(a)}function hb(a){Na.call(this,a);this.uuid=R.generateUUID();this.type="Shape";this.holes=[]}function ba(a,b){D.call(this);this.type="Light";this.color=new I(a);this.intensity=
void 0!==b?b:1;this.receiveShadow=void 0}function Id(a,b,c){ba.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(D.DefaultUp);this.updateMatrix();this.groundColor=new I(b)}function Gb(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new z(512,512);this.map=null;this.matrix=new O}function Jd(){Gb.call(this,new V(50,1,.5,500))}function Kd(a,b,c,d,e,f){ba.call(this,a,b);this.type="SpotLight";this.position.copy(D.DefaultUp);this.updateMatrix();this.target=new D;
Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new Jd}function Ld(a,b,c,d){ba.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==
d?d:1;this.shadow=new Gb(new V(90,1,.5,500))}function id(a,b,c,d,e,f){Ra.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=void 0!==a?a:-1;this.right=void 0!==b?b:1;this.top=void 0!==c?c:1;this.bottom=void 0!==d?d:-1;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()}function Md(){Gb.call(this,new id(-5,5,5,-5,.5,500))}function Nd(a,b){ba.call(this,a,b);this.type="DirectionalLight";this.position.copy(D.DefaultUp);this.updateMatrix();this.target=
new D;this.shadow=new Md}function Od(a,b){ba.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function Pd(a,b,c,d){ba.call(this,a,b);this.type="RectAreaLight";this.width=void 0!==c?c:10;this.height=void 0!==d?d:10}function Qd(a){this.manager=void 0!==a?a:za;this.textures={}}function ke(a){this.manager=void 0!==a?a:za}function le(a){this.manager=void 0!==a?a:za;this.resourcePath=""}function me(a){"undefined"===typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
"undefined"===typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.manager=void 0!==a?a:za;this.options=void 0}function ne(){this.type="ShapePath";this.color=new I;this.subPaths=[];this.currentPath=null}function oe(a){this.type="Font";this.data=a}function wf(a){this.manager=void 0!==a?a:za}function jd(){}function pe(a){this.manager=void 0!==a?a:za}function xf(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new V;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=
!1;this.cameraR=new V;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1}function kd(a,b,c,d){D.call(this);this.type="CubeCamera";var e=new V(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new n(1,0,0));this.add(e);var f=new V(90,1,a,b);f.up.set(0,-1,0);f.lookAt(new n(-1,0,0));this.add(f);var g=new V(90,1,a,b);g.up.set(0,0,1);g.lookAt(new n(0,1,0));this.add(g);var h=new V(90,1,a,b);h.up.set(0,0,-1);h.lookAt(new n(0,-1,0));this.add(h);var k=new V(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new n(0,0,1));
this.add(k);var m=new V(90,1,a,b);m.up.set(0,-1,0);m.lookAt(new n(0,0,-1));this.add(m);d=d||{format:1022,magFilter:1006,minFilter:1006};this.renderTarget=new Ib(c,c,d);this.renderTarget.texture.name="CubeCamera";this.update=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,d=c.texture.generateMipmaps;c.texture.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,e,c);c.activeCubeFace=1;a.render(b,f,c);c.activeCubeFace=2;a.render(b,g,c);c.activeCubeFace=3;a.render(b,h,
c);c.activeCubeFace=4;a.render(b,k,c);c.texture.generateMipmaps=d;c.activeCubeFace=5;a.render(b,m,c);a.setRenderTarget(null)};this.clear=function(a,b,c,d){for(var e=this.renderTarget,f=0;6>f;f++)e.activeCubeFace=f,a.setRenderTarget(e),a.clear(b,c,d);a.setRenderTarget(null)}}function qe(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function re(){D.call(this);this.type="AudioListener";this.context=se.getContext();this.gain=this.context.createGain();
this.gain.connect(this.context.destination);this.filter=null;this.timeDelta=0}function lc(a){D.call(this);this.type="Audio";this.listener=a;this.context=a.context;this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.detune=0;this.loop=!1;this.offset=this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[]}function te(a){lc.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain)}
function ue(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser)}function ve(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function yf(a,
b,c){c=c||oa.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c)}function oa(a,b,c){this.path=b;this.parsedPath=c||oa.parseTrackName(b);this.node=oa.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function zf(){this.uuid=R.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var a={};this._indicesByUUID=a;for(var b=0,c=arguments.length;b!==c;++b)a[arguments[b].uuid]=b;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath=
{};var d=this;this.stats={objects:{get total(){return d._objects.length},get inUse(){return this.total-d.nCachedObjects_}},get bindingsPerObject(){return d._bindings.length}}}function Af(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=
this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function we(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function Rd(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),
a=b);this.value=a}function xe(){C.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function ye(a,b,c){rb.call(this,a,b);this.meshPerAttribute=c||1}function ze(a,b,c,d){"number"===typeof c&&(d=c,c=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));E.call(this,a,b,c);this.meshPerAttribute=d||1}function Bf(a,b,c,d){this.ray=new qb(a,b);this.near=c||0;this.far=d||Infinity;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},
Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})}function Cf(a,b){return a.distance-b.distance}function Ae(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++)Ae(a[d],b,c,!0)}}function Df(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this}function Ef(a,b,c){this.radius=void 0!==
a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this}function Be(a,b){this.min=void 0!==a?a:new z(Infinity,Infinity);this.max=void 0!==b?b:new z(-Infinity,-Infinity)}function Ce(a,b){this.start=void 0!==a?a:new n;this.end=void 0!==b?b:new n}function ld(a){D.call(this);this.material=a;this.render=function(){}}function md(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&
(b=c.attributes.normal.count);c=new C;b=new A(6*b,3);c.addAttribute("position",b);S.call(this,c,new T({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function mc(a,b){D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new C;b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(var c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),
1)}a.addAttribute("position",new A(b,3));b=new T({fog:!1});this.cone=new S(a,b);this.add(this.cone);this.update()}function Ff(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,Ff(a.children[c]));return b}function nc(a){for(var b=Ff(a),c=new C,d=[],e=[],f=new I(0,0,1),g=new I(0,1,0),h=0;h<b.length;h++){var k=b[h];k.parent&&k.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b))}c.addAttribute("position",new A(d,3));c.addAttribute("color",
new A(e,3));d=new T({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});S.call(this,c,d);this.root=a;this.bones=b;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1}function oc(a,b,c){this.light=a;this.light.updateMatrixWorld();this.color=c;a=new vb(b,4,2);b=new wa({wireframe:!0,fog:!1});na.call(this,a,b);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;this.update()}function pc(a,b){this.type="RectAreaLightHelper";this.light=a;this.color=b;a=new C;a.addAttribute("position",new A([1,
1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3));a.computeBoundingSphere();b=new T({fog:!1});ta.call(this,a,b);a=new C;a.addAttribute("position",new A([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3));a.computeBoundingSphere();this.add(new na(a,new wa({side:THREE.BackSide,fog:!1})));this.update()}function qc(a,b,c){D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;a=new sb(b);a.rotateY(.5*Math.PI);this.material=new wa({wireframe:!0,fog:!1});
void 0===this.color&&(this.material.vertexColors=2);b=a.getAttribute("position");b=new Float32Array(3*b.count);a.addAttribute("color",new E(b,3));this.add(new na(a,this.material));this.update()}function nd(a,b,c,d){a=a||10;b=b||10;c=new I(void 0!==c?c:4473924);d=new I(void 0!==d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var h=[],k=0,m=0,q=-g;k<=b;k++,q+=f){a.push(-g,0,q,g,0,q);a.push(q,0,-g,q,0,g);var l=k===e?c:d;l.toArray(h,m);m+=3;l.toArray(h,m);m+=3;l.toArray(h,m);m+=3;l.toArray(h,m);m+=3}b=new C;
b.addAttribute("position",new A(a,3));b.addAttribute("color",new A(h,3));c=new T({vertexColors:2});S.call(this,b,c)}function Sd(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new I(void 0!==e?e:4473924);f=new I(void 0!==f?f:8947848);var g=[],h=[],k;for(k=0;k<=b;k++){var m=k/b*2*Math.PI;var q=Math.sin(m)*a;m=Math.cos(m)*a;g.push(0,0,0);g.push(q,0,m);var l=k&1?e:f;h.push(l.r,l.g,l.b);h.push(l.r,l.g,l.b)}for(k=0;k<=c;k++){l=k&1?e:f;var r=a-a/c*k;for(b=0;b<d;b++)m=b/d*2*Math.PI,q=Math.sin(m)*r,m=Math.cos(m)*
r,g.push(q,0,m),h.push(l.r,l.g,l.b),m=(b+1)/d*2*Math.PI,q=Math.sin(m)*r,m=Math.cos(m)*r,g.push(q,0,m),h.push(l.r,l.g,l.b)}a=new C;a.addAttribute("position",new A(g,3));a.addAttribute("color",new A(h,3));g=new T({vertexColors:2});S.call(this,a,g)}function od(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
c=new C;b=new A(6*b,3);c.addAttribute("position",b);S.call(this,c,new T({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function rc(a,b,c){D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;void 0===b&&(b=1);a=new C;a.addAttribute("position",new A([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));b=new T({fog:!1});this.lightPlane=new ta(a,b);this.add(this.lightPlane);a=new C;a.addAttribute("position",new A([0,0,0,0,0,1],3));
this.targetLine=new ta(a,b);this.add(this.targetLine);this.update()}function pd(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/3-1)}var d=new C,e=new T({color:16777215,vertexColors:1}),f=[],g=[],h={},k=new I(16755200),m=new I(16711680),q=new I(43775),l=new I(16777215),r=new I(3355443);b("n1","n2",k);b("n2","n4",k);b("n4","n3",k);b("n3","n1",k);b("f1","f2",k);b("f2","f4",k);b("f4","f3",k);b("f3","f1",k);b("n1","f1",k);
b("n2","f2",k);b("n3","f3",k);b("n4","f4",k);b("p","n1",m);b("p","n2",m);b("p","n3",m);b("p","n4",m);b("u1","u2",q);b("u2","u3",q);b("u3","u1",q);b("c","t",l);b("p","c",r);b("cn1","cn2",r);b("cn3","cn4",r);b("cf1","cf2",r);b("cf3","cf4",r);d.addAttribute("position",new A(f,3));d.addAttribute("color",new A(g,3));S.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update()}function ab(a,
b){this.object=a;void 0===b&&(b=16776960);a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new Float32Array(24),d=new C;d.setIndex(new E(a,1));d.addAttribute("position",new E(c,3));S.call(this,d,new T({color:b}));this.matrixAutoUpdate=!1;this.update()}function qd(a,b){this.type="Box3Helper";this.box=a;a=void 0!==b?b:16776960;b=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new C;c.setIndex(new E(b,1));c.addAttribute("position",new A([1,1,1,-1,1,
1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3));S.call(this,c,new T({color:a}));this.geometry.computeBoundingSphere()}function rd(a,b,c){this.type="PlaneHelper";this.plane=a;this.size=void 0===b?1:b;a=void 0!==c?c:16776960;b=new C;b.addAttribute("position",new A([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3));b.computeBoundingSphere();ta.call(this,b,new T({color:a}));b=new C;b.addAttribute("position",new A([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3));b.computeBoundingSphere();
this.add(new na(b,new wa({color:a,opacity:.2,transparent:!0,depthWrite:!1})))}function bb(a,b,c,d,e,f){D.call(this);void 0===a&&(a=new THREE.Vector3(0,0,1));void 0===b&&(b=new THREE.Vector3(0,0,0));void 0===c&&(c=1);void 0===d&&(d=16776960);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===Td&&(Td=new C,Td.addAttribute("position",new A([0,0,0,0,1,0],3)),De=new Za(0,.5,1,5,1),De.translate(0,-.5,0));this.position.copy(b);this.line=new ta(Td,new T({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);
this.cone=new na(De,new wa({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)}function sd(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new C;a.addAttribute("position",new A(b,3));a.addAttribute("color",new A([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new T({vertexColors:2});S.call(this,a,b)}function Gf(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");ua.call(this,a);this.type="catmullrom";
this.closed=!0}function Hf(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");ua.call(this,a);this.type="catmullrom"}function Ee(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");ua.call(this,a);this.type="catmullrom"}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Number.isInteger&&(Number.isInteger=function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a});void 0===Math.sign&&(Math.sign=
function(a){return 0>a?-1:0<a?1:+a});!1==="name"in Function.prototype&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=
d[e])}return b}}();Object.assign(ja.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,b){void 0!==this._listeners&&(a=this._listeners[a],void 0!==a&&(b=a.indexOf(b),-1!==b&&a.splice(b,1)))},dispatchEvent:function(a){if(void 0!==
this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;b=b.slice(0);for(var c=0,d=b.length;c<d;c++)b[c].call(this,a)}}}});var R={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){for(var a=[],b=0;256>b;b++)a[b]=(16>b?"0":"")+b.toString(16);return function(){var b=4294967295*Math.random()|0,d=4294967295*Math.random()|0,e=4294967295*Math.random()|0,f=4294967295*Math.random()|0;return(a[b&255]+a[b>>8&255]+a[b>>16&255]+a[b>>24&255]+"-"+a[d&255]+a[d>>8&255]+"-"+a[d>>
16&15|64]+a[d>>24&255]+"-"+a[e&63|128]+a[e>>8&255]+"-"+a[e>>16&255]+a[e>>24&255]+a[f&255]+a[f>>8&255]+a[f>>16&255]+a[f>>24&255]).toUpperCase()}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;
a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*R.DEG2RAD},radToDeg:function(a){return a*R.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},ceilPowerOfTwo:function(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))},floorPowerOfTwo:function(a){return Math.pow(2,Math.floor(Math.log(a)/
Math.LN2))}};Object.defineProperties(z.prototype,{width:{get:function(){return this.x},set:function(a){this.x=a}},height:{get:function(){return this.y},set:function(a){this.y=a}}});Object.assign(z.prototype,{isVector2:!0,set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+
a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=
a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},applyMatrix3:function(a){var b=this.x,c=this.y;a=a.elements;this.x=a[0]*b+a[3]*c+a[6];this.y=a[1]*b+a[4]*c+a[7];return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,
b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(){var a=new z,b=new z;return function(c,d){a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=
Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},cross:function(a){return this.x*a.y-this.y*a.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+
Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=
(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);
return this},rotateAround:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=this.x-a.x,e=this.y-a.y;this.x=d*c-e*b+a.x;this.y=d*b+e*c+a.y;return this}});Object.assign(O.prototype,{isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,k,m,l,p,r,n,t,v){var q=this.elements;q[0]=a;q[4]=b;q[8]=c;q[12]=d;q[1]=e;q[5]=f;q[9]=g;q[13]=h;q[2]=k;q[6]=m;q[10]=l;q[14]=p;q[3]=r;q[7]=n;q[11]=t;q[15]=v;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new O).fromArray(this.elements)},
copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return this},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,
b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a=new n;return function(b){var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length();b=1/a.setFromMatrixColumn(b,2).length();c[0]=d[0]*e;c[1]=d[1]*e;c[2]=d[2]*e;c[3]=0;c[4]=d[4]*f;c[5]=d[5]*f;c[6]=d[6]*f;c[7]=0;c[8]=d[8]*b;c[9]=d[9]*b;c[10]=d[10]*b;c[11]=0;c[12]=0;c[13]=0;c[14]=0;c[15]=1;return this}}(),makeRotationFromEuler:function(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c);c=Math.sin(c);var g=Math.cos(d);d=Math.sin(d);var h=Math.cos(e);e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,m=c*h,q=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+m*d;b[5]=a-q*d;b[9]=-c*g;b[2]=q-a*d;b[6]=m+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,m=d*h,q=d*e,b[0]=a+q*c,b[4]=m*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-m,b[6]=q+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,m=d*h,q=d*e,b[0]=a-q*c,b[4]=-f*e,b[8]=m+k*c,b[1]=k+m*c,b[5]=f*h,b[9]=
q-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,m=c*h,q=c*e,b[0]=g*h,b[4]=m*d-k,b[8]=a*d+q,b[1]=g*e,b[5]=q*d+a,b[9]=k*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,m=c*g,q=c*d,b[0]=g*h,b[4]=q-a*e,b[8]=m*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+m,b[10]=a-q*e):"XZY"===a.order&&(a=f*g,k=f*d,m=c*g,q=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+q,b[5]=f*h,b[9]=k*e-m,b[2]=m*e-k,b[6]=c*h,b[10]=q*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(){var a=
new n(0,0,0),b=new n(1,1,1);return function(c){return this.compose(a,c,b)}}(),lookAt:function(){var a=new n,b=new n,c=new n;return function(d,e,f){var g=this.elements;c.subVectors(d,e);0===c.lengthSq()&&(c.z=1);c.normalize();a.crossVectors(f,c);0===a.lengthSq()&&(1===Math.abs(f.z)?c.x+=1E-4:c.z+=1E-4,c.normalize(),a.crossVectors(f,c));a.normalize();b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==
b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[4],f=c[8],g=c[12],h=c[1],k=c[5],m=c[9],q=c[13],l=c[2],r=c[6],n=c[10],t=c[14],v=c[3],w=c[7],y=c[11];c=c[15];var u=d[0],z=d[4],G=d[8],N=d[12],A=d[1],B=d[5],D=d[9],C=d[13],E=d[2],
F=d[6],I=d[10],L=d[14],H=d[3],J=d[7],O=d[11];d=d[15];b[0]=a*u+e*A+f*E+g*H;b[4]=a*z+e*B+f*F+g*J;b[8]=a*G+e*D+f*I+g*O;b[12]=a*N+e*C+f*L+g*d;b[1]=h*u+k*A+m*E+q*H;b[5]=h*z+k*B+m*F+q*J;b[9]=h*G+k*D+m*I+q*O;b[13]=h*N+k*C+m*L+q*d;b[2]=l*u+r*A+n*E+t*H;b[6]=l*z+r*B+n*F+t*J;b[10]=l*G+r*D+n*I+t*O;b[14]=l*N+r*C+n*L+t*d;b[3]=v*u+w*A+y*E+c*H;b[7]=v*z+w*B+y*F+c*J;b[11]=v*G+w*D+y*I+c*O;b[15]=v*N+w*C+y*L+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=
a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToBufferAttribute:function(){var a=new n;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],m=a[2],q=a[6],l=a[10],r=a[14];return a[3]*(+e*h*q-d*k*q-e*g*l+c*k*l+d*g*r-c*h*r)+a[7]*(+b*h*r-b*k*l+e*f*l-
d*f*r+d*k*m-e*h*m)+a[11]*(+b*k*q-b*g*r-e*f*q+c*f*r+e*g*m-c*k*m)+a[15]*(-d*g*m-b*h*q+b*g*l+d*f*q-c*f*l+c*h*m)},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements;a=d[0];var e=d[1],f=d[2],g=d[3],h=d[4],
k=d[5],m=d[6],q=d[7],l=d[8],r=d[9],n=d[10],t=d[11],v=d[12],w=d[13],y=d[14];d=d[15];var u=r*y*q-w*n*q+w*m*t-k*y*t-r*m*d+k*n*d,z=v*n*q-l*y*q-v*m*t+h*y*t+l*m*d-h*n*d,G=l*w*q-v*r*q+v*k*t-h*w*t-l*k*d+h*r*d,N=v*r*m-l*w*m-v*k*n+h*w*n+l*k*y-h*r*y,A=a*u+e*z+f*G+g*N;if(0===A){if(!0===b)throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");return this.identity()}b=1/A;c[0]=u*b;c[1]=(w*n*g-r*y*g-w*f*
t+e*y*t+r*f*d-e*n*d)*b;c[2]=(k*y*g-w*m*g+w*f*q-e*y*q-k*f*d+e*m*d)*b;c[3]=(r*m*g-k*n*g-r*f*q+e*n*q+k*f*t-e*m*t)*b;c[4]=z*b;c[5]=(l*y*g-v*n*g+v*f*t-a*y*t-l*f*d+a*n*d)*b;c[6]=(v*m*g-h*y*g-v*f*q+a*y*q+h*f*d-a*m*d)*b;c[7]=(h*n*g-l*m*g+l*f*q-a*n*q-h*f*t+a*m*t)*b;c[8]=G*b;c[9]=(v*r*g-l*w*g-v*e*t+a*w*t+l*e*d-a*r*d)*b;c[10]=(h*w*g-v*k*g+v*e*q-a*w*q-h*e*d+a*k*d)*b;c[11]=(l*k*g-h*r*g-l*e*q+a*r*q+h*e*t-a*k*t)*b;c[12]=N*b;c[13]=(l*w*f-v*r*f+v*e*n-a*w*n-l*e*y+a*r*y)*b;c[14]=(v*k*f-h*w*f-v*e*m+a*w*m+h*e*y-a*k*y)*
b;c[15]=(h*r*f-l*k*f+l*e*m-a*r*m-h*e*n+a*k*n)*b;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=
Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=1-c,e=a.x,f=a.y;a=a.z;var g=d*e,h=d*f;this.set(g*e+c,g*f-b*a,g*a+b*f,0,g*f+b*a,h*f+c,h*a-b*e,0,g*a-b*f,h*a+b*e,d*a*a+c,0,0,
0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},compose:function(a,b,c){var d=this.elements,e=b._x,f=b._y,g=b._z,h=b._w,k=e+e,m=f+f,l=g+g;b=e*k;var p=e*m;e*=l;var r=f*m;f*=l;g*=l;k*=h;m*=h;h*=l;l=c.x;var n=c.y;c=c.z;d[0]=(1-(r+g))*l;d[1]=(p+h)*l;d[2]=(e-m)*l;d[3]=0;d[4]=(p-h)*n;d[5]=(1-(b+g))*n;d[6]=(f+k)*n;d[7]=0;d[8]=(e+m)*c;d[9]=(f-k)*c;d[10]=(1-(b+r))*c;d[11]=0;
d[12]=a.x;d[13]=a.y;d[14]=a.z;d[15]=1;return this},decompose:function(){var a=new n,b=new O;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.copy(this);c=1/g;f=1/h;var m=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=m;b.elements[9]*=m;b.elements[10]*=m;d.setFromRotationMatrix(b);
e.x=g;e.y=h;e.z=k;return this}}(),makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),k=1/(c-d),m=1/(f-e);g[0]=
2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*k;g[9]=0;g[13]=-((c+d)*k);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];
a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}});Object.assign(ka,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],k=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var l=e[f+1],p=e[f+2];e=e[f+3];if(c!==e||h!==d||k!==l||m!==p){f=1-g;var r=h*d+k*l+m*p+c*e,n=0<=r?1:-1,t=1-r*r;t>Number.EPSILON&&(t=Math.sqrt(t),r=Math.atan2(t,r*n),f=Math.sin(f*r)/t,g=Math.sin(g*
r)/t);n*=g;h=h*f+d*n;k=k*f+l*n;m=m*f+p*n;c=c*f+e*n;f===1-g&&(g=1/Math.sqrt(h*h+k*k+m*m+c*c),h*=g,k*=g,m*=g,c*=g)}a[b]=h;a[b+1]=k;a[b+2]=m;a[b+3]=c}});Object.defineProperties(ka.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this.onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this.onChangeCallback()}},w:{get:function(){return this._w},set:function(a){this._w=
a;this.onChangeCallback()}}});Object.assign(ka.prototype,{isQuaternion:!0,set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!a||!a.isEuler)throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
var c=a._x,d=a._y,e=a._z;a=a.order;var f=Math.cos,g=Math.sin,h=f(c/2),k=f(d/2);f=f(e/2);c=g(c/2);d=g(d/2);e=g(e/2);"XYZ"===a?(this._x=c*k*f+h*d*e,this._y=h*d*f-c*k*e,this._z=h*k*e+c*d*f,this._w=h*k*f-c*d*e):"YXZ"===a?(this._x=c*k*f+h*d*e,this._y=h*d*f-c*k*e,this._z=h*k*e-c*d*f,this._w=h*k*f+c*d*e):"ZXY"===a?(this._x=c*k*f-h*d*e,this._y=h*d*f+c*k*e,this._z=h*k*e+c*d*f,this._w=h*k*f-c*d*e):"ZYX"===a?(this._x=c*k*f-h*d*e,this._y=h*d*f+c*k*e,this._z=h*k*e-c*d*f,this._w=h*k*f+c*d*e):"YZX"===a?(this._x=
c*k*f+h*d*e,this._y=h*d*f+c*k*e,this._z=h*k*e-c*d*f,this._w=h*k*f-c*d*e):"XZY"===a&&(this._x=c*k*f-h*d*e,this._y=h*d*f-c*k*e,this._z=h*k*e+c*d*f,this._w=h*k*f+c*d*e);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,b){b/=2;var c=Math.sin(b);this._x=a.x*c;this._y=a.y*c;this._z=a.z*c;this._w=Math.cos(b);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6];b=b[10];var m=c+f+b;0<m?
(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a=new n,b;return function(c,d){void 0===a&&(a=new n);b=c.dot(d)+1;1E-6>b?
(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;return this.normalize()}}(),angleTo:function(a){return 2*Math.acos(Math.abs(R.clamp(this.dot(a),-1,1)))},rotateTowards:function(a,b){var c=this.angleTo(a);if(0===c)return this;this.slerp(a,Math.min(1,b/c));return this},inverse:function(){return this.conjugate()},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*
a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z;a=a._w;var f=b._x,g=b._y,h=b._z;b=b._w;this._x=c*b+a*f+d*h-e*g;this._y=d*b+a*g+e*f-c*h;this._z=e*b+a*h+c*g-d*f;this._w=a*b-c*f-d*g-e*h;this.onChangeCallback();return this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;
0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;a=1-g*g;if(a<=Number.EPSILON)return g=1-b,this._w=g*f+b*this._w,this._x=g*c+b*this._x,this._y=g*d+b*this._y,this._z=g*e+b*this._z,this.normalize();a=Math.sqrt(a);var h=Math.atan2(a,g);g=Math.sin((1-b)*h)/a;b=Math.sin(b*h)/a;this._w=f*g+this._w*b;this._x=c*g+this._x*b;this._y=d*g+this._y*b;this._z=e*g+this._z*b;this.onChangeCallback();return this},equals:function(a){return a._x===
this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}});Object.assign(n.prototype,{isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},
setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,
this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=
a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a=new ka;return function(b){b&&b.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");return this.applyQuaternion(a.setFromEuler(b))}}(),applyAxisAngle:function(){var a=new ka;return function(b,
c){return this.applyQuaternion(a.setFromAxisAngle(b,c))}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,
c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,m=a*d+e*c-f*b;b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-m*-f;this.y=k*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-k*-e;return this},project:function(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)},unproject:function(){var a=new O;return function(b){return this.applyMatrix4(a.getInverse(b.projectionMatrix)).applyMatrix4(b.matrixWorld)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=
a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,
Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(){var a=new n,b=new n;return function(c,d){a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);
this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*
this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},
cross:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a)},crossVectors:function(a,b){var c=a.x,d=a.y;a=a.z;var e=b.x,f=b.y;b=b.z;this.x=d*b-a*f;this.y=a*e-c*b;this.z=c*f-d*e;return this},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(){var a=new n;return function(b){a.copy(this).projectOnVector(b);
return this.sub(a)}}(),reflect:function(){var a=new n;return function(b){return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(R.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-
a.z)},setFromSpherical:function(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)},setFromSphericalCoords:function(a,b,c){var d=Math.sin(b)*a;this.x=d*Math.sin(c);this.y=Math.cos(b)*a;this.z=d*Math.cos(c);return this},setFromCylindrical:function(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y)},setFromCylindricalCoords:function(a,b,c){this.x=a*Math.sin(b);this.y=c;this.z=a*Math.cos(b);return this},setFromMatrixPosition:function(a){a=a.elements;this.x=a[12];this.y=a[13];this.z=
a[14];return this},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===
b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this}});Object.assign(da.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,k){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=f;m[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},
copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this},applyToBufferAttribute:function(){var a=new n;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiply:function(a){return this.multiplyMatrices(this,
a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[3],f=c[6],g=c[1],h=c[4],k=c[7],m=c[2],l=c[5];c=c[8];var p=d[0],r=d[3],n=d[6],t=d[1],v=d[4],w=d[7],y=d[2],u=d[5];d=d[8];b[0]=a*p+e*t+f*y;b[3]=a*r+e*v+f*u;b[6]=a*n+e*w+f*d;b[1]=g*p+h*t+k*y;b[4]=g*r+h*v+k*u;b[7]=g*n+h*w+k*d;b[2]=m*p+l*t+c*y;b[5]=m*r+l*v+c*u;b[8]=m*n+l*w+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=
a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7];a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var c=a.elements;a=this.elements;var d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],k=c[5],m=c[6],l=c[7];c=c[8];var p=c*h-k*l,r=k*m-c*g,n=l*g-h*m,t=d*p+e*r+f*n;if(0===t){if(!0===
b)throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");return this.identity()}b=1/t;a[0]=p*b;a[1]=(f*l-c*e)*b;a[2]=(k*e-f*h)*b;a[3]=r*b;a[4]=(c*d-f*m)*b;a[5]=(f*g-k*d)*b;a[6]=n*b;a[7]=(e*m-l*d)*b;a[8]=(h*d-e*g)*b;return this},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[3];a[3]=b;b=a[2];a[2]=a[6];a[6]=b;b=a[5];a[5]=a[7];a[7]=b;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},
transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},setUvTransform:function(a,b,c,d,e,f,g){var h=Math.cos(e);e=Math.sin(e);this.set(c*h,c*e,-c*(h*f+e*g)+f+a,-d*e,d*h,-d*(-e*f+h*g)+g+b,0,0,1)},scale:function(a,b){var c=this.elements;c[0]*=a;c[3]*=a;c[6]*=a;c[1]*=b;c[4]*=b;c[7]*=b;return this},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements,d=c[0],e=c[3],f=c[6],g=c[1],h=c[4],
k=c[7];c[0]=b*d+a*g;c[3]=b*e+a*h;c[6]=b*f+a*k;c[1]=-a*d+b*g;c[4]=-a*e+b*h;c[7]=-a*f+b*k;return this},translate:function(a,b){var c=this.elements;c[0]+=a*c[2];c[3]+=a*c[5];c[6]+=a*c[8];c[1]+=b*c[2];c[4]+=b*c[5];c[7]+=b*c[8];return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;9>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=
this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a}});var sc,ib={getDataURL:function(a){if("undefined"==typeof HTMLCanvasElement)return a.src;if(!(a instanceof HTMLCanvasElement)){void 0===sc&&(sc=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"));sc.width=a.width;sc.height=a.height;var b=sc.getContext("2d");a instanceof ImageData?b.putImageData(a,0,0):b.drawImage(a,0,0,a.width,a.height);a=sc}return 2048<
a.width||2048<a.height?a.toDataURL("image/jpeg",.6):a.toDataURL("image/png")}},Mf=0;X.DEFAULT_IMAGE=void 0;X.DEFAULT_MAPPING=300;X.prototype=Object.assign(Object.create(ja.prototype),{constructor:X,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);
this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.center.copy(a.center);this.rotation=a.rotation;this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrix.copy(a.matrix);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=
a.encoding;return this},toJSON:function(a){var b=void 0===a||"string"===typeof a;if(!b&&void 0!==a.textures[this.uuid])return a.textures[this.uuid];var c={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,
magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var d=this.image;void 0===d.uuid&&(d.uuid=R.generateUUID());if(!b&&void 0===a.images[d.uuid]){if(Array.isArray(d)){var e=[];for(var f=0,g=d.length;f<g;f++)e.push(ib.getDataURL(d[f]))}else e=ib.getDataURL(d);a.images[d.uuid]={uuid:d.uuid,url:e}}c.image=d.uuid}b||(a.textures[this.uuid]=c);return c},dispose:function(){this.dispatchEvent({type:"dispose"})},
transformUv:function(a){if(300!==this.mapping)return a;a.applyMatrix3(this.matrix);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y);return a}});Object.defineProperty(X.prototype,
"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(ca.prototype,{isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=
b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,
b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*
e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){a=a.elements;var b=a[0];var c=a[4];var d=a[8],e=a[1],f=a[5],g=a[9];var h=a[2];var k=a[6];var m=a[10];if(.01>Math.abs(c-e)&&.01>Math.abs(d-h)&&.01>Math.abs(g-k)){if(.1>Math.abs(c+
e)&&.1>Math.abs(d+h)&&.1>Math.abs(g+k)&&.1>Math.abs(b+f+m-3))return this.set(1,0,0,0),this;a=Math.PI;b=(b+1)/2;f=(f+1)/2;m=(m+1)/2;c=(c+e)/4;d=(d+h)/4;g=(g+k)/4;b>f&&b>m?.01>b?(k=0,c=h=.707106781):(k=Math.sqrt(b),h=c/k,c=d/k):f>m?.01>f?(k=.707106781,h=0,c=.707106781):(h=Math.sqrt(f),k=c/h,c=g/h):.01>m?(h=k=.707106781,c=0):(c=Math.sqrt(m),k=d/c,h=g/c);this.set(k,h,c,a);return this}a=Math.sqrt((k-g)*(k-g)+(d-h)*(d-h)+(e-c)*(e-c));.001>Math.abs(a)&&(a=1);this.x=(k-g)/a;this.y=(d-h)/a;this.z=(e-c)/a;
this.w=Math.acos((b+f+m-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,
this.w));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new ca,b=new ca);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);
this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},
dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=
(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromBufferAttribute:function(a,
b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this}});jb.prototype=Object.assign(Object.create(ja.prototype),{constructor:jb,isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=
a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Ib.prototype=Object.create(jb.prototype);Ib.prototype.constructor=Ib;Ib.prototype.isWebGLRenderTargetCube=!0;kb.prototype=Object.create(X.prototype);kb.prototype.constructor=kb;kb.prototype.isDataTexture=!0;Object.assign(Wa.prototype,{isBox3:!0,
set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.length;h<k;h+=3){var m=a[h],l=a[h+1],p=a[h+2];m<b&&(b=m);l<c&&(c=l);p<d&&(d=p);m>e&&(e=m);l>f&&(f=l);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.count;h<k;h++){var m=a.getX(h),l=a.getY(h),
p=a.getZ(h);m<b&&(b=m);l<c&&(c=l);p<d&&(d=p);m>e&&(e=m);l>f&&(f=l);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new n;return function(b,c){c=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(c);this.max.copy(b).add(c);return this}}(),setFromObject:function(a){this.makeEmpty();return this.expandByObject(a)},clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){void 0===a&&(console.warn("THREE.Box3: .getCenter() target is now required"),a=new n);return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){void 0===
a&&(console.warn("THREE.Box3: .getSize() target is now required"),a=new n);return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},expandByObject:function(){function a(a){var f=a.geometry;if(void 0!==f)if(f.isGeometry)for(f=f.vertices,c=0,d=f.length;c<d;c++)e.copy(f[c]),
e.applyMatrix4(a.matrixWorld),b.expandByPoint(e);else if(f.isBufferGeometry&&(f=f.attributes.position,void 0!==f))for(c=0,d=f.count;c<d;c++)e.fromBufferAttribute(f,c).applyMatrix4(a.matrixWorld),b.expandByPoint(e)}var b,c,d,e=new n;return function(c){b=this;c.updateMatrixWorld(!0);c.traverse(a);return this}}(),containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=
this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){void 0===b&&(console.warn("THREE.Box3: .getParameter() target is now required"),b=new n);return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?
!1:!0},intersectsSphere:function(){var a=new n;return function(b){this.clampPoint(b.center,a);return a.distanceToSquared(b.center)<=b.radius*b.radius}}(),intersectsPlane:function(a){if(0<a.normal.x){var b=a.normal.x*this.min.x;var c=a.normal.x*this.max.x}else b=a.normal.x*this.max.x,c=a.normal.x*this.min.x;0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*
this.max.z,c+=a.normal.z*this.min.z);return b<=-a.constant&&c>=-a.constant},intersectsTriangle:function(){function a(a){var e;var f=0;for(e=a.length-3;f<=e;f+=3){h.fromArray(a,f);var g=m.x*Math.abs(h.x)+m.y*Math.abs(h.y)+m.z*Math.abs(h.z),k=b.dot(h),l=c.dot(h),q=d.dot(h);if(Math.max(-Math.max(k,l,q),Math.min(k,l,q))>g)return!1}return!0}var b=new n,c=new n,d=new n,e=new n,f=new n,g=new n,h=new n,k=new n,m=new n,l=new n;return function(h){if(this.isEmpty())return!1;this.getCenter(k);m.subVectors(this.max,
k);b.subVectors(h.a,k);c.subVectors(h.b,k);d.subVectors(h.c,k);e.subVectors(c,b);f.subVectors(d,c);g.subVectors(b,d);h=[0,-e.z,e.y,0,-f.z,f.y,0,-g.z,g.y,e.z,0,-e.x,f.z,0,-f.x,g.z,0,-g.x,-e.y,e.x,0,-f.y,f.x,0,-g.y,g.x,0];if(!a(h))return!1;h=[1,0,0,0,1,0,0,0,1];if(!a(h))return!1;l.crossVectors(e,f);h=[l.x,l.y,l.z];return a(h)}}(),clampPoint:function(a,b){void 0===b&&(console.warn("THREE.Box3: .clampPoint() target is now required"),b=new n);return b.copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=
new n;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new n;return function(b){void 0===b&&(console.warn("THREE.Box3: .getBoundingSphere() target is now required"),b=new Ea);this.getCenter(b.center);b.radius=.5*this.getSize(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=
[new n,new n,new n,new n,new n,new n,new n,new n];return function(b){if(this.isEmpty())return this;a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);
a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});Object.assign(Ea.prototype,{set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new Wa;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).getCenter(d);for(var e=c=0,f=b.length;e<f;e++)c=Math.max(c,
d.distanceToSquared(b[e]));this.radius=Math.sqrt(c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=
b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a);void 0===b&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),b=new n);b.copy(a);c>this.radius*this.radius&&(b.sub(this.center).normalize(),b.multiplyScalar(this.radius).add(this.center));return b},getBoundingBox:function(a){void 0===a&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
a=new Wa);a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}});Object.assign(Pa.prototype,{set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,
b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new n,b=new n;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},
negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){void 0===b&&(console.warn("THREE.Plane: .projectPoint() target is now required"),b=new n);return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a)},intersectLine:function(){var a=new n;return function(b,c){void 0===c&&(console.warn("THREE.Plane: .intersectLine() target is now required"),
c=new n);var d=b.delta(a),e=this.normal.dot(d);if(0===e){if(0===this.distanceToPoint(b.start))return c.copy(b.start)}else if(e=-(b.start.dot(this.normal)+this.constant)/e,!(0>e||1<e))return c.copy(d).multiplyScalar(e).add(b.start)}}(),intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){void 0===
a&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),a=new n);return a.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new n,b=new da;return function(c,d){d=d||b.getNormalMatrix(c);c=this.coplanarPoint(a).applyMatrix4(c);d=this.normal.applyMatrix3(d).normalize();this.constant=-c.dot(d);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}});
Object.assign(td.prototype,{set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],m=c[7],l=c[8],p=c[9],r=c[10],n=c[11],t=c[12],v=c[13],w=c[14];c=c[15];b[0].setComponents(f-
a,m-g,n-l,c-t).normalize();b[1].setComponents(f+a,m+g,n+l,c+t).normalize();b[2].setComponents(f+d,m+h,n+p,c+v).normalize();b[3].setComponents(f-d,m-h,n-p,c-v).normalize();b[4].setComponents(f-e,m-k,n-r,c-w).normalize();b[5].setComponents(f+e,m+k,n+r,c+w).normalize();return this},intersectsObject:function(){var a=new Ea;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSprite:function(){var a=
new Ea;return function(b){a.center.set(0,0,0);a.radius=.7071067811865476;a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new n;return function(b){for(var c=this.planes,d=0;6>d;d++){var e=c[d];a.x=0<e.normal.x?b.max.x:b.min.x;a.y=0<e.normal.y?b.max.y:b.min.y;a.z=0<e.normal.z?b.max.z:b.min.z;if(0>e.distanceToPoint(a))return!1}return!0}}(),
containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}});var H={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
defaultnormal_vertex:"vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif",
emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
fog_vertex:"#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
lights_pars_begin:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif",
lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif",
lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif",
logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif",normal_fragment_maps:"#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",
uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"},
ah={clone:Jb,merge:ma},bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,
teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Object.assign(I.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;
return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&--d;return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,c,d){b=R.euclideanModulo(b,1);c=R.clamp(c,0,1);d=R.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+
a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],
10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){d=parseFloat(c[1])/360;var e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),
16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}a&&0<a.length&&(c=bh[a],void 0!==c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,
b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);b=0<b?1/b:1;this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},convertGammaToLinear:function(a){this.copyGammaToLinear(this,a);return this},convertLinearToGamma:function(a){this.copyLinearToGamma(this,a);return this},copySRGBToLinear:function(){function a(a){return.04045>a?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4)}return function(b){this.r=a(b.r);this.g=a(b.g);this.b=
a(b.b);return this}}(),copyLinearToSRGB:function(){function a(a){return.0031308>a?12.92*a:1.055*Math.pow(a,.41666)-.055}return function(b){this.r=a(b.r);this.g=a(b.g);this.b=a(b.b);return this}}(),convertSRGBToLinear:function(){this.copySRGBToLinear(this);return this},convertLinearToSRGB:function(){this.copyLinearToSRGB(this);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){void 0===
a&&(console.warn("THREE.Color: .getHSL() target is now required"),a={h:0,s:0,l:0});var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f;f=.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(){var a={};return function(b,c,d){this.getHSL(a);a.h+=
b;a.s+=c;a.l+=d;this.setHSL(a.h,a.s,a.l);return this}}(),add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=
a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},lerpHSL:function(){var a={h:0,s:0,l:0},b={h:0,s:0,l:0};return function(c,d){this.getHSL(a);c.getHSL(b);c=R.lerp(a.h,b.h,d);var e=R.lerp(a.s,b.s,d);d=R.lerp(a.l,b.l,d);this.setHSL(c,e,d);return this}}(),equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,
b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}});var F={common:{diffuse:{value:new I(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new da},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},
lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new I(16777215)}},
lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},
decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new I(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new da}},sprite:{diffuse:{value:new I(15658734)},
opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},uvTransform:{value:new da}}},Qa={basic:{uniforms:ma([F.common,F.specularmap,F.envmap,F.aomap,F.lightmap,F.fog]),vertexShader:H.meshbasic_vert,fragmentShader:H.meshbasic_frag},lambert:{uniforms:ma([F.common,F.specularmap,F.envmap,F.aomap,F.lightmap,F.emissivemap,F.fog,F.lights,{emissive:{value:new I(0)}}]),vertexShader:H.meshlambert_vert,fragmentShader:H.meshlambert_frag},phong:{uniforms:ma([F.common,F.specularmap,F.envmap,
F.aomap,F.lightmap,F.emissivemap,F.bumpmap,F.normalmap,F.displacementmap,F.gradientmap,F.fog,F.lights,{emissive:{value:new I(0)},specular:{value:new I(1118481)},shininess:{value:30}}]),vertexShader:H.meshphong_vert,fragmentShader:H.meshphong_frag},standard:{uniforms:ma([F.common,F.envmap,F.aomap,F.lightmap,F.emissivemap,F.bumpmap,F.normalmap,F.displacementmap,F.roughnessmap,F.metalnessmap,F.fog,F.lights,{emissive:{value:new I(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),
vertexShader:H.meshphysical_vert,fragmentShader:H.meshphysical_frag},matcap:{uniforms:ma([F.common,F.bumpmap,F.normalmap,F.displacementmap,F.fog,{matcap:{value:null}}]),vertexShader:H.meshmatcap_vert,fragmentShader:H.meshmatcap_frag},points:{uniforms:ma([F.points,F.fog]),vertexShader:H.points_vert,fragmentShader:H.points_frag},dashed:{uniforms:ma([F.common,F.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:H.linedashed_vert,fragmentShader:H.linedashed_frag},depth:{uniforms:ma([F.common,
F.displacementmap]),vertexShader:H.depth_vert,fragmentShader:H.depth_frag},normal:{uniforms:ma([F.common,F.bumpmap,F.normalmap,F.displacementmap,{opacity:{value:1}}]),vertexShader:H.normal_vert,fragmentShader:H.normal_frag},sprite:{uniforms:ma([F.sprite,F.fog]),vertexShader:H.sprite_vert,fragmentShader:H.sprite_frag},background:{uniforms:{uvTransform:{value:new da},t2D:{value:null}},vertexShader:H.background_vert,fragmentShader:H.background_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},
opacity:{value:1}},vertexShader:H.cube_vert,fragmentShader:H.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:H.equirect_vert,fragmentShader:H.equirect_frag},distanceRGBA:{uniforms:ma([F.common,F.displacementmap,{referencePosition:{value:new n},nearDistance:{value:1},farDistance:{value:1E3}}]),vertexShader:H.distanceRGBA_vert,fragmentShader:H.distanceRGBA_frag},shadow:{uniforms:ma([F.lights,F.fog,{color:{value:new I(0)},opacity:{value:1}}]),vertexShader:H.shadow_vert,fragmentShader:H.shadow_frag}};
Qa.physical={uniforms:ma([Qa.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:H.meshphysical_vert,fragmentShader:H.meshphysical_frag};Object.assign(Kb.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<
c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}});lb.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");lb.DefaultOrder="XYZ";Object.defineProperties(lb.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this.onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this.onChangeCallback()}},order:{get:function(){return this._order},set:function(a){this._order=
a;this.onChangeCallback()}}});Object.assign(lb.prototype,{isEuler:!0,set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=R.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],m=e[9],l=e[2],p=
e[6];e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(p,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(m,-1,1)),.99999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-l,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.99999>Math.abs(p)?(this._y=Math.atan2(-l,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(l,
-1,1)),.99999>Math.abs(l)?(this._x=Math.atan2(p,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-m,k),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(p,k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=
b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a=new O;return function(b,c,d){a.makeRotationFromQuaternion(b);return this.setFromRotationMatrix(a,c,d)}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new ka;return function(b){a.setFromEuler(this);return this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=
a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new n(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}});Object.assign(Xd.prototype,{set:function(a){this.mask=1<<a|0},enable:function(a){this.mask=
this.mask|1<<a|0},toggle:function(a){this.mask^=1<<a|0},disable:function(a){this.mask&=~(1<<a|0)},test:function(a){return 0!==(this.mask&a.mask)}});var Of=0;D.DefaultUp=new n(0,1,0);D.DefaultMatrixAutoUpdate=!0;D.prototype=Object.assign(Object.create(ja.prototype),{constructor:D,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(a){this.quaternion.premultiply(a);
return this},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new ka;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateOnWorldAxis:function(){var a=new ka;return function(b,c){a.setFromAxisAngle(b,
c);this.quaternion.premultiply(a);return this}}(),rotateX:function(){var a=new n(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new n(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new n(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new n;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translateX:function(){var a=
new n(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new n(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new n(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new O;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new ka,b=new O,c=new n,d=new n;return function(e,
f,g){e.isVector3?c.copy(e):c.set(e,f,g);e=this.parent;this.updateWorldMatrix(!0,!1);d.setFromMatrixPosition(this.matrixWorld);this.isCamera||this.isLight?b.lookAt(d,c,this.up):b.lookAt(c,d,this.up);this.quaternion.setFromRotationMatrix(b);e&&(b.extractRotation(e.matrixWorld),a.setFromRotationMatrix(b),this.quaternion.premultiply(a.inverse()))}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",
a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);return this}b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1));return this},getObjectById:function(a){return this.getObjectByProperty("id",
a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),a=new n);this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new n,b=new n;
return function(c){void 0===c&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),c=new ka);this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldScale:function(){var a=new n,b=new ka;return function(c){void 0===c&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),c=new n);this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),
a=new n);this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(b[8],b[9],b[10]).normalize()},raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,
this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},updateWorldMatrix:function(a,b){var c=this.parent;!0===a&&null!==c&&c.updateWorldMatrix(!0,!1);this.matrixAutoUpdate&&
this.updateMatrix();null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(!0===b)for(a=this.children,b=0,c=a.length;b<c;b++)a[b].updateWorldMatrix(!1,!0)},toJSON:function(a){function b(b,c){void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a));return c.uuid}function c(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var d=void 0===a||"string"===typeof a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{},
shapes:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};f.uuid=this.uuid;f.type=this.type;""!==this.name&&(f.name=this.name);!0===this.castShadow&&(f.castShadow=!0);!0===this.receiveShadow&&(f.receiveShadow=!0);!1===this.visible&&(f.visible=!1);!1===this.frustumCulled&&(f.frustumCulled=!1);0!==this.renderOrder&&(f.renderOrder=this.renderOrder);"{}"!==JSON.stringify(this.userData)&&(f.userData=this.userData);f.layers=this.layers.mask;f.matrix=this.matrix.toArray();!1===
this.matrixAutoUpdate&&(f.matrixAutoUpdate=!1);if(this.isMesh||this.isLine||this.isPoints){f.geometry=b(a.geometries,this.geometry);var g=this.geometry.parameters;if(void 0!==g&&void 0!==g.shapes)if(g=g.shapes,Array.isArray(g))for(var h=0,k=g.length;h<k;h++)b(a.shapes,g[h]);else b(a.shapes,g)}if(void 0!==this.material)if(Array.isArray(this.material)){g=[];h=0;for(k=this.material.length;h<k;h++)g.push(b(a.materials,this.material[h]));f.material=g}else f.material=b(a.materials,this.material);if(0<this.children.length)for(f.children=
[],h=0;h<this.children.length;h++)f.children.push(this.children[h].toJSON(a).object);if(d){d=c(a.geometries);h=c(a.materials);k=c(a.textures);var m=c(a.images);g=c(a.shapes);0<d.length&&(e.geometries=d);0<h.length&&(e.materials=h);0<k.length&&(e.textures=k);0<m.length&&(e.images=m);0<g.length&&(e.shapes=g)}e.object=f;return e},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);
this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(b=0;b<a.children.length;b++)this.add(a.children[b].clone());return this}});
var Pf=0;Q.prototype=Object.assign(Object.create(ja.prototype),{constructor:Q,isGeometry:!0,applyMatrix:function(a){for(var b=(new da).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();
this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},rotateX:function(){var a=new O;return function(b){a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a=new O;return function(b){a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a=new O;return function(b){a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a=new O;return function(b,c,d){a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a=
new O;return function(b,c,d){a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a=new D;return function(b){a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),fromBufferGeometry:function(a){function b(a,b,d,e){var f=void 0===h?[]:[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()],l=void 0===g?[]:[(new n).fromArray(g,3*a),(new n).fromArray(g,3*b),(new n).fromArray(g,3*d)];e=new Kb(a,b,d,l,f,e);c.faces.push(e);void 0!==k&&c.faceVertexUvs[0].push([(new z).fromArray(k,
2*a),(new z).fromArray(k,2*b),(new z).fromArray(k,2*d)]);void 0!==m&&c.faceVertexUvs[1].push([(new z).fromArray(m,2*a),(new z).fromArray(m,2*b),(new z).fromArray(m,2*d)])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,k=void 0!==e.uv?e.uv.array:void 0,m=void 0!==e.uv2?e.uv2.array:void 0;void 0!==m&&(this.faceVertexUvs[1]=[]);for(var l=e=0;e<f.length;e+=3,l+=2)c.vertices.push((new n).fromArray(f,
e)),void 0!==h&&c.colors.push((new I).fromArray(h,e));var p=a.groups;if(0<p.length)for(e=0;e<p.length;e++){f=p[e];var r=f.start,x=f.count;l=r;for(r+=x;l<r;l+=3)void 0!==d?b(d[l],d[l+1],d[l+2],f.materialIndex):b(l,l+1,l+2,f.materialIndex)}else if(void 0!==d)for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());
return this},center:function(){var a=new n;return function(){this.computeBoundingBox();this.boundingBox.getCenter(a).negate();this.translate(a.x,a.y,a.z);return this}}(),normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius;b=0===b?1:1/b;var c=new O;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new n,b=new n,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],
f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===a&&(a=!0);var b;var c=Array(this.vertices.length);var d=0;for(b=this.vertices.length;d<b;d++)c[d]=new n;if(a){var e=new n,f=new n;a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a];var g=this.vertices[b.a];var h=this.vertices[b.b];var k=this.vertices[b.c];e.subVectors(k,h);f.subVectors(g,h);e.cross(f);c[b.a].add(e);c[b.b].add(e);
c[b.c].add(e)}}else for(this.computeFaceNormals(),a=0,d=this.faces.length;a<d;a++)b=this.faces[a],c[b.a].add(b.normal),c[b.b].add(b.normal),c[b.c].add(b.normal);d=0;for(b=this.vertices.length;d<b;d++)c[d].normalize();a=0;for(d=this.faces.length;a<d;a++)b=this.faces[a],g=b.vertexNormals,3===g.length?(g[0].copy(c[b.a]),g[1].copy(c[b.b]),g[2].copy(c[b.c])):(g[0]=c[b.a].clone(),g[1]=c[b.b].clone(),g[2]=c[b.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a;
this.computeFaceNormals();var b=0;for(a=this.faces.length;b<a;b++){var c=this.faces[b];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b;var c=0;for(b=this.faces.length;c<b;c++){var d=this.faces[c];d.__originalFaceNormal?d.__originalFaceNormal.copy(d.normal):d.__originalFaceNormal=d.normal.clone();
d.__originalVertexNormals||(d.__originalVertexNormals=[]);var e=0;for(a=d.vertexNormals.length;e<a;e++)d.__originalVertexNormals[e]?d.__originalVertexNormals[e].copy(d.vertexNormals[e]):d.__originalVertexNormals[e]=d.vertexNormals[e].clone()}var f=new Q;f.faces=this.faces;e=0;for(a=this.morphTargets.length;e<a;e++){if(!this.morphNormals[e]){this.morphNormals[e]={};this.morphNormals[e].faceNormals=[];this.morphNormals[e].vertexNormals=[];d=this.morphNormals[e].faceNormals;var g=this.morphNormals[e].vertexNormals;
c=0;for(b=this.faces.length;c<b;c++){var h=new n;var k={a:new n,b:new n,c:new n};d.push(h);g.push(k)}}g=this.morphNormals[e];f.vertices=this.morphTargets[e].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(d.normal),k.a.copy(d.vertexNormals[0]),k.b.copy(d.vertexNormals[1]),k.c.copy(d.vertexNormals[2])}c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],d.normal=d.__originalFaceNormal,d.vertexNormals=
d.__originalVertexNormals},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Wa);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new Ea);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(a&&a.isGeometry){var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,m=this.faceVertexUvs[0],l=a.faceVertexUvs[0],p=this.colors,r=a.colors;void 0===c&&(c=
0);void 0!==b&&(d=(new da).getNormalMatrix(b));a=0;for(var n=g.length;a<n;a++){var t=g[a].clone();void 0!==b&&t.applyMatrix4(b);f.push(t)}a=0;for(n=r.length;a<n;a++)p.push(r[a].clone());a=0;for(n=k.length;a<n;a++){g=k[a];var v=g.vertexNormals;r=g.vertexColors;p=new Kb(g.a+e,g.b+e,g.c+e);p.normal.copy(g.normal);void 0!==d&&p.normal.applyMatrix3(d).normalize();b=0;for(f=v.length;b<f;b++)t=v[b].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),p.vertexNormals.push(t);p.color.copy(g.color);b=0;for(f=
r.length;b<f;b++)t=r[b],p.vertexColors.push(t.clone());p.materialIndex=g.materialIndex+c;h.push(p)}a=0;for(n=l.length;a<n;a++)if(c=l[a],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());m.push(d)}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a)},mergeMesh:function(a){a&&a.isMesh?(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a)},mergeVertices:function(){var a=
{},b=[],c=[],d=Math.pow(10,4),e;var f=0;for(e=this.vertices.length;f<e;f++){var g=this.vertices[f];g=Math.round(g.x*d)+"_"+Math.round(g.y*d)+"_"+Math.round(g.z*d);void 0===a[g]?(a[g]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[g]]}a=[];f=0;for(e=this.faces.length;f<e;f++)for(d=this.faces[f],d.a=c[d.a],d.b=c[d.b],d.c=c[d.c],d=[d.a,d.b,d.c],g=0;3>g;g++)if(d[g]===d[(g+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(d=a[f],this.faces.splice(d,1),c=0,e=this.faceVertexUvs.length;c<e;c++)this.faceVertexUvs[c].splice(d,
1);f=this.vertices.length-b.length;this.vertices=b;return f},setFromPoints:function(a){this.vertices=[];for(var b=0,c=a.length;b<c;b++){var d=a[b];this.vertices.push(new n(d.x,d.y,d.z||0))}return this},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);
g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==m[b])return m[b];m[b]=k.length/3;k.push(a.x,a.y,a.z);return m[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=l.length;l.push(a.getHex());return p[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==n[b])return n[b];n[b]=
r.length/2;r.push(a.x,a.y);return n[b]}var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}h=[];var k=[],m={},l=[],p={},r=[],n={};for(g=0;g<this.faces.length;g++){var t=this.faces[g],v=void 0!==this.faceVertexUvs[0][g],w=0<t.normal.length(),
y=0<t.vertexNormals.length,u=1!==t.color.r||1!==t.color.g||1!==t.color.b,z=0<t.vertexColors.length,G=0;G=a(G,0,0);G=a(G,1,!0);G=a(G,2,!1);G=a(G,3,v);G=a(G,4,w);G=a(G,5,y);G=a(G,6,u);G=a(G,7,z);h.push(G);h.push(t.a,t.b,t.c);h.push(t.materialIndex);v&&(v=this.faceVertexUvs[0][g],h.push(d(v[0]),d(v[1]),d(v[2])));w&&h.push(b(t.normal));y&&(w=t.vertexNormals,h.push(b(w[0]),b(w[1]),b(w[2])));u&&h.push(c(t.color));z&&(t=t.vertexColors,h.push(c(t[0]),c(t[1]),c(t[2])))}e.data={};e.data.vertices=f;e.data.normals=
k;0<l.length&&(e.data.colors=l);0<r.length&&(e.data.uvs=[r]);e.data.faces=h;return e},clone:function(){return(new Q).copy(this)},copy:function(a){var b,c,d;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var e=a.vertices;var f=0;for(b=e.length;f<b;f++)this.vertices.push(e[f].clone());e=a.colors;f=0;for(b=e.length;f<
b;f++)this.colors.push(e[f].clone());e=a.faces;f=0;for(b=e.length;f<b;f++)this.faces.push(e[f].clone());f=0;for(b=a.faceVertexUvs.length;f<b;f++){var g=a.faceVertexUvs[f];void 0===this.faceVertexUvs[f]&&(this.faceVertexUvs[f]=[]);e=0;for(c=g.length;e<c;e++){var h=g[e],k=[];var m=0;for(d=h.length;m<d;m++)k.push(h[m].clone());this.faceVertexUvs[f].push(k)}}m=a.morphTargets;f=0;for(b=m.length;f<b;f++){d={};d.name=m[f].name;if(void 0!==m[f].vertices)for(d.vertices=[],e=0,c=m[f].vertices.length;e<c;e++)d.vertices.push(m[f].vertices[e].clone());
if(void 0!==m[f].normals)for(d.normals=[],e=0,c=m[f].normals.length;e<c;e++)d.normals.push(m[f].normals[e].clone());this.morphTargets.push(d)}m=a.morphNormals;f=0;for(b=m.length;f<b;f++){d={};if(void 0!==m[f].vertexNormals)for(d.vertexNormals=[],e=0,c=m[f].vertexNormals.length;e<c;e++)g=m[f].vertexNormals[e],h={},h.a=g.a.clone(),h.b=g.b.clone(),h.c=g.c.clone(),d.vertexNormals.push(h);if(void 0!==m[f].faceNormals)for(d.faceNormals=[],e=0,c=m[f].faceNormals.length;e<c;e++)d.faceNormals.push(m[f].faceNormals[e].clone());
this.morphNormals.push(d)}e=a.skinWeights;f=0;for(b=e.length;f<b;f++)this.skinWeights.push(e[f].clone());e=a.skinIndices;f=0;for(b=e.length;f<b;f++)this.skinIndices.push(e[f].clone());e=a.lineDistances;f=0;for(b=e.length;f<b;f++)this.lineDistances.push(e[f]);f=a.boundingBox;null!==f&&(this.boundingBox=f.clone());f=a.boundingSphere;null!==f&&(this.boundingSphere=f.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=
a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(E.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(E.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
this.count=void 0!==a?a.length/this.itemSize:0;this.array=a;return this},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.name=a.name;this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=
this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new I);b[c++]=f.r;b[c++]=f.g;b[c++]=f.b}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new z);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=
a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new n);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new ca);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*
this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+
1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor(this.array,this.itemSize)).copy(this)}});tc.prototype=Object.create(E.prototype);tc.prototype.constructor=tc;uc.prototype=Object.create(E.prototype);
uc.prototype.constructor=uc;vc.prototype=Object.create(E.prototype);vc.prototype.constructor=vc;wc.prototype=Object.create(E.prototype);wc.prototype.constructor=wc;mb.prototype=Object.create(E.prototype);mb.prototype.constructor=mb;xc.prototype=Object.create(E.prototype);xc.prototype.constructor=xc;nb.prototype=Object.create(E.prototype);nb.prototype.constructor=nb;A.prototype=Object.create(E.prototype);A.prototype.constructor=A;yc.prototype=Object.create(E.prototype);yc.prototype.constructor=yc;
Object.assign(Je.prototype,{computeGroups:function(a){var b=[],c=void 0;a=a.faces;for(var d=0;d<a.length;d++){var e=a[d];if(e.materialIndex!==c){c=e.materialIndex;void 0!==f&&(f.count=3*d-f.start,b.push(f));var f={start:3*d,materialIndex:c}}}void 0!==f&&(f.count=3*d-f.start,b.push(f));this.groups=b},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length;if(0<h){var k=[];for(var m=0;m<h;m++)k[m]={name:g[m].name,
data:[]};this.morphTargets.position=k}var l=a.morphNormals,p=l.length;if(0<p){var r=[];for(m=0;m<p;m++)r[m]={name:l[m].name,data:[]};this.morphTargets.normal=r}var n=a.skinIndices,t=a.skinWeights,v=n.length===c.length,w=t.length===c.length;0<c.length&&0===b.length&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(m=0;m<b.length;m++){var y=b[m];this.vertices.push(c[y.a],c[y.b],c[y.c]);var u=y.vertexNormals;3===u.length?this.normals.push(u[0],u[1],u[2]):(u=y.normal,
this.normals.push(u,u,u));u=y.vertexColors;3===u.length?this.colors.push(u[0],u[1],u[2]):(u=y.color,this.colors.push(u,u,u));!0===e&&(u=d[0][m],void 0!==u?this.uvs.push(u[0],u[1],u[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new z,new z,new z)));!0===f&&(u=d[1][m],void 0!==u?this.uvs2.push(u[0],u[1],u[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new z,new z,new z)));for(u=0;u<h;u++){var A=g[u].vertices;
k[u].data.push(A[y.a],A[y.b],A[y.c])}for(u=0;u<p;u++)A=l[u].vertexNormals[m],r[u].data.push(A.a,A.b,A.c);v&&this.skinIndices.push(n[y.a],n[y.b],n[y.c]);w&&this.skinWeights.push(t[y.a],t[y.b],t[y.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this}});var Qf=1;C.prototype=Object.assign(Object.create(ja.prototype),
{constructor:C,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?this.index=new (65535<Ke(a)?nb:mb)(a,1):this.index=a},addAttribute:function(a,b,c){if(!(b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute))return console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new E(b,c));if("index"===a)return console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b),
this;this.attributes[a]=b;return this},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a];return this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToBufferAttribute(b),b.needsUpdate=!0);b=this.attributes.normal;
void 0!==b&&((new da).getNormalMatrix(a).applyToBufferAttribute(b),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this},rotateX:function(){var a=new O;return function(b){a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a=new O;return function(b){a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a=new O;return function(b){a.makeRotationZ(b);this.applyMatrix(a);
return this}}(),translate:function(){var a=new O;return function(b,c,d){a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a=new O;return function(b,c,d){a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a=new D;return function(b){a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){var a=new n;return function(){this.computeBoundingBox();this.boundingBox.getCenter(a).negate();this.translate(a.x,a.y,a.z);return this}}(),
setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new A(3*b.vertices.length,3);var c=new A(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new A(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&
(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},setFromPoints:function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];b.push(e.x,e.y,e.z||0)}this.addAttribute("position",new A(b,3));return this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=
b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=
!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},
fromGeometry:function(a){a.__directGeometry=(new Je).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new E(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new E(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",(new E(b,3)).copyColorsArray(a.colors)));
0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new E(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new E(b,2)).copyVector2sArray(a.uvs2)));this.groups=a.groups;for(var c in a.morphTargets){b=[];for(var d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new A(3*g.data.length,3);h.name=g.name;b.push(h.copyVector3sArray(g.data))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new A(4*a.skinIndices.length,
4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new A(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Wa);var a=this.attributes.position;void 0!==a?this.boundingBox.setFromBufferAttribute(a):
this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var a=new Wa,b=new n;return function(){null===this.boundingSphere&&(this.boundingSphere=new Ea);var c=this.attributes.position;if(c){var d=this.boundingSphere.center;a.setFromBufferAttribute(c);
a.getCenter(d);for(var e=0,f=0,g=c.count;f<g;f++)b.x=c.getX(f),b.y=c.getY(f),b.z=c.getZ(f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes;if(b.position){var c=b.position.array;if(void 0===
b.normal)this.addAttribute("normal",new E(new Float32Array(c.length),3));else for(var d=b.normal.array,e=0,f=d.length;e<f;e++)d[e]=0;d=b.normal.array;var g=new n,h=new n,k=new n,m=new n,l=new n;if(a){var p=a.array;e=0;for(f=a.count;e<f;e+=3){a=3*p[e+0];var r=3*p[e+1];var x=3*p[e+2];g.fromArray(c,a);h.fromArray(c,r);k.fromArray(c,x);m.subVectors(k,h);l.subVectors(g,h);m.cross(l);d[a]+=m.x;d[a+1]+=m.y;d[a+2]+=m.z;d[r]+=m.x;d[r+1]+=m.y;d[r+2]+=m.z;d[x]+=m.x;d[x+1]+=m.y;d[x+2]+=m.z}}else for(e=0,f=c.length;e<
f;e+=9)g.fromArray(c,e),h.fromArray(c,e+3),k.fromArray(c,e+6),m.subVectors(k,h),l.subVectors(g,h),m.cross(l),d[e]=m.x,d[e+1]=m.y,d[e+2]=m.z,d[e+3]=m.x,d[e+4]=m.y,d[e+5]=m.z,d[e+6]=m.x,d[e+7]=m.y,d[e+8]=m.z;this.normalizeNormals();b.normal.needsUpdate=!0}},merge:function(a,b){if(a&&a.isBufferGeometry){void 0===b&&(b=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var c=this.attributes,
d;for(d in c)if(void 0!==a.attributes[d]){var e=c[d].array,f=a.attributes[d],g=f.array,h=0;for(f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h]}return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a)},normalizeNormals:function(){var a=new n;return function(){for(var b=this.attributes.normal,c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.normalize(),b.setXYZ(c,a.x,a.y,a.z)}}(),toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
this;var a=new C,b=this.index.array,c=this.attributes,d;for(d in c){var e=c[d],f=e.array,g=e.itemSize,h=new f.constructor(b.length*g),k=0;e=0;for(var m=b.length;e<m;e++){var l=b[e]*g;for(var p=0;p<g;p++)h[k++]=f[l++]}a.addAttribute(d,new E(h,g))}b=this.groups;e=0;for(m=b.length;e<m;e++)c=b[e],a.addGroup(c.start,c.count,c.materialIndex);return a},toJSON:function(){var a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&
(a.name=this.name);0<Object.keys(this.userData).length&&(a.userData=this.userData);if(void 0!==this.parameters){var b=this.parameters;for(e in b)void 0!==b[e]&&(a[e]=b[e]);return a}a.data={attributes:{}};var c=this.index;null!==c&&(b=Array.prototype.slice.call(c.array),a.data.index={type:c.array.constructor.name,array:b});c=this.attributes;for(e in c){var d=c[e];b=Array.prototype.slice.call(d.array);a.data.attributes[e]={itemSize:d.itemSize,type:d.array.constructor.name,array:b,normalized:d.normalized}}var e=
this.groups;0<e.length&&(a.data.groups=JSON.parse(JSON.stringify(e)));e=this.boundingSphere;null!==e&&(a.data.boundingSphere={center:e.center.toArray(),radius:e.radius});return a},clone:function(){return(new C).copy(this)},copy:function(a){var b;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(g in c)this.addAttribute(g,c[g].clone());var d=a.morphAttributes;
for(g in d){var e=[],f=d[g];c=0;for(b=f.length;c<b;c++)e.push(f[c].clone());this.morphAttributes[g]=e}var g=a.groups;c=0;for(b=g.length;c<b;c++)d=g[c],this.addGroup(d.start,d.count,d.materialIndex);g=a.boundingBox;null!==g&&(this.boundingBox=g.clone());g=a.boundingSphere;null!==g&&(this.boundingSphere=g.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;this.userData=a.userData;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Lb.prototype=
Object.create(Q.prototype);Lb.prototype.constructor=Lb;ob.prototype=Object.create(C.prototype);ob.prototype.constructor=ob;zc.prototype=Object.create(Q.prototype);zc.prototype.constructor=zc;pb.prototype=Object.create(C.prototype);pb.prototype.constructor=pb;var Rf=0;L.prototype=Object.assign(Object.create(ja.prototype),{constructor:L,isMaterial:!0,onBeforeCompile:function(){},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");
else if("shading"===b)console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===c?!0:!1;else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]=c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a||"string"===typeof a;c&&(a={textures:{},
images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());1!==this.emissiveIntensity&&(d.emissiveIntensity=this.emissiveIntensity);this.specular&&this.specular.isColor&&
(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearCoat&&(d.clearCoat=this.clearCoat);void 0!==this.clearCoatRoughness&&(d.clearCoatRoughness=this.clearCoatRoughness);this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.aoMap&&this.aoMap.isTexture&&(d.aoMap=this.aoMap.toJSON(a).uuid,
d.aoMapIntensity=this.aoMapIntensity);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalMapType=this.normalMapType,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&
this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity,void 0!==this.combine&&(d.combine=
this.combine),void 0!==this.envMapIntensity&&(d.envMapIntensity=this.envMapIntensity));this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);!0===this.flatShading&&(d.flatShading=this.flatShading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&
(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;0!==this.rotation&&(d.rotation=this.rotation);!0===this.polygonOffset&&(d.polygonOffset=!0);0!==this.polygonOffsetFactor&&(d.polygonOffsetFactor=this.polygonOffsetFactor);0!==this.polygonOffsetUnits&&(d.polygonOffsetUnits=this.polygonOffsetUnits);1!==this.linewidth&&(d.linewidth=this.linewidth);void 0!==this.dashSize&&(d.dashSize=this.dashSize);
void 0!==this.gapSize&&(d.gapSize=this.gapSize);void 0!==this.scale&&(d.scale=this.scale);!0===this.dithering&&(d.dithering=!0);0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=
this.wireframeLinejoin);!0===this.morphTargets&&(d.morphTargets=!0);!0===this.skinning&&(d.skinning=!0);!1===this.visible&&(d.visible=!1);"{}"!==JSON.stringify(this.userData)&&(d.userData=this.userData);c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.fog=a.fog;this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.flatShading=a.flatShading;
this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;
this.polygonOffsetUnits=a.polygonOffsetUnits;this.dithering=a.dithering;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.visible=a.visible;this.userData=JSON.parse(JSON.stringify(a.userData));this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=Array(d);for(var e=0;e!==d;++e)c[e]=b[e].clone()}this.clippingPlanes=c;this.shadowSide=a.shadowSide;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});
Ba.prototype=Object.create(L.prototype);Ba.prototype.constructor=Ba;Ba.prototype.isShaderMaterial=!0;Ba.prototype.copy=function(a){L.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=Jb(a.uniforms);this.defines=Object.assign({},a.defines);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;
this.extensions=a.extensions;return this};Ba.prototype.toJSON=function(a){var b=L.prototype.toJSON.call(this,a);b.uniforms={};for(var c in this.uniforms){var d=this.uniforms[c].value;b.uniforms[c]=d&&d.isTexture?{type:"t",value:d.toJSON(a).uuid}:d&&d.isColor?{type:"c",value:d.getHex()}:d&&d.isVector2?{type:"v2",value:d.toArray()}:d&&d.isVector3?{type:"v3",value:d.toArray()}:d&&d.isVector4?{type:"v4",value:d.toArray()}:d&&d.isMatrix4?{type:"m4",value:d.toArray()}:{value:d}}0<Object.keys(this.defines).length&&
(b.defines=this.defines);b.vertexShader=this.vertexShader;b.fragmentShader=this.fragmentShader;a={};for(var e in this.extensions)!0===this.extensions[e]&&(a[e]=!0);0<Object.keys(a).length&&(b.extensions=a);return b};Object.assign(qb.prototype,{set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){void 0===b&&(console.warn("THREE.Ray: .at() target is now required"),
b=new n);return b.copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();return this},recast:function(){var a=new n;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){void 0===b&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),b=new n);b.subVectors(a,this.origin);a=b.dot(this.direction);return 0>a?b.copy(this.origin):b.copy(this.direction).multiplyScalar(a).add(this.origin)},
distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new n;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),distanceSqToSegment:function(){var a=new n,b=new n,c=new n;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);
var h=.5*d.distanceTo(e),k=-this.direction.dot(b),m=c.dot(this.direction),l=-c.dot(b),p=c.lengthSq(),r=Math.abs(1-k*k);if(0<r){d=k*l-m;e=k*m-l;var n=h*r;0<=d?e>=-n?e<=n?(h=1/r,d*=h,e*=h,k=d*(d+k*e+2*m)+e*(k*d+e+2*l)+p):(e=h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+p):(e=-h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+p):e<=-n?(d=Math.max(0,-(-k*h+m)),e=0<d?-h:Math.min(Math.max(-h,-l),h),k=-d*d+e*(e+2*l)+p):e<=n?(d=0,e=Math.min(Math.max(-h,-l),h),k=e*(e+2*l)+p):(d=Math.max(0,-(k*h+m)),e=0<d?h:Math.min(Math.max(-h,
-l),h),k=-d*d+e*(e+2*l)+p)}else e=0<k?-h:h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+p;f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),intersectSphere:function(){var a=new n;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d;b=b.radius*b.radius;if(e>b)return null;b=Math.sqrt(b-e);e=d-b;d+=b;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),intersectsSphere:function(a){return this.distanceSqToPoint(a.center)<=
a.radius*a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){a=this.distanceToPlane(a);return null===a?null:this.at(a,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c=1/this.direction.x;var d=1/this.direction.y;var e=1/this.direction.z,
f=this.origin;if(0<=c){var g=(a.min.x-f.x)*c;c*=a.max.x-f.x}else g=(a.max.x-f.x)*c,c*=a.min.x-f.x;if(0<=d){var h=(a.min.y-f.y)*d;d*=a.max.y-f.y}else h=(a.max.y-f.y)*d,d*=a.min.y-f.y;if(g>d||h>c)return null;if(h>g||g!==g)g=h;if(d<c||c!==c)c=d;0<=e?(h=(a.min.z-f.z)*e,a=(a.max.z-f.z)*e):(h=(a.max.z-f.z)*e,a=(a.min.z-f.z)*e);if(g>a||h>c)return null;if(h>g||g!==g)g=h;if(a<c||c!==c)c=a;return 0>c?null:this.at(0<=g?g:c,b)},intersectsBox:function(){var a=new n;return function(b){return null!==this.intersectBox(b,
a)}}(),intersectTriangle:function(){var a=new n,b=new n,c=new n,d=new n;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.origin.applyMatrix4(a);
this.direction.transformDirection(a);return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}});Object.assign(ha,{getNormal:function(){var a=new n;return function(b,c,d,e){void 0===e&&(console.warn("THREE.Triangle: .getNormal() target is now required"),e=new n);e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}(),getBarycoord:function(){var a=new n,b=new n,c=new n;return function(d,
e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var m=d*k-e*e;void 0===h&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),h=new n);if(0===m)return h.set(-2,-1,-1);m=1/m;k=(k*f-e*g)*m;d=(d*g-e*f)*m;return h.set(1-k-d,d,k)}}(),containsPoint:function(){var a=new n;return function(b,c,d,e){ha.getBarycoord(b,c,d,e,a);return 0<=a.x&&0<=a.y&&1>=a.x+a.y}}(),getUV:function(){var a=new n;return function(b,c,d,
e,f,g,h,k){this.getBarycoord(b,c,d,e,a);k.set(0,0);k.addScaledVector(f,a.x);k.addScaledVector(g,a.y);k.addScaledVector(h,a.z);return k}}()});Object.assign(ha.prototype,{set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},getArea:function(){var a=
new n,b=new n;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),getMidpoint:function(a){void 0===a&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),a=new n);return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(a){return ha.getNormal(this.a,this.b,this.c,a)},getPlane:function(a){void 0===a&&(console.warn("THREE.Triangle: .getPlane() target is now required"),a=new n);return a.setFromCoplanarPoints(this.a,
this.b,this.c)},getBarycoord:function(a,b){return ha.getBarycoord(a,this.a,this.b,this.c,b)},containsPoint:function(a){return ha.containsPoint(a,this.a,this.b,this.c)},getUV:function(a,b,c,d,e){return ha.getUV(a,this.a,this.b,this.c,b,c,d,e)},intersectsBox:function(a){return a.intersectsTriangle(this)},closestPointToPoint:function(){var a=new n,b=new n,c=new n,d=new n,e=new n,f=new n;return function(g,h){void 0===h&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),h=
new n);var k=this.a,m=this.b,l=this.c;a.subVectors(m,k);b.subVectors(l,k);d.subVectors(g,k);var p=a.dot(d),r=b.dot(d);if(0>=p&&0>=r)return h.copy(k);e.subVectors(g,m);var x=a.dot(e),t=b.dot(e);if(0<=x&&t<=x)return h.copy(m);var v=p*t-x*r;if(0>=v&&0<=p&&0>=x)return m=p/(p-x),h.copy(k).addScaledVector(a,m);f.subVectors(g,l);g=a.dot(f);var w=b.dot(f);if(0<=w&&g<=w)return h.copy(l);p=g*r-p*w;if(0>=p&&0<=r&&0>=w)return v=r/(r-w),h.copy(k).addScaledVector(b,v);r=x*w-g*t;if(0>=r&&0<=t-x&&0<=g-w)return c.subVectors(l,
m),v=(t-x)/(t-x+(g-w)),h.copy(m).addScaledVector(c,v);l=1/(r+p+v);m=p*l;v*=l;return h.copy(k).addScaledVector(a,m).addScaledVector(b,v)}}(),equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}});wa.prototype=Object.create(L.prototype);wa.prototype.constructor=wa;wa.prototype.isMeshBasicMaterial=!0;wa.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=
a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};na.prototype=Object.assign(Object.create(D.prototype),{constructor:na,
isMesh:!0,setDrawMode:function(a){this.drawMode=a},copy:function(a){D.prototype.copy.call(this,a);this.drawMode=a.drawMode;void 0!==a.morphTargetInfluences&&(this.morphTargetInfluences=a.morphTargetInfluences.slice());void 0!==a.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary));return this},updateMorphTargets:function(){var a=this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=
[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},raycast:function(){function a(a,b,c,d,e,f,g,h){if(null===(1===b.side?d.intersectTriangle(g,f,e,!0,h):d.intersectTriangle(e,f,g,2!==b.side,h)))return null;v.copy(h);v.applyMatrix4(a.matrixWorld);
b=c.ray.origin.distanceTo(v);return b<c.near||b>c.far?null:{distance:b,point:v.clone(),object:a}}function b(b,c,d,e,k,m,l,q,n){f.fromBufferAttribute(k,l);g.fromBufferAttribute(k,q);h.fromBufferAttribute(k,n);if(b=a(b,c,d,e,f,g,h,t))m&&(p.fromBufferAttribute(m,l),r.fromBufferAttribute(m,q),x.fromBufferAttribute(m,n),b.uv=ha.getUV(t,f,g,h,p,r,x,new z)),m=new Kb(l,q,n),ha.getNormal(f,g,h,m.normal),b.face=m;return b}var c=new O,d=new qb,e=new Ea,f=new n,g=new n,h=new n,k=new n,m=new n,l=new n,p=new z,
r=new z,x=new z,t=new n,v=new n;return function(q,n){var u=this.geometry,v=this.material,w=this.matrixWorld;if(void 0!==v&&(null===u.boundingSphere&&u.computeBoundingSphere(),e.copy(u.boundingSphere),e.applyMatrix4(w),!1!==q.ray.intersectsSphere(e)&&(c.getInverse(w),d.copy(q.ray).applyMatrix4(c),null===u.boundingBox||!1!==d.intersectsBox(u.boundingBox))))if(u.isBufferGeometry){var y=u.index,A=u.attributes.position,B=u.attributes.uv,D=u.groups;u=u.drawRange;var C;if(null!==y)if(Array.isArray(v)){var E=
0;for(C=D.length;E<C;E++){var F=D[E];var I=v[F.materialIndex];w=Math.max(F.start,u.start);var L=Math.min(F.start+F.count,u.start+u.count);for(F=w;F<L;F+=3){w=y.getX(F);var H=y.getX(F+1);var J=y.getX(F+2);if(w=b(this,I,q,d,A,B,w,H,J))w.faceIndex=Math.floor(F/3),n.push(w)}}}else for(w=Math.max(0,u.start),L=Math.min(y.count,u.start+u.count),E=w,C=L;E<C;E+=3){if(w=y.getX(E),H=y.getX(E+1),J=y.getX(E+2),w=b(this,v,q,d,A,B,w,H,J))w.faceIndex=Math.floor(E/3),n.push(w)}else if(void 0!==A)if(Array.isArray(v))for(E=
0,C=D.length;E<C;E++)for(F=D[E],I=v[F.materialIndex],w=Math.max(F.start,u.start),L=Math.min(F.start+F.count,u.start+u.count),F=w;F<L;F+=3){if(w=F,H=F+1,J=F+2,w=b(this,I,q,d,A,B,w,H,J))w.faceIndex=Math.floor(F/3),n.push(w)}else for(w=Math.max(0,u.start),L=Math.min(A.count,u.start+u.count),E=w,C=L;E<C;E+=3)if(w=E,H=E+1,J=E+2,w=b(this,v,q,d,A,B,w,H,J))w.faceIndex=Math.floor(E/3),n.push(w)}else if(u.isGeometry)for(A=Array.isArray(v),B=u.vertices,D=u.faces,w=u.faceVertexUvs[0],0<w.length&&(y=w),F=0,L=
D.length;F<L;F++)if(H=D[F],w=A?v[H.materialIndex]:v,void 0!==w){E=B[H.a];C=B[H.b];I=B[H.c];if(!0===w.morphTargets){J=u.morphTargets;var O=this.morphTargetInfluences;f.set(0,0,0);g.set(0,0,0);h.set(0,0,0);for(var Q=0,S=J.length;Q<S;Q++){var R=O[Q];if(0!==R){var T=J[Q].vertices;f.addScaledVector(k.subVectors(T[H.a],E),R);g.addScaledVector(m.subVectors(T[H.b],C),R);h.addScaledVector(l.subVectors(T[H.c],I),R)}}f.add(E);g.add(C);h.add(I);E=f;C=g;I=h}if(w=a(this,w,q,d,E,C,I,t))y&&y[F]&&(J=y[F],p.copy(J[0]),
r.copy(J[1]),x.copy(J[2]),w.uv=ha.getUV(t,E,C,I,p,r,x,new z)),w.face=H,w.faceIndex=F,n.push(w)}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});Xa.prototype=Object.create(X.prototype);Xa.prototype.constructor=Xa;Xa.prototype.isCubeTexture=!0;Object.defineProperty(Xa.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}});Nb.prototype=Object.create(X.prototype);Nb.prototype.constructor=Nb;Nb.prototype.isDataTexture3D=!0;var Re=
new X,mg=new Nb,Se=new Xa,Le=[],Ne=[],Qe=new Float32Array(16),Pe=new Float32Array(9),Oe=new Float32Array(4);We.prototype.updateCache=function(a){var b=this.cache;a instanceof Float32Array&&b.length!==a.length&&(this.cache=new Float32Array(a.length));sa(b,a)};Xe.prototype.setValue=function(a,b,c){for(var d=this.seq,e=0,f=d.length;e!==f;++e){var g=d[e];g.setValue(a,b[g.id],c)}};var Zd=/([\w\d_]+)(\])?(\[|\.)?/g;cb.prototype.setValue=function(a,b,c){b=this.map[b];void 0!==b&&b.setValue(a,c,this.renderer)};
cb.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};cb.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d)}};cb.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var Hg=0,Pg=0;db.prototype=Object.create(L.prototype);db.prototype.constructor=db;db.prototype.isMeshDepthMaterial=!0;db.prototype.copy=function(a){L.prototype.copy.call(this,a);this.depthPacking=
a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};eb.prototype=Object.create(L.prototype);eb.prototype.constructor=eb;eb.prototype.isMeshDistanceMaterial=!0;eb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.referencePosition.copy(a.referencePosition);
this.nearDistance=a.nearDistance;this.farDistance=a.farDistance;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;return this};Pb.prototype=Object.assign(Object.create(D.prototype),{constructor:Pb,isGroup:!0});Ra.prototype=Object.assign(Object.create(D.prototype),{constructor:Ra,isCamera:!0,copy:function(a,b){D.prototype.copy.call(this,
a,b);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);this.projectionMatrixInverse.copy(a.projectionMatrixInverse);return this},getWorldDirection:function(a){void 0===a&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),a=new n);this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(-b[8],-b[9],-b[10]).normalize()},updateMatrixWorld:function(a){D.prototype.updateMatrixWorld.call(this,a);this.matrixWorldInverse.getInverse(this.matrixWorld)},
clone:function(){return(new this.constructor).copy(this)}});V.prototype=Object.assign(Object.create(Ra.prototype),{constructor:V,isPerspectiveCamera:!0,copy:function(a,b){Ra.prototype.copy.call(this,a,b);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*R.RAD2DEG*
Math.atan(a);this.updateProjectionMatrix()},getFocalLength:function(){var a=Math.tan(.5*R.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*R.RAD2DEG*Math.atan(Math.tan(.5*R.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,
offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*R.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==this.view&&this.view.enabled){var g=f.fullWidth,
h=f.fullHeight;e+=f.offsetX*d/g;b-=f.offsetY*c/h;d*=f.width/g;c*=f.height/h}f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(a){a=D.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},
this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});Dc.prototype=Object.assign(Object.create(V.prototype),{constructor:Dc,isArrayCamera:!0});var hf=new n,jf=new n;Qb.prototype.isFogExp2=!0;Qb.prototype.clone=function(){return new Qb(this.color,this.density)};Qb.prototype.toJSON=function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}};Rb.prototype.isFog=!0;Rb.prototype.clone=function(){return new Rb(this.color,this.near,this.far)};
Rb.prototype.toJSON=function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};xd.prototype=Object.assign(Object.create(D.prototype),{constructor:xd,copy:function(a,b){D.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this},toJSON:function(a){var b=
D.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b}});Object.defineProperty(rb.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(rb.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.stride:0;
this.array=a;return this},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=
a;return this}});Object.defineProperties(Ec.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(Ec.prototype,{isInterleavedBufferAttribute:!0,setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+
this.offset+3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+
0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}});gb.prototype=Object.create(L.prototype);gb.prototype.constructor=gb;gb.prototype.isSpriteMaterial=!0;gb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;this.sizeAttenuation=a.sizeAttenuation;return this};
var Sb;Fc.prototype=Object.assign(Object.create(D.prototype),{constructor:Fc,isSprite:!0,raycast:function(){function a(a,b,c,d,h,k){e.subVectors(a,c).addScalar(.5).multiply(d);void 0!==h?(f.x=k*e.x-h*e.y,f.y=h*e.x+k*e.y):f.copy(e);a.copy(b);a.x+=f.x;a.y+=f.y;a.applyMatrix4(g)}var b=new n,c=new n,d=new n,e=new z,f=new z,g=new O,h=new n,k=new n,m=new n,l=new z,p=new z,r=new z;return function(e,f){c.setFromMatrixScale(this.matrixWorld);g.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld);
d.setFromMatrixPosition(this.modelViewMatrix);var q=this.material.rotation;if(0!==q){var n=Math.cos(q);var t=Math.sin(q)}q=this.center;a(h.set(-.5,-.5,0),d,q,c,t,n);a(k.set(.5,-.5,0),d,q,c,t,n);a(m.set(.5,.5,0),d,q,c,t,n);l.set(0,0);p.set(1,0);r.set(1,1);var u=e.ray.intersectTriangle(h,k,m,!1,b);if(null===u&&(a(k.set(-.5,.5,0),d,q,c,t,n),p.set(0,1),u=e.ray.intersectTriangle(h,m,k,!1,b),null===u))return;t=e.ray.origin.distanceTo(b);t<e.near||t>e.far||f.push({distance:t,point:b.clone(),uv:ha.getUV(b,
h,k,m,l,p,r,new z),face:null,object:this})}}(),clone:function(){return(new this.constructor(this.material)).copy(this)},copy:function(a){D.prototype.copy.call(this,a);void 0!==a.center&&this.center.copy(a.center);return this}});Gc.prototype=Object.assign(Object.create(D.prototype),{constructor:Gc,copy:function(a){D.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this},addLevel:function(a,b){void 0===b&&(b=0);b=
Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)},getObjectForDistance:function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object},raycast:function(){var a=new n;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}(),update:function(){var a=new n,b=new n;return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);
b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,f=d.length;e<f;e++)if(c>=d[e].distance)d[e-1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<f;e++)d[e].object.visible=!1}}}(),toJSON:function(a){a=D.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});Hc.prototype=Object.assign(Object.create(na.prototype),{constructor:Hc,
isSkinnedMesh:!0,bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){for(var a=new ca,b=this.geometry.attributes.skinWeight,c=0,d=b.count;c<d;c++){a.x=b.getX(c);a.y=b.getY(c);a.z=b.getZ(c);a.w=b.getW(c);var e=1/a.manhattanLength();Infinity!==e?a.multiplyScalar(e):a.set(1,0,0,0);b.setXYZW(c,a.x,
a.y,a.z,a.w)}},updateMatrixWorld:function(a){na.prototype.updateMatrixWorld.call(this,a);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});Object.assign(yd.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=
this.bones.length;a<b;a++){var c=new O;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}},pose:function(){var a,b;var c=0;for(b=this.bones.length;c<b;c++)(a=this.bones[c])&&a.matrixWorld.getInverse(this.boneInverses[c]);c=0;for(b=this.bones.length;c<b;c++)if(a=this.bones[c])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){var a=
new O,b=new O;return function(){for(var c=this.bones,d=this.boneInverses,e=this.boneMatrices,f=this.boneTexture,g=0,h=c.length;g<h;g++)a.multiplyMatrices(c[g]?c[g].matrixWorld:b,d[g]),a.toArray(e,16*g);void 0!==f&&(f.needsUpdate=!0)}}(),clone:function(){return new yd(this.bones,this.boneInverses)},getBoneByName:function(a){for(var b=0,c=this.bones.length;b<c;b++){var d=this.bones[b];if(d.name===a)return d}}});ce.prototype=Object.assign(Object.create(D.prototype),{constructor:ce,isBone:!0});T.prototype=
Object.create(L.prototype);T.prototype.constructor=T;T.prototype.isLineBasicMaterial=!0;T.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this};ta.prototype=Object.assign(Object.create(D.prototype),{constructor:ta,isLine:!0,computeLineDistances:function(){var a=new n,b=new n;return function(){var c=this.geometry;if(c.isBufferGeometry)if(null===c.index){for(var d=c.attributes.position,
e=[0],f=1,g=d.count;f<g;f++)a.fromBufferAttribute(d,f-1),b.fromBufferAttribute(d,f),e[f]=e[f-1],e[f]+=a.distanceTo(b);c.addAttribute("lineDistance",new A(e,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(c.isGeometry)for(d=c.vertices,e=c.lineDistances,e[0]=0,f=1,g=d.length;f<g;f++)e[f]=e[f-1],e[f]+=d[f-1].distanceTo(d[f]);return this}}(),raycast:function(){var a=new O,b=new qb,c=new Ea;return function(d,e){var f=d.linePrecision,
g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);c.radius+=f;if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);f/=(this.scale.x+this.scale.y+this.scale.z)/3;f*=f;var k=new n,m=new n;h=new n;var l=new n,p=this&&this.isLineSegments?2:1;if(g.isBufferGeometry){var r=g.index,x=g.attributes.position.array;if(null!==r){r=r.array;g=0;for(var t=r.length-1;g<t;g+=p){var v=r[g+1];k.fromArray(x,3*r[g]);
m.fromArray(x,3*v);v=b.distanceSqToSegment(k,m,l,h);v>f||(l.applyMatrix4(this.matrixWorld),v=d.ray.origin.distanceTo(l),v<d.near||v>d.far||e.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}else for(g=0,t=x.length/3-1;g<t;g+=p)k.fromArray(x,3*g),m.fromArray(x,3*g+3),v=b.distanceSqToSegment(k,m,l,h),v>f||(l.applyMatrix4(this.matrixWorld),v=d.ray.origin.distanceTo(l),v<d.near||v>d.far||e.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),
index:g,face:null,faceIndex:null,object:this}))}else if(g.isGeometry)for(k=g.vertices,m=k.length,g=0;g<m-1;g+=p)v=b.distanceSqToSegment(k[g],k[g+1],l,h),v>f||(l.applyMatrix4(this.matrixWorld),v=d.ray.origin.distanceTo(l),v<d.near||v>d.far||e.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}}(),copy:function(a){D.prototype.copy.call(this,a);this.geometry.copy(a.geometry);this.material.copy(a.material);return this},clone:function(){return(new this.constructor).copy(this)}});
S.prototype=Object.assign(Object.create(ta.prototype),{constructor:S,isLineSegments:!0,computeLineDistances:function(){var a=new n,b=new n;return function(){var c=this.geometry;if(c.isBufferGeometry)if(null===c.index){for(var d=c.attributes.position,e=[],f=0,g=d.count;f<g;f+=2)a.fromBufferAttribute(d,f),b.fromBufferAttribute(d,f+1),e[f]=0===f?0:e[f-1],e[f+1]=e[f]+a.distanceTo(b);c.addAttribute("lineDistance",new A(e,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
else if(c.isGeometry)for(d=c.vertices,e=c.lineDistances,f=0,g=d.length;f<g;f+=2)a.copy(d[f]),b.copy(d[f+1]),e[f]=0===f?0:e[f-1],e[f+1]=e[f]+a.distanceTo(b);return this}}()});zd.prototype=Object.assign(Object.create(ta.prototype),{constructor:zd,isLineLoop:!0});Fa.prototype=Object.create(L.prototype);Fa.prototype.constructor=Fa;Fa.prototype.isPointsMaterial=!0;Fa.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;
this.morphTargets=a.morphTargets;return this};Tb.prototype=Object.assign(Object.create(D.prototype),{constructor:Tb,isPoints:!0,raycast:function(){var a=new O,b=new qb,c=new Ea;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);f<l&&(b.closestPointToPoint(a,p),p.applyMatrix4(k),a=d.ray.origin.distanceTo(p),a<d.near||a>d.far||e.push({distance:a,distanceToRay:Math.sqrt(f),point:p.clone(),index:c,face:null,object:g}))}var g=this,h=this.geometry,k=this.matrixWorld,m=d.params.Points.threshold;
null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);c.applyMatrix4(k);c.radius+=m;if(!1!==d.ray.intersectsSphere(c)){a.getInverse(k);b.copy(d.ray).applyMatrix4(a);m/=(this.scale.x+this.scale.y+this.scale.z)/3;var l=m*m;m=new n;var p=new n;if(h.isBufferGeometry){var r=h.index;h=h.attributes.position.array;if(null!==r){var x=r.array;r=0;for(var t=x.length;r<t;r++){var v=x[r];m.fromArray(h,3*v);f(m,v)}}else for(r=0,x=h.length/3;r<x;r++)m.fromArray(h,3*r),f(m,r)}else for(m=h.vertices,
r=0,x=m.length;r<x;r++)f(m[r],r)}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});de.prototype=Object.assign(Object.create(X.prototype),{constructor:de,isVideoTexture:!0,update:function(){var a=this.image;a.readyState>=a.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});Ub.prototype=Object.create(X.prototype);Ub.prototype.constructor=Ub;Ub.prototype.isCompressedTexture=!0;Ic.prototype=Object.create(X.prototype);Ic.prototype.constructor=Ic;Ic.prototype.isCanvasTexture=
!0;Jc.prototype=Object.create(X.prototype);Jc.prototype.constructor=Jc;Jc.prototype.isDepthTexture=!0;Vb.prototype=Object.create(C.prototype);Vb.prototype.constructor=Vb;Kc.prototype=Object.create(Q.prototype);Kc.prototype.constructor=Kc;Wb.prototype=Object.create(C.prototype);Wb.prototype.constructor=Wb;Lc.prototype=Object.create(Q.prototype);Lc.prototype.constructor=Lc;ya.prototype=Object.create(C.prototype);ya.prototype.constructor=ya;Mc.prototype=Object.create(Q.prototype);Mc.prototype.constructor=
Mc;Xb.prototype=Object.create(ya.prototype);Xb.prototype.constructor=Xb;Nc.prototype=Object.create(Q.prototype);Nc.prototype.constructor=Nc;sb.prototype=Object.create(ya.prototype);sb.prototype.constructor=sb;Oc.prototype=Object.create(Q.prototype);Oc.prototype.constructor=Oc;Yb.prototype=Object.create(ya.prototype);Yb.prototype.constructor=Yb;Pc.prototype=Object.create(Q.prototype);Pc.prototype.constructor=Pc;Zb.prototype=Object.create(ya.prototype);Zb.prototype.constructor=Zb;Qc.prototype=Object.create(Q.prototype);
Qc.prototype.constructor=Qc;$b.prototype=Object.create(C.prototype);$b.prototype.constructor=$b;Rc.prototype=Object.create(Q.prototype);Rc.prototype.constructor=Rc;ac.prototype=Object.create(C.prototype);ac.prototype.constructor=ac;Sc.prototype=Object.create(Q.prototype);Sc.prototype.constructor=Sc;bc.prototype=Object.create(C.prototype);bc.prototype.constructor=bc;var ch={triangulate:function(a,b,c){c=c||2;var d=b&&b.length,e=d?b[0]*c:a.length,f=lf(a,0,e,c,!0),g=[];if(!f)return g;var h;if(d){var k=
c;d=[];var m;var l=0;for(m=b.length;l<m;l++){var p=b[l]*k;var r=l<m-1?b[l+1]*k:a.length;p=lf(a,p,r,k,!1);p===p.next&&(p.steiner=!0);d.push(Xg(p))}d.sort(Vg);for(l=0;l<d.length;l++){b=d[l];k=f;if(k=Wg(b,k))b=of(k,b),Uc(b,b.next);f=Uc(f,f.next)}}if(a.length>80*c){var n=h=a[0];var t=d=a[1];for(k=c;k<e;k+=c)l=a[k],b=a[k+1],l<n&&(n=l),b<t&&(t=b),l>h&&(h=l),b>d&&(d=b);h=Math.max(h-n,d-t);h=0!==h?1/h:0}Vc(f,g,c,n,t,h);return g}},Ya={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-
a[e].x*a[d].y;return.5*c},isClockWise:function(a){return 0>Ya.area(a)},triangulateShape:function(a,b){var c=[],d=[],e=[];pf(a);qf(c,a);var f=a.length;b.forEach(pf);for(a=0;a<b.length;a++)d.push(f),f+=b[a].length,qf(c,b[a]);b=ch.triangulate(c,d);for(a=0;a<b.length;a+=3)e.push(b.slice(a,a+3));return e}};ub.prototype=Object.create(Q.prototype);ub.prototype.constructor=ub;ub.prototype.toJSON=function(){var a=Q.prototype.toJSON.call(this);return rf(this.parameters.shapes,this.parameters.options,a)};Sa.prototype=
Object.create(C.prototype);Sa.prototype.constructor=Sa;Sa.prototype.toJSON=function(){var a=C.prototype.toJSON.call(this);return rf(this.parameters.shapes,this.parameters.options,a)};var Yg={generateTopUV:function(a,b,c,d,e){a=b[3*d];d=b[3*d+1];var f=b[3*e];e=b[3*e+1];return[new z(b[3*c],b[3*c+1]),new z(a,d),new z(f,e)]},generateSideWallUV:function(a,b,c,d,e,f){a=b[3*c];var g=b[3*c+1];c=b[3*c+2];var h=b[3*d],k=b[3*d+1];d=b[3*d+2];var m=b[3*e],l=b[3*e+1];e=b[3*e+2];var p=b[3*f],r=b[3*f+1];b=b[3*f+
2];return.01>Math.abs(g-k)?[new z(a,1-c),new z(h,1-d),new z(m,1-e),new z(p,1-b)]:[new z(g,1-c),new z(k,1-d),new z(l,1-e),new z(r,1-b)]}};Xc.prototype=Object.create(Q.prototype);Xc.prototype.constructor=Xc;cc.prototype=Object.create(Sa.prototype);cc.prototype.constructor=cc;Yc.prototype=Object.create(Q.prototype);Yc.prototype.constructor=Yc;vb.prototype=Object.create(C.prototype);vb.prototype.constructor=vb;Zc.prototype=Object.create(Q.prototype);Zc.prototype.constructor=Zc;dc.prototype=Object.create(C.prototype);
dc.prototype.constructor=dc;$c.prototype=Object.create(Q.prototype);$c.prototype.constructor=$c;ec.prototype=Object.create(C.prototype);ec.prototype.constructor=ec;wb.prototype=Object.create(Q.prototype);wb.prototype.constructor=wb;wb.prototype.toJSON=function(){var a=Q.prototype.toJSON.call(this);return sf(this.parameters.shapes,a)};xb.prototype=Object.create(C.prototype);xb.prototype.constructor=xb;xb.prototype.toJSON=function(){var a=C.prototype.toJSON.call(this);return sf(this.parameters.shapes,
a)};fc.prototype=Object.create(C.prototype);fc.prototype.constructor=fc;yb.prototype=Object.create(Q.prototype);yb.prototype.constructor=yb;Za.prototype=Object.create(C.prototype);Za.prototype.constructor=Za;ad.prototype=Object.create(yb.prototype);ad.prototype.constructor=ad;bd.prototype=Object.create(Za.prototype);bd.prototype.constructor=bd;cd.prototype=Object.create(Q.prototype);cd.prototype.constructor=cd;gc.prototype=Object.create(C.prototype);gc.prototype.constructor=gc;var ia=Object.freeze({WireframeGeometry:Vb,
ParametricGeometry:Kc,ParametricBufferGeometry:Wb,TetrahedronGeometry:Mc,TetrahedronBufferGeometry:Xb,OctahedronGeometry:Nc,OctahedronBufferGeometry:sb,IcosahedronGeometry:Oc,IcosahedronBufferGeometry:Yb,DodecahedronGeometry:Pc,DodecahedronBufferGeometry:Zb,PolyhedronGeometry:Lc,PolyhedronBufferGeometry:ya,TubeGeometry:Qc,TubeBufferGeometry:$b,TorusKnotGeometry:Rc,TorusKnotBufferGeometry:ac,TorusGeometry:Sc,TorusBufferGeometry:bc,TextGeometry:Xc,TextBufferGeometry:cc,SphereGeometry:Yc,SphereBufferGeometry:vb,
RingGeometry:Zc,RingBufferGeometry:dc,PlaneGeometry:zc,PlaneBufferGeometry:pb,LatheGeometry:$c,LatheBufferGeometry:ec,ShapeGeometry:wb,ShapeBufferGeometry:xb,ExtrudeGeometry:ub,ExtrudeBufferGeometry:Sa,EdgesGeometry:fc,ConeGeometry:ad,ConeBufferGeometry:bd,CylinderGeometry:yb,CylinderBufferGeometry:Za,CircleGeometry:cd,CircleBufferGeometry:gc,BoxGeometry:Lb,BoxBufferGeometry:ob});zb.prototype=Object.create(L.prototype);zb.prototype.constructor=zb;zb.prototype.isShadowMaterial=!0;zb.prototype.copy=
function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);return this};hc.prototype=Object.create(Ba.prototype);hc.prototype.constructor=hc;hc.prototype.isRawShaderMaterial=!0;Ta.prototype=Object.create(L.prototype);Ta.prototype.constructor=Ta;Ta.prototype.isMeshStandardMaterial=!0;Ta.prototype.copy=function(a){L.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=
a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=
a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};Ab.prototype=Object.create(Ta.prototype);Ab.prototype.constructor=Ab;Ab.prototype.isMeshPhysicalMaterial=
!0;Ab.prototype.copy=function(a){Ta.prototype.copy.call(this,a);this.defines={PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearCoat=a.clearCoat;this.clearCoatRoughness=a.clearCoatRoughness;return this};Ga.prototype=Object.create(L.prototype);Ga.prototype.constructor=Ga;Ga.prototype.isMeshPhongMaterial=!0;Ga.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=
a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;
this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};Bb.prototype=Object.create(Ga.prototype);Bb.prototype.constructor=Bb;Bb.prototype.isMeshToonMaterial=!0;Bb.prototype.copy=function(a){Ga.prototype.copy.call(this,
a);this.gradientMap=a.gradientMap;return this};Cb.prototype=Object.create(L.prototype);Cb.prototype.constructor=Cb;Cb.prototype.isMeshNormalMaterial=!0;Cb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;
this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};Db.prototype=Object.create(L.prototype);Db.prototype.constructor=Db;Db.prototype.isMeshLambertMaterial=!0;Db.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);
this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};
Eb.prototype=Object.create(L.prototype);Eb.prototype.constructor=Eb;Eb.prototype.isMeshMatcapMaterial=!0;Eb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.defines={MATCAP:""};this.color.copy(a.color);this.matcap=a.matcap;this.map=a.map;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=
a.displacementBias;this.alphaMap=a.alphaMap;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};Fb.prototype=Object.create(T.prototype);Fb.prototype.constructor=Fb;Fb.prototype.isLineDashedMaterial=!0;Fb.prototype.copy=function(a){T.prototype.copy.call(this,a);this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this};var dh=Object.freeze({ShadowMaterial:zb,SpriteMaterial:gb,RawShaderMaterial:hc,ShaderMaterial:Ba,PointsMaterial:Fa,
MeshPhysicalMaterial:Ab,MeshStandardMaterial:Ta,MeshPhongMaterial:Ga,MeshToonMaterial:Bb,MeshNormalMaterial:Cb,MeshLambertMaterial:Db,MeshDepthMaterial:db,MeshDistanceMaterial:eb,MeshBasicMaterial:wa,MeshMatcapMaterial:Eb,LineDashedMaterial:Fb,LineBasicMaterial:T,Material:L}),ra={arraySlice:function(a,b,c){return ra.isTypedArray(a)?new a.constructor(a.subarray(b,void 0!==c?c:a.length)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?
new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,k=0;k!==b;++k)e[g++]=a[h+k];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];
if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}}};Object.assign(va.prototype,{evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;
this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=
c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b},interpolate_:function(){throw Error("call to abstract method");},intervalChanged_:function(){}});Object.assign(va.prototype,{beforeStart_:va.prototype.copySampleValue_,afterEnd_:va.prototype.copySampleValue_});
Bd.prototype=Object.assign(Object.create(va.prototype),{constructor:Bd,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;
this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,k=this._offsetPrev,m=this._offsetNext,l=this._weightPrev,p=this._weightNext,r=(c-b)/(d-b);c=r*r;d=c*r;b=-l*d+2*l*c-l*r;l=(1+l)*d+(-1.5-2*l)*c+(-.5+l)*r+1;r=(-1-p)*d+(1.5+p)*c+.5*r;p=p*d-p*c;for(c=0;c!==g;++c)e[c]=b*f[k+c]+l*f[h+c]+r*f[a+c]+p*f[m+c];return e}});dd.prototype=Object.assign(Object.create(va.prototype),
{constructor:dd,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});Cd.prototype=Object.assign(Object.create(va.prototype),{constructor:Cd,interpolate_:function(a){return this.copySampleValue_(a-1)}});Object.assign(qa,{toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{b={name:a.name,times:ra.convertArray(a.times,Array),values:ra.convertArray(a.values,
Array)};var c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b}});Object.assign(qa.prototype,{constructor:qa,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new Cd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new dd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new Bd(this.times,
this.values,this.getValueSize(),a)},setInterpolation:function(a){switch(a){case 2300:var b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(b);console.warn("THREE.KeyframeTrack:",
b);return this}this.createInterpolant=b;return this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==
d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),a=this.getValueSize(),this.times=ra.arraySlice(c,e,f),this.values=ra.arraySlice(this.values,e*a,f*a);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);var c=this.times;b=this.values;var d=c.length;0===d&&(console.error("THREE.KeyframeTrack: Track is empty.",
this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&ra.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,d);a=!1;break}return a},optimize:function(){for(var a=this.times,b=this.values,
c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,f=a.length-1,g=1;g<f;++g){var h=!1,k=a[g];if(k!==a[g+1]&&(1!==g||k!==k[0]))if(d)h=!0;else{var m=g*c,l=m-c,p=m+c;for(k=0;k!==c;++k){var r=b[m+k];if(r!==b[l+k]||r!==b[p+k]){h=!0;break}}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,m=e*c,k=0;k!==c;++k)b[m+k]=b[h+k];++e}}if(0<f){a[e]=a[f];h=f*c;m=e*c;for(k=0;k!==c;++k)b[m+k]=b[h+k];++e}e!==a.length&&(this.times=ra.arraySlice(a,0,e),this.values=ra.arraySlice(b,0,e*c));return this}});Dd.prototype=Object.assign(Object.create(qa.prototype),
{constructor:Dd,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Ed.prototype=Object.assign(Object.create(qa.prototype),{constructor:Ed,ValueTypeName:"color"});ic.prototype=Object.assign(Object.create(qa.prototype),{constructor:ic,ValueTypeName:"number"});Fd.prototype=Object.assign(Object.create(va.prototype),{constructor:Fd,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=
this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)ka.slerpFlat(e,0,f,a-g,f,a,b);return e}});ed.prototype=Object.assign(Object.create(qa.prototype),{constructor:ed,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new Fd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});Gd.prototype=Object.assign(Object.create(qa.prototype),{constructor:Gd,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,
InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});jc.prototype=Object.assign(Object.create(qa.prototype),{constructor:jc,ValueTypeName:"vector"});Object.assign(Ha,{parse:function(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push($g(c[e]).scale(d));return new Ha(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b,uuid:a.uuid};for(var d=0,e=c.length;d!==e;++d)b.push(qa.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,
b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],k=[];h.push((g+e-1)%e,g,(g+1)%e);k.push(0,1,0);var m=ra.getKeyframeOrder(h);h=ra.sortedArray(h,1,m);k=ra.sortedArray(k,1,m);d||0!==h[0]||(h.push(e),k.push(k[0]));f.push((new ic(".morphTargetInfluences["+b[g].name+"]",h,k)).scale(1/c))}return new Ha(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(a=0;a<c.length;a++)if(c[a].name===b)return c[a];return null},CreateClipsFromMorphTargetSequences:function(a,
b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],k=h.name.match(e);if(k&&1<k.length){var m=k[1];(k=d[m])||(d[m]=k=[]);k.push(h)}}a=[];for(m in d)a.push(Ha.CreateFromMorphTargetSequence(m,d[m],b,c));return a},parseAnimation:function(a,b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];ra.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||
-1,g=a.fps||30;a=a.hierarchy||[];for(var h=0;h<a.length;h++){var k=a[h].keys;if(k&&0!==k.length)if(k[0].morphTargets){f={};for(var m=0;m<k.length;m++)if(k[m].morphTargets)for(var l=0;l<k[m].morphTargets.length;l++)f[k[m].morphTargets[l]]=-1;for(var p in f){var r=[],n=[];for(l=0;l!==k[m].morphTargets.length;++l){var t=k[m];r.push(t.time);n.push(t.morphTarget===p?1:0)}d.push(new ic(".morphTargetInfluence["+p+"]",r,n))}f=f.length*(g||1)}else m=".bones["+b[h].name+"]",c(jc,m+".position",k,"pos",d),c(ed,
m+".quaternion",k,"rot",d),c(jc,m+".scale",k,"scl",d)}return 0===d.length?null:new Ha(e,f,d)}});Object.assign(Ha.prototype,{resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b){var d=this.tracks[b];a=Math.max(a,d.times[d.times.length-1])}this.duration=a;return this},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},validate:function(){for(var a=!0,b=0;b<this.tracks.length;b++)a=a&&this.tracks[b].validate();return a},optimize:function(){for(var a=
0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}});var Hb={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},za=new ge,Oa={};Object.assign(Ia.prototype,{load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=Hb.get(a);if(void 0!==f)return e.manager.itemStart(a),
setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;if(void 0!==Oa[a])Oa[a].push({onLoad:b,onProgress:c,onError:d});else{var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){c=g[1];var h=!!g[2];g=g[3];g=decodeURIComponent(g);h&&(g=atob(g));try{var k=(this.responseType||"").toLowerCase();switch(k){case "arraybuffer":case "blob":var m=new Uint8Array(g.length);for(h=0;h<g.length;h++)m[h]=g.charCodeAt(h);var l="blob"===k?new Blob([m.buffer],{type:c}):m.buffer;break;case "document":l=(new DOMParser).parseFromString(g,
c);break;case "json":l=JSON.parse(g);break;default:l=g}setTimeout(function(){b&&b(l);e.manager.itemEnd(a)},0)}catch(r){setTimeout(function(){d&&d(r);e.manager.itemError(a);e.manager.itemEnd(a)},0)}}else{Oa[a]=[];Oa[a].push({onLoad:b,onProgress:c,onError:d});var p=new XMLHttpRequest;p.open("GET",a,!0);p.addEventListener("load",function(b){var c=this.response;Hb.add(a,c);var d=Oa[a];delete Oa[a];if(200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");
for(var f=0,g=d.length;f<g;f++){var h=d[f];if(h.onLoad)h.onLoad(c)}}else{f=0;for(g=d.length;f<g;f++)if(h=d[f],h.onError)h.onError(b);e.manager.itemError(a)}e.manager.itemEnd(a)},!1);p.addEventListener("progress",function(b){for(var c=Oa[a],d=0,e=c.length;d<e;d++){var f=c[d];if(f.onProgress)f.onProgress(b)}},!1);p.addEventListener("error",function(b){var c=Oa[a];delete Oa[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b)}e.manager.itemError(a);e.manager.itemEnd(a)},!1);p.addEventListener("abort",
function(b){var c=Oa[a];delete Oa[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b)}e.manager.itemError(a);e.manager.itemEnd(a)},!1);void 0!==this.responseType&&(p.responseType=this.responseType);void 0!==this.withCredentials&&(p.withCredentials=this.withCredentials);p.overrideMimeType&&p.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(h in this.requestHeader)p.setRequestHeader(h,this.requestHeader[h]);p.send(null)}e.manager.itemStart(a);return p}},setPath:function(a){this.path=
a;return this},setResponseType:function(a){this.responseType=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setMimeType:function(a){this.mimeType=a;return this},setRequestHeader:function(a){this.requestHeader=a;return this}});Object.assign(tf.prototype,{load:function(a,b,c,d){var e=this,f=new Ia(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a,b){for(var c=[],d=0;d<a.length;d++){var e=Ha.parse(a[d]);c.push(e)}b(c)},
setPath:function(a){this.path=a;return this}});Object.assign(uf.prototype,{load:function(a,b,c,d){function e(e){k.load(a[e],function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};m+=1;6===m&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new Ub;h.image=g;var k=new Ia(this.manager);k.setPath(this.path);k.setResponseType("arraybuffer");if(Array.isArray(a))for(var m=0,l=0,p=a.length;l<p;++l)e(l);
else k.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h)},c,d);return h},setPath:function(a){this.path=a;return this}});Object.assign(he.prototype,
{load:function(a,b,c,d){var e=this,f=new kb,g=new Ia(this.manager);g.setResponseType("arraybuffer");g.setPath(this.path);g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:
1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f},setPath:function(a){this.path=a;return this}});Object.assign(fd.prototype,{crossOrigin:"anonymous",load:function(a,b,c,d){function e(){k.removeEventListener("load",e,!1);k.removeEventListener("error",f,!1);Hb.add(a,this);b&&b(this);g.manager.itemEnd(a)}function f(b){k.removeEventListener("load",e,!1);k.removeEventListener("error",
f,!1);d&&d(b);g.manager.itemError(a);g.manager.itemEnd(a)}void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var g=this,h=Hb.get(a);if(void 0!==h)return g.manager.itemStart(a),setTimeout(function(){b&&b(h);g.manager.itemEnd(a)},0),h;var k=document.createElementNS("http://www.w3.org/1999/xhtml","img");k.addEventListener("load",e,!1);k.addEventListener("error",f,!1);"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(k.crossOrigin=this.crossOrigin);g.manager.itemStart(a);
k.src=a;return k},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(ie.prototype,{crossOrigin:"anonymous",load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new Xa,g=new fd(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=
a;return this}});Object.assign(Hd.prototype,{crossOrigin:"anonymous",load:function(a,b,c,d){var e=new X,f=new fd(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){e.image=c;c=0<a.search(/\.jpe?g($|\?)/i)||0===a.search(/^data:image\/jpeg/);e.format=c?1022:1023;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(J.prototype,{getPoint:function(){console.warn("THREE.Curve: .getPoint() not implemented.");
return null},getPointAt:function(a,b){a=this.getUtoTmapping(a);return this.getPoint(a,b)},getPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=this.getLengths();return a[a.length-1]},getLengths:function(a){void 0===a&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;
this.needsUpdate=!1;var b=[],c=this.getPoint(0),d,e=0;b.push(0);for(d=1;d<=a;d++){var f=this.getPoint(d/a);e+=f.distanceTo(c);b.push(e);c=f}return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d=c.length;b=b?b:a*c[d-1];for(var e=0,f=d-1,g;e<=f;)if(a=Math.floor(e+(f-e)/2),g=c[a]-b,0>g)e=a+1;else if(0<g)f=a-1;else{f=a;break}a=f;if(c[a]===b)return a/(d-1);e=c[a];return(a+(b-e)/(c[a+1]-e))/(d-1)},getTangent:function(a){var b=
a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a)},computeFrenetFrames:function(a,b){var c=new n,d=[],e=[],f=[],g=new n,h=new O,k;for(k=0;k<=a;k++){var m=k/a;d[k]=this.getTangentAt(m);d[k].normalize()}e[0]=new n;f[0]=new n;k=Number.MAX_VALUE;m=Math.abs(d[0].x);var l=Math.abs(d[0].y),p=Math.abs(d[0].z);m<=k&&(k=m,c.set(1,0,0));l<=k&&(k=l,c.set(0,1,0));p<=k&&c.set(0,
0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(k=1;k<=a;k++)e[k]=e[k-1].clone(),f[k]=f[k-1].clone(),g.crossVectors(d[k-1],d[k]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(R.clamp(d[k-1].dot(d[k]),-1,1)),e[k].applyMatrix4(h.makeRotationAxis(g,c))),f[k].crossVectors(d[k],e[k]);if(!0===b)for(c=Math.acos(R.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),k=1;k<=a;k++)e[k].applyMatrix4(h.makeRotationAxis(d[k],
c*k)),f[k].crossVectors(d[k],e[k]);return{tangents:d,normals:e,binormals:f}},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this},toJSON:function(){var a={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};a.arcLengthDivisions=this.arcLengthDivisions;a.type=this.type;return a},fromJSON:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this}});Da.prototype=Object.create(J.prototype);Da.prototype.constructor=
Da;Da.prototype.isEllipseCurve=!0;Da.prototype.getPoint=function(a,b){b=b||new z;for(var c=2*Math.PI,d=this.aEndAngle-this.aStartAngle,e=Math.abs(d)<Number.EPSILON;0>d;)d+=c;for(;d>c;)d-=c;d<Number.EPSILON&&(d=e?0:c);!0!==this.aClockwise||e||(d=d===c?-c:d-c);c=this.aStartAngle+a*d;a=this.aX+this.xRadius*Math.cos(c);var f=this.aY+this.yRadius*Math.sin(c);0!==this.aRotation&&(c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a-this.aX,f-=this.aY,a=e*c-f*d+this.aX,f=e*d+f*c+this.aY);return b.set(a,
f)};Da.prototype.copy=function(a){J.prototype.copy.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this};Da.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);a.aX=this.aX;a.aY=this.aY;a.xRadius=this.xRadius;a.yRadius=this.yRadius;a.aStartAngle=this.aStartAngle;a.aEndAngle=this.aEndAngle;a.aClockwise=this.aClockwise;a.aRotation=
this.aRotation;return a};Da.prototype.fromJSON=function(a){J.prototype.fromJSON.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this};kc.prototype=Object.create(Da.prototype);kc.prototype.constructor=kc;kc.prototype.isArcCurve=!0;var Ud=new n,Fe=new je,Ge=new je,He=new je;ua.prototype=Object.create(J.prototype);ua.prototype.constructor=ua;ua.prototype.isCatmullRomCurve3=
!0;ua.prototype.getPoint=function(a,b){b=b||new n;var c=this.points,d=c.length;a*=d-(this.closed?0:1);var e=Math.floor(a);a-=e;this.closed?e+=0<e?0:(Math.floor(Math.abs(e)/d)+1)*d:0===a&&e===d-1&&(e=d-2,a=1);if(this.closed||0<e)var f=c[(e-1)%d];else Ud.subVectors(c[0],c[1]).add(c[0]),f=Ud;var g=c[e%d];var h=c[(e+1)%d];this.closed||e+2<d?c=c[(e+2)%d]:(Ud.subVectors(c[d-1],c[d-2]).add(c[d-1]),c=Ud);if("centripetal"===this.curveType||"chordal"===this.curveType){var k="chordal"===this.curveType?.5:.25;
d=Math.pow(f.distanceToSquared(g),k);e=Math.pow(g.distanceToSquared(h),k);k=Math.pow(h.distanceToSquared(c),k);1E-4>e&&(e=1);1E-4>d&&(d=e);1E-4>k&&(k=e);Fe.initNonuniformCatmullRom(f.x,g.x,h.x,c.x,d,e,k);Ge.initNonuniformCatmullRom(f.y,g.y,h.y,c.y,d,e,k);He.initNonuniformCatmullRom(f.z,g.z,h.z,c.z,d,e,k)}else"catmullrom"===this.curveType&&(Fe.initCatmullRom(f.x,g.x,h.x,c.x,this.tension),Ge.initCatmullRom(f.y,g.y,h.y,c.y,this.tension),He.initCatmullRom(f.z,g.z,h.z,c.z,this.tension));b.set(Fe.calc(a),
Ge.calc(a),He.calc(a));return b};ua.prototype.copy=function(a){J.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this};ua.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());a.closed=this.closed;a.curveType=this.curveType;a.tension=this.tension;return a};
ua.prototype.fromJSON=function(a){J.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new n).fromArray(d))}this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this};Ja.prototype=Object.create(J.prototype);Ja.prototype.constructor=Ja;Ja.prototype.isCubicBezierCurve=!0;Ja.prototype.getPoint=function(a,b){b=b||new z;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(hd(a,c.x,d.x,e.x,f.x),hd(a,c.y,d.y,e.y,
f.y));return b};Ja.prototype.copy=function(a){J.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};Ja.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};Ja.prototype.fromJSON=function(a){J.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};
Ua.prototype=Object.create(J.prototype);Ua.prototype.constructor=Ua;Ua.prototype.isCubicBezierCurve3=!0;Ua.prototype.getPoint=function(a,b){b=b||new n;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(hd(a,c.x,d.x,e.x,f.x),hd(a,c.y,d.y,e.y,f.y),hd(a,c.z,d.z,e.z,f.z));return b};Ua.prototype.copy=function(a){J.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};Ua.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);a.v0=this.v0.toArray();
a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};Ua.prototype.fromJSON=function(a){J.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};Aa.prototype=Object.create(J.prototype);Aa.prototype.constructor=Aa;Aa.prototype.isLineCurve=!0;Aa.prototype.getPoint=function(a,b){b=b||new z;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b};Aa.prototype.getPointAt=
function(a,b){return this.getPoint(a,b)};Aa.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()};Aa.prototype.copy=function(a){J.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Aa.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Aa.prototype.fromJSON=function(a){J.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Ka.prototype=
Object.create(J.prototype);Ka.prototype.constructor=Ka;Ka.prototype.isLineCurve3=!0;Ka.prototype.getPoint=function(a,b){b=b||new n;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b};Ka.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};Ka.prototype.copy=function(a){J.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Ka.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();
return a};Ka.prototype.fromJSON=function(a){J.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};La.prototype=Object.create(J.prototype);La.prototype.constructor=La;La.prototype.isQuadraticBezierCurve=!0;La.prototype.getPoint=function(a,b){b=b||new z;var c=this.v0,d=this.v1,e=this.v2;b.set(gd(a,c.x,d.x,e.x),gd(a,c.y,d.y,e.y));return b};La.prototype.copy=function(a){J.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};
La.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};La.prototype.fromJSON=function(a){J.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Va.prototype=Object.create(J.prototype);Va.prototype.constructor=Va;Va.prototype.isQuadraticBezierCurve3=!0;Va.prototype.getPoint=function(a,b){b=b||new n;var c=this.v0,d=this.v1,e=this.v2;b.set(gd(a,c.x,
d.x,e.x),gd(a,c.y,d.y,e.y),gd(a,c.z,d.z,e.z));return b};Va.prototype.copy=function(a){J.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Va.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Va.prototype.fromJSON=function(a){J.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Ma.prototype=Object.create(J.prototype);
Ma.prototype.constructor=Ma;Ma.prototype.isSplineCurve=!0;Ma.prototype.getPoint=function(a,b){b=b||new z;var c=this.points,d=(c.length-1)*a;a=Math.floor(d);d-=a;var e=c[0===a?a:a-1],f=c[a],g=c[a>c.length-2?c.length-1:a+1];c=c[a>c.length-3?c.length-1:a+2];b.set(vf(d,e.x,f.x,g.x,c.x),vf(d,e.y,f.y,g.y,c.y));return b};Ma.prototype.copy=function(a){J.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());return this};Ma.prototype.toJSON=function(){var a=
J.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());return a};Ma.prototype.fromJSON=function(a){J.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new z).fromArray(d))}return this};var If=Object.freeze({ArcCurve:kc,CatmullRomCurve3:ua,CubicBezierCurve:Ja,CubicBezierCurve3:Ua,EllipseCurve:Da,LineCurve:Aa,LineCurve3:Ka,QuadraticBezierCurve:La,QuadraticBezierCurve3:Va,
SplineCurve:Ma});$a.prototype=Object.assign(Object.create(J.prototype),{constructor:$a,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new Aa(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();
return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){void 0===a&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=
a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++){var f=e[d];f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&(f.isLineCurve||f.isLineCurve3)?1:f&&f.isSplineCurve?a*f.points.length:a);for(var g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h)}}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},copy:function(a){J.prototype.copy.call(this,a);this.curves=[];for(var b=0,c=a.curves.length;b<c;b++)this.curves.push(a.curves[b].clone());this.autoClose=a.autoClose;return this},
toJSON:function(){var a=J.prototype.toJSON.call(this);a.autoClose=this.autoClose;a.curves=[];for(var b=0,c=this.curves.length;b<c;b++)a.curves.push(this.curves[b].toJSON());return a},fromJSON:function(a){J.prototype.fromJSON.call(this,a);this.autoClose=a.autoClose;this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){var d=a.curves[b];this.curves.push((new If[d.type]).fromJSON(d))}return this}});Na.prototype=Object.assign(Object.create($a.prototype),{constructor:Na,setFromPoints:function(a){this.moveTo(a[0].x,
a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},moveTo:function(a,b){this.currentPoint.set(a,b)},lineTo:function(a,b){var c=new Aa(this.currentPoint.clone(),new z(a,b));this.curves.push(c);this.currentPoint.set(a,b)},quadraticCurveTo:function(a,b,c,d){a=new La(this.currentPoint.clone(),new z(a,b),new z(c,d));this.curves.push(a);this.currentPoint.set(c,d)},bezierCurveTo:function(a,b,c,d,e,f){a=new Ja(this.currentPoint.clone(),new z(a,b),new z(c,d),new z(e,f));this.curves.push(a);
this.currentPoint.set(e,f)},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a);b=new Ma(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1])},arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f)},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h)},absellipse:function(a,b,c,d,e,f,g,h){a=new Da(a,b,c,d,e,f,g,h);0<this.curves.length&&
(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a)},copy:function(a){$a.prototype.copy.call(this,a);this.currentPoint.copy(a.currentPoint);return this},toJSON:function(){var a=$a.prototype.toJSON.call(this);a.currentPoint=this.currentPoint.toArray();return a},fromJSON:function(a){$a.prototype.fromJSON.call(this,a);this.currentPoint.fromArray(a.currentPoint);return this}});hb.prototype=Object.assign(Object.create(Na.prototype),
{constructor:hb,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},copy:function(a){Na.prototype.copy.call(this,a);this.holes=[];for(var b=0,c=a.holes.length;b<c;b++)this.holes.push(a.holes[b].clone());return this},toJSON:function(){var a=Na.prototype.toJSON.call(this);a.uuid=this.uuid;a.holes=[];for(var b=0,c=this.holes.length;b<c;b++)a.holes.push(this.holes[b].toJSON());
return a},fromJSON:function(a){Na.prototype.fromJSON.call(this,a);this.uuid=a.uuid;this.holes=[];for(var b=0,c=a.holes.length;b<c;b++){var d=a.holes[b];this.holes.push((new Na).fromJSON(d))}return this}});ba.prototype=Object.assign(Object.create(D.prototype),{constructor:ba,isLight:!0,copy:function(a){D.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=
this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});Id.prototype=Object.assign(Object.create(ba.prototype),{constructor:Id,isHemisphereLight:!0,copy:function(a){ba.prototype.copy.call(this,
a);this.groundColor.copy(a.groundColor);return this}});Object.assign(Gb.prototype,{copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;
return a}});Jd.prototype=Object.assign(Object.create(Gb.prototype),{constructor:Jd,isSpotLightShadow:!0,update:function(a){var b=this.camera,c=2*R.RAD2DEG*a.angle,d=this.mapSize.width/this.mapSize.height;a=a.distance||b.far;if(c!==b.fov||d!==b.aspect||a!==b.far)b.fov=c,b.aspect=d,b.far=a,b.updateProjectionMatrix()}});Kd.prototype=Object.assign(Object.create(ba.prototype),{constructor:Kd,isSpotLight:!0,copy:function(a){ba.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=
a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});Ld.prototype=Object.assign(Object.create(ba.prototype),{constructor:Ld,isPointLight:!0,copy:function(a){ba.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this}});id.prototype=Object.assign(Object.create(Ra.prototype),{constructor:id,isOrthographicCamera:!0,copy:function(a,b){Ra.prototype.copy.call(this,a,b);this.left=a.left;this.right=
a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==
this.view&&(this.view.enabled=!1);this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a;c+=a;a=d+b;b=d-b;if(null!==this.view&&this.view.enabled){c=this.zoom/(this.view.width/this.view.fullWidth);b=this.zoom/(this.view.height/this.view.fullHeight);var f=(this.right-this.left)/this.view.width;d=(this.top-this.bottom)/this.view.height;e+=this.view.offsetX/
c*f;c=e+this.view.width/c*f;a-=this.view.offsetY/b*d;b=a-this.view.height/b*d}this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(a){a=D.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});
Md.prototype=Object.assign(Object.create(Gb.prototype),{constructor:Md});Nd.prototype=Object.assign(Object.create(ba.prototype),{constructor:Nd,isDirectionalLight:!0,copy:function(a){ba.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});Od.prototype=Object.assign(Object.create(ba.prototype),{constructor:Od,isAmbientLight:!0});Pd.prototype=Object.assign(Object.create(ba.prototype),{constructor:Pd,isRectAreaLight:!0,copy:function(a){ba.prototype.copy.call(this,
a);this.width=a.width;this.height=a.height;return this},toJSON:function(a){a=ba.prototype.toJSON.call(this,a);a.object.width=this.width;a.object.height=this.height;return a}});Object.assign(Qd.prototype,{load:function(a,b,c,d){var e=this,f=new Ia(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new dh[a.type];void 0!==a.uuid&&
(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);void 0!==a.clearCoat&&(d.clearCoat=a.clearCoat);void 0!==a.clearCoatRoughness&&(d.clearCoatRoughness=a.clearCoatRoughness);void 0!==a.vertexColors&&(d.vertexColors=
a.vertexColors);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.flatShading&&(d.flatShading=a.flatShading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.combine&&(d.combine=a.combine);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);
void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.rotation&&(d.rotation=a.rotation);1!==a.linewidth&&(d.linewidth=a.linewidth);void 0!==a.dashSize&&(d.dashSize=a.dashSize);void 0!==a.gapSize&&(d.gapSize=a.gapSize);void 0!==a.scale&&(d.scale=a.scale);void 0!==a.polygonOffset&&
(d.polygonOffset=a.polygonOffset);void 0!==a.polygonOffsetFactor&&(d.polygonOffsetFactor=a.polygonOffsetFactor);void 0!==a.polygonOffsetUnits&&(d.polygonOffsetUnits=a.polygonOffsetUnits);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.dithering&&(d.dithering=a.dithering);void 0!==a.visible&&(d.visible=a.visible);void 0!==a.userData&&(d.userData=a.userData);if(void 0!==a.uniforms)for(var e in a.uniforms){var f=a.uniforms[e];d.uniforms[e]=
{};switch(f.type){case "t":d.uniforms[e].value=b(f.value);break;case "c":d.uniforms[e].value=(new I).setHex(f.value);break;case "v2":d.uniforms[e].value=(new z).fromArray(f.value);break;case "v3":d.uniforms[e].value=(new n).fromArray(f.value);break;case "v4":d.uniforms[e].value=(new ca).fromArray(f.value);break;case "m4":d.uniforms[e].value=(new O).fromArray(f.value);break;default:d.uniforms[e].value=f.value}}void 0!==a.defines&&(d.defines=a.defines);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);
void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);if(void 0!==a.extensions)for(var g in a.extensions)d.extensions[g]=a.extensions[g];void 0!==a.shading&&(d.flatShading=1===a.shading);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&
(d.normalMap=b(a.normalMap));void 0!==a.normalMapType&&(d.normalMapType=a.normalMapType);void 0!==a.normalScale&&(e=a.normalScale,!1===Array.isArray(e)&&(e=[e,e]),d.normalScale=(new z).fromArray(e));void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=
b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.envMapIntensity&&(d.envMapIntensity=a.envMapIntensity);void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&
(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));return d},setPath:function(a){this.path=a;return this},setTextures:function(a){this.textures=a;return this}});var Ie={decodeText:function(a){if("undefined"!==typeof TextDecoder)return(new TextDecoder).decode(a);for(var b="",c=0,d=a.length;c<d;c++)b+=String.fromCharCode(a[c]);return decodeURIComponent(escape(b))},extractUrlBase:function(a){var b=a.lastIndexOf("/");
return-1===b?"./":a.substr(0,b+1)}};Object.assign(ke.prototype,{load:function(a,b,c,d){var e=this,f=new Ia(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=new C,c=a.data.index;void 0!==c&&(c=new Jf[c.type](c.array),b.setIndex(new E(c,1)));var d=a.data.attributes;for(f in d){var e=d[f];c=new Jf[e.type](e.array);b.addAttribute(f,new E(c,e.itemSize,e.normalized))}var f=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==f)for(c=0,d=f.length;c!==
d;++c)e=f[c],b.addGroup(e.start,e.count,e.materialIndex);f=a.data.boundingSphere;void 0!==f&&(c=new n,void 0!==f.center&&c.fromArray(f.center),b.boundingSphere=new Ea(c,f.radius));a.name&&(b.name=a.name);a.userData&&(b.userData=a.userData);return b},setPath:function(a){this.path=a;return this}});var Jf={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,
Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};Object.assign(le.prototype,{crossOrigin:"anonymous",load:function(a,b,c,d){var e=this,f=void 0===this.path?Ie.extractUrlBase(a):this.path;this.resourcePath=this.resourcePath||f;f=new Ia(e.manager);f.setPath(this.path);f.load(a,function(c){var f=null;try{f=JSON.parse(c)}catch(k){void 0!==d&&d(k);console.error("THREE:ObjectLoader: Can't parse "+a+".",k.message);return}c=f.metadata;void 0===c||void 0===c.type||"geometry"===
c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a):e.parse(f,b)},c,d)},setPath:function(a){this.path=a;return this},setResourcePath:function(a){this.resourcePath=a;return this},setCrossOrigin:function(a){this.crossOrigin=a;return this},parse:function(a,b){var c=this.parseShape(a.shapes);c=this.parseGeometries(a.geometries,c);var d=this.parseImages(a.images,function(){void 0!==b&&b(e)});d=this.parseTextures(a.textures,d);d=this.parseMaterials(a.materials,d);var e=this.parseObject(a.object,
c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseShape:function(a){var b={};if(void 0!==a)for(var c=0,d=a.length;c<d;c++){var e=(new hb).fromJSON(a[c]);b[e.uuid]=e}return b},parseGeometries:function(a,b){var c={};if(void 0!==a)for(var d=new ke,e=0,f=a.length;e<f;e++){var g=a[e];switch(g.type){case "PlaneGeometry":case "PlaneBufferGeometry":var h=new ia[g.type](g.width,g.height,g.widthSegments,g.heightSegments);
break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":h=new ia[g.type](g.width,g.height,g.depth,g.widthSegments,g.heightSegments,g.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":h=new ia[g.type](g.radius,g.segments,g.thetaStart,g.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":h=new ia[g.type](g.radiusTop,g.radiusBottom,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case "ConeGeometry":case "ConeBufferGeometry":h=
new ia[g.type](g.radius,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case "SphereGeometry":case "SphereBufferGeometry":h=new ia[g.type](g.radius,g.widthSegments,g.heightSegments,g.phiStart,g.phiLength,g.thetaStart,g.thetaLength);break;case "DodecahedronGeometry":case "DodecahedronBufferGeometry":case "IcosahedronGeometry":case "IcosahedronBufferGeometry":case "OctahedronGeometry":case "OctahedronBufferGeometry":case "TetrahedronGeometry":case "TetrahedronBufferGeometry":h=
new ia[g.type](g.radius,g.detail);break;case "RingGeometry":case "RingBufferGeometry":h=new ia[g.type](g.innerRadius,g.outerRadius,g.thetaSegments,g.phiSegments,g.thetaStart,g.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":h=new ia[g.type](g.radius,g.tube,g.radialSegments,g.tubularSegments,g.arc);break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":h=new ia[g.type](g.radius,g.tube,g.tubularSegments,g.radialSegments,g.p,g.q);break;case "LatheGeometry":case "LatheBufferGeometry":h=
new ia[g.type](g.points,g.segments,g.phiStart,g.phiLength);break;case "PolyhedronGeometry":case "PolyhedronBufferGeometry":h=new ia[g.type](g.vertices,g.indices,g.radius,g.details);break;case "ShapeGeometry":case "ShapeBufferGeometry":h=[];for(var k=0,m=g.shapes.length;k<m;k++){var l=b[g.shapes[k]];h.push(l)}h=new ia[g.type](h,g.curveSegments);break;case "ExtrudeGeometry":case "ExtrudeBufferGeometry":h=[];k=0;for(m=g.shapes.length;k<m;k++)l=b[g.shapes[k]],h.push(l);k=g.options.extrudePath;void 0!==
k&&(g.options.extrudePath=(new If[k.type]).fromJSON(k));h=new ia[g.type](h,g.options);break;case "BufferGeometry":h=d.parse(g);break;case "Geometry":"THREE"in window&&"LegacyJSONLoader"in THREE?h=(new THREE.LegacyJSONLoader).parse(g,this.resourcePath).geometry:console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+g.type+'"');continue}h.uuid=g.uuid;void 0!==
g.name&&(h.name=g.name);!0===h.isBufferGeometry&&void 0!==g.userData&&(h.userData=g.userData);c[g.uuid]=h}return c},parseMaterials:function(a,b){var c={},d={};if(void 0!==a){var e=new Qd;e.setTextures(b);b=0;for(var f=a.length;b<f;b++){var g=a[b];if("MultiMaterial"===g.type){for(var h=[],k=0;k<g.materials.length;k++){var m=g.materials[k];void 0===c[m.uuid]&&(c[m.uuid]=e.parse(m));h.push(c[m.uuid])}d[g.uuid]=h}else d[g.uuid]=e.parse(g),c[g.uuid]=d[g.uuid]}}return d},parseAnimations:function(a){for(var b=
[],c=0;c<a.length;c++){var d=a[c],e=Ha.parse(d);void 0!==d.uuid&&(e.uuid=d.uuid);b.push(e)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return f.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemError(a);d.manager.itemEnd(a)})}var d=this,e={};if(void 0!==a&&0<a.length){b=new ge(b);var f=new fd(b);f.setCrossOrigin(this.crossOrigin);b=0;for(var g=a.length;b<g;b++){var h=a[b],k=h.url;if(Array.isArray(k)){e[h.uuid]=[];for(var m=0,l=k.length;m<l;m++){var p=
k[m];p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(p)?p:d.resourcePath+p;e[h.uuid].push(c(p))}}else p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)?h.url:d.resourcePath+h.url,e[h.uuid]=c(p)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a]}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',
g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=Array.isArray(b[g.image])?new Xa(b[g.image]):new X(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,eh));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.center&&h.center.fromArray(g.center);void 0!==g.rotation&&(h.rotation=g.rotation);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],Kf),
h.wrapT=c(g.wrap[1],Kf));void 0!==g.format&&(h.format=g.format);void 0!==g.type&&(h.type=g.type);void 0!==g.encoding&&(h.encoding=g.encoding);void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,Lf));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,Lf));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);void 0!==g.premultiplyAlpha&&(h.premultiplyAlpha=g.premultiplyAlpha);void 0!==g.unpackAlignment&&(h.unpackAlignment=g.unpackAlignment);d[g.uuid]=h}return d},parseObject:function(a,
b,c){function d(a){void 0===b[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return b[a]}function e(a){if(void 0!==a){if(Array.isArray(a)){for(var b=[],d=0,e=a.length;d<e;d++){var f=a[d];void 0===c[f]&&console.warn("THREE.ObjectLoader: Undefined material",f);b.push(c[f])}return b}void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined material",a);return c[a]}}switch(a.type){case "Scene":var f=new xd;void 0!==a.background&&Number.isInteger(a.background)&&(f.background=new I(a.background));
void 0!==a.fog&&("Fog"===a.fog.type?f.fog=new Rb(a.fog.color,a.fog.near,a.fog.far):"FogExp2"===a.fog.type&&(f.fog=new Qb(a.fog.color,a.fog.density)));break;case "PerspectiveCamera":f=new V(a.fov,a.aspect,a.near,a.far);void 0!==a.focus&&(f.focus=a.focus);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.filmGauge&&(f.filmGauge=a.filmGauge);void 0!==a.filmOffset&&(f.filmOffset=a.filmOffset);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case "OrthographicCamera":f=new id(a.left,a.right,a.top,a.bottom,
a.near,a.far);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case "AmbientLight":f=new Od(a.color,a.intensity);break;case "DirectionalLight":f=new Nd(a.color,a.intensity);break;case "PointLight":f=new Ld(a.color,a.intensity,a.distance,a.decay);break;case "RectAreaLight":f=new Pd(a.color,a.intensity,a.width,a.height);break;case "SpotLight":f=new Kd(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);break;case "HemisphereLight":f=new Id(a.color,a.groundColor,
a.intensity);break;case "SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case "Mesh":f=d(a.geometry);var g=e(a.material);f=f.bones&&0<f.bones.length?new Hc(f,g):new na(f,g);break;case "LOD":f=new Gc;break;case "Line":f=new ta(d(a.geometry),e(a.material),a.mode);break;case "LineLoop":f=new zd(d(a.geometry),e(a.material));break;case "LineSegments":f=new S(d(a.geometry),e(a.material));break;case "PointCloud":case "Points":f=new Tb(d(a.geometry),e(a.material));
break;case "Sprite":f=new Fc(e(a.material));break;case "Group":f=new Pb;break;default:f=new D}f.uuid=a.uuid;void 0!==a.name&&(f.name=a.name);void 0!==a.matrix?(f.matrix.fromArray(a.matrix),void 0!==a.matrixAutoUpdate&&(f.matrixAutoUpdate=a.matrixAutoUpdate),f.matrixAutoUpdate&&f.matrix.decompose(f.position,f.quaternion,f.scale)):(void 0!==a.position&&f.position.fromArray(a.position),void 0!==a.rotation&&f.rotation.fromArray(a.rotation),void 0!==a.quaternion&&f.quaternion.fromArray(a.quaternion),void 0!==
a.scale&&f.scale.fromArray(a.scale));void 0!==a.castShadow&&(f.castShadow=a.castShadow);void 0!==a.receiveShadow&&(f.receiveShadow=a.receiveShadow);a.shadow&&(void 0!==a.shadow.bias&&(f.shadow.bias=a.shadow.bias),void 0!==a.shadow.radius&&(f.shadow.radius=a.shadow.radius),void 0!==a.shadow.mapSize&&f.shadow.mapSize.fromArray(a.shadow.mapSize),void 0!==a.shadow.camera&&(f.shadow.camera=this.parseObject(a.shadow.camera)));void 0!==a.visible&&(f.visible=a.visible);void 0!==a.frustumCulled&&(f.frustumCulled=
a.frustumCulled);void 0!==a.renderOrder&&(f.renderOrder=a.renderOrder);void 0!==a.userData&&(f.userData=a.userData);void 0!==a.layers&&(f.layers.mask=a.layers);if(void 0!==a.children){g=a.children;for(var h=0;h<g.length;h++)f.add(this.parseObject(g[h],b,c))}if("LOD"===a.type)for(a=a.levels,g=0;g<a.length;g++){h=a[g];var k=f.getObjectByProperty("uuid",h.object);void 0!==k&&f.addLevel(k,h.distance)}return f}});var eh={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,
EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},Kf={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},Lf={NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008};me.prototype={constructor:me,setOptions:function(a){this.options=a;return this},load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&
(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=Hb.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;fetch(a).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,e.options)}).then(function(c){Hb.add(a,c);b&&b(c);e.manager.itemEnd(a)}).catch(function(b){d&&d(b);e.manager.itemError(a);e.manager.itemEnd(a)})},setCrossOrigin:function(){return this},setPath:function(a){this.path=a;return this}};Object.assign(ne.prototype,
{moveTo:function(a,b){this.currentPath=new Na;this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b)},lineTo:function(a,b){this.currentPath.lineTo(a,b)},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f)},splineThru:function(a){this.currentPath.splineThru(a)},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new hb;f.curves=e.curves;b.push(f)}return b}
function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(Math.abs(l)>Number.EPSILON){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=Ya.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);b=[];if(1===f.length){var g=f[0];var h=new hb;h.curves=g.curves;
b.push(h);return b}var k=!e(f[0].getPoints());k=a?!k:k;h=[];var m=[],l=[],p=0;m[p]=void 0;l[p]=[];for(var n=0,x=f.length;n<x;n++){g=f[n];var t=g.getPoints();var v=e(t);(v=a?!v:v)?(!k&&m[p]&&p++,m[p]={s:new hb,p:t},m[p].s.curves=g.curves,k&&p++,l[p]=[]):l[p].push({h:g,p:t[0]})}if(!m[0])return c(f);if(1<m.length){n=!1;a=[];e=0;for(f=m.length;e<f;e++)h[e]=[];e=0;for(f=m.length;e<f;e++)for(g=l[e],v=0;v<g.length;v++){k=g[v];p=!0;for(t=0;t<m.length;t++)d(k.p,m[t].p)&&(e!==t&&a.push({froms:e,tos:t,hole:v}),
p?(p=!1,h[t].push(k)):n=!0);p&&h[e].push(k)}0<a.length&&(n||(l=h))}n=0;for(e=m.length;n<e;n++)for(h=m[n].s,b.push(h),a=l[n],f=0,g=a.length;f<g;f++)h.holes.push(a[f].h);return b}});Object.assign(oe.prototype,{isFont:!0,generateShapes:function(a,b){void 0===b&&(b=100);var c=[],d=b;b=this.data;var e=Array.from?Array.from(a):String(a).split("");d/=b.resolution;var f=(b.boundingBox.yMax-b.boundingBox.yMin+b.underlineThickness)*d;a=[];for(var g=0,h=0,k=0;k<e.length;k++){var l=e[k];if("\n"===l)g=0,h-=f;
else{var q=d;var p=g,n=h;if(l=b.glyphs[l]||b.glyphs["?"]){var x=new ne;if(l.o)for(var t=l._cachedOutline||(l._cachedOutline=l.o.split(" ")),v=0,w=t.length;v<w;)switch(t[v++]){case "m":var y=t[v++]*q+p;var u=t[v++]*q+n;x.moveTo(y,u);break;case "l":y=t[v++]*q+p;u=t[v++]*q+n;x.lineTo(y,u);break;case "q":var z=t[v++]*q+p;var A=t[v++]*q+n;var C=t[v++]*q+p;var D=t[v++]*q+n;x.quadraticCurveTo(C,D,z,A);break;case "b":z=t[v++]*q+p,A=t[v++]*q+n,C=t[v++]*q+p,D=t[v++]*q+n,y=t[v++]*q+p,u=t[v++]*q+n,x.bezierCurveTo(C,
D,y,u,z,A)}q={offsetX:l.ha*q,path:x}}else q=void 0;g+=q.offsetX;a.push(q.path)}}b=0;for(e=a.length;b<e;b++)Array.prototype.push.apply(c,a[b].toShapes());return c}});Object.assign(wf.prototype,{load:function(a,b,c,d){var e=this,f=new Ia(this.manager);f.setPath(this.path);f.load(a,function(a){try{var c=JSON.parse(a)}catch(k){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new oe(a)},
setPath:function(a){this.path=a;return this}});jd.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e}return null}};Object.assign(jd.prototype,{crossOrigin:"anonymous",onLoadStart:function(){},onLoadProgress:function(){},onLoadComplete:function(){},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a=
{NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5},b=new I,c=new Hd,d=new Qd;return function(e,f,g){function h(a,b,d,e,h){a=f+a;var l=jd.Handlers.get(a);null!==l?a=l.load(a):(c.setCrossOrigin(g),a=c.load(a));void 0!==b&&(a.repeat.fromArray(b),1!==b[0]&&(a.wrapS=1E3),1!==b[1]&&(a.wrapT=1E3));void 0!==d&&a.offset.fromArray(d);void 0!==e&&("repeat"===e[0]&&(a.wrapS=1E3),"mirror"===e[0]&&(a.wrapS=1002),"repeat"===e[1]&&(a.wrapT=1E3),"mirror"===
e[1]&&(a.wrapT=1002));void 0!==h&&(a.anisotropy=h);b=R.generateUUID();k[b]=a;return b}var k={},l={uuid:R.generateUUID(),type:"MeshLambertMaterial"},q;for(q in e){var p=e[q];switch(q){case "DbgColor":case "DbgIndex":case "opticalDensity":case "illumination":break;case "DbgName":l.name=p;break;case "blending":l.blending=a[p];break;case "colorAmbient":case "mapAmbient":console.warn("THREE.Loader.createMaterial:",q,"is no longer supported.");break;case "colorDiffuse":l.color=b.fromArray(p).getHex();break;
case "colorSpecular":l.specular=b.fromArray(p).getHex();break;case "colorEmissive":l.emissive=b.fromArray(p).getHex();break;case "specularCoef":l.shininess=p;break;case "shading":"basic"===p.toLowerCase()&&(l.type="MeshBasicMaterial");"phong"===p.toLowerCase()&&(l.type="MeshPhongMaterial");"standard"===p.toLowerCase()&&(l.type="MeshStandardMaterial");break;case "mapDiffuse":l.map=h(p,e.mapDiffuseRepeat,e.mapDiffuseOffset,e.mapDiffuseWrap,e.mapDiffuseAnisotropy);break;case "mapDiffuseRepeat":case "mapDiffuseOffset":case "mapDiffuseWrap":case "mapDiffuseAnisotropy":break;
case "mapEmissive":l.emissiveMap=h(p,e.mapEmissiveRepeat,e.mapEmissiveOffset,e.mapEmissiveWrap,e.mapEmissiveAnisotropy);break;case "mapEmissiveRepeat":case "mapEmissiveOffset":case "mapEmissiveWrap":case "mapEmissiveAnisotropy":break;case "mapLight":l.lightMap=h(p,e.mapLightRepeat,e.mapLightOffset,e.mapLightWrap,e.mapLightAnisotropy);break;case "mapLightRepeat":case "mapLightOffset":case "mapLightWrap":case "mapLightAnisotropy":break;case "mapAO":l.aoMap=h(p,e.mapAORepeat,e.mapAOOffset,e.mapAOWrap,
e.mapAOAnisotropy);break;case "mapAORepeat":case "mapAOOffset":case "mapAOWrap":case "mapAOAnisotropy":break;case "mapBump":l.bumpMap=h(p,e.mapBumpRepeat,e.mapBumpOffset,e.mapBumpWrap,e.mapBumpAnisotropy);break;case "mapBumpScale":l.bumpScale=p;break;case "mapBumpRepeat":case "mapBumpOffset":case "mapBumpWrap":case "mapBumpAnisotropy":break;case "mapNormal":l.normalMap=h(p,e.mapNormalRepeat,e.mapNormalOffset,e.mapNormalWrap,e.mapNormalAnisotropy);break;case "mapNormalFactor":l.normalScale=p;break;
case "mapNormalRepeat":case "mapNormalOffset":case "mapNormalWrap":case "mapNormalAnisotropy":break;case "mapSpecular":l.specularMap=h(p,e.mapSpecularRepeat,e.mapSpecularOffset,e.mapSpecularWrap,e.mapSpecularAnisotropy);break;case "mapSpecularRepeat":case "mapSpecularOffset":case "mapSpecularWrap":case "mapSpecularAnisotropy":break;case "mapMetalness":l.metalnessMap=h(p,e.mapMetalnessRepeat,e.mapMetalnessOffset,e.mapMetalnessWrap,e.mapMetalnessAnisotropy);break;case "mapMetalnessRepeat":case "mapMetalnessOffset":case "mapMetalnessWrap":case "mapMetalnessAnisotropy":break;
case "mapRoughness":l.roughnessMap=h(p,e.mapRoughnessRepeat,e.mapRoughnessOffset,e.mapRoughnessWrap,e.mapRoughnessAnisotropy);break;case "mapRoughnessRepeat":case "mapRoughnessOffset":case "mapRoughnessWrap":case "mapRoughnessAnisotropy":break;case "mapAlpha":l.alphaMap=h(p,e.mapAlphaRepeat,e.mapAlphaOffset,e.mapAlphaWrap,e.mapAlphaAnisotropy);break;case "mapAlphaRepeat":case "mapAlphaOffset":case "mapAlphaWrap":case "mapAlphaAnisotropy":break;case "flipSided":l.side=1;break;case "doubleSided":l.side=
2;break;case "transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");l.opacity=p;break;case "depthTest":case "depthWrite":case "colorWrite":case "opacity":case "reflectivity":case "transparent":case "visible":case "wireframe":l[q]=p;break;case "vertexColors":!0===p&&(l.vertexColors=2);"face"===p&&(l.vertexColors=1);break;default:console.error("THREE.Loader.createMaterial: Unsupported",q,p)}}"MeshBasicMaterial"===l.type&&delete l.emissive;"MeshPhongMaterial"!==
l.type&&delete l.specular;1>l.opacity&&(l.transparent=!0);d.setTextures(k);return d.parse(l)}}()});var Vd,se={getContext:function(){void 0===Vd&&(Vd=new (window.AudioContext||window.webkitAudioContext));return Vd},setContext:function(a){Vd=a}};Object.assign(pe.prototype,{load:function(a,b,c,d){var e=new Ia(this.manager);e.setResponseType("arraybuffer");e.setPath(this.path);e.load(a,function(a){a=a.slice(0);se.getContext().decodeAudioData(a,function(a){b(a)})},c,d)},setPath:function(a){this.path=a;
return this}});Object.assign(xf.prototype,{update:function(){var a,b,c,d,e,f,g,h,k=new O,l=new O;return function(m){if(a!==this||b!==m.focus||c!==m.fov||d!==m.aspect*this.aspect||e!==m.near||f!==m.far||g!==m.zoom||h!==this.eyeSep){a=this;b=m.focus;c=m.fov;d=m.aspect*this.aspect;e=m.near;f=m.far;g=m.zoom;var p=m.projectionMatrix.clone();h=this.eyeSep/2;var n=h*e/b,q=e*Math.tan(R.DEG2RAD*c*.5)/g;l.elements[12]=-h;k.elements[12]=h;var t=-q*d+n;var v=q*d+n;p.elements[0]=2*e/(v-t);p.elements[8]=(v+t)/
(v-t);this.cameraL.projectionMatrix.copy(p);t=-q*d-n;v=q*d-n;p.elements[0]=2*e/(v-t);p.elements[8]=(v+t)/(v-t);this.cameraR.projectionMatrix.copy(p)}this.cameraL.matrixWorld.copy(m.matrixWorld).multiply(l);this.cameraR.matrixWorld.copy(m.matrixWorld).multiply(k)}}()});kd.prototype=Object.create(D.prototype);kd.prototype.constructor=kd;Object.assign(qe.prototype,{start:function(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();this.elapsedTime=0;this.running=!0},
stop:function(){this.getElapsedTime();this.autoStart=this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var b=("undefined"===typeof performance?Date:performance).now();a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}});re.prototype=Object.assign(Object.create(D.prototype),{constructor:re,getInput:function(){return this.gain},removeFilter:function(){null!==
this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null);return this},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination);return this},getMasterVolume:function(){return this.gain.gain.value},
setMasterVolume:function(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this},updateMatrixWorld:function(){var a=new n,b=new ka,c=new n,d=new n,e=new qe;return function(f){D.prototype.updateMatrixWorld.call(this,f);f=this.context.listener;var g=this.up;this.timeDelta=e.getDelta();this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);if(f.positionX){var h=this.context.currentTime+this.timeDelta;f.positionX.linearRampToValueAtTime(a.x,h);f.positionY.linearRampToValueAtTime(a.y,
h);f.positionZ.linearRampToValueAtTime(a.z,h);f.forwardX.linearRampToValueAtTime(d.x,h);f.forwardY.linearRampToValueAtTime(d.y,h);f.forwardZ.linearRampToValueAtTime(d.z,h);f.upX.linearRampToValueAtTime(g.x,h);f.upY.linearRampToValueAtTime(g.y,h);f.upZ.linearRampToValueAtTime(g.z,h)}else f.setPosition(a.x,a.y,a.z),f.setOrientation(d.x,d.y,d.z,g.x,g.y,g.z)}}()});lc.prototype=Object.assign(Object.create(D.prototype),{constructor:lc,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=
!1;this.sourceType="audioNode";this.source=a;this.connect();return this},setMediaElementSource:function(a){this.hasPlaybackControl=!1;this.sourceType="mediaNode";this.source=this.context.createMediaElementSource(a);this.connect();return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");
else{var a=this.context.createBufferSource();a.buffer=this.buffer;a.detune.value=this.detune;a.loop=this.loop;a.onended=this.onEnded.bind(this);a.playbackRate.setValueAtTime(this.playbackRate,this.startTime);this.startTime=this.context.currentTime;a.start(this.startTime,this.offset);this.isPlaying=!0;this.source=a;return this.connect()}},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return!0===this.isPlaying&&(this.source.stop(),
this.source.onended=null,this.offset+=(this.context.currentTime-this.startTime)*this.playbackRate,this.isPlaying=!1),this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.source.onended=null,this.offset=0,this.isPlaying=!1,this},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-
1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=
a,this.connect()):this.filters=a;return this},setDetune:function(a){this.detune=a;!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01);return this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===
this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=
this.loop),this},getVolume:function(){return this.gain.gain.value},setVolume:function(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this}});te.prototype=Object.assign(Object.create(lc.prototype),{constructor:te,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=a;return this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=
a;return this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=a;return this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=a;return this},setDirectionalCone:function(a,b,c){this.panner.coneInnerAngle=a;this.panner.coneOuterAngle=b;this.panner.coneOuterGain=c;return this},updateMatrixWorld:function(){var a=new n,b=new ka,c=new n,d=new n;return function(e){D.prototype.updateMatrixWorld.call(this,
e);if(!1!==this.isPlaying)if(this.matrixWorld.decompose(a,b,c),d.set(0,0,1).applyQuaternion(b),e=this.panner,e.positionX){var f=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(a.x,f);e.positionY.linearRampToValueAtTime(a.y,f);e.positionZ.linearRampToValueAtTime(a.z,f);e.orientationX.linearRampToValueAtTime(d.x,f);e.orientationY.linearRampToValueAtTime(d.y,f);e.orientationZ.linearRampToValueAtTime(d.z,f)}else e.setPosition(a.x,a.y,a.z),e.setOrientation(d.x,d.y,
d.z)}}()});Object.assign(ue.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=b[c];return a/b.length}});Object.assign(ve.prototype,{accumulate:function(a,b){var c=this.buffer,d=this.valueSize;a=a*d+d;var e=this.cumulativeWeight;if(0===e){for(e=0;e!==d;++e)c[a+e]=c[e];e=b}else e+=b,this._mixBufferRegion(c,a,0,b/e,d);this.cumulativeWeight=e},apply:function(a){var b=
this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);d=b;for(var f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=
0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d){ka.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}});Object.assign(yf.prototype,{getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,
c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}});Object.assign(oa,{Composite:yf,create:function(a,b,c){return a&&a.isAnimationObjectGroup?new oa.Composite(a,b,c):new oa(a,b,c)},sanitizeNodeName:function(){var a=/[\[\]\.:\/]/g;return function(b){return b.replace(/\s/g,"_").replace(a,"")}}(),parseTrackName:function(){var a="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",b=/((?:WC+[\/:])*)/.source.replace("WC",
"[^\\[\\]\\.:\\/]");a=/(WCOD+)?/.source.replace("WCOD",a);var c=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),e=new RegExp("^"+b+a+c+d+"$"),f=["material","materials","bones"];return function(a){var b=e.exec(a);if(!b)throw Error("PropertyBinding: Cannot parse trackName: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};var c=b.nodeName&&b.nodeName.lastIndexOf(".");if(void 0!==
c&&-1!==c){var d=b.nodeName.substring(c+1);-1!==f.indexOf(d)&&(b.nodeName=b.nodeName.substring(0,c),b.objectName=d)}if(null===b.propertyName||0===b.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return b}}(),findNode:function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=a.skeleton.getBoneByName(b);if(void 0!==c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var e=a[c];
if(e.name===b||e.uuid===b||(e=d(e.children)))return e}return null};if(a=d(a.children))return a}return null}});Object.assign(oa.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,
b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.targetObject[this.propertyName]=a[b]},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,
d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,
b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(a,b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=oa.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;
this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[c]}if(void 0!==f){if(void 0===a[f]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("THREE.PropertyBinding: Trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",
a);else{b=this.Versioning.None;this.targetObject=a;void 0!==a.needsUpdate?b=this.Versioning.NeedsUpdate:void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
this);return}for(c=0;c<this.node.geometry.morphAttributes.position.length;c++)if(a.geometry.morphAttributes.position[c].name===e){e=c;break}}else{if(!a.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==
f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}});
Object.assign(oa.prototype,{_getValue_unbound:oa.prototype.getValue,_setValue_unbound:oa.prototype.setValue});Object.assign(zf.prototype,{isAnimationObjectGroup:!0,add:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._paths,f=this._parsedPaths,g=this._bindings,h=g.length,k=void 0,l=0,n=arguments.length;l!==n;++l){var p=arguments[l],r=p.uuid,x=d[r];if(void 0===x){x=b++;d[r]=x;a.push(p);r=0;for(var t=h;r!==t;++r)g[r].push(new oa(p,e[r],f[r]))}else if(x<
c){k=a[x];var v=--c;t=a[v];d[t.uuid]=x;a[x]=t;d[r]=v;a[v]=p;r=0;for(t=h;r!==t;++r){var w=g[r],y=w[x];w[x]=w[v];void 0===y&&(y=new oa(p,e[r],f[r]));w[v]=y}}else a[x]!==k&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){for(var a=this._objects,b=this.nCachedObjects_,c=this._indicesByUUID,d=this._bindings,e=d.length,f=0,g=arguments.length;f!==g;++f){var h=
arguments[f],k=h.uuid,l=c[k];if(void 0!==l&&l>=b){var n=b++,p=a[n];c[p.uuid]=l;a[l]=p;c[k]=n;a[n]=h;h=0;for(k=e;h!==k;++h){p=d[h];var r=p[l];p[l]=p[n];p[n]=r}}}this.nCachedObjects_=b},uncache:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var k=arguments[g].uuid,l=d[k];if(void 0!==l)if(delete d[k],l<c){k=--c;var n=a[k],p=--b,r=a[p];d[n.uuid]=l;a[l]=n;d[r.uuid]=k;a[k]=r;a.pop();n=0;for(r=f;n!==
r;++n){var x=e[n],t=x[p];x[l]=x[k];x[k]=t;x.pop()}}else for(p=--b,r=a[p],d[r.uuid]=l,a[l]=r,a.pop(),n=0,r=f;n!==r;++n)x=e[n],x[l]=x[p],x.pop()}this.nCachedObjects_=c},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,k=this.nCachedObjects_,l=Array(h.length);d=e.length;c[a]=d;f.push(a);g.push(b);e.push(l);c=k;for(d=h.length;c!==d;++c)l[c]=new oa(h[c],a,b);return l},unsubscribe_:function(a){var b=
this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}});Object.assign(Af.prototype,{play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},reset:function(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&
!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,
1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},
setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,0,a)},warp:function(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=
this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(a,b,c,d){if(this.enabled){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;
e=this._propertyBindings;for(var f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}}else this._updateWeight(a)},_updateWeight:function(a){var b=0;if(this.enabled){b=this.weight;var c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){b=this.timeScale;var c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0];
b*=d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a,c=this._clip.duration,d=this.loop,e=this._loopCount,f=2202===d;if(0===a)return-1===e?b:f&&1===(e&1)?c-b:b;if(2200===d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else break a;this.clampWhenFinished?this.paused=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>
a?-1:1})}else{-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,f)):this._setEndings(0===this.repetitions,!0,f));if(b>=c||0>b){d=Math.floor(b/c);b-=c*d;e+=Math.abs(d);var g=this.repetitions-e;0>=g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(1===g?(a=0>a,this._setEndings(a,!a,f)):this._setEndings(!1,!1,f),this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:d}))}if(f&&
1===(e&1))return this.time=b,c-b}return this.time=b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}});we.prototype=
Object.assign(Object.create(ja.prototype),{constructor:we,_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings;a=a._interpolants;var g=c.uuid,h=this._bindingsByRootAndName,k=h[g];void 0===k&&(k={},h[g]=k);for(h=0;h!==e;++h){var l=d[h],n=l.name,p=k[n];if(void 0===p){p=f[h];if(void 0!==p){null===p._cacheIndex&&(++p.referenceCount,this._addInactiveBinding(p,g,n));continue}p=new ve(oa.create(c,n,b&&b._propertyBindings[h].binding.parsedPath),l.ValueTypeName,
l.getValueSize());++p.referenceCount;this._addInactiveBinding(p,g,n)}f[h]=p;a[h].resultBuffer=p.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=
a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},
get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);
f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;b=a._clip.uuid;c=this._actionsByClip;d=c[b];var e=d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;
for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=
e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid;c=c.path;var e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f)break a;delete e[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,
d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new dd(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=
c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(a,b){var c=b||this._root,d=c.uuid;c="string"===typeof a?Ha.findByName(c,a):a;a=null!==c?c.uuid:a;var e=this._actionsByClip[a],f=null;if(void 0!==e){f=e.actionByRoot[d];if(void 0!==f)return f;f=e.knownActions[0];null===c&&(c=f._clip)}if(null===c)return null;b=new Af(this,c,b);this._bindAction(b,f);this._addInactiveAction(b,a,d);return b},existingAction:function(a,b){var c=b||this._root;b=c.uuid;c="string"===typeof a?
Ha.findByName(c,a):a;a=this._actionsByClip[c?c.uuid:a];return void 0!==a?a.actionByRoot[b]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g)b[g]._update(d,a,e,
f);a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){d=d.knownActions;for(var e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=
a.uuid;var b=this._actionsByClip;for(d in b){var c=b[d].actionByRoot[a];void 0!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}var d=this._bindingsByRootAndName[a];if(void 0!==d)for(var e in d)a=d[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){a=this.existingAction(a,b);null!==a&&(this._deactivateAction(a),this._removeInactiveAction(a))}});Rd.prototype.clone=function(){return new Rd(void 0===this.value.clone?this.value:this.value.clone())};xe.prototype=
Object.assign(Object.create(C.prototype),{constructor:xe,isInstancedBufferGeometry:!0,copy:function(a){C.prototype.copy.call(this,a);this.maxInstancedCount=a.maxInstancedCount;return this},clone:function(){return(new this.constructor).copy(this)}});ye.prototype=Object.assign(Object.create(rb.prototype),{constructor:ye,isInstancedInterleavedBuffer:!0,copy:function(a){rb.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this}});ze.prototype=Object.assign(Object.create(E.prototype),
{constructor:ze,isInstancedBufferAttribute:!0,copy:function(a){E.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this}});Object.assign(Bf.prototype,{linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize()):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),
this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b,c){c=c||[];Ae(a,this,c,b);c.sort(Cf);return c},intersectObjects:function(a,b,c){c=c||[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=0,e=a.length;d<e;d++)Ae(a[d],this,c,b);c.sort(Cf);return c}});Object.assign(Df.prototype,{set:function(a,b,c){this.radius=a;this.phi=b;this.theta=
c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z)},setFromCartesianCoords:function(a,b,c){this.radius=Math.sqrt(a*a+b*b+c*c);0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a,c),this.phi=Math.acos(R.clamp(b/this.radius,
-1,1)));return this}});Object.assign(Ef.prototype,{set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z)},setFromCartesianCoords:function(a,b,c){this.radius=Math.sqrt(a*a+c*c);this.theta=Math.atan2(a,c);this.y=b;return this}});Object.assign(Be.prototype,{set:function(a,b){this.min.copy(a);
this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new z;return function(b,c){c=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(c);this.max.copy(b).add(c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=
-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){void 0===a&&(console.warn("THREE.Box2: .getCenter() target is now required"),a=new z);return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){void 0===a&&(console.warn("THREE.Box2: .getSize() target is now required"),a=new z);return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);
return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){void 0===b&&(console.warn("THREE.Box2: .getParameter() target is now required"),b=new z);
return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){void 0===b&&(console.warn("THREE.Box2: .clampPoint() target is now required"),b=new z);return b.copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new z;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);
this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});Object.assign(Ce.prototype,{set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},getCenter:function(a){void 0===
a&&(console.warn("THREE.Line3: .getCenter() target is now required"),a=new n);return a.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){void 0===a&&(console.warn("THREE.Line3: .delta() target is now required"),a=new n);return a.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){void 0===b&&(console.warn("THREE.Line3: .at() target is now required"),b=
new n);return this.delta(b).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new n,b=new n;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);c=b.dot(b);c=b.dot(a)/c;d&&(c=R.clamp(c,0,1));return c}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);void 0===c&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),c=new n);return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}});ld.prototype=Object.create(D.prototype);ld.prototype.constructor=ld;ld.prototype.isImmediateRenderObject=!0;md.prototype=Object.create(S.prototype);md.prototype.constructor=md;md.prototype.update=function(){var a=new n,b=new n,c=new da;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var e=this.object.matrixWorld,f=
this.geometry.attributes.position,g=this.object.geometry;if(g&&g.isGeometry)for(var h=g.vertices,k=g.faces,l=g=0,n=k.length;l<n;l++)for(var p=k[l],r=0,x=p.vertexNormals.length;r<x;r++){var t=p.vertexNormals[r];a.copy(h[p[d[r]]]).applyMatrix4(e);b.copy(t).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);f.setXYZ(g,a.x,a.y,a.z);g+=1;f.setXYZ(g,b.x,b.y,b.z);g+=1}else if(g&&g.isBufferGeometry)for(d=g.attributes.position,h=g.attributes.normal,r=g=0,x=d.count;r<x;r++)a.set(d.getX(r),d.getY(r),
d.getZ(r)).applyMatrix4(e),b.set(h.getX(r),h.getY(r),h.getZ(r)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),f.setXYZ(g,a.x,a.y,a.z),g+=1,f.setXYZ(g,b.x,b.y,b.z),g+=1;f.needsUpdate=!0}}();mc.prototype=Object.create(D.prototype);mc.prototype.constructor=mc;mc.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};mc.prototype.update=function(){var a=new n;return function(){this.light.updateMatrixWorld();var b=this.light.distance?this.light.distance:
1E3,c=b*Math.tan(this.light.angle);this.cone.scale.set(c,c,b);a.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(a);void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}();nc.prototype=Object.create(S.prototype);nc.prototype.constructor=nc;nc.prototype.updateMatrixWorld=function(){var a=new n,b=new O,c=new O;return function(d){var e=this.bones,f=this.geometry,g=f.getAttribute("position");c.getInverse(this.root.matrixWorld);
for(var h=0,k=0;h<e.length;h++){var l=e[h];l.parent&&l.parent.isBone&&(b.multiplyMatrices(c,l.matrixWorld),a.setFromMatrixPosition(b),g.setXYZ(k,a.x,a.y,a.z),b.multiplyMatrices(c,l.parent.matrixWorld),a.setFromMatrixPosition(b),g.setXYZ(k+1,a.x,a.y,a.z),k+=2)}f.getAttribute("position").needsUpdate=!0;D.prototype.updateMatrixWorld.call(this,d)}}();oc.prototype=Object.create(na.prototype);oc.prototype.constructor=oc;oc.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};oc.prototype.update=
function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)};pc.prototype=Object.create(ta.prototype);pc.prototype.constructor=pc;pc.prototype.update=function(){this.scale.set(.5*this.light.width,.5*this.light.height,1);if(void 0!==this.color)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var a=this.material.color,b=Math.max(a.r,
a.g,a.b);1<b&&a.multiplyScalar(1/b);this.children[0].material.color.copy(this.material.color)}};pc.prototype.dispose=function(){this.geometry.dispose();this.material.dispose();this.children[0].geometry.dispose();this.children[0].material.dispose()};qc.prototype=Object.create(D.prototype);qc.prototype.constructor=qc;qc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};qc.prototype.update=function(){var a=new n,b=new I,c=new I;return function(){var d=
this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var e=d.geometry.getAttribute("color");b.copy(this.light.color);c.copy(this.light.groundColor);for(var f=0,g=e.count;f<g;f++){var h=f<g/2?b:c;e.setXYZ(f,h.r,h.g,h.b)}e.needsUpdate=!0}d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate())}}();nd.prototype=Object.create(S.prototype);nd.prototype.constructor=nd;Sd.prototype=Object.create(S.prototype);Sd.prototype.constructor=Sd;od.prototype=Object.create(S.prototype);
od.prototype.constructor=od;od.prototype.update=function(){var a=new n,b=new n,c=new da;return function(){this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=this.object.geometry,g=f.vertices;f=f.faces;for(var h=0,k=0,l=f.length;k<l;k++){var n=f[k],p=n.normal;a.copy(g[n.a]).add(g[n.b]).add(g[n.c]).divideScalar(3).applyMatrix4(d);b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);e.setXYZ(h,
a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0}}();rc.prototype=Object.create(D.prototype);rc.prototype.constructor=rc;rc.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};rc.prototype.update=function(){var a=new n,b=new n,c=new n;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,
a);this.lightPlane.lookAt(b);void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color));this.targetLine.lookAt(b);this.targetLine.scale.z=c.length()}}();pd.prototype=Object.create(S.prototype);pd.prototype.constructor=pd;pd.prototype.update=function(){function a(a,g,h,k){d.set(g,h,k).unproject(e);a=c[a];if(void 0!==a)for(g=b.getAttribute("position"),
h=0,k=a.length;h<k;h++)g.setXYZ(a[h],d.x,d.y,d.z)}var b,c,d=new n,e=new Ra;return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",-1,-1,1);a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",
0,1,-1);b.getAttribute("position").needsUpdate=!0}}();ab.prototype=Object.create(S.prototype);ab.prototype.constructor=ab;ab.prototype.update=function(){var a=new Wa;return function(b){void 0!==b&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");void 0!==this.object&&a.setFromObject(this.object);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=
c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();ab.prototype.setFromObject=function(a){this.object=a;this.update();return this};ab.prototype.copy=function(a){S.prototype.copy.call(this,a);this.object=a.object;return this};ab.prototype.clone=function(){return(new this.constructor).copy(this)};qd.prototype=Object.create(S.prototype);qd.prototype.constructor=qd;qd.prototype.updateMatrixWorld=
function(a){var b=this.box;b.isEmpty()||(b.getCenter(this.position),b.getSize(this.scale),this.scale.multiplyScalar(.5),D.prototype.updateMatrixWorld.call(this,a))};rd.prototype=Object.create(ta.prototype);rd.prototype.constructor=rd;rd.prototype.updateMatrixWorld=function(a){var b=-this.plane.constant;1E-8>Math.abs(b)&&(b=1E-8);this.scale.set(.5*this.size,.5*this.size,b);this.children[0].material.side=0>b?1:0;this.lookAt(this.plane.normal);D.prototype.updateMatrixWorld.call(this,a)};var Td,De;bb.prototype=
Object.create(D.prototype);bb.prototype.constructor=bb;bb.prototype.setDirection=function(){var a=new n,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();bb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};
bb.prototype.setColor=function(a){this.line.material.color.copy(a);this.cone.material.color.copy(a)};bb.prototype.copy=function(a){D.prototype.copy.call(this,a,!1);this.line.copy(a.line);this.cone.copy(a.cone);return this};bb.prototype.clone=function(){return(new this.constructor).copy(this)};sd.prototype=Object.create(S.prototype);sd.prototype.constructor=sd;J.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(J.prototype);a.prototype.constructor=
a;a.prototype.getPoint=b;return a};Object.assign($a.prototype,{createPointsGeometry:function(a){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getSpacedPoints(a);return this.createGeometry(a)},
createGeometry:function(a){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var b=new Q,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new n(e.x,e.y,e.z||0))}return b}});Object.assign(Na.prototype,{fromPoints:function(a){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");this.setFromPoints(a)}});Gf.prototype=Object.create(ua.prototype);Hf.prototype=Object.create(ua.prototype);Ee.prototype=
Object.create(ua.prototype);Object.assign(Ee.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});nd.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};
nc.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(jd.prototype,{extractUrlBase:function(a){console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");return Ie.extractUrlBase(a)}});Object.assign(le.prototype,{setTexturePath:function(a){console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");return this.setResourcePath(a)}});Object.assign(Be.prototype,
{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a)}});Object.assign(Wa.prototype,
{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)},
size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");return this.getSize(a)}});Ce.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a)};Object.assign(R,{random16:function(){console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");return Math.random()},nearestPowerOfTwo:function(a){console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");
return R.floorPowerOfTwo(a)},nextPowerOfTwo:function(a){console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");return R.ceilPowerOfTwo(a)}});Object.assign(da.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBuffer:function(a){console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(O.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},getPosition:function(){var a;return function(){void 0===a&&(a=new n);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return a.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
return this.makeRotationFromQuaternion(a)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},
rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},
rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(a){console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
return this.makePerspective(a,b,d,c,e,f)}});Pa.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)};ka.prototype.multiplyVector3=function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)};Object.assign(qb.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)}});Object.assign(ha.prototype,{area:function(){console.warn("THREE.Triangle: .area() has been renamed to .getArea().");return this.getArea()},barycoordFromPoint:function(a,
b){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return this.getBarycoord(a,b)},midpoint:function(a){console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");return this.getMidpoint(a)},normal:function(a){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return this.getNormal(a)},plane:function(a){console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");return this.getPlane(a)}});Object.assign(ha,
{barycoordFromPoint:function(a,b,c,d,e){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return ha.getBarycoord(a,b,c,d,e)},normal:function(a,b,c,d){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return ha.getNormal(a,b,c,d)}});Object.assign(hb.prototype,{extractAllPoints:function(a){console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");return this.extractPoints(a)},extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
return new ub(this,a)},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new wb(this,a)}});Object.assign(z.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a)},
lengthManhattan:function(){console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(n.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,a)},applyProjection:function(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a)},
fromAttribute:function(a,b,c){console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(ca.prototype,
{fromAttribute:function(a,b,c){console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},lengthManhattan:function(){console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(Q.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")}});
Object.assign(D.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")}});
Object.defineProperties(D.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});
Object.defineProperties(Gc.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}});Object.defineProperty(yd.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Hc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(J.prototype,
"__arcLengthDivisions",{get:function(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");return this.arcLengthDivisions},set:function(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");this.arcLengthDivisions=a}});V.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(ba.prototype,
{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},
shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(E.prototype,
{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");return this.array.length}},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")}});Object.assign(C.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addDrawCall:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});Object.defineProperties(C.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}}});Object.assign(Sa.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(Rd.prototype,
{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this}}});Object.defineProperties(L.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},
set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){console.warn("THREE.Material: .wrapRGB has been removed.");return new I}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");this.flatShading=1===a}}});Object.defineProperties(Ga.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
return!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Ba.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});Object.assign(be.prototype,
{clearTarget:function(a,b,c,d){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");this.setRenderTarget(a);this.clear(b,c,d)},animate:function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");this.setAnimationLoop(a)},getCurrentRenderTarget:function(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");return this.getRenderTarget()},getMaxAnisotropy:function(){console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");
return this.capabilities.getMaxAnisotropy()},getPrecision:function(){console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");return this.capabilities.precision},resetGLState:function(){console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");return this.state.reset()},supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float")},
supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
return this.capabilities.vertexTextures},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},
addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")}});Object.defineProperties(be.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(ef.prototype,
{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},
renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(jb.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=
a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=
a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps},
set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});Object.defineProperties(kf.prototype,{standing:{set:function(){console.warn("THREE.WebVRManager: .standing has been removed.")}},userHeight:{set:function(){console.warn("THREE.WebVRManager: .userHeight has been removed.")}}});lc.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;(new pe).load(a,
function(a){b.setBuffer(a)});return this};ue.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()};kd.prototype.updateCubeMap=function(a,b){console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");return this.update(a,b)};ib.crossOrigin=void 0;ib.loadTexture=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new Hd;e.setCrossOrigin(this.crossOrigin);
a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a};ib.loadTextureCube=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new ie;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a};ib.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ib.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};
l.WebGLRenderTargetCube=Ib;l.WebGLRenderTarget=jb;l.WebGLRenderer=be;l.ShaderLib=Qa;l.UniformsLib=F;l.UniformsUtils=ah;l.ShaderChunk=H;l.FogExp2=Qb;l.Fog=Rb;l.Scene=xd;l.Sprite=Fc;l.LOD=Gc;l.SkinnedMesh=Hc;l.Skeleton=yd;l.Bone=ce;l.Mesh=na;l.LineSegments=S;l.LineLoop=zd;l.Line=ta;l.Points=Tb;l.Group=Pb;l.VideoTexture=de;l.DataTexture=kb;l.DataTexture3D=Nb;l.CompressedTexture=Ub;l.CubeTexture=Xa;l.CanvasTexture=Ic;l.DepthTexture=Jc;l.Texture=X;l.AnimationLoader=tf;l.CompressedTextureLoader=uf;l.DataTextureLoader=
he;l.CubeTextureLoader=ie;l.TextureLoader=Hd;l.ObjectLoader=le;l.MaterialLoader=Qd;l.BufferGeometryLoader=ke;l.DefaultLoadingManager=za;l.LoadingManager=ge;l.ImageLoader=fd;l.ImageBitmapLoader=me;l.FontLoader=wf;l.FileLoader=Ia;l.Loader=jd;l.LoaderUtils=Ie;l.Cache=Hb;l.AudioLoader=pe;l.SpotLightShadow=Jd;l.SpotLight=Kd;l.PointLight=Ld;l.RectAreaLight=Pd;l.HemisphereLight=Id;l.DirectionalLightShadow=Md;l.DirectionalLight=Nd;l.AmbientLight=Od;l.LightShadow=Gb;l.Light=ba;l.StereoCamera=xf;l.PerspectiveCamera=
V;l.OrthographicCamera=id;l.CubeCamera=kd;l.ArrayCamera=Dc;l.Camera=Ra;l.AudioListener=re;l.PositionalAudio=te;l.AudioContext=se;l.AudioAnalyser=ue;l.Audio=lc;l.VectorKeyframeTrack=jc;l.StringKeyframeTrack=Gd;l.QuaternionKeyframeTrack=ed;l.NumberKeyframeTrack=ic;l.ColorKeyframeTrack=Ed;l.BooleanKeyframeTrack=Dd;l.PropertyMixer=ve;l.PropertyBinding=oa;l.KeyframeTrack=qa;l.AnimationUtils=ra;l.AnimationObjectGroup=zf;l.AnimationMixer=we;l.AnimationClip=Ha;l.Uniform=Rd;l.InstancedBufferGeometry=xe;l.BufferGeometry=
C;l.Geometry=Q;l.InterleavedBufferAttribute=Ec;l.InstancedInterleavedBuffer=ye;l.InterleavedBuffer=rb;l.InstancedBufferAttribute=ze;l.Face3=Kb;l.Object3D=D;l.Raycaster=Bf;l.Layers=Xd;l.EventDispatcher=ja;l.Clock=qe;l.QuaternionLinearInterpolant=Fd;l.LinearInterpolant=dd;l.DiscreteInterpolant=Cd;l.CubicInterpolant=Bd;l.Interpolant=va;l.Triangle=ha;l.Math=R;l.Spherical=Df;l.Cylindrical=Ef;l.Plane=Pa;l.Frustum=td;l.Sphere=Ea;l.Ray=qb;l.Matrix4=O;l.Matrix3=da;l.Box3=Wa;l.Box2=Be;l.Line3=Ce;l.Euler=lb;
l.Vector4=ca;l.Vector3=n;l.Vector2=z;l.Quaternion=ka;l.Color=I;l.ImmediateRenderObject=ld;l.VertexNormalsHelper=md;l.SpotLightHelper=mc;l.SkeletonHelper=nc;l.PointLightHelper=oc;l.RectAreaLightHelper=pc;l.HemisphereLightHelper=qc;l.GridHelper=nd;l.PolarGridHelper=Sd;l.FaceNormalsHelper=od;l.DirectionalLightHelper=rc;l.CameraHelper=pd;l.BoxHelper=ab;l.Box3Helper=qd;l.PlaneHelper=rd;l.ArrowHelper=bb;l.AxesHelper=sd;l.Shape=hb;l.Path=Na;l.ShapePath=ne;l.Font=oe;l.CurvePath=$a;l.Curve=J;l.ImageUtils=
ib;l.ShapeUtils=Ya;l.WebGLUtils=ff;l.WireframeGeometry=Vb;l.ParametricGeometry=Kc;l.ParametricBufferGeometry=Wb;l.TetrahedronGeometry=Mc;l.TetrahedronBufferGeometry=Xb;l.OctahedronGeometry=Nc;l.OctahedronBufferGeometry=sb;l.IcosahedronGeometry=Oc;l.IcosahedronBufferGeometry=Yb;l.DodecahedronGeometry=Pc;l.DodecahedronBufferGeometry=Zb;l.PolyhedronGeometry=Lc;l.PolyhedronBufferGeometry=ya;l.TubeGeometry=Qc;l.TubeBufferGeometry=$b;l.TorusKnotGeometry=Rc;l.TorusKnotBufferGeometry=ac;l.TorusGeometry=Sc;
l.TorusBufferGeometry=bc;l.TextGeometry=Xc;l.TextBufferGeometry=cc;l.SphereGeometry=Yc;l.SphereBufferGeometry=vb;l.RingGeometry=Zc;l.RingBufferGeometry=dc;l.PlaneGeometry=zc;l.PlaneBufferGeometry=pb;l.LatheGeometry=$c;l.LatheBufferGeometry=ec;l.ShapeGeometry=wb;l.ShapeBufferGeometry=xb;l.ExtrudeGeometry=ub;l.ExtrudeBufferGeometry=Sa;l.EdgesGeometry=fc;l.ConeGeometry=ad;l.ConeBufferGeometry=bd;l.CylinderGeometry=yb;l.CylinderBufferGeometry=Za;l.CircleGeometry=cd;l.CircleBufferGeometry=gc;l.BoxGeometry=
Lb;l.BoxBufferGeometry=ob;l.ShadowMaterial=zb;l.SpriteMaterial=gb;l.RawShaderMaterial=hc;l.ShaderMaterial=Ba;l.PointsMaterial=Fa;l.MeshPhysicalMaterial=Ab;l.MeshStandardMaterial=Ta;l.MeshPhongMaterial=Ga;l.MeshToonMaterial=Bb;l.MeshNormalMaterial=Cb;l.MeshLambertMaterial=Db;l.MeshDepthMaterial=db;l.MeshDistanceMaterial=eb;l.MeshBasicMaterial=wa;l.MeshMatcapMaterial=Eb;l.LineDashedMaterial=Fb;l.LineBasicMaterial=T;l.Material=L;l.Float64BufferAttribute=yc;l.Float32BufferAttribute=A;l.Uint32BufferAttribute=
nb;l.Int32BufferAttribute=xc;l.Uint16BufferAttribute=mb;l.Int16BufferAttribute=wc;l.Uint8ClampedBufferAttribute=vc;l.Uint8BufferAttribute=uc;l.Int8BufferAttribute=tc;l.BufferAttribute=E;l.ArcCurve=kc;l.CatmullRomCurve3=ua;l.CubicBezierCurve=Ja;l.CubicBezierCurve3=Ua;l.EllipseCurve=Da;l.LineCurve=Aa;l.LineCurve3=Ka;l.QuadraticBezierCurve=La;l.QuadraticBezierCurve3=Va;l.SplineCurve=Ma;l.REVISION="100";l.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};l.CullFaceNone=0;l.CullFaceBack=1;l.CullFaceFront=2;l.CullFaceFrontBack=
3;l.FrontFaceDirectionCW=0;l.FrontFaceDirectionCCW=1;l.BasicShadowMap=0;l.PCFShadowMap=1;l.PCFSoftShadowMap=2;l.FrontSide=0;l.BackSide=1;l.DoubleSide=2;l.FlatShading=1;l.SmoothShading=2;l.NoColors=0;l.FaceColors=1;l.VertexColors=2;l.NoBlending=0;l.NormalBlending=1;l.AdditiveBlending=2;l.SubtractiveBlending=3;l.MultiplyBlending=4;l.CustomBlending=5;l.AddEquation=100;l.SubtractEquation=101;l.ReverseSubtractEquation=102;l.MinEquation=103;l.MaxEquation=104;l.ZeroFactor=200;l.OneFactor=201;l.SrcColorFactor=
202;l.OneMinusSrcColorFactor=203;l.SrcAlphaFactor=204;l.OneMinusSrcAlphaFactor=205;l.DstAlphaFactor=206;l.OneMinusDstAlphaFactor=207;l.DstColorFactor=208;l.OneMinusDstColorFactor=209;l.SrcAlphaSaturateFactor=210;l.NeverDepth=0;l.AlwaysDepth=1;l.LessDepth=2;l.LessEqualDepth=3;l.EqualDepth=4;l.GreaterEqualDepth=5;l.GreaterDepth=6;l.NotEqualDepth=7;l.MultiplyOperation=0;l.MixOperation=1;l.AddOperation=2;l.NoToneMapping=0;l.LinearToneMapping=1;l.ReinhardToneMapping=2;l.Uncharted2ToneMapping=3;l.CineonToneMapping=
4;l.ACESFilmicToneMapping=5;l.UVMapping=300;l.CubeReflectionMapping=301;l.CubeRefractionMapping=302;l.EquirectangularReflectionMapping=303;l.EquirectangularRefractionMapping=304;l.SphericalReflectionMapping=305;l.CubeUVReflectionMapping=306;l.CubeUVRefractionMapping=307;l.RepeatWrapping=1E3;l.ClampToEdgeWrapping=1001;l.MirroredRepeatWrapping=1002;l.NearestFilter=1003;l.NearestMipMapNearestFilter=1004;l.NearestMipMapLinearFilter=1005;l.LinearFilter=1006;l.LinearMipMapNearestFilter=1007;l.LinearMipMapLinearFilter=
1008;l.UnsignedByteType=1009;l.ByteType=1010;l.ShortType=1011;l.UnsignedShortType=1012;l.IntType=1013;l.UnsignedIntType=1014;l.FloatType=1015;l.HalfFloatType=1016;l.UnsignedShort4444Type=1017;l.UnsignedShort5551Type=1018;l.UnsignedShort565Type=1019;l.UnsignedInt248Type=1020;l.AlphaFormat=1021;l.RGBFormat=1022;l.RGBAFormat=1023;l.LuminanceFormat=1024;l.LuminanceAlphaFormat=1025;l.RGBEFormat=1023;l.DepthFormat=1026;l.DepthStencilFormat=1027;l.RedFormat=1028;l.RGB_S3TC_DXT1_Format=33776;l.RGBA_S3TC_DXT1_Format=
33777;l.RGBA_S3TC_DXT3_Format=33778;l.RGBA_S3TC_DXT5_Format=33779;l.RGB_PVRTC_4BPPV1_Format=35840;l.RGB_PVRTC_2BPPV1_Format=35841;l.RGBA_PVRTC_4BPPV1_Format=35842;l.RGBA_PVRTC_2BPPV1_Format=35843;l.RGB_ETC1_Format=36196;l.RGBA_ASTC_4x4_Format=37808;l.RGBA_ASTC_5x4_Format=37809;l.RGBA_ASTC_5x5_Format=37810;l.RGBA_ASTC_6x5_Format=37811;l.RGBA_ASTC_6x6_Format=37812;l.RGBA_ASTC_8x5_Format=37813;l.RGBA_ASTC_8x6_Format=37814;l.RGBA_ASTC_8x8_Format=37815;l.RGBA_ASTC_10x5_Format=37816;l.RGBA_ASTC_10x6_Format=
37817;l.RGBA_ASTC_10x8_Format=37818;l.RGBA_ASTC_10x10_Format=37819;l.RGBA_ASTC_12x10_Format=37820;l.RGBA_ASTC_12x12_Format=37821;l.LoopOnce=2200;l.LoopRepeat=2201;l.LoopPingPong=2202;l.InterpolateDiscrete=2300;l.InterpolateLinear=2301;l.InterpolateSmooth=2302;l.ZeroCurvatureEnding=2400;l.ZeroSlopeEnding=2401;l.WrapAroundEnding=2402;l.TrianglesDrawMode=0;l.TriangleStripDrawMode=1;l.TriangleFanDrawMode=2;l.LinearEncoding=3E3;l.sRGBEncoding=3001;l.GammaEncoding=3007;l.RGBEEncoding=3002;l.LogLuvEncoding=
3003;l.RGBM7Encoding=3004;l.RGBM16Encoding=3005;l.RGBDEncoding=3006;l.BasicDepthPacking=3200;l.RGBADepthPacking=3201;l.TangentSpaceNormalMap=0;l.ObjectSpaceNormalMap=1;l.CubeGeometry=Lb;l.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new Kb(a,b,c,e,f,g)};l.LineStrip=0;l.LinePieces=1;l.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");return a};l.MultiMaterial=function(a){void 0===
a&&(a=[]);console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");a.isMultiMaterial=!0;a.materials=a;a.clone=function(){return a.slice()};return a};l.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Tb(a,b)};l.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new Fc(a)};l.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Tb(a,
b)};l.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Fa(a)};l.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new Fa(a)};l.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Fa(a)};l.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
return new n(a,b,c)};l.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return(new E(a,b)).setDynamic(!0)};l.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new tc(a,b)};l.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new uc(a,
b)};l.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new vc(a,b)};l.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new wc(a,b)};l.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new mb(a,b)};l.Int32Attribute=
function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new xc(a,b)};l.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");return new nb(a,b)};l.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");return new A(a,b)};l.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
return new yc(a,b)};l.ClosedSplineCurve3=Gf;l.SplineCurve3=Hf;l.Spline=Ee;l.AxisHelper=function(a){console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");return new sd(a)};l.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");return new ab(a,b)};l.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new S(new fc(a.geometry),new T({color:void 0!==
b?b:16777215}))};l.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new S(new Vb(a.geometry),new T({color:void 0!==b?b:16777215}))};l.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new Ia(a)};l.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");return new he(a)};l.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
if(b.isMesh){b.matrixAutoUpdate&&b.updateMatrix();var d=b.matrix;b=b.geometry}a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};l.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,
b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};l.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed")};l.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.")};l.SceneUtils={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},
detach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")}};l.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")};Object.defineProperty(l,"__esModule",{value:!0})});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*
 * Copyright (c) 2015 cannon.js Authors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

!function(e){if(true)module.exports=e();else { var f; }}(function(){return function e(f,n,o){function d(t,l){if(!n[t]){if(!f[t]){var u="function"==typeof require&&require;if(!l&&u)return require(t,!0);if(i)return i(t,!0);throw new Error("Cannot find module '"+t+"'")}var p=n[t]={exports:{}};f[t][0].call(p.exports,function(e){var n=f[t][1][e];return d(n?n:e)},p,p.exports,e,f,n,o)}return n[t].exports}for(var i="function"==typeof require&&require,t=0;t<o.length;t++)d(o[t]);return d}({1:[function(e,f){f.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,f){f.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,f){function n(e){e=e||{},this.lowerBound=new o,e.lowerBound&&this.lowerBound.copy(e.lowerBound),this.upperBound=new o,e.upperBound&&this.upperBound.copy(e.upperBound)}{var o=e("../math/Vec3");e("../utils/Utils")}f.exports=n;var d=new o;n.prototype.setFromPoints=function(e,f,n,o){var i=this.lowerBound,t=this.upperBound,l=n;i.copy(e[0]),l&&l.vmult(i,i),t.copy(i);for(var u=1;u<e.length;u++){var p=e[u];l&&(l.vmult(p,d),p=d),p.x>t.x&&(t.x=p.x),p.x<i.x&&(i.x=p.x),p.y>t.y&&(t.y=p.y),p.y<i.y&&(i.y=p.y),p.z>t.z&&(t.z=p.z),p.z<i.z&&(i.z=p.z)}return f&&(f.vadd(i,i),f.vadd(t,t)),o&&(i.x-=o,i.y-=o,i.z-=o,t.x+=o,t.y+=o,t.z+=o),this},n.prototype.copy=function(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this},n.prototype.clone=function(){return(new n).copy(this)},n.prototype.extend=function(e){var f=e.lowerBound.x;this.lowerBound.x>f&&(this.lowerBound.x=f);var n=e.upperBound.x;this.upperBound.x<n&&(this.upperBound.x=n);var f=e.lowerBound.y;this.lowerBound.y>f&&(this.lowerBound.y=f);var n=e.upperBound.y;this.upperBound.y<n&&(this.upperBound.y=n);var f=e.lowerBound.z;this.lowerBound.z>f&&(this.lowerBound.z=f);var n=e.upperBound.z;this.upperBound.z<n&&(this.upperBound.z=n)},n.prototype.overlaps=function(e){var f=this.lowerBound,n=this.upperBound,o=e.lowerBound,d=e.upperBound;return(o.x<=n.x&&n.x<=d.x||f.x<=d.x&&d.x<=n.x)&&(o.y<=n.y&&n.y<=d.y||f.y<=d.y&&d.y<=n.y)&&(o.z<=n.z&&n.z<=d.z||f.z<=d.z&&d.z<=n.z)},n.prototype.contains=function(e){var f=this.lowerBound,n=this.upperBound,o=e.lowerBound,d=e.upperBound;return f.x<=o.x&&n.x>=d.x&&f.y<=o.y&&n.y>=d.y&&f.z<=o.z&&n.z>=d.z},n.prototype.getCorners=function(e,f,n,o,d,i,t,l){var u=this.lowerBound,p=this.upperBound;e.copy(u),f.set(p.x,u.y,u.z),n.set(p.x,p.y,u.z),o.set(u.x,p.y,p.z),d.set(p.x,u.y,u.z),i.set(u.x,p.y,u.z),t.set(u.x,u.y,p.z),l.copy(p)};var i=[new o,new o,new o,new o,new o,new o,new o,new o];n.prototype.toLocalFrame=function(e,f){var n=i,o=n[0],d=n[1],t=n[2],l=n[3],u=n[4],p=n[5],s=n[6],y=n[7];this.getCorners(o,d,t,l,u,p,s,y);for(var c=0;8!==c;c++){var a=n[c];e.pointToLocal(a,a)}return f.setFromPoints(n)},n.prototype.toWorldFrame=function(e,f){var n=i,o=n[0],d=n[1],t=n[2],l=n[3],u=n[4],p=n[5],s=n[6],y=n[7];this.getCorners(o,d,t,l,u,p,s,y);for(var c=0;8!==c;c++){var a=n[c];e.pointToWorld(a,a)}return f.setFromPoints(n)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,f){function n(){this.matrix=[]}f.exports=n,n.prototype.get=function(e,f){if(e=e.index,f=f.index,f>e){var n=f;f=e,e=n}return this.matrix[(e*(e+1)>>1)+f-1]},n.prototype.set=function(e,f,n){if(e=e.index,f=f.index,f>e){var o=f;f=e,e=o}this.matrix[(e*(e+1)>>1)+f-1]=n?1:0},n.prototype.reset=function(){for(var e=0,f=this.matrix.length;e!==f;e++)this.matrix[e]=0},n.prototype.setNumObjects=function(e){this.matrix.length=e*(e-1)>>1}},{}],5:[function(e,f){function n(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}{var o=e("../objects/Body"),d=e("../math/Vec3"),i=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane")}f.exports=n,n.prototype.collisionPairs=function(){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var t=o.STATIC|o.KINEMATIC;n.prototype.needBroadphaseCollision=function(e,f){return 0===(e.collisionFilterGroup&f.collisionFilterMask)||0===(f.collisionFilterGroup&e.collisionFilterMask)?!1:0===(e.type&t)&&e.sleepState!==o.SLEEPING||0===(f.type&t)&&f.sleepState!==o.SLEEPING?!0:!1},n.prototype.intersectionTest=function(e,f,n,o){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,f,n,o):this.doBoundingSphereBroadphase(e,f,n,o)};{var l=new d;new d,new i,new d}n.prototype.doBoundingSphereBroadphase=function(e,f,n,o){var d=l;f.position.vsub(e.position,d);var i=Math.pow(e.boundingRadius+f.boundingRadius,2),t=d.norm2();i>t&&(n.push(e),o.push(f))},n.prototype.doBoundingBoxBroadphase=function(e,f,n,o){e.aabbNeedsUpdate&&e.computeAABB(),f.aabbNeedsUpdate&&f.computeAABB(),e.aabb.overlaps(f.aabb)&&(n.push(e),o.push(f))};var u={keys:[]},p=[],s=[];n.prototype.makePairsUnique=function(e,f){for(var n=u,o=p,d=s,i=e.length,t=0;t!==i;t++)o[t]=e[t],d[t]=f[t];e.length=0,f.length=0;for(var t=0;t!==i;t++){var l=o[t].id,y=d[t].id,c=y>l?l+","+y:y+","+l;n[c]=t,n.keys.push(c)}for(var t=0;t!==n.keys.length;t++){var c=n.keys.pop(),a=n[c];e.push(o[a]),f.push(d[a]),delete n[c]}},n.prototype.setWorld=function(){};var y=new d;n.boundingSphereCheck=function(e,f){var n=y;return e.position.vsub(f.position,n),Math.pow(e.shape.boundingSphereRadius+f.shape.boundingSphereRadius,2)>n.norm2()},n.prototype.aabbQuery=function(){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,f){function n(e,f,n,i,t){o.apply(this),this.nx=n||10,this.ny=i||10,this.nz=t||10,this.aabbMin=e||new d(100,100,100),this.aabbMax=f||new d(-100,-100,-100);var l=this.nx*this.ny*this.nz;if(0>=l)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=l,this.binLengths.length=l;for(var u=0;l>u;u++)this.bins[u]=[],this.binLengths[u]=0}f.exports=n;var o=e("./Broadphase"),d=e("../math/Vec3"),i=e("../shapes/Shape");n.prototype=new o,n.prototype.constructor=n;{var t=new d;new d}n.prototype.collisionPairs=function(e,f,n){function o(e,f,n,o,d,i,t){var l=(e-g)*v|0,u=(f-x)*A|0,p=(n-j)*C|0,b=I((o-g)*v),m=I((d-x)*A),N=I((i-j)*C);0>l?l=0:l>=s&&(l=s-1),0>u?u=0:u>=y&&(u=y-1),0>p?p=0:p>=c&&(p=c-1),0>b?b=0:b>=s&&(b=s-1),0>m?m=0:m>=y&&(m=y-1),0>N?N=0:N>=c&&(N=c-1),l*=a,u*=r,p*=w,b*=a,m*=r,N*=w;for(var O=l;b>=O;O+=a)for(var h=u;m>=h;h+=r)for(var k=p;N>=k;k+=w){var q=O+h+k;E[q][F[q]++]=t}}for(var d=e.numObjects(),l=e.bodies,u=this.aabbMax,p=this.aabbMin,s=this.nx,y=this.ny,c=this.nz,a=y*c,r=c,w=1,b=u.x,m=u.y,N=u.z,g=p.x,x=p.y,j=p.z,v=s/(b-g),A=y/(m-x),C=c/(N-j),O=(b-g)/s,h=(m-x)/y,k=(N-j)/c,q=.5*Math.sqrt(O*O+h*h+k*k),z=i.types,B=z.SPHERE,D=z.PLANE,E=(z.BOX,z.COMPOUND,z.CONVEXPOLYHEDRON,this.bins),F=this.binLengths,G=this.bins.length,H=0;H!==G;H++)F[H]=0;for(var I=Math.ceil,p=Math.min,u=Math.max,H=0;H!==d;H++){var J=l[H],K=J.shape;switch(K.type){case B:var L=J.position.x,M=J.position.y,P=J.position.z,Q=K.radius;o(L-Q,M-Q,P-Q,L+Q,M+Q,P+Q,J);break;case D:K.worldNormalNeedsUpdate&&K.computeWorldNormal(J.quaternion);var R=K.worldNormal,S=g+.5*O-J.position.x,T=x+.5*h-J.position.y,U=j+.5*k-J.position.z,V=t;V.set(S,T,U);for(var W=0,X=0;W!==s;W++,X+=a,V.y=T,V.x+=O)for(var Y=0,Z=0;Y!==y;Y++,Z+=r,V.z=U,V.y+=h)for(var $=0,_=0;$!==c;$++,_+=w,V.z+=k)if(V.dot(R)<q){var ef=X+Z+_;E[ef][F[ef]++]=J}break;default:J.aabbNeedsUpdate&&J.computeAABB(),o(J.aabb.lowerBound.x,J.aabb.lowerBound.y,J.aabb.lowerBound.z,J.aabb.upperBound.x,J.aabb.upperBound.y,J.aabb.upperBound.z,J)}}for(var H=0;H!==G;H++){var ff=F[H];if(ff>1)for(var nf=E[H],W=0;W!==ff;W++)for(var J=nf[W],Y=0;Y!==W;Y++){var of=nf[Y];this.needBroadphaseCollision(J,of)&&this.intersectionTest(J,of,f,n)}}this.makePairsUnique(f,n)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,f){function n(){o.apply(this)}f.exports=n;var o=e("./Broadphase"),d=e("./AABB");n.prototype=new o,n.prototype.constructor=n,n.prototype.collisionPairs=function(e,f,n){var o,d,i,t,l=e.bodies,u=l.length;for(o=0;o!==u;o++)for(d=0;d!==o;d++)i=l[o],t=l[d],this.needBroadphaseCollision(i,t)&&this.intersectionTest(i,t,f,n)};new d;n.prototype.aabbQuery=function(e,f,n){n=n||[];for(var o=0;o<e.bodies.length;o++){var d=e.bodies[o];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(f)&&n.push(d)}return n}},{"./AABB":3,"./Broadphase":5}],8:[function(e,f){function n(){this.matrix={}}f.exports=n,n.prototype.get=function(e,f){if(e=e.id,f=f.id,f>e){var n=f;f=e,e=n}return e+"-"+f in this.matrix},n.prototype.set=function(e,f,n){if(e=e.id,f=f.id,f>e){var o=f;f=e,e=o}n?this.matrix[e+"-"+f]=!0:delete this.matrix[e+"-"+f]},n.prototype.reset=function(){this.matrix={}},n.prototype.setNumObjects=function(){}},{}],9:[function(e,f){function n(e,f){this.from=e?e.clone():new i,this.to=f?f.clone():new i,this._direction=new i,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=n.ANY,this.result=new u,this.hasHit=!1,this.callback=function(){}}function o(e,f,n,o){o.vsub(f,G),n.vsub(f,a),e.vsub(f,r);var d,i,t=G.dot(G),l=G.dot(a),u=G.dot(r),p=a.dot(a),s=a.dot(r);return(d=p*u-l*s)>=0&&(i=t*s-l*u)>=0&&t*p-l*l>d+i}function d(e,f,n){n.vsub(e,G);var o=G.dot(f);f.mult(o,H),H.vadd(e,H);var d=n.distanceTo(H);return d}f.exports=n;var i=e("../math/Vec3"),t=e("../math/Quaternion"),l=e("../math/Transform"),u=(e("../shapes/ConvexPolyhedron"),e("../shapes/Box"),e("../collision/RaycastResult")),p=e("../shapes/Shape"),s=e("../collision/AABB");n.prototype.constructor=n,n.CLOSEST=1,n.ANY=2,n.ALL=4;var y=new s,c=[];n.prototype.intersectWorld=function(e,f){return this.mode=f.mode||n.ANY,this.result=f.result||new u,this.skipBackfaces=!!f.skipBackfaces,this.collisionFilterMask="undefined"!=typeof f.collisionFilterMask?f.collisionFilterMask:-1,this.collisionFilterGroup="undefined"!=typeof f.collisionFilterGroup?f.collisionFilterGroup:-1,f.from&&this.from.copy(f.from),f.to&&this.to.copy(f.to),this.callback=f.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(y),c.length=0,e.broadphase.aabbQuery(e,y,c),this.intersectBodies(c),this.hasHit};var a=new i,r=new i;n.pointInTriangle=o;var w=new i,b=new t;n.prototype.intersectBody=function(e,f){f&&(this.result=f,this._updateDirection());var n=this.checkCollisionResponse;if((!n||e.collisionResponse)&&0!==(this.collisionFilterGroup&e.collisionFilterMask)&&0!==(e.collisionFilterGroup&this.collisionFilterMask))for(var o=w,d=b,i=0,t=e.shapes.length;t>i;i++){var l=e.shapes[i];if((!n||l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[i],d),e.quaternion.vmult(e.shapeOffsets[i],o),o.vadd(e.position,o),this.intersectShape(l,d,o,e),this.result._shouldStop))break}},n.prototype.intersectBodies=function(e,f){f&&(this.result=f,this._updateDirection());for(var n=0,o=e.length;!this.result._shouldStop&&o>n;n++)this.intersectBody(e[n])},n.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},n.prototype.intersectShape=function(e,f,n,o){var i=this.from,t=d(i,this._direction,n);if(!(t>e.boundingSphereRadius)){var l=this[e.type];l&&l.call(this,e,f,n,o)}};{var m=(new i,new i,new i),N=new i,g=new i,x=new i;new i,new u}n.prototype.intersectBox=function(e,f,n,o){return this.intersectConvex(e.convexPolyhedronRepresentation,f,n,o)},n.prototype[p.types.BOX]=n.prototype.intersectBox,n.prototype.intersectPlane=function(e,f,n,o){var d=this.from,t=this.to,l=this._direction,u=new i(0,0,1);f.vmult(u,u);var p=new i;d.vsub(n,p);var s=p.dot(u);t.vsub(n,p);var y=p.dot(u);if(!(s*y>0||d.distanceTo(t)<s)){var c=u.dot(l);if(!(Math.abs(c)<this.precision)){var a=new i,r=new i,w=new i;d.vsub(n,a);var b=-u.dot(a)/c;l.scale(b,r),d.vadd(r,w),this.reportIntersection(u,w,e,o,-1)}}},n.prototype[p.types.PLANE]=n.prototype.intersectPlane,n.prototype.getAABB=function(e){var f=this.to,n=this.from;e.lowerBound.x=Math.min(f.x,n.x),e.lowerBound.y=Math.min(f.y,n.y),e.lowerBound.z=Math.min(f.z,n.z),e.upperBound.x=Math.max(f.x,n.x),e.upperBound.y=Math.max(f.y,n.y),e.upperBound.z=Math.max(f.z,n.z)};var j={faceList:[0]};n.prototype.intersectHeightfield=function(e,f,o,d){var t=(e.data,e.elementSize,new i),u=new n(this.from,this.to);l.pointToLocalFrame(o,f,u.from,u.from),l.pointToLocalFrame(o,f,u.to,u.to);var p=[],s=null,y=null,c=null,a=null,r=e.getIndexOfPosition(u.from.x,u.from.y,p,!1);if(r&&(s=p[0],y=p[1],c=p[0],a=p[1]),r=e.getIndexOfPosition(u.to.x,u.to.y,p,!1),r&&((null===s||p[0]<s)&&(s=p[0]),(null===c||p[0]>c)&&(c=p[0]),(null===y||p[1]<y)&&(y=p[1]),(null===a||p[1]>a)&&(a=p[1])),null!==s){var w=[];e.getRectMinMax(s,y,c,a,w);for(var b=(w[0],w[1],s);c>=b;b++)for(var m=y;a>=m;m++){if(this.result._shouldStop)return;if(e.getConvexTrianglePillar(b,m,!1),l.pointToWorldFrame(o,f,e.pillarOffset,t),this.intersectConvex(e.pillarConvex,f,t,d,j),this.result._shouldStop)return;e.getConvexTrianglePillar(b,m,!0),l.pointToWorldFrame(o,f,e.pillarOffset,t),this.intersectConvex(e.pillarConvex,f,t,d,j)}}},n.prototype[p.types.HEIGHTFIELD]=n.prototype.intersectHeightfield;var v=new i,A=new i;n.prototype.intersectSphere=function(e,f,n,o){var d=this.from,i=this.to,t=e.radius,l=Math.pow(i.x-d.x,2)+Math.pow(i.y-d.y,2)+Math.pow(i.z-d.z,2),u=2*((i.x-d.x)*(d.x-n.x)+(i.y-d.y)*(d.y-n.y)+(i.z-d.z)*(d.z-n.z)),p=Math.pow(d.x-n.x,2)+Math.pow(d.y-n.y,2)+Math.pow(d.z-n.z,2)-Math.pow(t,2),s=Math.pow(u,2)-4*l*p,y=v,c=A;if(!(0>s))if(0===s)d.lerp(i,s,y),y.vsub(n,c),c.normalize(),this.reportIntersection(c,y,e,o,-1);else{var a=(-u-Math.sqrt(s))/(2*l),r=(-u+Math.sqrt(s))/(2*l);if(a>=0&&1>=a&&(d.lerp(i,a,y),y.vsub(n,c),c.normalize(),this.reportIntersection(c,y,e,o,-1)),this.result._shouldStop)return;r>=0&&1>=r&&(d.lerp(i,r,y),y.vsub(n,c),c.normalize(),this.reportIntersection(c,y,e,o,-1))}},n.prototype[p.types.SPHERE]=n.prototype.intersectSphere;var C=new i,O=(new i,new i,new i);n.prototype.intersectConvex=function(e,f,n,d,i){for(var t=C,l=O,u=i&&i.faceList||null,p=e.faces,s=e.vertices,y=e.faceNormals,c=this._direction,a=this.from,r=this.to,w=a.distanceTo(r),b=u?u.length:p.length,j=this.result,v=0;!j._shouldStop&&b>v;v++){var A=u?u[v]:v,h=p[A],k=y[A],q=f,z=n;l.copy(s[h[0]]),q.vmult(l,l),l.vadd(z,l),l.vsub(a,l),q.vmult(k,t);var B=c.dot(t);if(!(Math.abs(B)<this.precision)){var D=t.dot(l)/B;if(!(0>D)){c.mult(D,m),m.vadd(a,m),N.copy(s[h[0]]),q.vmult(N,N),z.vadd(N,N);for(var E=1;!j._shouldStop&&E<h.length-1;E++){g.copy(s[h[E]]),x.copy(s[h[E+1]]),q.vmult(g,g),q.vmult(x,x),z.vadd(g,g),z.vadd(x,x);var F=m.distanceTo(a);!o(m,N,g,x)&&!o(m,g,N,x)||F>w||this.reportIntersection(t,m,e,d,A)}}}}},n.prototype[p.types.CONVEXPOLYHEDRON]=n.prototype.intersectConvex;var h=new i,k=new i,q=new i,z=new i,B=new i,D=new i,E=(new s,[]),F=new l;n.prototype.intersectTrimesh=function(e,f,n,d,i){var t=h,u=E,p=F,s=O,y=k,c=q,a=z,r=D,w=B,b=(i&&i.faceList||null,e.indices),j=(e.vertices,e.faceNormals,this.from),v=this.to,A=this._direction;p.position.copy(n),p.quaternion.copy(f),l.vectorToLocalFrame(n,f,A,y),l.pointToLocalFrame(n,f,j,c),l.pointToLocalFrame(n,f,v,a);var C=c.distanceSquared(a);e.tree.rayQuery(this,p,u);for(var G=0,H=u.length;!this.result._shouldStop&&G!==H;G++){var I=u[G];e.getNormal(I,t),e.getVertex(b[3*I],N),N.vsub(c,s);var J=y.dot(t),K=t.dot(s)/J;if(!(0>K)){y.scale(K,m),m.vadd(c,m),e.getVertex(b[3*I+1],g),e.getVertex(b[3*I+2],x);var L=m.distanceSquared(c);!o(m,g,N,x)&&!o(m,N,g,x)||L>C||(l.vectorToWorldFrame(f,t,w),l.pointToWorldFrame(n,f,m,r),this.reportIntersection(w,r,e,d,I))}}u.length=0},n.prototype[p.types.TRIMESH]=n.prototype.intersectTrimesh,n.prototype.reportIntersection=function(e,f,o,d,i){var t=this.from,l=this.to,u=t.distanceTo(f),p=this.result;if(!(this.skipBackfaces&&e.dot(this._direction)>0))switch(p.hitFaceIndex="undefined"!=typeof i?i:-1,this.mode){case n.ALL:this.hasHit=!0,p.set(t,l,e,f,o,d,u),p.hasHit=!0,this.callback(p);break;case n.CLOSEST:(u<p.distance||!p.hasHit)&&(this.hasHit=!0,p.hasHit=!0,p.set(t,l,e,f,o,d,u));break;case n.ANY:this.hasHit=!0,p.hasHit=!0,p.set(t,l,e,f,o,d,u),p._shouldStop=!0}};var G=new i,H=new i},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,f){function n(){this.rayFromWorld=new o,this.rayToWorld=new o,this.hitNormalWorld=new o,this.hitPointWorld=new o,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}var o=e("../math/Vec3");f.exports=n,n.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},n.prototype.abort=function(){this._shouldStop=!0},n.prototype.set=function(e,f,n,o,d,i,t){this.rayFromWorld.copy(e),this.rayToWorld.copy(f),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(o),this.shape=d,this.body=i,this.distance=t}},{"../math/Vec3":30}],11:[function(e,f){function n(e){o.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var f=this.axisList;this._addBodyHandler=function(e){f.push(e.body)},this._removeBodyHandler=function(e){var n=f.indexOf(e.body);-1!==n&&f.splice(n,1)},e&&this.setWorld(e)}var o=(e("../shapes/Shape"),e("../collision/Broadphase"));f.exports=n,n.prototype=new o,n.prototype.setWorld=function(e){this.axisList.length=0;for(var f=0;f<e.bodies.length;f++)this.axisList.push(e.bodies[f]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0},n.insertionSortX=function(e){for(var f=1,n=e.length;n>f;f++){for(var o=e[f],d=f-1;d>=0&&!(e[d].aabb.lowerBound.x<=o.aabb.lowerBound.x);d--)e[d+1]=e[d];e[d+1]=o}return e},n.insertionSortY=function(e){for(var f=1,n=e.length;n>f;f++){for(var o=e[f],d=f-1;d>=0&&!(e[d].aabb.lowerBound.y<=o.aabb.lowerBound.y);d--)e[d+1]=e[d];e[d+1]=o}return e},n.insertionSortZ=function(e){for(var f=1,n=e.length;n>f;f++){for(var o=e[f],d=f-1;d>=0&&!(e[d].aabb.lowerBound.z<=o.aabb.lowerBound.z);d--)e[d+1]=e[d];e[d+1]=o}return e},n.prototype.collisionPairs=function(e,f,o){var d,i,t=this.axisList,l=t.length,u=this.axisIndex;for(this.dirty&&(this.sortList(),this.dirty=!1),d=0;d!==l;d++){var p=t[d];for(i=d+1;l>i;i++){var s=t[i];if(this.needBroadphaseCollision(p,s)){if(!n.checkBounds(p,s,u))break;this.intersectionTest(p,s,f,o)}}}},n.prototype.sortList=function(){for(var e=this.axisList,f=this.axisIndex,o=e.length,d=0;d!==o;d++){var i=e[d];i.aabbNeedsUpdate&&i.computeAABB()}0===f?n.insertionSortX(e):1===f?n.insertionSortY(e):2===f&&n.insertionSortZ(e)},n.checkBounds=function(e,f,n){var o,d;0===n?(o=e.position.x,d=f.position.x):1===n?(o=e.position.y,d=f.position.y):2===n&&(o=e.position.z,d=f.position.z);var i=e.boundingRadius,t=f.boundingRadius,l=o+i,u=d-t;return l>u},n.prototype.autoDetectAxis=function(){for(var e=0,f=0,n=0,o=0,d=0,i=0,t=this.axisList,l=t.length,u=1/l,p=0;p!==l;p++){var s=t[p],y=s.position.x;e+=y,f+=y*y;var c=s.position.y;n+=c,o+=c*c;var a=s.position.z;d+=a,i+=a*a}var r=f-e*e*u,w=o-n*n*u,b=i-d*d*u;this.axisIndex=r>w?r>b?0:2:w>b?1:2},n.prototype.aabbQuery=function(e,f,n){n=n||[],this.dirty&&(this.sortList(),this.dirty=!1);var o=this.axisIndex,d="x";1===o&&(d="y"),2===o&&(d="z");for(var i=this.axisList,t=(f.lowerBound[d],f.upperBound[d],0);t<i.length;t++){var l=i[t];l.aabbNeedsUpdate&&l.computeAABB(),l.aabb.overlaps(f)&&n.push(l)}return n}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,f){function n(e,f,n){n=n||{};var l="undefined"!=typeof n.maxForce?n.maxForce:1e6,u=n.pivotA?n.pivotA.clone():new t,p=n.pivotB?n.pivotB.clone():new t;this.axisA=n.axisA?n.axisA.clone():new t,this.axisB=n.axisB?n.axisB.clone():new t,o.call(this,e,u,f,p,l),this.collideConnected=!!n.collideConnected,this.angle="undefined"!=typeof n.angle?n.angle:0;var s=this.coneEquation=new d(e,f,n),y=this.twistEquation=new i(e,f,n);this.twistAngle="undefined"!=typeof n.twistAngle?n.twistAngle:0,s.maxForce=0,s.minForce=-l,y.maxForce=0,y.minForce=-l,this.equations.push(s,y)}f.exports=n;var o=(e("./Constraint"),e("./PointToPointConstraint")),d=e("../equations/ConeEquation"),i=e("../equations/RotationalEquation"),t=(e("../equations/ContactEquation"),e("../math/Vec3"));n.prototype=new o,n.constructor=n;new t,new t;n.prototype.update=function(){var e=this.bodyA,f=this.bodyB,n=this.coneEquation,d=this.twistEquation;o.prototype.update.call(this),e.vectorToWorldFrame(this.axisA,n.axisA),f.vectorToWorldFrame(this.axisB,n.axisB),this.axisA.tangents(d.axisA,d.axisA),e.vectorToWorldFrame(d.axisA,d.axisA),this.axisB.tangents(d.axisB,d.axisB),f.vectorToWorldFrame(d.axisB,d.axisB),n.angle=this.angle,d.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,f){function n(e,f,d){d=o.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=f,this.id=n.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(e&&e.wakeUp(),f&&f.wakeUp())}f.exports=n;var o=e("../utils/Utils");n.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},n.prototype.enable=function(){for(var e=this.equations,f=0;f<e.length;f++)e[f].enabled=!0},n.prototype.disable=function(){for(var e=this.equations,f=0;f<e.length;f++)e[f].enabled=!1},n.idCounter=0},{"../utils/Utils":53}],14:[function(e,f){function n(e,f,n,i){o.call(this,e,f),"undefined"==typeof n&&(n=e.position.distanceTo(f.position)),"undefined"==typeof i&&(i=1e6),this.distance=n;var t=this.distanceEquation=new d(e,f);this.equations.push(t),t.minForce=-i,t.maxForce=i}f.exports=n;var o=e("./Constraint"),d=e("../equations/ContactEquation");n.prototype=new o,n.prototype.update=function(){var e=this.bodyA,f=this.bodyB,n=this.distanceEquation,o=.5*this.distance,d=n.ni;f.position.vsub(e.position,d),d.normalize(),d.mult(o,n.ri),d.mult(-o,n.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,f){function n(e,f,n){n=n||{};var l="undefined"!=typeof n.maxForce?n.maxForce:1e6,u=n.pivotA?n.pivotA.clone():new t,p=n.pivotB?n.pivotB.clone():new t;o.call(this,e,u,f,p,l);var s=this.axisA=n.axisA?n.axisA.clone():new t(1,0,0);s.normalize();var y=this.axisB=n.axisB?n.axisB.clone():new t(1,0,0);y.normalize();var c=this.rotationalEquation1=new d(e,f,n),a=this.rotationalEquation2=new d(e,f,n),r=this.motorEquation=new i(e,f,l);r.enabled=!1,this.equations.push(c,a,r)}f.exports=n;var o=(e("./Constraint"),e("./PointToPointConstraint")),d=e("../equations/RotationalEquation"),i=e("../equations/RotationalMotorEquation"),t=(e("../equations/ContactEquation"),e("../math/Vec3"));n.prototype=new o,n.constructor=n,n.prototype.enableMotor=function(){this.motorEquation.enabled=!0},n.prototype.disableMotor=function(){this.motorEquation.enabled=!1},n.prototype.setMotorSpeed=function(e){this.motorEquation.targetVelocity=e},n.prototype.setMotorMaxForce=function(e){this.motorEquation.maxForce=e,this.motorEquation.minForce=-e};var l=new t,u=new t;n.prototype.update=function(){var e=this.bodyA,f=this.bodyB,n=this.motorEquation,d=this.rotationalEquation1,i=this.rotationalEquation2,t=l,p=u,s=this.axisA,y=this.axisB;o.prototype.update.call(this),e.quaternion.vmult(s,t),f.quaternion.vmult(y,p),t.tangents(d.axisA,i.axisA),d.axisB.copy(p),i.axisB.copy(p),this.motorEquation.enabled&&(e.quaternion.vmult(this.axisA,n.axisA),f.quaternion.vmult(this.axisB,n.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,f){function n(e,f,n){n=n||{};var t="undefined"!=typeof n.maxForce?n.maxForce:1e6,l=new i,u=new i,p=new i;e.position.vadd(f.position,p),p.scale(.5,p),f.pointToLocalFrame(p,u),e.pointToLocalFrame(p,l),o.call(this,e,l,f,u,t);var s=this.rotationalEquation1=new d(e,f,n),y=this.rotationalEquation2=new d(e,f,n),c=this.rotationalEquation3=new d(e,f,n);this.equations.push(s,y,c)}f.exports=n;var o=(e("./Constraint"),e("./PointToPointConstraint")),d=e("../equations/RotationalEquation"),i=(e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation"),e("../math/Vec3"));n.prototype=new o,n.constructor=n;new i,new i;n.prototype.update=function(){var e=this.bodyA,f=this.bodyB,n=(this.motorEquation,this.rotationalEquation1),d=this.rotationalEquation2,t=this.rotationalEquation3;o.prototype.update.call(this),e.vectorToWorldFrame(i.UNIT_X,n.axisA),f.vectorToWorldFrame(i.UNIT_Y,n.axisB),e.vectorToWorldFrame(i.UNIT_Y,d.axisA),f.vectorToWorldFrame(i.UNIT_Z,d.axisB),e.vectorToWorldFrame(i.UNIT_Z,t.axisA),f.vectorToWorldFrame(i.UNIT_X,t.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,f){function n(e,f,n,t,l){o.call(this,e,n),l="undefined"!=typeof l?l:1e6,this.pivotA=f?f.clone():new i,this.pivotB=t?t.clone():new i;var u=this.equationX=new d(e,n),p=this.equationY=new d(e,n),s=this.equationZ=new d(e,n);this.equations.push(u,p,s),u.minForce=p.minForce=s.minForce=-l,u.maxForce=p.maxForce=s.maxForce=l,u.ni.set(1,0,0),p.ni.set(0,1,0),s.ni.set(0,0,1)}f.exports=n;var o=e("./Constraint"),d=e("../equations/ContactEquation"),i=e("../math/Vec3");n.prototype=new o,n.prototype.update=function(){var e=this.bodyA,f=this.bodyB,n=this.equationX,o=this.equationY,d=this.equationZ;e.quaternion.vmult(this.pivotA,n.ri),f.quaternion.vmult(this.pivotB,n.rj),o.ri.copy(n.ri),o.rj.copy(n.rj),d.ri.copy(n.ri),d.rj.copy(n.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,f){function n(e,f,n){n=n||{};var i="undefined"!=typeof n.maxForce?n.maxForce:1e6;d.call(this,e,f,-i,i),this.axisA=n.axisA?n.axisA.clone():new o(1,0,0),this.axisB=n.axisB?n.axisB.clone():new o(0,1,0),this.angle="undefined"!=typeof n.angle?n.angle:0}f.exports=n;var o=e("../math/Vec3"),d=(e("../math/Mat3"),e("./Equation"));n.prototype=new d,n.prototype.constructor=n;var i=new o,t=new o;n.prototype.computeB=function(e){var f=this.a,n=this.b,o=this.axisA,d=this.axisB,l=i,u=t,p=this.jacobianElementA,s=this.jacobianElementB;o.cross(d,l),d.cross(o,u),p.rotational.copy(u),s.rotational.copy(l);var y=Math.cos(this.angle)-o.dot(d),c=this.computeGW(),a=this.computeGiMf(),r=-y*f-c*n-e*a;return r}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,f){function n(e,f,n){n="undefined"!=typeof n?n:1e6,o.call(this,e,f,0,n),this.restitution=0,this.ri=new d,this.rj=new d,this.ni=new d}f.exports=n;{var o=e("./Equation"),d=e("../math/Vec3");e("../math/Mat3")}n.prototype=new o,n.prototype.constructor=n;var i=new d,t=new d,l=new d;n.prototype.computeB=function(e){var f=this.a,n=this.b,o=this.bi,d=this.bj,u=this.ri,p=this.rj,s=i,y=t,c=o.velocity,a=o.angularVelocity,r=(o.force,o.torque,d.velocity),w=d.angularVelocity,b=(d.force,d.torque,l),m=this.jacobianElementA,N=this.jacobianElementB,g=this.ni;u.cross(g,s),p.cross(g,y),g.negate(m.spatial),s.negate(m.rotational),N.spatial.copy(g),N.rotational.copy(y),b.copy(d.position),b.vadd(p,b),b.vsub(o.position,b),b.vsub(u,b);var x=g.dot(b),j=this.restitution+1,v=j*r.dot(g)-j*c.dot(g)+w.dot(y)-a.dot(s),A=this.computeGiMf(),C=-x*f-v*n-e*A;return C};var u=new d,p=new d,s=new d,y=new d,c=new d;n.prototype.getImpactVelocityAlongNormal=function(){var e=u,f=p,n=s,o=y,d=c;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,o),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(o,f),e.vsub(f,d),this.ni.dot(d)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,f){function n(e,f,d,i){this.id=n.id++,this.minForce="undefined"==typeof d?-1e6:d,this.maxForce="undefined"==typeof i?1e6:i,this.bi=e,this.bj=f,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new o,this.jacobianElementB=new o,this.enabled=!0,this.setSpookParams(1e7,4,1/60)
}f.exports=n;var o=e("../math/JacobianElement"),d=e("../math/Vec3");n.prototype.constructor=n,n.id=0,n.prototype.setSpookParams=function(e,f,n){var o=f,d=e,i=n;this.a=4/(i*(1+4*o)),this.b=4*o/(1+4*o),this.eps=4/(i*i*d*(1+4*o))},n.prototype.computeB=function(e,f,n){var o=this.computeGW(),d=this.computeGq(),i=this.computeGiMf();return-d*e-o*f-i*n},n.prototype.computeGq=function(){var e=this.jacobianElementA,f=this.jacobianElementB,n=this.bi,o=this.bj,d=n.position,i=o.position;return e.spatial.dot(d)+f.spatial.dot(i)};var i=new d;n.prototype.computeGW=function(){var e=this.jacobianElementA,f=this.jacobianElementB,n=this.bi,o=this.bj,d=n.velocity,t=o.velocity,l=n.angularVelocity||i,u=o.angularVelocity||i;return e.multiplyVectors(d,l)+f.multiplyVectors(t,u)},n.prototype.computeGWlambda=function(){var e=this.jacobianElementA,f=this.jacobianElementB,n=this.bi,o=this.bj,d=n.vlambda,t=o.vlambda,l=n.wlambda||i,u=o.wlambda||i;return e.multiplyVectors(d,l)+f.multiplyVectors(t,u)};var t=new d,l=new d,u=new d,p=new d;n.prototype.computeGiMf=function(){var e=this.jacobianElementA,f=this.jacobianElementB,n=this.bi,o=this.bj,d=n.force,i=n.torque,s=o.force,y=o.torque,c=n.invMassSolve,a=o.invMassSolve;return n.invInertiaWorldSolve?n.invInertiaWorldSolve.vmult(i,u):u.set(0,0,0),o.invInertiaWorldSolve?o.invInertiaWorldSolve.vmult(y,p):p.set(0,0,0),d.mult(c,t),s.mult(a,l),e.multiplyVectors(t,u)+f.multiplyVectors(l,p)};var s=new d;n.prototype.computeGiMGt=function(){var e=this.jacobianElementA,f=this.jacobianElementB,n=this.bi,o=this.bj,d=n.invMassSolve,i=o.invMassSolve,t=n.invInertiaWorldSolve,l=o.invInertiaWorldSolve,u=d+i;return t&&(t.vmult(e.rotational,s),u+=s.dot(e.rotational)),l&&(l.vmult(f.rotational,s),u+=s.dot(f.rotational)),u};{var y=new d;new d,new d,new d,new d,new d}n.prototype.addToWlambda=function(e){var f=this.jacobianElementA,n=this.jacobianElementB,o=this.bi,d=this.bj,i=y;f.spatial.mult(o.invMassSolve*e,i),o.vlambda.vadd(i,o.vlambda),n.spatial.mult(d.invMassSolve*e,i),d.vlambda.vadd(i,d.vlambda),o.invInertiaWorldSolve&&(o.invInertiaWorldSolve.vmult(f.rotational,i),i.mult(e,i),o.wlambda.vadd(i,o.wlambda)),d.invInertiaWorldSolve&&(d.invInertiaWorldSolve.vmult(n.rotational,i),i.mult(e,i),d.wlambda.vadd(i,d.wlambda))},n.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,f){function n(e,f,n){o.call(this,e,f,-n,n),this.ri=new d,this.rj=new d,this.t=new d}f.exports=n;{var o=e("./Equation"),d=e("../math/Vec3");e("../math/Mat3")}n.prototype=new o,n.prototype.constructor=n;var i=new d,t=new d;n.prototype.computeB=function(e){var f=(this.a,this.b),n=(this.bi,this.bj,this.ri),o=this.rj,d=i,l=t,u=this.t;n.cross(u,d),o.cross(u,l);var p=this.jacobianElementA,s=this.jacobianElementB;u.negate(p.spatial),d.negate(p.rotational),s.spatial.copy(u),s.rotational.copy(l);var y=this.computeGW(),c=this.computeGiMf(),a=-y*f-e*c;return a}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,f){function n(e,f,n){n=n||{};var i="undefined"!=typeof n.maxForce?n.maxForce:1e6;d.call(this,e,f,-i,i),this.axisA=n.axisA?n.axisA.clone():new o(1,0,0),this.axisB=n.axisB?n.axisB.clone():new o(0,1,0),this.maxAngle=Math.PI/2}f.exports=n;var o=e("../math/Vec3"),d=(e("../math/Mat3"),e("./Equation"));n.prototype=new d,n.prototype.constructor=n;var i=new o,t=new o;n.prototype.computeB=function(e){var f=this.a,n=this.b,o=this.axisA,d=this.axisB,l=i,u=t,p=this.jacobianElementA,s=this.jacobianElementB;o.cross(d,l),d.cross(o,u),p.rotational.copy(u),s.rotational.copy(l);var y=Math.cos(this.maxAngle)-o.dot(d),c=this.computeGW(),a=this.computeGiMf(),r=-y*f-c*n-e*a;return r}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,f){function n(e,f,n){n="undefined"!=typeof n?n:1e6,d.call(this,e,f,-n,n),this.axisA=new o,this.axisB=new o,this.targetVelocity=0}f.exports=n;var o=e("../math/Vec3"),d=(e("../math/Mat3"),e("./Equation"));n.prototype=new d,n.prototype.constructor=n,n.prototype.computeB=function(e){var f=(this.a,this.b),n=(this.bi,this.bj,this.axisA),o=this.axisB,d=this.jacobianElementA,i=this.jacobianElementB;d.rotational.copy(n),o.negate(i.rotational);var t=this.computeGW()-this.targetVelocity,l=this.computeGiMf(),u=-t*f-e*l;return u}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,f){function n(e,f,d){d=o.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=n.idCounter++,this.materials=[e,f],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}var o=e("../utils/Utils");f.exports=n,n.idCounter=0},{"../utils/Utils":53}],25:[function(e,f){function n(e){var f="";e=e||{},"string"==typeof e?(f=e,e={}):"object"==typeof e&&(f=""),this.name=f,this.id=n.idCounter++,this.friction="undefined"!=typeof e.friction?e.friction:-1,this.restitution="undefined"!=typeof e.restitution?e.restitution:-1}f.exports=n,n.idCounter=0},{}],26:[function(e,f){function n(){this.spatial=new o,this.rotational=new o}f.exports=n;var o=e("./Vec3");n.prototype.multiplyElement=function(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)},n.prototype.multiplyVectors=function(e,f){return e.dot(this.spatial)+f.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,f){function n(e){this.elements=e?e:[0,0,0,0,0,0,0,0,0]}f.exports=n;var o=e("./Vec3");n.prototype.identity=function(){var e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1},n.prototype.setZero=function(){var e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0},n.prototype.setTrace=function(e){var f=this.elements;f[0]=e.x,f[4]=e.y,f[8]=e.z},n.prototype.getTrace=function(e){var e=e||new o,f=this.elements;e.x=f[0],e.y=f[4],e.z=f[8]},n.prototype.vmult=function(e,f){f=f||new o;var n=this.elements,d=e.x,i=e.y,t=e.z;return f.x=n[0]*d+n[1]*i+n[2]*t,f.y=n[3]*d+n[4]*i+n[5]*t,f.z=n[6]*d+n[7]*i+n[8]*t,f},n.prototype.smult=function(e){for(var f=0;f<this.elements.length;f++)this.elements[f]*=e},n.prototype.mmult=function(e,f){for(var o=f||new n,d=0;3>d;d++)for(var i=0;3>i;i++){for(var t=0,l=0;3>l;l++)t+=e.elements[d+3*l]*this.elements[l+3*i];o.elements[d+3*i]=t}return o},n.prototype.scale=function(e,f){f=f||new n;for(var o=this.elements,d=f.elements,i=0;3!==i;i++)d[3*i+0]=e.x*o[3*i+0],d[3*i+1]=e.y*o[3*i+1],d[3*i+2]=e.z*o[3*i+2];return f},n.prototype.solve=function(e,f){f=f||new o;for(var n=3,d=4,i=[],t=0;n*d>t;t++)i.push(0);var t,l;for(t=0;3>t;t++)for(l=0;3>l;l++)i[t+d*l]=this.elements[t+3*l];i[3]=e.x,i[7]=e.y,i[11]=e.z;var u,p,s=3,y=s,c=4;do{if(t=y-s,0===i[t+d*t])for(l=t+1;y>l;l++)if(0!==i[t+d*l]){u=c;do p=c-u,i[p+d*t]+=i[p+d*l];while(--u);break}if(0!==i[t+d*t])for(l=t+1;y>l;l++){var a=i[t+d*l]/i[t+d*t];u=c;do p=c-u,i[p+d*l]=t>=p?0:i[p+d*l]-i[p+d*t]*a;while(--u)}}while(--s);if(f.z=i[2*d+3]/i[2*d+2],f.y=(i[1*d+3]-i[1*d+2]*f.z)/i[1*d+1],f.x=(i[0*d+3]-i[0*d+2]*f.z-i[0*d+1]*f.y)/i[0*d+0],isNaN(f.x)||isNaN(f.y)||isNaN(f.z)||1/0===f.x||1/0===f.y||1/0===f.z)throw"Could not solve equation! Got x=["+f.toString()+"], b=["+e.toString()+"], A=["+this.toString()+"]";return f},n.prototype.e=function(e,f,n){return void 0===n?this.elements[f+3*e]:void(this.elements[f+3*e]=n)},n.prototype.copy=function(e){for(var f=0;f<e.elements.length;f++)this.elements[f]=e.elements[f];return this},n.prototype.toString=function(){for(var e="",f=",",n=0;9>n;n++)e+=this.elements[n]+f;return e},n.prototype.reverse=function(e){e=e||new n;for(var f=3,o=6,d=[],i=0;f*o>i;i++)d.push(0);var i,t;for(i=0;3>i;i++)for(t=0;3>t;t++)d[i+o*t]=this.elements[i+3*t];d[3]=1,d[9]=0,d[15]=0,d[4]=0,d[10]=1,d[16]=0,d[5]=0,d[11]=0,d[17]=1;var l,u,p=3,s=p,y=o;do{if(i=s-p,0===d[i+o*i])for(t=i+1;s>t;t++)if(0!==d[i+o*t]){l=y;do u=y-l,d[u+o*i]+=d[u+o*t];while(--l);break}if(0!==d[i+o*i])for(t=i+1;s>t;t++){var c=d[i+o*t]/d[i+o*i];l=y;do u=y-l,d[u+o*t]=i>=u?0:d[u+o*t]-d[u+o*i]*c;while(--l)}}while(--p);i=2;do{t=i-1;do{var c=d[i+o*t]/d[i+o*i];l=o;do u=o-l,d[u+o*t]=d[u+o*t]-d[u+o*i]*c;while(--l)}while(t--)}while(--i);i=2;do{var c=1/d[i+o*i];l=o;do u=o-l,d[u+o*i]=d[u+o*i]*c;while(--l)}while(i--);i=2;do{t=2;do{if(u=d[f+t+o*i],isNaN(u)||1/0===u)throw"Could not reverse! A=["+this.toString()+"]";e.e(i,t,u)}while(t--)}while(i--);return e},n.prototype.setRotationFromQuaternion=function(e){var f=e.x,n=e.y,o=e.z,d=e.w,i=f+f,t=n+n,l=o+o,u=f*i,p=f*t,s=f*l,y=n*t,c=n*l,a=o*l,r=d*i,w=d*t,b=d*l,m=this.elements;return m[0]=1-(y+a),m[1]=p-b,m[2]=s+w,m[3]=p+b,m[4]=1-(u+a),m[5]=c-r,m[6]=s-w,m[7]=c+r,m[8]=1-(u+y),this},n.prototype.transpose=function(e){e=e||new n;for(var f=e.elements,o=this.elements,d=0;3!==d;d++)for(var i=0;3!==i;i++)f[3*d+i]=o[3*i+d];return e}},{"./Vec3":30}],28:[function(e,f){function n(e,f,n,o){this.x=void 0!==e?e:0,this.y=void 0!==f?f:0,this.z=void 0!==n?n:0,this.w=void 0!==o?o:1}f.exports=n;var o=e("./Vec3");n.prototype.set=function(e,f,n,o){this.x=e,this.y=f,this.z=n,this.w=o},n.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},n.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},n.prototype.setFromAxisAngle=function(e,f){var n=Math.sin(.5*f);this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(.5*f)},n.prototype.toAxisAngle=function(e){e=e||new o,this.normalize();var f=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return.001>n?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,f]};var d=new o,i=new o;n.prototype.setFromVectors=function(e,f){if(e.isAntiparallelTo(f)){var n=d,o=i;e.tangents(n,o),this.setFromAxisAngle(n,Math.PI)}else{var t=e.cross(f);this.x=t.x,this.y=t.y,this.z=t.z,this.w=Math.sqrt(Math.pow(e.norm(),2)*Math.pow(f.norm(),2))+e.dot(f),this.normalize()}};var t=new o,l=new o,u=new o;n.prototype.mult=function(e,f){f=f||new n;var o=this.w,d=t,i=l,p=u;return d.set(this.x,this.y,this.z),i.set(e.x,e.y,e.z),f.w=o*e.w-d.dot(i),d.cross(i,p),f.x=o*i.x+e.w*d.x+p.x,f.y=o*i.y+e.w*d.y+p.y,f.z=o*i.z+e.w*d.z+p.z,f},n.prototype.inverse=function(e){var f=this.x,o=this.y,d=this.z,i=this.w;e=e||new n,this.conjugate(e);var t=1/(f*f+o*o+d*d+i*i);return e.x*=t,e.y*=t,e.z*=t,e.w*=t,e},n.prototype.conjugate=function(e){return e=e||new n,e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e},n.prototype.normalize=function(){var e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);0===e?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e)},n.prototype.normalizeFast=function(){var e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;0===e?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e)},n.prototype.vmult=function(e,f){f=f||new o;var n=e.x,d=e.y,i=e.z,t=this.x,l=this.y,u=this.z,p=this.w,s=p*n+l*i-u*d,y=p*d+u*n-t*i,c=p*i+t*d-l*n,a=-t*n-l*d-u*i;return f.x=s*p+a*-t+y*-u-c*-l,f.y=y*p+a*-l+c*-t-s*-u,f.z=c*p+a*-u+s*-l-y*-t,f},n.prototype.copy=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},n.prototype.toEuler=function(e,f){f=f||"YZX";var n,o,d,i=this.x,t=this.y,l=this.z,u=this.w;switch(f){case"YZX":var p=i*t+l*u;if(p>.499&&(n=2*Math.atan2(i,u),o=Math.PI/2,d=0),-.499>p&&(n=-2*Math.atan2(i,u),o=-Math.PI/2,d=0),isNaN(n)){var s=i*i,y=t*t,c=l*l;n=Math.atan2(2*t*u-2*i*l,1-2*y-2*c),o=Math.asin(2*p),d=Math.atan2(2*i*u-2*t*l,1-2*s-2*c)}break;default:throw new Error("Euler order "+f+" not supported yet.")}e.y=n,e.z=o,e.x=d},n.prototype.setFromEuler=function(e,f,n,o){o=o||"XYZ";var d=Math.cos(e/2),i=Math.cos(f/2),t=Math.cos(n/2),l=Math.sin(e/2),u=Math.sin(f/2),p=Math.sin(n/2);return"XYZ"===o?(this.x=l*i*t+d*u*p,this.y=d*u*t-l*i*p,this.z=d*i*p+l*u*t,this.w=d*i*t-l*u*p):"YXZ"===o?(this.x=l*i*t+d*u*p,this.y=d*u*t-l*i*p,this.z=d*i*p-l*u*t,this.w=d*i*t+l*u*p):"ZXY"===o?(this.x=l*i*t-d*u*p,this.y=d*u*t+l*i*p,this.z=d*i*p+l*u*t,this.w=d*i*t-l*u*p):"ZYX"===o?(this.x=l*i*t-d*u*p,this.y=d*u*t+l*i*p,this.z=d*i*p-l*u*t,this.w=d*i*t+l*u*p):"YZX"===o?(this.x=l*i*t+d*u*p,this.y=d*u*t+l*i*p,this.z=d*i*p-l*u*t,this.w=d*i*t-l*u*p):"XZY"===o&&(this.x=l*i*t-d*u*p,this.y=d*u*t-l*i*p,this.z=d*i*p+l*u*t,this.w=d*i*t+l*u*p),this},n.prototype.clone=function(){return new n(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,f){function n(e){e=e||{},this.position=new o,e.position&&this.position.copy(e.position),this.quaternion=new d,e.quaternion&&this.quaternion.copy(e.quaternion)}var o=e("./Vec3"),d=e("./Quaternion");f.exports=n;var i=new d;n.pointToLocalFrame=function(e,f,n,d){var d=d||new o;return n.vsub(e,d),f.conjugate(i),i.vmult(d,d),d},n.prototype.pointToLocal=function(e,f){return n.pointToLocalFrame(this.position,this.quaternion,e,f)},n.pointToWorldFrame=function(e,f,n,d){var d=d||new o;return f.vmult(n,d),d.vadd(e,d),d},n.prototype.pointToWorld=function(e,f){return n.pointToWorldFrame(this.position,this.quaternion,e,f)},n.prototype.vectorToWorldFrame=function(e,f){var f=f||new o;return this.quaternion.vmult(e,f),f},n.vectorToWorldFrame=function(e,f,n){return e.vmult(f,n),n},n.vectorToLocalFrame=function(e,f,n,d){var d=d||new o;return f.w*=-1,f.vmult(n,d),f.w*=-1,d}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,f){function n(e,f,n){this.x=e||0,this.y=f||0,this.z=n||0}f.exports=n;var o=e("./Mat3");n.ZERO=new n(0,0,0),n.UNIT_X=new n(1,0,0),n.UNIT_Y=new n(0,1,0),n.UNIT_Z=new n(0,0,1),n.prototype.cross=function(e,f){var o=e.x,d=e.y,i=e.z,t=this.x,l=this.y,u=this.z;return f=f||new n,f.x=l*i-u*d,f.y=u*o-t*i,f.z=t*d-l*o,f},n.prototype.set=function(e,f,n){return this.x=e,this.y=f,this.z=n,this},n.prototype.setZero=function(){this.x=this.y=this.z=0},n.prototype.vadd=function(e,f){return f?(f.x=e.x+this.x,f.y=e.y+this.y,f.z=e.z+this.z,void 0):new n(this.x+e.x,this.y+e.y,this.z+e.z)},n.prototype.vsub=function(e,f){return f?(f.x=this.x-e.x,f.y=this.y-e.y,f.z=this.z-e.z,void 0):new n(this.x-e.x,this.y-e.y,this.z-e.z)},n.prototype.crossmat=function(){return new o([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},n.prototype.normalize=function(){var e=this.x,f=this.y,n=this.z,o=Math.sqrt(e*e+f*f+n*n);if(o>0){var d=1/o;this.x*=d,this.y*=d,this.z*=d}else this.x=0,this.y=0,this.z=0;return o},n.prototype.unit=function(e){e=e||new n;var f=this.x,o=this.y,d=this.z,i=Math.sqrt(f*f+o*o+d*d);return i>0?(i=1/i,e.x=f*i,e.y=o*i,e.z=d*i):(e.x=1,e.y=0,e.z=0),e},n.prototype.norm=function(){var e=this.x,f=this.y,n=this.z;return Math.sqrt(e*e+f*f+n*n)},n.prototype.length=n.prototype.norm,n.prototype.norm2=function(){return this.dot(this)},n.prototype.lengthSquared=n.prototype.norm2,n.prototype.distanceTo=function(e){var f=this.x,n=this.y,o=this.z,d=e.x,i=e.y,t=e.z;return Math.sqrt((d-f)*(d-f)+(i-n)*(i-n)+(t-o)*(t-o))},n.prototype.distanceSquared=function(e){var f=this.x,n=this.y,o=this.z,d=e.x,i=e.y,t=e.z;return(d-f)*(d-f)+(i-n)*(i-n)+(t-o)*(t-o)},n.prototype.mult=function(e,f){f=f||new n;var o=this.x,d=this.y,i=this.z;return f.x=e*o,f.y=e*d,f.z=e*i,f},n.prototype.scale=n.prototype.mult,n.prototype.dot=function(e){return this.x*e.x+this.y*e.y+this.z*e.z},n.prototype.isZero=function(){return 0===this.x&&0===this.y&&0===this.z},n.prototype.negate=function(e){return e=e||new n,e.x=-this.x,e.y=-this.y,e.z=-this.z,e};var d=new n,i=new n;n.prototype.tangents=function(e,f){var n=this.norm();if(n>0){var o=d,t=1/n;o.set(this.x*t,this.y*t,this.z*t);var l=i;Math.abs(o.x)<.9?(l.set(1,0,0),o.cross(l,e)):(l.set(0,1,0),o.cross(l,e)),o.cross(e,f)}else e.set(1,0,0),f.set(0,1,0)},n.prototype.toString=function(){return this.x+","+this.y+","+this.z},n.prototype.toArray=function(){return[this.x,this.y,this.z]},n.prototype.copy=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},n.prototype.lerp=function(e,f,n){var o=this.x,d=this.y,i=this.z;n.x=o+(e.x-o)*f,n.y=d+(e.y-d)*f,n.z=i+(e.z-i)*f},n.prototype.almostEquals=function(e,f){return void 0===f&&(f=1e-6),Math.abs(this.x-e.x)>f||Math.abs(this.y-e.y)>f||Math.abs(this.z-e.z)>f?!1:!0},n.prototype.almostZero=function(e){return void 0===e&&(e=1e-6),Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e?!1:!0};var t=new n;n.prototype.isAntiparallelTo=function(e,f){return this.negate(t),t.almostEquals(e,f)},n.prototype.clone=function(){return new n(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,f){function n(e){e=e||{},o.apply(this),this.id=n.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new d,this.collisionFilterGroup="number"==typeof e.collisionFilterGroup?e.collisionFilterGroup:1,this.collisionFilterMask="number"==typeof e.collisionFilterMask?e.collisionFilterMask:1,this.collisionResponse=!0,this.position=new d,e.position&&this.position.copy(e.position),this.previousPosition=new d,this.initPosition=new d,this.velocity=new d,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new d,this.force=new d;var f="number"==typeof e.mass?e.mass:0;this.mass=f,this.invMass=f>0?1/f:0,this.material=e.material||null,this.linearDamping="number"==typeof e.linearDamping?e.linearDamping:.01,this.type=0>=f?n.STATIC:n.DYNAMIC,typeof e.type==typeof n.STATIC&&(this.type=e.type),this.allowSleep="undefined"!=typeof e.allowSleep?e.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit="undefined"!=typeof e.sleepSpeedLimit?e.sleepSpeedLimit:.1,this.sleepTimeLimit="undefined"!=typeof e.sleepTimeLimit?e.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new d,this.quaternion=new t,e.quaternion&&this.quaternion.copy(e.quaternion),this.initQuaternion=new t,this.angularVelocity=new d,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new d,this.interpolatedPosition=new d,this.interpolatedQuaternion=new t,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new d,this.invInertia=new d,this.invInertiaWorld=new i,this.invMassSolve=0,this.invInertiaSolve=new d,this.invInertiaWorldSolve=new i,this.fixedRotation="undefined"!=typeof e.fixedRotation?e.fixedRotation:!1,this.angularDamping="undefined"!=typeof e.angularDamping?e.angularDamping:.01,this.aabb=new l,this.aabbNeedsUpdate=!0,this.wlambda=new d,e.shape&&this.addShape(e.shape),this.updateMassProperties()}f.exports=n;var o=e("../utils/EventTarget"),d=(e("../shapes/Shape"),e("../math/Vec3")),i=e("../math/Mat3"),t=e("../math/Quaternion"),l=(e("../material/Material"),e("../collision/AABB")),u=e("../shapes/Box");n.prototype=new o,n.prototype.constructor=n,n.DYNAMIC=1,n.STATIC=2,n.KINEMATIC=4,n.AWAKE=0,n.SLEEPY=1,n.SLEEPING=2,n.idCounter=0,n.prototype.wakeUp=function(){var e=this.sleepState;this.sleepState=0,e===n.SLEEPING&&this.dispatchEvent({type:"wakeup"})},n.prototype.sleep=function(){this.sleepState=n.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},n.sleepyEvent={type:"sleepy"},n.sleepEvent={type:"sleep"},n.prototype.sleepTick=function(e){if(this.allowSleep){var f=this.sleepState,o=this.velocity.norm2()+this.angularVelocity.norm2(),d=Math.pow(this.sleepSpeedLimit,2);f===n.AWAKE&&d>o?(this.sleepState=n.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(n.sleepyEvent)):f===n.SLEEPY&&o>d?this.wakeUp():f===n.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(n.sleepEvent))}},n.prototype.updateSolveMassProperties=function(){this.sleepState===n.SLEEPING||this.type===n.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},n.prototype.pointToLocalFrame=function(e,f){var f=f||new d;return e.vsub(this.position,f),this.quaternion.conjugate().vmult(f,f),f},n.prototype.vectorToLocalFrame=function(e,f){var f=f||new d;return this.quaternion.conjugate().vmult(e,f),f},n.prototype.pointToWorldFrame=function(e,f){var f=f||new d;return this.quaternion.vmult(e,f),f.vadd(this.position,f),f},n.prototype.vectorToWorldFrame=function(e,f){var f=f||new d;return this.quaternion.vmult(e,f),f};var p=new d,s=new t;n.prototype.addShape=function(e,f,n){var o=new d,i=new t;return f&&o.copy(f),n&&i.copy(n),this.shapes.push(e),this.shapeOffsets.push(o),this.shapeOrientations.push(i),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},n.prototype.updateBoundingRadius=function(){for(var e=this.shapes,f=this.shapeOffsets,n=e.length,o=0,d=0;d!==n;d++){var i=e[d];i.updateBoundingSphereRadius();var t=f[d].norm(),l=i.boundingSphereRadius;t+l>o&&(o=t+l)}this.boundingRadius=o};var y=new l;n.prototype.computeAABB=function(){for(var e=this.shapes,f=this.shapeOffsets,n=this.shapeOrientations,o=e.length,d=p,i=s,t=this.quaternion,l=this.aabb,u=y,c=0;c!==o;c++){var a=e[c];n[c].mult(t,i),i.vmult(f[c],d),d.vadd(this.position,d),a.calculateWorldAABB(d,i,u.lowerBound,u.upperBound),0===c?l.copy(u):l.extend(u)}this.aabbNeedsUpdate=!1};{var c=new i,a=new i;new i}n.prototype.updateInertiaWorld=function(e){var f=this.invInertia;if(f.x!==f.y||f.y!==f.z||e){var n=c,o=a;n.setRotationFromQuaternion(this.quaternion),n.transpose(o),n.scale(f,n),n.mmult(o,this.invInertiaWorld)}else;};var r=new d,w=new d;n.prototype.applyForce=function(e,f){if(this.type===n.DYNAMIC){var o=r;f.vsub(this.position,o);var d=w;o.cross(e,d),this.force.vadd(e,this.force),this.torque.vadd(d,this.torque)}};var b=new d,m=new d;n.prototype.applyLocalForce=function(e,f){if(this.type===n.DYNAMIC){var o=b,d=m;this.vectorToWorldFrame(e,o),this.pointToWorldFrame(f,d),this.applyForce(o,d)}};var N=new d,g=new d,x=new d;n.prototype.applyImpulse=function(e,f){if(this.type===n.DYNAMIC){var o=N;f.vsub(this.position,o);var d=g;d.copy(e),d.mult(this.invMass,d),this.velocity.vadd(d,this.velocity);var i=x;o.cross(e,i),this.invInertiaWorld.vmult(i,i),this.angularVelocity.vadd(i,this.angularVelocity)}};var j=new d,v=new d;n.prototype.applyLocalImpulse=function(e,f){if(this.type===n.DYNAMIC){var o=j,d=v;this.vectorToWorldFrame(e,o),this.pointToWorldFrame(f,d),this.applyImpulse(o,d)}};var A=new d;n.prototype.updateMassProperties=function(){var e=A;this.invMass=this.mass>0?1/this.mass:0;var f=this.inertia,n=this.fixedRotation;this.computeAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(e,this.mass,f),this.invInertia.set(f.x>0&&!n?1/f.x:0,f.y>0&&!n?1/f.y:0,f.z>0&&!n?1/f.z:0),this.updateInertiaWorld(!0)},n.prototype.getVelocityAtWorldPoint=function(e,f){var n=new d;return e.vsub(this.position,n),this.angularVelocity.cross(n,f),this.velocity.vadd(f,f),f}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,f){function n(e){this.chassisBody=e.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis="undefined"!=typeof e.indexRightAxis?e.indexRightAxis:1,this.indexForwardAxis="undefined"!=typeof e.indexForwardAxis?e.indexForwardAxis:0,this.indexUpAxis="undefined"!=typeof e.indexUpAxis?e.indexUpAxis:2}function o(e,f,n,o,i){var t=0,l=n,u=x,p=j,s=v;e.getVelocityAtWorldPoint(l,u),f.getVelocityAtWorldPoint(l,p),u.vsub(p,s);var y=o.dot(s),c=d(e,n,o),a=d(f,n,o),r=1,w=r/(c+a);return t=-y*w,t>i&&(t=i),-i>t&&(t=-i),t}function d(e,f,n){var o=A,d=C,i=O,t=h;return f.vsub(e.position,o),o.cross(n,d),e.invInertiaWorld.vmult(d,t),t.cross(o,i),e.invMass+n.dot(i)}function i(e,f,n,o,d,i){var t=d.norm2();if(t>1.1)return 0;var l=k,u=q,p=z;e.getVelocityAtWorldPoint(f,l),n.getVelocityAtWorldPoint(o,u),l.vsub(u,p);var s=d.dot(p),y=.2,c=1/(e.invMass+n.invMass),i=-y*s*c;return i}var t=(e("./Body"),e("../math/Vec3")),l=e("../math/Quaternion"),u=(e("../collision/RaycastResult"),e("../collision/Ray")),p=e("../objects/WheelInfo");f.exports=n;{var s=(new t,new t,new t,new t),y=new t,c=new t;new u}n.prototype.addWheel=function(e){e=e||{};var f=new p(e),n=this.wheelInfos.length;return this.wheelInfos.push(f),n},n.prototype.setSteeringValue=function(e,f){var n=this.wheelInfos[f];n.steering=e};new t;n.prototype.applyEngineForce=function(e,f){this.wheelInfos[f].engineForce=e},n.prototype.setBrake=function(e,f){this.wheelInfos[f].brake=e},n.prototype.addToWorld=function(e){this.constraints;e.add(this.chassisBody);var f=this;this.preStepCallback=function(){f.updateVehicle(e.dt)},e.addEventListener("preStep",this.preStepCallback),this.world=e},n.prototype.getVehicleAxisWorld=function(e,f){f.set(0===e?1:0,1===e?1:0,2===e?1:0),this.chassisBody.vectorToWorldFrame(f,f)},n.prototype.updateVehicle=function(e){for(var f=this.wheelInfos,n=f.length,o=this.chassisBody,d=0;n>d;d++)this.updateWheelTransform(d);this.currentVehicleSpeedKmHour=3.6*o.velocity.norm();var i=new t;this.getVehicleAxisWorld(this.indexForwardAxis,i),i.dot(o.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var d=0;n>d;d++)this.castRay(f[d]);this.updateSuspension(e);for(var l=new t,u=new t,d=0;n>d;d++){var p=f[d],s=p.suspensionForce;s>p.maxSuspensionForce&&(s=p.maxSuspensionForce),p.raycastResult.hitNormalWorld.scale(s*e,l),p.raycastResult.hitPointWorld.vsub(o.position,u),o.applyImpulse(l,p.raycastResult.hitPointWorld)}this.updateFriction(e);var y=new t,c=new t,a=new t;for(d=0;n>d;d++){var p=f[d];o.getVelocityAtWorldPoint(p.chassisConnectionPointWorld,a);var r=1;switch(this.indexUpAxis){case 1:r=-1}if(p.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,c);var w=c.dot(p.raycastResult.hitNormalWorld);p.raycastResult.hitNormalWorld.scale(w,y),c.vsub(y,c);var b=c.dot(a);p.deltaRotation=r*b*e/p.radius}!p.sliding&&p.isInContact||0===p.engineForce||!p.useCustomSlidingRotationalSpeed||(p.deltaRotation=(p.engineForce>0?1:-1)*p.customSlidingRotationalSpeed*e),Math.abs(p.brake)>Math.abs(p.engineForce)&&(p.deltaRotation=0),p.rotation+=p.deltaRotation,p.deltaRotation*=.99}},n.prototype.updateSuspension=function(){for(var e=this.chassisBody,f=e.mass,n=this.wheelInfos,o=n.length,d=0;o>d;d++){var i=n[d];if(i.isInContact){var t,l=i.suspensionRestLength,u=i.suspensionLength,p=l-u;t=i.suspensionStiffness*p*i.clippedInvContactDotSuspension;var s,y=i.suspensionRelativeVelocity;s=0>y?i.dampingCompression:i.dampingRelaxation,t-=s*y,i.suspensionForce=t*f,i.suspensionForce<0&&(i.suspensionForce=0)}else i.suspensionForce=0}},n.prototype.removeFromWorld=function(e){this.constraints;e.remove(this.chassisBody),e.removeEventListener("preStep",this.preStepCallback),this.world=null};var a=new t,r=new t;n.prototype.castRay=function(e){var f=a,n=r;this.updateWheelTransformWorld(e);var o=this.chassisBody,d=-1,i=e.suspensionRestLength+e.radius;e.directionWorld.scale(i,f);var l=e.chassisConnectionPointWorld;l.vadd(f,n);var u=e.raycastResult;u.reset();var p=o.collisionResponse;o.collisionResponse=!1,this.world.rayTest(l,n,u),o.collisionResponse=p;var s=u.body;if(e.raycastResult.groundObject=0,s){d=u.distance,e.raycastResult.hitNormalWorld=u.hitNormalWorld,e.isInContact=!0;var y=u.distance;e.suspensionLength=y-e.radius;var c=e.suspensionRestLength-e.maxSuspensionTravel,w=e.suspensionRestLength+e.maxSuspensionTravel;e.suspensionLength<c&&(e.suspensionLength=c),e.suspensionLength>w&&(e.suspensionLength=w,e.raycastResult.reset());var b=e.raycastResult.hitNormalWorld.dot(e.directionWorld),m=new t;o.getVelocityAtWorldPoint(e.raycastResult.hitPointWorld,m);var N=e.raycastResult.hitNormalWorld.dot(m);if(b>=-.1)e.suspensionRelativeVelocity=0,e.clippedInvContactDotSuspension=10;else{var g=-1/b;e.suspensionRelativeVelocity=N*g,e.clippedInvContactDotSuspension=g}}else e.suspensionLength=e.suspensionRestLength+0*e.maxSuspensionTravel,e.suspensionRelativeVelocity=0,e.directionWorld.scale(-1,e.raycastResult.hitNormalWorld),e.clippedInvContactDotSuspension=1;return d},n.prototype.updateWheelTransformWorld=function(e){e.isInContact=!1;var f=this.chassisBody;f.pointToWorldFrame(e.chassisConnectionPointLocal,e.chassisConnectionPointWorld),f.vectorToWorldFrame(e.directionLocal,e.directionWorld),f.vectorToWorldFrame(e.axleLocal,e.axleWorld)},n.prototype.updateWheelTransform=function(e){var f=s,n=y,o=c,d=this.wheelInfos[e];this.updateWheelTransformWorld(d),d.directionLocal.scale(-1,f),n.copy(d.axleLocal),f.cross(n,o),o.normalize(),n.normalize();var i=d.steering,t=new l;t.setFromAxisAngle(f,i);var u=new l;u.setFromAxisAngle(n,d.rotation);var p=d.worldTransform.quaternion;this.chassisBody.quaternion.mult(t,p),p.mult(u,p),p.normalize();var a=d.worldTransform.position;a.copy(d.directionWorld),a.scale(d.suspensionLength,a),a.vadd(d.chassisConnectionPointWorld,a)};var w=[new t(1,0,0),new t(0,1,0),new t(0,0,1)];n.prototype.getWheelTransformWorld=function(e){return this.wheelInfos[e].worldTransform};var b=new t,m=[],N=[],g=1;n.prototype.updateFriction=function(e){for(var f=b,n=this.wheelInfos,d=n.length,l=this.chassisBody,u=N,p=m,s=0,y=0;d>y;y++){var c=n[y],a=c.raycastResult.body;a&&s++,c.sideImpulse=0,c.forwardImpulse=0,u[y]||(u[y]=new t),p[y]||(p[y]=new t)}for(var y=0;d>y;y++){var c=n[y],a=c.raycastResult.body;if(a){var r=p[y],x=this.getWheelTransformWorld(y);x.vectorToWorldFrame(w[this.indexRightAxis],r);var j=c.raycastResult.hitNormalWorld,v=r.dot(j);j.scale(v,f),r.vsub(f,r),r.normalize(),j.cross(r,u[y]),u[y].normalize(),c.sideImpulse=i(l,c.raycastResult.hitPointWorld,a,c.raycastResult.hitPointWorld,r),c.sideImpulse*=g}}var A=1,C=.5;this.sliding=!1;for(var y=0;d>y;y++){var c=n[y],a=c.raycastResult.body,O=0;if(c.slipInfo=1,a){var h=0,k=c.brake?c.brake:h;O=o(l,a,c.raycastResult.hitPointWorld,u[y],k),O+=c.engineForce*e;var q=k/O;c.slipInfo*=q}if(c.forwardImpulse=0,c.skidInfo=1,a){c.skidInfo=1;var z=c.suspensionForce*e*c.frictionSlip,B=z,D=z*B;c.forwardImpulse=O;var E=c.forwardImpulse*C,F=c.sideImpulse*A,G=E*E+F*F;if(c.sliding=!1,G>D){this.sliding=!0,c.sliding=!0;var q=z/Math.sqrt(G);c.skidInfo*=q}}}if(this.sliding)for(var y=0;d>y;y++){var c=n[y];0!==c.sideImpulse&&c.skidInfo<1&&(c.forwardImpulse*=c.skidInfo,c.sideImpulse*=c.skidInfo)}for(var y=0;d>y;y++){var c=n[y],H=new t;if(H.copy(c.raycastResult.hitPointWorld),0!==c.forwardImpulse){var I=new t;u[y].scale(c.forwardImpulse,I),l.applyImpulse(I,H)}if(0!==c.sideImpulse){var a=c.raycastResult.body,J=new t;J.copy(c.raycastResult.hitPointWorld);var K=new t;p[y].scale(c.sideImpulse,K),l.pointToLocalFrame(H,H),H["xyz"[this.indexUpAxis]]*=c.rollInfluence,l.pointToWorldFrame(H,H),l.applyImpulse(K,H),K.scale(-1,K),a.applyImpulse(K,J)}}};var x=new t,j=new t,v=new t,A=new t,C=new t,O=new t,h=new t,k=new t,q=new t,z=new t},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,f){function n(e){if(this.wheelBodies=[],this.coordinateSystem="undefined"==typeof e.coordinateSystem?new t(1,2,3):e.coordinateSystem.clone(),this.chassisBody=e.chassisBody,!this.chassisBody){var f=new i(new t(5,2,.5));this.chassisBody=new o(1,f)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}var o=e("./Body"),d=e("../shapes/Sphere"),i=e("../shapes/Box"),t=e("../math/Vec3"),l=e("../constraints/HingeConstraint");f.exports=n,n.prototype.addWheel=function(e){e=e||{};var f=e.body;f||(f=new o(1,new d(1.2))),this.wheelBodies.push(f),this.wheelForces.push(0);var n=(new t,"undefined"!=typeof e.position?e.position.clone():new t),i=new t;this.chassisBody.pointToWorldFrame(n,i),f.position.set(i.x,i.y,i.z);var u="undefined"!=typeof e.axis?e.axis.clone():new t(0,1,0);this.wheelAxes.push(u);var p=new l(this.chassisBody,f,{pivotA:n,axisA:u,pivotB:t.ZERO,axisB:u,collideConnected:!1});return this.constraints.push(p),this.wheelBodies.length-1},n.prototype.setSteeringValue=function(e,f){var n=this.wheelAxes[f],o=Math.cos(e),d=Math.sin(e),i=n.x,t=n.y;this.constraints[f].axisA.set(o*i-d*t,d*i+o*t,0)},n.prototype.setMotorSpeed=function(e,f){var n=this.constraints[f];n.enableMotor(),n.motorTargetVelocity=e},n.prototype.disableMotor=function(e){var f=this.constraints[e];
f.disableMotor()};var u=new t;n.prototype.setWheelForce=function(e,f){this.wheelForces[f]=e},n.prototype.applyWheelForce=function(e,f){var n=this.wheelAxes[f],o=this.wheelBodies[f],d=o.torque;n.scale(e,u),o.vectorToWorldFrame(u,u),d.vadd(u,d)},n.prototype.addToWorld=function(e){for(var f=this.constraints,n=this.wheelBodies.concat([this.chassisBody]),o=0;o<n.length;o++)e.add(n[o]);for(var o=0;o<f.length;o++)e.addConstraint(f[o]);e.addEventListener("preStep",this._update.bind(this))},n.prototype._update=function(){for(var e=this.wheelForces,f=0;f<e.length;f++)this.applyWheelForce(e[f],f)},n.prototype.removeFromWorld=function(e){for(var f=this.constraints,n=this.wheelBodies.concat([this.chassisBody]),o=0;o<n.length;o++)e.remove(n[o]);for(var o=0;o<f.length;o++)e.removeConstraint(f[o])};var p=new t;n.prototype.getWheelSpeed=function(e){var f=this.wheelAxes[e],n=this.wheelBodies[e],o=n.angularVelocity;return this.chassisBody.vectorToWorldFrame(f,p),o.dot(p)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,f){function n(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}f.exports=n;{var o=(e("../shapes/Shape"),e("../math/Vec3"));e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material")}n.prototype.add=function(e){this.particles.push(e),this.neighbors.length<this.particles.length&&this.neighbors.push([])},n.prototype.remove=function(e){var f=this.particles.indexOf(e);-1!==f&&(this.particles.splice(f,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var d=new o;n.prototype.getNeighbors=function(e,f){for(var n=this.particles.length,o=e.id,i=this.smoothingRadius*this.smoothingRadius,t=d,l=0;l!==n;l++){var u=this.particles[l];u.position.vsub(e.position,t),o!==u.id&&t.norm2()<i&&f.push(u)}};var i=new o,t=new o,l=new o,u=new o,p=new o,s=new o;n.prototype.update=function(){for(var e=this.particles.length,f=i,n=this.speedOfSound,o=this.eps,d=0;d!==e;d++){var y=this.particles[d],c=this.neighbors[d];c.length=0,this.getNeighbors(y,c),c.push(this.particles[d]);for(var a=c.length,r=0,w=0;w!==a;w++){y.position.vsub(c[w].position,f);var b=f.norm(),m=this.w(b);r+=c[w].mass*m}this.densities[d]=r,this.pressures[d]=n*n*(this.densities[d]-this.density)}for(var N=t,g=l,x=u,j=p,v=s,d=0;d!==e;d++){var A=this.particles[d];N.set(0,0,0),g.set(0,0,0);for(var C,O,c=this.neighbors[d],a=c.length,w=0;w!==a;w++){var h=c[w];A.position.vsub(h.position,j);var k=j.norm();C=-h.mass*(this.pressures[d]/(this.densities[d]*this.densities[d]+o)+this.pressures[w]/(this.densities[w]*this.densities[w]+o)),this.gradw(j,x),x.mult(C,x),N.vadd(x,N),h.velocity.vsub(A.velocity,v),v.mult(1/(1e-4+this.densities[d]*this.densities[w])*this.viscosity*h.mass,v),O=this.nablaw(k),v.mult(O,v),g.vadd(v,g)}g.mult(A.mass,g),N.mult(A.mass,N),A.force.vadd(g,A.force),A.force.vadd(N,A.force)}},n.prototype.w=function(e){var f=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(f,9))*Math.pow(f*f-e*e,3)},n.prototype.gradw=function(e,f){var n=e.norm(),o=this.smoothingRadius;e.mult(945/(32*Math.PI*Math.pow(o,9))*Math.pow(o*o-n*n,2),f)},n.prototype.nablaw=function(e){var f=this.smoothingRadius,n=945/(32*Math.PI*Math.pow(f,9))*(f*f-e*e)*(7*e*e-3*f*f);return n}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,f){function n(e,f,n){n=n||{},this.restLength="number"==typeof n.restLength?n.restLength:1,this.stiffness=n.stiffness||100,this.damping=n.damping||1,this.bodyA=e,this.bodyB=f,this.localAnchorA=new o,this.localAnchorB=new o,n.localAnchorA&&this.localAnchorA.copy(n.localAnchorA),n.localAnchorB&&this.localAnchorB.copy(n.localAnchorB),n.worldAnchorA&&this.setWorldAnchorA(n.worldAnchorA),n.worldAnchorB&&this.setWorldAnchorB(n.worldAnchorB)}var o=e("../math/Vec3");f.exports=n,n.prototype.setWorldAnchorA=function(e){this.bodyA.pointToLocalFrame(e,this.localAnchorA)},n.prototype.setWorldAnchorB=function(e){this.bodyB.pointToLocalFrame(e,this.localAnchorB)},n.prototype.getWorldAnchorA=function(e){this.bodyA.pointToWorldFrame(this.localAnchorA,e)},n.prototype.getWorldAnchorB=function(e){this.bodyB.pointToWorldFrame(this.localAnchorB,e)};var d=new o,i=new o,t=new o,l=new o,u=new o,p=new o,s=new o,y=new o,c=new o,a=new o,r=new o;n.prototype.applyForce=function(){var e=this.stiffness,f=this.damping,n=this.restLength,o=this.bodyA,w=this.bodyB,b=d,m=i,N=t,g=l,x=r,j=u,v=p,A=s,C=y,O=c,h=a;this.getWorldAnchorA(j),this.getWorldAnchorB(v),j.vsub(o.position,A),v.vsub(w.position,C),v.vsub(j,b);var k=b.norm();m.copy(b),m.normalize(),w.velocity.vsub(o.velocity,N),w.angularVelocity.cross(C,x),N.vadd(x,N),o.angularVelocity.cross(A,x),N.vsub(x,N),m.mult(-e*(k-n)-f*N.dot(m),g),o.force.vsub(g,o.force),w.force.vadd(g,w.force),A.cross(g,O),C.cross(g,h),o.torque.vsub(O,o.torque),w.torque.vadd(h,w.torque)}},{"../math/Vec3":30}],36:[function(e,f){function n(e){e=t.defaults(e,{chassisConnectionPointLocal:new o,chassisConnectionPointWorld:new o,directionLocal:new o,directionWorld:new o,axleLocal:new o,axleWorld:new o,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=e.maxSuspensionTravel,this.customSlidingRotationalSpeed=e.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=e.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=e.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=e.chassisConnectionPointWorld.clone(),this.directionLocal=e.directionLocal.clone(),this.directionWorld=e.directionWorld.clone(),this.axleLocal=e.axleLocal.clone(),this.axleWorld=e.axleWorld.clone(),this.suspensionRestLength=e.suspensionRestLength,this.suspensionMaxLength=e.suspensionMaxLength,this.radius=e.radius,this.suspensionStiffness=e.suspensionStiffness,this.dampingCompression=e.dampingCompression,this.dampingRelaxation=e.dampingRelaxation,this.frictionSlip=e.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=e.rollInfluence,this.maxSuspensionForce=e.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=e.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new i,this.worldTransform=new d,this.isInContact=!1}var o=e("../math/Vec3"),d=e("../math/Transform"),i=e("../collision/RaycastResult"),t=e("../utils/Utils");f.exports=n;var l=new o,u=new o,l=new o;n.prototype.updateWheel=function(e){var f=this.raycastResult;if(this.isInContact){var n=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(e.position,u),e.getVelocityAtWorldPoint(u,l);var o=f.hitNormalWorld.dot(l);if(n>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=10;else{var d=-1/n;this.suspensionRelativeVelocity=o*d,this.clippedInvContactDotSuspension=d}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,f){function n(e){o.call(this),this.type=o.types.BOX,this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}f.exports=n;var o=e("./Shape"),d=e("../math/Vec3"),i=e("./ConvexPolyhedron");n.prototype=new o,n.prototype.constructor=n,n.prototype.updateConvexPolyhedronRepresentation=function(){var e=this.halfExtents.x,f=this.halfExtents.y,n=this.halfExtents.z,o=d,t=[new o(-e,-f,-n),new o(e,-f,-n),new o(e,f,-n),new o(-e,f,-n),new o(-e,-f,n),new o(e,-f,n),new o(e,f,n),new o(-e,f,n)],l=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],u=([new o(0,0,1),new o(0,1,0),new o(1,0,0)],new i(t,l));this.convexPolyhedronRepresentation=u,u.material=this.material},n.prototype.calculateLocalInertia=function(e,f){return f=f||new d,n.calculateInertia(this.halfExtents,e,f),f},n.calculateInertia=function(e,f,n){var o=e;n.x=1/12*f*(2*o.y*2*o.y+2*o.z*2*o.z),n.y=1/12*f*(2*o.x*2*o.x+2*o.z*2*o.z),n.z=1/12*f*(2*o.y*2*o.y+2*o.x*2*o.x)},n.prototype.getSideNormals=function(e,f){var n=e,o=this.halfExtents;if(n[0].set(o.x,0,0),n[1].set(0,o.y,0),n[2].set(0,0,o.z),n[3].set(-o.x,0,0),n[4].set(0,-o.y,0),n[5].set(0,0,-o.z),void 0!==f)for(var d=0;d!==n.length;d++)f.vmult(n[d],n[d]);return n},n.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},n.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};{var t=new d;new d}n.prototype.forEachWorldCorner=function(e,f,n){for(var o=this.halfExtents,d=[[o.x,o.y,o.z],[-o.x,o.y,o.z],[-o.x,-o.y,o.z],[-o.x,-o.y,-o.z],[o.x,-o.y,-o.z],[o.x,o.y,-o.z],[-o.x,o.y,-o.z],[o.x,-o.y,o.z]],i=0;i<d.length;i++)t.set(d[i][0],d[i][1],d[i][2]),f.vmult(t,t),e.vadd(t,t),n(t.x,t.y,t.z)};var l=[new d,new d,new d,new d,new d,new d,new d,new d];n.prototype.calculateWorldAABB=function(e,f,n,o){var d=this.halfExtents;l[0].set(d.x,d.y,d.z),l[1].set(-d.x,d.y,d.z),l[2].set(-d.x,-d.y,d.z),l[3].set(-d.x,-d.y,-d.z),l[4].set(d.x,-d.y,-d.z),l[5].set(d.x,d.y,-d.z),l[6].set(-d.x,d.y,-d.z),l[7].set(d.x,-d.y,d.z);var i=l[0];f.vmult(i,i),e.vadd(i,i),o.copy(i),n.copy(i);for(var t=1;8>t;t++){var i=l[t];f.vmult(i,i),e.vadd(i,i);var u=i.x,p=i.y,s=i.z;u>o.x&&(o.x=u),p>o.y&&(o.y=p),s>o.z&&(o.z=s),u<n.x&&(n.x=u),p<n.y&&(n.y=p),s<n.z&&(n.z=s)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,f){function n(e,f,n){o.call(this),this.type=o.types.CONVEXPOLYHEDRON,this.vertices=e||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=f||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=n?n.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}f.exports=n;var o=e("./Shape"),d=e("../math/Vec3"),i=(e("../math/Quaternion"),e("../math/Transform"));n.prototype=new o,n.prototype.constructor=n;var t=new d;n.prototype.computeEdges=function(){var e=this.faces,f=this.vertices,n=(f.length,this.uniqueEdges);n.length=0;for(var o=t,d=0;d!==e.length;d++)for(var i=e[d],l=i.length,u=0;u!==l;u++){var p=(u+1)%l;f[i[u]].vsub(f[i[p]],o),o.normalize();for(var s=!1,y=0;y!==n.length;y++)if(n[y].almostEquals(o)||n[y].almostEquals(o)){s=!0;break}s||n.push(o.clone())}},n.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var e=0;e<this.faces.length;e++){for(var f=0;f<this.faces[e].length;f++)if(!this.vertices[this.faces[e][f]])throw new Error("Vertex "+this.faces[e][f]+" not found!");var n=this.faceNormals[e]||new d;this.getFaceNormal(e,n),n.negate(n),this.faceNormals[e]=n;var o=this.vertices[this.faces[e][0]];if(n.dot(o)<0){console.error(".faceNormals["+e+"] = Vec3("+n.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var f=0;f<this.faces[e].length;f++)console.warn(".vertices["+this.faces[e][f]+"] = Vec3("+this.vertices[this.faces[e][f]].toString()+")")}}};var l=new d,u=new d;n.computeNormal=function(e,f,n,o){f.vsub(e,u),n.vsub(f,l),l.cross(u,o),o.isZero()||o.normalize()},n.prototype.getFaceNormal=function(e,f){var o=this.faces[e],d=this.vertices[o[0]],i=this.vertices[o[1]],t=this.vertices[o[2]];return n.computeNormal(d,i,t,f)};var p=new d;n.prototype.clipAgainstHull=function(e,f,n,o,i,t,l,u,s){for(var y=p,c=-1,a=-Number.MAX_VALUE,r=0;r<n.faces.length;r++){y.copy(n.faceNormals[r]),i.vmult(y,y);var w=y.dot(t);w>a&&(a=w,c=r)}for(var b=[],m=n.faces[c],N=m.length,g=0;N>g;g++){var x=n.vertices[m[g]],j=new d;j.copy(x),i.vmult(j,j),o.vadd(j,j),b.push(j)}c>=0&&this.clipFaceAgainstHull(t,e,f,b,l,u,s)};var s=new d,y=new d,c=new d,a=new d,r=new d,w=new d;n.prototype.findSeparatingAxis=function(e,f,n,o,d,i,t,l){var u=s,p=y,b=c,m=a,N=r,g=w,x=Number.MAX_VALUE,j=this,v=0;if(j.uniqueAxes)for(var A=0;A!==j.uniqueAxes.length;A++){n.vmult(j.uniqueAxes[A],u);var C=j.testSepAxis(u,e,f,n,o,d);if(C===!1)return!1;x>C&&(x=C,i.copy(u))}else for(var O=t?t.length:j.faces.length,A=0;O>A;A++){var h=t?t[A]:A;u.copy(j.faceNormals[h]),n.vmult(u,u);var C=j.testSepAxis(u,e,f,n,o,d);if(C===!1)return!1;x>C&&(x=C,i.copy(u))}if(e.uniqueAxes)for(var A=0;A!==e.uniqueAxes.length;A++){d.vmult(e.uniqueAxes[A],p),v++;var C=j.testSepAxis(p,e,f,n,o,d);if(C===!1)return!1;x>C&&(x=C,i.copy(p))}else for(var k=l?l.length:e.faces.length,A=0;k>A;A++){var h=l?l[A]:A;p.copy(e.faceNormals[h]),d.vmult(p,p),v++;var C=j.testSepAxis(p,e,f,n,o,d);if(C===!1)return!1;x>C&&(x=C,i.copy(p))}for(var q=0;q!==j.uniqueEdges.length;q++){n.vmult(j.uniqueEdges[q],m);for(var z=0;z!==e.uniqueEdges.length;z++)if(d.vmult(e.uniqueEdges[z],N),m.cross(N,g),!g.almostZero()){g.normalize();var B=j.testSepAxis(g,e,f,n,o,d);if(B===!1)return!1;x>B&&(x=B,i.copy(g))}}return o.vsub(f,b),b.dot(i)>0&&i.negate(i),!0};var b=[],m=[];n.prototype.testSepAxis=function(e,f,o,d,i,t){var l=this;n.project(l,e,o,d,b),n.project(f,e,i,t,m);var u=b[0],p=b[1],s=m[0],y=m[1];if(y>u||p>s)return!1;var c=u-y,a=s-p,r=a>c?c:a;return r};var N=new d,g=new d;n.prototype.calculateLocalInertia=function(e,f){this.computeLocalAABB(N,g);var n=g.x-N.x,o=g.y-N.y,d=g.z-N.z;f.x=1/12*e*(2*o*2*o+2*d*2*d),f.y=1/12*e*(2*n*2*n+2*d*2*d),f.z=1/12*e*(2*o*2*o+2*n*2*n)},n.prototype.getPlaneConstantOfFace=function(e){var f=this.faces[e],n=this.faceNormals[e],o=this.vertices[f[0]],d=-n.dot(o);return d};var x=new d,j=new d,v=new d,A=new d,C=new d,O=new d,h=new d,k=new d;n.prototype.clipFaceAgainstHull=function(e,f,n,o,d,i,t){for(var l=x,u=j,p=v,s=A,y=C,c=O,a=h,r=k,w=this,b=[],m=o,N=b,g=-1,q=Number.MAX_VALUE,z=0;z<w.faces.length;z++){l.copy(w.faceNormals[z]),n.vmult(l,l);var B=l.dot(e);q>B&&(q=B,g=z)}if(!(0>g)){var D=w.faces[g];D.connectedFaces=[];for(var E=0;E<w.faces.length;E++)for(var F=0;F<w.faces[E].length;F++)-1!==D.indexOf(w.faces[E][F])&&E!==g&&-1===D.connectedFaces.indexOf(E)&&D.connectedFaces.push(E);for(var G=(m.length,D.length),H=0;G>H;H++){var I=w.vertices[D[H]],J=w.vertices[D[(H+1)%G]];I.vsub(J,u),p.copy(u),n.vmult(p,p),f.vadd(p,p),s.copy(this.faceNormals[g]),n.vmult(s,s),f.vadd(s,s),p.cross(s,y),y.negate(y),c.copy(I),n.vmult(c,c),f.vadd(c,c);var K,L=(-c.dot(y),D.connectedFaces[H]);a.copy(this.faceNormals[L]);var M=this.getPlaneConstantOfFace(L);r.copy(a),n.vmult(r,r);var K=M-r.dot(f);for(this.clipFaceAgainstPlane(m,N,r,K);m.length;)m.shift();for(;N.length;)m.push(N.shift())}a.copy(this.faceNormals[g]);var M=this.getPlaneConstantOfFace(g);r.copy(a),n.vmult(r,r);for(var K=M-r.dot(f),E=0;E<m.length;E++){var P=r.dot(m[E])+K;if(d>=P&&(console.log("clamped: depth="+P+" to minDist="+(d+"")),P=d),i>=P){var Q=m[E];if(0>=P){var R={point:Q,normal:r,depth:P};t.push(R)}}}}},n.prototype.clipFaceAgainstPlane=function(e,f,n,o){var i,t,l=e.length;if(2>l)return f;var u=e[e.length-1],p=e[0];i=n.dot(u)+o;for(var s=0;l>s;s++){if(p=e[s],t=n.dot(p)+o,0>i)if(0>t){var y=new d;y.copy(p),f.push(y)}else{var y=new d;u.lerp(p,i/(i-t),y),f.push(y)}else if(0>t){var y=new d;u.lerp(p,i/(i-t),y),f.push(y),f.push(p)}u=p,i=t}return f},n.prototype.computeWorldVertices=function(e,f){for(var n=this.vertices.length;this.worldVertices.length<n;)this.worldVertices.push(new d);for(var o=this.vertices,i=this.worldVertices,t=0;t!==n;t++)f.vmult(o[t],i[t]),e.vadd(i[t],i[t]);this.worldVerticesNeedsUpdate=!1};new d;n.prototype.computeLocalAABB=function(e,f){var n=this.vertices.length,o=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),f.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var d=0;n>d;d++){var i=o[d];i.x<e.x?e.x=i.x:i.x>f.x&&(f.x=i.x),i.y<e.y?e.y=i.y:i.y>f.y&&(f.y=i.y),i.z<e.z?e.z=i.z:i.z>f.z&&(f.z=i.z)}},n.prototype.computeWorldFaceNormals=function(e){for(var f=this.faceNormals.length;this.worldFaceNormals.length<f;)this.worldFaceNormals.push(new d);for(var n=this.faceNormals,o=this.worldFaceNormals,i=0;i!==f;i++)e.vmult(n[i],o[i]);this.worldFaceNormalsNeedsUpdate=!1},n.prototype.updateBoundingSphereRadius=function(){for(var e=0,f=this.vertices,n=0,o=f.length;n!==o;n++){var d=f[n].norm2();d>e&&(e=d)}this.boundingSphereRadius=Math.sqrt(e)};var q=new d;n.prototype.calculateWorldAABB=function(e,f,n,o){for(var d,i,t,l,u,p,s=this.vertices.length,y=this.vertices,c=0;s>c;c++){q.copy(y[c]),f.vmult(q,q),e.vadd(q,q);var a=q;a.x<d||void 0===d?d=a.x:(a.x>l||void 0===l)&&(l=a.x),a.y<i||void 0===i?i=a.y:(a.y>u||void 0===u)&&(u=a.y),a.z<t||void 0===t?t=a.z:(a.z>p||void 0===p)&&(p=a.z)}n.set(d,i,t),o.set(l,u,p)},n.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},n.prototype.getAveragePointLocal=function(e){e=e||new d;for(var f=this.vertices.length,n=this.vertices,o=0;f>o;o++)e.vadd(n[o],e);return e.mult(1/f,e),e},n.prototype.transformAllPoints=function(e,f){var n=this.vertices.length,o=this.vertices;if(f){for(var d=0;n>d;d++){var i=o[d];f.vmult(i,i)}for(var d=0;d<this.faceNormals.length;d++){var i=this.faceNormals[d];f.vmult(i,i)}}if(e)for(var d=0;n>d;d++){var i=o[d];i.vadd(e,i)}};var z=new d,B=new d,D=new d;n.prototype.pointIsInside=function(e){var f=this.vertices.length,n=this.vertices,o=this.faces,d=this.faceNormals,i=null,t=this.faces.length,l=z;this.getAveragePointLocal(l);for(var u=0;t>u;u++){var f=(this.faces[u].length,d[u]),p=n[o[u][0]],s=B;e.vsub(p,s);var y=f.dot(s),c=D;l.vsub(p,c);var a=f.dot(c);if(0>y&&a>0||y>0&&0>a)return!1}return i?1:-1};var E=(new d,new d),F=new d;n.project=function(e,f,n,o,d){var t=e.vertices.length,l=E,u=0,p=0,s=F,y=e.vertices;s.setZero(),i.vectorToLocalFrame(n,o,f,l),i.pointToLocalFrame(n,o,s,s);var c=s.dot(l);p=u=y[0].dot(l);for(var a=1;t>a;a++){var r=y[a].dot(l);r>u&&(u=r),p>r&&(p=r)}if(p-=c,u-=c,p>u){var w=p;p=u,u=w}d[0]=u,d[1]=p}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,f){function n(e,f,n,t){var l=t,u=[],p=[],s=[],y=[],c=[],a=Math.cos,r=Math.sin;u.push(new d(f*a(0),f*r(0),.5*-n)),y.push(0),u.push(new d(e*a(0),e*r(0),.5*n)),c.push(1);for(var w=0;l>w;w++){var b=2*Math.PI/l*(w+1),m=2*Math.PI/l*(w+.5);l-1>w?(u.push(new d(f*a(b),f*r(b),.5*-n)),y.push(2*w+2),u.push(new d(e*a(b),e*r(b),.5*n)),c.push(2*w+3),s.push([2*w+2,2*w+3,2*w+1,2*w])):s.push([0,1,2*w+1,2*w]),(l%2===1||l/2>w)&&p.push(new d(a(m),r(m),0))}s.push(c),p.push(new d(0,0,1));for(var N=[],w=0;w<y.length;w++)N.push(y[y.length-w-1]);s.push(N),this.type=o.types.CONVEXPOLYHEDRON,i.call(this,u,s,p)}f.exports=n;var o=e("./Shape"),d=e("../math/Vec3"),i=(e("../math/Quaternion"),e("./ConvexPolyhedron"));n.prototype=new i},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,f){function n(e,f){f=t.defaults(f,{maxValue:null,minValue:null,elementSize:1}),this.data=e,this.maxValue=f.maxValue,this.minValue=f.minValue,this.elementSize=f.elementSize,null===f.minValue&&this.updateMinValue(),null===f.maxValue&&this.updateMaxValue(),this.cacheEnabled=!0,o.call(this),this.pillarConvex=new d,this.pillarOffset=new i,this.type=o.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}var o=e("./Shape"),d=e("./ConvexPolyhedron"),i=e("../math/Vec3"),t=e("../utils/Utils");f.exports=n,n.prototype=new o,n.prototype.update=function(){this._cachedPillars={}},n.prototype.updateMinValue=function(){for(var e=this.data,f=e[0][0],n=0;n!==e.length;n++)for(var o=0;o!==e[n].length;o++){var d=e[n][o];f>d&&(f=d)}this.minValue=f},n.prototype.updateMaxValue=function(){for(var e=this.data,f=e[0][0],n=0;n!==e.length;n++)for(var o=0;o!==e[n].length;o++){var d=e[n][o];d>f&&(f=d)}this.maxValue=f},n.prototype.setHeightValueAtIndex=function(e,f,n){var o=this.data;o[e][f]=n,this.clearCachedConvexTrianglePillar(e,f,!1),e>0&&(this.clearCachedConvexTrianglePillar(e-1,f,!0),this.clearCachedConvexTrianglePillar(e-1,f,!1)),f>0&&(this.clearCachedConvexTrianglePillar(e,f-1,!0),this.clearCachedConvexTrianglePillar(e,f-1,!1)),f>0&&e>0&&this.clearCachedConvexTrianglePillar(e-1,f-1,!0)},n.prototype.getRectMinMax=function(e,f,n,o,d){d=d||[];for(var i=this.data,t=this.minValue,l=e;n>=l;l++)for(var u=f;o>=u;u++){var p=i[l][u];p>t&&(t=p)}d[0]=this.minValue,d[1]=t},n.prototype.getIndexOfPosition=function(e,f,n,o){var d=this.elementSize,i=this.data,t=Math.floor(e/d),l=Math.floor(f/d);return n[0]=t,n[1]=l,o&&(0>t&&(t=0),0>l&&(l=0),t>=i.length-1&&(t=i.length-1),l>=i[0].length-1&&(l=i[0].length-1)),0>t||0>l||t>=i.length-1||l>=i[0].length-1?!1:!0},n.prototype.getHeightAt=function(e,f,n){var o=[];this.getIndexOfPosition(e,f,o,n);var d=[];return this.getRectMinMax(o[0],o[1]+1,o[0],o[1]+1,d),(d[0]+d[1])/2},n.prototype.getCacheConvexTrianglePillarKey=function(e,f,n){return e+"_"+f+"_"+(n?1:0)},n.prototype.getCachedConvexTrianglePillar=function(e,f,n){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,f,n)]},n.prototype.setCachedConvexTrianglePillar=function(e,f,n,o,d){this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,f,n)]={convex:o,offset:d}},n.prototype.clearCachedConvexTrianglePillar=function(e,f,n){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,f,n)]},n.prototype.getConvexTrianglePillar=function(e,f,n){var o=this.pillarConvex,t=this.pillarOffset;if(this.cacheEnabled){var l=this.getCachedConvexTrianglePillar(e,f,n);if(l)return this.pillarConvex=l.convex,void(this.pillarOffset=l.offset);o=new d,t=new i,this.pillarConvex=o,this.pillarOffset=t}var l=this.data,u=this.elementSize,p=o.faces;o.vertices.length=6;for(var s=0;6>s;s++)o.vertices[s]||(o.vertices[s]=new i);p.length=5;for(var s=0;5>s;s++)p[s]||(p[s]=[]);var y=o.vertices,c=(Math.min(l[e][f],l[e+1][f],l[e][f+1],l[e+1][f+1])-this.minValue)/2+this.minValue;n?(t.set((e+.75)*u,(f+.75)*u,c),y[0].set(.25*u,.25*u,l[e+1][f+1]-c),y[1].set(-.75*u,.25*u,l[e][f+1]-c),y[2].set(.25*u,-.75*u,l[e+1][f]-c),y[3].set(.25*u,.25*u,-c-1),y[4].set(-.75*u,.25*u,-c-1),y[5].set(.25*u,-.75*u,-c-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(t.set((e+.25)*u,(f+.25)*u,c),y[0].set(-.25*u,-.25*u,l[e][f]-c),y[1].set(.75*u,-.25*u,l[e+1][f]-c),y[2].set(-.25*u,.75*u,l[e][f+1]-c),y[3].set(-.25*u,-.25*u,-c-1),y[4].set(.75*u,-.25*u,-c-1),y[5].set(-.25*u,.75*u,-c-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),o.computeNormals(),o.computeEdges(),o.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(e,f,n,o,t)},n.prototype.calculateLocalInertia=function(e,f){return f=f||new i,f.set(0,0,0),f},n.prototype.volume=function(){return Number.MAX_VALUE},n.prototype.calculateWorldAABB=function(e,f,n,o){n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),o.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},n.prototype.updateBoundingSphereRadius=function(){var e=this.data,f=this.elementSize;this.boundingSphereRadius=new i(e.length*f,e[0].length*f,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,f){function n(){o.call(this),this.type=o.types.PARTICLE}f.exports=n;var o=e("./Shape"),d=e("../math/Vec3");n.prototype=new o,n.prototype.constructor=n,n.prototype.calculateLocalInertia=function(e,f){return f=f||new d,f.set(0,0,0),f},n.prototype.volume=function(){return 0},n.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},n.prototype.calculateWorldAABB=function(e,f,n,o){n.copy(e),o.copy(e)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,f){function n(){o.call(this),this.type=o.types.PLANE,this.worldNormal=new d,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}f.exports=n;var o=e("./Shape"),d=e("../math/Vec3");n.prototype=new o,n.prototype.constructor=n,n.prototype.computeWorldNormal=function(e){var f=this.worldNormal;f.set(0,0,1),e.vmult(f,f),this.worldNormalNeedsUpdate=!1},n.prototype.calculateLocalInertia=function(e,f){return f=f||new d},n.prototype.volume=function(){return Number.MAX_VALUE};var i=new d;n.prototype.calculateWorldAABB=function(e,f,n,o){i.set(0,0,1),f.vmult(i,i);var d=Number.MAX_VALUE;n.set(-d,-d,-d),o.set(d,d,d),1===i.x&&(o.x=e.x),1===i.y&&(o.y=e.y),1===i.z&&(o.z=e.z),-1===i.x&&(n.x=e.x),-1===i.y&&(n.y=e.y),-1===i.z&&(n.z=e.z)},n.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,f){function n(){this.id=n.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}f.exports=n;{var n=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material")}n.prototype.constructor=n,n.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},n.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},n.prototype.calculateLocalInertia=function(){throw"calculateLocalInertia() not implemented for shape type "+this.type},n.idCounter=0,n.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,f){function n(e){if(o.call(this),this.radius=void 0!==e?Number(e):1,this.type=o.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}f.exports=n;var o=e("./Shape"),d=e("../math/Vec3");n.prototype=new o,n.prototype.constructor=n,n.prototype.calculateLocalInertia=function(e,f){f=f||new d;var n=2*e*this.radius*this.radius/5;return f.x=n,f.y=n,f.z=n,f},n.prototype.volume=function(){return 4*Math.PI*this.radius/3},n.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},n.prototype.calculateWorldAABB=function(e,f,n,o){for(var d=this.radius,i=["x","y","z"],t=0;t<i.length;t++){var l=i[t];n[l]=e[l]-d,o[l]=e[l]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,f){function n(e,f){o.call(this),this.type=o.types.TRIMESH,this.vertices=new Float32Array(e),this.indices=new Int16Array(f),this.normals=new Float32Array(f.length),this.aabb=new t,this.edges=null,this.scale=new d(1,1,1),this.tree=new l,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}f.exports=n;var o=e("./Shape"),d=e("../math/Vec3"),i=(e("../math/Quaternion"),e("../math/Transform")),t=e("../collision/AABB"),l=e("../utils/Octree");n.prototype=new o,n.prototype.constructor=n;var u=new d;n.prototype.updateTree=function(){var e=this.tree;e.reset(),e.aabb.copy(this.aabb);var f=this.scale;e.aabb.lowerBound.x*=1/f.x,e.aabb.lowerBound.y*=1/f.y,e.aabb.lowerBound.z*=1/f.z,e.aabb.upperBound.x*=1/f.x,e.aabb.upperBound.y*=1/f.y,e.aabb.upperBound.z*=1/f.z;for(var n=new t,o=new d,i=new d,l=new d,u=[o,i,l],p=0;p<this.indices.length/3;p++){var s=3*p;this._getUnscaledVertex(this.indices[s],o),this._getUnscaledVertex(this.indices[s+1],i),this._getUnscaledVertex(this.indices[s+2],l),n.setFromPoints(u),e.insert(n,p)}e.removeEmptyNodes()};var p=new t;n.prototype.getTrianglesInAABB=function(e,f){p.copy(e);var n=this.scale,o=n.x,d=n.y,i=n.z,t=p.lowerBound,l=p.upperBound;return t.x/=o,t.y/=d,t.z/=i,l.x/=o,l.y/=d,l.z/=i,this.tree.aabbQuery(p,f)},n.prototype.setScale=function(e){var f=this.scale.x===this.scale.y===this.scale.z,n=e.x===e.y===e.z;f&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()},n.prototype.updateNormals=function(){for(var e=u,f=this.normals,o=0;o<this.indices.length/3;o++){var d=3*o,i=this.indices[d],t=this.indices[d+1],l=this.indices[d+2];this.getVertex(i,r),this.getVertex(t,w),this.getVertex(l,b),n.computeNormal(w,r,b,e),f[d]=e.x,f[d+1]=e.y,f[d+2]=e.z}},n.prototype.updateEdges=function(){for(var e={},f=function(){var f=i>d?d+"_"+i:i+"_"+d;e[f]=!0},n=0;n<this.indices.length/3;n++){var o=3*n,d=this.indices[o],i=this.indices[o+1],t=this.indices[o+2];f(d,i),f(i,t),f(t,d)}var l=Object.keys(e);this.edges=new Int16Array(2*l.length);for(var n=0;n<l.length;n++){var u=l[n].split("_");this.edges[2*n]=parseInt(u[0],10),this.edges[2*n+1]=parseInt(u[1],10)}},n.prototype.getEdgeVertex=function(e,f,n){var o=this.edges[2*e+(f?1:0)];this.getVertex(o,n)};var s=new d,y=new d;n.prototype.getEdgeVector=function(e,f){var n=s,o=y;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,o),o.vsub(n,f)};var c=new d,a=new d;n.computeNormal=function(e,f,n,o){f.vsub(e,a),n.vsub(f,c),c.cross(a,o),o.isZero()||o.normalize()};var r=new d,w=new d,b=new d;n.prototype.getVertex=function(e,f){var n=this.scale;return this._getUnscaledVertex(e,f),f.x*=n.x,f.y*=n.y,f.z*=n.z,f},n.prototype._getUnscaledVertex=function(e,f){var n=3*e,o=this.vertices;return f.set(o[n],o[n+1],o[n+2])},n.prototype.getWorldVertex=function(e,f,n,o){return this.getVertex(e,o),i.pointToWorldFrame(f,n,o,o),o},n.prototype.getTriangleVertices=function(e,f,n,o){var d=3*e;this.getVertex(this.indices[d],f),this.getVertex(this.indices[d+1],n),this.getVertex(this.indices[d+2],o)},n.prototype.getNormal=function(e,f){var n=3*e;return f.set(this.normals[n],this.normals[n+1],this.normals[n+2])};var m=new t;n.prototype.calculateLocalInertia=function(e,f){this.computeLocalAABB(m);var n=m.upperBound.x-m.lowerBound.x,o=m.upperBound.y-m.lowerBound.y,d=m.upperBound.z-m.lowerBound.z;return f.set(1/12*e*(2*o*2*o+2*d*2*d),1/12*e*(2*n*2*n+2*d*2*d),1/12*e*(2*o*2*o+2*n*2*n))};var N=new d;n.prototype.computeLocalAABB=function(e){var f=e.lowerBound,n=e.upperBound,o=this.vertices.length,d=(this.vertices,N);this.getVertex(0,d),f.copy(d),n.copy(d);for(var i=0;i!==o;i++)this.getVertex(i,d),d.x<f.x?f.x=d.x:d.x>n.x&&(n.x=d.x),d.y<f.y?f.y=d.y:d.y>n.y&&(n.y=d.y),d.z<f.z?f.z=d.z:d.z>n.z&&(n.z=d.z)},n.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},n.prototype.updateBoundingSphereRadius=function(){for(var e=0,f=this.vertices,n=new d,o=0,i=f.length/3;o!==i;o++){this.getVertex(o,n);var t=n.norm2();t>e&&(e=t)}this.boundingSphereRadius=Math.sqrt(e)};var g=(new d,new i),x=new t;n.prototype.calculateWorldAABB=function(e,f,n,o){var d=g,i=x;d.position=e,d.quaternion=f,this.aabb.toWorldFrame(d,i),n.copy(i.lowerBound),o.copy(i.upperBound)},n.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},n.createTorus=function(e,f,o,d,i){e=e||1,f=f||.5,o=o||8,d=d||6,i=i||2*Math.PI;for(var t=[],l=[],u=0;o>=u;u++)for(var p=0;d>=p;p++){var s=p/d*i,y=u/o*Math.PI*2,c=(e+f*Math.cos(y))*Math.cos(s),a=(e+f*Math.cos(y))*Math.sin(s),r=f*Math.sin(y);t.push(c,a,r)}for(var u=1;o>=u;u++)for(var p=1;d>=p;p++){var w=(d+1)*u+p-1,b=(d+1)*(u-1)+p-1,m=(d+1)*(u-1)+p,N=(d+1)*u+p;l.push(w,b,N),l.push(b,m,N)}return new n(t,l)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,f){function n(){o.call(this),this.iterations=10,this.tolerance=1e-7}f.exports=n;var o=(e("../math/Vec3"),e("../math/Quaternion"),e("./Solver"));n.prototype=new o;var d=[],i=[],t=[];n.prototype.solve=function(e,f){var n,o,l,u,p,s,y=0,c=this.iterations,a=this.tolerance*this.tolerance,r=this.equations,w=r.length,b=f.bodies,m=b.length,N=e;if(0!==w)for(var g=0;g!==m;g++)b[g].updateSolveMassProperties();var x=i,j=t,v=d;
x.length=w,j.length=w,v.length=w;for(var g=0;g!==w;g++){var A=r[g];v[g]=0,j[g]=A.computeB(N),x[g]=1/A.computeC()}if(0!==w){for(var g=0;g!==m;g++){var C=b[g],O=C.vlambda,h=C.wlambda;O.set(0,0,0),h&&h.set(0,0,0)}for(y=0;y!==c;y++){u=0;for(var k=0;k!==w;k++){var A=r[k];n=j[k],o=x[k],s=v[k],p=A.computeGWlambda(),l=o*(n-p-A.eps*s),s+l<A.minForce?l=A.minForce-s:s+l>A.maxForce&&(l=A.maxForce-s),v[k]+=l,u+=l>0?l:-l,A.addToWlambda(l)}if(a>u*u)break}for(var g=0;g!==m;g++){var C=b[g],q=C.velocity,z=C.angularVelocity;q.vadd(C.vlambda,q),z&&z.vadd(C.wlambda,z)}}return y}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,f){function n(){this.equations=[]}f.exports=n,n.prototype.solve=function(){return 0},n.prototype.addEquation=function(e){e.enabled&&this.equations.push(e)},n.prototype.removeEquation=function(e){var f=this.equations,n=f.indexOf(e);-1!==n&&f.splice(n,1)},n.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,f){function n(e){for(l.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=e,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}function o(e){for(var f=e.length,n=0;n!==f;n++){var o=e[n];if(!(o.visited||o.body.type&c))return o}return!1}function d(e,f,n,d){for(a.push(e),e.visited=!0,f(e,n,d);a.length;)for(var i,t=a.pop();i=o(t.children);)i.visited=!0,f(i,n,d),a.push(i)}function i(e,f,n){f.push(e.body);for(var o=e.eqs.length,d=0;d!==o;d++){var i=e.eqs[d];-1===n.indexOf(i)&&n.push(i)}}function t(e,f){return f.id-e.id}f.exports=n;var l=(e("../math/Vec3"),e("../math/Quaternion"),e("./Solver")),u=e("../objects/Body");n.prototype=new l;var p=[],s=[],y={bodies:[]},c=u.STATIC,a=[];n.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},n.prototype.solve=function(e,f){for(var n=p,l=this.nodePool,u=f.bodies,c=this.equations,a=c.length,r=u.length,w=this.subsolver;l.length<r;)l.push(this.createNode());n.length=r;for(var b=0;r>b;b++)n[b]=l[b];for(var b=0;b!==r;b++){var m=n[b];m.body=u[b],m.children.length=0,m.eqs.length=0,m.visited=!1}for(var N=0;N!==a;N++){var g=c[N],b=u.indexOf(g.bi),x=u.indexOf(g.bj),j=n[b],v=n[x];j.children.push(v),j.eqs.push(g),v.children.push(j),v.eqs.push(g)}var A,C=0,O=s;w.tolerance=this.tolerance,w.iterations=this.iterations;for(var h=y;A=o(n);){O.length=0,h.bodies.length=0,d(A,i,h.bodies,O);var k=O.length;O=O.sort(t);for(var b=0;b!==k;b++)w.addEquation(O[b]);{w.solve(e,h)}w.removeAllEquations(),C++}return C}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,f){var n=function(){};f.exports=n,n.prototype={constructor:n,addEventListener:function(e,f){void 0===this._listeners&&(this._listeners={});var n=this._listeners;return void 0===n[e]&&(n[e]=[]),-1===n[e].indexOf(f)&&n[e].push(f),this},hasEventListener:function(e,f){if(void 0===this._listeners)return!1;var n=this._listeners;return void 0!==n[e]&&-1!==n[e].indexOf(f)?!0:!1},removeEventListener:function(e,f){if(void 0===this._listeners)return this;var n=this._listeners;if(void 0===n[e])return this;var o=n[e].indexOf(f);return-1!==o&&n[e].splice(o,1),this},dispatchEvent:function(e){if(void 0===this._listeners)return this;var f=this._listeners,n=f[e.type];if(void 0!==n){e.target=this;for(var o=0,d=n.length;d>o;o++)n[o].call(this,e)}return this}}},{}],50:[function(e,f){function n(e){e=e||{},this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new d,this.data=[],this.children=[]}function o(e,f){f=f||{},f.root=null,f.aabb=e,n.call(this,f),this.maxDepth="undefined"!=typeof f.maxDepth?f.maxDepth:8}var d=e("../collision/AABB"),i=e("../math/Vec3");f.exports=o,o.prototype=new n,n.prototype.reset=function(){this.children.length=this.data.length=0},n.prototype.insert=function(e,f,n){var o=this.data;if(n=n||0,!this.aabb.contains(e))return!1;var d=this.children;if(n<(this.maxDepth||this.root.maxDepth)){var i=!1;d.length||(this.subdivide(),i=!0);for(var t=0;8!==t;t++)if(d[t].insert(e,f,n+1))return!0;i&&(d.length=0)}return o.push(f),!0};var t=new i;n.prototype.subdivide=function(){var e=this.aabb,f=e.lowerBound,o=e.upperBound,l=this.children;l.push(new n({aabb:new d({lowerBound:new i(0,0,0)})}),new n({aabb:new d({lowerBound:new i(1,0,0)})}),new n({aabb:new d({lowerBound:new i(1,1,0)})}),new n({aabb:new d({lowerBound:new i(1,1,1)})}),new n({aabb:new d({lowerBound:new i(0,1,1)})}),new n({aabb:new d({lowerBound:new i(0,0,1)})}),new n({aabb:new d({lowerBound:new i(1,0,1)})}),new n({aabb:new d({lowerBound:new i(0,1,0)})})),o.vsub(f,t),t.scale(.5,t);for(var u=this.root||this,p=0;8!==p;p++){var s=l[p];s.root=u;var y=s.aabb.lowerBound;y.x*=t.x,y.y*=t.y,y.z*=t.z,y.vadd(f,y),y.vadd(t,s.aabb.upperBound)}},n.prototype.aabbQuery=function(e,f){for(var n=(this.data,this.children,[this]);n.length;){var o=n.pop();o.aabb.overlaps(e)&&Array.prototype.push.apply(f,o.data),Array.prototype.push.apply(n,o.children)}return f};var l=new d;n.prototype.rayQuery=function(e,f,n){return e.getAABB(l),l.toLocalFrame(f,l),this.aabbQuery(l,n),n},n.prototype.removeEmptyNodes=function(){for(var e=[this];e.length;){for(var f=e.pop(),n=f.children.length-1;n>=0;n--)f.children[n].data.length||f.children.splice(n,1);Array.prototype.push.apply(e,f.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,f){function n(){this.objects=[],this.type=Object}f.exports=n,n.prototype.release=function(){for(var e=arguments.length,f=0;f!==e;f++)this.objects.push(arguments[f])},n.prototype.get=function(){return 0===this.objects.length?this.constructObject():this.objects.pop()},n.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,f){function n(){this.data={keys:[]}}f.exports=n,n.prototype.get=function(e,f){if(e>f){var n=f;f=e,e=n}return this.data[e+"-"+f]},n.prototype.set=function(e,f,n){if(e>f){var o=f;f=e,e=o}var d=e+"-"+f;this.get(e,f)||this.data.keys.push(d),this.data[d]=n},n.prototype.reset=function(){for(var e=this.data,f=e.keys;f.length>0;){var n=f.pop();delete e[n]}}},{}],53:[function(e,f){function n(){}f.exports=n,n.defaults=function(e,f){e=e||{};for(var n in f)n in e||(e[n]=f[n]);return e}},{}],54:[function(e,f){function n(){d.call(this),this.type=o}f.exports=n;var o=e("../math/Vec3"),d=e("./Pool");n.prototype=new d,n.prototype.constructObject=function(){return new o}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,f){function n(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new s,this.world=e,this.currentContactMaterial=null,this.enableFrictionReduction=!1}function o(e,f,n){for(var o=null,d=e.length,i=0;i!==d;i++){var t=e[i],l=M;e[(i+1)%d].vsub(t,l);var u=P;l.cross(f,u);var p=Q;n.vsub(t,p);var s=u.dot(p);if(!(null===o||s>0&&o===!0||0>=s&&o===!1))return!1;null===o&&(o=s>0)}return!0}f.exports=n;var d=e("../collision/AABB"),i=e("../shapes/Shape"),t=e("../collision/Ray"),l=e("../math/Vec3"),u=e("../math/Transform"),p=(e("../shapes/ConvexPolyhedron"),e("../math/Quaternion")),s=(e("../solver/Solver"),e("../utils/Vec3Pool")),y=e("../equations/ContactEquation"),c=e("../equations/FrictionEquation");n.prototype.createContactEquation=function(e,f,n,o,d,i){var t;this.contactPointPool.length?(t=this.contactPointPool.pop(),t.bi=e,t.bj=f):t=new y(e,f),t.enabled=e.collisionResponse&&f.collisionResponse&&n.collisionResponse&&o.collisionResponse;var l=this.currentContactMaterial;t.restitution=l.restitution,t.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);var u=n.material||e.material,p=o.material||f.material;return u&&p&&u.restitution>=0&&p.restitution>=0&&(t.restitution=u.restitution*p.restitution),t.si=d||n,t.sj=i||o,t},n.prototype.createFrictionEquationsFromContact=function(e,f){var n=e.bi,o=e.bj,d=e.si,i=e.sj,t=this.world,l=this.currentContactMaterial,u=l.friction,p=d.material||n.material,s=i.material||o.material;if(p&&s&&p.friction>=0&&s.friction>=0&&(u=p.friction*s.friction),u>0){var y=u*t.gravity.length(),a=n.invMass+o.invMass;a>0&&(a=1/a);var r=this.frictionEquationPool,w=r.length?r.pop():new c(n,o,y*a),b=r.length?r.pop():new c(n,o,y*a);return w.bi=b.bi=n,w.bj=b.bj=o,w.minForce=b.minForce=-y*a,w.maxForce=b.maxForce=y*a,w.ri.copy(e.ri),w.rj.copy(e.rj),b.ri.copy(e.ri),b.rj.copy(e.rj),e.ni.tangents(w.t,b.t),w.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,t.dt),b.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,t.dt),w.enabled=b.enabled=e.enabled,f.push(w,b),!0}return!1};var a=new l,r=new l,w=new l;n.prototype.createFrictionFromAverage=function(e){var f=this.result[this.result.length-1];if(this.createFrictionEquationsFromContact(f,this.frictionResult)&&1!==e){var n=this.frictionResult[this.frictionResult.length-2],o=this.frictionResult[this.frictionResult.length-1];a.setZero(),r.setZero(),w.setZero();for(var d=f.bi,i=(f.bj,0);i!==e;i++)f=this.result[this.result.length-1-i],f.bodyA!==d?(a.vadd(f.ni,a),r.vadd(f.ri,r),w.vadd(f.rj,w)):(a.vsub(f.ni,a),r.vadd(f.rj,r),w.vadd(f.ri,w));var t=1/e;r.scale(t,n.ri),w.scale(t,n.rj),o.ri.copy(n.ri),o.rj.copy(n.rj),a.normalize(),a.tangents(n.t,o.t)}};var b=new l,m=new l,N=new p,g=new p;n.prototype.getContacts=function(e,f,n,o,d,i,t){this.contactPointPool=d,this.frictionEquationPool=t,this.result=o,this.frictionResult=i;for(var l=N,u=g,p=b,s=m,y=0,c=e.length;y!==c;y++){var a=e[y],r=f[y],w=null;a.material&&r.material&&(w=n.getContactMaterial(a.material,r.material)||null);for(var x=0;x<a.shapes.length;x++){a.quaternion.mult(a.shapeOrientations[x],l),a.quaternion.vmult(a.shapeOffsets[x],p),p.vadd(a.position,p);for(var j=a.shapes[x],v=0;v<r.shapes.length;v++){r.quaternion.mult(r.shapeOrientations[v],u),r.quaternion.vmult(r.shapeOffsets[v],s),s.vadd(r.position,s);var A=r.shapes[v];if(!(p.distanceTo(s)>j.boundingSphereRadius+A.boundingSphereRadius)){var C=null;j.material&&A.material&&(C=n.getContactMaterial(j.material,A.material)||null),this.currentContactMaterial=C||w||n.defaultContactMaterial;var O=this[j.type|A.type];O&&(j.type<A.type?O.call(this,j,A,p,s,l,u,a,r,j,A):O.call(this,A,j,s,p,u,l,r,a,j,A))}}}}};n.prototype[i.types.BOX|i.types.BOX]=n.prototype.boxBox=function(e,f,n,o,d,i,t,l){e.convexPolyhedronRepresentation.material=e.material,f.convexPolyhedronRepresentation.material=f.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,f.convexPolyhedronRepresentation.collisionResponse=f.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,f.convexPolyhedronRepresentation,n,o,d,i,t,l,e,f)},n.prototype[i.types.BOX|i.types.CONVEXPOLYHEDRON]=n.prototype.boxConvex=function(e,f,n,o,d,i,t,l){e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,f,n,o,d,i,t,l,e,f)},n.prototype[i.types.BOX|i.types.PARTICLE]=n.prototype.boxParticle=function(e,f,n,o,d,i,t,l){e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,f,n,o,d,i,t,l,e,f)},n.prototype[i.types.SPHERE]=n.prototype.sphereSphere=function(e,f,n,o,d,i,t,l){var u=this.createContactEquation(t,l,e,f);o.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.mult(e.radius,u.ri),u.rj.mult(-f.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(t.position,u.ri),u.rj.vadd(o,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)};var x=new l,j=new l,v=new l;n.prototype[i.types.PLANE|i.types.TRIMESH]=n.prototype.planeTrimesh=function(e,f,n,o,d,i,t,p){var s=new l,y=x;y.set(0,0,1),d.vmult(y,y);for(var c=0;c<f.vertices.length/3;c++){f.getVertex(c,s);var a=new l;a.copy(s),u.pointToWorldFrame(o,i,a,s);var r=j;s.vsub(n,r);var w=y.dot(r);if(0>=w){var b=this.createContactEquation(t,p,e,f);b.ni.copy(y);var m=v;y.scale(r.dot(y),m),s.vsub(m,m),b.ri.copy(m),b.ri.vsub(t.position,b.ri),b.rj.copy(s),b.rj.vsub(p.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}};var A=new l,C=new l,O=(new l,new l),h=new l,k=new l,q=new l,z=new l,B=new l,D=new l,E=new l,F=new l,G=new l,H=new l,I=new d,J=[];n.prototype[i.types.SPHERE|i.types.TRIMESH]=n.prototype.sphereTrimesh=function(e,f,n,o,d,i,l,p){var s=k,y=q,c=z,a=B,r=D,w=E,b=I,m=h,N=C,g=J;u.pointToLocalFrame(o,i,n,r);var x=e.radius;b.lowerBound.set(r.x-x,r.y-x,r.z-x),b.upperBound.set(r.x+x,r.y+x,r.z+x),f.getTrianglesInAABB(b,g);for(var j=O,v=e.radius*e.radius,K=0;K<g.length;K++)for(var L=0;3>L;L++)if(f.getVertex(f.indices[3*g[K]+L],j),j.vsub(r,N),N.norm2()<=v){m.copy(j),u.pointToWorldFrame(o,i,m,j),j.vsub(n,N);var M=this.createContactEquation(l,p,e,f);M.ni.copy(N),M.ni.normalize(),M.ri.copy(M.ni),M.ri.scale(e.radius,M.ri),M.ri.vadd(n,M.ri),M.ri.vsub(l.position,M.ri),M.rj.copy(j),M.rj.vsub(p.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}for(var K=0;K<g.length;K++)for(var L=0;3>L;L++){f.getVertex(f.indices[3*g[K]+L],s),f.getVertex(f.indices[3*g[K]+(L+1)%3],y),y.vsub(s,c),r.vsub(y,w);var P=w.dot(c);r.vsub(s,w);var Q=w.dot(c);if(Q>0&&0>P){r.vsub(s,w),a.copy(c),a.normalize(),Q=w.dot(a),a.scale(Q,w),w.vadd(s,w);var R=w.distanceTo(r);if(R<e.radius){var M=this.createContactEquation(l,p,e,f);w.vsub(r,M.ni),M.ni.normalize(),M.ni.scale(e.radius,M.ri),u.pointToWorldFrame(o,i,w,w),w.vsub(p.position,M.rj),u.vectorToWorldFrame(i,M.ni,M.ni),u.vectorToWorldFrame(i,M.ri,M.ri),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}}for(var S=F,T=G,U=H,V=A,K=0,W=g.length;K!==W;K++){f.getTriangleVertices(g[K],S,T,U),f.getNormal(g[K],V),r.vsub(S,w);var R=w.dot(V);if(V.scale(R,w),r.vsub(w,w),R=w.distanceTo(r),t.pointInTriangle(w,S,T,U)&&R<e.radius){var M=this.createContactEquation(l,p,e,f);w.vsub(r,M.ni),M.ni.normalize(),M.ni.scale(e.radius,M.ri),u.pointToWorldFrame(o,i,w,w),w.vsub(p.position,M.rj),u.vectorToWorldFrame(i,M.ni,M.ni),u.vectorToWorldFrame(i,M.ri,M.ri),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}g.length=0};var K=new l,L=new l;n.prototype[i.types.SPHERE|i.types.PLANE]=n.prototype.spherePlane=function(e,f,n,o,d,i,t,l){var u=this.createContactEquation(t,l,e,f);if(u.ni.set(0,0,1),i.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.mult(e.radius,u.ri),n.vsub(o,K),u.ni.mult(u.ni.dot(K),L),K.vsub(L,u.rj),-K.dot(u.ni)<=e.radius){var p=u.ri,s=u.rj;p.vadd(n,p),p.vsub(t.position,p),s.vadd(o,s),s.vsub(l.position,s),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}};var M=new l,P=new l,Q=new l,R=new l,S=new l,T=new l,U=new l,V=[new l,new l,new l,new l,new l,new l],W=new l,X=new l,Y=new l,Z=new l;n.prototype[i.types.SPHERE|i.types.BOX]=n.prototype.sphereBox=function(e,f,n,o,d,i,t,l){var u=this.v3pool,p=V;n.vsub(o,R),f.getSideNormals(p,i);for(var s=e.radius,y=!1,c=X,a=Y,r=Z,w=null,b=0,m=0,N=0,g=null,x=0,j=p.length;x!==j&&y===!1;x++){var v=S;v.copy(p[x]);var A=v.norm();v.normalize();var C=R.dot(v);if(A+s>C&&C>0){var O=T,h=U;O.copy(p[(x+1)%3]),h.copy(p[(x+2)%3]);var k=O.norm(),q=h.norm();O.normalize(),h.normalize();var z=R.dot(O),B=R.dot(h);if(k>z&&z>-k&&q>B&&B>-q){var D=Math.abs(C-A-s);(null===g||g>D)&&(g=D,m=z,N=B,w=A,c.copy(v),a.copy(O),r.copy(h),b++)}}}if(b){y=!0;var E=this.createContactEquation(t,l,e,f);c.mult(-s,E.ri),E.ni.copy(c),E.ni.negate(E.ni),c.mult(w,c),a.mult(m,a),c.vadd(a,c),r.mult(N,r),c.vadd(r,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(t.position,E.ri),E.rj.vadd(o,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult)}for(var F=u.get(),G=W,H=0;2!==H&&!y;H++)for(var I=0;2!==I&&!y;I++)for(var J=0;2!==J&&!y;J++)if(F.set(0,0,0),H?F.vadd(p[0],F):F.vsub(p[0],F),I?F.vadd(p[1],F):F.vsub(p[1],F),J?F.vadd(p[2],F):F.vsub(p[2],F),o.vadd(F,G),G.vsub(n,G),G.norm2()<s*s){y=!0;var E=this.createContactEquation(t,l,e,f);E.ri.copy(G),E.ri.normalize(),E.ni.copy(E.ri),E.ri.mult(s,E.ri),E.rj.copy(F),E.ri.vadd(n,E.ri),E.ri.vsub(t.position,E.ri),E.rj.vadd(o,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult)}u.release(F),F=null;for(var K=u.get(),L=u.get(),E=u.get(),M=u.get(),D=u.get(),P=p.length,H=0;H!==P&&!y;H++)for(var I=0;I!==P&&!y;I++)if(H%3!==I%3){p[I].cross(p[H],K),K.normalize(),p[H].vadd(p[I],L),E.copy(n),E.vsub(L,E),E.vsub(o,E);var Q=E.dot(K);K.mult(Q,M);for(var J=0;J===H%3||J===I%3;)J++;D.copy(n),D.vsub(M,D),D.vsub(L,D),D.vsub(o,D);var $=Math.abs(Q),_=D.norm();if($<p[J].norm()&&s>_){y=!0;var ef=this.createContactEquation(t,l,e,f);L.vadd(M,ef.rj),ef.rj.copy(ef.rj),D.negate(ef.ni),ef.ni.normalize(),ef.ri.copy(ef.rj),ef.ri.vadd(o,ef.ri),ef.ri.vsub(n,ef.ri),ef.ri.normalize(),ef.ri.mult(s,ef.ri),ef.ri.vadd(n,ef.ri),ef.ri.vsub(t.position,ef.ri),ef.rj.vadd(o,ef.rj),ef.rj.vsub(l.position,ef.rj),this.result.push(ef),this.createFrictionEquationsFromContact(ef,this.frictionResult)}}u.release(K,L,E,M,D)};var $=new l,_=new l,ef=new l,ff=new l,nf=new l,of=new l,df=new l,tf=new l,lf=new l,uf=new l;n.prototype[i.types.SPHERE|i.types.CONVEXPOLYHEDRON]=n.prototype.sphereConvex=function(e,f,n,d,i,t,l,u){var p=this.v3pool;n.vsub(d,$);for(var s=f.faceNormals,y=f.faces,c=f.vertices,a=e.radius,r=0;r!==c.length;r++){var w=c[r],b=nf;t.vmult(w,b),d.vadd(b,b);var m=ff;if(b.vsub(n,m),m.norm2()<a*a){g=!0;var N=this.createContactEquation(l,u,e,f);return N.ri.copy(m),N.ri.normalize(),N.ni.copy(N.ri),N.ri.mult(a,N.ri),b.vsub(d,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(l.position,N.ri),N.rj.vadd(d,N.rj),N.rj.vsub(u.position,N.rj),this.result.push(N),void this.createFrictionEquationsFromContact(N,this.frictionResult)}}for(var g=!1,r=0,x=y.length;r!==x&&g===!1;r++){var j=s[r],v=y[r],A=of;t.vmult(j,A);var C=df;t.vmult(c[v[0]],C),C.vadd(d,C);var O=tf;A.mult(-a,O),n.vadd(O,O);var h=lf;O.vsub(C,h);var k=h.dot(A),q=uf;if(n.vsub(C,q),0>k&&q.dot(A)>0){for(var z=[],B=0,D=v.length;B!==D;B++){var E=p.get();t.vmult(c[v[B]],E),d.vadd(E,E),z.push(E)}if(o(z,A,n)){g=!0;var N=this.createContactEquation(l,u,e,f);A.mult(-a,N.ri),A.negate(N.ni);var F=p.get();A.mult(-k,F);var G=p.get();A.mult(-a,G),n.vsub(d,N.rj),N.rj.vadd(G,N.rj),N.rj.vadd(F,N.rj),N.rj.vadd(d,N.rj),N.rj.vsub(u.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(l.position,N.ri),p.release(F),p.release(G),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(var B=0,H=z.length;B!==H;B++)p.release(z[B]);return}for(var B=0;B!==v.length;B++){var I=p.get(),J=p.get();t.vmult(c[v[(B+1)%v.length]],I),t.vmult(c[v[(B+2)%v.length]],J),d.vadd(I,I),d.vadd(J,J);var K=_;J.vsub(I,K);var L=ef;K.unit(L);var M=p.get(),P=p.get();n.vsub(I,P);var Q=P.dot(L);L.mult(Q,M),M.vadd(I,M);var R=p.get();if(M.vsub(n,R),Q>0&&Q*Q<K.norm2()&&R.norm2()<a*a){var N=this.createContactEquation(l,u,e,f);M.vsub(d,N.rj),M.vsub(n,N.ni),N.ni.normalize(),N.ni.mult(a,N.ri),N.rj.vadd(d,N.rj),N.rj.vsub(u.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(l.position,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(var B=0,H=z.length;B!==H;B++)p.release(z[B]);return p.release(I),p.release(J),p.release(M),p.release(R),void p.release(P)}p.release(I),p.release(J),p.release(M),p.release(R),p.release(P)}for(var B=0,H=z.length;B!==H;B++)p.release(z[B])}}};new l,new l;n.prototype[i.types.PLANE|i.types.BOX]=n.prototype.planeBox=function(e,f,n,o,d,i,t,l){f.convexPolyhedronRepresentation.material=f.material,f.convexPolyhedronRepresentation.collisionResponse=f.collisionResponse,this.planeConvex(e,f.convexPolyhedronRepresentation,n,o,d,i,t,l)};var pf=new l,sf=new l,yf=new l,cf=new l;n.prototype[i.types.PLANE|i.types.CONVEXPOLYHEDRON]=n.prototype.planeConvex=function(e,f,n,o,d,i,t,l){var u=pf,p=sf;p.set(0,0,1),d.vmult(p,p);for(var s=0,y=yf,c=0;c!==f.vertices.length;c++){u.copy(f.vertices[c]),i.vmult(u,u),o.vadd(u,u),u.vsub(n,y);var a=p.dot(y);if(0>=a){var r=this.createContactEquation(t,l,e,f),w=cf;p.mult(p.dot(y),w),u.vsub(w,w),w.vsub(n,r.ri),r.ni.copy(p),u.vsub(o,r.rj),r.ri.vadd(n,r.ri),r.ri.vsub(t.position,r.ri),r.rj.vadd(o,r.rj),r.rj.vsub(l.position,r.rj),this.result.push(r),s++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(r,this.frictionResult)}}this.enableFrictionReduction&&s&&this.createFrictionFromAverage(s)};var af=new l,rf=new l;n.prototype[i.types.CONVEXPOLYHEDRON]=n.prototype.convexConvex=function(e,f,n,o,d,i,t,l,u,p,s,y){var c=af;if(!(n.distanceTo(o)>e.boundingSphereRadius+f.boundingSphereRadius)&&e.findSeparatingAxis(f,n,d,o,i,c,s,y)){var a=[],r=rf;e.clipAgainstHull(n,d,f,o,i,c,-100,100,a);for(var w=0,b=0;b!==a.length;b++){var m=this.createContactEquation(t,l,e,f,u,p),N=m.ri,g=m.rj;c.negate(m.ni),a[b].normal.negate(r),r.mult(a[b].depth,r),a[b].point.vadd(r,N),g.copy(a[b].point),N.vsub(n,N),g.vsub(o,g),N.vadd(n,N),N.vsub(t.position,N),g.vadd(o,g),g.vsub(l.position,g),this.result.push(m),w++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(m,this.frictionResult)}this.enableFrictionReduction&&w&&this.createFrictionFromAverage(w)}};var wf=new l,bf=new l,mf=new l;n.prototype[i.types.PLANE|i.types.PARTICLE]=n.prototype.planeParticle=function(e,f,n,o,d,i,t,l){var u=wf;u.set(0,0,1),t.quaternion.vmult(u,u);var p=bf;o.vsub(t.position,p);var s=u.dot(p);if(0>=s){var y=this.createContactEquation(l,t,f,e);y.ni.copy(u),y.ni.negate(y.ni),y.ri.set(0,0,0);var c=mf;u.mult(u.dot(o),c),o.vsub(c,c),y.rj.copy(c),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}};var Nf=new l;n.prototype[i.types.PARTICLE|i.types.SPHERE]=n.prototype.sphereParticle=function(e,f,n,o,d,i,t,l){var u=Nf;u.set(0,0,1),o.vsub(n,u);var p=u.norm2();if(p<=e.radius*e.radius){var s=this.createContactEquation(l,t,f,e);u.normalize(),s.rj.copy(u),s.rj.mult(e.radius,s.rj),s.ni.copy(u),s.ni.negate(s.ni),s.ri.set(0,0,0),this.result.push(s),this.createFrictionEquationsFromContact(s,this.frictionResult)}};var gf=new p,xf=new l,jf=(new l,new l),vf=new l,Af=new l;n.prototype[i.types.PARTICLE|i.types.CONVEXPOLYHEDRON]=n.prototype.convexParticle=function(e,f,n,o,d,i,t,l){var u=-1,p=jf,s=Af,y=null,c=0,a=xf;if(a.copy(o),a.vsub(n,a),d.conjugate(gf),gf.vmult(a,a),e.pointIsInside(a)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,d),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(d);for(var r=0,w=e.faces.length;r!==w;r++){var b=[e.worldVertices[e.faces[r][0]]],m=e.worldFaceNormals[r];o.vsub(b[0],vf);var N=-m.dot(vf);(null===y||Math.abs(N)<Math.abs(y))&&(y=N,u=r,p.copy(m),c++)}if(-1!==u){var g=this.createContactEquation(l,t,f,e);p.mult(y,s),s.vadd(o,s),s.vsub(n,s),g.rj.copy(s),p.negate(g.ni),g.ri.set(0,0,0);var x=g.ri,j=g.rj;x.vadd(o,x),x.vsub(l.position,x),j.vadd(n,j),j.vsub(t.position,j),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},n.prototype[i.types.BOX|i.types.HEIGHTFIELD]=n.prototype.boxHeightfield=function(e,f,n,o,d,i,t,l){e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,f,n,o,d,i,t,l)};var Cf=new l,Of=new l,hf=[0];n.prototype[i.types.CONVEXPOLYHEDRON|i.types.HEIGHTFIELD]=n.prototype.convexHeightfield=function(e,f,n,o,d,i,t,l){var p=f.data,s=f.elementSize,y=e.boundingSphereRadius,c=Of,a=hf,r=Cf;u.pointToLocalFrame(o,i,n,r);var w=Math.floor((r.x-y)/s)-1,b=Math.ceil((r.x+y)/s)+1,m=Math.floor((r.y-y)/s)-1,N=Math.ceil((r.y+y)/s)+1;if(!(0>b||0>N||w>p.length||m>p[0].length)){0>w&&(w=0),0>b&&(b=0),0>m&&(m=0),0>N&&(N=0),w>=p.length&&(w=p.length-1),b>=p.length&&(b=p.length-1),N>=p[0].length&&(N=p[0].length-1),m>=p[0].length&&(m=p[0].length-1);var g=[];f.getRectMinMax(w,m,b,N,g);var x=g[0],j=g[1];if(!(r.z-y>j||r.z+y<x))for(var v=w;b>v;v++)for(var A=m;N>A;A++)f.getConvexTrianglePillar(v,A,!1),u.pointToWorldFrame(o,i,f.pillarOffset,c),n.distanceTo(c)<f.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&this.convexConvex(e,f.pillarConvex,n,c,d,i,t,l,null,null,a,null),f.getConvexTrianglePillar(v,A,!0),u.pointToWorldFrame(o,i,f.pillarOffset,c),n.distanceTo(c)<f.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&this.convexConvex(e,f.pillarConvex,n,c,d,i,t,l,null,null,a,null)}};var kf=new l,qf=new l;n.prototype[i.types.SPHERE|i.types.HEIGHTFIELD]=n.prototype.sphereHeightfield=function(e,f,n,o,d,i,t,l){var p=f.data,s=e.radius,y=f.elementSize,c=qf,a=kf;u.pointToLocalFrame(o,i,n,a);var r=Math.floor((a.x-s)/y)-1,w=Math.ceil((a.x+s)/y)+1,b=Math.floor((a.y-s)/y)-1,m=Math.ceil((a.y+s)/y)+1;if(!(0>w||0>m||r>p.length||m>p[0].length)){0>r&&(r=0),0>w&&(w=0),0>b&&(b=0),0>m&&(m=0),r>=p.length&&(r=p.length-1),w>=p.length&&(w=p.length-1),m>=p[0].length&&(m=p[0].length-1),b>=p[0].length&&(b=p[0].length-1);var N=[];f.getRectMinMax(r,b,w,m,N);var g=N[0],x=N[1];if(!(a.z-s>x||a.z+s<g))for(var j=this.result,v=r;w>v;v++)for(var A=b;m>A;A++){var C=j.length;f.getConvexTrianglePillar(v,A,!1),u.pointToWorldFrame(o,i,f.pillarOffset,c),n.distanceTo(c)<f.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&this.sphereConvex(e,f.pillarConvex,n,c,d,i,t,l),f.getConvexTrianglePillar(v,A,!0),u.pointToWorldFrame(o,i,f.pillarOffset,c),n.distanceTo(c)<f.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&this.sphereConvex(e,f.pillarConvex,n,c,d,i,t,l);var O=j.length-C;if(O>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,f){function n(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new d,this.broadphase=new m,this.bodies=[],this.solver=new t,this.constraints=[],this.narrowphase=new l(this),this.collisionMatrix=new p,this.collisionMatrixPrevious=new p,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new a,this.defaultMaterial=new s("default"),this.defaultContactMaterial=new y(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}f.exports=n;var o=e("../shapes/Shape"),d=e("../math/Vec3"),i=e("../math/Quaternion"),t=e("../solver/GSSolver"),l=(e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation"),e("./Narrowphase")),u=e("../utils/EventTarget"),p=e("../collision/ArrayCollisionMatrix"),s=e("../material/Material"),y=e("../material/ContactMaterial"),c=e("../objects/Body"),a=e("../utils/TupleDictionary"),r=e("../collision/RaycastResult"),w=e("../collision/AABB"),b=e("../collision/Ray"),m=e("../collision/NaiveBroadphase");n.prototype=new u;var N=(new w,new b);if(n.prototype.getContactMaterial=function(e,f){return this.contactMaterialTable.get(e.id,f.id)},n.prototype.numObjects=function(){return this.bodies.length},n.prototype.collisionMatrixTick=function(){var e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset()},n.prototype.add=n.prototype.addBody=function(e){-1===this.bodies.indexOf(e)&&(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof c&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.dispatchEvent(this.addBodyEvent))},n.prototype.addConstraint=function(e){this.constraints.push(e)},n.prototype.removeConstraint=function(e){var f=this.constraints.indexOf(e);-1!==f&&this.constraints.splice(f,1)},n.prototype.rayTest=function(e,f,n){n instanceof r?this.raycastClosest(e,f,{skipBackfaces:!0},n):this.raycastAll(e,f,{skipBackfaces:!0},n)},n.prototype.raycastAll=function(e,f,n,o){return n.mode=b.ALL,n.from=e,n.to=f,n.callback=o,N.intersectWorld(this,n)},n.prototype.raycastAny=function(e,f,n,o){return n.mode=b.ANY,n.from=e,n.to=f,n.result=o,N.intersectWorld(this,n)},n.prototype.raycastClosest=function(e,f,n,o){return n.mode=b.CLOSEST,n.from=e,n.to=f,n.result=o,N.intersectWorld(this,n)},n.prototype.remove=function(e){e.world=null;var f=this.bodies.length-1,n=this.bodies,o=n.indexOf(e);if(-1!==o){n.splice(o,1);for(var d=0;d!==n.length;d++)n[d].index=d;this.collisionMatrix.setNumObjects(f),this.removeBodyEvent.body=e,this.dispatchEvent(this.removeBodyEvent)}},n.prototype.removeBody=n.prototype.remove,n.prototype.addMaterial=function(e){this.materials.push(e)},n.prototype.addContactMaterial=function(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)},"undefined"==typeof performance&&(performance={}),!performance.now){var g=Date.now();performance.timing&&performance.timing.navigationStart&&(g=performance.timing.navigationStart),performance.now=function(){return Date.now()-g}}var x=new d;n.prototype.step=function(e,f,n){if(n=n||10,f=f||0,0===f)this.internalStep(e),this.time+=e;else{var o=Math.floor((this.time+f)/e)-Math.floor(this.time/e);o=Math.min(o,n);for(var d=performance.now(),i=0;i!==o&&(this.internalStep(e),!(performance.now()-d>1e3*e));i++);this.time+=f;for(var t=this.time%e,l=t/e,u=x,p=this.bodies,s=0;s!==p.length;s++){var y=p[s];y.type!==c.STATIC&&y.sleepState!==c.SLEEPING?(y.position.vsub(y.previousPosition,u),u.scale(l,u),y.position.vadd(u,y.interpolatedPosition)):(y.interpolatedPosition.copy(y.position),y.interpolatedQuaternion.copy(y.quaternion))}}};var j={type:"postStep"},v={type:"preStep"},A={type:"collide",body:null,contact:null},C=[],O=[],h=[],k=[],q=(new d,new d,new d,new d,new d,new d,new d,new d,new d,new i,new i),z=new i,B=new d;n.prototype.internalStep=function(e){this.dt=e;var f,n=this.contacts,d=h,i=k,t=this.numObjects(),l=this.bodies,u=this.solver,p=this.gravity,s=this.doProfiling,y=this.profile,a=c.DYNAMIC,r=this.constraints,w=O,b=(p.norm(),p.x),m=p.y,N=p.z,g=0;for(s&&(f=performance.now()),g=0;g!==t;g++){var x=l[g];if(x.type&a){var D=x.force,E=x.mass;D.x+=E*b,D.y+=E*m,D.z+=E*N}}for(var g=0,F=this.subsystems.length;g!==F;g++)this.subsystems[g].update();s&&(f=performance.now()),d.length=0,i.length=0,this.broadphase.collisionPairs(this,d,i),s&&(y.broadphase=performance.now()-f);var G=r.length;for(g=0;g!==G;g++){var H=r[g];if(!H.collideConnected)for(var I=d.length-1;I>=0;I-=1)(H.bodyA===d[I]&&H.bodyB===i[I]||H.bodyB===d[I]&&H.bodyA===i[I])&&(d.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),s&&(f=performance.now());var J=C,K=n.length;for(g=0;g!==K;g++)J.push(n[g]);n.length=0;var L=this.frictionEquations.length;for(g=0;g!==L;g++)w.push(this.frictionEquations[g]);this.frictionEquations.length=0,this.narrowphase.getContacts(d,i,this,n,J,this.frictionEquations,w),s&&(y.narrowphase=performance.now()-f),s&&(f=performance.now());for(var g=0;g<this.frictionEquations.length;g++)u.addEquation(this.frictionEquations[g]);for(var M=n.length,P=0;P!==M;P++){{var Q,H=n[P],x=H.bi,R=H.bj;H.si,H.sj}Q=x.material&&R.material?this.getContactMaterial(x.material,R.material)||this.defaultContactMaterial:this.defaultContactMaterial;var S=Q.friction;if(x.material&&R.material&&(x.material.friction>=0&&R.material.friction>=0&&(S=x.material.friction*R.material.friction),x.material.restitution>=0&&R.material.restitution>=0&&(H.restitution=x.material.restitution*R.material.restitution)),u.addEquation(H),x.allowSleep&&x.type===c.DYNAMIC&&x.sleepState===c.SLEEPING&&R.sleepState===c.AWAKE&&R.type!==c.STATIC){var T=R.velocity.norm2()+R.angularVelocity.norm2(),U=Math.pow(R.sleepSpeedLimit,2);
T>=2*U&&(x._wakeUpAfterNarrowphase=!0)}if(R.allowSleep&&R.type===c.DYNAMIC&&R.sleepState===c.SLEEPING&&x.sleepState===c.AWAKE&&x.type!==c.STATIC){var V=x.velocity.norm2()+x.angularVelocity.norm2(),W=Math.pow(x.sleepSpeedLimit,2);V>=2*W&&(R._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(x,R,!0),this.collisionMatrixPrevious.get(x,R)||(A.body=R,A.contact=H,x.dispatchEvent(A),A.body=x,R.dispatchEvent(A))}for(s&&(y.makeContactConstraints=performance.now()-f,f=performance.now()),g=0;g!==t;g++){var x=l[g];x._wakeUpAfterNarrowphase&&(x.wakeUp(),x._wakeUpAfterNarrowphase=!1)}var G=r.length;for(g=0;g!==G;g++){var H=r[g];H.update();for(var I=0,X=H.equations.length;I!==X;I++){var Y=H.equations[I];u.addEquation(Y)}}u.solve(e,this),s&&(y.solve=performance.now()-f),u.removeAllEquations();var Z=Math.pow;for(g=0;g!==t;g++){var x=l[g];if(x.type&a){var $=Z(1-x.linearDamping,e),_=x.velocity;_.mult($,_);var ef=x.angularVelocity;if(ef){var ff=Z(1-x.angularDamping,e);ef.mult(ff,ef)}}}for(this.dispatchEvent(v),g=0;g!==t;g++){var x=l[g];x.preStep&&x.preStep.call(x)}s&&(f=performance.now());{var nf=q,of=z,df=this.stepnumber,tf=c.DYNAMIC|c.KINEMATIC,lf=df%(this.quatNormalizeSkip+1)===0,uf=this.quatNormalizeFast,pf=.5*e;o.types.PLANE,o.types.CONVEXPOLYHEDRON}for(g=0;g!==t;g++){var sf=l[g],yf=sf.force,cf=sf.torque;if(sf.type&tf&&sf.sleepState!==c.SLEEPING){var af=sf.velocity,rf=sf.angularVelocity,wf=sf.position,bf=sf.quaternion,mf=sf.invMass,Nf=sf.invInertiaWorld;af.x+=yf.x*mf*e,af.y+=yf.y*mf*e,af.z+=yf.z*mf*e,sf.angularVelocity&&(Nf.vmult(cf,B),B.mult(e,B),B.vadd(rf,rf)),wf.x+=af.x*e,wf.y+=af.y*e,wf.z+=af.z*e,sf.angularVelocity&&(nf.set(rf.x,rf.y,rf.z,0),nf.mult(bf,of),bf.x+=pf*of.x,bf.y+=pf*of.y,bf.z+=pf*of.z,bf.w+=pf*of.w,lf&&(uf?bf.normalizeFast():bf.normalize())),sf.aabb&&(sf.aabbNeedsUpdate=!0),sf.updateInertiaWorld&&sf.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,s&&(y.integrate=performance.now()-f),this.time+=e,this.stepnumber+=1,this.dispatchEvent(j),g=0;g!==t;g++){var x=l[g],gf=x.postStep;gf&&gf.call(x)}if(this.allowSleep)for(g=0;g!==t;g++)l[g].sleepTick(this.time)},n.prototype.clearForces=function(){for(var e=this.bodies,f=e.length,n=0;n!==f;n++){{var o=e[n];o.force,o.torque}o.force.set(0,0,0),o.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./mgame/dependencies/composer.js
/**
 * Composer is a simple javascript framework for developing live composite objects.
 * It defines an architecture for the program to run dependent functions asynchronously.
 *
 *
 * @link   https://github.com/makannew/Composer
 * @file   composer.js
 * @author Makan Edrisi
 * @since  2018
 * @version 1.5.0
 */

class Address {
  constructor(address) {
    if (address) {
      this.arr = [];
      for (let i = 0, len = address.length; i < len; ++i) {
        this.arr.push(address[i]);
      }
    } else {
      this.arr = [];
    }
  }

  extend(newProp) {
    if (Array.isArray(newProp)) {
      for (let i = 0, len = newProp.length; i < len; ++i) {
        this.arr.push(newProp[i]);
      }
    } else {
      this.arr.push(newProp);
    }
  }

  clear() {
    this.arr = [];
  }
  isEqual(address) {
    let len = this.arr.length;
    if (len != address.arr.length) {
      return false;
    } else {
      for (let i = len - 1; i > -1; --i) {
        if (this.arr[i] != address.arr[i]) return false;
      }
      return true;
    }
  }
  getRefFrom(obj) {
    let result = obj;
    for (let i = 0, len = this.arr.length; i < len; ++i) {
      if (typeof result === "object" && result != null) {
        result = Reflect.get(result, this.arr[i]);
      } else {
        result = undefined;
      }
    }
    return result;
  }
  existIn(addresses) {
    for (let i = 0, len = addresses.length; i < len; ++i) {
      if (this.isEqual(addresses[i])) return true;
    }
    return false;
  }
  indexIn(addresses) {
    for (let i = 0, len = addresses.length; i < len; ++i) {
      if (this.isEqual(addresses[i])) return i;
    }
    return -1;
  }
  buildPath(passedObj) {
    let obj = passedObj;
    for (let i = 0, len = this.arr.length; i < len; ++i) {
      if (!obj.hasOwnProperty(this.arr[i])) {
        Reflect.set(obj, this.arr[i], {});
      }
      obj = Reflect.get(obj, this.arr[i]);
    }
    return obj;
  }

  name() {
    return this.arr[this.arr.length - 1];
  }
  isIn(passedObj) {
    let obj = passedObj;
    for (let i = 0, len = this.arr.length; i < len; ++i) {
      if (
        typeof obj === "object" &&
        obj != null &&
        obj.hasOwnProperty(this.arr[i])
      ) {
        obj = Reflect.get(obj, this.arr[i]);
      } else {
        return false;
      }
    }
    return true;
  }
  getObject(obj) {
    let result = obj;
    for (let i = 0, len = this.arr.length - 1; i < len; ++i) {
      result = Reflect.get(result, this.arr[i]);
    }
    return result;
  }
  isParent(address) {
    if (this.arr.length > address.arr.length) return false;
    for (let i = 0, len = this.arr.length; i < len; ++i) {
      if (this.arr[i] != address.arr[i]) return false;
    }
    return true;
  }
}
/* harmony default export */ var composer = (function () {
  "use strict";
  const metaDataKey = Symbol.for("metaDataKey");
  const composite = {};
  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  const paraRegExp = /.*?\(\{([^)]*)\}\)/;
  let addingLink = false;
  let removingLink = false;
  let upPropagation = true;
  let compositeRunningFunctions = false;
  let nestedPropertiesCourier = {};

  const interceptor = function (localComposite, funcAddress, needsUpdate) {
    let absoluteAddress = new Address();
    let relativeAddress = new Address(funcAddress.arr);
    relativeAddress.arr.pop();

    const interceptorProxy = new Proxy(localComposite, {
      set(obj, prop, value, receiver) {
        absoluteAddress.extend(prop);
        if (!absoluteAddress.existIn(needsUpdate)) {
          needsUpdate.push(new Address(absoluteAddress.arr));
        }
        Reflect.set(obj, prop, value, receiver);
      },

      get: function (obj, prop, receiver) {
        if (obj == localComposite) {
          absoluteAddress = new Address(relativeAddress.arr);
        }
        if (prop == Symbol.unscopables) {
          return undefined;
        }
        absoluteAddress.extend(prop);
        return Reflect.get(obj, prop, receiver);
      },

      has(obj, key) {
        if (localComposite.hasOwnProperty(key)) {
          return true;
        }
        return false;
      },
    });
    return interceptorProxy;
  };

  const runFunction = async function (funcAddress) {
    let needsUpdate = [];
    let localComposite = funcAddress.getObject(composite);
    let currentAddress = new Address(funcAddress.arr);
    currentAddress.arr.pop();
    // call function
    try {
      localComposite[funcAddress.name()] = await funcAddress
        .getRefFrom(metaTree)
        [metaDataKey].function(
          localComposite,
          composite,
          interceptor(localComposite, funcAddress, needsUpdate),
          composite[metaDataKey].compositeProxy,
          currentAddress.arr
        );
    } catch {}

    needsUpdate.push(new Address(funcAddress.arr));
    compositeRunningFunctions = true;
    manageUpdates(needsUpdate);
  };
  //
  composite[metaDataKey] = { updateQueue: [], metaTree: {} };
  let metaTree = composite[metaDataKey].metaTree;
  let updateQueue = composite[metaDataKey].updateQueue;
  metaTree[metaDataKey] = {
    type: "root",
    affectedFunctions: [],
    inputProps: [],
    externalLinks: [],
  };

  const setProperties = function (options, setCurrentAdd) {
    let currentComposite = setCurrentAdd.getRefFrom(composite);
    let needsUpdate = [];
    let itemAddress;
    Object.assign(currentComposite, options);
    for (let item in options) {
      itemAddress = new Address(setCurrentAdd.arr);
      itemAddress.extend(item);
      needsUpdate.push(new Address(itemAddress.arr));
      if (!itemAddress.isIn(metaTree)) {
        buildMetaPath(itemAddress);
      }
    }
    compositeRunningFunctions = true;
    manageUpdates(needsUpdate);
  };

  const removeLink = function () {
    removingLink = false;
    let addresses = [];
    // validating input addresses
    if (arguments[0]) {
      for (let item of nestedPropertiesCourier.property) {
        if (!item.existIn(addresses)) {
          addresses.push(new Address(item.arr));
        }
        if (!item.isIn(metaTree)) {
          throw console.error("removeLink address not found");
        }
      }
    } else {
      throw console.error("at least an address need for remove link");
    }
    for (let i = 0; i < addresses.length; ++i) {
      let externalLinks = addresses[i].getRefFrom(metaTree)[metaDataKey]
        .externalLinks;
      for (let j = 0; j < externalLinks.length; ++j) {
        let otherExternalLinks = externalLinks[j].getRefFrom(metaTree)[
          metaDataKey
        ].externalLinks;
        let removingIndex = addresses[i].indexIn(otherExternalLinks);
        if (removingIndex > -1) {
          otherExternalLinks.splice(removingIndex, 1);
        }
      }
      addresses[i].getRefFrom(metaTree)[metaDataKey].externalLinks = [];
    }
  };

  const addLink = function () {
    addingLink = false;
    let addresses = [];
    //let finalAddresses =[];
    // validating input addresses
    if (arguments[1]) {
      for (let item of nestedPropertiesCourier.property) {
        if (!item.existIn(addresses)) {
          addresses.push(new Address(item.arr));
        }
        if (!item.isIn(metaTree)) {
          item.buildPath(composite);
          buildMetaPath(item);
        }
      }
    } else {
      throw console.error("at least two address need for linking");
    }

    let finalAddresses = [...addresses];
    // add all already linked addresses to current link group
    for (let i = 0; i < addresses.length; ++i) {
      let externalLinks = addresses[i].getRefFrom(metaTree)[metaDataKey]
        .externalLinks;
      for (let j = 0; j < externalLinks.length; ++j) {
        if (!externalLinks[j].existIn(finalAddresses)) {
          finalAddresses.push(new Address(externalLinks[j].arr));
        }
      }
    }
    // write a copy of addresses to each linked prop
    for (let i = 0; i < finalAddresses.length; ++i) {
      let exceptSelf = finalAddresses.filter(
        (value) => !finalAddresses[i].isEqual(value)
      );
      finalAddresses[i].getRefFrom(metaTree)[metaDataKey].externalLinks = [
        ...exceptSelf,
      ];
    }
    compositeRunningFunctions = true;
    manageUpdates([...syncLinkedProps(addresses[0])]);
  };

  const addFunction = function (method, addFunctionCurrentAdd) {
    let finalFunction;
    let functionPara = [];
    let finalPara;
    let importedFunction = splitFunction(method);
    let injectingFunction = function () {
      const proxiedComposite = arguments[3];
      const currentAddress = arguments[4];
    };
    let finalBody =
      splitFunction(injectingFunction).body +
      "with (arguments[2]) {" +
      importedFunction.body +
      "}";
    if (importedFunction.paraString) {
      importedFunction.paraArray.forEach((item) => {
        let paraAddress = new Address(addFunctionCurrentAdd.arr);
        paraAddress.extend(item);
        functionPara.push(new Address(paraAddress.arr));
      });
      finalPara = "{" + importedFunction.paraString + "}";
    } else {
      throw console.error("Function must have at least one input parameter");
    }
    finalFunction = new AsyncFunction(finalPara, finalBody);

    Object.defineProperty(finalFunction, "name", {
      value: method.name,
      configurable: true,
    });

    let methodAddress = new Address(addFunctionCurrentAdd.arr);
    methodAddress.extend(method.name);

    // if address is not available in metaTree build a new branch for function metadata
    if (!methodAddress.isIn(metaTree)) {
      buildMetaPath(methodAddress);
    }
    // otherwise keep affectedFunctions data unchanged while overwriting other metadata
    let methodMeta = methodAddress.getRefFrom(metaTree)[metaDataKey];
    methodMeta.function = finalFunction;
    methodMeta.type = "func";

    // set a new composite prop as method name if is not exist
    if (!methodAddress.isIn(composite)) {
      methodAddress.buildPath(composite);
      methodAddress.getObject(composite)[method.name] = undefined;
    }

    for (let i = 0, len = functionPara.length; i < len; ++i) {
      // add address as a function input parameter
      methodMeta.inputProps.push(new Address(functionPara[i].arr));
      // buil address in metaTree for function input parameters if they are not exist
      if (!functionPara[i].isIn(metaTree)) {
        buildMetaPath(functionPara[i]);
      }

      // add external link to the function input parameter
      functionPara[i]
        .getRefFrom(metaTree)
        [metaDataKey].affectedFunctions.push(new Address(methodAddress.arr));
      // set a new composite prop by function input parameters
      if (!functionPara[i].isIn(composite)) {
        functionPara[i].buildPath(composite);
        functionPara[i].getObject(composite)[
          functionPara[i].name()
        ] = undefined;
      }
    }
    //update newly added function
    if (allInputParaDefined(methodAddress)) {
      runFunction(methodAddress);
    }
  };

  const buildMetaPath = function (address) {
    let obj = metaTree;
    for (let i = 0, len = address.arr.length; i < len; ++i) {
      if (!obj.hasOwnProperty(address.arr[i])) {
        Reflect.set(obj, address.arr[i], {});
        obj[address.arr[i]][metaDataKey] = {
          type: "prop",
          affectedFunctions: [],
          inputProps: [],
          externalLinks: [],
        };
      }
      obj = Reflect.get(obj, address.arr[i]);
    }
  };

  const splitFunction = function (func) {
    let result = {};
    let functionString = func.toString();
    let para = functionString.match(paraRegExp);
    if (para) {
      result.paraString = para[1];
      result.paraArray = result.paraString
        .split(",")
        .map((item) => item.trim());
    }
    let functionBody = functionString.slice(
      functionString.indexOf(")") + 1,
      functionString.lastIndexOf("}")
    );
    result.body = functionBody.slice(functionBody.indexOf("{") + 1);
    return result;
  };

  const syncLinkedProps = function (prop) {
    let propRef = prop.getRefFrom(metaTree);
    if (!propRef) return [];
    let externalLinks = propRef[metaDataKey].externalLinks;

    let updatedLinks = [];
    if (externalLinks.length == 0) return externalLinks;
    let propObj = prop.getObject(composite);
    for (let i = 0, len = externalLinks.length; i < len; ++i) {
      let linkedObj = externalLinks[i].getObject(composite);
      if (!(linkedObj[externalLinks[i].name()] === propObj[prop.name()])) {
        linkedObj[externalLinks[i].name()] = propObj[prop.name()];
        updatedLinks.push(new Address(externalLinks[i].arr));
      }
    }
    return updatedLinks;
  };

  const composerConfig = function (configuration) {
    if (typeof configuration != "object") {
      throw console.error(
        "configuration properties: 'upPropagation' = boolian "
      );
    }
    if (configuration.upPropagation) {
      configuration.upPropagation == true ? true : false;
    }
  };
  const manageUpdates = function (needsUpdate) {
    // find and add affected overhead properties
    let ancestors = [new Address()];
    let linkUpdates = [];

    do {
      if (upPropagation) {
        for (let i = 0, len = needsUpdate.length; i < len; ++i) {
          let item = new Address(needsUpdate[i].arr);
          while (item.arr.length > 1) {
            item.arr.pop();
            if (!item.existIn(ancestors) && !item.existIn(needsUpdate)) {
              ancestors.push(new Address(item.arr));
            }
          }
        }

        for (let i = 0, len = ancestors.length; i < len; ++i) {
          needsUpdate.push(new Address(ancestors[i].arr));
        }
      }
      linkUpdates = [];
      for (let i = 0, len = needsUpdate.length; i < len; ++i) {
        linkUpdates.push(...syncLinkedProps(needsUpdate[i]));
      }
      if (linkUpdates.length > 0) {
        needsUpdate.push(...linkUpdates);
      }
    } while (linkUpdates.length > 0 && upPropagation);

    // find affected functions and put in queue if it doesn't already exist
    for (let i = 0, len = needsUpdate.length; i < len; ++i) {
      let affectedRef = needsUpdate[i].getRefFrom(metaTree);
      if (affectedRef) {
        let affectedFunctions = affectedRef[metaDataKey].affectedFunctions;
        for (let j = 0, lenJ = affectedFunctions.length; j < lenJ; ++j) {
          if (!affectedFunctions[j].existIn(updateQueue)) {
            if (allInputParaDefined(affectedFunctions[j])) {
              updateQueue.push(new Address(affectedFunctions[j].arr));
            }
          }
        }
      }
    }
    // run in queue functions
    while (updateQueue.length > 0) {
      runFunction(updateQueue.shift());
    }
    compositeRunningFunctions = false;
  };
  const allInputParaDefined = function (funcAddress) {
    let props = funcAddress.getRefFrom(metaTree)[metaDataKey].inputProps;
    for (let i = 0, len = props.length; i < len; ++i) {
      if (props[i].getRefFrom(composite) === undefined) {
        return false;
      }
    }
    return true;
  };

  const handlerSet = function (obj, prop, value, receiver) {
    if (obj == this.sourceObj) {
      this.addressRecorder = new Address(this.sourceAddress.arr);
    }
    let addressRecorder = this.addressRecorder;
    addressRecorder.extend(prop);
    Reflect.set(obj, prop, value, receiver);
    if (addressRecorder.isIn(metaTree)) {
      let thisMeta = addressRecorder.getRefFrom(metaTree);
      let allKeys = Object.keys(thisMeta);
      for (let item of allKeys) {
        delete thisMeta[item];
      }
    } else {
      buildMetaPath(addressRecorder);
    }
    compositeRunningFunctions = true;
    manageUpdates([new Address(addressRecorder.arr)]);
    return true;
  };

  const handlerGet = function (obj, prop, receiver) {
    if (obj == this.sourceObj) {
      this.addressRecorder = new Address(this.sourceAddress.arr);
    }
    let addressRecorder = this.addressRecorder;
    if (addingLink || removingLink) {
      if (obj[metaDataKey] && obj[metaDataKey].name == "courier") {
        nestedPropertiesCourier.property[
          nestedPropertiesCourier.property.length - 1
        ].extend(prop);
      } else {
        nestedPropertiesCourier.property.push(new Address(addressRecorder.arr));
        nestedPropertiesCourier.property[
          nestedPropertiesCourier.property.length - 1
        ].extend(prop);
      }
      return new Proxy(nestedPropertiesCourier, {
        get: handlerGet,
        set: handlerSet,
        sourceObj: nestedPropertiesCourier,
        sourceAddress: new Address(addressRecorder.arr),
      });
    }
    switch (prop) {
      case "set":
        return function () {
          setProperties(arguments[0], new Address(addressRecorder.arr));
        };
      case "addFunction":
        return function () {
          addFunction(arguments[0], new Address(addressRecorder.arr));
        };
      case "addLink":
        addingLink = true;
        nestedPropertiesCourier = { property: [] };
        nestedPropertiesCourier[metaDataKey] = { name: "courier" };
        return addLink;
      case "removeLink":
        removingLink = true;
        nestedPropertiesCourier = { property: [] };
        nestedPropertiesCourier[metaDataKey] = { name: "courier" };
        return removeLink;
      case "compositeRunningFunctions":
        return compositeRunningFunctions;
      case "getParentComposite":
        return composite;
      case "isCompositeProxy":
        return true;
      case "getCurrentAddress":
        return new Address(addressRecorder.arr);
      case "getProxyLessObject":
        return addressRecorder.getRefFrom(composite);
      case "updateItself":
        compositeRunningFunctions = true;
        manageUpdates([new Address(addressRecorder.arr)]);
        return true;
      case "composerConfig":
        return composerConfig;
    }
    addressRecorder.extend(prop);
    if (!addressRecorder.isIn(metaTree)) {
      buildMetaPath(addressRecorder);
    }
    let result = Reflect.get(obj, prop, receiver);
    if (typeof result === "object" && result != null) {
      return new Proxy(result, {
        get: handlerGet,
        set: handlerSet,
        sourceObj: result,
        sourceAddress: new Address(addressRecorder.arr),
      });
    }
    return result;
  };

  const compositeProxy = new Proxy(composite, {
    get: handlerGet,
    set: handlerSet,
    sourceObj: composite,
    sourceAddress: new Address(),
  });
  composite[metaDataKey].compositeProxy = compositeProxy;
  return compositeProxy;
});

// CONCATENATED MODULE: ./mgame/mg.camera.js

function addCamera(mainComposite , newCamera){
    newCamera.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;
    newCamera.addFunction(mg_camera_addToLoadedObjects);

    //mainComposite.addLink(mainComposite.activeCamera , newCamera.activeCamera);
    newCamera.three = mainComposite.three.getProxyLessObject;
    newCamera.mainComposite = mainComposite;

    newCamera.position = {x:0,y:0,z:0};
    newCamera.quaternion = {x:0,y:0,z:0,w:0};
    newCamera.addFunction(camera);
    newCamera.addFunction(activate);
    newCamera.addFunction(setPosition);
    newCamera.addFunction(setQuaternion);
    newCamera.addFunction(setActiveCamera);
    newCamera.addFunction(cameraUpdateFunction);

}

function mg_camera_addToLoadedObjects({camera}){
  if (mg_camera_addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(camera);
  return true;
}


function camera({cameraFocalLenght , cameraNearView , cameraFarView}){

  let result = new THREE.PerspectiveCamera ( 
    cameraFocalLenght , 
    window.innerWidth / window.innerHeight , 
    cameraNearView, 
    cameraFarView);
  return result;
}

function setPosition({camera , position}){
  camera.position.x = position.x;
  camera.position.y = position.y;
  camera.position.z = position.z;
  return true;
}

function setQuaternion({camera , quaternion}){
  camera.quaternion.x = quaternion.x;
  camera.quaternion.y = quaternion.y;
  camera.quaternion.z = quaternion.z;
  camera.quaternion.w = quaternion.w;
  return true;
}

function cameraUpdateFunction({camera,three}){
  let result = function () {
    three.renderer.setSize ( window.innerWidth , window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };
  return result;
}
function activate({active , cameraUpdateFunction}){
  if (active){
    if (!activate){
      window.addEventListener('resize', cameraUpdateFunction);
    }
    return true;
  }else{
    if (activate){
      window.removeEventListener('resize' , cameraUpdateFunction);
    }
    return false;
  }
}

function setActiveCamera({activate , camera}){
  if (activate && camera){
    mainComposite.activeCamera = camera;
  };
}
// CONCATENATED MODULE: ./mgame/mg.object.js

function addObject(mainComposite , obj){
  obj.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;
  obj.three = mainComposite.three.getProxyLessObject;

  obj.self = obj;
  obj.mainComposite = mainComposite;
  //obj.quaternion = new THREE.Quaternion();//.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), 0 );
  obj.addFunction(mg_object_addToLoadedObjects);
  obj.addFunction(addTextureToLoadedObjects);
  // functions
  obj.addFunction(texture);
  obj.addFunction(needsUpdate);
  obj.addFunction(geometry);
  obj.addFunction(material);
  obj.addFunction(mesh);
  obj.addFunction(setScale);
  obj.addFunction(setColor);
  obj.addFunction(mapTexture);
  obj.addFunction(mg_object_setPosition);
  obj.addFunction(setGeneralProperties);
  obj.addFunction(setShadow);
  obj.addFunction(sceneUpdate);
  obj.addFunction(mg_object_setQuaternion);
  obj.addFunction(setPlaneHeightField);

  // default values
  if (obj.geometryName == undefined )obj.geometryName = "plane";
  if (obj.materialName == undefined)obj.materialName = "lambert"
  if (obj.color == undefined)obj.color = 0xffffff;
  if (obj.scale == undefined)obj.scale = 1;
  if (obj.positio == undefined)obj.position = new THREE.Vector3(0,0,0);
  if (obj.quaternio == undefined)obj.quaternion = new THREE.Quaternion();
  if (obj.visible == undefined)obj.visible = true;
  if (obj.active == undefined)obj.active = true;
  if(obj.widthSegments == undefined)obj.widthSegments =32;
  if(obj.heightSegments == undefined)obj.heightSegments = 32;
  if(obj.radialSegments == undefined)obj.radialSegments = 32;
  if(obj.cylinderHeightSegments == undefined)obj.cylinderHeightSegments = 1;
  if(obj.shininess == undefined)obj.shininess = 30.0;
  if(obj.castShadow == undefined)obj.castShadow =true;
  if(obj.receiveShadow == undefined)obj.receiveShadow =true;
  if(obj.materialIndex == undefined)obj.materialIndex =[0];


}

function addTextureToLoadedObjects({texture}){
  if (addTextureToLoadedObjects) return true;
  mainComposite.loadedObjects.push(texture);
  return true;
}

function mg_object_addToLoadedObjects({mesh}){
  if (mg_object_addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(mesh);
  return true;
}

function setPlaneHeightField({mesh,heightData}){
  if (geometryName=="plane"){
    for (let i = 0; i<mesh.geometry.vertices.length; i++ ) {
      mesh.geometry.vertices[i].z = heightData[i];
    }
  }
}
const sceneUpdate = function({mesh , active , three}){
  if (active && sceneUpdate!=mesh){
    three.scene.add(mesh);
    return mesh;
  }
  if (!active && sceneUpdate==mesh){
    three.scene.remove(mesh);
    return false;
  }
}


const needsUpdate = function({mesh , visible}){
  mesh.visible = visible;
  return true;
}

const setGeneralProperties = function({mesh , shininess}){
  if (materialName == "phong"){
    if (material.length==1 && textureFileName===undefined && texture===undefined){
      mesh.material.shininess = shininess;
    }else{
      for (let i=0,len=material.length;i<len;++i){
        mesh.material[i].shininess = shininess;
      }
    }

  }
  
}

const setShadow = function({mesh , castShadow , receiveShadow}){
  mesh.castShadow = castShadow;
  mesh.receiveShadow  = receiveShadow;
}

const mg_object_setPosition = function({mesh , position}){
  mesh.position.set(position.x,position.y,position.z);
}

const mg_object_setQuaternion = function({mesh , quaternion}){
  mesh.quaternion.set(quaternion.x,quaternion.y,quaternion.z,quaternion.w);
  return true;
}

const mesh = function({geometry , material , readyToCreateMesh}){
  if (material.length==1 && textureFileName===undefined && texture===undefined){
    return new THREE.Mesh( geometry, material[0]);
  }else{
    return new THREE.Mesh( geometry, material);
  }
}

const material = function({materialName , dimension}){
  let result=[];
  switch (materialName){
    case "lambert":
        result.push(new THREE.MeshLambertMaterial())
      break;
    case "basic":
        result.push(new THREE.MeshBasicMaterial())
      break;
    case "phong":
        result.push(new THREE.MeshPhongMaterial())
      break;
    default:
    console.error(`materialName ${materialName} not found`);
    
  }
  if (textureFileName===undefined && texture===undefined){
     readyToCreateMesh = true;
    }
  return result;
}

const mapTexture = function({texture , material , geometry , materialIndex}){
  for (let i=0,len=texture.length;i<len;++i){
    if (i>=material.length) material.push(material[0].clone());
    material[i].map = texture[i];
  }
  let j = 0;
  switch (geometryName){
    case "plane":
        for (let i=0;i<geometry.faces.length;++i){
          geometry.faces[i].materialIndex = materialIndex[j];
          ++j;
          if (j>=materialIndex.length) j=0;
        }
      break;
    case "box":
      for (let i=0;i<geometry.faces.length;++i){
        geometry.faces[i].materialIndex = materialIndex[j];
        ++j;
        if (j>=materialIndex.length) j=0;
      }
      break;
    case "sphere":
        for (let i=0;i<geometry.faces.length;++i){
          geometry.faces[i].materialIndex = materialIndex[j];
          ++j;
          if (j>=materialIndex.length) j=0;
        }
      break;
    case "cylinder":
        let startRad = dimension.radiusBottom;
        let startRadHalf = startRad/2;
        let endRad = dimension.radiusTop;
        let endRadHalf = endRad/2;
        //let radius_half = dimension.radius/2;
        for (let i=0;i<geometry.faces.length;++i){
          let face = geometry.faces[i];
          let xzAreZero = !face.normal.x && !face.normal.z;
          if (face.normal.y < -.98 && face.normal.y > -1.01 && xzAreZero) {
              geometry.faceVertexUvs[0][i][0].u = (geometry.vertices[face.a].x + startRadHalf) / startRad;
              geometry.faceVertexUvs[0][i][0].v = (geometry.vertices[face.a].z + startRadHalf) / startRad;
              geometry.faceVertexUvs[0][i][1].u = (geometry.vertices[face.b].x + startRadHalf) / startRad;
              geometry.faceVertexUvs[0][i][1].v = (geometry.vertices[face.b].z + startRadHalf) / startRad;
              geometry.faceVertexUvs[0][i][2].u = (geometry.vertices[face.c].x + startRadHalf) / startRad;
              geometry.faceVertexUvs[0][i][2].v = (geometry.vertices[face.c].z + startRadHalf) / startRad;
              face.materialIndex = (materialIndex.length==3)?materialIndex[2]:0;
          } else if (face.normal.y > .98 && face.normal.y < 1.01 && xzAreZero) {
              geometry.faceVertexUvs[0][i][0].u = (geometry.vertices[face.a].x + endRadHalf) / endRad ;
              geometry.faceVertexUvs[0][i][0].v = (geometry.vertices[face.a].z + endRadHalf) / endRad ;
              geometry.faceVertexUvs[0][i][1].u = (geometry.vertices[face.b].x + endRadHalf) / endRad ;
              geometry.faceVertexUvs[0][i][1].v = (geometry.vertices[face.b].z + endRadHalf) / endRad ;
              geometry.faceVertexUvs[0][i][2].u = (geometry.vertices[face.c].x + endRadHalf) / endRad ;
              geometry.faceVertexUvs[0][i][2].v = (geometry.vertices[face.c].z + endRadHalf) / endRad ;
              face.materialIndex = (materialIndex.length==3)?materialIndex[0]:0;
          } else {
            face.materialIndex = (materialIndex.length==3)?materialIndex[1]:0;
          }

        }
      break;
    case "polyhedron":
        for (let i=0;i<geometry.faces.length;++i){
          geometry.faces[i].materialIndex = materialIndex[j];
          ++j;
          if (j>=materialIndex.length) j=0;
        }
    default:
      console.error(`geometryName ${geometryName} not found`);

  }
  readyToCreateMesh = true;
  return true;
}

const geometry = function({geometryName , dimension}){
  let result;
  switch (geometryName){
    case "plane":
      result = new THREE.PlaneGeometry(dimension.length , dimension.width , dimension.xSeg, dimension.Yseg);
      break;
    case "box":
      result = new THREE.BoxGeometry(dimension.length , dimension.width , dimension.height );
      break;
    case "sphere":
      result =new THREE.SphereGeometry( dimension.radius, widthSegments, heightSegments );
      break;
    case "cylinder":
      result = new THREE.CylinderGeometry( dimension.radiusTop, dimension.radiusBottom , 
        dimension.height, radialSegments, cylinderHeightSegments );
      break;
    case "polyhedron":// use basic or lambert material to make sharp edges
      if (!dimension.radius) dimension.radius = 1;
      if (dimension.detail===undefined) dimension.detail = 1;
      result = new THREE.PolyhedronGeometry(dimension.vertices , dimension.faces , dimension.radius , dimension.detail);
      break;
    default:
      console.error(`geometryName ${geometryName} not found`);
  }
  return result;
}

const setScale = function({scale , mesh}){
  mesh.scale.set(scale , scale , scale);
  return true;
}

const setColor = function({color , mesh}){
  if (material.length>0){
      for (let i=0,len=material.length;i<len;++i){
        material[i].color.setHex(color);
      }
  }
  return true;
}

const texture = async function({textureFileName}){
  let result = [];
  let textureFileNameArray = [];
  if (Array.isArray(textureFileName)){
    textureFileNameArray = [...textureFileName];
  }else{
    textureFileNameArray.push(textureFileName);
  }
  for (let i=0,len=textureFileNameArray.length;i<len;++i){
    result.push(await new THREE.TextureLoader().load(textureFileNameArray[i]));
    result[result.length-1].anisotropy = 16

  }
  return result;
}

// CONCATENATED MODULE: ./mgame/mg.physic.js

function addPhysicBody(mainComposite , obj){
  obj.cannon = mainComposite.cannon.getProxyLessObject;
  obj.collisionGroupsNames = mainComposite.collisionGroupsNames.getProxyLessObject;
  obj.materials = mainComposite.physicSettings.materials.getProxyLessObject;
  obj.mainComposite = mainComposite;
  obj.self = obj;
  obj.totalConstraints = 0;
  //mainComposite.addLink(mainComposite.collisionGroupsNames , obj.collisionGroupsNames);


  if (!obj.physicMaterial) obj.physicMaterial= "objectMaterial";
  if (!obj.linearDamping) obj.linearDamping = 0.15;
  if (!obj.angularDamping) obj.angularDamping = 0.15;
  if (!obj.allowSleep) obj.allowSleep = false; // allow cannon put sleep non-intracting object
  if (!obj.cylinderSegments) obj.cylinderSegments = 16;
  if (obj.physicStatus===undefined) obj.physicStatus = true; //temporaryly remove from physic world if false
  if (obj.sleep==undefined) obj.sleep = false; // temporarily detach from updating loop
  if (obj.bodyType==undefined) obj.bodyType = "dynamic";
  if (obj.groupName==undefined) obj.groupName = "all";
  if (obj.collisionGroups==undefined) obj.collisionGroups = ["all"];


  obj.addFunction(shape);
  obj.addFunction(body);
  obj.addFunction(getMaterial);
  obj.addFunction(updatePhysic);
  obj.addFunction(setStatus);
  obj.addFunction(setActivityStatus);
  obj.addFunction(addPhysicToLoadedObjects);
  obj.addFunction(setAllowSleep);
  obj.addFunction(collisionGroupCode);
  obj.addFunction(contactGroupsMask);
  obj.addFunction(setBodyCollisionGroups);
  obj.addFunction(setCollisionCallback);
  obj.addFunction(resetBody);




}

function resetBody({reset , body}){
  body.linearDamping = linearDamping;
  body.angularDamping = angularDamping;
  // Position
  body.position.set(position.x , position.y , position.z);
  body.previousPosition.set(position.x , position.y , position.z);//.setZero();
  body.interpolatedPosition.set(position.x , position.y , position.z);
  body.initPosition.set(position.x , position.y , position.z);

  // orientation
  body.quaternion.set(quaternion.x , quaternion.y , quaternion.z , quaternion.w);
  body.initQuaternion.set(quaternion.x , quaternion.y , quaternion.z , quaternion.w);
  //body.previousQuaternion.set(0,0,0,1);
  body.interpolatedQuaternion.set(quaternion.x , quaternion.y , quaternion.z , quaternion.w);

  // Velocity
  body.velocity.setZero();
  body.initVelocity.setZero();
  body.angularVelocity.setZero();
  body.initAngularVelocity.setZero();

  // Force
  body.force.setZero();
  body.torque.setZero();

  // Sleep state reset
  body.sleepState = 0;
  body.timeLastSleepy = 0;
  body._wakeUpAfterNarrowphase = false;
  reset = undefined;
}

function setBodyCollisionGroups({collisionGroupCode,contactGroupsMask,body}){
  body.collisionFilterGroup = collisionGroupCode;
  body.collisionFilterMask = contactGroupsMask;
}

function collisionGroupCode({groupName}){
  if (!collisionGroupsNames.includes(groupName)){
    collisionGroupsNames.push(groupName);
  }
  return Math.pow(2, collisionGroupsNames.indexOf(groupName));

}

function contactGroupsMask({collisionGroups}){
  let result = 0;
  for (let collisionGroup of collisionGroups){
    if (!collisionGroupsNames.includes(collisionGroup)){
      collisionGroupsNames.push(collisionGroup);
    }
    if (collisionGroup=="all") return ~0;
    result = result | Math.pow(2, collisionGroupsNames.indexOf(collisionGroup));
  }
  return result;
}

function setAllowSleep({body,allowSleep}){
  body.allowSleep = allowSleep;
}

function addPhysicToLoadedObjects({body}){
  if (addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(body);
  return true;
}

function setActivityStatus({sleep}){
  if (sleep){
    if (timeStamp){
      mainComposite.removeLink(self.timeStamp);
    }
  }else{
    mainComposite.addLink(mainComposite.timeStamp , self.timeStamp);

  }
}

const updatePhysic = function({timeStamp , body}){
  let pos = body.position;
  let quat = body.quaternion;
  position = pos;
  quaternion = quat;
}

function getMaterial({materials , physicMaterial}){
  if (physicMaterial in materials){
    return materials[physicMaterial];
  }else{
    return undefined;
  }
}

function setStatus({body,physicStatus,totalConstraints}){
  if(physicStatus && !setStatus){
    cannon.addBody(body);
    return true
  }
  if(setStatus && !physicStatus && (setCollisionCallback==undefined || !setCollisionCallback) && totalConstraints==0){
    mainComposite.getProxyLessObject.removeBodies.push(body);
  }
}

function setCollisionCallback({body , collisionCallback, enableCollisionCallback}){
  if (enableCollisionCallback && !setCollisionCallback){
    body.addEventListener("collide", collisionCallback);
    return true;
  }
  if (setCollisionCallback && !enableCollisionCallback ){
    body.removeEventListener("collide");
    physicStatus = physicStatus;
    return false;
  }
}


function body({mesh , getMaterial , shape , mass}){
  if (body) return body;
  let newBody = new CANNON.Body({mass , shape , material:getMaterial,allowSleep});
  // newBody.position.set(position.x , position.y , position.z);
  // newBody.quaternion.set(quaternion.x , quaternion.y , quaternion.z , quaternion.w);
  // newBody.linearDamping = linearDamping;
  // newBody.angularDamping = angularDamping;
    switch (bodyType){
      case "dynamic":
        newBody.type = CANNON.Body.DYNAMIC;
        break;
      case "kinematic":
        newBody.type = CANNON.Body.KINEMATIC;
        break;
      case "static":
        newBody.type = CANNON.Body.STATIC ;
        break;
    }
  reset = true;
  return newBody;
}

function shape ({geometryName , dimension , scale}){
  let result;
  switch (geometryName){
    case "plane":
      if (heightData){
        result = new CANNON.Heightfield(heightData, {elementSize:dimension.width/dimension.xSeg});// error: heightData need to converted 
      }else{
        result = new CANNON.Plane();
      }
      break;
    case "box":
      result =  new CANNON.Box(new CANNON.Vec3(dimension.length * scale/2 ,dimension.width * scale/2 ,dimension.height * scale/2));
      break;
    case "sphere":
      result = new CANNON.Sphere(dimension.radius * scale);
      break;
    case "cylinder":
      result = new CANNON.Cylinder( dimension.radiusTop, dimension.radiusBottom , 
        dimension.height,cylinderSegments);
        let quat = new CANNON.Quaternion();
        quat.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
        let translation = new CANNON.Vec3(0,0,0);
        result.transformAllPoints(translation,quat);
      break;
    case "polyhedron":
      let cannonVertices =[];
      let cannonFaces = [];
      for (let i=0,len=dimension.vertices.length/3;i<len;++i){
        cannonVertices.push(new CANNON.Vec3(dimension.vertices[i],dimension.vertices[i+1],dimension.vertices[i+2]));
      }
      for (let i=0,len=dimension.faces.length/3;i<len;++i){
        cannonFaces.push([dimension.faces[i],dimension.faces[i+1],dimension.faces[i+2]]);
      }

      result = new CANNON.ConvexPolyhedron(cannonVertices, cannonFaces);

    break;

  }

  return result;
}

// CONCATENATED MODULE: ./mgame/mg.skyBox.js



function addSkyBox(mainComposite , skyBoxName){
  skyBoxName.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;
  skyBoxName.addFunction(mg_skyBox_addToLoadedObjects);
  skyBoxName.mainComposite = mainComposite;

  skyBoxName.scale=1;
  skyBoxName.visible=false;
  skyBoxName.WorldPosition={x:0,y:0,z:0};
  skyBoxName.filesExtension = ".png";
  skyBoxName.thickness = 1;
  skyBoxName.geometryName = undefined;
  skyBoxName.physicBody = true;
  skyBoxName.components = [];
  skyBoxName.selfProxy = skyBoxName;
  for (let i=0,len=skyBoxName.worldFileNames.length;i<len;++i){
    skyBoxName.components[i]={};
    addObject(mainComposite,skyBoxName.components[i]);
    addPhysicBody(mainComposite,skyBoxName.components[i]);
    mainComposite.addLink(skyBoxName.components[i].texture,skyBoxName["texture"+ String(i)]);
    skyBoxName.components[i].set({
      bodyType:"static",
      mass:0 , 
      physicMaterial:"groundMaterial" ,
      geometryName:"box" , 
      receiveShadow:(i==5) ? true:false,// only ground receive shadow
      sleep:true,
      textureFileName: skyBoxName.textureFilePath + skyBoxName.worldFileNames[i] + skyBoxName.filesExtension
    });
  }
  skyBoxName.addFunction(allLoaded);
  skyBoxName.addFunction(setGeometries);
  for (let prop of ["scale" , "visible"]){
    mainComposite.addLink(skyBoxName[prop] , skyBoxName.components[0][prop] , skyBoxName.components[1][prop],
      skyBoxName.components[2][prop],skyBoxName.components[3][prop],skyBoxName.components[4][prop],skyBoxName.components[5][prop]);
  }
}

function mg_skyBox_addToLoadedObjects({setGeometries}){
  if (mg_skyBox_addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(selfProxy);
  return true;
}

function setGeometries({WorldPosition,worldDimension,allLoaded, thickness}){
  let l = worldDimension.x;
  let w = worldDimension.y;
  let h = worldDimension.z;
  let t = thickness;
  // front
  selfProxy.components[1].position = {x:0,y:0,z:-h/2};
  selfProxy.components[1].dimension = {length:l*scale,width:w*scale,height:t*scale};

  // back
  selfProxy.components[0].position = {x:0,y:0,z:h/2};
  selfProxy.components[0].dimension = {length:l*scale,width:w*scale,height:t*scale};

  // top
  selfProxy.components[4].position = {x:0,y:w/2,z:0};
  selfProxy.components[4].dimension = {length:l*scale,width:t*scale,height:h*scale};

  // ground
  selfProxy.components[5].position = {x:0,y:-w/2,z:0};
  selfProxy.components[5].dimension = {length:l*scale,width:t*scale,height:h*scale};

  // left
  selfProxy.components[2].position = {x:-l/2,y:0,z:0};
  selfProxy.components[2].dimension = {length:t*scale,width:w*scale,height:h*scale};

  // right
  selfProxy.components[3].position = {x:+l/2,y:0,z:0};
  selfProxy.components[3].dimension = {length:t*scale,width:w*scale,height:h*scale};
  return true;
}

const allLoaded = function({texture0,texture1,texture2,texture3,texture4,texture5}){
  return true;
}

// CONCATENATED MODULE: ./mgame/mg.startEngine.js
async function startEngine(gameInstance) {
  let lastTime;
  let frameNumber = 0;
  gameInstance.running = true;
  gameInstance.cannonSafeStep = 0.016;
  let cannonStep = gameInstance.cannonSafeStep;
  function mainloop(t) {
    let frameInterval = gameInstance.actualInterval;
    frameInterval += (t - lastTime) / 1000;
    if (
      frameInterval >= cannonStep &&
      gameInstance.compositeRunningFunctions === false
    ) {
      gameInstance.set({
        timeStamp: t,
        actualInterval: frameInterval,
        rendering: true,
        framesInterval: t - lastTime,
      });
      lastTime = t;
    }
    requestAnimationFrame(mainloop);
  }
  function whileLoading(t) {
    if (gameInstance.startUp) return;
    let frameInterval = gameInstance.actualInterval;
    if (frameNumber > 2) {
      setTimeout(() => {
        document.getElementById("loading").classList.add("hide");
      }, 1000);
      document.body.appendChild(
        gameInstance.three.renderer.domElement.getProxyLessObject
      );
      gameInstance.startUp = t;
      requestAnimationFrame(mainloop);
      return;
    }
    if (lastTime === undefined) {
      lastTime = t;
    }
    frameInterval += (t - lastTime) / 1000;
    if (
      frameInterval >= cannonStep &&
      gameInstance.compositeRunningFunctions === false
    ) {
      gameInstance.set({
        timeStamp: t,
        actualInterval: frameInterval,
        rendering: true,
        framesInterval: t - lastTime,
      });
      ++frameNumber;
    }
    lastTime = t;
    setTimeout(() => {
      requestAnimationFrame(whileLoading);
    }, 1000 / 4);
  }
  requestAnimationFrame(whileLoading);
}

// CONCATENATED MODULE: ./mgame/mg.initialize.js

function initializeThreeJs(mainComposite){
  let result={};
  // three.js setup
  result.scene = new THREE.Scene ();
  result.renderer = new THREE.WebGLRenderer (); //{devicePixelRatio: 100 }
  result.renderer.shadowMap.enabled = true;
  result.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  result.renderer.setPixelRatio( (window.devicePixelRatio>2)?2:window.devicePixelRatio);
  result.renderer.setSize ( window.innerWidth , window.innerHeight);
  mainComposite.loadedObjects.push(result);

  return result;
}


const settings = {
  frameRate:60,
  maxSubStep:3
};
// CONCATENATED MODULE: ./mgame/mg.light.js

function addLight(mainComposite , newLight){
  newLight.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;
  newLight.addFunction(mg_light_addToLoadedObjects);
  newLight.mainComposite = mainComposite;

    newLight.color = 0xffffff;
    newLight.intensity = .5;
    newLight.visible = true;
    newLight.position = new THREE.Vector3(0,0,0);
    newLight.targetPosition = new THREE.Vector3(0,0,0);
    newLight.castShadow = false ;
    newLight.shadowMapDarkness = 1;
    newLight.shadowMapSizeWidth = 2048*2;  
    newLight.shadowMapSizeHeight = 2048*2; 
    newLight.shadowCameraNear = 0.5;      
    newLight.shadowCameraFar = 2048*2;   
    newLight.skyColor = 0xffffbb;  
    newLight.groundColor = 0x080820;
    newLight.distance = 0;
    newLight.width = 350;
    newLight.height = 200;

    newLight.addFunction(light);
    newLight.addFunction(mg_light_needsUpdate);
    newLight.addFunction(setIntensity);
    newLight.addFunction(mg_light_setColor);
    newLight.addFunction(mg_light_setGeneralProperties);
    newLight.addFunction(mg_light_setPosition);

    mainComposite.addLink(mainComposite.three , newLight.three);
}

function mg_light_addToLoadedObjects({light}){
  if (mg_light_addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(light);
  return true;
}

function setIntensity ({light , intensity}){
  light.intensity = intensity;
  return true;
}

function mg_light_setColor ({light , color}){
  light.color = new THREE.Color(color);
  return true;
}

function mg_light_setPosition ({light , position}){
  light.position.x = position.x;
  light.position.y = position.y;
  light.position.z = position.z;
}

function mg_light_setGeneralProperties ({light , targetPosition , castShadow , shadowMapDarkness , 
  shadowMapSizeWidth , shadowMapSizeHeight , shadowCameraNear , shadowCameraFar , skyColor , groundColor , distance , width , height}){
    if(lightType == "spot" || lightType == "directional" || lightType == "point"){
      light.castShadow = castShadow ;
      light.shadowMapDarkness = shadowMapDarkness;
      light.shadow.mapSize.width = shadowMapSizeWidth; 
      light.shadow.mapSize.height = shadowMapSizeHeight;
      light.shadow.camera.near = shadowCameraNear;
      light.shadow.camera.far = shadowCameraFar;
    }

    if (lightType == "directional"){
      light.target.position.x = targetPosition.x;
      light.target.position.y = targetPosition.y;
      light.target.position.z = targetPosition.z;

    }

    if (lightType == "hemisphere"){
      light.skyColor = new THREE.Color(skyColor);
      light.groundColor = new THREE.Color(groundColor);
    }
    
    if (lightType == "point" || lightType == "spot"){
      light.distance = distance;
    }

    if (lightType == "rectangular"){
      light.width = width;
      light.height = height;
      light.lookAt(targetPosition);
    }

    return true;
}

function light ({lightType}){
  let result;
  switch(lightType){
    case "ambient":
      result = new THREE.AmbientLight (color, intensity);
      break;
    case "spot":
      result = new THREE.SpotLight(color , intensity);
      break;
    case "directional":
      result = new THREE.DirectionalLight( color, intensity );
      break;
    case "hemisphere":
      result = new THREE.HemisphereLight( skyColor, groundColor, intensity );
      break;
    case "point":
      result = new THREE.PointLight( color, intensity, distance );
      break;
    case "rectangular":
      // it needs to include RectAreaLightUniformsLib.js
      result = new THREE.RectAreaLight( color, intensity,  width, height );
      let rectLightHelper = new THREE.RectAreaLightHelper( result );
      result.add( rectLightHelper );
      break;
  }


  return result;
}

function mg_light_needsUpdate ({light , visible }){
    if (visible && mg_light_needsUpdate!=light){
      three.scene.add(light);
    }
    if (!visible && mg_light_needsUpdate==light){
      three.scene.remove(light);
    }
}
// CONCATENATED MODULE: ./mgame/mg.physic.settings.js

function cannonSettingsBuilder(result){

  result.physicSettings = {};
  result.cannon = initializeCannonJs();
  result.loadedObjects.push(result.cannon.getProxyLessObject);
  

  result.addLink(result.cannon , result.physicSettings.cannon);

  result.physicSettings.addFunction(setGravity);
  result.physicSettings.gravity = {x:0, y:-10 , z:0};

  result.physicSettings.materials = {};
  result.physicSettings.contactMaterials = [];
  result.physicSettings.addFunction(buildContactMaterial);

  result.physicSettings.materials.groundMaterial= new CANNON.Material({name:"groundMaterial"});
  result.physicSettings.materials.objectMaterial= new CANNON.Material({name:"objectMaterial"});
  result.physicSettings.materials.wheelMaterial= new CANNON.Material({name:"wheelMaterial"});
  result.physicSettings.materials.fakeWheelMaterial= new CANNON.Material({name:"fakeWheelMaterial"});
  result.physicSettings.materials.chassisMaterial= new CANNON.Material({name:"chassisMaterial"});
  result.physicSettings.materials.frontWheelMaterial= new CANNON.Material({name:"frontWheelMaterial"});




  result.physicSettings.contactMaterials[0]={material1: "groundMaterial" , material2: "objectMaterial" , friction: .4, restitution: .4 };

  result.physicSettings.contactMaterials[1]={material1: "groundMaterial" , material2: "wheelMaterial" , friction: 1.4, restitution: 0 };
  result.physicSettings.contactMaterials[2]={material1: "objectMaterial" , material2: "wheelMaterial" , friction: 1, restitution: .2};

  result.physicSettings.contactMaterials[3]={material1: "objectMaterial" , material2: "fakeWheelMaterial" , friction: 0.1, restitution: 0};
  result.physicSettings.contactMaterials[4]={material1: "groundMaterial" , material2: "fakeWheelMaterial" , friction: 0.1, restitution: 0};

  result.physicSettings.contactMaterials[5]={material1: "objectMaterial" , material2: "chassisMaterial" , friction: .3, restitution: .2};

  result.physicSettings.contactMaterials[6]={material1: "groundMaterial" , material2: "frontWheelMaterial" , friction: 1.7, restitution: 0};

  




}

function buildContactMaterial({contactMaterials}){
  for (let item of contactMaterials){
    if (!item.added){
      let material1 = materials[item.material1];
      let material2 = materials[item.material2];
      // let contactEquationStiffness = 1000;
      // let contactEquationRelaxation = 3;
      // let frictionEquationRelaxation = 3;
      // let frictionEquationStiffness = 10000000;
      // if (item.contactEquationStiffness) contactEquationStiffness=item.contactEquationStiffness;
      // if (item.contactEquationRelaxation) contactEquationRelaxation=item.contactEquationRelaxation;
      // if (item.frictionEquationRelaxation) frictionEquationRelaxation=item.frictionEquationRelaxation;
      // if (item.frictionEquationStiffness) frictionEquationStiffness=item.frictionEquationStiffness;
      material1.name=item.material1;
      material2.name=item.material2;
      cannon.addContactMaterial( new CANNON.ContactMaterial(material1 , material2 , { friction: item.friction , restitution: item.restitution }) );
      item.added = true;
    }
  }
}
const initializeCannonJs = function(){
  let result = new CANNON.World();
  result.broadphase = new CANNON.NaiveBroadphase();
  //result.broadphase = new CANNON.SAPBroadphase(result);
  // result.quatNormalizeFast = false;
  // result.quatNormalizeSkip = 0;

  let solver = new CANNON.GSSolver();
  result.solver = new CANNON.SplitSolver(solver);
  result.allowSleep = true;

  result.solver.iterations = 7;// 17
  result.solver.tolerance = 1e-2;

  result.defaultContactMaterial.contactEquationStiffness = 1e6;
  result.defaultContactMaterial.contactEquationRelaxation = 10;
  result.defaultContactMaterial.friction = 0.2;
  return result;
}

const setGravity = function({gravity , cannon}){
  cannon.gravity.set (gravity.x , gravity.y , gravity.z);
  return true;
}
// CONCATENATED MODULE: ./mgame/mg.physic.compound.js



function makePhysicCompound(mainComposite , components){
  components[0].cannon = mainComposite.cannon.getProxyLessObject;
  components[0].materials = mainComposite.physicSettings.materials.getProxyLessObject;
  components[0].collisionGroupsNames = mainComposite.collisionGroupsNames.getProxyLessObject;
  components[0].mainComposite = mainComposite;
  components[0].self = components[0];
  components[0].totalConstraints = 0;

  //mainComposite.addLink(mainComposite.collisionGroupsNames , components[0].collisionGroupsNames);

  if (!components[0].physicMaterial) components[0].physicMaterial= "objectMaterial";
  if (!components[0].linearDamping) components[0].linearDamping = 0.15;
  if (!components[0].angularDamping) components[0].angularDamping = 0.15;
  if (!components[0].cylinderSegments) components[0].cylinderSegments = 16;
  if(components[0].widthSegments == undefined)components[0].widthSegments =32;
  if(components[0].heightSegments == undefined)components[0].heightSegments = 32;
  if(components[0].radialSegments == undefined)components[0].radialSegments = 32;
  if(components[0].cylinderHeightSegments == undefined)components[0].cylinderHeightSegments = 1;
  if (!components[0].allowSleep) components[0].allowSleep = false;

  if (components[0].physicStatus===undefined) components[0].physicStatus = true;
  if (components[0].sleep==undefined) components[0].sleep = false;
  if (components[0].timeStamp==undefined) components[0].timeStamp = 0;
  if (components[0].bodyType==undefined) components[0].bodyType = "dynamic";
  if (components[0].groupName==undefined) components[0].groupName = "all";
  if (components[0].collisionGroups==undefined) components[0].collisionGroups = ["all"];


  components[0].addFunction(setStatus);
  components[0].addFunction(setActivityStatus);
  components[0].addFunction(getMaterial);
  components[0].addFunction(shape);
  components[0].addFunction(body);
  components[0].addFunction(updateCompoundBody);
  components[0].addFunction(setAllowSleep);
  components[0].addFunction(collisionGroupCode);
  components[0].addFunction(contactGroupsMask);
  components[0].addFunction(setBodyCollisionGroups);
  components[0].addFunction(setCollisionCallback);
  components[0].addFunction(resetBody);






  components[0].components = [];

  for (let i=1,len=components.length;i<len;++i){
    components[0].components.push(components[i].getProxyLessObject);
    if (!components[i].cylinderSegments) components[i].cylinderSegments = 16;
    components[i].addFunction(shape);
    components[i].addFunction(mg_physic_compound_addPhysicToLoadedObjects);
    components[i].addFunction(mg_physic_compound_addToCompoundBody);
    components[i].mainComposite = mainComposite;
    mainComposite.addLink(components[0].body , components[i].body);
    mainComposite.addLink(components[0].visible , components[i].visible);
    if (!components[i].cylinderSegments) components[i].cylinderSegments = 16;
    if(components[i].widthSegments == undefined)components[i].widthSegments =32;
    if(components[i].heightSegments == undefined)components[i].heightSegments = 32;
    if(components[i].radialSegments == undefined)components[i].radialSegments = 32;
    if(components[i].cylinderHeightSegments == undefined)components[i].cylinderHeightSegments = 1;

    components[i].compoundBodyShapeNumber = undefined;

  }
}

function mg_physic_compound_addPhysicToLoadedObjects({addToCompoundBody}){
  if (addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(shape);
  return true;
}

function mg_physic_compound_addToCompoundBody({body ,shape }){
  if (mg_physic_compound_addToCompoundBody) return mg_physic_compound_addToCompoundBody;
  let pos = body.position;
  let bodyQuat = new THREE.Quaternion(body.quaternion.x,body.quaternion.y,body.quaternion.z,body.quaternion.w);
  let thisQuat = new THREE.Quaternion(quaternion.x,quaternion.y,quaternion.z,quaternion.w);
  let thisPos = new THREE.Vector3(position.x - pos.x, position.y - pos.y , position.z - pos.z);
  bodyQuat.normalize().inverse()
  thisPos.applyQuaternion(bodyQuat);

  thisQuat.multiply(bodyQuat);
  compoundBodyShapeNumber = body.shapes.length ;
  body.addShape(
    shape,  
    new CANNON.Vec3(thisPos.x,thisPos.y,thisPos.z ), 
    new CANNON.Quaternion(thisQuat.x , thisQuat.y , thisQuat.z , thisQuat.w)
    );


  return shape;
}

const updateCompoundBody = function({timeStamp , body}){
  let pos = body.position;
  let quat = body.quaternion;
  position = pos;
  quaternion = quat;

  for (let component of components){
    let n = component.compoundBodyShapeNumber;
    let offset = body.shapeOffsets[n]; 
    let ori = body.shapeOrientations[n];
    if (ori && offset){
      let compQuat = new THREE.Quaternion(quat.x,quat.y,quat.z,quat.w);
      let oriQuat = new THREE.Quaternion(ori.x,ori.y,ori.z,ori.w);
      let localPos = new THREE.Vector3(offset.x,offset.y,offset.z);
      localPos.applyQuaternion(compQuat );
      compQuat.multiply(oriQuat);
      component.mesh.position.set(localPos.x + pos.x ,localPos.y + pos.y ,localPos.z + pos.z);
      component.mesh.quaternion.set(compQuat.x,compQuat.y,compQuat.z,compQuat.w);
    }

  }
}

// CONCATENATED MODULE: ./mgame/mg.constraints.lock.js

function newLockConstraint (mainComposite ,constraintName){
  constraintName.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;
  constraintName.mainComposite = mainComposite;
  mainComposite.addLink(mainComposite.cannon , constraintName.cannon);
  constraintName.selfProxy = constraintName;
  constraintName.self = constraintName;
  constraintName.constraints = [];
  constraintName.linkedBodies = [];
  constraintName.addedIndex = 0;
  constraintName.active = true;
  constraintName.maxForce = 1e6;
  constraintName.addFunction(addBodies);
  constraintName.addFunction(addLockConstraint);
  constraintName.addFunction(mg_constraints_lock_setStatus);
}

function addBodies({bodies}){
  for (let body of bodies){
    linkedBodies.push(undefined);
    proxiedComposite.addLink(body.body , selfProxy.linkedBodies[linkedBodies.length-1]);
  }
  return true;
}

function addLockConstraint({linkedBodies}){
  let previous = undefined;
  for (let i=addedIndex;i<linkedBodies.length;++i){
    if (linkedBodies[i]){
      if (!previous){
        previous = linkedBodies[i];
      }else{
        constraints.push(new CANNON.LockConstraint(linkedBodies[i] , previous , {maxForce:maxForce}));
        //cannon.addConstraint(constraints[constraints.length - 1]);
        mainComposite.loadedObjects.push(constraints[constraints.length - 1]);

        previous = linkedBodies[i];
        addedIndex = i;
      }
    }else{
      return undefined
    }
  }
  return true;
}

function mg_constraints_lock_setStatus({active , addLockConstraint}){
    if (active && !mg_constraints_lock_setStatus){
      for (let constraint of constraints){
        cannon.addConstraint(constraint);
        constraint.enable();
      }
      for (let body of bodies){
        ++body.self.totalConstraints;
      }
      return true;
    }
    if (!active && mg_constraints_lock_setStatus){
      for (let constraint of constraints){
        constraint.disable();
        cannon.removeConstraint(constraint);
      }
      for (let body of bodies){
        --body.self.totalConstraints;
      }
      return false;
    }
}

// CONCATENATED MODULE: ./mgame/mg.constraints.points.js

function newPointsConstraint (mainComposite ,constraintName){
  constraintName.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;
  constraintName.addFunction(mg_constraints_points_addToLoadedObjects);
  constraintName.mainComposite = mainComposite;
  mainComposite.addLink(mainComposite.cannon , constraintName.cannon);
  constraintName.selfProxy = constraintName;
  constraintName.self = constraintName;
  constraintName.active = true;
  constraintName.maxForce = 1e6;
  constraintName.offsetA = {x:0,y:0,z:0};
  constraintName.offsetB = {x:0,y:0,z:0};
  constraintName.addFunction(addBodyA);
  constraintName.addFunction(addBodyB);
  constraintName.addFunction(pointConstraint);
  constraintName.addFunction(mg_constraints_points_setStatus);
  constraintName.addFunction(pivotA);
  constraintName.addFunction(pivotB);
}

function mg_constraints_points_addToLoadedObjects({pointConstraint}){
  if (mg_constraints_points_addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(pointConstraint);
  return true;
}

function addBodyA({bodyA}){
  proxiedComposite.addLink(bodyA.body , selfProxy.bodyABody);
  return true;
}

function addBodyB({bodyB}){
  proxiedComposite.addLink(bodyB.body , selfProxy.bodyBBody);
  return true
}

function pivotA({offsetA}){
    return new CANNON.Vec3(offsetA.x , offsetA.y , offsetA.z );
}

function pivotB({offsetB}){
  return new CANNON.Vec3(offsetB.x , offsetB.y , offsetB.z );
}

function pointConstraint({bodyABody , bodyBBody , pivotA , pivotB , maxForce , cannon}){
  if (pointConstraint) return pointConstraint;
  let newConstraint = new CANNON.PointToPointConstraint(bodyABody , pivotA , bodyBBody , pivotB , maxForce);
  return newConstraint;
}

function mg_constraints_points_setStatus({active , pointConstraint}){
  if (active && !mg_constraints_points_setStatus){
    cannon.addConstraint(pointConstraint);
    pointConstraint.enable();
    ++bodyA.self.totalConstraints;
    ++bodyB.self.totalConstraints;
    return true;
  }
  if (!active && mg_constraints_points_setStatus){
    pointConstraint.disable();
    cannon.removeConstraint(pointConstraint);
    --bodyA.self.totalConstraints;
    --bodyB.self.totalConstraints;
    return false;
  }
}

// CONCATENATED MODULE: ./mgame/mg.constraints.distance.js

function newDistanceConstraint (mainComposite ,constraintName){
  constraintName.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;
  constraintName.mainComposite = mainComposite;

  constraintName.addFunction(mg_constraints_distance_addToLoadedObjects);

  mainComposite.addLink(mainComposite.cannon , constraintName.cannon);
  constraintName.selfProxy = constraintName;
  constraintName.self = constraintName;
  constraintName.active = true;
  constraintName.maxForce = 1e6;
  constraintName.distance = undefined;
  constraintName.addFunction(mg_constraints_distance_addBodyA);
  constraintName.addFunction(mg_constraints_distance_addBodyB);
  constraintName.addFunction(distanceConstraint);
  constraintName.addFunction(mg_constraints_distance_setStatus);
}

function mg_constraints_distance_addToLoadedObjects({distanceConstraint}){
  if (mg_constraints_distance_addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(distanceConstraint);
  return true;
}

function mg_constraints_distance_addBodyA({bodyA}){
    proxiedComposite.addLink(bodyA.body , selfProxy.bodyABody);
  return true;
}

function mg_constraints_distance_addBodyB({bodyB}){
  proxiedComposite.addLink(bodyB.body , selfProxy.bodyBBody);
return true;
}

function distanceConstraint({bodyABody , bodyBBody , maxForce , cannon}){
  if (distanceConstraint) return distanceConstraint;
  let newConstraint = new CANNON.DistanceConstraint(bodyABody , bodyBBody);
  if (distance) newConstraint.distance = distance;
  newConstraint.maxForce = maxForce;
  return newConstraint;
}

function mg_constraints_distance_setStatus({active , distanceConstraint}){
  if (active && !mg_constraints_distance_setStatus){
    cannon.addConstraint(distanceConstraint);
    distanceConstraint.enable();
    ++bodyA.self.totalConstraints;
    ++bodyB.self.totalConstraints;
    return true;
  }
  if (!active && mg_constraints_distance_setStatus){
    distanceConstraint.disable();
    cannon.removeConstraint(distanceConstraint);
    --bodyA.self.totalConstraints;
    --bodyB.self.totalConstraints;
    return false;
  }
}

// CONCATENATED MODULE: ./mgame/mg.constraints.hinge.js

function newHingeConstraint (mainComposite ,constraintName){
  constraintName.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;
  constraintName.addFunction(mg_constraints_hinge_addToLoadedObjects);
  constraintName.mainComposite = mainComposite;
  mainComposite.addLink(mainComposite.cannon , constraintName.cannon);
  constraintName.selfProxy = constraintName;
  constraintName.self = constraintName;
  constraintName.active = true;
  constraintName.maxForce = 1e6;
  constraintName.offsetA = {x:0,y:0,z:0};
  constraintName.offsetB = {x:0,y:0,z:0};
  constraintName.addFunction(mg_constraints_hinge_addBodyA);
  constraintName.addFunction(mg_constraints_hinge_addBodyB);
  constraintName.addFunction(hingeConstraint);
  constraintName.addFunction(mg_constraints_hinge_setStatus);
  constraintName.addFunction(mg_constraints_hinge_pivotA);
  constraintName.addFunction(mg_constraints_hinge_pivotB);
  constraintName.addFunction(setMotor);
  constraintName.addFunction(setMotorSpeed);
}

function mg_constraints_hinge_addToLoadedObjects({hingeConstraint}){
  if (mg_constraints_hinge_addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(hingeConstraint);
  return true;
}

function mg_constraints_hinge_addBodyA({bodyA}){
    proxiedComposite.addLink(bodyA.body , selfProxy.bodyABody);;
  return true;
}

function mg_constraints_hinge_addBodyB({bodyB}){
  proxiedComposite.addLink(bodyB.body , selfProxy.bodyBBody);;
return true;
}

function mg_constraints_hinge_pivotA({offsetA}){
    return new CANNON.Vec3(offsetA.x , offsetA.y , offsetA.z );
}

function mg_constraints_hinge_pivotB({offsetB}){
  return new CANNON.Vec3(offsetB.x , offsetB.y , offsetB.z );
}

function hingeConstraint({bodyABody , bodyBBody , pivotA ,pivotB , maxForce , cannon}){
  if (hingeConstraint) return hingeConstraint;
  let newConstraint = new CANNON.HingeConstraint(bodyABody , bodyBBody , {pivotA:pivotA, pivotB:pivotB, maxForce:maxForce});
  if (axisA) newConstraint.axisA = axisA;
  if (axisB) newConstraint.axisB = axisB;
  return newConstraint;
}

function mg_constraints_hinge_setStatus({active , hingeConstraint}){
    if (active && !mg_constraints_hinge_setStatus){
      cannon.addConstraint(hingeConstraint);
      hingeConstraint.enable();
      ++bodyA.self.totalConstraints;
      ++bodyB.self.totalConstraints;
      return true;
    }
    if (!active && mg_constraints_hinge_setStatus){
      hingeConstraint.disable();
      cannon.removeConstraint(hingeConstraint);
      --bodyA.self.totalConstraints;
      --bodyB.self.totalConstraints;
      return false;
    }
}

function setMotor({motor , hingeConstraint}){
  if (motor){
    hingeConstraint.enableMotor();
  }else{
    hingeConstraint.disableMotor();
  }
  return true;
}

function setMotorSpeed({speed , hingeConstraint}){
  hingeConstraint.setMotorSpeed(speed);
}

// CONCATENATED MODULE: ./mgame/mg.physic.rigidVehicle.js

function newRigidVehicle(mainComposite , vehicleName){
  mainComposite.vehicles[vehicleName] = {};
  let obj = mainComposite.vehicles[vehicleName];
  mainComposite.addLink(mainComposite.cannon , obj.cannon);

  obj.linkedWheelsBodies = [];
  obj.angularDamping = 0.4;
  obj.position =undefined;
  obj.quaternion = undefined;
  obj.wheelForce = undefined;
  obj.wheelSpeed = undefined;
  obj.addFunction(addChassis);
  obj.addFunction(rigidVehicle);
  obj.addFunction(addWheels);
  obj.addFunction(addWheelToVehicle);
  obj.addFunction(addToWorld);
  obj.addFunction(mg_physic_rigidVehicle_setPosition);
  obj.addFunction(mg_physic_rigidVehicle_setQuaternion);
  obj.addFunction(setWheelForce);

}

function addChassis({chassis}){
    proxiedComposite.addLink(chassis[0].body , proxiedComposite.vehicles[currentAddress[currentAddress.length - 1]].chassisBody);;
  return true;
}

function setWheelForce({wheelForce , addToWorld,wheelSpeed }){
  for(let i=0; i<wheels.length; i++){
    if (wheels[i].engine){
      if (wheels[i].leftHand){
        // rigidVehicle.applyWheelForce(-1*wheelForce,i);
        // rigidVehicle.setMotorSpeed(-1*wheelSpeed,i);

        rigidVehicle.constraints[i].enableMotor();
        rigidVehicle.constraints[i].setMotorMaxForce(wheelForce);
        rigidVehicle.constraints[i].setMotorSpeed(wheelSpeed);


      }else{
        rigidVehicle.constraints[i].enableMotor();
        rigidVehicle.constraints[i].setMotorMaxForce(-1*wheelForce);
        rigidVehicle.constraints[i].setMotorSpeed(-1*wheelSpeed);

        //rigidVehicle.applyWheelForce(-1*wheelForce,i);
        //rigidVehicle.setMotorSpeed(-1*wheelSpeed,i);

      }
      //rigidVehicle.setWheelForce(wheelForce,i);
      //rigidVehicle.constraints[i].setMotorSpeed(wheelSpeed);

      //rigidVehicle.constraints[i].enableMotor();
      //rigidVehicle.disableMotor(wheelSpeed,i);

    }
    if (wheels[i].steering){
      if (wheels[i].leftHand){
        rigidVehicle.setSteeringValue(Math.PI/16,i)
      }else{
        rigidVehicle.setSteeringValue(Math.PI/16,i)

      }
    }
    
  }
  return true;
}


function rigidVehicle({chassisBody}){
  if (chassis.compoundPosition){
    position = new CANNON.Vec3(chassis.compoundPosition.x,chassis.compoundPosition.y,chassis.compoundPosition.z);
  }else{
    position = new CANNON.Vec3(chassisBody.position.x,chassisBody.position.y,chassisBody.position.z);
  }
  return new CANNON.RigidVehicle({chassisBody: chassisBody});
}

function mg_physic_rigidVehicle_setPosition({rigidVehicle,position}){
  rigidVehicle.position = new CANNON.Vec3(position.x,position.y,position.z);
}

function mg_physic_rigidVehicle_setQuaternion({rigidVehicle,quaternion}){
  rigidVehicle.chassisBody.quaternion= new CANNON.Quaternion(quaternion.x,quaternion.y,quaternion.z,quaternion.w);

}

function addWheels({wheels}){
  for (let wheel of wheels){
    linkedWheelsBodies.push(undefined);
    proxiedComposite.addLink(wheel.body.body, proxiedComposite.vehicles[currentAddress[currentAddress.length - 1]].linkedWheelsBodies[linkedWheelsBodies.length-1]);
  }
  return true;
}

function addWheelToVehicle({rigidVehicle,linkedWheelsBodies}){
  for (let wheel of linkedWheelsBodies){
    if (!wheel) return undefined;
  }

  for (let i=0,len=linkedWheelsBodies.length;i<len;++i){
    let wheel = linkedWheelsBodies[i]
    let localPosition = new CANNON.Vec3(wheel.position.x - position.x, wheel.position.y - position.y, wheel.position.z - position.z);
    rigidVehicle.addWheel({
      body:wheel,
      position:localPosition,
      quaternion:wheel.quaternion,
      isFrontWheel:wheels[i].steering,
      frictionSlip:5,
      axis:wheels[i].axis,
      direction:wheels[i].direction
    })
  }

  for(let i=0; i<rigidVehicle.wheelBodies.length; i++){
    rigidVehicle.wheelBodies[i].angularDamping = 0.4;
  }

  return true;
}

function addToWorld({addWheelToVehicle , cannon}){
  rigidVehicle.addToWorld(cannon);
  return true;
}




// CONCATENATED MODULE: ./mgame/mg.physic.rayCastVehicle.js
function newRayCastVehicle(mainComposite , vehicleName){
  mainComposite.vehicles[vehicleName] = {};
  let obj = mainComposite.vehicles[vehicleName];
  mainComposite.addLink(mainComposite.cannon , obj.cannon);
  mainComposite.addLink(mainComposite.timeStamp , obj.timeStamp);


  obj.linkedWheelsBodies = [];
  obj.angularDamping = 0.4;
  obj.position =undefined;
  obj.quaternion = undefined;
  // obj.wheelForce = undefined;
  // obj.steering = undefined;
  obj.wheelOptions = {
		radius: 9,
		directionLocal: new CANNON.Vec3(0, -1, 0), 
		suspensionStiffness: 43,
		suspensionRestLength: 0.18,
		frictionSlip: 10000,
		dampingRelaxation:1,
		dampingCompression: 1,
		maxSuspensionForce: 10000,
		rollInfluence: 0,
		axleLocal: new CANNON.Vec3(-1, 0, 0),
		chassisConnectionPointLocal: new CANNON.Vec3(1, 0, 1),
		maxSuspensionTravel:10,// 1,
		customSlidingRotationalSpeed: 30,
		useCustomSlidingRotationalSpeed: true
	};
  obj.addFunction(mg_physic_rayCastVehicle_addChassis);
  obj.addFunction(raycastVehicle);
  obj.addFunction(mg_physic_rayCastVehicle_addWheels);
  obj.addFunction(mg_physic_rayCastVehicle_addWheelToVehicle);
  obj.addFunction(mg_physic_rayCastVehicle_addToWorld);
  obj.addFunction(mg_physic_rayCastVehicle_setPosition);
  obj.addFunction(mg_physic_rayCastVehicle_setQuaternion);
  //obj.addFunction(setWheelForce);
  //obj.addFunction(setSteering);
  obj.addFunction(updateWheels);
  obj.addFunction(updateDriving);

}
function updateDriving({wheels ,addToWorld}){
  for(let i=0; i<wheels.length; i++){
      raycastVehicle.applyEngineForce(wheels[i].engine,i);
      raycastVehicle.setSteeringValue(wheels[i].steering,i)
      raycastVehicle.setBrake(wheels[i].brake,i)
  }
  return true;
  
}
function mg_physic_rayCastVehicle_addChassis({chassis}){
    proxiedComposite.addLink(chassis[0].body , proxiedComposite.vehicles[currentAddress[currentAddress.length - 1]].chassisBody);;
  return true;
}

function updateWheels({timeStamp , addWheelToVehicle}){
  let quat = new CANNON.Quaternion();
  quat.setFromAxisAngle(new CANNON.Vec3(0,0,1).normalize(),Math.PI/2);
  for (let i = 0; i < raycastVehicle.wheelInfos.length; i++) {
    raycastVehicle.updateWheelTransform(i);
    let t = raycastVehicle.wheelInfos[i].worldTransform;
    linkedWheelsBodies[i].position.copy(t.position);
    linkedWheelsBodies[i].quaternion = t.quaternion.mult(quat)
  }
}

// function setWheelForce({wheelForce , addToWorld}){
//   for(let i=0; i<wheels.length; i++){
//     if (wheels[i].engine){
//       raycastVehicle.applyEngineForce(wheelForce,i);
//     }
//   }
//   return true;
// }

// function setSteering({steering , addToWorld}){
//   for(let i=0; i<wheels.length; i++){
//     if (wheels[i].steering){
//         raycastVehicle.setSteeringValue(steering,i)
//     }
//   }
//   return true;
// }

function raycastVehicle({chassisBody}){
  if (chassis.compoundPosition){
    position = new CANNON.Vec3(chassis.compoundPosition.x,chassis.compoundPosition.y,chassis.compoundPosition.z);
  }else{
    position = new CANNON.Vec3(chassisBody.position.x,chassisBody.position.y,chassisBody.position.z);
  }
  return new CANNON.RaycastVehicle({chassisBody: chassisBody , indexForwardAxis: 2,indexRightAxis: 0,indexUpAxis: 1});
}

function mg_physic_rayCastVehicle_setPosition({raycastVehicle,position}){
  raycastVehicle.position = new CANNON.Vec3(position.x,position.y,position.z);
}

function mg_physic_rayCastVehicle_setQuaternion({raycastVehicle,quaternion}){
  console.log("set quat")
  raycastVehicle.chassisBody.quaternion= new CANNON.Quaternion(quaternion.x,quaternion.y,quaternion.z,quaternion.w);

}

function mg_physic_rayCastVehicle_addWheels({wheels}){
  if (mg_physic_rayCastVehicle_addWheels) return true;
  mg_physic_rayCastVehicle_addWheels =true;
  for (let wheel of wheels){
    linkedWheelsBodies.push(undefined);
    proxiedComposite.addLink(wheel.body.body, proxiedComposite.vehicles[currentAddress[currentAddress.length - 1]].linkedWheelsBodies[linkedWheelsBodies.length-1]);
  }
  return true;
}

function mg_physic_rayCastVehicle_addWheelToVehicle({raycastVehicle,linkedWheelsBodies}){
  if (mg_physic_rayCastVehicle_addWheelToVehicle) return true;
  for (let wheel of linkedWheelsBodies){
    if (!wheel) return undefined;
  }

  for (let i=0,len=linkedWheelsBodies.length;i<len;++i){
    let wheel = linkedWheelsBodies[i];
    wheelOptions.chassisConnectionPointLocal = new CANNON.Vec3(wheel.position.x - position.x, wheel.position.y - position.y, wheel.position.z - position.z);
    wheelOptions.radius = wheels[i].body.dimension.radiusTop;

    //wheelOptions.radius = wheels[i].body.dimension.radiusTop;
    // if (wheels[i].steering){
    //   wheelOptions.isFrontWheel = true;
    // }else{
    //   wheelOptions.isFrontWheel = false;
    // }
    raycastVehicle.addWheel(wheelOptions);
  }
  return true;
}

function mg_physic_rayCastVehicle_addToWorld({addWheelToVehicle , cannon}){
  raycastVehicle.addToWorld(cannon);
  return true;
}




// CONCATENATED MODULE: ./mgame/mg.roadTrain.controls.js

function roadTrainControls(roadTrain){
  roadTrain.turningSpeed = (Math.PI/6)/1.2; // rad per sec
  roadTrain.absMaxSteering = Math.PI/6;
  roadTrain.turningLeft = false;
  roadTrain.turningRight = false;
  roadTrain.drivingForward = true;
  roadTrain.steering = 0;
  roadTrain.touchSpan = 200;
  roadTrain.addFunction(setSteering);

}

function setSteering({turningLeft , turningRight ,actualInterval}){
  if (!turningRight && !turningLeft) return false;

  if (turningRight){
    let newSteering = steering + actualInterval * turningSpeed;
    if (newSteering>absMaxSteering){
      newSteering = absMaxSteering;
    }
    steering = newSteering;
  }

  if (turningLeft){
    let newSteering = steering - actualInterval * turningSpeed;
    if (newSteering<-absMaxSteering){
      newSteering = -absMaxSteering;
    }
    steering = newSteering;
  }
}
// CONCATENATED MODULE: ./mgame/mg.roadTrain.builder.js

function loadBuilder(roadTrain){
  roadTrain.wheels = undefined;
  roadTrain.wheelsBodies = undefined;
  roadTrain.suspensions = undefined;
  roadTrain.suspensionsBodies = undefined;
  roadTrain.cabinParts = undefined;

  roadTrain.gapRatio = .95;
  if (!roadTrain.position) roadTrain.position={x:0,y:0,z:0};
  if (!roadTrain.quaternion) roadTrain.quaternion={x:0,y:0,z:0,w:1};

  roadTrain.addFunction(buildRoadTrain)
  roadTrain.addFunction(headBodiesLoaded);
  roadTrain.addFunction(addBuilderToLoadedObjects);

}
function addBuilderToLoadedObjects({headBodiesLoaded,buildRoadTrain}){
  if (addBuilderToLoadedObjects) return true;
  mainComposite.loadedObjects.push(headBodiesLoaded);
  mainComposite.loadedObjects.push(buildRoadTrain);
  return true;
}

function headBodiesLoaded({wheelsBodies,suspensionsBodies,chassisBody}){
  if (headBodiesLoaded) return true;
  for (let body of wheelsBodies){
    if(!body) return undefined;
  }
  for (let body of suspensionsBodies){
    if(!body) return undefined;
  }
  
  return true;
}

function buildRoadTrain({wheelsInfo}){
  if (buildRoadTrain) return true;
  let roadTrain = self;
  wheels = [];
  wheelsBodies = [];
  suspensions = [];
  suspensionsBodies = [];
  cabinParts = [];
  gapRatio = .95;

  let x = position.x;
  let y = position.y;
  let z = position.z;

  let threeQuat = new THREE.Quaternion(quaternion.x,quaternion.y,quaternion.z,quaternion.w)

  let rotation
  let chassisFrontEst=0,chassisRearEst=0;
  let chassisWidthEst , maxChassisWidth;

  for (let wheelInfo of roadTrain.wheelsInfo){
    let wheels = roadTrain.wheels;

    // build wheels
    wheels.push({});
    let wheel = wheels[wheels.length - 1];
    let wheelOutPos = new THREE.Vector3(wheelInfo.doubleWheelGap/2 + (wheelInfo.width-wheelInfo.doubleWheelGap)/4 ,0 ,0);
    let wheelInPos = new THREE.Vector3(wheelInfo.doubleWheelGap/2 + (wheelInfo.width-wheelInfo.doubleWheelGap)/4 ,0 ,0);

    
    let wheelPos = new THREE.Vector3(wheelInfo.axelLength,wheelInfo.radius-wheelInfo.axelHeight,wheelInfo.distance)
    if (wheelInfo.left){
      rotation = Math.PI/2;
      wheelInPos.x = -wheelInPos.x;
    }else{
      wheelOutPos.x = -wheelOutPos.x;
      wheelPos.x = -wheelPos.x;
      rotation = -Math.PI/2;
    }
    wheel.localPos = new THREE.Vector3(wheelPos.x,wheelPos.y,wheelPos.z); // save local pos relative to chassis
    wheelPos.applyQuaternion(threeQuat);
    let correctionQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1).normalize(), rotation);
    wheel.correctionQuat = new THREE.Quaternion(correctionQuat.x,correctionQuat.y,correctionQuat.z,correctionQuat.w);
    let wheelQuat = new THREE.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w)
    wheelQuat.multiply(correctionQuat);

    let wheelPhysicCompound =[];

    let radius = (wheelInfo.doubleWheelGap) ? wheelInfo.axelDiameter:wheelInfo.radius;
    mainComposite.utils.addObject(wheel);
    wheel.set({
      geometryName:"cylinder", 
      dimension:{radiusTop:radius,radiusBottom:radius,height:wheelInfo.width*.99}, 
      position:{x:x+wheelPos.x , y:y+wheelPos.y , z:z+wheelPos.z}, 
      color:wheelInfo.color, 
      quaternion:new THREE.Quaternion(wheelQuat.x,wheelQuat.y,wheelQuat.z,wheelQuat.w),
      materialName:"basic", 
      shinines:0,
      textureFileName:wheelInfo.textureFileName,
      materialIndex:[0,1,2],
      visible:false,
      sleep:true,
      groupName:"wheel",
      collisionGroups:["ground","obstacle"]
    });
    wheelPhysicCompound.push(wheel);
    if (wheelInfo.doubleWheelGap){
      wheelInPos.applyQuaternion(threeQuat);
      wheelOutPos.applyQuaternion(threeQuat);
      wheelInPos.add(wheel.position);
      wheelOutPos.add(wheel.position);
      wheel.wheelIn ={};
      mainComposite.utils.addObject(wheel.wheelIn);
      wheel.wheelIn.set({
        geometryName:"cylinder", 
        dimension:{radiusTop:wheelInfo.radius,radiusBottom:wheelInfo.radius,height:(wheelInfo.width - wheelInfo.doubleWheelGap)/2}, 
        position:{x:wheelInPos.x , y:wheelInPos.y , z:wheelInPos.z}, 
        color:wheelInfo.color, 
        quaternion:new THREE.Quaternion(wheelQuat.x,wheelQuat.y,wheelQuat.z,wheelQuat.w),
        materialName:"lambert", 
        shinines:0,
        textureFileName:wheelInfo.textureFileName,
        materialIndex:[0,1,2],
        visible:false,
        sleep:true
      });
      wheelPhysicCompound.push(wheel.wheelIn);
      wheel.wheelOut ={};
      mainComposite.utils.addObject(wheel.wheelOut);
      wheel.wheelOut.set({
        geometryName:"cylinder", 
        dimension:{radiusTop:wheelInfo.radius,radiusBottom:wheelInfo.radius,height:(wheelInfo.width - wheelInfo.doubleWheelGap)/2}, 
        position:{x:wheelOutPos.x , y:wheelOutPos.y , z:wheelOutPos.z}, 
        color:wheelInfo.color, 
        quaternion:new THREE.Quaternion(wheelQuat.x,wheelQuat.y,wheelQuat.z,wheelQuat.w),
        materialName:"lambert", 
        shinines:0,
        textureFileName:wheelInfo.textureFileName,
        materialIndex:[0,1,2],
        visible:false,
        sleep:true
      });
      wheelPhysicCompound.push(wheel.wheelOut);

    }


    let susLength = (wheelInfo.axelLength-wheelInfo.width/2) * roadTrain.gapRatio;

    //mainComposite.utils.addPhysicBody(wheel);
    mainComposite.utils.makePhysicCompound(wheelPhysicCompound);
    wheel.set({
      angularDamping:wheelInfo.angularDamping,
      linearDamping:0,
      physicMaterial:wheelInfo.wheelMaterial, 
      mass:wheelInfo.wheelMass, 
      wheelLeft:wheelInfo.left, 
      wheelSteering:wheelInfo.steering, 
      driving:wheelInfo.engine, 
      stiffness:wheelInfo.stiffness, 
      damping:wheelInfo.damping, 
      springLenght:wheelInfo.springLegth,
      allowSleep:false,
      susLength,
      physicStatus:false
    });
    // build suspension
    let suspensions = roadTrain.suspensions;
    let susPos = new THREE.Vector3(wheelInfo.axelLength - wheelInfo.width/2 - susLength/2,0,wheelInfo.distance);

    if (!wheelInfo.left){
      susPos.x*=-1;
    }

    
    suspensions.push({});
    let suspension = suspensions[suspensions.length - 1];
    suspension.localSusPos = new THREE.Vector3(susPos.x,susPos.y,susPos.z); // save local pos relative to chassis
    susPos.applyQuaternion(threeQuat);

    mainComposite.utils.addObject(suspension);
    suspension.set({
      geometryName:"box", 
      dimension:{ height:wheelInfo.axelDiameter , width: wheelInfo.axelDiameter , length:susLength }, 
      position:{x:x+susPos.x , y:y+susPos.y , z:z+susPos.z}, 
      quaternion:new THREE.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w),
      color:wheelInfo.susColor, 
      materialName:"basic", 
      shinines:0,
      visible:false,
      sleep:true
    });
    mainComposite.utils.addPhysicBody(suspension);
    suspension.set({
      physicMaterial:wheelInfo.axelMaterial, 
      mass:wheelInfo.axelMass,
      allowSleep:false,
      physicStatus:false,
      groupName:"suspension",
      collisionGroups:["chassis"]
    });
    if (wheelInfo.distance+wheelInfo.axelDiameter*2>chassisFrontEst){
      chassisFrontEst = wheelInfo.distance+wheelInfo.axelDiameter*2;
    }
    if (wheelInfo.distance-wheelInfo.axelDiameter*2<chassisRearEst){
      chassisRearEst = wheelInfo.distance-wheelInfo.axelDiameter*2;
    }

    // chassis width auto calculation
      maxChassisWidth = (wheelInfo.axelLength-wheelInfo.radius)*2
    if (!chassisWidthEst || chassisWidthEst>maxChassisWidth){
      chassisWidthEst = maxChassisWidth;
    }
  }

  // set chassisWidth if not defined by user
  if (!roadTrain.chassisWidth){
    roadTrain.chassisWidth = chassisWidthEst;
    //console.log("with",roadTrain.chassisWidth)

  }
  // set chassisFrontLength if not defined by user
  if (!roadTrain.chassisFrontLength){
    roadTrain.chassisFrontLength = chassisFrontEst;
  }
  // set chassisRearLength if not defined by user
  if (!roadTrain.chassisRearLength){
    roadTrain.chassisRearLength = chassisRearEst;
  }

  let  massCenterChassisLength , extensionChassisLength , extensionChassisLocalZ;
  roadTrain.chassisLength = roadTrain.chassisFrontLength-roadTrain.chassisRearLength;
  if (Math.abs(chassisFrontLength)<Math.abs(chassisRearLength)){
    massCenterChassisLength = Math.abs(roadTrain.chassisFrontLength)*2;
    extensionChassisLocalZ = -roadTrain.chassisFrontLength + (roadTrain.chassisRearLength + roadTrain.chassisFrontLength)/2;
  }else{
    massCenterChassisLength = Math.abs(roadTrain.chassisRearLength)*2;
    extensionChassisLocalZ = -roadTrain.chassisRearLength + (roadTrain.chassisRearLength + roadTrain.chassisFrontLength)/2;
  }
  extensionChassisLength = roadTrain.chassisLength - massCenterChassisLength;
  // chassis
  roadTrain.chassisTop={};
  mainComposite.utils.addObject(roadTrain.chassisTop);
  let chassisTopPos = new THREE.Vector3(
    0,
    roadTrain.axelsVerticalFreedom,
    (roadTrain.chassisFrontLength+roadTrain.chassisRearLength)/2
    );
  chassisTopPos.applyQuaternion(threeQuat);

  roadTrain.chassisTop.set({
    geometryName : "box", 
    dimension : { height:roadTrain.chassisLength , width: roadTrain.chassisTickness , length: roadTrain.chassisWidth}, 
    position :{x:x+chassisTopPos.x , y:y+chassisTopPos.y , z:z+chassisTopPos.z}, 
    quaternion:new THREE.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w),
    color : roadTrain.chassisColor, 
    textureFileName:["/textures/bed.png"],
    materialName:"lambert",
    visible:false,
    sleep:true
  });

  roadTrain.chassis={};
  mainComposite.utils.addObject(roadTrain.chassis);
  let chassisPos = new THREE.Vector3(
    0,
    -roadTrain.axelsVerticalFreedom,
    0
    );
  chassisPos.applyQuaternion(threeQuat);

  roadTrain.chassis.set({
    geometryName : "box" , 
    dimension : { height:massCenterChassisLength , width: roadTrain.chassisTickness , length:roadTrain.chassisWidth}, 
    position :{x:x+chassisPos.x , y:y+chassisPos.y , z:z+chassisPos.z}, 
    quaternion:new THREE.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w),
    color : roadTrain.chassisColor, 
    textureFileName:["/textures/bed.png"],
    materialName:"lambert" ,
    visible:false,
    sleep:true,
    groupName:"chassis",
    collisionGroups:["suspension","obstacle","ground","chassis"],
    physicMaterial:"chassisMaterial"
  });


let compoundParts = [roadTrain.chassis,roadTrain.chassisTop];
if (extensionChassisLength!=0){
  roadTrain.chassisExtension={};
  mainComposite.utils.addObject(roadTrain.chassisExtension);
  let chassisExtensionPos = new THREE.Vector3(
    0,
    -roadTrain.axelsVerticalFreedom,
    extensionChassisLocalZ
    );
  chassisExtensionPos.applyQuaternion(threeQuat);

  roadTrain.chassisExtension.set({
    geometryName : "box" , 
    dimension : { height:extensionChassisLength , width: roadTrain.chassisTickness , length:roadTrain.chassisWidth}, 
    position :{x:x+chassisExtensionPos.x , y:y+chassisExtensionPos.y , z:z+chassisExtensionPos.z}, 
    quaternion:new THREE.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w),
    color : roadTrain.chassisColor, 
    textureFileName:["/textures/bed.png"],
    materialName:"lambert",
    visible:false,
    sleep:true
  });
  compoundParts.push(roadTrain.chassisExtension)
}

if (roadTrain.cabinInfo){
  for (let cabin of cabinInfo){
    roadTrain.cabinParts.push(cabin)
    let cabinPart = roadTrain.cabinParts[roadTrain.cabinParts.length - 1];
    mainComposite.utils.addObject(cabinPart);
    let cabinLocalPos = new THREE.Vector3(cabin.localPosition.x,cabin.localPosition.y,cabin.localPosition.z);
    let cabinLocalQuat =  new THREE.Quaternion(cabin.localQuaternion.x,cabin.localQuaternion.y,cabin.localQuaternion.z,cabin.localQuaternion.w);
    cabinLocalPos.applyQuaternion(threeQuat);
    cabinLocalPos.add(new THREE.Vector3(x,y,z))
    cabinLocalQuat.multiply(threeQuat);
    cabinPart.set({position:cabinLocalPos,quaternion:cabinLocalQuat , visible:false,sleep:true});
    if (roadTrain.cabinPhysic){
      compoundParts.push(cabinPart);
    }else{
      mainComposite.addLink(roadTrain.position,cabinPart.chassisPos);
      mainComposite.addLink(roadTrain.quaternion,cabinPart.chassisQuat);
      mainComposite.addLink(roadTrain.chassis.visible,cabinPart.visible);
      mainComposite.addLink(mainComposite.timeStamp,cabinPart.timeStamp);

      cabinPart.addFunction(updateFromChassis);
    }
  }
}

mainComposite.utils.makePhysicCompound(compoundParts);

  roadTrain.chassis.set({
    mass:roadTrain.chassisMass , 
    physicStatus:false
   });
  mainComposite.addLink(roadTrain.chassis.position, roadTrain.position);
  mainComposite.addLink(roadTrain.chassis.quaternion, roadTrain.quaternion);


  for (let i=0,len=roadTrain.wheels.length;i<len;++i){
    roadTrain.addLink(roadTrain.wheels[i].body , roadTrain.wheelsBodies[i]);
    roadTrain.addLink(roadTrain.suspensions[i].body , roadTrain.suspensionsBodies[i]);
  }
  roadTrain.addLink(roadTrain.chassis.body , roadTrain.chassisBody);
  return true;
  function updateFromChassis({chassisPos,chassisQuat,mesh,timeStamp}){
    let cabinLocalPos = new THREE.Vector3(localPosition.x,localPosition.y,localPosition.z);
    let cabinLocalQuat =  new THREE.Quaternion(localQuaternion.x,localQuaternion.y,localQuaternion.z,localQuaternion.w);
    let chassisPosThree = new THREE.Vector3(chassisPos.x,chassisPos.y,chassisPos.z);
    let chassisQuatThree =  new THREE.Quaternion(chassisQuat.x,chassisQuat.y,chassisQuat.z,chassisQuat.w);

    cabinLocalPos.applyQuaternion(chassisQuatThree);
    cabinLocalPos.add(chassisPosThree)
    cabinLocalQuat.multiply(chassisQuatThree);
    mesh.position.set(cabinLocalPos.x,cabinLocalPos.y,cabinLocalPos.z);
    mesh.quaternion.set(cabinLocalQuat.x,cabinLocalQuat.y,cabinLocalQuat.z,cabinLocalQuat.w);

  }
}



// CONCATENATED MODULE: ./mgame/mg.roadTrain.towing.js

function roadTrainTowing(roadTrain){

  roadTrain.frontTowing = {roadTrain};
  roadTrain.frontTowing.constraint = undefined;
  roadTrain.frontTowing.mainComposite =  roadTrain.mainComposite
  roadTrain.frontTowing.addFunction(linkChassisPosition);
  roadTrain.frontTowing.addFunction(setConstraint)

  roadTrain.frontTowing.loadedObjects = roadTrain.mainComposite.loadedObjects.getProxyLessObject;
  roadTrain.frontTowing.addFunction(mg_roadTrain_towing_addToLoadedObjects);
  roadTrain.frontTowing.addFunction(enableConstraint);



}

function mg_roadTrain_towing_addToLoadedObjects({setConstraint}){
  if (mg_roadTrain_towing_addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(setConstraint);
  return true;
}

function linkChassisPosition({towedRoadTrain}){
  roadTrain.addLink(towedRoadTrain.chassis.body , roadTrain.frontTowing.otherBody);
  roadTrain.addLink(roadTrain.chassis.body , roadTrain.frontTowing.thisBody);
  roadTrain.addLink(roadTrain.enable , roadTrain.frontTowing.thisEnable);
  roadTrain.addLink(towedRoadTrain.enable , roadTrain.frontTowing.otherEnable);




}

function setConstraint({thisTowingPosition,otherTowingPosition,thisBody ,otherBody}){
  if (setConstraint) return setConstraint
  let thisPos = new CANNON.Vec3(thisTowingPosition.x,thisTowingPosition.y,thisTowingPosition.z);
  let otherPos = new CANNON.Vec3(otherTowingPosition.x,otherTowingPosition.y,otherTowingPosition.z);

  constraint = new CANNON.PointToPointConstraint(thisBody,thisPos,otherBody,otherPos );
  return constraint;
}

function enableConstraint({setConstraint,thisEnable,otherEnable}){
  if (setConstraint && thisEnable && otherEnable && !enableConstraint){
    roadTrain.cannon.addConstraint(setConstraint);
    return true;
  }else{
    if (enableConstraint) roadTrain.cannon.removeConstraint(setConstraint);
    return false;

  }

}
// CONCATENATED MODULE: ./mgame/mg.roadTrain.js




function newRoadTrain(mainComposite , roadTrain){
  roadTrain.loadedObjects = mainComposite.loadedObjects.getProxyLessObject;
  roadTrain.addFunction(mg_roadTrain_addToLoadedObjects);

  roadTrain.self = roadTrain;
  roadTrain.mainComposite = mainComposite;
  roadTrain.cannon = mainComposite.cannon;
  mainComposite.addLink(mainComposite.actualInterval , roadTrain.actualInterval);

  roadTrainControls(roadTrain);
  roadTrainTowing(roadTrain);
  loadBuilder(roadTrain);

  roadTrain.allWheels = [];
  roadTrain.axelSprings = [];

  if (!roadTrain.enable) roadTrain.enable = false;
  if (!roadTrain.suspensionRestLenght) roadTrain.suspensionRestLenght = 0;
  if (!roadTrain.speed) roadTrain.speed = 0;
  if (!roadTrain.engineForce) roadTrain.engineForce = 30;
  roadTrain.addFunction(setHingeConstraints);
  roadTrain.addFunction(applySteering);
  roadTrain.addFunction(updateEngine);
  roadTrain.addFunction(roadtrainStatus);
  roadTrain.addFunction(mg_roadTrain_setPosition);
  roadTrain.addFunction(resetLocation);

  
}

function mg_roadTrain_addToLoadedObjects({setHingeConstraints}){
  if (mg_roadTrain_addToLoadedObjects) return true;
  mainComposite.loadedObjects.push(self);
  return true;
}

function resetLocation({resetPos,resetQuat}){
  let chassisLocalPos = new THREE.Vector3(0,-axelsVerticalFreedom,0);
  chassisLocalPos.applyQuaternion(resetQuat);
  self.chassis.set({position:chassisLocalPos.add(resetPos) , quaternion:resetQuat , reset:true});

  for (let i=0,len=allWheels.length;i<len;++i){
    let threeQuat = resetQuat.clone();
    let localPos = new THREE.Vector3(wheels[i].localPos.x,wheels[i].localPos.y,wheels[i].localPos.z);
    let correctionQuat =  new THREE.Quaternion(wheels[i].correctionQuat.x,wheels[i].correctionQuat.y,wheels[i].correctionQuat.z,wheels[i].correctionQuat.w);
    localPos.applyQuaternion(threeQuat);
    localPos.add(resetPos);
    threeQuat.multiply(correctionQuat);
    wheels[i].self.set({position:localPos,quaternion:threeQuat , reset:true});
    //
    let localSusPos = new THREE.Vector3(suspensions[i].localSusPos.x,suspensions[i].localSusPos.y,suspensions[i].localSusPos.z);
    threeQuat = resetQuat.clone();
    localSusPos.applyQuaternion(threeQuat);
    localSusPos.add(resetPos);
    suspensions[i].self.set({position:localSusPos,quaternion:threeQuat , reset:true});
  }
  resetPos = undefined;
  resetQuat = undefined;
}
function mg_roadTrain_setPosition({newPos,newQuat,setHingeConstraints , setNewPos}){
  if (enable) return false;
  let chassisLocalPos = new THREE.Vector3(0,-axelsVerticalFreedom,0);
  chassisLocalPos.applyQuaternion( new THREE.Quaternion(newQuat.x,newQuat.y,newQuat.z,newQuat.w));
  chassisBody.position = new CANNON.Vec3(chassisLocalPos.x+ newPos.x,chassisLocalPos.y+newPos.y,chassisLocalPos.z+newPos.z);
  chassisBody.quaternion = new CANNON.Quaternion(newQuat.x,newQuat.y,newQuat.z,newQuat.w);

  for (let i=0,len=allWheels.length;i<len;++i){
    let threeQuat = new THREE.Quaternion(newQuat.x,newQuat.y,newQuat.z,newQuat.w)
    let localPos = new THREE.Vector3(wheels[i].localPos.x,wheels[i].localPos.y,wheels[i].localPos.z);
    let correctionQuat =  new THREE.Quaternion(wheels[i].correctionQuat.x,wheels[i].correctionQuat.y,wheels[i].correctionQuat.z,wheels[i].correctionQuat.w);
    localPos.applyQuaternion(threeQuat);
    localPos.add(newPos);
    threeQuat.multiply(correctionQuat);
    wheels[i].body.position = new CANNON.Vec3(localPos.x,localPos.y,localPos.z);
    wheels[i].body.quaternion =new CANNON.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w);
    //
    let localSusPos = new THREE.Vector3(suspensions[i].localSusPos.x,suspensions[i].localSusPos.y,suspensions[i].localSusPos.z);
    threeQuat = new THREE.Quaternion(newQuat.x,newQuat.y,newQuat.z,newQuat.w);
    localSusPos.applyQuaternion(threeQuat);
    localSusPos.add(newPos);
    suspensions[i].body.position = new CANNON.Vec3(localSusPos.x,localSusPos.y,localSusPos.z);
    suspensions[i].body.quaternion =new CANNON.Quaternion(threeQuat.x,threeQuat.y,threeQuat.z,threeQuat.w);



    

  }
  enable=true;
}


function updateEngine({roadtrainStatus , engineForce , speed}){
  if (roadtrainStatus){
    for (let wheel of allWheels){
      if (wheel.driving){
        let c = wheel.wheelConstraint;
        if (engineForce==0){
          c.disableMotor()
        }else{
          c.setMotorMaxForce(engineForce);
          if (wheel.isLeft){
            c.setMotorSpeed(speed);
          }else{
            c.setMotorSpeed(-speed);
          }
          c.enableMotor();
        }
      }
  
    }
  }

}

function applySteering({steering , roadtrainStatus}){
  if (roadtrainStatus){
    let x = Math.cos(steering);
    let z = Math.sin(steering);
    for (let wheel of allWheels){
      if (wheel.steering){
        if (wheel.isLeft){
          wheel.wheelConstraint.axisA.x = x;
          wheel.wheelConstraint.axisA.z = z;
        }else{
          wheel.wheelConstraint.axisA.x = -x;
          wheel.wheelConstraint.axisA.z = -z;
        }
        wheel.wheelConstraint.update();
      }
    }
  }

}

function roadtrainStatus({setHingeConstraints , enable}){
  if (enable && roadtrainStatus) return true;
  if (!enable && !roadtrainStatus) return false;
  if (enable && !roadtrainStatus){
    for (let i=0,len=allWheels.length;i<len;++i){
      self.wheels[i].set({visible:true,physicStatus:true,sleep:false,enableCollisionCallback:true});
      self.suspensions[i].set({visible:true,physicStatus:true,sleep:false,enableCollisionCallback:true});
      cannon.addConstraint(allWheels[i].wheelConstraint);
      cannon.addConstraint(allWheels[i].suspensionConstraint);
      allWheels[i].wheelConstraint.rotationalEquation1.setSpookParams(1e10,4,1/120);
      allWheels[i].wheelConstraint.rotationalEquation2.setSpookParams(1e10,4,1/120);
      allWheels[i].suspensionConstraint.rotationalEquation1.setSpookParams(1e10,4,1/120);
      allWheels[i].suspensionConstraint.rotationalEquation2.setSpookParams(1e10,4,1/120);
    }
    self.chassis.set({visible:true,physicStatus:true,sleep:false,enableCollisionCallback:true});
    return true;
  }
  if (!enable && roadtrainStatus){
    for (let i=0,len=allWheels.length;i<len;++i){
      self.wheels[i].set({visible:false,physicStatus:false,sleep:true,enableCollisionCallback:false});
      self.suspensions[i].set({visible:false,physicStatus:false,sleep:true,enableCollisionCallback:false});
      cannon.removeConstraint(allWheels[i].wheelConstraint);
      cannon.removeConstraint(allWheels[i].suspensionConstraint);
    }
    self.chassis.set({visible:false,physicStatus:false,sleep:true,enableCollisionCallback:false});
    return false;
  }

}
function setHingeConstraints({headBodiesLoaded , cannon}){
  if (setHingeConstraints) return true;
  let zero = new CANNON.Vec3(0,0,0);
  let axisA,axisB;
  let backQuat = new THREE.Quaternion(
    chassisBody.quaternion.x,
    chassisBody.quaternion.y,
    chassisBody.quaternion.z,
    chassisBody.quaternion.w).normalize().inverse();

  for (let i=0,len=wheelsBodies.length;i<len;++i){
    let thisWheel={};

    let wheelRelativePos = new THREE.Vector3(
      wheelsBodies[i].position.x - suspensionsBodies[i].position.x, 
      wheelsBodies[i].position.y - suspensionsBodies[i].position.y, 
      wheelsBodies[i].position.z - suspensionsBodies[i].position.z
      );
      wheelRelativePos.applyQuaternion(backQuat);

    if (wheels[i].wheelLeft){
      thisWheel.isLeft = true;
      axisA = new CANNON.Vec3(1,0,0);
      axisB = new CANNON.Vec3(0,1,0);
    }

    if (!wheels[i].wheelLeft){
      thisWheel.isLeft = false;
      axisA = new CANNON.Vec3(-1,0,0);
      axisB = new CANNON.Vec3(0,1,0);
    }

    thisWheel.wheelConstraint = new CANNON.HingeConstraint(
      suspensionsBodies[i],
      wheelsBodies[i],{
      pivotA: new CANNON.Vec3(wheelRelativePos.x,wheelRelativePos.y,wheelRelativePos.z),
      axisA:axisA,
      pivotB: zero,
      axisB: axisB,
      maxForce:1e6,
      collideConnected:false
    });
    thisWheel.wheelConstraint.collideConnected = false;

    if (wheels[i].wheelSteering){
      thisWheel.steering =true;
    }else{
      thisWheel.steering =false;

    }

    if (wheels[i].driving){
      thisWheel.driving = true;
    }else{
      thisWheel.driving = false;
    }

    let susLocal = new THREE.Vector3(
      suspensionsBodies[i].position.x - chassisBody.position.x,
      suspensionsBodies[i].position.y - chassisBody.position.y,
      suspensionsBodies[i].position.z - chassisBody.position.z
      );
    susLocal.applyQuaternion(backQuat);

    let farPivotSuspension = new THREE.Vector3(
      -axisA.x * wheels[i].susLength, 
      0, 
      0
      );
    let farPivotTranspose = new THREE.Vector3(farPivotSuspension.x,0,0);

    let farPivotChassis = new THREE.Vector3(
      farPivotTranspose.x+susLocal.x, 
      farPivotTranspose.y+susLocal.y, 
      farPivotTranspose.z+susLocal.z
        );

    thisWheel.suspensionConstraint = new CANNON.HingeConstraint(
      chassisBody, 
      suspensionsBodies[i],{
        pivotA: new CANNON.Vec3(farPivotChassis.x,farPivotChassis.y,farPivotChassis.z),
        axisA: new CANNON.Vec3(0,0,1),
        pivotB:  new CANNON.Vec3(farPivotSuspension.x,farPivotSuspension.y,farPivotSuspension.z),
        axisB: new CANNON.Vec3(0,0,1),
        maxForce:1e6
      }
    );

    let susRelPos = new THREE.Vector3(
      wheelsBodies[i].position.x - chassisBody.position.x, 
      wheelsBodies[i].position.y - chassisBody.position.y , 
      wheelsBodies[i].position.z - chassisBody.position.z);
    susRelPos.applyQuaternion(backQuat);
    susRelPos.y = susRelPos.y - wheels[i].springLenght;

    axelSprings.push(new CANNON.Spring(
      chassisBody,
      suspensionsBodies[i],{
        restLength:suspensionRestLenght,
        stiffness: wheels[i].stiffness,
        damping: wheels[i].damping,
        localAnchorA:new CANNON.Vec3(susRelPos.x,susRelPos.y,susRelPos.z),
        localAnchorB:wheelRelativePos
      }
    ));

    allWheels.push(thisWheel);
  }

  cannon.addEventListener("postStep",function(event){
    if (roadtrainStatus){
      for (let i=0,len=axelSprings.length;i<len;++i){
        axelSprings[i].applyForce();
      }
    }
  });


  return true;
}
// CONCATENATED MODULE: ./mgame/mg.js
/**
 * MGame is a javascript game  engine built  
 * on top of CANNON.js and THREE.js.
 *
 * @link   https://github.com/makannew/MGame
 * @file   mg.js
 * @author Makan Edrisi
 * @since  2019
 * @version 1.0.0
 */





















function MGame(){

  let result = composer();
  result.composerConfig({upPropagation:false});

  result.loadedObjects = [];
  result.three = initializeThreeJs(result);
  result.activeCamera = undefined;
  result.collisionGroupsNames = ["all"];

  result.utils = {};
  result.utils.addCamera = function(newCamera){addCamera(result , newCamera);}
  result.utils.addLight = function(newLight){addLight(result , newLight);}
  result.utils.addObject = function(newObject){addObject(result , newObject);}
  result.utils.addSkyBox = function(newSkyBox){addSkyBox(result , newSkyBox);}
  result.utils.addPhysicBody = function(sceneObject){addPhysicBody(result , sceneObject);}
  result.utils.makePhysicCompound = function(sceneObjects){makePhysicCompound(result , sceneObjects);}
  result.utils.newLockConstraint = function(constraintName){newLockConstraint(result , constraintName);}
  result.utils.newPointsConstraint = function(constraintName){newPointsConstraint(result , constraintName);}
  result.utils.newDistanceConstraint = function(constraintName){newDistanceConstraint(result , constraintName);}
  result.utils.newHingeConstraint = function(constraintName){newHingeConstraint(result , constraintName);}
  result.utils.newRigidVehicle = function(vehicleName){newRigidVehicle(result , vehicleName);}
  result.utils.newRayCastVehicle = function(vehicleName){newRayCastVehicle(result , vehicleName);}
  result.utils.newRoadTrain = function(roadTrain){newRoadTrain(result , roadTrain)};

  result.utils.start = startEngine;
  result.self = result;

  result.cameras = {};
  result.worlds = {};
  result.lights ={};

  cannonSettingsBuilder(result);

  result.actualInterval = 0;
  result.running = false;

  // default values
  result.settings = settings;

  result.addFunction(newAnimationFrame);
  result.loadedObjects.push(result);
  result.removeBodies = [];

  return result;
}

const newAnimationFrame = function({timeStamp , three , activeCamera , cannon}){
  three.renderer.render( three.scene , activeCamera);
  let t = actualInterval;
  let s = cannonSafeStep;
  if (removeBodies.length>0){
    cannon.remove(removeBodies.pop());
  }
  while (t>=s){
    cannon.step(s);
    t -=s;
  }
  actualInterval = t;

  return true;
}


// CONCATENATED MODULE: ./roadtrain/roadtrain.lights.js

function loadLights(rGame){
  rGame.lights.ambient1 = {};
  rGame.utils.addLight(rGame.lights.ambient1);
  rGame.lights.ambient1.set({lightType:"ambient" , intensity:.5});

  rGame.lights.directional = {};
  rGame.utils.addLight(rGame.lights.directional);
  rGame.lights.directional.set ({lightType :"directional" , intensity:.7 , position:{x:0,y:500,z:0},targetPosition:new THREE.Vector3(0,0,0)});
}
// CONCATENATED MODULE: ./roadtrain/roadtrain.cameras.js

function loadCameras(rGame){

  // // back chasing camera
  rGame.cameras.camera3 = {};
  rGame.utils.addCamera(rGame.cameras.camera3);
  rGame.cameras.camera3.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:true});

  // // cockpit camera
  rGame.cameras.camera10 = {};
  rGame.utils.addCamera(rGame.cameras.camera10);
  rGame.cameras.camera10.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});

  // // reverse camera
  rGame.cameras.camera7 = {};
  rGame.utils.addCamera(rGame.cameras.camera7);
  rGame.cameras.camera7.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});
  // // right camera
  rGame.cameras.camera8 = {};
  rGame.utils.addCamera(rGame.cameras.camera8);
  rGame.cameras.camera8.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});
  // // top camera
  rGame.cameras.camera9 = {};
  rGame.utils.addCamera(rGame.cameras.camera9);
  rGame.cameras.camera9.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});
    // // transition camera
    rGame.cameras.cameraT = {};
    rGame.utils.addCamera(rGame.cameras.cameraT);
    rGame.cameras.cameraT.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});
    
  // // back chasing camera for 1 trailer
  rGame.cameras.camera11 = {};
  rGame.utils.addCamera(rGame.cameras.camera11);
  rGame.cameras.camera11.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});

  // // back chasing camera for 2 trailers
  rGame.cameras.camera12 = {};
  rGame.utils.addCamera(rGame.cameras.camera12);
  rGame.cameras.camera12.set ({cameraFocalLenght: 75 , cameraNearView: .01 , cameraFarView: 800 , active:false});

  
}

// CONCATENATED MODULE: ./roadtrain/roadtrain.controls.js

function loadControls(rGame){
  // game controls
  let oldTouchX=undefined;
  let vehicle = rGame.roadTrains[0];
  let touchSpan = vehicle.touchSpan;
  let maxSteering = vehicle.absMaxSteering;
  let steering;

  rGame.activateControls = function(){
    document.addEventListener( "keydown" , keyDownHandler , false );
    document.addEventListener( "keyup" , keyUpHandler , false );
    document.addEventListener( 'touchstart' ,toushStartHandler , { passive: false })
    document.addEventListener( 'touchend' ,toushEndHandler , { passive: false })
    document.addEventListener( 'touchmove' ,touchMoveHandler , { passive: false })
  }


function touchMoveHandler(e){
  e.preventDefault();
  let x=e.changedTouches[0].clientX;
  steering = maxSteering * (x - oldTouchX)/touchSpan;
  if (steering>maxSteering) steering = maxSteering;
  if (steering<-maxSteering) steering = -maxSteering;
  vehicle.steering = steering;
}
function toushStartHandler(e){
  e.preventDefault();
  oldTouchX = e.touches[0].clientX;
  if (vehicle.speed ==0){
    vehicle.speed = rGame.checkPoint.speed;
  }
}

function toushEndHandler(e){
  e.preventDefault();
}

  function keyDownHandler ( e ){

    if (e.key == "Right" || e.key == "ArrowRight"){
      if (!vehicle.turningRight){
        vehicle.set({turningRight:true,turningLeft:false});

      }
    }
    if (e.key == "Left" || e.key == "ArrowLeft"){
      if (!vehicle.turningLeft){
        vehicle.set({turningRight:false,turningLeft:true});

      }

    }
    if (e.key == "Up" || e.key == "ArrowUp"){
      if (vehicle.speed ==0){
        vehicle.speed = rGame.checkPoint.speed;
      }

    }

    if (e.key =="t"){
      ++vehicle.visibleTrailers;
    }
    e.preventDefault();
  }
  function keyUpHandler ( e ){

    if (e.key == "Right" || e.key == "ArrowRight" ){
      vehicle.turningRight = false;
    }

    if (e.key == "Left" || e.key == "ArrowLeft"){
      vehicle.turningLeft = false;
    }

    if (e.key == "c"){
      rGame.set({cheating:true});
      rGame.checkPoint.block=20;
      rGame.checkPoint.speed=20;
      rGame.checkPoint.camera=rGame.cameras.camera3;

    }

  }

}
// CONCATENATED MODULE: ./roadtrain/roadtrain.camera.control.js

function loadCameraControl(rGame){
  //rGame.addFunction(updateCarCameras);
  rGame.transitionData = undefined;
  rGame.addFunction(updateBackChasingCamera);
  rGame.addFunction(updateReverseCamera);
  rGame.addFunction(updateSideCamera);
  rGame.addFunction(updateTopCamera);
  rGame.addFunction(updateCockpitCamera);
  rGame.addFunction(transitionCamera);
  rGame.addFunction(updateOneTrailerCamera);
  rGame.addFunction(updateTwoTrailerCamera);


}

function transitionCamera({cameraTransitionPlot , newAnimationFrame}){
  let thisCam = cameras.cameraT.camera;

  if (cameraTransitionPlot.length==0 && transitionData==undefined){
    cameraTransitionPlot=undefined;
    return;
  }
  if (activeCamera != thisCam){
    self.cameras.cameraT.active = true;
  }
  if (transitionData==undefined){
    let thisPlot = cameraTransitionPlot.shift();
    let startCam = thisPlot.startCam.getProxyLessObject.camera;
    transitionData={
      endCam:thisPlot.endCam.getProxyLessObject.camera,
      proxyEndCam:thisPlot.endCam,
      movingSpeed:thisPlot.movingSpeed,
      rotatingSpeed:thisPlot.rotatingSpeed,
      movingType:thisPlot.movingType,
      rotatingType:thisPlot.rotatingType,
      startTime:timeStamp
    };
    thisCam.position.x = startCam.position.x;
    thisCam.position.y = startCam.position.y;
    thisCam.position.z = startCam.position.z;
    thisCam.quaternion.x = startCam.quaternion.x;
    thisCam.quaternion.y = startCam.quaternion.y;
    thisCam.quaternion.z = startCam.quaternion.z;
    thisCam.quaternion.w = startCam.quaternion.w;
  }
  let movingRatio = (timeStamp - transitionData.startTime)/transitionData.movingSpeed;
  let rotatingRatio = (timeStamp - transitionData.startTime)/transitionData.rotatingSpeed
  movingRatio = Math.pow(movingRatio,transitionData.movingType);
  rotatingRatio = Math.pow(rotatingRatio,transitionData.rotatingType);
  let pos = thisCam.position;
  let quat = thisCam.quaternion; 
  quat.slerp(transitionData.endCam.quaternion,(movingRatio>1)?1:movingRatio);
  pos.lerp(transitionData.endCam.position,(rotatingRatio>1)?1:rotatingRatio);
  if (pos.distanceToSquared (transitionData.endCam.position)<.01 && quat.angleTo(transitionData.endCam.quaternion)<.01){
    transitionData.proxyEndCam.active = true;
    transitionData=undefined;
  }

}

function updateBackChasingCamera ({newAnimationFrame}){
  if(startUp) return; 
  let thisCam = cameras.camera3.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos = roadTrains[0].position;
  let truckQuat = roadTrains[0].quaternion;
  let trailersNumber = roadTrains[0].visibleTrailers + 1;
  let pos = thisCam.position;
  let beam = new THREE.Vector3(0,0,-10*trailersNumber);
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = beam.y + truckPos.y +2+(trailersNumber*2) //-47+(trailersNumber*2);//beam.y+truckPos.y;
  pos.z = beam.z + truckPos.z;
  thisCam.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

}


function updateOneTrailerCamera ({newAnimationFrame}){
  if(startUp) return; 
  let thisCam = cameras.camera11.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos = roadTrains[0].position;
  let truckQuat = roadTrains[0].quaternion;
  let trailersNumber = roadTrains[0].visibleTrailers + 1;
  let pos = thisCam.position;
  let beam = new THREE.Vector3(0,0,-10*trailersNumber);
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = beam.y + truckPos.y +2+(trailersNumber*2) //-47+(trailersNumber*2);//beam.y+truckPos.y;
  pos.z = beam.z + truckPos.z;
  thisCam.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

}

function updateTwoTrailerCamera ({newAnimationFrame}){
  if(startUp) return; 
  let thisCam = cameras.camera12.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos = roadTrains[0].position;
  let truckQuat = roadTrains[0].quaternion;
  let trailersNumber = roadTrains[0].visibleTrailers + 1;
  let pos = thisCam.position;
  let beam = new THREE.Vector3(0,0,-10*trailersNumber);
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = beam.y + truckPos.y +2+(trailersNumber*2) //-47+(trailersNumber*2);//beam.y+truckPos.y;
  pos.z = beam.z + truckPos.z;
  thisCam.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

}


function updateReverseCamera ({newAnimationFrame}){
  let thisCam = cameras.camera7.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos = roadTrains[0].position;
  let truckQuat = roadTrains[0].quaternion;
  let pos = thisCam.position;
  let beam = new THREE.Vector3(0,4,12);
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = beam.y + truckPos.y;
  pos.z = beam.z + truckPos.z;
  thisCam.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

}

function updateSideCamera ({newAnimationFrame}){
  let thisCam = cameras.camera8.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos =  roadTrains[0].position;
  let truckQuat = new THREE.Quaternion(roadTrains[0].quaternion.x,roadTrains[0].quaternion.y,roadTrains[0].quaternion.z,roadTrains[0].quaternion.w);
  let pos = thisCam.position;
  let beam = new THREE.Vector3(2,1.5,-15);
  let horizen = new THREE.Vector3(2,1.5,12);
  horizen.applyQuaternion(truckQuat);
  horizen.add(truckPos)
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = beam.y + truckPos.y;
  pos.z = beam.z + truckPos.z;
  thisCam.lookAt(new THREE.Vector3(horizen.x,horizen.y,horizen.z));

}

function updateTopCamera ({newAnimationFrame}){
  let thisCam = cameras.camera9.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos = roadTrains[0].position;
  let truckQuat = roadTrains[0].quaternion;
  let trailersNumber = roadTrains[0].visibleTrailers + 1;
  let pos = thisCam.position;
  let beam = new THREE.Vector3(0,0,-10*trailersNumber);
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = -502;//beam.y + truckPos.y +2+(trailersNumber*2) //-47+(trailersNumber*2);//beam.y+truckPos.y;
  pos.z = beam.z + truckPos.z-10;
  thisCam.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

}

function updateCockpitCamera ({newAnimationFrame}){
  let thisCam = cameras.camera10.camera;
  if (activeCamera != thisCam && activeCamera!=cameras.cameraT.camera) return;
  let truckPos = roadTrains[0].position;
  let truckQuat = roadTrains[0].quaternion;
  //let trailersNumber = roadTrains[0].visibleTrailers + 1;
  let pos = thisCam.position;
  let beam = new THREE.Vector3(0,4,2);
  let lookPoint = new THREE.Vector3(0,2,8);
  lookPoint.applyQuaternion(truckQuat);
  lookPoint.add(truckPos);
  beam.applyQuaternion(truckQuat);
  pos.x = beam.x + truckPos.x;
  pos.y = beam.y + truckPos.y  //-47+(trailersNumber*2);//beam.y+truckPos.y;
  pos.z = beam.z + truckPos.z;
  thisCam.lookAt(lookPoint);

}



// CONCATENATED MODULE: ./roadtrain/roadtrain.roadTrain.wheels.js
// truck head
function truckWheelsInfo(){
  let  radius=.65,width=.3,axelLength=1.4,axelHeight=.8,axelDiameter=.15  ;
  let frontAxel = 3.1 , midleAxel = -1.9 , rearAxel = -3.5;
  let frontStiffness = 220,frontDamping = 60,frontSpringLength = .8;
  let rearStiffness = 170,rearDamping = 30,rearSpringLength = .8;
  let angularDamping=0;
  let wheelMass = 1, axelMass = 25;
  let textureFileName = ["/textures/tyreInside.png","/textures/tyreTexture.png","/textures/tyreOutside.png"] , color=0xffffff , susColor=0x333333;
  let wheelMaterial="wheelMaterial", axelMaterial="objectMaterial", fakeMaterial="fakeWheelMaterial", frontWheel = "frontWheelMaterial";
  let steeringWheelMass = 1, steeringAxelMass = 25;
  let wheelsInfo=[];
  let  doubleWheelGap = .07;
  //front left
  wheelsInfo.push({
    radius,
    width,
    axelLength:axelLength + width - doubleWheelGap,
    axelHeight,
    axelDiameter,
    distance:frontAxel,
    stiffness:frontStiffness,
    damping:frontDamping,
    springLegth:frontSpringLength,
    steering:true,
    engine:true,
    left:true,
    wheelMass:steeringWheelMass,
    axelMass:steeringAxelMass,
    textureFileName,
    
    color,
    susColor,
    wheelMaterial:frontWheel,
    axelMaterial,
    angularDamping
  });
  //front right
  wheelsInfo.push({
    radius,
    width,
    axelLength:axelLength + width - doubleWheelGap,
    axelHeight,
    axelDiameter,
    distance:frontAxel,
    stiffness:frontStiffness,
    damping:frontDamping,
    springLegth:frontSpringLength,
    steering:true,
    engine:true,
    left:false,
    wheelMass:steeringWheelMass,
    axelMass:steeringAxelMass,
    textureFileName,
    color,
    susColor,
    wheelMaterial:frontWheel,
    axelMaterial,
    angularDamping
  });
  //middle left
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:midleAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:true,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    color,
    susColor,
    wheelMaterial:fakeMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap

  });
  //middle right
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:midleAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:true,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial:fakeMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap

  });
  //rear left
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:rearAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:true,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap

  });
  //rear right
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:rearAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:true,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap

  });  
  
  return wheelsInfo;
}

// trailer
function trailerWheelsInfo(){
  let  radius=.65,width=.3,axelLength=1.4,axelHeight=.8,axelDiameter=.1;
  let frontAxel = 1 , midleAxel = .5 , rearAxel = -1.5;
  let frontStiffness = 50,frontDamping = 30,frontSpringLength = .8;
  let rearStiffness = 70,rearDamping = 30,rearSpringLength = .8;
  let angularDamping=0;

  let wheelMass = 1 , axelMass = 5;
  let textureFileName = ["/textures/tyreInside.png","/textures/tyreTexture.png","/textures/tyreOutside.png"] , color=0xffffff, susColor=0x333333;
  let wheelMaterial="wheelMaterial", axelMaterial="objectMaterial", fakeMaterial="fakeWheelMaterial";
  let  doubleWheelGap = .07;

  let wheelsInfo=[];
  //front left
  // wheelsInfo.push({
  //   radius,
  //   width,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:frontAxel,
  //   stiffness:frontStiffness,
  //   damping:frontDamping,
  //   springLegth:frontSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:true,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial:fakeMaterial,
  //   axelMaterial,
  //   angularDamping
  // });
 // front right
  // wheelsInfo.push({
  //   radius,
  //   width,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:frontAxel,
  //   stiffness:frontStiffness,
  //   damping:frontDamping,
  //   springLegth:frontSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:false,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial:fakeMaterial,
  //   axelMaterial,
  //   angularDamping
  // });
  //middle left
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:midleAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:false,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap
  });
  //middle right
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:midleAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:false,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap
  });
  //rear left
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:rearAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:false,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap
  });
  //rear right
  wheelsInfo.push({
    radius,
    width:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:rearAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:false,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    doubleWheelGap
  });  
  
  return wheelsInfo;
}
// additional trailer
function additionalTrailerWheelsInfo(){
  let  radius=.65,width=.3,axelLength=1.4,axelHeight=.8,axelDiameter=.1;
  let frontAxel = 7 , midleAxel = .5 , rearAxel = -1.5;
  let frontStiffness = 40,frontDamping = 30,frontSpringLength = .8;
  let rearStiffness = 40,rearDamping = 30,rearSpringLength = .8;
  let angularDamping=0;

  let wheelMass = 1 , axelMass = 5;
  let textureFileName = ["/textures/tyreInside.png","/textures/tyreTexture.png","/textures/tyreOutside.png"] , color=0xffffff, susColor=0x333333;
  let wheelMaterial="wheelMaterial", axelMaterial="objectMaterial", fakeMaterial="fakeWheelMaterial", frontWheel = "frontWheelMaterial";
  let  doubleWheelGap = .07;

  let wheelsInfo=[];
  //front left
  wheelsInfo.push({
    radius,
    width,//:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:frontAxel,
    stiffness:frontStiffness,
    damping:frontDamping,
    springLegth:frontSpringLength,
    steering:false,
    engine:false,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap

  });
 // front right
  wheelsInfo.push({
    radius,
    width,//:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:frontAxel,
    stiffness:frontStiffness,
    damping:frontDamping,
    springLegth:frontSpringLength,
    steering:false,
    engine:false,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap

  });
  //middle left
  // wheelsInfo.push({
  //   radius,
  //   width:(width * 2) + doubleWheelGap,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:midleAxel,
  //   stiffness:rearStiffness,
  //   damping:rearDamping,
  //   springLegth:rearSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:true,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial,
  //   axelMaterial,
  //   angularDamping,
  //   doubleWheelGap
  // });
  //middle right
  // wheelsInfo.push({
  //   radius,
  //   width:(width * 2) + doubleWheelGap,
  //   axelLength,
  //   axelHeight,
  //   axelDiameter,
  //   distance:midleAxel,
  //   stiffness:rearStiffness,
  //   damping:rearDamping,
  //   springLegth:rearSpringLength,
  //   steering:false,
  //   engine:false,
  //   left:false,
  //   wheelMass,
  //   axelMass,
  //   textureFileName,
  //   color,
  //   wheelMaterial,
  //   axelMaterial,
  //   angularDamping,
  //   doubleWheelGap
  // });
  //rear left
  wheelsInfo.push({
    radius,
    width,//:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:rearAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:false,
    left:true,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap
  });
  //rear right
  wheelsInfo.push({
    radius,
    width,//:(width * 2) + doubleWheelGap,
    axelLength,
    axelHeight,
    axelDiameter,
    distance:rearAxel,
    stiffness:rearStiffness,
    damping:rearDamping,
    springLegth:rearSpringLength,
    steering:false,
    engine:false,
    left:false,
    wheelMass,
    axelMass,
    textureFileName,
    susColor,
    color,
    wheelMaterial,
    axelMaterial,
    angularDamping,
    //doubleWheelGap
  });  
  
  return wheelsInfo;
}



// CONCATENATED MODULE: ./roadtrain/roadtrain.roadTrain.cabin.js


function loadTruckCabin(){
  let cabin = [];
  // all object position and orientation are relavive to vehicle position and orientation
  //hood
  cabin.push({
    geometryName : "box" , 
    dimension : { height:4 , width: 2 , length:2.1}, 
    localPosition :new THREE.Vector3( 0 , 1.1 , 2.6 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    color : 0xffffff, 
    materialName:"lambert",
    textureFileName:["/textures/bodyColor.png","/textures/hoodFront.png"],
    materialIndex:[0,0,0,0,0,0,0,0,1,1,0,0],
    groupName:"cabin",
  });
  //cabin
  cabin.push({
    geometryName : "box" , 
    dimension : { height:2 , width: 2.7 , length:2.4}, 
    localPosition :new THREE.Vector3( 0 , 1.5 , 1.3 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    color : 0xffffff, 
    materialName:"lambert",
    textureFileName:["/textures/cabinLeft.png","/textures/cabinRight.png","/textures/bodyColor.png","/textures/bodyColor.png","/textures/windShield.png","/textures/bodyColor.png"],
    materialIndex:[0,0,1,1,3,3,3,3,4,4,3,3]
 
  });
  //rear vertical
  cabin.push({
    geometryName : "box" , 
    dimension : { height:.1 , width: .5 , length:3.4}, 
    localPosition :new THREE.Vector3( 0 , 0 , -4.35 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    textureFileName:["/textures/bodyColor.png","/textures/backLights.png"],
    materialIndex:[0,0,0,0,0,0,0,0,0,0,1,1],
    color : 0xffffff, 
    materialName:"lambert",
  });
  //front shield
  cabin.push({
    geometryName : "box" , 
    dimension : { height:.52 , width: 1.2 , length:3.4}, 
    localPosition :new THREE.Vector3( 0 , .6 , 4.15 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    color : 0xffffff, 
    textureFileName:["/textures/bodyColor.png","/textures/frontLights.png"],
    materialIndex:[0,0,0,0,0,0,0,0,1,1,0,0],
    materialName:"lambert",
  });

    //left Box
    cabin.push({
      geometryName : "box" , 
      dimension : { height:3.2 , width: .5 , length:.9}, 
      localPosition :new THREE.Vector3( 1.25 , 0.4, .5 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      color : 0xffffff, 
      textureFileName:["/textures/bodyColor.png"],
      materialName:"lambert",
    });

    //right Box
    cabin.push({
      geometryName : "box" , 
      dimension : { height:3.2 , width: .5 , length:.9}, 
      localPosition :new THREE.Vector3( -1.25 , 0.4 , .5 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      textureFileName:["/textures/bodyColor.png"],
      color : 0xffffff, 
      materialName:"lambert",
    });

    //left cover
    cabin.push({
      geometryName : "box" , 
      dimension : { height:1 , width: .1 , length:.9}, 
      localPosition :new THREE.Vector3( 1.25 , .75+.4 , 3.4 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      color : 0xffffff, 
      textureFileName:["/textures/bodyColor.png"],
      materialName:"lambert",
    });

    cabin.push({
      geometryName : "box" , 
      dimension : { height:1.2 , width: .1 , length:.9}, 
      localPosition :new THREE.Vector3( 1.25 , .46+.4 , 2.4 ), 
      localQuaternion:new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-Math.PI/6),
      textureFileName:["/textures/bodyColor.png"],
      color : 0xffffff, 
      materialName:"lambert",
    });

    //right cover
    cabin.push({
      geometryName : "box" , 
      dimension : { height:1 , width: .1 , length:.9}, 
      localPosition :new THREE.Vector3( -1.25 , .75+.4 , 3.4 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      textureFileName:["/textures/bodyColor.png"],
      color : 0xffffff, 
      materialName:"lambert",
    });
    cabin.push({
      geometryName : "box" , 
      dimension : { height:1.2 , width: .1 , length:.9}, 
      localPosition :new THREE.Vector3( -1.25 , .46+.4 , 2.4 ), 
      localQuaternion:new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-Math.PI/6),
      textureFileName:["/textures/bodyColor.png"],
      color : 0xffffff, 
      materialName:"lambert",
    });

    //fifth wheel
    cabin.push({
      geometryName : "cylinder" , 
      dimension : {radiusTop:.5,radiusBottom:.5,height:.3},
      radialSegments :32, 
      cylinderHeightSegments:1,
      localPosition :new THREE.Vector3( 0 , .4 , -2 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      textureFileName:["/textures/fifthWheel.png","/textures/fifthWheelSide.png","/textures/fifthWheel.png"],
      materialIndex:[0,1,2],
      color : 0xffffff, 
      materialName:"lambert",
    });




  return cabin;
}

function loadTrailerContainer(){
  let cabin = [];
  // all object position and orientation are relavive to vehicle position and orientation
  //front base
  cabin.push({
    geometryName : "box" , 
    dimension : { height:.5 , width: 1 , length:2}, 
    localPosition :new THREE.Vector3( 0 , .2 , 1 ), 
    localQuaternion:new THREE.Quaternion(0,0,0,1),
    textureFileName:["/textures/bed.png"],
    color : 0xffffff, 
    materialName:"lambert",
    groupName:"cabin",
    collisionGroups:["obstacle"]
  });
    //rear base
    cabin.push({
      geometryName : "box" , 
      dimension : { height:.5 , width: 1 , length:2}, 
      localPosition :new THREE.Vector3( 0 , .2 , -2 ), 
      localQuaternion:new THREE.Quaternion(0,0,0,1),
      textureFileName:["/textures/bed.png"],
      color : 0xffffff, 
      materialName:"lambert",
    });
    //tanker
    cabin.push({
      geometryName : "cylinder" , 
      dimension : {radiusTop:1.1,radiusBottom:1.1,height:9}, 
      localPosition :new THREE.Vector3( 0 , 1.7 , 3 ), 
      radialSegments:32,
      cylinderHeightSegments:1,
      localQuaternion:new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0).normalize(), -Math.PI/2),
      textureFileName:["/textures/tanker.png"],
      color : 0xffffff, 
      materialName:"lambert",
    });
    cabin.push({
      geometryName : "sphere" , 
      dimension : {radius:1.1}, 
      localPosition :new THREE.Vector3( 0 , 1.7 , -1.5 ), 
      widthSegments :32,
      heightSegments:32,
      localQuaternion:new THREE.Quaternion(),//.setFromAxisAngle(new THREE.Vector3(1,0,0).normalize(), -Math.PI/2),
      textureFileName:["/textures/tanker.png"],
      color : 0xffffff, 
      materialName:"lambert",
    });
    cabin.push({
      geometryName : "sphere" , 
      dimension : {radius:1.1}, 
      localPosition :new THREE.Vector3( 0 , 1.7 , 7.5 ), 
      widthSegments :32,
      heightSegments:32,
      localQuaternion:new THREE.Quaternion(),//.setFromAxisAngle(new THREE.Vector3(1,0,0).normalize(), -Math.PI/2),
      textureFileName:["/textures/tanker.png"],
      color : 0xffffff, 
      materialName:"lambert",
    });

  return cabin;

}

function loadAdditionalTrailer(){
  let cabin = [];
      //tanker
      cabin.push({
        geometryName : "cylinder" , 
        dimension : {radiusTop:1.1,radiusBottom:1.1,height:9}, 
        localPosition :new THREE.Vector3( 0 , 1.5 , 3 ), 
        radialSegments:32,
        cylinderHeightSegments:1,
        localQuaternion:new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0).normalize(), -Math.PI/2),
        textureFileName:["/textures/tanker.png"],
        color : 0xffffff, 
        materialName:"lambert",
      });
      cabin.push({
        geometryName : "sphere" , 
        dimension : {radius:1.1}, 
        localPosition :new THREE.Vector3( 0 , 1.5 , -1.5 ), 
        widthSegments :32,
        heightSegments:32,
        localQuaternion:new THREE.Quaternion(),//.setFromAxisAngle(new THREE.Vector3(1,0,0).normalize(), -Math.PI/2),
        textureFileName:["/textures/tanker.png"],
        color : 0xffffff, 
        materialName:"lambert",
      });
      cabin.push({
        geometryName : "sphere" , 
        dimension : {radius:1.1}, 
        localPosition :new THREE.Vector3( 0 , 1.5 , 7.5 ), 
        widthSegments :32,
        heightSegments:32,
        localQuaternion:new THREE.Quaternion(),//.setFromAxisAngle(new THREE.Vector3(1,0,0).normalize(), -Math.PI/2),
        textureFileName:["/textures/tanker.png"],
        color : 0xffffff, 
        materialName:"lambert",
      });

      // hinge
      cabin.push({
        geometryName : "box" , 
        dimension : { height:5.3 , width: .2 , length:.2}, 
        localPosition :new THREE.Vector3( 0 , 0 , 10.5 ), 
        localQuaternion:new THREE.Quaternion(0,0,0,1),
        textureFileName:["/textures/bed.png"],
        color : 0xffffff, 
        materialName:"lambert",
      });


  return cabin;

}
// CONCATENATED MODULE: ./roadtrain/roadtrain.roadTrain.js




function loadRoadTrain(rGame){
  let iniPos={x:0,y:1,z:10}

  let iniQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0).normalize(),   Math.PI);
  let trailersNumber = 4

  rGame.roadTrains = [];
  rGame.roadTrains.push({});
  rGame.utils.newRoadTrain(rGame.roadTrains[0]);
  rGame.roadTrains[0].set({
    position:{x:iniPos.x , y:iniPos.y , z:iniPos.z} , 
    quaternion:new THREE.Quaternion(iniQuat.x , iniQuat.y , iniQuat.z , iniQuat.w),
    axelsVerticalFreedom:.2 , 
    chassisTickness:.05,
    chassisMass:30 , 
    chassisFrontLength:4.1 ,
    chassisRearLength:-4.3  , 
    chassisColor:0xffffff,
    wheelsInfo:truckWheelsInfo(),
    cabinInfo:loadTruckCabin(),
    cabinPhysic:true,
    enable:true,
    initialSpeed:7
  });

  // load trailers but not enabled
  
  for (let i=0;i<trailersNumber;++i){
    rGame.roadTrains.push({});
    let last = rGame.roadTrains.length - 1;
    rGame.utils.newRoadTrain(rGame.roadTrains[last]);
    rGame.roadTrains[last].set({
      position:{x:0,y:0,z:0} , 
      quaternion: {x:0,y:0,z:0,w:1},
      axelsVerticalFreedom:.2 , 
      chassisMass:10,
      chassisTickness:.05,
      chassisFrontLength:(i==0)?1.2:8,
      chassisRearLength:-2 , 
      chassisWidth:2,
      chassisColor:0xffffff,
      wheelsInfo:(i==0)?trailerWheelsInfo():additionalTrailerWheelsInfo(),
      cabinInfo:(i==0)?loadTrailerContainer():loadAdditionalTrailer(),
      towingGap:(i==0)?10:16,
      towingRatio:(i==0)?.4:.18,
      cabinPhysic:true

    });
  }

  rGame.roadTrains[0].addFunction(addTrailer);
  rGame.roadTrains[0].addFunction(addTrailerToLoadObjects);



  rGame.roadTrains[0].visibleTrailers = 0;
  rGame.loadedObjects.push(rGame.roadTrains);


}

function addTrailerToLoadObjects({addTrailer}){
  if (addTrailerToLoadObjects) return true;
  mainComposite.loadedObjects.push(addTrailer);

  return true;
}

function addTrailer({visibleTrailers,chassisBody}){
  let roadTrains = mainComposite.roadTrains;
  if ( visibleTrailers>0 &&visibleTrailers<roadTrains.length-1 && roadTrains[visibleTrailers-1].enable==true && !roadTrains[visibleTrailers].enable){
    let towingGap=roadTrains[visibleTrailers].towingGap;
    let towingRatio=roadTrains[visibleTrailers].towingRatio;
    let prev=visibleTrailers - 1;
    let pos = roadTrains[prev].position;
    let quat = new THREE.Quaternion(
      roadTrains[prev].quaternion.x,
      roadTrains[prev].quaternion.y,
      roadTrains[prev].quaternion.z,
      roadTrains[prev].quaternion.w
      );
    let newPos = new THREE.Vector3(0,axelsVerticalFreedom,-towingGap);
    newPos.applyQuaternion(quat);
  
    let trailerPos = new THREE.Vector3(
      pos.x + newPos.x,
      pos.y + newPos.y,
      pos.z + newPos.z
      );
    roadTrains[visibleTrailers].set({newPos:trailerPos,newQuat:quat,setNewPos:true});

    roadTrains[visibleTrailers].frontTowing.set({
      thisTowingPosition:{x:0,y:0,z:towingGap*(1-towingRatio)} , 
      otherTowingPosition:{x:0,y:0,z:-towingGap*towingRatio},
      towedRoadTrain:roadTrains[prev]});
  }
  return true;
}

// CONCATENATED MODULE: ./roadtrain/roadtrain.startUp.js


function loadStartUp(rGame){
  rGame.addFunction(startUpProcess);

}

function startUpProcess ({newAnimationFrame , startUp}){
    let startUpDuration =2500;
    let t = timeStamp - startUp;
    let thisCam = cameras.camera3.camera;
    let truckPos = roadTrains[0].position;
    let truckQuat = roadTrains[0].quaternion;
    let trailersNumber = roadTrains[0].visibleTrailers + 1;
    let pos = thisCam.position;
    let d = t;
    if (d>startUpDuration) d= startUpDuration;
    d = Math.pow(1-d/startUpDuration,2)*startUpDuration;
    let beam = new THREE.Vector3(0,d,-(10+d));
    beam.applyQuaternion(truckQuat);
    pos.x = beam.x + truckPos.x;
    pos.y = beam.y + truckPos.y +2+(trailersNumber*2) //-47+(trailersNumber*2);//beam.y+truckPos.y;
    pos.z = beam.z + truckPos.z;
    thisCam.lookAt(new THREE.Vector3(truckPos.x,truckPos.y,truckPos.z));

    if (t > startUpDuration){
      startUp = undefined;
      self.activateControls();
    } 

}

// CONCATENATED MODULE: ./roadtrain/roadtrain.road.obstacles.js
// require("./textures/barrierStand.png");
function box(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = localQuat.clone();

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "box",
    dimension: { height: 3, width: 3, length: 3 },
    position: new THREE.Vector3(0, 1.6, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    textureFileName: ["/textures/box.jpg"],
    color: 0xffffff,
    materialName: "lambert",
  });

  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 1,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function barrel(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = localQuat.clone();

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "cylinder",
    dimension: { radiusTop: 0.8, radiusBottom: 0.8, height: 2.2 },
    position: new THREE.Vector3(0, 2, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xffffff,
    materialName: "lambert",
    textureFileName: [
      "/textures/barrelTop.jpg",
      "/textures/barrelSide.jpg",
      "/textures/barrelBottom.jpg",
    ],
    materialIndex: [0, 1, 2],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 10,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}
function barrierB(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = localQuat.clone();

  thisQuat.multiply(quat);

  obj.objects = [{}, {}];
  obj.constraints = [{}];
  obj.parts = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "box",
    dimension: { height: 1, width: 1, length: 1 },
    position: new THREE.Vector3(0, 0.2, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    textureFileName: ["/textures/barrierStand.png"],
    color: 0xffffff,
    materialName: "lambert",
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 10,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({
    geometryName: "box",
    textureFileName: ["/textures/barrierStand.png"],
    dimension: { height: 1, width: 1, length: 1 },
    position: new THREE.Vector3(0, 1.4, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    materialName: "lambert",
  });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass: 10,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  rGame.utils.newLockConstraint(obj.constraints[0]);
  obj.constraints[0].maxForce = 1e6;
  obj.constraints[0].bodies = [obj.objects[0], obj.objects[1]];
}

function barrierA(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [{}, {}, {}, {}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "box",
    dimension: { height: 0.1, width: 0.8, length: 8 },
    position: new THREE.Vector3(0, 2, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    textureFileName: ["/textures/barrierSide.png"],
    color: 0xffffff,
    materialName: "basic",
  });

  rGame.utils.addObject(obj.parts[0]);
  obj.parts[0].set({
    geometryName: "box",
    textureFileName: ["/textures/barrierStand.png"],
    dimension: { height: 0.1, width: 1.4, length: 0.8 },
    position: new THREE.Vector3(-3, 0.9, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    materialName: "phong",
  });

  rGame.utils.addObject(obj.parts[1]);
  obj.parts[1].set({
    geometryName: "box",
    textureFileName: ["/textures/barrierStand.png"],
    dimension: { height: 0.1, width: 1.4, length: 0.8 },
    position: new THREE.Vector3(3, 0.9, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    materialName: "phong",
  });

  rGame.utils.addObject(obj.parts[2]);
  obj.parts[2].set({
    geometryName: "box",
    textureFileName: ["/textures/barrierStand.png"],
    dimension: { height: 0.8, width: 0.2, length: 0.8 },
    position: new THREE.Vector3(-3, 0.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    materialName: "phong",
  });

  rGame.utils.addObject(obj.parts[3]);
  obj.parts[3].set({
    geometryName: "box",
    textureFileName: ["/textures/barrierStand.png"],
    dimension: { height: 0.8, width: 0.2, length: 0.8 },
    position: new THREE.Vector3(3, 0.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    materialName: "phong",
  });

  rGame.utils.makePhysicCompound([obj.objects[0], ...obj.parts]);
  obj.objects[0].set({
    mass: 2,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
  // rGame.utils.newLockConstraint(obj.constraints[0]);
  // obj.constraints[0].maxForce = 1e6;
  // obj.constraints[0].bodies = [obj.objects[0] , obj.objects[1] , obj.objects[2] , obj.objects[3] , obj.objects[4]];
}

function coneBarrier(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [{}, {}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "box",
    dimension: { height: 1, width: 0.1, length: 1 },
    position: new THREE.Vector3(0, 0.05, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xffffff,
    textureFileName: [
      "/textures/coneBaseSide.png",
      "/textures/coneBaseTop.png",
      "/textures/coneBaseBottom.png",
    ],
    materialIndex: [0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 0, 0],
    materialName: "basic",
  });

  rGame.utils.addObject(obj.parts[0]);
  obj.parts[0].set({
    geometryName: "cylinder",
    dimension: { radiusTop: 0.04, radiusBottom: 0.45, height: 1.5 },
    position: new THREE.Vector3(0, 0.8, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/coneTop.png", "/textures/coneSide.png"],
    materialIndex: [0, 1, 0],
  });

  rGame.utils.makePhysicCompound([obj.objects[0], ...obj.parts]);
  obj.objects[0].set({
    mass: 0.5,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function heavyBall(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];
  obj.parts = [{}, {}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "box",
    dimension: { height: 1, width: 0.1, length: 1 },
    position: new THREE.Vector3(0, 0.05, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffbb0,
    materialName: "phong",
  });

  rGame.utils.addObject(obj.parts[0]);
  obj.parts[0].set({
    geometryName: "sphere",
    dimension: { radius: 2.5 },
    position: new THREE.Vector3(0, 2.6, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/earth.jpg"],
  });

  rGame.utils.makePhysicCompound([obj.objects[0], ...obj.parts]);
  obj.objects[0].set({
    mass: 0.5,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function jupiter(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 2 },
    position: new THREE.Vector3(0, 2.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/jupiter.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 300,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function earth(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 1.5 },
    position: new THREE.Vector3(0, 1.6, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/earth.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 220,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function venus(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 8 },
    position: new THREE.Vector3(0, 4.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/venus.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 500,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function mars(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 2.5 },
    position: new THREE.Vector3(0, 2.6, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/mars.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 200,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function mercury(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 3.5 },
    position: new THREE.Vector3(0, 3.6, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/mercury.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 600,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function pluto(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 1 },
    position: new THREE.Vector3(0, 1.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/pluto.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 2000,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function moon(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 0.8 },
    position: new THREE.Vector3(0, 1.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/moon.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function sun(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 1.8 },
    position: new THREE.Vector3(0, 1.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/sun.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 2000,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function eris(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}];
  obj.constraints = [];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 1.8 },
    position: new THREE.Vector3(0, 1.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/sun.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 500,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });
}

function rotatingEarth(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}, {}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 1.5 },
    position: new THREE.Vector3(0, 1.6, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/earth.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({
    geometryName: "sphere",
    dimension: { radius: 0.1 },
    position: new THREE.Vector3(0, 1.6, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    //textureFileName:["/textures/earth.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass: 0,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  rGame.utils.newHingeConstraint(obj.constraints[0]);
  obj.constraints[0].axisA = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].axisB = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].set({
    bodyA: obj.objects[1],
    bodyB: obj.objects[0],
    offsetA: { x: 0, y: 0, z: 0 },
    offsetB: { x: 0, y: 0, z: 0 },
    motor: true,
    speed: -1.0,
    active: false,
  });
}
function rotatingMars(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}, {}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 3 },
    position: new THREE.Vector3(0, 3.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/mars.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({
    geometryName: "sphere",
    dimension: { radius: 0.1 },
    position: new THREE.Vector3(0, 3.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    //textureFileName:["/textures/earth.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass: 0,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  rGame.utils.newHingeConstraint(obj.constraints[0]);
  obj.constraints[0].axisA = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].axisB = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].set({
    bodyA: obj.objects[1],
    bodyB: obj.objects[0],
    offsetA: { x: 0, y: 0, z: 0 },
    offsetB: { x: 0, y: 0, z: 0 },
    motor: true,
    speed: 1,
    active: false,
  });
}

function rotatingVenus(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}, {}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 2 },
    position: new THREE.Vector3(0, 2.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/venus.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({
    geometryName: "sphere",
    dimension: { radius: 0.1 },
    position: new THREE.Vector3(0, 2.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    //textureFileName:["/textures/earth.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass: 0,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  rGame.utils.newHingeConstraint(obj.constraints[0]);
  obj.constraints[0].axisA = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].axisB = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].set({
    bodyA: obj.objects[1],
    bodyB: obj.objects[0],
    offsetA: { x: 0, y: 0, z: 0 },
    offsetB: { x: 0, y: 0, z: 0 },
    motor: true,
    speed: -2,
    active: false,
  });
}

function rotatingJupiter(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}, {}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 1.2 },
    position: new THREE.Vector3(0, 1.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/jupiter.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({
    geometryName: "sphere",
    dimension: { radius: 0.1 },
    position: new THREE.Vector3(0, 1.1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    //textureFileName:["/textures/earth.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass: 0,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  rGame.utils.newHingeConstraint(obj.constraints[0]);
  obj.constraints[0].axisA = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].axisB = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].set({
    bodyA: obj.objects[1],
    bodyB: obj.objects[0],
    offsetA: { x: 0, y: 0, z: 0 },
    offsetB: { x: 0, y: 0, z: 0 },
    motor: true,
    speed: -3,
    active: false,
  });
}

function rotatingMercury(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}, {}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 2.5 },
    position: new THREE.Vector3(0, 2.6, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/mercury.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({
    geometryName: "sphere",
    dimension: { radius: 0.1 },
    position: new THREE.Vector3(0, 2.6, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    //textureFileName:["/textures/earth.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass: 0,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  rGame.utils.newHingeConstraint(obj.constraints[0]);
  obj.constraints[0].axisA = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].axisB = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].set({
    bodyA: obj.objects[1],
    bodyB: obj.objects[0],
    offsetA: { x: 0, y: 0, z: 0 },
    offsetB: { x: 0, y: 0, z: 0 },
    motor: true,
    speed: 2,
    active: false,
  });
}

function rotatingHaumea(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}, {}];
  obj.constraints = [{}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 1.3 },
    position: new THREE.Vector3(0, 1.4, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/haumea.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  // static core
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({
    geometryName: "sphere",
    dimension: { radius: 0.1 },
    position: new THREE.Vector3(0, 1.4, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    //textureFileName:["/textures/earth.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass: 0,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  rGame.utils.newHingeConstraint(obj.constraints[0]);
  obj.constraints[0].axisA = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].axisB = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].set({
    bodyA: obj.objects[1],
    bodyB: obj.objects[0],
    offsetA: { x: 0, y: 0, z: 0 },
    offsetB: { x: 0, y: 0, z: 0 },
    motor: true,
    speed: 4,
    active: false,
  });
}

function sunCeres(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}, {}, {}];
  obj.constraints = [{}, {}];

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 1.5 },
    position: new THREE.Vector3(2, 1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/sun.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  //
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({
    geometryName: "sphere",
    dimension: { radius: 0.7 },
    position: new THREE.Vector3(-4, 1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/ceres.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  // static core
  rGame.utils.addObject(obj.objects[2]);
  obj.objects[2].set({
    geometryName: "sphere",
    dimension: { radius: 0.4 },
    position: new THREE.Vector3(2, 1, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    //textureFileName:["/textures/earth.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[2]);
  obj.objects[2].set({
    mass: 0,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  rGame.utils.newHingeConstraint(obj.constraints[0]);
  obj.constraints[0].axisA = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].axisB = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].set({
    bodyA: obj.objects[2],
    bodyB: obj.objects[1],
    offsetA: { x: 0, y: 0, z: 0 },
    offsetB: { x: 6, y: 0, z: 0 },
    motor: true,
    speed: -2.0,
    active: false,
  });

  rGame.utils.newHingeConstraint(obj.constraints[1]);
  obj.constraints[1].axisA = new CANNON.Vec3(0, 1, 0);
  obj.constraints[1].axisB = new CANNON.Vec3(0, 1, 0);
  obj.constraints[1].set({
    bodyA: obj.objects[0],
    bodyB: obj.objects[2],
    offsetA: { x: 0, y: 0, z: 0 },
    offsetB: { x: 0, y: 0, z: 0 },
    motor: true,
    speed: 2.0,
    active: false,
  });
}

function jupiterHaumea(
  obj,
  pos,
  quat,
  localPos = new THREE.Vector3(0, 0, 0),
  localQuat = new THREE.Quaternion(0, 0, 0, 1),
  visible
) {
  let rGame = obj.getParentComposite;
  let thisQuat = new THREE.Quaternion(
    localQuat.x,
    localQuat.y,
    localQuat.z,
    localQuat.w
  );

  thisQuat.multiply(quat);

  obj.objects = [{}, {}, {}];
  obj.constraints = [{}, {}];
  let orbit = 27;

  rGame.utils.addObject(obj.objects[0]);
  obj.objects[0].set({
    geometryName: "sphere",
    dimension: { radius: 12 },
    position: new THREE.Vector3(0, 12, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/jupiter.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[0]);
  obj.objects[0].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  //
  rGame.utils.addObject(obj.objects[1]);
  obj.objects[1].set({
    geometryName: "sphere",
    dimension: { radius: 1.5 },
    position: new THREE.Vector3(orbit, 12, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    textureFileName: ["/textures/haumea.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[1]);
  obj.objects[1].set({
    mass: 100,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  // static core
  rGame.utils.addObject(obj.objects[2]);
  obj.objects[2].set({
    geometryName: "sphere",
    dimension: { radius: 11 },
    position: new THREE.Vector3(0, 12, 0)
      .add(localPos)
      .applyQuaternion(quat)
      .add(pos),
    quaternion: thisQuat,
    color: 0xaffffff,
    materialName: "basic",
    //textureFileName:["/textures/earth.jpg"],
  });
  rGame.utils.addPhysicBody(obj.objects[2]);
  obj.objects[2].set({
    mass: 0,
    allowSleep: true,
    sleep: true,
    physicStatus: false,
    visible,
    groupName: "obstacle",
    collisionGroups: ["wheel", "ground", "chassis", "obstacle"],
    physicMaterial: "objectMaterial",
  });

  rGame.utils.newHingeConstraint(obj.constraints[0]);
  obj.constraints[0].axisA = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].axisB = new CANNON.Vec3(0, 1, 0);
  obj.constraints[0].set({
    bodyA: obj.objects[2],
    bodyB: obj.objects[1],
    offsetA: { x: 0, y: 0, z: 0 },
    offsetB: { x: -orbit, y: 0, z: 0 },
    motor: true,
    speed: -2.0,
    active: false,
  });

  rGame.utils.newHingeConstraint(obj.constraints[1]);
  obj.constraints[1].axisA = new CANNON.Vec3(0, 1, 0);
  obj.constraints[1].axisB = new CANNON.Vec3(0, 1, 0);
  obj.constraints[1].set({
    bodyA: obj.objects[0],
    bodyB: obj.objects[2],
    offsetA: { x: 0, y: 0, z: 0 },
    offsetB: { x: 0, y: 0, z: 0 },
    motor: true,
    speed: 2.0,
    active: false,
  });
}

// CONCATENATED MODULE: ./roadtrain/roadtrain.road.data.js


function roadData(rGame){
  let maxAcceptableInterval = 25;
  let slope = Math.PI/16;
  let result = [
    {
      width:15,
      length:30,
      tickness:.8,
      position:{x:0,y:0,z:0},
      quaternion:{x:0,y:0,z:0,w:1},
      color:0xffffff,
      materialName:"lambert",
      physicMaterial:"groundMaterial",
      offset:{x:0,y:0.01,z:0},
      textureFileName:["/textures/road1.png","/textures/roadTrain.png"],
      materialIndex:[0,0,0,0,0,0,0,0,1,1,0,0],
      frontActiveBlocks:4,
      rearActiveBlocks:-4,
      frontVisibleBlocks:9,
      rearVisibleBlocks:-5,

    },
    {
      plot:(rGame)=>{
        rGame.roadTrains[0].speed = 15;
      },
      up:slope,
      obstacles:[
        {build:coneBarrier , localPos:{x:-5,y:.4,z:-15}, enablingDistance:0 , disablingDistance:2}

      ]
    },
    {
      up:slope,
      obstacles:[
        {build:coneBarrier , localPos:{x:4,y:.4,z:-10}, enablingDistance:0 , disablingDistance:2},
      ]
    },
    {
      up:slope,
      obstacles:[
        {build:earth , localPos:{x:-1,y:5,z:-7} , enablingDistance:-2 , disablingDistance:1}
      ]
    },
    {
      down:slope
    },
    {
      down:slope
    },
    {
      down:slope
    },
    {
      plot:(rGame)=>{
        rGame.roadTrains[0].speed = 8;
      },
      down:slope,
      obstacles:[
        {build:venus , localPos:{x:0,y:18,z:-7} , enablingDistance:1 , disablingDistance:8}
      ]
    },
    {
      plot:(rGame)=>{
        rGame.cameraTransitionPlot = [
          {
          startCam:rGame.cameras.camera3,
          endCam:rGame.cameras.camera10,
          movingSpeed:500,
          movingType:2,
          rotatingSpeed:500,
          rotatingType:2,
          },
          {
          startCam:rGame.cameras.camera10,
          endCam:rGame.cameras.camera7,
          movingSpeed:500,
          movingType:3,
          rotatingSpeed:500,
          rotatingType:1,
          }

        ]
      },
      frontVisibleBlocks:9,
      rearVisibleBlocks:-8,
      obstacles:[
        {build:coneBarrier, localPos:{x:4,y:.4,z:0} , enablingDistance:0 , disablingDistance:2},
        {build:coneBarrier, localPos:{x:-4,y:.4,z:-10} , enablingDistance:0 , disablingDistance:2}

      ]
    },
    {
      obstacles:[
        {build:coneBarrier , localPos:{x:0,y:.4,z:10}, enablingDistance:0 , disablingDistance:2},
        {build:coneBarrier, localPos:{x:4,y:.4,z:0} , enablingDistance:0 , disablingDistance:2},
        {build:coneBarrier, localPos:{x:-4,y:.4,z:-10} , enablingDistance:0 , disablingDistance:2}

      ]
    },
    {
      uo:slope,
      obstacles:[
        {build:coneBarrier , localPos:{x:2,y:.4,z:10}, enablingDistance:0 , disablingDistance:2},
        {build:coneBarrier, localPos:{x:-5,y:.4,z:0} , enablingDistance:0 , disablingDistance:2},
        {build:coneBarrier, localPos:{x:5,y:.4,z:-10} , enablingDistance:0 , disablingDistance:2}

      ]
    },
    {
      left:slope*2,
      obstacles:[{build:barrierA , localPos:{x:4,y:.5,z:10},enablingDistance:0 , disablingDistance:2}],
      plot:(rGame)=>{
        rGame.cameraTransitionPlot = [
          {
          startCam:rGame.cameras.camera7,
          endCam:rGame.cameras.camera3,
          movingSpeed:1500,
          movingType:2,
          rotatingSpeed:1500,
          rotatingType:1,
          }
        ]
      }
    },
    {
      obstacles:[
        {build:box , localPos:{x:-5,y:.4,z:0}, enablingDistance:-1 , disablingDistance:3},
        {build:box , localPos:{x:0,y:.4,z:0}, enablingDistance:-1 , disablingDistance:3},
        {build:box , localPos:{x:5,y:.4,z:0}, enablingDistance:-1 , disablingDistance:3},
        {build:box , localPos:{x:-3,y:3.4,z:0}, enablingDistance:-1 , disablingDistance:3},
        {build:box , localPos:{x:0,y:6.4,z:0}, enablingDistance:-1 , disablingDistance:3},
        {build:box , localPos:{x:3,y:3.4,z:0}, enablingDistance:-1 , disablingDistance:3},
      ]
    },
    {},
    {
      checkPoint:{speed:18,camera:rGame.cameras.camera3}, // checkpoint


      left:slope*2,

    },
    {
      plot:(rGame)=>{
        rGame.roadTrains[0].speed = 14;
      },
      left:slope*2,

    },
    {
      left:slope*2,
      //color:0x00ff00,
      obstacles:[{build:barrierA , localPos:{x:4,y:.6,z:10}, enablingDistance:0 , disablingDistance:1}],
    },
    {

      left:slope,
      obstacles:[
        {build:rotatingEarth , localPos:{x:-3,y:2,z:10} , enablingDistance:-2 , disablingDistance:1},
        {build:rotatingVenus , localPos:{x:3,y:2,z:0} , enablingDistance:-2 , disablingDistance:1},
        {build:rotatingMars , localPos:{x:-3,y:2,z:-10} , enablingDistance:-2 , disablingDistance:1},


      ]
    },
    {
      textureNumber:0,
      obstacles:[
        {build:coneBarrier , localPos:{x:-3,y:.4,z:0}, enablingDistance:-1 , disablingDistance:1},
        {build:rotatingJupiter , localPos:{x:-3,y:2,z:10} , enablingDistance:-1 , disablingDistance:1},
        {build:rotatingMercury , localPos:{x:3,y:2,z:0} , enablingDistance:-1 , disablingDistance:1},
        {build:rotatingHaumea , localPos:{x:-3,y:2,z:-10} , enablingDistance:-1 , disablingDistance:1},

      ],

    },
    {
      right:slope*2,
      obstacles:[
      {build:barrel , localPos:{x:-2,y:2,z:0}, enablingDistance:0 , disablingDistance:2},
      {build:barrel , localPos:{x:-2,y:.4,z:0}, enablingDistance:0 , disablingDistance:2},
      {build:barrel , localPos:{x:0,y:.4,z:0}, enablingDistance:0 , disablingDistance:2},
      {build:barrel , localPos:{x:2,y:.4,z:0}, enablingDistance:0 , disablingDistance:2},
      {build:barrel , localPos:{x:4,y:.4,z:0}, enablingDistance:0 , disablingDistance:2},

    ]
  },
    {
      right:slope*2,

      plot:(rGame)=>{
      rGame.roadTrains[0].speed = 20;
      }
    },
    {
      right:slope*2,
      checkPoint:{speed:20,camera:rGame.cameras.camera11}, // checkpoint

      frontActiveBlocks:6
    },
    {
      right:slope*2,

      plot:(rGame)=>{
        if(rGame.framesInterval<maxAcceptableInterval){
          if (rGame.roadTrains[0].visibleTrailers<2)++rGame.roadTrains[0].visibleTrailers;
          if (rGame.activeCamera == rGame.cameras.camera3){
            rGame.cameraTransitionPlot = [
              {
              startCam:rGame.cameras.camera3,
              endCam:rGame.cameras.camera11,
              movingSpeed:3000,
              movingType:1,
              rotatingSpeed:1500,
              rotatingType:3,
              }
            ]
          }

        }

      },

    },
    {
      right:slope*2,
    },

    {
      up:slope*1,
    },
    {
      up:slope*1,
      obstacles:[
        {build:barrel , localPos:{x:-2,y:.4,z:-4}, enablingDistance:0 , disablingDistance:2},
        {build:barrel , localPos:{x:4,y:.4,z:4}, enablingDistance:0 , disablingDistance:2},
      ],
    },
    {
      obstacles:[
        {build:barrel , localPos:{x:-2,y:.4,z:-3}, enablingDistance:0 , disablingDistance:2},
      ],
      up:slope*2,
    },
    {obstacles:[{build:coneBarrier , localPos:{x:4,y:.4,z:0}, enablingDistance:0 , disablingDistance:-1}]},
    {obstacles:[{build:earth , localPos:{x:4,y:50,z:0}, enablingDistance:-4 , disablingDistance:-1}]},
    {obstacles:[{build:mercury , localPos:{x:8,y:50,z:0}, enablingDistance:-4 , disablingDistance:-1}]},
    {obstacles:[{build:mars , localPos:{x:2,y:50,z:0}, enablingDistance:-4 , disablingDistance:-1}]},
    {obstacles:[{build:eris , localPos:{x:4,y:50,z:0}, enablingDistance:-4 , disablingDistance:-1}]},
    {
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}, enablingDistance:0 , disablingDistance:1}],
      plot:(rGame)=>{
        rGame.roadTrains[0].speed = 20;
        }
    },

    {checkPoint:{speed:20,camera:rGame.cameras.camera11}}, // checkpoint
    {obstacles:[{build:barrierA , localPos:{x:-4,y:.4,z:10}, enablingDistance:0 , disablingDistance:1}]},
    {
      obstacles:[
        {build:barrel , localPos:{x:-3,y:.4,z:-7}, enablingDistance:-1 , disablingDistance:2},
        {build:barrel , localPos:{x:3,y:.4,z:7}, enablingDistance:-1 , disablingDistance:2},
      ],
    },
    {
      obstacles:[
        {build:jupiterHaumea , localPos:{x:24,y:-8,z:0}, enablingDistance:-2 , disablingDistance:2},
        {build:barrel , localPos:{x:-3,y:.4,z:0}, enablingDistance:-2 , disablingDistance:1},
        {build:barrel , localPos:{x:-3,y:.4,z:-5}, enablingDistance:-2 , disablingDistance:1},
        {build:barrel , localPos:{x:-3,y:.4,z:-8}, enablingDistance:-2 , disablingDistance:1},


      ]
    },
    {obstacles:[{build:pluto , localPos:{x:4,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {
      obstacles:[
        {build:sunCeres , localPos:{x:-5,y:1,z:0}, enablingDistance:-2 , disablingDistance:2},
        {build:barrel , localPos:{x:4,y:.4,z:-10}, enablingDistance:-2 , disablingDistance:1},
        {build:barrel , localPos:{x:-4,y:.4,z:10}, enablingDistance:-2 , disablingDistance:1},


      ]
    },
    {
      down:slope,
      plot:(rGame)=>{
        rGame.roadTrains[0].speed = 25;
        }
    },
    {checkPoint:{speed:25,camera:rGame.cameras.camera11}}, // checkpoint

    {
      down:slope,
      plot:(rGame)=>{
        if(rGame.framesInterval<maxAcceptableInterval){
          if (rGame.roadTrains[0].visibleTrailers<2)++rGame.roadTrains[0].visibleTrailers;
          if (rGame.activeCamera == rGame.cameras.camera11){
            rGame.cameraTransitionPlot = [
              {
              startCam:rGame.cameras.camera11,
              endCam:rGame.cameras.camera12,
              movingSpeed:3000,
              movingType:1,
              rotatingSpeed:1500,
              rotatingType:3,
              }
            ]
          }
        }
      }
    },
    {
      down:slope,
      obstacles:[{build:mercury , localPos:{x:-2,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},
    {},
    {obstacles:[{build:jupiter , localPos:{x:0,y:15,z:0}, enablingDistance:0 , disablingDistance:3}]},

    {
      up:slope,
      //color:0x00ff00,
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}, enablingDistance:0 , disablingDistance:3}],
    },
    {},


    {left:slope*3,offset:{x:0,y:-.05,z:0}},
    {right:slope*2},
    {right:slope*2},


    {right:slope*2},
    {right:slope*2},

    {right:slope*2,
      obstacles:[{build:barrierA , localPos:{x:4,y:.4,z:10}, enablingDistance:0 , disablingDistance:3},{build:barrierA , localPos:{x:4,y:.4,z:-10}, enablingDistance:0 , disablingDistance:3}],

    },
    {},
    {},
    {},

    

   


    
  ];

  return result;

}

// CONCATENATED MODULE: ./roadtrain/roadtrain.road.js


function loadRoad(rGame) {
  let rGameObject = rGame.getProxyLessObject;
  let roadInfo = roadData(rGame);
  rGame.road = roadInfo;
  rGame.checkPoint = { block: 0, speed: 10, camera: rGame.cameras.camera3 };
  let width,
    length,
    tickness,
    position,
    quaternion,
    color,
    materialName,
    physicMaterial,
    offset,
    textureFileName,
    textureNumber,
    materialIndex,
    frontActiveBlocks,
    rearActiveBlocks,
    frontVisibleBlocks,
    rearVisibleBlocks;
  let vAxis = new THREE.Vector3(1, 0, 0);
  let hAxis = new THREE.Vector3(0, 1, 0);
  let initialVisibleBlocks = roadInfo[0].frontVisibleBlocks;
  for (let i = 0, len = roadInfo.length; i < len; ++i) {
    rGame.road[i].block = {};
    rGame.road[i].enablingObstacles = [];
    rGame.road[i].disablingObstacles = [];
  }

  for (let i = 0, len = roadInfo.length; i < len; ++i) {
    let d = roadInfo[i];
    d.active = undefined;
    if (d.width !== undefined) width = d.width;
    if (d.length !== undefined) length = d.length;
    if (d.tickness !== undefined) tickness = d.tickness;
    if (d.color !== undefined) color = d.color;
    if (d.materialName !== undefined) materialName = d.materialName;
    if (d.physicMaterial !== undefined) physicMaterial = d.physicMaterial;
    if (d.offset !== undefined) offset = d.offset;
    if (d.frontVisibleBlocks !== undefined) {
      frontVisibleBlocks = d.frontVisibleBlocks;
    } else {
      d.frontVisibleBlocks = frontVisibleBlocks;
    }
    if (d.rearVisibleBlocks !== undefined) {
      rearVisibleBlocks = d.rearVisibleBlocks;
    } else {
      d.rearVisibleBlocks = rearVisibleBlocks;
    }

    if (d.frontActiveBlocks !== undefined) {
      frontActiveBlocks = d.frontActiveBlocks;
    } else {
      d.frontActiveBlocks = frontActiveBlocks;
    }
    if (d.rearActiveBlocks !== undefined) {
      rearActiveBlocks = d.rearActiveBlocks;
    } else {
      d.rearActiveBlocks = rearActiveBlocks;
    }

    if ("textureFileName" in d) {
      textureFileName = d.textureFileName;
      materialIndex = d.materialIndex;
      textureNumber = undefined;
    } else {
      textureFileName = undefined;
    }

    if ("textureNumber" in d) {
      textureNumber = d.textureNumber;
    } else {
      if (textureNumber === undefined && textureFileName === undefined) {
        textureNumber = i - 1;
      }
    }
    // calculate position and quaternion relative to previous one
    if (d.position === undefined) {
      let prevBlock = roadInfo[i - 1];
      let prevQuat = new THREE.Quaternion(
        prevBlock.quaternion.x,
        prevBlock.quaternion.y,
        prevBlock.quaternion.z,
        prevBlock.quaternion.w
      );
      let relativeQuat;
      if (d.up)
        relativeQuat = new THREE.Quaternion().setFromAxisAngle(vAxis, d.up);
      if (d.down)
        relativeQuat = new THREE.Quaternion().setFromAxisAngle(vAxis, -d.down);
      if (d.left)
        relativeQuat = new THREE.Quaternion().setFromAxisAngle(hAxis, d.left);
      if (d.right)
        relativeQuat = new THREE.Quaternion().setFromAxisAngle(hAxis, -d.right);
      if (relativeQuat !== undefined) prevQuat.multiply(relativeQuat);
      quaternion = new THREE.Quaternion(
        prevQuat.x,
        prevQuat.y,
        prevQuat.z,
        prevQuat.w
      );
      //

      if (d.up || d.down || d.right) {
        position = new THREE.Vector3(
          offset.x + width / 2,
          offset.y - tickness / 2,
          offset.z - length / 2
        )
          .applyQuaternion(quaternion)
          .add(prevBlock.leftCorner);
      } else {
        position = new THREE.Vector3(
          offset.x - width / 2,
          offset.y - tickness / 2,
          offset.z - length / 2
        )
          .applyQuaternion(quaternion)
          .add(prevBlock.rightCorner);
      }
    }
    if (d.position !== undefined)
      position = new THREE.Vector3(d.position.x, d.position.y, d.position.z);
    if (d.quaternion !== undefined)
      quaternion = new THREE.Quaternion(
        d.quaternion.x,
        d.quaternion.y,
        d.quaternion.z,
        d.quaternion.w
      );

    d.rightCorner = new THREE.Vector3(width / 2, tickness / 2, -length / 2)
      .applyQuaternion(quaternion)
      .add(position);
    d.leftCorner = new THREE.Vector3(-width / 2, tickness / 2, -length / 2)
      .applyQuaternion(quaternion)
      .add(position);

    d.rearRightCorner = new THREE.Vector3(width / 2, tickness / 2, length / 2)
      .applyQuaternion(quaternion)
      .add(position);
    d.rearLeftCorner = new THREE.Vector3(-width / 2, tickness / 2, length / 2)
      .applyQuaternion(quaternion)
      .add(position);

    d.bigX = Math.max(
      d.rightCorner.x,
      d.leftCorner.x,
      d.rearRightCorner.x,
      d.rearLeftCorner.x
    );
    d.smallX = Math.min(
      d.rightCorner.x,
      d.leftCorner.x,
      d.rearRightCorner.x,
      d.rearLeftCorner.x
    );

    d.bigZ = Math.max(
      d.rightCorner.z,
      d.leftCorner.z,
      d.rearRightCorner.z,
      d.rearLeftCorner.z
    );
    d.smallZ = Math.min(
      d.rightCorner.z,
      d.leftCorner.z,
      d.rearRightCorner.z,
      d.rearLeftCorner.z
    );

    d.position = position;
    d.quaternion = quaternion;

    //
    if (textureNumber != undefined && textureFileName === undefined) {
      rGame.addLink(
        rGame.road[textureNumber].block.texture,
        rGame.road[i].block.texture
      );
      rGame.addLink(
        rGame.road[textureNumber].block.materialIndex,
        rGame.road[i].block.materialIndex
      );
    }
    rGame.utils.addObject(rGame.road[i].block);
    rGame.road[i].block.set({
      geometryName: "box",
      dimension: { height: length, width: tickness, length: width },
      position,
      quaternion,
      color,
      materialName,
      physicMaterial,
      textureFileName,
      materialIndex,
      sleep: true,
      physicStatus: i == 0 ? true : false,
      visible: false, //(i<=initialVisibleBlocks)?true:false,
    });
    rGame.utils.addPhysicBody(rGame.road[i].block);
    rGame.road[i].block.set({
      mass: 0,
      allowSleep: true,
      sleep: true,
      groupName: "ground",
      collisionGroups: ["wheel", "obstacle", "chassis"],
      enableCollisionCallback: true,
      collisionCallback: function (e) {
        if (
          e.body.collisionFilterGroup ==
          rGameObject.roadTrains[0].wheelsBodies[0].collisionFilterGroup
        ) {
          if (
            i > rGameObject.currentStandingBlock ||
            rGameObject.currentStandingBlock == undefined
          )
            rGame.currentStandingBlock = i;
        }
      },
    });
    //
    //obstacles
    rGame.road[i].blockObstacles = [];
    let blockObstacles = rGame.road[i].blockObstacles;
    if (d.obstacles != undefined) {
      for (let obstacle of d.obstacles) {
        blockObstacles.push({});
        let thisObstacle = blockObstacles[blockObstacles.length - 1];
        obstacle.build(
          thisObstacle,
          position,
          quaternion,
          obstacle.localPos,
          obstacle.localQuat,
          i <= initialVisibleBlocks ? true : false
        );
        for (let object of thisObstacle.objects) {
          object.iniPos = object.position.clone();
          object.iniQuat = object.quaternion.clone();
        }
        rGame.road[i + obstacle.enablingDistance].enablingObstacles.push(
          rGame.road[i].blockObstacles[blockObstacles.length - 1]
        );
        rGame.road[i + obstacle.disablingDistance].disablingObstacles.push(
          rGame.road[i].blockObstacles[blockObstacles.length - 1]
        );
      }
    }
  }
}

function loadRoadUpdateManager(rGame) {
  rGame.standingTime = 0;
  rGame.addFunction(roadActiveBlocks);
  rGame.addFunction(runPlots);
  rGame.addFunction(performReset);
  rGame.addFunction(restart);
}

function runPlots({ currentStandingBlock }) {
  if (currentStandingBlock == runPlots) return currentStandingBlock;
  let thisBlock = road[currentStandingBlock];
  if (thisBlock.plot && thisBlock.plotRuned == undefined) {
    thisBlock.plotRuned = true;
    thisBlock.plot(self);
  }
  return currentStandingBlock;
}

function roadActiveBlocks({ currentStandingBlock }) {
  if (currentStandingBlock == roadActiveBlocks) return currentStandingBlock;
  standingTime = 0;
  let thisBlock = road[currentStandingBlock];
  if (thisBlock.checkPoint) {
    checkPoint.speed = thisBlock.checkPoint.speed;
    checkPoint.camera = thisBlock.checkPoint.camera;
    checkPoint.block = currentStandingBlock;
  }
  // set visible part of the road by frontVisibleBlocks and rearVisibleBlocks
  let maxAhead = currentStandingBlock + thisBlock.frontVisibleBlocks;
  let maxBehind = currentStandingBlock + thisBlock.rearVisibleBlocks;
  if (maxAhead > road.length - 1) maxAhead = road.length - 1;
  if (maxBehind < 0) maxBehind = 0;
  // set physicaly active part of road by frontActiveBlocks and rearActiveBlocks
  let activeAhead = currentStandingBlock + thisBlock.frontActiveBlocks;
  let activeBehind = currentStandingBlock + thisBlock.rearActiveBlocks;
  if (activeAhead > road.length - 1) activeAhead = road.length - 1;
  if (activeBehind < 0) activeBehind = 0;
  //
  for (let i = maxBehind; i <= maxAhead; ++i) {
    if (i >= activeBehind && i <= activeAhead) {
      if (road[i].active == undefined) {
        road[i].active = true;
        blockStatus(i, true, true, false);
      }
    } else {
      if (i == maxBehind || (i == maxAhead && i != currentStandingBlock)) {
        blockStatus(i, false, false, true);
      } else {
        blockStatus(i, false, true, false);
      }
    }
  }
  // set physical status of obstacles on other blocks
  if (
    road[currentStandingBlock].enablingObstacles.length != 0 &&
    road[currentStandingBlock].checkPoint
  ) {
    throw console.error(
      "checkpoint block cannot be where obstacle enablig will happen"
    );
  }
  if (road[currentStandingBlock].enablingObstacles) {
    for (let enablingObstacle of road[currentStandingBlock].enablingObstacles) {
      obstaclesStatus(enablingObstacle, true, true, false);
    }
  }

  if (road[currentStandingBlock].disablingObstacles) {
    for (let disablingObstacle of road[currentStandingBlock]
      .disablingObstacles) {
      obstaclesStatus(disablingObstacle, false, true, false);
    }
  }

  return currentStandingBlock;
  function blockStatus(blockNum, physicStatus, visible, sleep) {
    self.road[blockNum].block.set({
      physicStatus,
      visible,
      sleep,
      enableCollisionCallback: physicStatus,
    });
    if (road[blockNum].blockObstacles) {
      let obstacles = road[blockNum].blockObstacles;
      for (let obstacle of obstacles) {
        for (obj of obstacle.objects) {
          obj.self.set({
            visible,
          });
        }
      }
    }
  }

  function obstaclesStatus(obstacle, physicStatus, visible, sleep) {
    for (obj of obstacle.objects) {
      obj.self.set({
        sleep,
        physicStatus,
        visible,
      });
    }
    for (let constraint of obstacle.constraints) {
      constraint.self.set({
        active: physicStatus,
      });
    }
  }
}

function performReset({ newAnimationFrame }) {
  let maxStandingTime = 4;
  if (roadTrains[0].speed == 0) {
    maxStandingTime = 10;
  }
  standingTime += actualInterval;
  if (standingTime > maxStandingTime || cheating) {
    cheating = false;
    // reset blocks and obstacles
    for (let i = 0, len = road.length; i < len; ++i) {
      road[i].active = undefined;
      road[i].plotRuned = undefined;
      self.road[i].block.set({
        physicStatus: false,
        visible: false,
        sleep: true,
        enableCollisionCallback: false,
      });
      for (let j = 0; j < road[i].blockObstacles.length; ++j) {
        for (let constraint of road[i].blockObstacles[j].constraints) {
          constraint.self.set({
            active: false,
          });
        }
        for (let k = 0; k < road[i].blockObstacles[j].objects.length; ++k) {
          let thisObject = road[i].blockObstacles[j].objects[k];
          thisObject.self.set({
            position: thisObject.iniPos.clone(),
            quaternion: thisObject.iniQuat.clone(),
            reset: true,
            physicStatus: false,
            visible: false,
          });
        }
      }
    }

    return true;
  }
  return undefined;
}
function restart({ performReset, newAnimationFrame }) {
  if (removeBodies.length == 0) {
    // reset truck
    let localPosOnBlock = new THREE.Vector3(0, 2, -7);
    let resetPos = road[checkPoint.block].position.clone();
    let resetQuat = road[checkPoint.block].quaternion;
    let blockYAxis = new THREE.Vector3(0, 1, 0)
      .normalize()
      .applyQuaternion(resetQuat)
      .normalize();
    resetQuat = new THREE.Quaternion()
      .setFromAxisAngle(blockYAxis, Math.PI)
      .multiply(resetQuat);

    localPosOnBlock.applyQuaternion(resetQuat);
    resetPos.add(localPosOnBlock);
    roadTrains[0].self.set({
      resetPos: resetPos.clone(),
      resetQuat,
      speed: 0,
      steering: 0,
    });
    checkPoint.camera.active = true;

    // reset trailers
    for (let i = 1; i <= roadTrains[0].visibleTrailers; ++i) {
      let towingGap = roadTrains[i].towingGap;
      let newPos = new THREE.Vector3(
        0,
        roadTrains[0].axelsVerticalFreedom,
        -towingGap
      );
      newPos.applyQuaternion(resetQuat);
      resetPos = resetPos.add(newPos);
      roadTrains[i].self.set({ resetPos: resetPos.clone(), resetQuat });
    }
    roadActiveBlocks = undefined;
    self.currentStandingBlock = checkPoint.block;

    performReset = undefined;
  }
}

// CONCATENATED MODULE: ./roadtrain/roadtrain.starfield.js

function loadStarfield(rGame){
  let threeScene = rGame.getProxyLessObject.three.scene;
  let starsGeometry = new THREE.Geometry();

  for ( let i = 0; i < 5000; i ++ ) {

    let star = new THREE.Vector3();
    star.x = THREE.Math.randFloatSpread( 3000 );
    star.y = THREE.Math.randFloatSpread( 1000 );
    star.z = THREE.Math.randFloatSpread( 3000 );

    starsGeometry.vertices.push( star );

  }

let starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } );

let starField = new THREE.Points( starsGeometry, starsMaterial );

threeScene.add( starField );
rGame.loadedObjects.push(starField);

}
// CONCATENATED MODULE: ./roadtrain/roadtrain.js
/**
 * RoadTrain is a javascript game built by Mgame engine. 
 *
 *
 * @link   https://github.com/makannew/roadtrain
 * @file   roadtrain.js
 * @author Makan Edrisi
 * @since  2018
 * @version 1.0.0
 */











const roadtrain_rGame = MGame();
roadtrain_rGame.cheating = false;
console.log(roadtrain_rGame)

// load Cameras
loadCameras(roadtrain_rGame);

// lights
loadLights(roadtrain_rGame);

loadStarfield(roadtrain_rGame);

// load road map
loadRoad(roadtrain_rGame);
loadRoadUpdateManager(roadtrain_rGame);

// load mg road train
loadRoadTrain(roadtrain_rGame);

// game logic updating
loadCameraControl(roadtrain_rGame);

// setup game user controls
loadControls(roadtrain_rGame);

//load startUp process
loadStartUp(roadtrain_rGame);

// start game
roadtrain_rGame.utils.start(roadtrain_rGame);

/***/ })
/******/ ]);