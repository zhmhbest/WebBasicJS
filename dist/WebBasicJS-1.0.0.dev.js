var WebBasicJS =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// require("@babel/polyfill");  // 兼容低版本浏览器Promise
module.exports = {
  hash: __webpack_require__(/*! ./lib/hash.ts */ "./src/lib/hash.ts"),
  screen: __webpack_require__(/*! ./lib/screen.ts */ "./src/lib/screen.ts"),
  form: __webpack_require__(/*! ./lib/form.ts */ "./src/lib/form.ts"),
  ajax: __webpack_require__(/*! ./lib/ajax.ts */ "./src/lib/ajax.ts"),
  cookie: __webpack_require__(/*! ./lib/cookie */ "./src/lib/cookie.js"),
  file: __webpack_require__(/*! ./lib/file */ "./src/lib/file.js"),
  date: __webpack_require__(/*! ./lib/date */ "./src/lib/date.js")
};

/***/ }),

/***/ "./src/lib/ajax.ts":
/*!*************************!*\
  !*** ./src/lib/ajax.ts ***!
  \*************************/
/*! exports provided: get, post, Requester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return _post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Requester", function() { return Requester; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var requestBase = function requestBase(method, url, body, readyCallback) {
  var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

  request.onreadystatechange = function (ev) {
    /*readyState
        0 === XMLHttpRequest.UNSENT
        1 === XMLHttpRequest.OPENED
        2 === XMLHttpRequest.HEADERS_RECEIVED
        3 === XMLHttpRequest.LOADING
        4 === XMLHttpRequest.DONE
    */
    readyCallback(this.readyState, this);
  };

  request.open(method, url);
  request.send(body);
};

var requestCommon = function requestCommon(method, url, type, body, headers) {
  return new Promise(function (resolve, reject) {
    // <Promise>
    // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    requestBase(method, url, body, function (readyState, request) {
      switch (readyState) {
        case XMLHttpRequest.OPENED:
          // 设置接受值
          request.responseType = type || 'text'; // 设置请求头

          if (undefined === headers || null === headers) return;

          for (var _i = 0, _Object$keys = Object.keys(headers); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            // @ts-ignore
            request.setRequestHeader(key, headers[key]);
          }

          break;

        case XMLHttpRequest.DONE:
          if (request.status >= 200 && request.status < 300 || 304 === request.status
          /* ReadCache */
          ) {
              // request.response
              // request.getAllResponseHeaders()
              resolve(request.response);
            } else {
            reject(new Error(request.statusText));
          }

          break;
      }
    }); // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    // </Promise>
  });
};

var _get = function get(url, type, data, headers) {
  if (undefined !== data && null !== data) {
    url = "".concat(url, "?").concat(hash.toGetString(data));
  }

  return requestCommon("GET", url, type, null, headers);
};

var _post = function post(url, type, data, headers) {
  var form = null;

  if (undefined !== data && null !== data) {
    if (data instanceof FormData) {
      form = data;
    } else {
      form = new FormData();

      for (var _i2 = 0, _Object$keys2 = Object.keys(data); _i2 < _Object$keys2.length; _i2++) {
        var key = _Object$keys2[_i2];
        // @ts-ignore
        form.append(key, data[key]);
      }
    }
  }

  return requestCommon("POST", url, type, form, headers);
};

var Requester = /*#__PURE__*/function () {
  function Requester(prefix, data, headers) {
    _classCallCheck(this, Requester);

    this._prefix = undefined === prefix || null === prefix ? "" : prefix;
    this._data = undefined === data || null === data ? {} : data;
    this._headers = undefined === headers || null === headers ? {} : headers;
  }

  _createClass(Requester, [{
    key: "get",
    value: function get(url, type, data, headers) {
      data = data || {};
      headers = headers || {};
      return _get(this._prefix + url, type, Object.assign(Object.assign({}, this._data), data), Object.assign(Object.assign({}, this._headers), headers));
    }
  }, {
    key: "post",
    value: function post(url, type, data, headers) {
      data = data || {};
      headers = headers || {};
      return _post(this._prefix + url, type, Object.assign(Object.assign({}, this._data), data), Object.assign(Object.assign({}, this._headers), headers));
    }
  }, {
    key: "getJson",
    value: function getJson(url, data, headers) {
      return _get(url, "json", data, headers);
    }
  }, {
    key: "postJson",
    value: function postJson(url, data, headers) {
      return _post(url, "json", data, headers);
    }
  }, {
    key: "getBlob",
    value: function getBlob(url, data, headers) {
      return _get(url, "blob", data, headers);
    }
  }, {
    key: "postBlob",
    value: function postBlob(url, data, headers) {
      return _post(url, "blob", data, headers);
    }
  }, {
    key: "prefix",
    get: function get() {
      return this._prefix;
    },
    set: function set(value) {
      this._prefix = value;
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(value) {
      this._data = value;
    }
  }, {
    key: "headers",
    get: function get() {
      return this._headers;
    },
    set: function set(value) {
      this._headers = value;
    }
  }]);

  return Requester;
}();



/***/ }),

