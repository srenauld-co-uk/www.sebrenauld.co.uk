webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./template/slider.js":
/*!****************************!*\
  !*** ./template/slider.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "C:\\Users\\sebre\\workspaces\\portfolio\\template\\slider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var SliderBackground = function SliderBackground(props) {
  return __jsx("div", {
    className: "slider-item slider-background",
    style: {
      "backgroundImage": "url(".concat(props.image, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.content);
};

var Transition = {
  WebkitTransition: "all 0.5s ease",
  MozTransition: "all 0.5s ease",
  MsTransition: "all 0.5s ease",
  OTransition: "all 0.5s ease",
  transition: "all 0.5s ease"
};
var NoTransition = {
  WebkitTransition: "none",
  MozTransition: "none",
  MsTransition: "none",
  OTransition: "none",
  transition: "none"
};

var SliderForeground = function SliderForeground(props) {
  var position = props.position || 50;
  var fadeIn = position - 10 > 0 ? position - 10 : 0;
  var fadeOut = position + 10 > 100 ? 100 : position + 10;
  return __jsx("div", {
    className: "slider-item slider-foreground",
    style: {
      "backgroundImage": "url(".concat(props.image, ")"),
      "WebkitMaskImage": "linear-gradient(80deg, rgba(0,0,0,1) " + fadeIn + "%, rgba(0,0,0,0) " + fadeOut + "%)",
      "MozMaskImage": "linear-gradient(80deg, rgba(0,0,0,1) " + fadeIn + "%, rgba(0,0,0,0) " + fadeOut + "%)",
      "maskImage": "linear-gradient(80deg, rgba(0,0,0,1) " + fadeIn + "%, rgba(0,0,0,0) " + fadeOut + "%)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.content);
};

var Slider =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Slider, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider, [{
    key: "pulsePosition",
    value: function pulsePosition(offset) {
      return {
        width: 50 + offset + "px",
        height: 50 + offset + "px",
        top: this.state.height / 2 - offset / 2 + "px",
        left: this.state.markerPos - offset / 2 + "px"
      };
    }
  }]);

  function Slider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Slider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider).call(this, props));
    _this.state = {
      position: props.position || 50,
      width: -1,
      height: -1,
      markerPos: 0,
      pulse: false,
      pulseState: 0,
      dragging: false
    };
    _this.ref = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.button = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.shadow = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.pulse = null;
    _this.shiftX = 0;
    _this.dragging = false;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider, [{
    key: "resize",
    value: function resize() {
      var elementWidth = this.ref.current.offsetWidth;
      var elementHeight = this.ref.current.offsetHeight;
      var starterPos = elementWidth * this.state.position / 100;
      var markerPos = starterPos + elementHeight / 2 * 0.1736;
      this.setState({
        width: elementWidth,
        height: elementHeight,
        markerPos: markerPos
      });
      this.startPulse();
    }
  }, {
    key: "startPulse",
    value: function startPulse() {
      var _this2 = this;

      if (this.pulse) {
        clearInterval(this.pulse);
        this.pulse = null;
      }

      this.setState({
        pulse: true,
        pulseState: 3
      });
      this.pulse = setInterval(function () {
        _this2.setState({
          pulseState: (_this2.state.pulseState + 1) % 5
        });
      }, 500);
    }
  }, {
    key: "stopPulse",
    value: function stopPulse() {
      if (this.pulse) {
        clearInterval(this.pulse);
        this.pulse = null;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      window.addEventListener("resize", function () {
        _this3.resize();
      });
      this.resize();
    }
  }, {
    key: "dragStart",
    value: function dragStart(e) {
      this.shiftX = e - this.button.current.getBoundingClientRect().left;
      this.setState({
        dragging: true
      });
    }
  }, {
    key: "dragMove",
    value: function dragMove(x, y) {
      if (this.state.dragging) {
        this.setState({
          markerPos: x - this.shiftX,
          position: 100 * (x - this.shiftX) / this.state.width
        });
      }
    }
  }, {
    key: "dragStop",
    value: function dragStop() {
      this.setState({
        dragging: false
      });
    }
  }, {
    key: "onHover",
    value: function onHover() {
      this.stopPulse();
    }
  }, {
    key: "onOut",
    value: function onOut() {
      this.startPulse();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var pulseParams = {};

      if (this.state.pulse) {
        switch (this.state.pulseState) {
          case 0:
            pulseParams = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.pulsePosition(0), Transition, {
              opacity: 0.7
            });
            break;

          case 1:
          case 2:
            pulseParams = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.pulsePosition(25), Transition, {
              opacity: 0
            });
            break;

          case 3:
            pulseParams = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.pulsePosition(25), NoTransition, {
              opacity: 0
            });
            break;

          case 4:
            pulseParams = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.pulsePosition(0), NoTransition, {
              opacity: 0.7
            });
            break;
        }
      }

      return __jsx("div", {
        className: "slider",
        ref: this.ref,
        onMouseUp: function onMouseUp() {
          return _this4.dragStop();
        },
        onTouchMove: function onTouchMove(e) {
          _this4.dragMove(e.touches[0].pageX, e.touches[0].pageY);
        },
        onMouseMove: function onMouseMove(e) {
          return _this4.dragMove(e.pageX, e.pageY);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, this.props.background && __jsx(SliderBackground, {
        image: this.props.background.image,
        content: this.props.background.component,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), this.props.foreground && __jsx(SliderForeground, {
        image: this.props.foreground.image,
        position: this.state.position,
        content: this.props.foreground.component,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), this.state.width >= 0 && this.props.foreground && this.props.background && __jsx("button", {
        className: "slider-draggable",
        ref: this.button,
        onTouchStart: function onTouchStart(e) {
          return _this4.dragStart(e.touches[0].pageX);
        },
        onTouchEnd: function onTouchEnd(e) {
          return _this4.dragStop();
        },
        onMouseDown: function onMouseDown(e) {
          return _this4.dragStart(e.clientX);
        },
        onDragStart: function onDragStart() {
          return false;
        },
        onMouseOver: function onMouseOver() {
          return _this4.onHover();
        },
        onMouseOut: function onMouseOut() {
          return _this4.onOut();
        },
        style: {
          "left": this.state.markerPos + "px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-arrows-alt-h",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      })), this.state.width >= 0 && this.state.pulse && !this.state.dragging && this.props.foreground && this.props.background && __jsx("button", {
        className: "slider-draggable-shadow",
        ref: this.shadow,
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pulseParams, {
          "borderRadius": 100
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var oldState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!oldState.position) return {
        position: props.position || 50
      };
      return oldState;
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.25de25dba0b2150c1c0b.hot-update.js.map