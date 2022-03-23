/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var App;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var User = (__webpack_require__(/*! ./user/user */ \"./src/user/user.js\").ModelData.User);\n\nmodule.exports = {\n  searchEmp: function searchEmp(empId, empInfo) {\n    var elm = document.getElementById(empId);\n    var employee = new User();\n    employee.searchEmp(empId).then(function (result) {\n      console.log(employee);\n      console.log(result);\n      var emp = document.querySelector('.empInfo');\n      emp.innerHTML = \"Id : \".concat(employee.id) + \"<br>\" + \"Name : \".concat(employee.name) + \"<br>\" + \"Email : \".concat(employee.email) + \"<br>\" + \"Address : \".concat(employee.address.suite, \", \").concat(employee.address.street, \", \").concat(employee.address.city, \", \").concat(employee.address.zipcode) + \"<br>\" + \"Phone : \".concat(employee.phone) + \"<br>\" + \"Website : \".concat(employee.website) + \"<br>\" + \"Company : \".concat(employee.company.name);\n    });\n  }\n};\n\n//# sourceURL=webpack://App/./src/index.js?");

/***/ }),

/***/ "./src/user/user.js":
/*!**************************!*\
  !*** ./src/user/user.js ***!
  \**************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar User = /*#__PURE__*/function () {\n  function User() {\n    _classCallCheck(this, User);\n\n    _defineProperty(this, \"id\", void 0);\n\n    _defineProperty(this, \"name\", void 0);\n\n    _defineProperty(this, \"email\", void 0);\n\n    _defineProperty(this, \"address\", void 0);\n\n    _defineProperty(this, \"phone\", void 0);\n\n    _defineProperty(this, \"website\", void 0);\n\n    _defineProperty(this, \"company\", void 0);\n  }\n\n  _createClass(User, [{\n    key: \"searchEmp\",\n    value: function searchEmp(empId) {\n      var _this = this;\n\n      return fetch(\"https://jsonplaceholder.typicode.com/users/\".concat(empId)).then(function (result) {\n        return result.json();\n      }).then(function (result) {\n        _this.id = result.id;\n        _this.name = result.name;\n        _this.email = result.email;\n        _this.address = result.address;\n        _this.phone = result.phone;\n        _this.website = result.website;\n        _this.company = result.company;\n        return {\n          id: _this.id,\n          name: _this.name,\n          email: _this.email,\n          address: _this.address,\n          phone: _this.phone,\n          website: _this.website,\n          company: _this.company\n        };\n      })[\"catch\"](function (err) {\n        throw err;\n      });\n    }\n  }]);\n\n  return User;\n}();\n\nmodule.exports.ModelData = {\n  User: User\n};\n\n//# sourceURL=webpack://App/./src/user/user.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	App = __webpack_exports__;
/******/ 	
/******/ })()
;