/***/ "./src/lib/cookie.js":
/*!***************************!*\
  !*** ./src/lib/cookie.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 获取到期时间
 * @param {Date|String|Number} [expire]
 */
function getExpireTime(expire) {
  // Date: 传入值——到期时间（Date）
  if (expire instanceof Date) {
    return expire;
  } // String: 传入值——到期时间（String）


  if ('string' === typeof expire) {
    return new Date(expire);
  } // Number: 传入值——有效时间（秒）


  if ('number' === typeof expire) {
    var date = new Date();
    date.setTime(date.getTime() + expire * 1000);
    return date;
  } // Undefined


  return undefined;
}
/**
 * 设置Cookie
 * @param {String} name
 * @param {String|Number|Object} value
 * @param {Date|String|Number} [expire]
 * @param [path]
 */


function setCookie(name, value, expire, path) {
  expire = getExpireTime(expire);
  var buffer = []; // K-V

  buffer.push(name.trim());
  buffer.push('=');

  if (value instanceof Object) {
    buffer.push(encodeURIComponent(JSON.stringify(value)));
  } else {
    buffer.push(encodeURIComponent(value));
  } // expire


  if (undefined !== expire) {
    buffer.push(';expires=');
    buffer.push(expire.toUTCString());
  } // path


  if (undefined !== path) {
    buffer.push(';path=');
    buffer.push(path);
  }

  document.cookie = buffer.join('');
}
/**
 * 删除Cookie
 * @param name
 * @param [path]
 */


function delCookie(name, path) {
  var buffer = []; // K-V

  buffer.push(name.trim());
  buffer.push('='); // expires

  buffer.push(';expires=');
  buffer.push(new Date().toUTCString()); // path

  if (undefined !== path) {
    buffer.push(';path=');
    buffer.push(path);
  }

  document.cookie = buffer.join('');
}

var cacheCookies = undefined;
/**
 * 加载Cookie
 */

function loadCookies() {
  cacheCookies = Object();
  var cookies = document.cookie.split(';');

  var _iterator = _createForOfIteratorHelper(cookies),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item = item.trim();
      var p = item.indexOf('=');
      var key = item.substr(0, p).trim();
      var val = item.substr(p + 1).trim();
      cacheCookies[key] = decodeURIComponent(val);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
/**
 * 获得Cookie
 * @param name
 * @param [parse] JSON解析
 * @param [reload] 刷新缓存
 */


function getCookie(name, parse, reload) {
  if (undefined === cacheCookies || true === reload) loadCookies();

  if (true === parse) {
    return JSON.parse(cacheCookies[name]);
  } else {
    return cacheCookies[name];
  }
}

module.exports = {
  get: getCookie,
  set: setCookie,
  del: delCookie
};

/***/ }),

/***/ "./src/lib/date.js":
/*!*************************!*\
  !*** ./src/lib/date.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 日期格式化
 * @param {Date|string} [toFormat]
 * @param {string} [formatType]
 * @returns {string}
 */
var formatDate = function formatDate(toFormat, formatType) {
  if (undefined === toFormat) toFormat = new Date();else toFormat = toFormat instanceof Date ? toFormat : new Date(toFormat);
  formatType = formatType || 'y-M-d h:m:s';
  var buf = [];

  for (var i = 0; i < formatType.length; i++) {
    var ch = formatType.substr(i, 1);

    switch (ch) {
      case 'y':
        buf.push(toFormat.getFullYear());
        break;

      case 'M':
        buf.push(toFormat.getMonth() + 1);
        break;

      case 'd':
        buf.push(toFormat.getDate());
        break;

      case 'h':
        buf.push(toFormat.getHours());
        break;

      case 'm':
        buf.push(toFormat.getMinutes());
        break;

      case 's':
        buf.push(toFormat.getSeconds());
        break;

      case 'S':
        buf.push(toFormat.getMilliseconds());
        break;

      default:
        buf.push(ch);
        break;
    }
  }

  return buf.join('');
};
/**
 * 时间戳
 * @param {Date|string} d
 * @returns {Number}
 */


