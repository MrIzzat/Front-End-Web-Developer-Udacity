var Client;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseForm: () => (/* binding */ baseForm)
/* harmony export */ });
/* harmony import */ var _styles_newTripFormStyle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/newTripFormStyle.scss */ "./src/client/styles/newTripFormStyle.scss");
/* harmony import */ var _styles_tripStyle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/tripStyle.scss */ "./src/client/styles/tripStyle.scss");
/* harmony import */ var _js_newTripForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/newTripForm.js */ "./src/client/js/newTripForm.js");
/* harmony import */ var _js_tripsList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/tripsList.js */ "./src/client/js/tripsList.js");






// Getting the base form, used for validating inputs
var baseForm = document.getElementById("base-form");
baseForm.addEventListener("submit", _js_newTripForm_js__WEBPACK_IMPORTED_MODULE_2__.turnOffDefault);
(0,_js_newTripForm_js__WEBPACK_IMPORTED_MODULE_2__.addNewTrip)();

/***/ }),

/***/ "./src/client/js/globals.js":
/*!**********************************!*\
  !*** ./src/client/js/globals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allTrips: () => (/* binding */ allTrips),
/* harmony export */   globals: () => (/* binding */ globals)
/* harmony export */ });
//Get the div that contains all the trips
var allTrips = document.getElementById("trips-list");
var globals = {
  numberOfTrips: 0,
  serverURL: "http://localhost:8000"
};

/***/ }),

/***/ "./src/client/js/newTripForm.js":
/*!**************************************!*\
  !*** ./src/client/js/newTripForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewTrip: () => (/* binding */ addNewTrip),
/* harmony export */   turnOffDefault: () => (/* binding */ turnOffDefault)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/client/index.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ "./src/client/js/globals.js");
/* harmony import */ var _tripsList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tripsList.js */ "./src/client/js/tripsList.js");



var newTripFormExists = false;
var turnOffDefault = function turnOffDefault(event) {
  event.preventDefault();
};
var addNewTrip = function addNewTrip() {
  //Get the button that adds new trips
  var newTripButton = document.getElementById("add-trip-button");
  newTripButton.addEventListener("click", function () {
    //Only create a new "new trip form" if there isn't one on the screen
    if (!newTripFormExists) {
      newTripFormExists = true;
      var newTrip = document.createElement("section");

      //class for style
      newTrip.setAttribute("class", "new-travel-trip");

      //Add the content (inputs, buttons etc.)
      newTrip.innerHTML = "                    <div class=\"new-trip-destination\">\n                              <h2>My trip to:</h2>\n                              <input form=\"base-form\" required type=\"text\" placeholder=\"Enter Location\">\n                          </div>\n                          <div class=\"new-travel-departing-date\">\n                              <h2>Departing:</h2>\n                              <input placeholder=\"MM/DD/YYYY\" type=\"text\" required\n                                  pattern=\"([1-9]|[1][0-2])/([1-9]|[1-2][0-9]|[3][0-1])/([0-9][0-9][0-9][0-9])\" form=\"base-form\">\n                          </div>\n                          <div class=\"new-trip-buttons\">\n                              <div class=\"save-trip-form-button\">save trip</div>\n                              <div class=\"remove-trip-form-button\">remove trip</div>\n                          </div>";
      _globals_js__WEBPACK_IMPORTED_MODULE_1__.allTrips.appendChild(newTrip);
      var saveTripButton = document.getElementsByClassName("save-trip-form-button")[0];
      saveTripButton.addEventListener("click", function () {
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.baseForm.reportValidity()) {
          console.log("SUCCESS"); //Add as a trip

          var newLocationString = document.getElementsByClassName("new-trip-destination")[0].lastElementChild.value;
          var newDateString = document.getElementsByClassName("new-travel-departing-date")[0].lastElementChild.value;
          console.log(newLocationString);
          console.log(newDateString);
          (0,_tripsList_js__WEBPACK_IMPORTED_MODULE_2__.allTripsScript)(newLocationString, newDateString);
          removeNewTripForm();
        }
      });
      var removeTripButton = document.getElementsByClassName("remove-trip-form-button")[0];

      //Remove the new trip form
      removeTripButton.addEventListener("click", removeNewTripForm);
    } else {
      alert("There already is a new trip form.");
    }
  });
  var removeNewTripForm = function removeNewTripForm() {
    var newTripForm = document.getElementsByClassName("new-travel-trip")[0];
    newTripFormExists = false;
    newTripForm.remove();
  };
};

