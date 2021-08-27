exports.id = 6675;
exports.ids = [6675];
exports.modules = {

/***/ 77637:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


if (false) {}

const axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "https://www.maxilana.com/api"
});
axios.interceptors.response.use(response => Promise.resolve(response.data), error => Promise.reject(error));
/* harmony default export */ __webpack_exports__["Z"] = (axios);

/***/ }),

/***/ 90855:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ Meta_Meta; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./components/common/Meta/Meta.tsx





const Meta = ({
  title,
  description,
  keywords
}) => {
  const metaTitle = title ? `${title} | Maxilana` : 'Maxilana | Casa de empeño';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
    children: [/*#__PURE__*/jsx_runtime.jsx("title", {
      children: metaTitle
    }), /*#__PURE__*/jsx_runtime.jsx("meta", {
      name: "description",
      content: description || 'Maxilana casa de empeño y prestamos'
    }), /*#__PURE__*/jsx_runtime.jsx("meta", {
      name: "keywords",
      content: keywords || 'empeño, empeno, facil empeño, prestamos, maxilana, joyeria, remates'
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/favicon/apple-icon-57x57.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/favicon/apple-icon-60x60.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/favicon/apple-icon-72x72.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/favicon/apple-icon-76x76.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/favicon/apple-icon-114x114.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/favicon/apple-icon-120x120.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/favicon/apple-icon-144x144.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/favicon/apple-icon-152x152.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-icon-180x180.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/favicon/android-icon-192x192.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/favicon/favicon-96x96.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "manifest",
      href: "/favicon/manifest.json"
    }), /*#__PURE__*/jsx_runtime.jsx("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff"
    }), /*#__PURE__*/jsx_runtime.jsx("meta", {
      name: "msapplication-TileImage",
      content: "/ms-icon-144x144.png"
    }), /*#__PURE__*/jsx_runtime.jsx("meta", {
      name: "theme-color",
      content: "#ffffff"
    })]
  });
};

/* harmony default export */ var Meta_Meta = (Meta);
;// CONCATENATED MODULE: ./components/common/Meta/index.ts


/***/ }),

/***/ 52868:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l5": function() { return /* reexport safe */ _SocialMenu__WEBPACK_IMPORTED_MODULE_2__.Z; },
/* harmony export */   "h_": function() { return /* reexport safe */ _Meta__WEBPACK_IMPORTED_MODULE_6__.Z; }
/* harmony export */ });
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52667);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27165);
/* harmony import */ var _SocialMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67534);
/* harmony import */ var _FullBlueedBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68225);
/* harmony import */ var _CategoryExplorer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84095);
/* harmony import */ var _ServicePaymentCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35280);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90855);








/***/ }),

/***/ 32105:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const slugify = (str = '', {
  replacement = '-',
  lower = true,
  trim = true,
  strict = true
} = {}) => {
  let result = str;
  if (trim) result = result.replace(/^\s+|\s+$/g, '');
  if (lower) result = result.toLowerCase();

  if (strict) {
    // remove accents, swap ñ for n, etc
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaeeeeiiiioooouuuunc------';

    for (let i = 0; i < from.length; i++) {
      result = result.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  }

  result = result.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  .replace(/\s+/g, replacement) // collapse whitespace and replace by -
  .replace(/-+/g, replacement); // collapse dashes

  return result;
};

/* harmony default export */ __webpack_exports__["Z"] = (slugify);

/***/ })

};
;