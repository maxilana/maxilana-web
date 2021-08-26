exports.id = 4095;
exports.ids = [4095];
exports.modules = {

/***/ 84095:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/common/CategoryExplorer/CategoryExplorer.tsx




const CategoryExplorer = ({
  categories
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: styles.root,
    children: /*#__PURE__*/_jsx("div", {
      className: styles.gridWrapper,
      children: demo.map((item, idx) => {
        return /*#__PURE__*/_jsx("div", {
          className: styles.gridElement,
          children: /*#__PURE__*/_jsxs("div", {
            className: styles.link,
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-[56px] h-[56px]"
            }), /*#__PURE__*/_jsx("span", {
              className: styles.linkLabel,
              children: item.label
            })]
          })
        }, item.id);
      })
    })
  });
};

const demo = [{
  id: 1,
  label: "Joyería"
}, {
  id: 2,
  label: "Relojes"
}, {
  id: 3,
  label: "Computadoras"
}, {
  id: 4,
  label: "Herramientas"
}, {
  id: 5,
  label: "Instrumentos musicales"
}, {
  id: 6,
  label: "Lentes"
}, {
  id: 7,
  label: "Celulares"
}, {
  id: 8,
  label: "Electrodomésticos"
}, {
  id: 9,
  label: "Videojuegos"
}, {
  id: 10,
  label: "Línea blanca"
}];
/* harmony default export */ var CategoryExplorer_CategoryExplorer = ((/* unused pure expression or super */ null && (CategoryExplorer)));
;// CONCATENATED MODULE: ./components/common/CategoryExplorer/index.ts


/***/ })

};
;