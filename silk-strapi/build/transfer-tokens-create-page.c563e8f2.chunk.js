'use strict';
(globalThis['webpackChunksilk_strapi'] = globalThis['webpackChunksilk_strapi'] || []).push([
  [4816],
  {
    /***/ 39987: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
      /* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);
      /* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87751);
      /* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53219);

      const ProtectedTransferTokenCreateView = () => {
        return /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ /* .CheckPagePermissions */.O4,
          {
            permissions:
              _permissions__WEBPACK_IMPORTED_MODULE_3__ /* ["default"].settings["transfer-tokens"].create */.Z.settings[
                'transfer-tokens'
              ].create,
            children: /* @__PURE__ */ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _EditView__WEBPACK_IMPORTED_MODULE_4__ /* ["default"] */.Z,
              {}
            ),
          }
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ProtectedTransferTokenCreateView;

      /***/
    },
  },
]);