var timestamp = function timestamp(d) {
  return new Date(d).getTime();
};

module.exports = {
  format: formatDate,
  timestamp: timestamp
};

/***/ }),

/***/ "./src/lib/file.js":
/*!*************************!*\
  !*** ./src/lib/file.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var URL = window.URL || window.webkitURL;

var fileLoader = function () {
  /** @type {function(FileList)} */
  var callback = null;
  var input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.addEventListener('change', function () {
    if (undefined !== callback) callback(input.files);
  });
  return function (cb) {
    if (undefined !== cb) callback = cb;
    input.value = null; // 解决选择相同文件问题

    input.click();
  };
}();
/**
 * 生成文件下载
 * @param {Blob} blob
 * @param {String} [filename]
 */


var fileDownloadBlob = function fileDownloadBlob(blob, filename) {
  filename = filename || "file@" + new Date().getTime();
  var element = document.createElement('a');
  element.setAttribute('href', URL.createObjectURL(blob));
  element.setAttribute('download', filename);
  element.click();
  element.remove();
};
/**
 * 生成文件下载
 * @param {String|Object} text
 * @param {String} [filename]
 */


var fileDownloadText = function fileDownloadText(text, filename) {
  var blob;

  if (text instanceof Object) {
    blob = new Blob([JSON.stringify(text, undefined, '    ')]);
  } else {
    blob = new Blob([text]);
  }

  fileDownloadBlob(blob, filename);
};
/**
 * @param {Blob} obj
 * @returns {String}
 */


var createBlobURL = function createBlobURL(obj) {
  return URL.createObjectURL(obj);
};
/**
 * @param {File} f
 * @param {function(String)} callback
 */


var readFileText = function readFileText(f, callback) {
  var reader = new FileReader();
  reader.readAsText(f);

  reader.onload = function () {
    callback(this.result);
  };
};
/**
 * @param {File} f
 * @param {function(String)} callback
 */


var readFileBase64 = function readFileBase64(f, callback) {
  var reader = new FileReader();
  reader.readAsDataURL(f);

  reader.onload = function () {
    callback(this.result);
  };
};
/**
 * @param {File} f
 * @param {function(ArrayBuffer)} callback
 */


var readFileBinary = function readFileBinary(f, callback) {
  var reader = new FileReader();
  reader.readAsBinaryString(f);

  reader.onload = function () {
    callback(this.result);
  };
};

module.exports = {
  loader: fileLoader,
  download: fileDownloadBlob,
  downloadText: fileDownloadText,
  createBlobURL: createBlobURL,
  readFileText: readFileText,
  readFileBase64: readFileBase64,
  readFileBinary: readFileBinary
};

/***/ }),

/***/ "./src/lib/form.ts":
/*!*************************!*\
  !*** ./src/lib/form.ts ***!
  \*************************/
