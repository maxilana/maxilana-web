exports.id = 3382;
exports.ids = [3382];
exports.modules = {

/***/ 33382:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./components/ui/index.ts
var ui = __webpack_require__(11325);
;// CONCATENATED MODULE: ./components/layout/HelpSidebar/HelpSidebar.tsx







const HelpSidebar = ({
  direction = 'vertical',
  questions
}) => {
  return /*#__PURE__*/_jsxs("div", {
    className: cn(styles.root, {
      [styles.rootHorizontal]: direction === 'horizontal'
    }),
    children: [/*#__PURE__*/_jsxs(Card, {
      className: styles.header,
      children: [/*#__PURE__*/_jsx("h4", {
        className: styles.headerTitle,
        children: "Preguntas Frecuentes"
      }), /*#__PURE__*/_jsx("ul", {
        children: questions.map(item => /*#__PURE__*/_jsx("li", {
          className: styles.questionItem,
          children: /*#__PURE__*/_jsx(Link, {
            href: item.href,
            children: /*#__PURE__*/_jsx("a", {
              className: styles.questionLink,
              children: item.label
            })
          })
        }, item.id))
      })]
    }), /*#__PURE__*/_jsxs(Card, {
      className: styles.footer,
      children: [/*#__PURE__*/_jsx("h5", {
        className: styles.footerTitle,
        children: "\xBFTienes alguna pregunta?"
      }), /*#__PURE__*/_jsxs("div", {
        className: "prose",
        children: [/*#__PURE__*/_jsx("p", {
          className: styles.footerCopy,
          children: "Para cualquier duda o aclaraci\xF3n, por favor comun\xEDcate con nosotros a trav\xE9s del los siguientes medios:"
        }), /*#__PURE__*/_jsxs("p", {
          className: styles.footerCopy,
          children: ["Tel\xE9fono: ", /*#__PURE__*/_jsx("a", {
            href: "tel:8002151515",
            children: "800 215 1515"
          })]
        }), /*#__PURE__*/_jsxs("p", {
          className: styles.footerCopy,
          children: ["Puedes visitar nuestra p\xE1gina de\xA0", ' ', /*#__PURE__*/_jsx(Link, {
            href: "/preguntas-frecuentes",
            children: /*#__PURE__*/_jsx("a", {
              children: "preguntas frecuentes"
            })
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var HelpSidebar_HelpSidebar = ((/* unused pure expression or super */ null && (HelpSidebar)));
;// CONCATENATED MODULE: ./components/layout/HelpSidebar/index.ts


/***/ })

};
;