/***/ }),

/***/ "./src/client/js/tripsList.js":
/*!************************************!*\
  !*** ./src/client/js/tripsList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allTripsScript: () => (/* binding */ allTripsScript),
/* harmony export */   dateDifferenceInDays: () => (/* binding */ dateDifferenceInDays)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./src/client/js/globals.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var dateDifferenceInDays = function dateDifferenceInDays(newDate) {
  console.log(Date.now());
  console.log(newDate);
  var difference = Math.abs(newDate - Date.now());
  var differneceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  return differneceInDays;
};
var allTripsScript = function allTripsScript(newLocationString, newDateString) {
  var addNewTrip = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var section, removeTripButton, destinationText, dateText, weatherData, weatherDataElement, cityImageElement, newDate, differenceInDays, countDownText;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips += 1;
            section = document.createElement("section");
            section.setAttribute("id", "trip-".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips));
            section.setAttribute("class", "travel-trip");
            section.innerHTML = "<div class=\"trip-image-container\">\n      <img class=\"trip-image\" id=\"trip-image-".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips, "\" src=\"\" alt=\"City Image\">\n  </div>\n  <div class=\"trip-information\">\n      <div>\n          <div id=\"destination-trip-").concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips, "\">\n              <h1>My trip to:</h1>\n          </div>\n          <div id=\"date-trip-").concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips, "\">\n              <h1>Departing: </h1>\n          </div>\n          <div class=\"trip-buttons\">\n              <div class=\"trip-buttons\">\n                  <div class=\"save-trip-button\" id=\"save-trip-").concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips, "\">save trip</div>\n                  <div class=\"remove-trip-button\" id=\"remove-trip-").concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips, "\">remove trip</div>\n              </div>\n          </div>\n          <div class=\"countdown-trip\" id=\"countdown-trip-").concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips, "\">\n              <p>countdown</p>\n          </div>\n          <div class=\"weather-trip\" id=\"weather-trip-").concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips, "\">\n              <p class=\"title-weather-trip\">Typical Weather for then is:</p>\n              <p class=\"high-low-weather-trip\">high and low temps</p>\n              <p class=\"cloudy-weather-trip\">Weather Description</p>\n          </div>\n      </div>\n  </div>");
            _globals_js__WEBPACK_IMPORTED_MODULE_0__.allTrips.appendChild(section);

            //Adding event listener to remove button
            removeTripButton = document.getElementById("remove-trip-".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips));
            removeTripButton.addEventListener("click", function () {
              var tripId = removeTripButton.getAttribute("id").split("-")[2];
              var trip = document.getElementById("trip-".concat(tripId));
              trip.remove();
              _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips -= 1;
            });

            //Add trip destination
            destinationText = document.getElementById("destination-trip-".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips)).lastElementChild;
            destinationText.textContent = "My trip to: ".concat(newLocationString);

            //Add trip date
            dateText = document.getElementById("date-trip-".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips)).lastElementChild;
            dateText.textContent = "Departing: ".concat(newDateString);

            //Add weather data

            //Call weather APi and get the weather information.
            _context.next = 14;
            return getCityWeather(newLocationString);
          case 14:
            weatherData = _context.sent;
            weatherDataElement = document.getElementById("weather-trip-".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips)); //set high and low stuff
            weatherDataElement.children[1].textContent = "High: ".concat(weatherData.high_temp, ", Low: ").concat(weatherData.low_temp);
            weatherDataElement.children[2].textContent = "".concat(weatherData.weather_description);

            //Add Image
            cityImageElement = document.getElementById("trip-image-".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips));
            _context.next = 21;
            return getCityImage(newLocationString).then(function (imageURL) {
              cityImageElement.setAttribute("src", imageURL);
              console.log("Image URL: ".concat(imageURL));
            });
          case 21:
            //Add countdown
            newDate = new Date(newDateString);
            differenceInDays = dateDifferenceInDays(newDate);
            countDownText = document.getElementById("countdown-trip-".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.numberOfTrips)).lastElementChild;
            countDownText.textContent = "".concat(newLocationString, " is ").concat(differenceInDays, " days away");
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function addNewTrip() {
      return _ref.apply(this, arguments);
    };
  }();
  var getCityImage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(cityName) {
      var response, response2, data, _data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.serverURL, "/getImage?cityName=").concat(cityName.toLowerCase()))["catch"](function (error) {
              console.log("Error with Getting City Weather: ".concat(error));
              alert("Error with Getting City Weather: ".concat(error));
            });
          case 2:
            response = _context2.sent;
            response2 = response.clone();
            _context2.prev = 4;
            _context2.next = 7;
            return response.text();
          case 7:
            data = _context2.sent;
            return _context2.abrupt("return", data);
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](4);
            _context2.prev = 13;
            _context2.next = 16;
            return response2.text();
          case 16:
            _data = _context2.sent;
            if (_data === "error") {
              console.log("Getting City Image Error: ".concat(_context2.t0));
              alert("Getting City Image Error: ".concat(_context2.t0));
            } else {
              alert("No weather Data About that city");
            }
            _context2.next = 24;
            break;
          case 20:
            _context2.prev = 20;
            _context2.t1 = _context2["catch"](13);
            console.log("Getting City Image Error: ".concat(_context2.t1));
            alert("Getting City Image Error: ".concat(_context2.t1));
          case 24:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[4, 11], [13, 20]]);
    }));
    return function getCityImage(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getCityWeather = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cityName) {
      var response, response2, data, _data2;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("".concat(_globals_js__WEBPACK_IMPORTED_MODULE_0__.globals.serverURL, "/getWeather?cityName=").concat(cityName.toLowerCase()))["catch"](function (error) {
              console.log("Error with Getting City Weather: ".concat(error));
              alert("Error with Getting City Weather: ".concat(error));
            });
          case 2:
            response = _context3.sent;
            response2 = response.clone();
            _context3.prev = 4;
            _context3.next = 7;
            return response.json();
          case 7:
            data = _context3.sent;
            return _context3.abrupt("return", data);
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](4);
            _context3.prev = 13;
            _context3.next = 16;
            return response2.text();
          case 16:
            _data2 = _context3.sent;
            if (_data2 === "error") {
              console.log("Getting City Weather Error: ".concat(_context3.t0));
              alert("Getting City Weather Error: ".concat(_context3.t0));
            } else {
              alert("No weather Data About that city");
            }
            _context3.next = 24;
            break;
          case 20:
            _context3.prev = 20;
            _context3.t1 = _context3["catch"](13);
            console.log("Getting City Weather Error: ".concat(_context3.t1));
            alert("Getting City Weather Error: ".concat(_context3.t1));
          case 24:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[4, 11], [13, 20]]);
    }));
    return function getCityWeather(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  addNewTrip();
};

/***/ }),

/***/ "./src/client/styles/newTripFormStyle.scss":
/*!*************************************************!*\
  !*** ./src/client/styles/newTripFormStyle.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/tripStyle.scss":
/*!******************************************!*\
  !*** ./src/client/styles/tripStyle.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/index.js");
/******/ 	Client = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map