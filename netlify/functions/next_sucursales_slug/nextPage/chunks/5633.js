exports.id = 5633;
exports.ids = [5633,3382];
exports.modules = {

/***/ 33382:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ HelpSidebar_HelpSidebar; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./components/ui/index.ts
var ui = __webpack_require__(11325);
// EXTERNAL MODULE: ./components/layout/HelpSidebar/HelpSidebar.module.css
var HelpSidebar_module = __webpack_require__(15906);
var HelpSidebar_module_default = /*#__PURE__*/__webpack_require__.n(HelpSidebar_module);
;// CONCATENATED MODULE: ./components/layout/HelpSidebar/HelpSidebar.tsx







const HelpSidebar = ({
  direction = 'vertical',
  questions
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((HelpSidebar_module_default()).root, {
      [(HelpSidebar_module_default()).rootHorizontal]: direction === 'horizontal'
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ui/* Card */.Zb, {
      className: (HelpSidebar_module_default()).header,
      children: [/*#__PURE__*/jsx_runtime.jsx("h4", {
        className: (HelpSidebar_module_default()).headerTitle,
        children: "Preguntas Frecuentes"
      }), /*#__PURE__*/jsx_runtime.jsx("ul", {
        children: questions.map(item => /*#__PURE__*/jsx_runtime.jsx("li", {
          className: (HelpSidebar_module_default()).questionItem,
          children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: item.href,
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: (HelpSidebar_module_default()).questionLink,
              children: item.label
            })
          })
        }, item.id))
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ui/* Card */.Zb, {
      className: (HelpSidebar_module_default()).footer,
      children: [/*#__PURE__*/jsx_runtime.jsx("h5", {
        className: (HelpSidebar_module_default()).footerTitle,
        children: "\xBFTienes alguna pregunta?"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "prose",
        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
          className: (HelpSidebar_module_default()).footerCopy,
          children: "Para cualquier duda o aclaraci\xF3n, por favor comun\xEDcate con nosotros a trav\xE9s del los siguientes medios:"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          className: (HelpSidebar_module_default()).footerCopy,
          children: ["Tel\xE9fono: ", /*#__PURE__*/jsx_runtime.jsx("a", {
            href: "tel:8002151515",
            children: "800 215 1515"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          className: (HelpSidebar_module_default()).footerCopy,
          children: ["Puedes visitar nuestra p\xE1gina de\xA0", ' ', /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: "/preguntas-frecuentes",
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              children: "preguntas frecuentes"
            })
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var HelpSidebar_HelpSidebar = (HelpSidebar);
;// CONCATENATED MODULE: ./components/layout/HelpSidebar/index.ts


/***/ }),

/***/ 15906:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "HelpSidebar_root__21osy",
	"rootHorizontal": "HelpSidebar_rootHorizontal__2CUy4",
	"header": "HelpSidebar_header__1Adla",
	"footer": "HelpSidebar_footer__vlAXs",
	"headerTitle": "HelpSidebar_headerTitle__2WCEM",
	"headerCopy": "HelpSidebar_headerCopy__dEhNJ",
	"questions": "HelpSidebar_questions__3u_mf",
	"questionItem": "HelpSidebar_questionItem__oYsMv",
	"footerTitle": "HelpSidebar_footerTitle__3OUQF",
	"footerCopy": "HelpSidebar_footerCopy__2B13P"
};


/***/ })

};
;