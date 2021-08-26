exports.id = 2206;
exports.ids = [2206];
exports.modules = {

/***/ 53465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77637);


const getAllCities = async () => {
  const response = await _axios__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get('/ciudades');
  return response.map(item => ({
    id: item === null || item === void 0 ? void 0 : item.id,
    slug: item === null || item === void 0 ? void 0 : item.slug,
    code: item === null || item === void 0 ? void 0 : item.codigoplaza,
    name: item === null || item === void 0 ? void 0 : item.nombre,
    state: item === null || item === void 0 ? void 0 : item.estado,
    active: Boolean(item === null || item === void 0 ? void 0 : item.activo)
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (getAllCities);

/***/ }),

/***/ 29788:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_parseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38151);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77637);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const getProducts = async (query) => {
  const queryParams = (0,_utils_parseQuery__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(_objectSpread({
    page: '1',
    limit: '24'
  }, query));
  const response = await _axios__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(`/productos?${queryParams}`);
  return _objectSpread(_objectSpread({}, response), {}, {
    rows: response.rows.map(item => ({
      id: item.id,
      code: item.codigo,
      type: item.tipo,
      name: item.nombre,
      BranchId: item.sucursal,
      price: item.precio,
      netPrice: item.precioneto,
      brand: item.marca,
      observations: item.observaciones,
      hasImage: Boolean(item.image),
      precod: item.precod
    }))
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (getProducts);

/***/ }),

/***/ 19115:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gC": function() { return /* reexport safe */ _Stack__WEBPACK_IMPORTED_MODULE_0__.g; },
/* harmony export */   "wp": function() { return /* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_1__.Z; },
/* harmony export */   "Ar": function() { return /* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_2__.Z; },
/* harmony export */   "$_": function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_4__.Z; }
/* harmony export */ });
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9524);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93455);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39114);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1245);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58734);
/* harmony import */ var _HelpSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33382);







/***/ }),

/***/ 7646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": function() { return /* reexport */ ProductCard/* default */.Z; }
});

// UNUSED EXPORTS: Card

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
;// CONCATENATED MODULE: ./components/ui/Card/Card.tsx




const Card = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: cn(styles.root, className),
    children: children
  });
};

/* harmony default export */ var Card_Card = ((/* unused pure expression or super */ null && (Card)));
// EXTERNAL MODULE: ./components/ui/Card/ProductCard.tsx + 2 modules
var ProductCard = __webpack_require__(76324);
;// CONCATENATED MODULE: ./components/ui/Card/index.ts



/***/ }),

/***/ 76702:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
// EXTERNAL MODULE: ./hooks/useToggleState.ts
var hooks_useToggleState = __webpack_require__(92161);
;// CONCATENATED MODULE: ./components/ui/CheckableTag/CheckableTag.tsx





const CheckableTag = ({
  label,
  children,
  className,
  checked,
  onCheckChange
}) => {
  const [status, toggle] = useToggleState(checked);
  return /*#__PURE__*/_jsx("span", {
    className: cn(styles.root, {
      [styles.checked]: status
    }, className),
    role: "checkbox",
    onClick: () => toggle(),
    children: label || children
  });
};

/* harmony default export */ var CheckableTag_CheckableTag = ((/* unused pure expression or super */ null && (CheckableTag)));
;// CONCATENATED MODULE: ./components/ui/CheckableTag/index.ts


/***/ }),

/***/ 38151:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const parseQuery = query => {
  return Object.keys(query).map(param => `${param}=${query[param]}`, '').join('&');
};

/* harmony default export */ __webpack_exports__["Z"] = (parseQuery);

/***/ })

};
;