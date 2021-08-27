exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 9524:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: HStack, VStack

// EXTERNAL MODULE: ./components/layout/Stack/HStack.tsx
var HStack = __webpack_require__(38244);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/layout/Stack/Stack.module.css
var Stack_module = __webpack_require__(5388);
var Stack_module_default = /*#__PURE__*/__webpack_require__.n(Stack_module);
;// CONCATENATED MODULE: ./components/layout/Stack/VStack.tsx



const spacingClasses = {
  sm: (Stack_module_default()).spacingSmall,
  md: "",
  lg: (Stack_module_default()).spacingLarge
};

const VStack = ({
  children,
  spacing = "md"
}) => {
  const spacingStyle = spacingClasses[spacing];
  const className = [styles.root, styles.vertical, spacingStyle].join(" ");
  return /*#__PURE__*/_jsx("div", {
    className: className,
    children: React.Children.map(children, child => /*#__PURE__*/_jsx("div", {
      children: child
    }))
  });
};

/* harmony default export */ var Stack_VStack = ((/* unused pure expression or super */ null && (VStack)));
;// CONCATENATED MODULE: ./components/layout/Stack/index.ts



/***/ }),

/***/ 7646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ Card_Card; }
});

// UNUSED EXPORTS: ProductCard

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./components/ui/Card/Cards.module.css
var Cards_module = __webpack_require__(37985);
var Cards_module_default = /*#__PURE__*/__webpack_require__.n(Cards_module);
;// CONCATENATED MODULE: ./components/ui/Card/Card.tsx




const Card = ({
  children,
  className
}) => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: classnames_default()((Cards_module_default()).root, className),
    children: children
  });
};

/* harmony default export */ var Card_Card = (Card);
// EXTERNAL MODULE: ./components/ui/Card/ProductCard.tsx + 2 modules
var ProductCard = __webpack_require__(76324);
;// CONCATENATED MODULE: ./components/ui/Card/index.ts



/***/ })

};
;