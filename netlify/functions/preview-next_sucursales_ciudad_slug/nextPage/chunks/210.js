exports.id = 210;
exports.ids = [210];
exports.modules = {

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

/***/ 92161:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


const useToggleState = (value = false) => {
  const {
    0: state,
    1: setState
  } = useState(value);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useToggleState)));

/***/ })

};
;