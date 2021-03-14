function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/@core/components/background/background.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/@core/components/background/background.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BackgroundComponent */

  /***/
  function srcAppCoreComponentsBackgroundBackgroundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function () {
      return BackgroundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BackgroundComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li");
      }
    }

    var BackgroundComponent = function BackgroundComponent() {
      _classCallCheck(this, BackgroundComponent);

      this.circles = Array(10).fill('');
    };

    BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) {
      return new (t || BackgroundComponent)();
    };

    BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BackgroundComponent,
      selectors: [["background-component"]],
      decls: 3,
      vars: 1,
      consts: [[1, "background"], [1, "circles"], [4, "ngFor", "ngForOf"]],
      template: function BackgroundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BackgroundComponent_li_2_Template, 1, 0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.circles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["@-webkit-keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@-webkit-keyframes shimmerText {\n  0% {\n    background-position: -4rem top;\n    \n  }\n  70% {\n    background-position: 12.5rem top;\n    \n  }\n  100% {\n    background-position: 12.5rem top;\n    \n  }\n}\n@keyframes shimmerText {\n  0% {\n    background-position: -4rem top;\n    \n  }\n  70% {\n    background-position: 12.5rem top;\n    \n  }\n  100% {\n    background-position: 12.5rem top;\n    \n  }\n}\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n@keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n}\n.background[_ngcontent-%COMP%] {\n  background: #4e54c8;\n  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);\n  width: 100%;\n  height: 100vh;\n}\n.background[_ngcontent-%COMP%]   .circles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  list-style: none;\n  width: 20px;\n  height: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-animation: animate 25s linear infinite;\n          animation: animate 25s linear infinite;\n  bottom: -150px;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  left: 25%;\n  width: 80px;\n  height: 80px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  left: 10%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 12s;\n          animation-duration: 12s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  left: 70%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  left: 40%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-duration: 18s;\n          animation-duration: 18s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  left: 65%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  left: 75%;\n  width: 110px;\n  height: 110px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  left: 35%;\n  width: 150px;\n  height: 150px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\n  left: 50%;\n  width: 25px;\n  height: 25px;\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n  -webkit-animation-duration: 45s;\n          animation-duration: 45s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\n  left: 20%;\n  width: 15px;\n  height: 15px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 35s;\n          animation-duration: 35s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\n  left: 85%;\n  width: 150px;\n  height: 150px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-duration: 11s;\n          animation-duration: 11s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9iYWNrZ3JvdW5kL0M6XFxVc2Vyc1xcaXJpbmdcXHdvcmtcXHNwYWNlLXNob290ZXIvc3JjXFx0aGVtZVxcX2FuaW1hdGlvbnMuc2NzcyIsInNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Bjb3JlL2NvbXBvbmVudHMvYmFja2dyb3VuZC9DOlxcVXNlcnNcXGlyaW5nXFx3b3JrXFxzcGFjZS1zaG9vdGVyL3NyY1xcYXBwXFxAY29yZVxcY29tcG9uZW50c1xcYmFja2dyb3VuZFxcYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9iYWNrZ3JvdW5kL0M6XFxVc2Vyc1xcaXJpbmdcXHdvcmtcXHNwYWNlLXNob290ZXIvc3JjXFx0aGVtZVxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSw2QkFBQTtFQ0NGO0VERUE7SUFDRSw0QkFBQTtFQ0FGO0FBQ0Y7QURQQTtFQUNFO0lBQ0UsNkJBQUE7RUNDRjtFREVBO0lBQ0UsNEJBQUE7RUNBRjtBQUNGO0FER0E7RUFDRTtJQUNFLDhCQUFBO0lBQWdDLE9BQUE7RUNBbEM7RURHQTtJQUNFLGdDQUFBO0lBQWtDLFFBQUE7RUNBcEM7RURHQTtJQUNFLGdDQUFBO0lBQWtDLFFBQUE7RUNBcEM7QUFDRjtBRFhBO0VBQ0U7SUFDRSw4QkFBQTtJQUFnQyxPQUFBO0VDQWxDO0VER0E7SUFDRSxnQ0FBQTtJQUFrQyxRQUFBO0VDQXBDO0VER0E7SUFDRSxnQ0FBQTtJQUFrQyxRQUFBO0VDQXBDO0FBQ0Y7QURHQTtFQUNFO0lBRUUsdUJBQUE7RUNERjtFREdBO0lBRUUseUJBQUE7RUNERjtBQUNGO0FEUEE7RUFDRTtJQUVFLHVCQUFBO0VDREY7RURHQTtJQUVFLHlCQUFBO0VDREY7QUFDRjtBRElBO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQ0ZGO0VES0E7SUFDRSw2Q0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ0hGO0FBQ0Y7QURSQTtFQUNFO0lBQ0UscUNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUNGRjtFREtBO0lBQ0UsNkNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUNIRjtBQUNGO0FDeENBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRDBDRjtBQ3ZDQTtFQUNFLG1CQ2JVO0VEY1YsOERBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRDBDRjtBQ3pDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEMkNKO0FDdkNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLGNBQUE7QUQwQ0Y7QUN2Q0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FEMENGO0FDdkNBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUQwQ0Y7QUN2Q0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FEMENGO0FDdkNBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUQwQ0Y7QUN2Q0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FEMENGO0FDdkNBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBRDBDRjtBQ3ZDQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUQwQ0Y7QUN2Q0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBRDBDRjtBQ3ZDQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FEMENGO0FDdkNBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUQwQ0YiLCJmaWxlIjoic3JjL2FwcC9AY29yZS9jb21wb25lbnRzL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hpbW1lclRleHQge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00cmVtIHRvcDsgLyo1MHB4Ki9cclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMi41cmVtIHRvcDsgLyoyMDBweCovXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyLjVyZW0gdG9wOyAvKjIwMHB4Ki9cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuIiwiQGtleWZyYW1lcyBwbGFjZWhvbGRlclNoaW1tZXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGltbWVyVGV4dCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNHJlbSB0b3A7XG4gICAgLyo1MHB4Ki9cbiAgfVxuICA3MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyLjVyZW0gdG9wO1xuICAgIC8qMjAwcHgqL1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyLjVyZW0gdG9wO1xuICAgIC8qMjAwcHgqL1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSByb3RhdGUoNzIwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogIzRlNTRjODtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzhmOTRmYiwgIzRlNTRjOCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmJhY2tncm91bmQgLmNpcmNsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNpcmNsZXMgbGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAyNXMgbGluZWFyIGluZmluaXRlO1xuICBib3R0b206IC0xNTBweDtcbn1cblxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDEpIHtcbiAgbGVmdDogMjUlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xufVxuXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAxMCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTJzO1xufVxuXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMykge1xuICBsZWZ0OiA3MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XG59XG5cbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg0KSB7XG4gIGxlZnQ6IDQwJTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxOHM7XG59XG5cbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg1KSB7XG4gIGxlZnQ6IDY1JTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDYpIHtcbiAgbGVmdDogNzUlO1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIGFuaW1hdGlvbi1kZWxheTogM3M7XG59XG5cbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg3KSB7XG4gIGxlZnQ6IDM1JTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDdzO1xufVxuXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoOCkge1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGFuaW1hdGlvbi1kZWxheTogMTVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDQ1cztcbn1cblxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDkpIHtcbiAgbGVmdDogMjAlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDM1cztcbn1cblxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDEwKSB7XG4gIGxlZnQ6IDg1JTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDExcztcbn0iLCJAaW1wb3J0IFwifnNyYy90aGVtZS92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIn5zcmMvdGhlbWUvYW5pbWF0aW9uc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiAkbWFpbi1ibHVlO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4Zjk0ZmIsICRtYWluLWJsdWUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLmNpcmNsZXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAyNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGJvdHRvbTogLTE1MHB4O1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMSkge1xyXG4gIGxlZnQ6IDI1JTtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxufVxyXG5cclxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDIpIHtcclxuICBsZWZ0OiAxMCU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMnM7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgbGVmdDogNzAlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDRzO1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNCkge1xyXG4gIGxlZnQ6IDQwJTtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE4cztcclxufVxyXG5cclxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDUpIHtcclxuICBsZWZ0OiA2NSU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg2KSB7XHJcbiAgbGVmdDogNzUlO1xyXG4gIHdpZHRoOiAxMTBweDtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogM3M7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg3KSB7XHJcbiAgbGVmdDogMzUlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogN3M7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg4KSB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDE1cztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDQ1cztcclxufVxyXG5cclxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDkpIHtcclxuICBsZWZ0OiAyMCU7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzNXM7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgxMCkge1xyXG4gIGxlZnQ6IDg1JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTFzO1xyXG59XHJcbiIsIiRtYWluLWJsdWU6ICM0ZTU0Yzg7XHJcbiRzcGxhc2gtYmc6ICNkZWUyZTY7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'background-component',
          templateUrl: './background.component.html',
          styleUrls: ['./background.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/components/background/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/@core/components/background/index.ts ***!
    \******************************************************/

  /*! exports provided: BackgroundComponent */

  /***/
  function srcAppCoreComponentsBackgroundIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _background_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./background.component */
    "./src/app/@core/components/background/background.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function () {
      return _background_component__WEBPACK_IMPORTED_MODULE_0__["BackgroundComponent"];
    });
    /***/

  },

  /***/
  "./src/app/@core/components/gameover/gameover.modal.ts":
  /*!*************************************************************!*\
    !*** ./src/app/@core/components/gameover/gameover.modal.ts ***!
    \*************************************************************/

  /*! exports provided: GameoverModal */

  /***/
  function srcAppCoreComponentsGameoverGameoverModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameoverModal", function () {
      return GameoverModal;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GameoverModal_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Highest Score!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var GameoverModal = function GameoverModal(activeModal) {
      _classCallCheck(this, GameoverModal);

      this.activeModal = activeModal;
      this.isHighest = false;
    };

    GameoverModal.ɵfac = function GameoverModal_Factory(t) {
      return new (t || GameoverModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    GameoverModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameoverModal,
      selectors: [["gameover-modal"]],
      inputs: {
        isHighest: "isHighest",
        score: "score"
      },
      decls: 16,
      vars: 2,
      consts: [[1, "gameover", "modal-body"], [1, "row"], [1, "col-12", "text-center"], [1, "row", "justify-content-center"], [1, "col-2", "text-center"], ["class", "row justify-content-center", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-info", 3, "click"]],
      template: function GameoverModal_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Game Over");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Score:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameoverModal_div_11_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameoverModal_Template_button_click_14_listener() {
            return ctx.activeModal.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Main Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.score, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHighest);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["@-webkit-keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@-webkit-keyframes shimmerText {\n  0% {\n    background-position: -4rem top;\n    \n  }\n  70% {\n    background-position: 12.5rem top;\n    \n  }\n  100% {\n    background-position: 12.5rem top;\n    \n  }\n}\n@keyframes shimmerText {\n  0% {\n    background-position: -4rem top;\n    \n  }\n  70% {\n    background-position: 12.5rem top;\n    \n  }\n  100% {\n    background-position: 12.5rem top;\n    \n  }\n}\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n@keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n[_nghost-%COMP%]   .gameover.modal-body[_ngcontent-%COMP%] {\n  padding: 0;\n  color: #4e54c8;\n}\n[_nghost-%COMP%]   .gameover.modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 1em 0;\n}\n[_nghost-%COMP%]   .gameover.modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9nYW1lb3Zlci9DOlxcVXNlcnNcXGlyaW5nXFx3b3JrXFxzcGFjZS1zaG9vdGVyL3NyY1xcdGhlbWVcXF9hbmltYXRpb25zLnNjc3MiLCJzcmMvYXBwL0Bjb3JlL2NvbXBvbmVudHMvZ2FtZW92ZXIvZ2FtZW92ZXIubW9kYWwuc2NzcyIsInNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9nYW1lb3Zlci9DOlxcVXNlcnNcXGlyaW5nXFx3b3JrXFxzcGFjZS1zaG9vdGVyL3NyY1xcYXBwXFxAY29yZVxcY29tcG9uZW50c1xcZ2FtZW92ZXJcXGdhbWVvdmVyLm1vZGFsLnNjc3MiLCJzcmMvYXBwL0Bjb3JlL2NvbXBvbmVudHMvZ2FtZW92ZXIvQzpcXFVzZXJzXFxpcmluZ1xcd29ya1xcc3BhY2Utc2hvb3Rlci9zcmNcXHRoZW1lXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDZCQUFBO0VDQ0Y7RURFQTtJQUNFLDRCQUFBO0VDQUY7QUFDRjtBRFBBO0VBQ0U7SUFDRSw2QkFBQTtFQ0NGO0VERUE7SUFDRSw0QkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFO0lBQ0UsOEJBQUE7SUFBZ0MsT0FBQTtFQ0FsQztFREdBO0lBQ0UsZ0NBQUE7SUFBa0MsUUFBQTtFQ0FwQztFREdBO0lBQ0UsZ0NBQUE7SUFBa0MsUUFBQTtFQ0FwQztBQUNGO0FEWEE7RUFDRTtJQUNFLDhCQUFBO0lBQWdDLE9BQUE7RUNBbEM7RURHQTtJQUNFLGdDQUFBO0lBQWtDLFFBQUE7RUNBcEM7RURHQTtJQUNFLGdDQUFBO0lBQWtDLFFBQUE7RUNBcEM7QUFDRjtBREdBO0VBQ0U7SUFFRSx1QkFBQTtFQ0RGO0VER0E7SUFFRSx5QkFBQTtFQ0RGO0FBQ0Y7QURQQTtFQUNFO0lBRUUsdUJBQUE7RUNERjtFREdBO0lBRUUseUJBQUE7RUNERjtBQUNGO0FESUE7RUFDRTtJQUNFLHFDQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VDRkY7RURLQTtJQUNFLDZDQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDSEY7QUFDRjtBRFJBO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQ0ZGO0VES0E7SUFDRSw2Q0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ0hGO0FBQ0Y7QUN2Q0U7RUFDRSxVQUFBO0VBQ0EsY0NOUTtBRitDWjtBQ3hDSTtFQUNFLGFBQUE7QUQwQ047QUN6Q007RUFDRSxnQkFBQTtBRDJDUiIsImZpbGUiOiJzcmMvYXBwL0Bjb3JlL2NvbXBvbmVudHMvZ2FtZW92ZXIvZ2FtZW92ZXIubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hpbW1lclRleHQge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00cmVtIHRvcDsgLyo1MHB4Ki9cclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMi41cmVtIHRvcDsgLyoyMDBweCovXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyLjVyZW0gdG9wOyAvKjIwMHB4Ki9cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuIiwiQGtleWZyYW1lcyBwbGFjZWhvbGRlclNoaW1tZXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGltbWVyVGV4dCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNHJlbSB0b3A7XG4gICAgLyo1MHB4Ki9cbiAgfVxuICA3MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyLjVyZW0gdG9wO1xuICAgIC8qMjAwcHgqL1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyLjVyZW0gdG9wO1xuICAgIC8qMjAwcHgqL1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSByb3RhdGUoNzIwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuOmhvc3QgLmdhbWVvdmVyLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzRlNTRjODtcbn1cbjpob3N0IC5nYW1lb3Zlci5tb2RhbC1ib2R5IC5yb3cge1xuICBtYXJnaW46IDFlbSAwO1xufVxuOmhvc3QgLmdhbWVvdmVyLm1vZGFsLWJvZHkgLnJvdyBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59IiwiQGltcG9ydCBcIn5zcmMvdGhlbWUvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3RoZW1lL2FuaW1hdGlvbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuZ2FtZW92ZXIubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICRtYWluLWJsdWU7XHJcbiAgICAucm93IHtcclxuICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJG1haW4tYmx1ZTogIzRlNTRjODtcclxuJHNwbGFzaC1iZzogI2RlZTJlNjtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameoverModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'gameover-modal',
          templateUrl: './gameover.modal.html',
          styleUrls: ['./gameover.modal.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, {
        isHighest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        score: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/@core/components/gameover/gameover.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/@core/components/gameover/gameover.module.ts ***!
    \**************************************************************/

  /*! exports provided: GameoverModule */

  /***/
  function srcAppCoreComponentsGameoverGameoverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameoverModule", function () {
      return GameoverModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _gameover_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./gameover.modal */
    "./src/app/@core/components/gameover/gameover.modal.ts");

    var GameoverModule = function GameoverModule() {
      _classCallCheck(this, GameoverModule);
    };

    GameoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GameoverModule
    });
    GameoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GameoverModule_Factory(t) {
        return new (t || GameoverModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GameoverModule, {
        declarations: [_gameover_modal__WEBPACK_IMPORTED_MODULE_2__["GameoverModal"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_gameover_modal__WEBPACK_IMPORTED_MODULE_2__["GameoverModal"]],
          providers: [],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/components/gameover/index.ts":
  /*!****************************************************!*\
    !*** ./src/app/@core/components/gameover/index.ts ***!
    \****************************************************/

  /*! exports provided: GameoverModal */

  /***/
  function srcAppCoreComponentsGameoverIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _gameover_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./gameover.modal */
    "./src/app/@core/components/gameover/gameover.modal.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameoverModal", function () {
      return _gameover_modal__WEBPACK_IMPORTED_MODULE_0__["GameoverModal"];
    });
    /***/

  },

  /***/
  "./src/app/@core/components/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/@core/components/index.ts ***!
    \*******************************************/

  /*! exports provided: BackgroundComponent, LevelingComponent, ScoringComponent, SplashComponent, GameoverModal */

  /***/
  function srcAppCoreComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./background */
    "./src/app/@core/components/background/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function () {
      return _background__WEBPACK_IMPORTED_MODULE_0__["BackgroundComponent"];
    });
    /* harmony import */


    var _leveling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./leveling */
    "./src/app/@core/components/leveling/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LevelingComponent", function () {
      return _leveling__WEBPACK_IMPORTED_MODULE_1__["LevelingComponent"];
    });
    /* harmony import */


    var _scoring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scoring */
    "./src/app/@core/components/scoring/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScoringComponent", function () {
      return _scoring__WEBPACK_IMPORTED_MODULE_2__["ScoringComponent"];
    });
    /* harmony import */


    var _splash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./splash */
    "./src/app/@core/components/splash/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashComponent", function () {
      return _splash__WEBPACK_IMPORTED_MODULE_3__["SplashComponent"];
    });
    /* harmony import */


    var _gameover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./gameover */
    "./src/app/@core/components/gameover/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameoverModal", function () {
      return _gameover__WEBPACK_IMPORTED_MODULE_4__["GameoverModal"];
    });
    /***/

  },

  /***/
  "./src/app/@core/components/leveling/index.ts":
  /*!****************************************************!*\
    !*** ./src/app/@core/components/leveling/index.ts ***!
    \****************************************************/

  /*! exports provided: LevelingComponent */

  /***/
  function srcAppCoreComponentsLevelingIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _leveling_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./leveling.component */
    "./src/app/@core/components/leveling/leveling.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LevelingComponent", function () {
      return _leveling_component__WEBPACK_IMPORTED_MODULE_0__["LevelingComponent"];
    });
    /***/

  },

  /***/
  "./src/app/@core/components/leveling/leveling.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/@core/components/leveling/leveling.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LevelingComponent */

  /***/
  function srcAppCoreComponentsLevelingLevelingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LevelingComponent", function () {
      return LevelingComponent;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LevelingComponent = /*#__PURE__*/function () {
      function LevelingComponent() {
        _classCallCheck(this, LevelingComponent);

        this._level = 1;
        this._levelUp = false;
      }

      _createClass(LevelingComponent, [{
        key: "level",
        get: function get() {
          return this._level;
        },
        set: function set(value) {
          if (this._level !== value) this.levelUp = true;
          this._level = value;
        }
      }, {
        key: "levelUp",
        get: function get() {
          return this._levelUp;
        },
        set: function set(value) {
          var _this = this;

          this._levelUp = value;
          if (value) setTimeout(function () {
            return _this.levelUp = false;
          }, 1000);
        }
      }]);

      return LevelingComponent;
    }();

    LevelingComponent.ɵfac = function LevelingComponent_Factory(t) {
      return new (t || LevelingComponent)();
    };

    LevelingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LevelingComponent,
      selectors: [["leveling-component"]],
      hostVars: 1,
      hostBindings: function LevelingComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵupdateSyntheticHostBinding"]("@levelUp", ctx.levelUp);
        }
      },
      inputs: {
        level: "level"
      },
      decls: 5,
      vars: 1,
      consts: [[1, "level-container"]],
      template: function LevelingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "AI evolved");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Level ", ctx.level, " reached");
        }
      },
      styles: ["@-webkit-keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@-webkit-keyframes shimmerText {\n  0% {\n    background-position: -4rem top;\n    \n  }\n  70% {\n    background-position: 12.5rem top;\n    \n  }\n  100% {\n    background-position: 12.5rem top;\n    \n  }\n}\n@keyframes shimmerText {\n  0% {\n    background-position: -4rem top;\n    \n  }\n  70% {\n    background-position: 12.5rem top;\n    \n  }\n  100% {\n    background-position: 12.5rem top;\n    \n  }\n}\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n@keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n[_nghost-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  -moz-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n.level-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.level-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 30px;\n  display: inline-block;\n  background: #4e54c8 -webkit-gradient(linear, 100% 0, 0 0, from(#4e54c8), color-stop(0.5, #ffffff), to(#4e54c8));\n  background-position: -4rem top;\n  \n  background-repeat: no-repeat;\n  background-clip: text;\n  animation-name: shimmerText;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n  background-size: 4rem 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-animation-name: shimmerText;\n  -webkit-animation-duration: 2.2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-background-size: 4rem 100%;\n}\n.level-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #4e54c8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9sZXZlbGluZy9DOlxcVXNlcnNcXGlyaW5nXFx3b3JrXFxzcGFjZS1zaG9vdGVyL3NyY1xcdGhlbWVcXF9hbmltYXRpb25zLnNjc3MiLCJzcmMvYXBwL0Bjb3JlL2NvbXBvbmVudHMvbGV2ZWxpbmcvbGV2ZWxpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Bjb3JlL2NvbXBvbmVudHMvbGV2ZWxpbmcvQzpcXFVzZXJzXFxpcmluZ1xcd29ya1xcc3BhY2Utc2hvb3Rlci9zcmNcXGFwcFxcQGNvcmVcXGNvbXBvbmVudHNcXGxldmVsaW5nXFxsZXZlbGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9sZXZlbGluZy9DOlxcVXNlcnNcXGlyaW5nXFx3b3JrXFxzcGFjZS1zaG9vdGVyL3NyY1xcdGhlbWVcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsNkJBQUE7RUNDRjtFREVBO0lBQ0UsNEJBQUE7RUNBRjtBQUNGO0FEUEE7RUFDRTtJQUNFLDZCQUFBO0VDQ0Y7RURFQTtJQUNFLDRCQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0U7SUFDRSw4QkFBQTtJQUFnQyxPQUFBO0VDQWxDO0VER0E7SUFDRSxnQ0FBQTtJQUFrQyxRQUFBO0VDQXBDO0VER0E7SUFDRSxnQ0FBQTtJQUFrQyxRQUFBO0VDQXBDO0FBQ0Y7QURYQTtFQUNFO0lBQ0UsOEJBQUE7SUFBZ0MsT0FBQTtFQ0FsQztFREdBO0lBQ0UsZ0NBQUE7SUFBa0MsUUFBQTtFQ0FwQztFREdBO0lBQ0UsZ0NBQUE7SUFBa0MsUUFBQTtFQ0FwQztBQUNGO0FER0E7RUFDRTtJQUVFLHVCQUFBO0VDREY7RURHQTtJQUVFLHlCQUFBO0VDREY7QUFDRjtBRFBBO0VBQ0U7SUFFRSx1QkFBQTtFQ0RGO0VER0E7SUFFRSx5QkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBQ0UscUNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUNGRjtFREtBO0lBQ0UsNkNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUNIRjtBQUNGO0FEUkE7RUFDRTtJQUNFLHFDQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VDRkY7RURLQTtJQUNFLDZDQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDSEY7QUFDRjtBQ3hDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQTZCLGVBQUE7RUFDN0IseUJBQUE7RUFBMkIsV0FBQTtFQUNELG1CQUFBO0VBQzFCLHNCQUFBO0VBQXdCLDRCQUFBO0VBQ0QsMkJBQUE7RUFDdkIsaUJBQUE7RUFBbUIsaUZBQUE7QURnRHJCO0FDOUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QURpREY7QUMvQ0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwrR0FBQTtFQUNBLDhCQUFBO0VBQWdDLE9BQUE7RUFDaEMsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGtDQUFBO0FEa0RKO0FDaERFO0VBQ0UsZUFBQTtFQUNBLGNDeENRO0FGMEZaIiwiZmlsZSI6InNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9sZXZlbGluZy9sZXZlbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hpbW1lclRleHQge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00cmVtIHRvcDsgLyo1MHB4Ki9cclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMi41cmVtIHRvcDsgLyoyMDBweCovXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyLjVyZW0gdG9wOyAvKjIwMHB4Ki9cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuIiwiQGtleWZyYW1lcyBwbGFjZWhvbGRlclNoaW1tZXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGltbWVyVGV4dCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNHJlbSB0b3A7XG4gICAgLyo1MHB4Ki9cbiAgfVxuICA3MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyLjVyZW0gdG9wO1xuICAgIC8qMjAwcHgqL1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyLjVyZW0gdG9wO1xuICAgIC8qMjAwcHgqL1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSByb3RhdGUoNzIwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5IHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXG59XG5cbi5sZXZlbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxldmVsLWNvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzRlNTRjOCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMTAwJSAwLCAwIDAsIGZyb20oIzRlNTRjOCksIGNvbG9yLXN0b3AoMC41LCAjZmZmZmZmKSwgdG8oIzRlNTRjOCkpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNHJlbSB0b3A7XG4gIC8qNTBweCovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXJUZXh0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDIuMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRyZW0gMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hpbW1lclRleHQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjJzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogNHJlbSAxMDAlO1xufVxuLmxldmVsLWNvbnRhaW5lciBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM0ZTU0Yzg7XG59IiwiQGltcG9ydCBcIn5zcmMvdGhlbWUvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3RoZW1lL2FuaW1hdGlvbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xyXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5IHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXHJcbn1cclxuLmxldmVsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8gY29sb3I6IHdoaXRlO1xyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbi1ibHVlIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAxMDAlIDAsIDAgMCwgZnJvbSgkbWFpbi1ibHVlKSwgY29sb3Itc3RvcCgwLjUsICNmZmZmZmYpLCB0bygkbWFpbi1ibHVlKSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNHJlbSB0b3A7IC8qNTBweCovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoaW1tZXJUZXh0O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjJzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDRyZW0gMTAwJTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hpbW1lclRleHQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMi4ycztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogNHJlbSAxMDAlO1xyXG4gIH1cclxuICBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogJG1haW4tYmx1ZTtcclxuICB9XHJcbn1cclxuIiwiJG1haW4tYmx1ZTogIzRlNTRjODtcclxuJHNwbGFzaC1iZzogI2RlZTJlNjtcclxuIl19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('levelUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 1,
          display: 'flex'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 0,
          display: 'none'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 <=> 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          display: 'flex'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LevelingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'leveling-component',
          templateUrl: './leveling.component.html',
          styleUrls: ['./leveling.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('levelUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            display: 'flex'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            display: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 <=> 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'flex'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease')])])]
        }]
      }], null, {
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['level']
        }],
        levelUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['@levelUp']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/@core/components/scoring/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/@core/components/scoring/index.ts ***!
    \***************************************************/

  /*! exports provided: ScoringComponent */

  /***/
  function srcAppCoreComponentsScoringIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _scoring_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./scoring.component */
    "./src/app/@core/components/scoring/scoring.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScoringComponent", function () {
      return _scoring_component__WEBPACK_IMPORTED_MODULE_0__["ScoringComponent"];
    });
    /***/

  },

  /***/
  "./src/app/@core/components/scoring/scoring.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/@core/components/scoring/scoring.component.ts ***!
    \***************************************************************/

  /*! exports provided: ScoringComponent */

  /***/
  function srcAppCoreComponentsScoringScoringComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoringComponent", function () {
      return ScoringComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/@core/services */
    "./src/app/@core/services/index.ts");

    var ScoringComponent = function ScoringComponent(score) {
      _classCallCheck(this, ScoringComponent);

      this.score = score;
    };

    ScoringComponent.ɵfac = function ScoringComponent_Factory(t) {
      return new (t || ScoringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_1__["Score"]));
    };

    ScoringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScoringComponent,
      selectors: [["scoring-component"]],
      decls: 2,
      vars: 3,
      consts: [[1, "score"]],
      template: function ScoringComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Score: ", ctx.score.score, "|", ctx.score.highestScore, "|", ctx.score.isHighest, "");
        }
      },
      styles: [".score[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 0.5em 1em;\n  color: white;\n  font-weight: bold;\n  -webkit-touch-callout: none;\n  \n  -webkit-user-select: none;\n  \n  \n  -moz-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9zY29yaW5nL0M6XFxVc2Vyc1xcaXJpbmdcXHdvcmtcXHNwYWNlLXNob290ZXIvc3JjXFxhcHBcXEBjb3JlXFxjb21wb25lbnRzXFxzY29yaW5nXFxzY29yaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9AY29yZS9jb21wb25lbnRzL3Njb3Jpbmcvc2NvcmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQTZCLGVBQUE7RUFDN0IseUJBQUE7RUFBMkIsV0FBQTtFQUNELG1CQUFBO0VBQzFCLHNCQUFBO0VBQXdCLDRCQUFBO0VBQ0QsMkJBQUE7RUFDdkIsaUJBQUE7RUFBbUIsaUZBQUE7QUNPckIiLCJmaWxlIjoic3JjL2FwcC9AY29yZS9jb21wb25lbnRzL3Njb3Jpbmcvc2NvcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW46IDAuNWVtIDFlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHkgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cclxufVxyXG4iLCIuc2NvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMC41ZW0gMWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5IHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'scoring-component',
          templateUrl: './scoring.component.html',
          styleUrls: ['./scoring.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services__WEBPACK_IMPORTED_MODULE_1__["Score"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/components/splash/index.ts":
  /*!**************************************************!*\
    !*** ./src/app/@core/components/splash/index.ts ***!
    \**************************************************/

  /*! exports provided: SplashComponent */

  /***/
  function srcAppCoreComponentsSplashIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _splash_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./splash.component */
    "./src/app/@core/components/splash/splash.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashComponent", function () {
      return _splash_component__WEBPACK_IMPORTED_MODULE_0__["SplashComponent"];
    });
    /***/

  },

  /***/
  "./src/app/@core/components/splash/splash.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/@core/components/splash/splash.component.ts ***!
    \*************************************************************/

  /*! exports provided: SplashComponent */

  /***/
  function srcAppCoreComponentsSplashSplashComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashComponent", function () {
      return SplashComponent;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SplashComponent = function SplashComponent() {
      _classCallCheck(this, SplashComponent);
    };

    SplashComponent.ɵfac = function SplashComponent_Factory(t) {
      return new (t || SplashComponent)();
    };

    SplashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SplashComponent,
      selectors: [["splash-component"]],
      hostVars: 1,
      hostBindings: function SplashComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵupdateSyntheticHostBinding"]("@isLoading", ctx.isLoading);
        }
      },
      inputs: {
        isLoading: "isLoading"
      },
      decls: 9,
      vars: 0,
      consts: [[1, "multi-spinner-container"], [1, "multi-spinner"]],
      template: function SplashComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Loading ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["@-webkit-keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@-webkit-keyframes shimmerText {\n  0% {\n    background-position: -4rem top;\n    \n  }\n  70% {\n    background-position: 12.5rem top;\n    \n  }\n  100% {\n    background-position: 12.5rem top;\n    \n  }\n}\n@keyframes shimmerText {\n  0% {\n    background-position: -4rem top;\n    \n  }\n  70% {\n    background-position: 12.5rem top;\n    \n  }\n  100% {\n    background-position: 12.5rem top;\n    \n  }\n}\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n@keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n[_nghost-%COMP%] {\n  position: absolute;\n  background: #dee2e6;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  color: #4e54c8;\n}\n\n.multi-spinner-container[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  margin: 30px auto;\n  overflow: hidden;\n}\n.multi-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  width: calc(100% - 9.9px);\n  height: calc(100% - 9.9px);\n  border: 5px solid transparent;\n  border-top-color: #4e54c8;\n  border-radius: 50%;\n  -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;\n  animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9zcGxhc2gvQzpcXFVzZXJzXFxpcmluZ1xcd29ya1xcc3BhY2Utc2hvb3Rlci9zcmNcXHRoZW1lXFxfYW5pbWF0aW9ucy5zY3NzIiwic3JjL2FwcC9AY29yZS9jb21wb25lbnRzL3NwbGFzaC9zcGxhc2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Bjb3JlL2NvbXBvbmVudHMvc3BsYXNoL0M6XFxVc2Vyc1xcaXJpbmdcXHdvcmtcXHNwYWNlLXNob290ZXIvc3JjXFxhcHBcXEBjb3JlXFxjb21wb25lbnRzXFxzcGxhc2hcXHNwbGFzaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQGNvcmUvY29tcG9uZW50cy9zcGxhc2gvQzpcXFVzZXJzXFxpcmluZ1xcd29ya1xcc3BhY2Utc2hvb3Rlci9zcmNcXHRoZW1lXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDZCQUFBO0VDQ0Y7RURFQTtJQUNFLDRCQUFBO0VDQUY7QUFDRjtBRFBBO0VBQ0U7SUFDRSw2QkFBQTtFQ0NGO0VERUE7SUFDRSw0QkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFO0lBQ0UsOEJBQUE7SUFBZ0MsT0FBQTtFQ0FsQztFREdBO0lBQ0UsZ0NBQUE7SUFBa0MsUUFBQTtFQ0FwQztFREdBO0lBQ0UsZ0NBQUE7SUFBa0MsUUFBQTtFQ0FwQztBQUNGO0FEWEE7RUFDRTtJQUNFLDhCQUFBO0lBQWdDLE9BQUE7RUNBbEM7RURHQTtJQUNFLGdDQUFBO0lBQWtDLFFBQUE7RUNBcEM7RURHQTtJQUNFLGdDQUFBO0lBQWtDLFFBQUE7RUNBcEM7QUFDRjtBREdBO0VBQ0U7SUFFRSx1QkFBQTtFQ0RGO0VER0E7SUFFRSx5QkFBQTtFQ0RGO0FBQ0Y7QURQQTtFQUNFO0lBRUUsdUJBQUE7RUNERjtFREdBO0lBRUUseUJBQUE7RUNERjtBQUNGO0FESUE7RUFDRTtJQUNFLHFDQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VDRkY7RURLQTtJQUNFLDZDQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDSEY7QUFDRjtBRFJBO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQ0ZGO0VES0E7SUFDRSw2Q0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ0hGO0FBQ0Y7QUN4Q0E7RUFDRSxrQkFBQTtFQUNBLG1CQ0pVO0VES1YsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0NmVTtBRnlEWjtBQ3ZDQSxrQkFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUR5Q0Y7QUN0Q0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQ2pDVTtFRGtDVixrQkFBQTtFQUNBLHdFQUFBO0VBQ0EsZ0VBQUE7QUR5Q0YiLCJmaWxlIjoic3JjL2FwcC9AY29yZS9jb21wb25lbnRzL3NwbGFzaC9zcGxhc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHBsYWNlaG9sZGVyU2hpbW1lciB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoaW1tZXJUZXh0IHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNHJlbSB0b3A7IC8qNTBweCovXHJcbiAgfVxyXG5cclxuICA3MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTIuNXJlbSB0b3A7IC8qMjAwcHgqL1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMi41cmVtIHRvcDsgLyoyMDBweCovXHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSByb3RhdGUoNzIwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcbiIsIkBrZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hpbW1lclRleHQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTRyZW0gdG9wO1xuICAgIC8qNTBweCovXG4gIH1cbiAgNzAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMi41cmVtIHRvcDtcbiAgICAvKjIwMHB4Ki9cbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMi41cmVtIHRvcDtcbiAgICAvKjIwMHB4Ki9cbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgcm90YXRlKDcyMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cbjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZGVlMmU2O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogIzRlNTRjODtcbn1cblxuLyogTVVMVEkgU1BJTk5FUiAqL1xuLm11bHRpLXNwaW5uZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubXVsdGktc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkuOXB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5LjlweCk7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiAjNGU1NGM4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDVzIGN1YmljLWJlemllcigwLjE3LCAwLjQ5LCAwLjk2LCAwLjc2KSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDVzIGN1YmljLWJlemllcigwLjE3LCAwLjQ5LCAwLjk2LCAwLjc2KSBpbmZpbml0ZTtcbn0iLCJAaW1wb3J0IFwifnNyYy90aGVtZS92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIn5zcmMvdGhlbWUvYW5pbWF0aW9uc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiAkc3BsYXNoLWJnO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAkbWFpbi1ibHVlO1xyXG59XHJcblxyXG4vKiBNVUxUSSBTUElOTkVSICovXHJcblxyXG4ubXVsdGktc3Bpbm5lci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubXVsdGktc3Bpbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA5LjlweCk7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5LjlweCk7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogJG1haW4tYmx1ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuNDksIDAuOTYsIDAuNzYpIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiA1cyBjdWJpYy1iZXppZXIoMC4xNywgMC40OSwgMC45NiwgMC43NikgaW5maW5pdGU7XHJcbn1cclxuIiwiJG1haW4tYmx1ZTogIzRlNTRjODtcclxuJHNwbGFzaC1iZzogI2RlZTJlNjtcclxuIl19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('isLoading', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 1,
          display: 'flex'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 0,
          display: 'none'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 <=> 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          display: 'flex'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SplashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'splash-component',
          templateUrl: './splash.component.html',
          styleUrls: ['./splash.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('isLoading', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            display: 'flex'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            display: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 <=> 1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'flex'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease')])])]
        }]
      }], null, {
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['@isLoading']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/@core/constants/constants.ts":
  /*!**********************************************!*\
    !*** ./src/app/@core/constants/constants.ts ***!
    \**********************************************/

  /*! exports provided: GAME_WIDTH, GAME_HEIGHT, SCORE_STORAGE_PATH */

  /***/
  function srcAppCoreConstantsConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GAME_WIDTH", function () {
      return GAME_WIDTH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GAME_HEIGHT", function () {
      return GAME_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCORE_STORAGE_PATH", function () {
      return SCORE_STORAGE_PATH;
    });

    var GAME_WIDTH = 800;
    var GAME_HEIGHT = 600;
    var SCORE_STORAGE_PATH = 'SCOREING';
    /***/
  },

  /***/
  "./src/app/@core/constants/game.config.ts":
  /*!************************************************!*\
    !*** ./src/app/@core/constants/game.config.ts ***!
    \************************************************/

  /*! exports provided: EventType, GAME_CONFIG */

  /***/
  function srcAppCoreConstantsGameConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventType", function () {
      return EventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GAME_CONFIG", function () {
      return GAME_CONFIG;
    });

    var EventType;

    (function (EventType) {
      EventType["ADD_RANDOM_KAMIKAZE_SHIP"] = "ADD_RANDOM_KAMIKAZE_SHIP";
      EventType["ADD_RANDOM_SHOOTER_SHIP"] = "ADD_RANDOM_SHOOTER_SHIP";
      EventType["ADD_FOLLOW_KAMIKAZE_SHIP"] = "ADD_FOLLOW_KAMIKAZE_SHIP";
      EventType["ADD_FOLLOW_SHOOTER_SHIP"] = "ADD_FOLLOW_SHOOTER_SHIP";
    })(EventType || (EventType = {}));

    var GAME_CONFIG = [[{
      timeout: 2000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }], [{
      timeout: 2000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 1000,
      type: EventType.ADD_RANDOM_SHOOTER_SHIP
    }, {
      timeout: 3000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 1000,
      type: EventType.ADD_RANDOM_SHOOTER_SHIP
    }, {
      timeout: 3000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }], [{
      timeout: 2000,
      type: EventType.ADD_FOLLOW_KAMIKAZE_SHIP
    }, {
      timeout: 3000,
      type: EventType.ADD_RANDOM_SHOOTER_SHIP
    }, {
      timeout: 3000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 1000,
      type: EventType.ADD_RANDOM_SHOOTER_SHIP
    }, {
      timeout: 3000,
      type: EventType.ADD_FOLLOW_KAMIKAZE_SHIP
    }], [{
      timeout: 1000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 3000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_KAMIKAZE_SHIP
    }], [{
      timeout: 1000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 3000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_RANDOM_KAMIKAZE_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }], [{
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_KAMIKAZE_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_KAMIKAZE_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }], [{
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 2000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }], [{
      timeout: 1500,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 1500,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 1500,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 1500,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 1500,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }], [{
      timeout: 1000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 1000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 1000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 1000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }, {
      timeout: 1000,
      type: EventType.ADD_FOLLOW_SHOOTER_SHIP
    }]];
    /***/
  },

  /***/
  "./src/app/@core/constants/index.ts":
  /*!******************************************!*\
    !*** ./src/app/@core/constants/index.ts ***!
    \******************************************/

  /*! exports provided: GAME_WIDTH, GAME_HEIGHT, SCORE_STORAGE_PATH, EventType, GAME_CONFIG */

  /***/
  function srcAppCoreConstantsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constants */
    "./src/app/@core/constants/constants.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GAME_WIDTH", function () {
      return _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GAME_HEIGHT", function () {
      return _constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SCORE_STORAGE_PATH", function () {
      return _constants__WEBPACK_IMPORTED_MODULE_0__["SCORE_STORAGE_PATH"];
    });
    /* harmony import */


    var _game_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./game.config */
    "./src/app/@core/constants/game.config.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventType", function () {
      return _game_config__WEBPACK_IMPORTED_MODULE_1__["EventType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GAME_CONFIG", function () {
      return _game_config__WEBPACK_IMPORTED_MODULE_1__["GAME_CONFIG"];
    });
    /***/

  },

  /***/
  "./src/app/@core/controls/ai/ai-follow-shooter.control.ts":
  /*!****************************************************************!*\
    !*** ./src/app/@core/controls/ai/ai-follow-shooter.control.ts ***!
    \****************************************************************/

  /*! exports provided: AiFollowShooterControls */

  /***/
  function srcAppCoreControlsAiAiFollowShooterControlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AiFollowShooterControls", function () {
      return AiFollowShooterControls;
    });
    /* harmony import */


    var _ai_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ai.control */
    "./src/app/@core/controls/ai/ai.control.ts");

    var AiFollowShooterControls = /*#__PURE__*/function (_ai_control__WEBPACK_) {
      _inherits(AiFollowShooterControls, _ai_control__WEBPACK_);

      var _super = _createSuper(AiFollowShooterControls);

      function AiFollowShooterControls(target, aimList, seed) {
        var _this2;

        _classCallCheck(this, AiFollowShooterControls);

        _this2 = _super.call(this, seed);
        _this2.target = target;
        _this2.aimList = aimList;
        _this2.seed = seed;
        _this2.lastAngle = 0;
        _this2.cooldownEnds = 0;
        _this2.aim = {
          parent: null,
          position: target.position
        };
        return _this2;
      }

      _createClass(AiFollowShooterControls, [{
        key: "update",
        value: function update(delta) {
          var now = Date.now();

          if (this.shouldGetNewAim(this.aim)) {
            this.aim = this.getNewAim();
          }

          if (this.aim.parent) {
            if (Math.abs(this.lastAngle - this.target.rotation) < 0.01 && now > this.cooldownEnds) {
              this.target.shoot();
              this.cooldownEnds = now + 1000;
            }

            this.lastAngle = this.target.rotation;
          }

          var _this$aim$position = this.aim.position,
              x = _this$aim$position.x,
              y = _this$aim$position.y;
          this.target.move(delta, {
            x: x,
            y: y
          });
        }
      }, {
        key: "getNewAim",
        value: function getNewAim() {
          var _this3 = this;

          var array = this.aimList.filter(function (child) {
            return !!child.parent && child !== _this3.target;
          });
          if (array.length === 0) return _get(_getPrototypeOf(AiFollowShooterControls.prototype), "getNewAim", this).call(this);
          return array[this.random.nextInt() % array.length];
        }
      }]);

      return AiFollowShooterControls;
    }(_ai_control__WEBPACK_IMPORTED_MODULE_0__["AiControl"]);
    /***/

  },

  /***/
  "./src/app/@core/controls/ai/ai-follow.control.ts":
  /*!********************************************************!*\
    !*** ./src/app/@core/controls/ai/ai-follow.control.ts ***!
    \********************************************************/

  /*! exports provided: AiFollowControls */

  /***/
  function srcAppCoreControlsAiAiFollowControlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AiFollowControls", function () {
      return AiFollowControls;
    });
    /* harmony import */


    var _ai_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ai.control */
    "./src/app/@core/controls/ai/ai.control.ts");

    var AiFollowControls = /*#__PURE__*/function (_ai_control__WEBPACK_2) {
      _inherits(AiFollowControls, _ai_control__WEBPACK_2);

      var _super2 = _createSuper(AiFollowControls);

      function AiFollowControls(target, aimList, seed) {
        var _this4;

        _classCallCheck(this, AiFollowControls);

        _this4 = _super2.call(this, seed);
        _this4.target = target;
        _this4.aimList = aimList;
        _this4.seed = seed;
        _this4.aim = {
          parent: null,
          position: target.position
        };
        return _this4;
      }

      _createClass(AiFollowControls, [{
        key: "update",
        value: function update(delta) {
          if (this.shouldGetNewAim(this.aim)) {
            this.aim = this.getNewAim();
          }

          var _this$aim$position2 = this.aim.position,
              x = _this$aim$position2.x,
              y = _this$aim$position2.y;
          this.target.move(delta, {
            x: x,
            y: y
          });
        }
      }, {
        key: "cleanup",
        value: function cleanup() {
          /** @empty */
        }
      }, {
        key: "getNewAim",
        value: function getNewAim() {
          var _this5 = this;

          var array = this.aimList.filter(function (child) {
            return !!child.parent && child !== _this5.target;
          });
          if (array.length === 0) return _get(_getPrototypeOf(AiFollowControls.prototype), "getNewAim", this).call(this);
          return array[this.random.nextInt() % array.length];
        }
      }]);

      return AiFollowControls;
    }(_ai_control__WEBPACK_IMPORTED_MODULE_0__["AiControl"]);
    /***/

  },

  /***/
  "./src/app/@core/controls/ai/ai-random-shooter.control.ts":
  /*!****************************************************************!*\
    !*** ./src/app/@core/controls/ai/ai-random-shooter.control.ts ***!
    \****************************************************************/

  /*! exports provided: AiRandomShooterControls */

  /***/
  function srcAppCoreControlsAiAiRandomShooterControlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AiRandomShooterControls", function () {
      return AiRandomShooterControls;
    });
    /* harmony import */


    var _ai_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ai.control */
    "./src/app/@core/controls/ai/ai.control.ts");

    var AiRandomShooterControls = /*#__PURE__*/function (_ai_control__WEBPACK_3) {
      _inherits(AiRandomShooterControls, _ai_control__WEBPACK_3);

      var _super3 = _createSuper(AiRandomShooterControls);

      function AiRandomShooterControls(target, seed) {
        var _this6;

        _classCallCheck(this, AiRandomShooterControls);

        _this6 = _super3.call(this, seed);
        _this6.target = target;
        _this6.seed = seed;
        _this6.lastAngle = 0;
        _this6.cooldownEnds = 0;
        _this6.aim = _this6.getNewAim();
        return _this6;
      }

      _createClass(AiRandomShooterControls, [{
        key: "update",
        value: function update(delta) {
          var now = Date.now();

          if (this.shouldGetNewAim(this.aim)) {
            this.aim = this.getNewAim();
          }

          if (Math.abs(this.lastAngle - this.target.rotation) < 0.01 && now > this.cooldownEnds) {
            this.target.shoot();
            this.cooldownEnds = now + 1000;
          }

          this.lastAngle = this.target.rotation;
          var _this$aim$position3 = this.aim.position,
              x = _this$aim$position3.x,
              y = _this$aim$position3.y;
          this.target.move(delta, {
            x: x,
            y: y
          });
        }
      }]);

      return AiRandomShooterControls;
    }(_ai_control__WEBPACK_IMPORTED_MODULE_0__["AiControl"]);
    /***/

  },

  /***/
  "./src/app/@core/controls/ai/ai-random.control.ts":
  /*!********************************************************!*\
    !*** ./src/app/@core/controls/ai/ai-random.control.ts ***!
    \********************************************************/

  /*! exports provided: AiRandomControls */

  /***/
  function srcAppCoreControlsAiAiRandomControlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AiRandomControls", function () {
      return AiRandomControls;
    });
    /* harmony import */


    var _ai_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ai.control */
    "./src/app/@core/controls/ai/ai.control.ts");

    var AiRandomControls = /*#__PURE__*/function (_ai_control__WEBPACK_4) {
      _inherits(AiRandomControls, _ai_control__WEBPACK_4);

      var _super4 = _createSuper(AiRandomControls);

      function AiRandomControls(target, seed) {
        var _this7;

        _classCallCheck(this, AiRandomControls);

        _this7 = _super4.call(this, seed);
        _this7.target = target;
        _this7.seed = seed;
        _this7.aim = _this7.getNewAim();
        return _this7;
      }

      _createClass(AiRandomControls, [{
        key: "update",
        value: function update(delta) {
          if (this.shouldGetNewAim(this.aim)) {
            this.aim = this.getNewAim();
          }

          var _this$aim$position4 = this.aim.position,
              x = _this$aim$position4.x,
              y = _this$aim$position4.y;
          this.target.move(delta, {
            x: x,
            y: y
          });
        }
      }]);

      return AiRandomControls;
    }(_ai_control__WEBPACK_IMPORTED_MODULE_0__["AiControl"]);
    /***/

  },

  /***/
  "./src/app/@core/controls/ai/ai.control.ts":
  /*!*************************************************!*\
    !*** ./src/app/@core/controls/ai/ai.control.ts ***!
    \*************************************************/

  /*! exports provided: AiControl */

  /***/
  function srcAppCoreControlsAiAiControlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AiControl", function () {
      return AiControl;
    });
    /* harmony import */


    var src_app_core_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/@core/constants */
    "./src/app/@core/constants/index.ts");
    /* harmony import */


    var src_app_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/@core/utils */
    "./src/app/@core/utils/index.ts");
    /* harmony import */


    var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../control */
    "./src/app/@core/controls/control.ts");

    var AiControl = /*#__PURE__*/function (_control__WEBPACK_IMP) {
      _inherits(AiControl, _control__WEBPACK_IMP);

      var _super5 = _createSuper(AiControl);

      function AiControl(seed) {
        var _this8;

        _classCallCheck(this, AiControl);

        _this8 = _super5.call(this);
        _this8.seed = seed;
        _this8.random = new src_app_core_utils__WEBPACK_IMPORTED_MODULE_1__["Random"](_this8.seed);
        return _this8;
      }

      _createClass(AiControl, [{
        key: "cleanup",
        value: function cleanup() {
          /** @empty */
        }
      }, {
        key: "shouldGetNewAim",
        value: function shouldGetNewAim(aim) {
          var dist = Math.sqrt(Math.pow(this.target.position.x - aim.position.x, 2) + Math.pow(this.target.position.y - aim.position.y, 2));
          return dist < 5;
        }
      }, {
        key: "getNewAim",
        value: function getNewAim() {
          return {
            parent: null,
            position: {
              x: this.random.nextInt() % src_app_core_constants__WEBPACK_IMPORTED_MODULE_0__["GAME_WIDTH"],
              y: this.random.nextInt() % src_app_core_constants__WEBPACK_IMPORTED_MODULE_0__["GAME_HEIGHT"]
            }
          };
        }
      }]);

      return AiControl;
    }(_control__WEBPACK_IMPORTED_MODULE_2__["Control"]);
    /***/

  },

  /***/
  "./src/app/@core/controls/ai/index.ts":
  /*!********************************************!*\
    !*** ./src/app/@core/controls/ai/index.ts ***!
    \********************************************/

  /*! exports provided: AiControl, AiFollowControls, AiFollowShooterControls, AiRandomControls, AiRandomShooterControls */

  /***/
  function srcAppCoreControlsAiIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ai_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ai.control */
    "./src/app/@core/controls/ai/ai.control.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AiControl", function () {
      return _ai_control__WEBPACK_IMPORTED_MODULE_0__["AiControl"];
    });
    /* harmony import */


    var _ai_follow_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ai-follow.control */
    "./src/app/@core/controls/ai/ai-follow.control.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AiFollowControls", function () {
      return _ai_follow_control__WEBPACK_IMPORTED_MODULE_1__["AiFollowControls"];
    });
    /* harmony import */


    var _ai_follow_shooter_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ai-follow-shooter.control */
    "./src/app/@core/controls/ai/ai-follow-shooter.control.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AiFollowShooterControls", function () {
      return _ai_follow_shooter_control__WEBPACK_IMPORTED_MODULE_2__["AiFollowShooterControls"];
    });
    /* harmony import */


    var _ai_random_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ai-random.control */
    "./src/app/@core/controls/ai/ai-random.control.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AiRandomControls", function () {
      return _ai_random_control__WEBPACK_IMPORTED_MODULE_3__["AiRandomControls"];
    });
    /* harmony import */


    var _ai_random_shooter_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ai-random-shooter.control */
    "./src/app/@core/controls/ai/ai-random-shooter.control.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AiRandomShooterControls", function () {
      return _ai_random_shooter_control__WEBPACK_IMPORTED_MODULE_4__["AiRandomShooterControls"];
    });
    /***/

  },

  /***/
  "./src/app/@core/controls/control.ts":
  /*!*******************************************!*\
    !*** ./src/app/@core/controls/control.ts ***!
    \*******************************************/

  /*! exports provided: Control, ControlFactory */

  /***/
  function srcAppCoreControlsControlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Control", function () {
      return Control;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlFactory", function () {
      return ControlFactory;
    });

    var Control = function Control() {
      _classCallCheck(this, Control);
    };

    function ControlFactory(klass) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return function (target) {
        return _construct(klass, [target].concat(args));
      };
    }
    /***/

  },

  /***/
  "./src/app/@core/controls/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/@core/controls/index.ts ***!
    \*****************************************/

  /*! exports provided: PlayerControls, Control, ControlFactory, AiControl, AiFollowControls, AiFollowShooterControls, AiRandomControls, AiRandomShooterControls */

  /***/
  function srcAppCoreControlsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./player */
    "./src/app/@core/controls/player/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlayerControls", function () {
      return _player__WEBPACK_IMPORTED_MODULE_0__["PlayerControls"];
    });
    /* harmony import */


    var _control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./control */
    "./src/app/@core/controls/control.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Control", function () {
      return _control__WEBPACK_IMPORTED_MODULE_1__["Control"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ControlFactory", function () {
      return _control__WEBPACK_IMPORTED_MODULE_1__["ControlFactory"];
    });
    /* harmony import */


    var _ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ai */
    "./src/app/@core/controls/ai/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AiControl", function () {
      return _ai__WEBPACK_IMPORTED_MODULE_2__["AiControl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AiFollowControls", function () {
      return _ai__WEBPACK_IMPORTED_MODULE_2__["AiFollowControls"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AiFollowShooterControls", function () {
      return _ai__WEBPACK_IMPORTED_MODULE_2__["AiFollowShooterControls"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AiRandomControls", function () {
      return _ai__WEBPACK_IMPORTED_MODULE_2__["AiRandomControls"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AiRandomShooterControls", function () {
      return _ai__WEBPACK_IMPORTED_MODULE_2__["AiRandomShooterControls"];
    });
    /***/

  },

  /***/
  "./src/app/@core/controls/player/index.ts":
  /*!************************************************!*\
    !*** ./src/app/@core/controls/player/index.ts ***!
    \************************************************/

  /*! exports provided: PlayerControls */

  /***/
  function srcAppCoreControlsPlayerIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _player_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./player.control */
    "./src/app/@core/controls/player/player.control.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlayerControls", function () {
      return _player_control__WEBPACK_IMPORTED_MODULE_0__["PlayerControls"];
    });
    /***/

  },

  /***/
  "./src/app/@core/controls/player/player.control.ts":
  /*!*********************************************************!*\
    !*** ./src/app/@core/controls/player/player.control.ts ***!
    \*********************************************************/

  /*! exports provided: PlayerControls */

  /***/
  function srcAppCoreControlsPlayerPlayerControlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerControls", function () {
      return PlayerControls;
    });
    /* harmony import */


    var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../control */
    "./src/app/@core/controls/control.ts");

    var PlayerControls = /*#__PURE__*/function (_control__WEBPACK_IMP2) {
      _inherits(PlayerControls, _control__WEBPACK_IMP2);

      var _super6 = _createSuper(PlayerControls);

      function PlayerControls(target) {
        var _this9;

        _classCallCheck(this, PlayerControls);

        _this9 = _super6.call(this);
        _this9.target = target;

        _this9._onClick = function () {
          return _this9.target.shoot();
        };

        document.addEventListener('click', _this9._onClick);
        return _this9;
      }

      _createClass(PlayerControls, [{
        key: "update",
        value: function update(delta, mouse) {
          this.target.move(delta, mouse);
        }
      }, {
        key: "cleanup",
        value: function cleanup() {
          document.removeEventListener('click', this._onClick);
        }
      }]);

      return PlayerControls;
    }(_control__WEBPACK_IMPORTED_MODULE_0__["Control"]);
    /***/

  },

  /***/
  "./src/app/@core/models/background.ts":
  /*!********************************************!*\
    !*** ./src/app/@core/models/background.ts ***!
    \********************************************/

  /*! exports provided: Background */

  /***/
  function srcAppCoreModelsBackgroundTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Background", function () {
      return Background;
    });
    /* harmony import */


    var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @pixi/display */
    "./node_modules/@pixi/display/dist/esm/display.js");
    /* harmony import */


    var _pixi_sprite_tiling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @pixi/sprite-tiling */
    "./node_modules/@pixi/sprite-tiling/dist/esm/sprite-tiling.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants */
    "./src/app/@core/constants/index.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../utils */
    "./src/app/@core/utils/index.ts");

    var BackgroundLayer = /*#__PURE__*/function (_pixi_sprite_tiling__) {
      _inherits(BackgroundLayer, _pixi_sprite_tiling__);

      var _super7 = _createSuper(BackgroundLayer);

      function BackgroundLayer(texture, coefficient) {
        var _this10;

        _classCallCheck(this, BackgroundLayer);

        _this10 = _super7.call(this, texture, _constants__WEBPACK_IMPORTED_MODULE_2__["GAME_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_2__["GAME_HEIGHT"]);
        _this10.coefficient = coefficient;

        _this10.position.set(0, 0);

        return _this10;
      }

      _createClass(BackgroundLayer, [{
        key: "update",
        value: function update(delta) {
          this.tilePosition.x -= delta * this.coefficient;
        }
      }]);

      return BackgroundLayer;
    }(_pixi_sprite_tiling__WEBPACK_IMPORTED_MODULE_1__["TilingSprite"]);

    var Background = /*#__PURE__*/function (_pixi_display__WEBPAC) {
      _inherits(Background, _pixi_display__WEBPAC);

      var _super8 = _createSuper(Background);

      function Background(seed) {
        var _this12;

        var _this11;

        _classCallCheck(this, Background);

        _this11 = _super8.call(this);
        _this11.seed = seed;
        _this11.random = new _utils__WEBPACK_IMPORTED_MODULE_3__["Random"](_this11.seed);

        for (var _len2 = arguments.length, textures = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          textures[_key2 - 1] = arguments[_key2];
        }

        (_this12 = _this11).addChild.apply(_this12, _toConsumableArray(textures.map(function (texture, i) {
          var child = new BackgroundLayer(texture, 0.5 * (i + 1));
          child.tilePosition.set(_this11.random.next() * _constants__WEBPACK_IMPORTED_MODULE_2__["GAME_WIDTH"], _this11.random.next() * _constants__WEBPACK_IMPORTED_MODULE_2__["GAME_HEIGHT"]);
          return child;
        })));

        return _this11;
      }

      _createClass(Background, [{
        key: "zIndex",
        get: function get() {
          return 0;
        }
      }, {
        key: "update",
        value: function update(delta) {
          this.children.forEach(function (child) {
            return child.update(delta);
          });
        }
      }]);

      return Background;
    }(_pixi_display__WEBPACK_IMPORTED_MODULE_0__["Container"]);
    /***/

  },

  /***/
  "./src/app/@core/models/controlled-graphics.ts":
  /*!*****************************************************!*\
    !*** ./src/app/@core/models/controlled-graphics.ts ***!
    \*****************************************************/

  /*! exports provided: ControlledGraphics */

  /***/
  function srcAppCoreModelsControlledGraphicsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlledGraphics", function () {
      return ControlledGraphics;
    });
    /* harmony import */


    var _pixi_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @pixi/math */
    "./node_modules/@pixi/math/dist/esm/math.js");
    /* harmony import */


    var _dynamic_graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dynamic-graphics */
    "./src/app/@core/models/dynamic-graphics.ts");

    var ControlledGraphics = /*#__PURE__*/function (_dynamic_graphics__WE) {
      _inherits(ControlledGraphics, _dynamic_graphics__WE);

      var _super9 = _createSuper(ControlledGraphics);

      function ControlledGraphics(factory, graphics, options, control) {
        var _this13;

        _classCallCheck(this, ControlledGraphics);

        _this13 = _super9.call(this);
        _this13.factory = factory;
        _this13.graphics = graphics;
        _this13.options = options;
        _this13.onRemove = new Set();

        _this13.addChild(_this13.graphics);

        _this13.control = control(_assertThisInitialized(_this13));
        if (options.tint) _this13.graphics.tint = _this13.options.tint;

        _this13.graphics.scale.set(_this13.graphics.scale.x * _this13.options.scale);

        return _this13;
      }

      _createClass(ControlledGraphics, [{
        key: "zIndex",
        get: function get() {
          return 2;
        }
      }, {
        key: "update",
        value: function update(delta, mouse) {
          this.control.update(delta, mouse);
        }
      }, {
        key: "cleanup",
        value: function cleanup() {
          var parent = this.parent,
              _this$position = this.position,
              x = _this$position.x,
              y = _this$position.y;
          if (!parent) return;
          this.control.cleanup();

          var _iterator = _createForOfIteratorHelper(this.onRemove.values()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var cb = _step.value;
              cb();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var explosion = parent.addChild(this.factory.getExplosion(x, y));

          explosion.onComplete = function () {
            parent.removeChild(explosion);
          };
        }
      }, {
        key: "shoot",
        value: function shoot() {
          if (!this.parent) return;
          this.parent.addChild(this.factory.getProjectile(this));
        }
      }, {
        key: "move",
        value: function move(delta, target) {
          var step = new _pixi_math__WEBPACK_IMPORTED_MODULE_0__["Point"](Math.cos(this.rotation) * this.options.speed * delta, Math.sin(this.rotation) * this.options.speed * delta);
          this.position.x += step.x;
          this.position.y += step.y;
          var targetRotation = Math.atan2(target.y - this.position.y, target.x - this.position.x);
          var angle = Math.atan2(Math.sin(targetRotation - this.rotation), Math.cos(targetRotation - this.rotation));
          var prefix = angle / Math.abs(angle || 1);
          var rotation = prefix * Math.min(Math.abs(angle), this.options.angularSpeed);
          this.rotation = (this.rotation + rotation) % (Math.PI * 2);
        }
      }, {
        key: "isOutOfBounds",
        value: function isOutOfBounds() {
          return false;
        }
      }]);

      return ControlledGraphics;
    }(_dynamic_graphics__WEBPACK_IMPORTED_MODULE_1__["DynamicGraphics"]);
    /***/

  },

  /***/
  "./src/app/@core/models/dynamic-graphics.ts":
  /*!**************************************************!*\
    !*** ./src/app/@core/models/dynamic-graphics.ts ***!
    \**************************************************/

  /*! exports provided: DynamicGraphics */

  /***/
  function srcAppCoreModelsDynamicGraphicsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicGraphics", function () {
      return DynamicGraphics;
    });
    /* harmony import */


    var _pixi_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @pixi/display */
    "./node_modules/@pixi/display/dist/esm/display.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants */
    "./src/app/@core/constants/index.ts");

    var DynamicGraphics = /*#__PURE__*/function (_pixi_display__WEBPAC2) {
      _inherits(DynamicGraphics, _pixi_display__WEBPAC2);

      var _super10 = _createSuper(DynamicGraphics);

      function DynamicGraphics() {
        var _this14;

        var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Math.random().toString(36).substring(7);

        _classCallCheck(this, DynamicGraphics);

        _this14 = _super10.call(this);
        _this14.hash = hash;
        return _this14;
      }

      _createClass(DynamicGraphics, [{
        key: "isOutOfBounds",
        value: function isOutOfBounds() {
          return Math.abs(this.position.x - _constants__WEBPACK_IMPORTED_MODULE_1__["GAME_WIDTH"] / 2) > _constants__WEBPACK_IMPORTED_MODULE_1__["GAME_WIDTH"] / 2 || Math.abs(this.position.y - _constants__WEBPACK_IMPORTED_MODULE_1__["GAME_HEIGHT"] / 2) > _constants__WEBPACK_IMPORTED_MODULE_1__["GAME_HEIGHT"] / 2;
        }
      }, {
        key: "hitTest",
        value: function hitTest(other) {
          if (this.hash === other.hash) return false;
          var dist = Math.sqrt(Math.pow(this.position.x - other.position.x, 2) + Math.pow(this.position.y - other.position.y, 2));
          return dist < this.options.boundingRadius + other.options.boundingRadius;
        }
      }, {
        key: "cleanup",
        value: function cleanup() {
          /** @empty */
        }
      }]);

      return DynamicGraphics;
    }(_pixi_display__WEBPACK_IMPORTED_MODULE_0__["Container"]);
    /***/

  },

  /***/
  "./src/app/@core/models/explosion.ts":
  /*!*******************************************!*\
    !*** ./src/app/@core/models/explosion.ts ***!
    \*******************************************/

  /*! exports provided: Explosion */

  /***/
  function srcAppCoreModelsExplosionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Explosion", function () {
      return Explosion;
    });
    /* harmony import */


    var _pixi_sprite_animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @pixi/sprite-animated */
    "./node_modules/@pixi/sprite-animated/dist/esm/sprite-animated.js");

    var Explosion = /*#__PURE__*/function (_pixi_sprite_animated) {
      _inherits(Explosion, _pixi_sprite_animated);

      var _super11 = _createSuper(Explosion);

      function Explosion(textures, x, y) {
        var _this15;

        _classCallCheck(this, Explosion);

        _this15 = _super11.call(this, textures);
        _this15.loop = false;

        _this15.position.set(x, y);

        _this15.anchor.set(0.5, 0.5);

        _this15.rotation = Math.random() * Math.PI;

        _this15.scale.set(0.75 + Math.random() * 0.5);

        _this15.play();

        return _this15;
      }

      _createClass(Explosion, [{
        key: "zIndex",
        get: function get() {
          return 3;
        }
      }]);

      return Explosion;
    }(_pixi_sprite_animated__WEBPACK_IMPORTED_MODULE_0__["AnimatedSprite"]);
    /***/

  },

  /***/
  "./src/app/@core/models/index.ts":
  /*!***************************************!*\
    !*** ./src/app/@core/models/index.ts ***!
    \***************************************/

  /*! exports provided: Background, Ship, Explosion, Projectile */

  /***/
  function srcAppCoreModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./background */
    "./src/app/@core/models/background.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Background", function () {
      return _background__WEBPACK_IMPORTED_MODULE_0__["Background"];
    });
    /* harmony import */


    var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ship */
    "./src/app/@core/models/ship.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Ship", function () {
      return _ship__WEBPACK_IMPORTED_MODULE_1__["Ship"];
    });
    /* harmony import */


    var _explosion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./explosion */
    "./src/app/@core/models/explosion.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Explosion", function () {
      return _explosion__WEBPACK_IMPORTED_MODULE_2__["Explosion"];
    });
    /* harmony import */


    var _projectile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projectile */
    "./src/app/@core/models/projectile.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Projectile", function () {
      return _projectile__WEBPACK_IMPORTED_MODULE_3__["Projectile"];
    });
    /***/

  },

  /***/
  "./src/app/@core/models/projectile.ts":
  /*!********************************************!*\
    !*** ./src/app/@core/models/projectile.ts ***!
    \********************************************/

  /*! exports provided: Projectile */

  /***/
  function srcAppCoreModelsProjectileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Projectile", function () {
      return Projectile;
    });
    /* harmony import */


    var _pixi_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @pixi/constants */
    "./node_modules/@pixi/constants/dist/esm/constants.js");
    /* harmony import */


    var _pixi_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @pixi/math */
    "./node_modules/@pixi/math/dist/esm/math.js");
    /* harmony import */


    var _pixi_mesh_extras__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @pixi/mesh-extras */
    "./node_modules/@pixi/mesh-extras/dist/esm/mesh-extras.js");
    /* harmony import */


    var _dynamic_graphics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dynamic-graphics */
    "./src/app/@core/models/dynamic-graphics.ts");

    var Projectile = /*#__PURE__*/function (_dynamic_graphics__WE2) {
      _inherits(Projectile, _dynamic_graphics__WE2);

      var _super12 = _createSuper(Projectile);

      function Projectile(factory, owner, options, texture) {
        var _this16;

        _classCallCheck(this, Projectile);

        _this16 = _super12.call(this, owner.hash);
        _this16.factory = factory;
        _this16.owner = owner;
        _this16.options = options;
        _this16.blendmode = _pixi_constants__WEBPACK_IMPORTED_MODULE_0__["BLEND_MODES"].ADD;
        _this16.points = _toConsumableArray(Array(100)).map(function () {
          return new _pixi_math__WEBPACK_IMPORTED_MODULE_1__["Point"](-owner.position.x, -owner.position.y);
        });
        _this16.history = new Array(20).fill({
          x: owner.position.x,
          y: owner.position.y
        });
        _this16.rope = new _pixi_mesh_extras__WEBPACK_IMPORTED_MODULE_2__["SimpleRope"](texture, _this16.points);

        _this16.position.set(owner.position.x, owner.position.y);

        _this16.rotationAngle = owner.rotation;
        if (_this16.owner.options.tint) _this16.rope.tint = _this16.owner.options.tint;

        _this16.addChild(_this16.rope);

        return _this16;
      }

      _createClass(Projectile, [{
        key: "zIndex",
        get: function get() {
          return 1;
        }
      }, {
        key: "update",
        value: function update(delta) {
          var step = new _pixi_math__WEBPACK_IMPORTED_MODULE_1__["Point"](Math.cos(this.rotationAngle) * this.options.speed * delta, Math.sin(this.rotationAngle) * this.options.speed * delta);
          this.position.x += step.x;
          this.position.y += step.y;
          var _this$position2 = this.position,
              x = _this$position2.x,
              y = _this$position2.y;
          this.history.pop();
          this.history.unshift({
            x: x,
            y: y
          });

          for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
            var ix = this.cubicInterpolation(this.history.map(function (point) {
              return point.x;
            }), i / this.points.length * this.history.length) - this.position.x;
            var iy = this.cubicInterpolation(this.history.map(function (point) {
              return point.y;
            }), i / this.points.length * this.history.length) - this.position.y;
            point.x = ix;
            point.y = iy;
          }
        }
      }, {
        key: "cleanup",
        value: function cleanup() {
          var parent = this.parent,
              _this$position3 = this.position,
              x = _this$position3.x,
              y = _this$position3.y;
          if (!parent) return;
          var explosion = parent.addChild(this.factory.getExplosion(x, y));

          explosion.onComplete = function () {
            parent.removeChild(explosion);
          };
        }
      }, {
        key: "clipInput",
        value: function clipInput(k, arr) {
          if (k < 0) k = 0;
          if (k > arr.length - 1) k = arr.length - 1;
          return arr[k];
        }
      }, {
        key: "getTangent",
        value: function getTangent(k, factor, array) {
          return factor * (this.clipInput(k + 1, array) - this.clipInput(k - 1, array)) / 2;
        }
      }, {
        key: "cubicInterpolation",
        value: function cubicInterpolation(array, t) {
          var tangentFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var k = Math.floor(t);
          var m = [this.getTangent(k, tangentFactor, array), this.getTangent(k + 1, tangentFactor, array)];
          var p = [this.clipInput(k, array), this.clipInput(k + 1, array)];
          t -= k;
          var t2 = t * t;
          var t3 = t * t2;
          return (2 * t3 - 3 * t2 + 1) * p[0] + (t3 - 2 * t2 + t) * m[0] + (-2 * t3 + 3 * t2) * p[1] + (t3 - t2) * m[1];
        }
      }]);

      return Projectile;
    }(_dynamic_graphics__WEBPACK_IMPORTED_MODULE_3__["DynamicGraphics"]);
    /***/

  },

  /***/
  "./src/app/@core/models/ship.ts":
  /*!**************************************!*\
    !*** ./src/app/@core/models/ship.ts ***!
    \**************************************/

  /*! exports provided: Ship */

  /***/
  function srcAppCoreModelsShipTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ship", function () {
      return Ship;
    });
    /* harmony import */


    var _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @pixi/sprite */
    "./node_modules/@pixi/sprite/dist/esm/sprite.js");

    var Ship = /*#__PURE__*/function (_pixi_sprite__WEBPACK) {
      _inherits(Ship, _pixi_sprite__WEBPACK);

      var _super13 = _createSuper(Ship);

      function Ship(texture) {
        var _this17;

        _classCallCheck(this, Ship);

        _this17 = _super13.call(this, texture);

        _this17.anchor.set(0.5, 0.5);

        _this17.scale.set(0.2);

        return _this17;
      }

      return Ship;
    }(_pixi_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);
    /***/

  },

  /***/
  "./src/app/@core/services/graphics-factory/graphics-factory.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/@core/services/graphics-factory/graphics-factory.ts ***!
    \*********************************************************************/

  /*! exports provided: GraphicsFactory */

  /***/
  function srcAppCoreServicesGraphicsFactoryGraphicsFactoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphicsFactory", function () {
      return GraphicsFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../constants */
    "./src/app/@core/constants/index.ts");
    /* harmony import */


    var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../controls */
    "./src/app/@core/controls/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models */
    "./src/app/@core/models/index.ts");
    /* harmony import */


    var _models_controlled_graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/controlled-graphics */
    "./src/app/@core/models/controlled-graphics.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../utils */
    "./src/app/@core/utils/index.ts");
    /* harmony import */


    var _loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../loader */
    "./src/app/@core/services/loader/index.ts");
    /* harmony import */


    var _score__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../score */
    "./src/app/@core/services/score/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GraphicsFactory = /*#__PURE__*/function () {
      function GraphicsFactory(loader, score, activatedRoute) {
        _classCallCheck(this, GraphicsFactory);

        this.loader = loader;
        this.score = score;
        this.activatedRoute = activatedRoute;
        this.seed = this.activatedRoute.snapshot.params['seed'];
        this.random = new _utils__WEBPACK_IMPORTED_MODULE_5__["Random"](this.seed);
      }

      _createClass(GraphicsFactory, [{
        key: "getBackground",
        value: function getBackground() {
          var _this18 = this;

          var background = new _models__WEBPACK_IMPORTED_MODULE_3__["Background"](this.random.nextInt(), this.loader.get('bg_far'), this.loader.get('bg_mid'), this.loader.get('bg_near'));
          var update = background.update;

          background.update = function (delta) {
            return update.call(background, delta * (_this18.score.level + 1));
          };

          return background;
        }
      }, {
        key: "getPlayer",
        value: function getPlayer() {
          var options = {
            speed: 5,
            angularSpeed: 0.1,
            scale: 1,
            boundingRadius: 20
          };
          return new _models_controlled_graphics__WEBPACK_IMPORTED_MODULE_4__["ControlledGraphics"](this, new _models__WEBPACK_IMPORTED_MODULE_3__["Ship"](this.loader.get('ship')), options, Object(_controls__WEBPACK_IMPORTED_MODULE_2__["ControlFactory"])(_controls__WEBPACK_IMPORTED_MODULE_2__["PlayerControls"]));
        }
      }, {
        key: "getEnemy",
        value: function getEnemy(type, candidates) {
          var _this19 = this;

          var control;

          switch (type) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["EventType"].ADD_RANDOM_SHOOTER_SHIP:
              {
                control = Object(_controls__WEBPACK_IMPORTED_MODULE_2__["ControlFactory"])(_controls__WEBPACK_IMPORTED_MODULE_2__["AiRandomShooterControls"], this.random.nextInt());
                break;
              }

            case _constants__WEBPACK_IMPORTED_MODULE_1__["EventType"].ADD_FOLLOW_KAMIKAZE_SHIP:
              {
                control = Object(_controls__WEBPACK_IMPORTED_MODULE_2__["ControlFactory"])(_controls__WEBPACK_IMPORTED_MODULE_2__["AiFollowControls"], candidates, this.random.nextInt());
                break;
              }

            case _constants__WEBPACK_IMPORTED_MODULE_1__["EventType"].ADD_FOLLOW_SHOOTER_SHIP:
              {
                control = Object(_controls__WEBPACK_IMPORTED_MODULE_2__["ControlFactory"])(_controls__WEBPACK_IMPORTED_MODULE_2__["AiFollowShooterControls"], candidates, this.random.nextInt());
                break;
              }

            default:
              {
                control = Object(_controls__WEBPACK_IMPORTED_MODULE_2__["ControlFactory"])(_controls__WEBPACK_IMPORTED_MODULE_2__["AiRandomControls"], this.random.nextInt());
                break;
              }
          }

          var options = {
            speed: 3,
            angularSpeed: 0.05,
            scale: 1,
            boundingRadius: 20,
            tint: this.random.next() * 0xffffff
          };
          var enemy = new _models_controlled_graphics__WEBPACK_IMPORTED_MODULE_4__["ControlledGraphics"](this, new _models__WEBPACK_IMPORTED_MODULE_3__["Ship"](this.loader.get('ship')), options, control);
          enemy.position.set(_constants__WEBPACK_IMPORTED_MODULE_1__["GAME_WIDTH"] * 9 / 8, _constants__WEBPACK_IMPORTED_MODULE_1__["GAME_HEIGHT"] / 4 + _constants__WEBPACK_IMPORTED_MODULE_1__["GAME_HEIGHT"] / 2 * this.random.next());
          enemy.rotation = Math.PI;
          enemy.onRemove.add(function () {
            return _this19.score.add();
          });
          return enemy;
        }
      }, {
        key: "getExplosion",
        value: function getExplosion(x, y) {
          return new _models__WEBPACK_IMPORTED_MODULE_3__["Explosion"](this.loader.getAnimation('explosion'), x, y);
        }
      }, {
        key: "getProjectile",
        value: function getProjectile(owner) {
          var options = {
            speed: 15,
            boundingRadius: 10
          };
          return new _models__WEBPACK_IMPORTED_MODULE_3__["Projectile"](this, owner, options, this.loader.get('trail'));
        }
      }]);

      return GraphicsFactory;
    }();

    GraphicsFactory.ɵfac = function GraphicsFactory_Factory(t) {
      return new (t || GraphicsFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loader__WEBPACK_IMPORTED_MODULE_6__["Loader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_score__WEBPACK_IMPORTED_MODULE_7__["Score"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
    };

    GraphicsFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GraphicsFactory,
      factory: GraphicsFactory.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphicsFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _loader__WEBPACK_IMPORTED_MODULE_6__["Loader"]
        }, {
          type: _score__WEBPACK_IMPORTED_MODULE_7__["Score"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/services/graphics-factory/index.ts":
  /*!**********************************************************!*\
    !*** ./src/app/@core/services/graphics-factory/index.ts ***!
    \**********************************************************/

  /*! exports provided: GraphicsFactory */

  /***/
  function srcAppCoreServicesGraphicsFactoryIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _graphics_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./graphics-factory */
    "./src/app/@core/services/graphics-factory/graphics-factory.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GraphicsFactory", function () {
      return _graphics_factory__WEBPACK_IMPORTED_MODULE_0__["GraphicsFactory"];
    });
    /***/

  },

  /***/
  "./src/app/@core/services/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/@core/services/index.ts ***!
    \*****************************************/

  /*! exports provided: Score, Orchestrator, Loader */

  /***/
  function srcAppCoreServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./score */
    "./src/app/@core/services/score/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Score", function () {
      return _score__WEBPACK_IMPORTED_MODULE_0__["Score"];
    });
    /* harmony import */


    var _orchestrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./orchestrator */
    "./src/app/@core/services/orchestrator/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Orchestrator", function () {
      return _orchestrator__WEBPACK_IMPORTED_MODULE_1__["Orchestrator"];
    });
    /* harmony import */


    var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loader */
    "./src/app/@core/services/loader/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Loader", function () {
      return _loader__WEBPACK_IMPORTED_MODULE_2__["Loader"];
    });
    /***/

  },

  /***/
  "./src/app/@core/services/loader/index.ts":
  /*!************************************************!*\
    !*** ./src/app/@core/services/loader/index.ts ***!
    \************************************************/

  /*! exports provided: Loader */

  /***/
  function srcAppCoreServicesLoaderIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./loader */
    "./src/app/@core/services/loader/loader.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Loader", function () {
      return _loader__WEBPACK_IMPORTED_MODULE_0__["Loader"];
    });
    /***/

  },

  /***/
  "./src/app/@core/services/loader/loader.ts":
  /*!*************************************************!*\
    !*** ./src/app/@core/services/loader/loader.ts ***!
    \*************************************************/

  /*! exports provided: Loader */

  /***/
  function srcAppCoreServicesLoaderLoaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Loader", function () {
      return Loader;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/dist/esm/pixi.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Loader = /*#__PURE__*/function (_pixi_js__WEBPACK_IMP) {
      _inherits(Loader, _pixi_js__WEBPACK_IMP);

      var _super14 = _createSuper(Loader);

      function Loader() {
        var _this20;

        _classCallCheck(this, Loader);

        _this20 = _super14.call(this);
        _this20.baseUrl = 'assets/sprites';

        _this20.add('bg_far', 'city.png');

        _this20.add('bg_mid', 'cloud_02.png');

        _this20.add('bg_near', 'cloud.png');

        _this20.add('ship', 'ship.png');

        _this20.add('trail', 'trail.png');

        _this20.add('explosion', 'mc.json');

        _this20.load();

        return _this20;
      }

      _createClass(Loader, [{
        key: "get",
        value: function get(hash) {
          if (this.loading) throw new Error("Loader did not finish when the following resource was requested ".concat(hash));
          var resource = this.resources[hash];
          return resource.texture;
        }
      }, {
        key: "getAnimation",
        value: function getAnimation(hash) {
          if (this.loading) throw new Error("Loader did not finish when the following resource was requested ".concat(hash));
          return Object.keys(this.resources[hash].data.frames).sort().map(function (frame) {
            return pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].from(frame);
          });
        }
      }]);

      return Loader;
    }(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Loader"]);

    Loader.ɵfac = function Loader_Factory(t) {
      return new (t || Loader)();
    };

    Loader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Loader,
      factory: Loader.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Loader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/services/orchestrator/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/@core/services/orchestrator/index.ts ***!
    \******************************************************/

  /*! exports provided: Orchestrator */

  /***/
  function srcAppCoreServicesOrchestratorIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _orchestrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./orchestrator */
    "./src/app/@core/services/orchestrator/orchestrator.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Orchestrator", function () {
      return _orchestrator__WEBPACK_IMPORTED_MODULE_0__["Orchestrator"];
    });
    /***/

  },

  /***/
  "./src/app/@core/services/orchestrator/orchestrator.ts":
  /*!*************************************************************!*\
    !*** ./src/app/@core/services/orchestrator/orchestrator.ts ***!
    \*************************************************************/

  /*! exports provided: Orchestrator */

  /***/
  function srcAppCoreServicesOrchestratorOrchestratorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Orchestrator", function () {
      return Orchestrator;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/@core/constants */
    "./src/app/@core/constants/index.ts");
    /* harmony import */


    var src_app_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/@core/utils */
    "./src/app/@core/utils/index.ts");
    /* harmony import */


    var _models_controlled_graphics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/controlled-graphics */
    "./src/app/@core/models/controlled-graphics.ts");
    /* harmony import */


    var src_app_core_services_score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/@core/services/score */
    "./src/app/@core/services/score/index.ts");
    /* harmony import */


    var src_app_core_services_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/@core/services/loader */
    "./src/app/@core/services/loader/index.ts");
    /* harmony import */


    var _graphics_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../graphics-factory */
    "./src/app/@core/services/graphics-factory/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var Orchestrator = /*#__PURE__*/function () {
      function Orchestrator(score, loader, factory, activatedRoute) {
        _classCallCheck(this, Orchestrator);

        this.score = score;
        this.loader = loader;
        this.factory = factory;
        this.activatedRoute = activatedRoute;
        this.triggerTime = Date.now() + 2000;
        this.iteration = 0;
        this.enemies = [];
        this.seed = this.activatedRoute.snapshot.params['seed'];
        this.random = new src_app_core_utils__WEBPACK_IMPORTED_MODULE_2__["Random"](this.seed);
      }

      _createClass(Orchestrator, [{
        key: "update",
        value: function update(container) {
          var hasNext = this.hasNext();
          this.enemies = this.enemies.filter(function (enemy) {
            return enemy.parent;
          });
          if (!this.enemies.length && !hasNext) this.advanceToNewLevel();
          if (Date.now() < this.triggerTime || !hasNext) return;
          var event = this.getEvent();
          var candidates = container.children.filter(function (child) {
            return child instanceof _models_controlled_graphics__WEBPACK_IMPORTED_MODULE_3__["ControlledGraphics"];
          });
          var enemy = container.addChild(this.factory.getEnemy(event.type, candidates));
          this.enemies.push(enemy);
          this.iteration++;
          var next = this.getEvent();
          this.triggerTime = Date.now() + next.timeout;
        }
      }, {
        key: "advanceToNewLevel",
        value: function advanceToNewLevel() {
          this.score.level++;
          this.iteration = 0;
          this.enemies = [];
          var event = this.getEvent();
          this.triggerTime = Date.now() + event.timeout;
        }
      }, {
        key: "hasNext",
        value: function hasNext() {
          var level = Math.min(this.score.level, src_app_core_constants__WEBPACK_IMPORTED_MODULE_1__["GAME_CONFIG"].length - 1);
          return this.iteration <= src_app_core_constants__WEBPACK_IMPORTED_MODULE_1__["GAME_CONFIG"][level].length - 1;
        }
      }, {
        key: "getEvent",
        value: function getEvent() {
          var level = Math.min(this.score.level, src_app_core_constants__WEBPACK_IMPORTED_MODULE_1__["GAME_CONFIG"].length - 1);
          var iteration = Math.min(this.iteration, src_app_core_constants__WEBPACK_IMPORTED_MODULE_1__["GAME_CONFIG"][level].length - 1);
          return src_app_core_constants__WEBPACK_IMPORTED_MODULE_1__["GAME_CONFIG"][level][iteration];
        }
      }]);

      return Orchestrator;
    }();

    Orchestrator.ɵfac = function Orchestrator_Factory(t) {
      return new (t || Orchestrator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_score__WEBPACK_IMPORTED_MODULE_4__["Score"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_loader__WEBPACK_IMPORTED_MODULE_5__["Loader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_graphics_factory__WEBPACK_IMPORTED_MODULE_6__["GraphicsFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
    };

    Orchestrator.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Orchestrator,
      factory: Orchestrator.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Orchestrator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: src_app_core_services_score__WEBPACK_IMPORTED_MODULE_4__["Score"]
        }, {
          type: src_app_core_services_loader__WEBPACK_IMPORTED_MODULE_5__["Loader"]
        }, {
          type: _graphics_factory__WEBPACK_IMPORTED_MODULE_6__["GraphicsFactory"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/services/score/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/@core/services/score/index.ts ***!
    \***********************************************/

  /*! exports provided: Score */

  /***/
  function srcAppCoreServicesScoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./score */
    "./src/app/@core/services/score/score.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Score", function () {
      return _score__WEBPACK_IMPORTED_MODULE_0__["Score"];
    });
    /***/

  },

  /***/
  "./src/app/@core/services/score/score.ts":
  /*!***********************************************!*\
    !*** ./src/app/@core/services/score/score.ts ***!
    \***********************************************/

  /*! exports provided: Score */

  /***/
  function srcAppCoreServicesScoreScoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Score", function () {
      return Score;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/@core/constants */
    "./src/app/@core/constants/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var Score = /*#__PURE__*/function () {
      function Score(activatedRoute) {
        _classCallCheck(this, Score);

        this.activatedRoute = activatedRoute;
        this._score = 0;
        this._isHighest = false;
        this._level = 0;
        this.frozen = false;
        this.seed = this.activatedRoute.snapshot.params['seed'];
      }

      _createClass(Score, [{
        key: "level",
        get: function get() {
          return this._level;
        },
        set: function set(value) {
          if (this.frozen) return;
          this._level = value;
        }
      }, {
        key: "isHighest",
        get: function get() {
          return this._isHighest;
        }
      }, {
        key: "score",
        get: function get() {
          return this._score;
        }
      }, {
        key: "highestScore",
        get: function get() {
          var scores = JSON.parse(localStorage.getItem(src_app_core_constants__WEBPACK_IMPORTED_MODULE_1__["SCORE_STORAGE_PATH"]) || '{}');
          return scores[this.seed] || 0;
        }
      }, {
        key: "add",
        value: function add() {
          if (this.frozen) return;
          this._score += 1;

          if (this.highestScore <= this._score) {
            this._isHighest = true;
            var scores = JSON.parse(localStorage.getItem(src_app_core_constants__WEBPACK_IMPORTED_MODULE_1__["SCORE_STORAGE_PATH"]) || '{}');
            scores[this.seed] = this._score;
            localStorage.setItem(src_app_core_constants__WEBPACK_IMPORTED_MODULE_1__["SCORE_STORAGE_PATH"], JSON.stringify(scores));
          }
        }
      }, {
        key: "freeze",
        value: function freeze() {
          this.frozen = true;
        }
      }]);

      return Score;
    }();

    Score.ɵfac = function Score_Factory(t) {
      return new (t || Score)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    Score.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Score,
      factory: Score.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Score, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/utils/control.map.ts":
  /*!********************************************!*\
    !*** ./src/app/@core/utils/control.map.ts ***!
    \********************************************/

  /*! exports provided: ControlMap */

  /***/
  function srcAppCoreUtilsControlMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlMap", function () {
      return ControlMap;
    });

    var ControlMap = /*#__PURE__*/function (_Map) {
      _inherits(ControlMap, _Map);

      var _super15 = _createSuper(ControlMap);

      function ControlMap() {
        _classCallCheck(this, ControlMap);

        return _super15.apply(this, arguments);
      }

      _createClass(ControlMap, [{
        key: "set",
        value: function set(control) {
          return _get(_getPrototypeOf(ControlMap.prototype), "set", this).call(this, control.target, control);
        }
      }, {
        key: "delete",
        value: function _delete(key) {
          if (this.has(key)) this.get(key).cleanup();
          return _get(_getPrototypeOf(ControlMap.prototype), "delete", this).call(this, key);
        }
      }]);

      return ControlMap;
    }( /*#__PURE__*/_wrapNativeSuper(Map));
    /***/

  },

  /***/
  "./src/app/@core/utils/index.ts":
  /*!**************************************!*\
    !*** ./src/app/@core/utils/index.ts ***!
    \**************************************/

  /*! exports provided: Random, ControlMap */

  /***/
  function srcAppCoreUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./random */
    "./src/app/@core/utils/random.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Random", function () {
      return _random__WEBPACK_IMPORTED_MODULE_0__["Random"];
    });
    /* harmony import */


    var _control_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./control.map */
    "./src/app/@core/utils/control.map.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ControlMap", function () {
      return _control_map__WEBPACK_IMPORTED_MODULE_1__["ControlMap"];
    });
    /***/

  },

  /***/
  "./src/app/@core/utils/random.ts":
  /*!***************************************!*\
    !*** ./src/app/@core/utils/random.ts ***!
    \***************************************/

  /*! exports provided: Random */

  /***/
  function srcAppCoreUtilsRandomTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Random", function () {
      return Random;
    });

    var Random = /*#__PURE__*/function () {
      function Random(seed) {
        _classCallCheck(this, Random);

        this.seed = seed;
        this._seed = seed % 2147483647;
        if (this._seed) this._seed += 2147483646;
      }

      _createClass(Random, [{
        key: "nextInt",
        value: function nextInt() {
          return this._seed = this._seed * 16807 % 2147483647;
        }
      }, {
        key: "next",
        value: function next() {
          return (this.nextInt() - 1) / 2147483646;
        }
      }]);

      return Random;
    }();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./game */
    "./src/app/game/index.ts");
    /* harmony import */


    var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu */
    "./src/app/menu/index.ts");

    var routes = [{
      path: 'menu',
      loadChildren: function loadChildren() {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["MenuModule"];
      }
    }, {
      path: 'game',
      loadChildren: function loadChildren() {
        return _game__WEBPACK_IMPORTED_MODULE_2__["GameModule"];
      }
    }, {
      path: '',
      redirectTo: 'menu',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'menu'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_components_splash_splash_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./@core/components/splash/splash.component */
    "./src/app/@core/components/splash/splash.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./@core/components/background/background.component */
    "./src/app/@core/components/background/background.component.ts");

    var AppComponent = function AppComponent() {
      var _this21 = this;

      _classCallCheck(this, AppComponent);

      this.isLoading = true;
      setTimeout(function () {
        _this21.isLoading = false;
      }, 0);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 1,
      consts: [[3, "isLoading"], [1, "container-fluid"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "splash-component", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "background-component");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", ctx.isLoading);
        }
      },
      directives: [_core_components_splash_splash_component__WEBPACK_IMPORTED_MODULE_1__["SplashComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_3__["BackgroundComponent"]],
      styles: ["* {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxpcmluZ1xcd29ya1xcc3BhY2Utc2hvb3Rlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwICoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiIsIjo6bmctZGVlcCAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _core_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./@core/components */
    "./src/app/@core/components/index.ts");
    /* harmony import */


    var _core_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./@core/services */
    "./src/app/@core/services/index.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_core_services__WEBPACK_IMPORTED_MODULE_8__["Loader"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _core_components__WEBPACK_IMPORTED_MODULE_7__["BackgroundComponent"], _core_components__WEBPACK_IMPORTED_MODULE_7__["SplashComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _core_components__WEBPACK_IMPORTED_MODULE_7__["BackgroundComponent"], _core_components__WEBPACK_IMPORTED_MODULE_7__["SplashComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
          providers: [_core_services__WEBPACK_IMPORTED_MODULE_8__["Loader"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/game.component.ts":
  /*!****************************************!*\
    !*** ./src/app/game/game.component.ts ***!
    \****************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! pixi.js */
    "./node_modules/pixi.js/dist/esm/pixi.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/@core/constants */
    "./src/app/@core/constants/index.ts");
    /* harmony import */


    var src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/@core/utils */
    "./src/app/@core/utils/index.ts");
    /* harmony import */


    var src_app_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/@core/services */
    "./src/app/@core/services/index.ts");
    /* harmony import */


    var _core_services_graphics_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../@core/services/graphics-factory */
    "./src/app/@core/services/graphics-factory/index.ts");
    /* harmony import */


    var _core_models_dynamic_graphics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../@core/models/dynamic-graphics */
    "./src/app/@core/models/dynamic-graphics.ts");
    /* harmony import */


    var _core_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../@core/components */
    "./src/app/@core/components/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["canvas"];

    var GameComponent = /*#__PURE__*/function (_pixi_js__WEBPACK_IMP2) {
      _inherits(GameComponent, _pixi_js__WEBPACK_IMP2);

      var _super16 = _createSuper(GameComponent);

      function GameComponent(score, loader, orchestrator, factory, modalService, activatedRoute, router) {
        var _this22;

        _classCallCheck(this, GameComponent);

        _this22 = _super16.call(this);
        _this22.score = score;
        _this22.loader = loader;
        _this22.orchestrator = orchestrator;
        _this22.factory = factory;
        _this22.modalService = modalService;
        _this22.activatedRoute = activatedRoute;
        _this22.router = router;
        _this22.clock = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Ticker"]();
        _this22.sortableChildren = true;
        _this22.seed = _this22.activatedRoute.snapshot.params['seed'];
        _this22.random = new src_app_core_utils__WEBPACK_IMPORTED_MODULE_3__["Random"](_this22.seed);
        return _this22;
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.renderer = Object(pixi_js__WEBPACK_IMPORTED_MODULE_0__["autoDetectRenderer"])({
            backgroundColor: 0x1099bb,
            width: src_app_core_constants__WEBPACK_IMPORTED_MODULE_2__["GAME_WIDTH"],
            height: src_app_core_constants__WEBPACK_IMPORTED_MODULE_2__["GAME_HEIGHT"],
            view: this.canvas.nativeElement
          });
          this.loader.onComplete.add(function () {
            return _this23.initialize();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.children.filter(function (child) {
            return child instanceof _core_models_dynamic_graphics__WEBPACK_IMPORTED_MODULE_6__["DynamicGraphics"];
          }).forEach(function (child) {
            return child.cleanup();
          });
          this.clock.destroy();
        }
      }, {
        key: "initialize",
        value: function initialize() {
          var _this24 = this;

          this.player = this.addChild(this.factory.getPlayer());
          this.addChild(this.factory.getBackground());
          this.player.onRemove.add(function () {
            return _this24.gameover();
          });
          this.clock.add(function (delta) {
            return _this24.update(delta);
          });
          this.clock.add(function () {
            return _this24.orchestrator.update(_this24);
          });
          this.clock.start();
        }
      }, {
        key: "update",
        value: function update(delta) {
          var _this25 = this;

          var mouse = this.renderer.plugins.interaction.mouse.global;
          var removeSet = new Set();
          var entries = this.children.filter(function (child) {
            return child instanceof _core_models_dynamic_graphics__WEBPACK_IMPORTED_MODULE_6__["DynamicGraphics"];
          });

          for (var i = 0, length = entries.length; i < length; ++i) {
            var child01 = entries[i];
            if (child01.isOutOfBounds()) removeSet.add(child01);else {
              for (var j = i + 1, _length = entries.length; j < _length; ++j) {
                var child02 = entries[j];

                if (child01.hitTest(child02)) {
                  removeSet.add(child01);
                  removeSet.add(child02);
                }
              }
            }
          }

          removeSet.forEach(function (child) {
            return _this25.removeChild(child);
          });
          this.children.forEach(function (child) {
            return child.update(delta, mouse);
          });
          this.renderer.render(this);
        }
      }, {
        key: "removeChild",
        value: function removeChild() {
          var _get2;

          for (var _len3 = arguments.length, children = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            children[_key3] = arguments[_key3];
          }

          children.filter(function (child) {
            return child instanceof _core_models_dynamic_graphics__WEBPACK_IMPORTED_MODULE_6__["DynamicGraphics"];
          }).forEach(function (child) {
            return child.cleanup();
          });
          return (_get2 = _get(_getPrototypeOf(GameComponent.prototype), "removeChild", this)).call.apply(_get2, [this].concat(children));
        }
      }, {
        key: "gameover",
        value: function gameover() {
          var _this26 = this;

          this.score.freeze();
          var modalRef = this.modalService.open(_core_components__WEBPACK_IMPORTED_MODULE_7__["GameoverModal"], {
            size: 'sm',
            centered: true,
            backdrop: 'static',
            keyboard: false
          });
          modalRef.componentInstance.isHighest = this.score.isHighest;
          modalRef.componentInstance.score = this.score.score;
          modalRef.result.then(function () {
            _this26.router.navigate(['menu']);
          });
        }
      }]);

      return GameComponent;
    }(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]);

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["Score"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["Loader"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["Orchestrator"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_graphics_factory__WEBPACK_IMPORTED_MODULE_5__["GraphicsFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]));
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["game"]],
      viewQuery: function GameComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["Orchestrator"], src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["Score"], _core_services_graphics_factory__WEBPACK_IMPORTED_MODULE_5__["GraphicsFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 1,
      consts: [[3, "level"], ["canvas", ""]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "scoring-component");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "leveling-component", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "canvas", null, 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("level", ctx.score.level + 1);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'game',
          templateUrl: './game.component.html',
          styleUrls: ['./game.component.scss'],
          providers: [src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["Orchestrator"], src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["Score"], _core_services_graphics_factory__WEBPACK_IMPORTED_MODULE_5__["GraphicsFactory"]]
        }]
      }], function () {
        return [{
          type: src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["Score"]
        }, {
          type: src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["Loader"]
        }, {
          type: src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["Orchestrator"]
        }, {
          type: _core_services_graphics_factory__WEBPACK_IMPORTED_MODULE_5__["GraphicsFactory"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['canvas', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/game/game.module.ts":
  /*!*************************************!*\
    !*** ./src/app/game/game.module.ts ***!
    \*************************************/

  /*! exports provided: GameModule */

  /***/
  function srcAppGameGameModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameModule", function () {
      return GameModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/@core/components */
    "./src/app/@core/components/index.ts");
    /* harmony import */


    var _core_components_gameover_gameover_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../@core/components/gameover/gameover.module */
    "./src/app/@core/components/gameover/gameover.module.ts");
    /* harmony import */


    var _game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _game_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./game.routes */
    "./src/app/game/game.routes.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GameModule = function GameModule() {
      _classCallCheck(this, GameModule);
    };

    GameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: GameModule,
      bootstrap: [_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]]
    });
    GameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function GameModule_Factory(t) {
        return new (t || GameModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_components_gameover_gameover_module__WEBPACK_IMPORTED_MODULE_3__["GameoverModule"], _game_routes__WEBPACK_IMPORTED_MODULE_5__["GameRoutes"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GameModule, {
        declarations: [_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"], src_app_core_components__WEBPACK_IMPORTED_MODULE_2__["ScoringComponent"], src_app_core_components__WEBPACK_IMPORTED_MODULE_2__["LevelingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_components_gameover_gameover_module__WEBPACK_IMPORTED_MODULE_3__["GameoverModule"], _game_routes__WEBPACK_IMPORTED_MODULE_5__["GameRoutes"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"], src_app_core_components__WEBPACK_IMPORTED_MODULE_2__["ScoringComponent"], src_app_core_components__WEBPACK_IMPORTED_MODULE_2__["LevelingComponent"]],
          providers: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_components_gameover_gameover_module__WEBPACK_IMPORTED_MODULE_3__["GameoverModule"], _game_routes__WEBPACK_IMPORTED_MODULE_5__["GameRoutes"]],
          bootstrap: [_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_l"], _game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"], src_app_core_components__WEBPACK_IMPORTED_MODULE_2__["ScoringComponent"], src_app_core_components__WEBPACK_IMPORTED_MODULE_2__["LevelingComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/game/game.routes.ts":
  /*!*************************************!*\
    !*** ./src/app/game/game.routes.ts ***!
    \*************************************/

  /*! exports provided: GameRoutes */

  /***/
  function srcAppGameGameRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameRoutes", function () {
      return GameRoutes;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _route_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./route.guard */
    "./src/app/game/route.guard.ts");

    var routes = [{
      path: '',
      children: [{
        path: ':seed',
        component: _game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"],
        pathMatch: 'full',
        runGuardsAndResolvers: 'always',
        canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_3__["RouteParamGuard"]]
      }, {
        path: '',
        pathMatch: 'full',
        runGuardsAndResolvers: 'always',
        canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_3__["RouteParamGuard"]]
      }]
    }];

    var GameRoutes = function GameRoutes() {
      _classCallCheck(this, GameRoutes);
    };

    GameRoutes.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GameRoutes
    });
    GameRoutes.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GameRoutes_Factory(t) {
        return new (t || GameRoutes)();
      },
      providers: [_route_guard__WEBPACK_IMPORTED_MODULE_3__["RouteParamGuard"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GameRoutes, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameRoutes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [_route_guard__WEBPACK_IMPORTED_MODULE_3__["RouteParamGuard"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/index.ts":
  /*!*******************************!*\
    !*** ./src/app/game/index.ts ***!
    \*******************************/

  /*! exports provided: GameModule */

  /***/
  function srcAppGameIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _game_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./game.module */
    "./src/app/game/game.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GameModule", function () {
      return _game_module__WEBPACK_IMPORTED_MODULE_0__["GameModule"];
    });
    /***/

  },

  /***/
  "./src/app/game/route.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/game/route.guard.ts ***!
    \*************************************/

  /*! exports provided: RouteParamGuard */

  /***/
  function srcAppGameRouteGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteParamGuard", function () {
      return RouteParamGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RouteParamGuard = /*#__PURE__*/function () {
      function RouteParamGuard(router) {
        _classCallCheck(this, RouteParamGuard);

        this.router = router;
      }

      _createClass(RouteParamGuard, [{
        key: "canActivate",
        value: function canActivate(activatedRoute) {
          var seed = activatedRoute.params['seed'];
          if (!seed) this.router.navigate(['']);
          return !!seed;
        }
      }]);

      return RouteParamGuard;
    }();

    RouteParamGuard.ɵfac = function RouteParamGuard_Factory(t) {
      return new (t || RouteParamGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    RouteParamGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RouteParamGuard,
      factory: RouteParamGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteParamGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/index.ts":
  /*!*******************************!*\
    !*** ./src/app/menu/index.ts ***!
    \*******************************/

  /*! exports provided: MenuModule */

  /***/
  function srcAppMenuIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./menu.module */
    "./src/app/menu/menu.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MenuModule", function () {
      return _menu_module__WEBPACK_IMPORTED_MODULE_0__["MenuModule"];
    });
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MenuComponent = function MenuComponent() {
      _classCallCheck(this, MenuComponent);
    };

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["menu"]],
      decls: 21,
      vars: 0,
      consts: [[1, "card", "shadow-lg"], [1, "card-body", "menu"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/logo/Logo-3D.gif", "alt", "logo", "width", "160", "height", "120", 1, "rounded"], ["href", "/game/8", 1, "btn", "btn-outline-info"], ["href", "/game/12", 1, "btn", "btn-outline-info"], ["href", "/game/36", 1, "btn", "btn-outline-info"], ["href", "https://www.google.com/", 1, "btn", "btn-outline-info"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "GAME 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "GAME 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GAME 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "EXIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".menu[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0.5em 1.5em;\n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXGlyaW5nXFx3b3JrXFxzcGFjZS1zaG9vdGVyL3NyY1xcYXBwXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKO0FERUU7RUFDRSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XHJcbiAgJiA+ICoge1xyXG4gICAgbWFyZ2luOiAwLjVlbSAxLjVlbTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB3aWR0aDogMTBlbTtcclxuICB9XHJcbn1cclxuIiwiLm1lbnUgPiAqIHtcbiAgbWFyZ2luOiAwLjVlbSAxLjVlbTtcbn1cbi5tZW51IGEge1xuICB3aWR0aDogMTBlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.module.ts":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.module.ts ***!
    \*************************************/

  /*! exports provided: MenuModule */

  /***/
  function srcAppMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuModule", function () {
      return MenuModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _menu_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu.routes */
    "./src/app/menu/menu.routes.ts");

    var MenuModule = function MenuModule() {
      _classCallCheck(this, MenuModule);
    };

    MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MenuModule,
      bootstrap: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]]
    });
    MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MenuModule_Factory(t) {
        return new (t || MenuModule)();
      },
      providers: [],
      imports: [[_menu_routes__WEBPACK_IMPORTED_MODULE_2__["MenuRoutes"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, {
        declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]],
        imports: [_menu_routes__WEBPACK_IMPORTED_MODULE_2__["MenuRoutes"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]],
          providers: [],
          imports: [_menu_routes__WEBPACK_IMPORTED_MODULE_2__["MenuRoutes"]],
          bootstrap: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.routes.ts":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.routes.ts ***!
    \*************************************/

  /*! exports provided: MenuRoutes */

  /***/
  function srcAppMenuMenuRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuRoutes", function () {
      return MenuRoutes;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu.component */
    "./src/app/menu/menu.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: '',
        component: _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        pathMatch: 'full'
      }]
    }];

    var MenuRoutes = function MenuRoutes() {
      _classCallCheck(this, MenuRoutes);
    };

    MenuRoutes.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MenuRoutes
    });
    MenuRoutes.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MenuRoutes_Factory(t) {
        return new (t || MenuRoutes)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuRoutes, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuRoutes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\iring\work\space-shooter\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map