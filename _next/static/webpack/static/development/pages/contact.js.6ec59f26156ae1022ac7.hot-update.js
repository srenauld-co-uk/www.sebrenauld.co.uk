webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _modules_portal_src_authenticated_component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/portal/src/authenticated_component.js */ "./modules/portal/src/authenticated_component.js");
/* harmony import */ var _modules_portal_src_session_list_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/portal/src/session_list.js */ "./modules/portal/src/session_list.js");
/* harmony import */ var _template_components_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../template/components.js */ "./template/components.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\Users\\sebre\\workspaces\\portfolio\\pages\\contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;





var MyForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyForm, _React$Component);

  function MyForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyForm).call(this, props));
    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      status: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyForm, [{
    key: "render",
    value: function render() {
      var status = this.state.status;
      return __jsx("form", {
        onSubmit: this.submitForm,
        action: "https://formspree.io/xwkervpa",
        method: "POST",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, status && status.success && __jsx("p", {
        className: "alert alert-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Thank you for your message. I'll get in touch with you as soon as possible."), status && status.error && __jsx("p", {
        className: "alert alert-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "There was an error submitting your message. Please try again."), __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Email:"), __jsx("input", {
        className: "form-control",
        type: "email",
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Message:"), __jsx("textarea", {
        name: "message",
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), __jsx("div", {
        "class": "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("button", {
        type: "submit",
        className: "btn btn-dark btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Submit")));
    }
  }, {
    key: "submitForm",
    value: function submitForm(ev) {
      var _this2 = this;

      ev.preventDefault();
      var form = ev.target;
      var data = new FormData(form);
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status === 200) {
          form.reset();

          _this2.setState({
            status: {
              success: true,
              error: false
            }
          });
        } else {
          _this2.setState({
            status: {
              error: true,
              success: false
            }
          });
        }
      };

      xhr.send(data);
    }
  }]);

  return MyForm;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var Contact = function Contact() {
  return __jsx(_template_components_js__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
    className: "row",
    style: {
      "padding-top": "1em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "col col-sm-12 col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Get in touch"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "No matter what you have in mind, don't hesitate to get in touch. "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Project idea? Advice? Request for a coffee? Something else? Anything goes!")), __jsx("div", {
    className: "col col-sm-12 col-lg-6",
    style: {
      "padding-top": "1em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(MyForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.6ec59f26156ae1022ac7.hot-update.js.map