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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main/electron.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/main/electron.ts":
/*!******************************!*\
  !*** ./app/main/electron.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

function _path() {
  var data = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

  _path = function _path() {
    return data;
  };

  return data;
}

function _electron() {
  var data = __webpack_require__(/*! electron */ "electron");

  _electron = function _electron() {
    return data;
  };

  return data;
}

/**
 * @desc electron 主入口
 */
function isDev() {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return "development" === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  var mainWindow = new (_electron().BrowserWindow)({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true
    }
  });
  var settingWindow = new (_electron().BrowserWindow)({
    width: 720,
    height: 240,
    resizable: false,
    // 👈 我们设置该窗口不可拉伸宽高
    webPreferences: {
      devTools: true,
      nodeIntegration: true
    }
  });

  if (isDev()) {
    // 👇 看到了吗，在开发环境下，我们加载的是运行在 7001 端口的 React
    mainWindow.loadURL("http://127.0.0.1:7001");
    settingWindow.loadURL("http://127.0.0.1:7001/setting.html");
  } else {
    mainWindow.loadURL("file://".concat(_path()["default"].join(__dirname, '../dist/index.html')));
    settingWindow.loadURL("file://".concat(_path()["default"].join(__dirname, '../dist/setting.html')));
  }
}

_electron().app.whenReady().then(function () {
  createWindow();

  _electron().app.on('activate', function () {
    if (_electron().BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

var ROOT_PATH = _path()["default"].join(_electron().app.getAppPath(), '../');

_electron().ipcMain.on('get-root-path', function (event, arg) {
  event.reply('reply-root-path', ROOT_PATH);
});

_electron().ipcMain.on('open-save-resume-path', function (event, arg) {
  _electron().dialog.showOpenDialog({
    properties: ['openDirectory']
  }).then(function (result) {
    event.reply('reply-save-resume-path', result.filePaths);
  })["catch"](function (err) {
    event.reply('reply-save-resume-path', err);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4vZWxlY3Ryb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbImlzRGV2IiwicHJvY2VzcyIsImNyZWF0ZVdpbmRvdyIsIm1haW5XaW5kb3ciLCJCcm93c2VyV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJ3ZWJQcmVmZXJlbmNlcyIsImRldlRvb2xzIiwibm9kZUludGVncmF0aW9uIiwic2V0dGluZ1dpbmRvdyIsInJlc2l6YWJsZSIsImxvYWRVUkwiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsImFwcCIsIndoZW5SZWFkeSIsInRoZW4iLCJvbiIsImdldEFsbFdpbmRvd3MiLCJsZW5ndGgiLCJST09UX1BBVEgiLCJnZXRBcHBQYXRoIiwiaXBjTWFpbiIsImV2ZW50IiwiYXJnIiwicmVwbHkiLCJkaWFsb2ciLCJzaG93T3BlbkRpYWxvZyIsInByb3BlcnRpZXMiLCJyZXN1bHQiLCJmaWxlUGF0aHMiLCJlcnIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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cyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL21haW4vZWxlY3Ryb24udHNcIik7XG4iLCIvKipcclxuICogQGRlc2MgZWxlY3Ryb24g5Li75YWl5Y+jXHJcbiAqL1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBpcGNNYWluLCBkaWFsb2cgfSBmcm9tICdlbGVjdHJvbic7XHJcblxyXG5mdW5jdGlvbiBpc0RldigpIHtcclxuICAvLyDwn5GJIOi/mOiusOW+l+aIkeS7rOmFjee9ruS4remAmui/hyB3ZWJwYWNrLkRlZmluZVBsdWdpbiDlrprkuYnnmoTmnoTlu7rlj5jph4/lkJdcclxuICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpIHtcclxuICAvLyDliJvlu7rmtY/op4jlmajnqpflj6NcclxuICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgd2lkdGg6IDEyMDAsXHJcbiAgICBoZWlnaHQ6IDgwMCxcclxuICAgIHdlYlByZWZlcmVuY2VzOiB7XHJcbiAgICAgIGRldlRvb2xzOiB0cnVlLFxyXG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHNldHRpbmdXaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcbiAgICB3aWR0aDogNzIwLFxyXG4gICAgaGVpZ2h0OiAyNDAsXHJcbiAgICByZXNpemFibGU6IGZhbHNlLCAvLyDwn5GIIOaIkeS7rOiuvue9ruivpeeql+WPo+S4jeWPr+aLieS8uOWuvemrmFxyXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgZGV2VG9vbHM6IHRydWUsXHJcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgaWYgKGlzRGV2KCkpIHtcclxuICAgIC8vIPCfkYcg55yL5Yiw5LqG5ZCX77yM5Zyo5byA5Y+R546v5aKD5LiL77yM5oiR5Lus5Yqg6L2955qE5piv6L+Q6KGM5ZyoIDcwMDEg56uv5Y+j55qEIFJlYWN0XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGh0dHA6Ly8xMjcuMC4wLjE6NzAwMWApO1xyXG4gICAgc2V0dGluZ1dpbmRvdy5sb2FkVVJMKGBodHRwOi8vMTI3LjAuMC4xOjcwMDEvc2V0dGluZy5odG1sYCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1haW5XaW5kb3cubG9hZFVSTChgZmlsZTovLyR7cGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2Rpc3QvaW5kZXguaHRtbCcpfWApO1xyXG4gICAgc2V0dGluZ1dpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vZGlzdC9zZXR0aW5nLmh0bWwnKX1gKTtcclxuICB9XHJcbn1cclxuXHJcbmFwcC53aGVuUmVhZHkoKS50aGVuKCgpID0+IHtcclxuICBjcmVhdGVXaW5kb3coKTtcclxuICBhcHAub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkgY3JlYXRlV2luZG93KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgUk9PVF9QQVRIID0gcGF0aC5qb2luKGFwcC5nZXRBcHBQYXRoKCksICcuLi8nKTtcclxuXHJcbmlwY01haW4ub24oJ2dldC1yb290LXBhdGgnLCAoZXZlbnQsIGFyZykgPT4ge1xyXG4gIGV2ZW50LnJlcGx5KCdyZXBseS1yb290LXBhdGgnLCBST09UX1BBVEgpO1xyXG59KTtcclxuXHJcbmlwY01haW4ub24oJ29wZW4tc2F2ZS1yZXN1bWUtcGF0aCcsIChldmVudCwgYXJnKSA9PiB7XHJcbiAgZGlhbG9nXHJcbiAgICAuc2hvd09wZW5EaWFsb2coe1xyXG4gICAgICBwcm9wZXJ0aWVzOiBbJ29wZW5EaXJlY3RvcnknXSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGV2ZW50LnJlcGx5KCdyZXBseS1zYXZlLXJlc3VtZS1wYXRoJywgcmVzdWx0LmZpbGVQYXRocyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgZXZlbnQucmVwbHkoJ3JlcGx5LXNhdmUtcmVzdW1lLXBhdGgnLCBlcnIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==