/*! exports provided: getValues, setValues, setOptions, setInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValues", function() { return getValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValues", function() { return setValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptions", function() { return setOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputs", function() { return setInputs; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getValues = function getValues(objForm) {
  if ('FORM' !== objForm.tagName.toUpperCase()) return null;
  var elements = objForm.elements;
  var holder = {};

  var _iterator = _createForOfIteratorHelper(elements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      // @ts-ignore
      var nodeName = element.name; // @ts-ignore

      var nodeType = element.type; // @ts-ignore

      var nodeValue = element.value; // @ts-ignore

      var nodeIsChecked = element.checked;
      if (null === nodeName || null === nodeType) continue; // console.log(nodeName, nodeType, nodeValue, nodeIsChecked);

      switch (nodeType) {
        case 'radio':
          if (!nodeIsChecked) break;
          Object.defineProperty(holder, nodeName, {
            value: nodeValue,
            writable: false,
            enumerable: true
          });
          break;

        case 'checkbox':
          if (!holder.hasOwnProperty(nodeName)) {
            Object.defineProperty(holder, nodeName, {
              value: [],
              writable: false,
              enumerable: true
            });
          }

          if (nodeIsChecked) {
            // @ts-ignore
            holder[nodeName].push(nodeValue);
          }

          break;

        case 'select-one':
        case 'text':
        case 'textarea':
        case 'number':
        case 'email':
        case 'date':
          Object.defineProperty(holder, nodeName, {
            value: nodeValue,
            writable: false,
            enumerable: true
          });
          break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return holder;
};

var setValues = function setValues(objForm, data) {
  for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
    var name = _Object$keys[_i];
    // @ts-ignore
    var value = data[name];
    var elements = objForm.querySelectorAll("input[name='".concat(name, "'],select[name='").concat(name, "'],textarea[name='").concat(name, "']"));
    if (0 === elements.length) continue; // @ts-ignore

    switch (elements[0].type) {
      case 'radio':
        var _iterator2 = _createForOfIteratorHelper(elements),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            // @ts-ignore
            item.checked = value == item.value;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        break;

      case 'checkbox':
        var _iterator3 = _createForOfIteratorHelper(elements),
            _step3;

        try {
          var _loop = function _loop() {
            var item = _step3.value;
            // @ts-ignore
            item.checked = value.some(function (x) {
              return x == item.value;
            });
          };

          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        break;

      default:
        // @ts-ignore
        elements[0].value = value;
        break;
    }
  }
};

var setOptions = function setOptions(objSelect, data) {
  objSelect.options.length = 0;
  data.forEach(function (element) {
    objSelect.add(new Option(element.title, element.value));
  });
};

var setInputs = function setInputs(objDiv, data, callback) {
  objDiv.innerHTML = "";
  data.forEach(function (element) {
    var label = document.createElement('label');
    var input = document.createElement('input');
    var span = document.createElement('span');
    input.value = element.value;
    span.innerHTML = element.title;
    callback(label, input, span);
    label.appendChild(input);
    label.appendChild(span);
    objDiv.appendChild(label);
  });
};



/***/ }),

/***/ "./src/lib/hash.ts":
/*!*************************!*\
  !*** ./src/lib/hash.ts ***!
  \*************************/
/*! exports provided: toGetString, parseGetString, pushOnHashChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toGetString", function() { return toGetString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGetString", function() { return parseGetString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushOnHashChange", function() { return pushOnHashChange; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Object->String
 * @param obj: DataHolder
 * @param sep: Separator
 * @param eqs: Equal sign
 */
function toGetString(obj, sep, eqs) {
  sep = sep || '&';
  eqs = eqs || '=';
  var buffer = [];

  for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    // @ts-ignore
    var val = obj[key];
    buffer.push([key, encodeURIComponent(val)].join(eqs));
  }

  return buffer.join(sep);
}
/**
 * String->Dict
 * @param str
 * @param sep
 * @param eqs
 */


function parseGetString(str, sep, eqs) {
  var buffer = Object();
  str = str.trim();
  if (0 === str.length) return buffer;
  sep = sep || '&';
  eqs = eqs || '=';

  var _iterator = _createForOfIteratorHelper(str.split(sep)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var kv = item.split(eqs);
      buffer[kv[0]] = decodeURIComponent(kv[1]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return buffer;
}
/**
 * Catch HashChange
 */


function pushOnHashChange(fn) {
  // @ts-ignore
  var preHCE = window.onhashchange;

  if (undefined === preHCE || null === preHCE) {
    // 直接添加
    window.onhashchange = function (ev) {
      fn(window.location.hash.substr(1), this, ev);
    };
  } else {
    // 方法链
    window.onhashchange = function (ev) {
      preHCE.call(this, ev);
      fn(window.location.hash.substr(1), this, ev);
    };
  }
}



/***/ }),

/***/ "./src/lib/screen.ts":
/*!***************************!*\
  !*** ./src/lib/screen.ts ***!
  \***************************/
/*! exports provided: pushOnScreenResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushOnScreenResize", function() { return pushOnScreenResize; });
/**
 * 添加尺寸调整响应
 */
function pushOnScreenResize(fn) {
  // @ts-ignore
  var preRE = window.onresize;

  if (undefined === preRE || null === preRE) {
    // 首次
    window.onresize = function (ev) {
      fn({
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }, this, ev);
    };
  } else {
    // 函数链
    window.onresize = function (ev) {
      preRE.call(this, ev);
      fn({
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }, this, ev);
    };
  } // 激活


  fn({
    w: document.documentElement.clientWidth,
    h: document.documentElement.clientHeight
  }, null, null);
}



/***/ })

/******/ });
//# sourceMappingURL=WebBasicJS-1.0.0.dev.js.map