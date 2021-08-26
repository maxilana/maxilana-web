exports.id = 4732;
exports.ids = [4732];
exports.modules = {

/***/ 27165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ Hero_Hero; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./components/common/Hero/Hero.module.css
var Hero_module = __webpack_require__(89199);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./components/common/Hero/Hero.tsx




const Hero = ({
  title,
  subtitle = null,
  actions = null,
  cover = null
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (Hero_module_default()).root,
    children: [cover !== null && /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (Hero_module_default()).cover,
      children: cover
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (Hero_module_default()).wrapper,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (Hero_module_default()).body,
        children: [/*#__PURE__*/jsx_runtime.jsx("h1", {
          className: (Hero_module_default()).title,
          children: title
        }), subtitle !== null && /*#__PURE__*/jsx_runtime.jsx("p", {
          className: (Hero_module_default()).subtitle,
          children: subtitle
        }), actions !== null && /*#__PURE__*/jsx_runtime.jsx("div", {
          className: (Hero_module_default()).actionsWrap,
          children: actions
        })]
      })
    })]
  });
};

/* harmony default export */ var Hero_Hero = (Hero);
;// CONCATENATED MODULE: ./components/common/Hero/index.ts


/***/ }),

/***/ 89199:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Hero_root__1Rb2P",
	"cover": "Hero_cover__B1I67",
	"wrapper": "Hero_wrapper__25SEZ",
	"body": "Hero_body__3iZLS",
	"title": "Hero_title__6VGgA",
	"subtitle": "Hero_subtitle__27KYi",
	"actionsWrap": "Hero_actionsWrap__3gncg"
};


/***/ })

};
;