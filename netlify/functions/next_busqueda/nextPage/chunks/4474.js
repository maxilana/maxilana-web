exports.id = 4474;
exports.ids = [4474];
exports.modules = {

/***/ 27165:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/common/Hero/Hero.tsx




const Hero = ({
  title,
  subtitle = null,
  actions = null,
  cover = null
}) => {
  return /*#__PURE__*/_jsxs("div", {
    className: styles.root,
    children: [cover !== null && /*#__PURE__*/_jsx("div", {
      className: styles.cover,
      children: cover
    }), /*#__PURE__*/_jsx("div", {
      className: styles.wrapper,
      children: /*#__PURE__*/_jsxs("div", {
        className: styles.body,
        children: [/*#__PURE__*/_jsx("h1", {
          className: styles.title,
          children: title
        }), subtitle !== null && /*#__PURE__*/_jsx("p", {
          className: styles.subtitle,
          children: subtitle
        }), actions !== null && /*#__PURE__*/_jsx("div", {
          className: styles.actionsWrap,
          children: actions
        })]
      })
    })]
  });
};

/* harmony default export */ var Hero_Hero = ((/* unused pure expression or super */ null && (Hero)));
;// CONCATENATED MODULE: ./components/common/Hero/index.ts


/***/ }),

/***/ 1245:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/layout/Container/Container.tsx


const Container = ({
  children
}) => {
  return /*#__PURE__*/_jsx("section", {
    className: "container mx-auto px-4",
    children: children
  });
};

/* harmony default export */ var Container_Container = ((/* unused pure expression or super */ null && (Container)));
;// CONCATENATED MODULE: ./components/layout/Container/index.ts


/***/ })

};
;