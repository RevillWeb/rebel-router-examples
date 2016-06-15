/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _rebelRouter = __webpack_require__(1);

	var _home = __webpack_require__(2);

	var _about = __webpack_require__(3);

	var _contact = __webpack_require__(4);

	//The router


	var routes = {
	    "/about": _about.AboutPage,
	    "/contact": _contact.ContactPage,
	    "default": _home.HomePage
	};
	//Our pages


	_rebelRouter.RebelRouter.create("main", routes);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by Leon Revill on 15/12/2015.
	 * Blog: blog.revillweb.com
	 * GitHub: https://github.com/RevillWeb
	 * Twitter: @RevillWeb
	 */

	/**
	 * The main router class and entry point to the router.
	 */

	var RebelRouter = exports.RebelRouter = function () {
	    function RebelRouter() {
	        _classCallCheck(this, RebelRouter);
	    }

	    _createClass(RebelRouter, null, [{
	        key: "create",

	        /**
	         * Create a new router instance.
	         * @param name - The name of the router, must be a valid element name (e.g. main-router)
	         * @param routes - The object containing all the routes for the router
	         * @param options - Options object for the router
	         */
	        value: function create(name, routes, options) {

	            if (RebelRouter.getInstance(name) !== undefined) {
	                throw new Error("Instance name has already been used.");
	            }

	            if (Object.keys(routes).length === 0) {
	                throw new Error("At least one route must be specified.");
	            }

	            var instance = {
	                name: name,
	                options: options,
	                paths: {}
	            };

	            for (var route in routes) {
	                if (routes.hasOwnProperty(route)) {
	                    var elementName = RebelRouter.createElement(routes[route]);
	                    var path = route === "default" ? "*" : route;
	                    instance.paths[path] = elementName;
	                }
	            }
	            RebelRouter.addInstance(name, instance);
	        }

	        /**
	         * Static helper method used to merge two option objects.
	         * @param defaults
	         * @param options
	         * @returns {*}
	         */

	    }, {
	        key: "mergeOptions",
	        value: function mergeOptions(defaults, options) {
	            if (options === undefined) {
	                return defaults;
	            }
	            var result = {};
	            for (var attrName in defaults) {
	                result[attrName] = defaults[attrName];
	            }
	            for (var attrName in options) {
	                result[attrName] = options[attrName];
	            }
	            return result;
	        }

	        /**
	         * Static method to add a new view to the router.
	         * @param name
	         * @param instance
	         */

	    }, {
	        key: "addInstance",
	        value: function addInstance(name, instance) {
	            if (RebelRouter._instances === undefined) {
	                RebelRouter._instances = {};
	            }
	            RebelRouter._instances[name] = instance;
	        }

	        /**
	         * Static method to get a view instance by name.
	         * @param name
	         * @returns {*}
	         */

	    }, {
	        key: "getInstance",
	        value: function getInstance(name) {
	            return RebelRouter._instances !== undefined ? RebelRouter._instances[name] : undefined;
	        }

	        /**
	         * Static helper method to parse the query string from a url into an object.
	         * @param url
	         * @returns {{}}
	         */

	    }, {
	        key: "parseQueryString",
	        value: function parseQueryString(url) {
	            var result = {};
	            if (url !== undefined) {
	                var queryString = url.indexOf("?") > -1 ? url.substr(url.indexOf("?") + 1, url.length) : null;
	                if (queryString !== null) {
	                    queryString.split("&").forEach(function (part) {
	                        if (!part) return;
	                        part = part.replace("+", " ");
	                        var eq = part.indexOf("=");
	                        var key = eq > -1 ? part.substr(0, eq) : part;
	                        var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : "";
	                        var from = key.indexOf("[");
	                        if (from == -1) result[decodeURIComponent(key)] = val;else {
	                            var to = key.indexOf("]");
	                            var index = decodeURIComponent(key.substring(from + 1, to));
	                            key = decodeURIComponent(key.substring(0, from));
	                            if (!result[key]) result[key] = [];
	                            if (!index) result[key].push(val);else result[key][index] = val;
	                        }
	                    });
	                }
	            }
	            return result;
	        }

	        /**
	         * Static helper method to convert a class name to a valid element name.
	         * @param Class
	         * @returns {string}
	         */

	    }, {
	        key: "classToTag",
	        value: function classToTag(Class) {
	            /**
	             * Class.name would be better but this isn't supported in IE 11.
	             */
	            try {
	                var name = Class.toString().match(/^function\s*([^\s(]+)/)[1].replace(/\W+/g, '-').replace(/([a-z\d])([A-Z0-9])/g, '$1-$2').toLowerCase();
	            } catch (e) {
	                throw new Error("Couldn't parse class name:", e);
	            }
	            if (RebelRouter.validElementTag(name) === false) {
	                throw new Error("Class name couldn't be translated to tag.");
	            }
	            return name;
	        }

	        /**
	         * Static helper method used to determine if an element with the specified name has already been registered.
	         * @param name
	         * @returns {boolean}
	         */

	    }, {
	        key: "isRegisteredElement",
	        value: function isRegisteredElement(name) {
	            return document.createElement(name).constructor !== HTMLElement;
	        }

	        /**
	         * Static helper method to take a web component class, create an element name and register the new element on the document.
	         * @param Class
	         * @returns {string}
	         */

	    }, {
	        key: "createElement",
	        value: function createElement(Class) {
	            var name = RebelRouter.classToTag(Class);
	            if (RebelRouter.isRegisteredElement(name) === false) {
	                Class.prototype.name = name;
	                document.registerElement(name, Class);
	            }
	            return name;
	        }

	        /**
	         * Simple static helper method containing a regular expression to validate an element name
	         * @param tag
	         * @returns {boolean}
	         */

	    }, {
	        key: "validElementTag",
	        value: function validElementTag(tag) {
	            return (/^[a-z0-9\-]+$/.test(tag)
	            );
	        }

	        /**
	         * Method used to register a callback to be called when the URL path changes.
	         * @param callback
	         */

	    }, {
	        key: "pathChange",
	        value: function pathChange(callback) {
	            if (RebelRouter.changeCallbacks === undefined) {
	                RebelRouter.changeCallbacks = [];
	            }
	            RebelRouter.changeCallbacks.push(callback);
	            var changeHandler = function changeHandler() {
	                /**
	                 *  event.oldURL and event.newURL would be better here but this doesn't work in IE :(
	                 */
	                if (window.location.href != RebelRouter.oldURL) {
	                    RebelRouter.changeCallbacks.forEach(function (callback) {
	                        callback(RebelRouter.isBack);
	                    });
	                    RebelRouter.isBack = false;
	                }
	                RebelRouter.oldURL = window.location.href;
	            };
	            if (window.onhashchange === null) {
	                window.addEventListener("rblback", function () {
	                    RebelRouter.isBack = true;
	                });
	            }
	            window.onhashchange = changeHandler;
	        }

	        /**
	         * Static helper method used to get the parameters from the provided route.
	         * @param regex
	         * @param route
	         * @param path
	         * @returns {{}}
	         */

	    }, {
	        key: "getParamsFromUrl",
	        value: function getParamsFromUrl(regex, route, path) {
	            var result = RebelRouter.parseQueryString(path);
	            var re = /{(\w+)}/g;
	            var results = [];
	            var match = void 0;
	            while (match = re.exec(route)) {
	                results.push(match[1]);
	            }
	            if (regex !== null) {
	                var results2 = regex.exec(path);
	                results.forEach(function (item, idx) {
	                    result[item] = results2[idx + 1];
	                });
	            }
	            return result;
	        }

	        /**
	         * Static helper method used to get the path from the current URL.
	         * @returns {*}
	         */

	    }, {
	        key: "getPathFromUrl",
	        value: function getPathFromUrl() {
	            var result = window.location.href.match(/#(.*)$/);
	            if (result !== null) {
	                return result[1];
	            }
	        }
	    }]);

	    return RebelRouter;
	}();

	/**
	 * Represents a router instance which is used as the prototype for each RebelRouter element registered.
	 */


	var RouterInstance = function (_HTMLElement) {
	    _inherits(RouterInstance, _HTMLElement);

	    function RouterInstance() {
	        _classCallCheck(this, RouterInstance);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RouterInstance).apply(this, arguments));
	    }

	    _createClass(RouterInstance, [{
	        key: "createdCallback",
	        value: function createdCallback() {
	            var _this2 = this;

	            this.name = this.getAttribute("instance");
	            var instance = RebelRouter.getInstance(this.name);
	            if (instance === undefined) {
	                throw new Error("Invalid instance name specified.");
	            }
	            this.initialised = false;
	            this.paths = instance.paths;
	            this.options = RebelRouter.mergeOptions({
	                "shadowRoot": false,
	                "animation": false
	            }, instance.options);

	            if (this.initialised === false) {
	                if (this.options.shadowRoot === true) {
	                    this.createShadowRoot();
	                    this.root = this.shadowRoot;
	                } else {
	                    this.root = this;
	                }
	                if (this.options.animation === true) {
	                    this.initAnimation();
	                }
	                this.render();
	                RebelRouter.pathChange(function (isBack) {
	                    if (_this2.options.animation === true) {
	                        if (isBack === true) {
	                            _this2.classList.add("rbl-back");
	                        } else {
	                            _this2.classList.remove("rbl-back");
	                        }
	                    }
	                    _this2.render();
	                });
	                this.initialised = true;
	            }
	        }

	        /**
	         * Function used to initialise the animation mechanics if animation is turned on
	         */

	    }, {
	        key: "initAnimation",
	        value: function initAnimation() {
	            var _this3 = this;

	            var observer = new MutationObserver(function (mutations) {
	                var node = mutations[0].addedNodes[0];
	                if (node !== undefined) {
	                    (function () {
	                        var otherChildren = _this3.getOtherChildren(node);
	                        node.classList.add("rebel-animate");
	                        node.classList.add("enter");
	                        setTimeout(function () {
	                            if (otherChildren.length > 0) {
	                                otherChildren.forEach(function (child) {
	                                    child.classList.add("exit");
	                                    setTimeout(function () {
	                                        child.classList.add("complete");
	                                    }, 10);
	                                });
	                            }
	                            setTimeout(function () {
	                                node.classList.add("complete");
	                            }, 10);
	                        }, 10);
	                        var animationEnd = function animationEnd(event) {
	                            if (event.target.className.indexOf("exit") > -1) {
	                                _this3.root.removeChild(event.target);
	                            }
	                        };
	                        node.addEventListener("transitionend", animationEnd);
	                        node.addEventListener("animationend", animationEnd);
	                    })();
	                }
	            });
	            observer.observe(this, { childList: true });
	        }

	        /**
	         * Method used to get the current route object
	         * @returns {*}
	         */

	    }, {
	        key: "current",
	        value: function current() {
	            var path = RebelRouter.getPathFromUrl();
	            for (var route in this.paths) {
	                if (route !== "*") {
	                    var regexString = "^" + route.replace(/{\w+}\/?/g, "(\\w+)\/?");
	                    regexString += regexString.indexOf("\\/?") > -1 ? "" : "\\/?" + "([?=&-\/\\w+]+)?$";
	                    var regex = new RegExp(regexString);
	                    if (regex.test(path)) {
	                        return _routeResult(this.paths[route], route, regex, path);
	                    }
	                }
	            }
	            return this.paths["*"] !== undefined ? _routeResult(this.paths["*"], "*", null, path) : null;
	        }

	        /**
	         * Method called to render the current view
	         */

	    }, {
	        key: "render",
	        value: function render() {
	            var result = this.current();
	            if (result !== null) {
	                if (result.templateName !== this.previousTemplate || this.options.animation === true) {
	                    this.$template = document.createElement(result.templateName);
	                    if (this.options.animation !== true) {
	                        this.root.innerHTML = "";
	                    }
	                    this.root.appendChild(this.$template);
	                    this.previousTemplate = result.templateName;
	                }
	                for (var key in result.params) {
	                    var value = result.params[key];
	                    if (typeof value == "Object") {
	                        try {
	                            value = JSON.parse(value);
	                        } catch (e) {
	                            console.error("Couldn't parse param value:", e);
	                        }
	                    }
	                    this.$template.setAttribute(key, value);
	                }
	            }
	        }

	        /**
	         *
	         * @param node - Used with the animation mechanics to get all other view children except itself
	         * @returns {Array}
	         */

	    }, {
	        key: "getOtherChildren",
	        value: function getOtherChildren(node) {
	            var children = this.root.children;
	            var results = [];
	            for (var i = 0; i < children.length; i++) {
	                var child = children[i];
	                if (child != node) {
	                    results.push(child);
	                }
	            }
	            return results;
	        }
	    }]);

	    return RouterInstance;
	}(HTMLElement);

	document.registerElement("rebel-router", RouterInstance);

	/**
	 * Represents the prototype for an anchor element which added functionality to perform a back transition.
	 */

	var RebelBackA = function (_HTMLAnchorElement) {
	    _inherits(RebelBackA, _HTMLAnchorElement);

	    function RebelBackA() {
	        _classCallCheck(this, RebelBackA);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RebelBackA).apply(this, arguments));
	    }

	    _createClass(RebelBackA, [{
	        key: "attachedCallback",
	        value: function attachedCallback() {
	            var _this5 = this;

	            this.addEventListener("click", function (event) {
	                var path = _this5.getAttribute("href");
	                event.preventDefault();
	                if (path !== undefined) {
	                    window.dispatchEvent(new CustomEvent('rblback'));
	                }
	                window.location.hash = path;
	            });
	        }
	    }]);

	    return RebelBackA;
	}(HTMLAnchorElement);
	/**
	 * Register the back button custom element
	 */


	document.registerElement("rebel-back-a", {
	    extends: "a",
	    prototype: RebelBackA.prototype
	});

	/**
	 * Constructs a route object
	 * @param templateName
	 * @param route
	 * @param regex
	 * @param path
	 * @returns {{}}
	 * @private
	 */
	function _routeResult(templateName, route, regex, path) {
	    var result = {};
	    result.templateName = templateName;
	    result.route = route;
	    result.path = path;
	    result.params = RebelRouter.getParamsFromUrl(regex, route, path);
	    return result;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomePage = exports.HomePage = function (_HTMLElement) {
	    _inherits(HomePage, _HTMLElement);

	    function HomePage() {
	        _classCallCheck(this, HomePage);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(HomePage).apply(this, arguments));
	    }

	    _createClass(HomePage, [{
	        key: "attachedCallback",
	        value: function attachedCallback() {
	            this.innerHTML = "<p>This is the home page.</p>";
	        }
	    }]);

	    return HomePage;
	}(HTMLElement);

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutPage = exports.AboutPage = function (_HTMLElement) {
	    _inherits(AboutPage, _HTMLElement);

	    function AboutPage() {
	        _classCallCheck(this, AboutPage);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AboutPage).apply(this, arguments));
	    }

	    _createClass(AboutPage, [{
	        key: "attachedCallback",
	        value: function attachedCallback() {
	            this.innerHTML = "<p>This is the about page.</p>";
	        }
	    }]);

	    return AboutPage;
	}(HTMLElement);

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactPage = exports.ContactPage = function (_HTMLElement) {
	    _inherits(ContactPage, _HTMLElement);

	    function ContactPage() {
	        _classCallCheck(this, ContactPage);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ContactPage).apply(this, arguments));
	    }

	    _createClass(ContactPage, [{
	        key: "attachedCallback",
	        value: function attachedCallback() {
	            this.innerHTML = "<p>This is the contact page.</p>";
	        }
	    }]);

	    return ContactPage;
	}(HTMLElement);

/***/ }
/******/ ]);