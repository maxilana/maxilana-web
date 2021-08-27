exports.id = 7307;
exports.ids = [7307];
exports.modules = {

/***/ 7307:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./hooks/useToggleState.ts
var hooks_useToggleState = __webpack_require__(92161);
;// CONCATENATED MODULE: ./components/ui/Collapse/Collapse.tsx








const Collapse = ({
  title,
  children
}) => {
  const [collapsed, toggle] = useToggleState();
  return /*#__PURE__*/_jsxs("div", {
    className: cn(styles.root, {
      [styles.collapsed]: collapsed
    }),
    children: [/*#__PURE__*/_jsxs("div", {
      className: styles.header,
      role: "button",
      onClick: () => toggle(),
      children: [typeof title === 'string' ? /*#__PURE__*/_jsx("span", {
        className: "heading",
        children: title
      }) : title, /*#__PURE__*/_jsx(DownOutlined, {
        className: styles.indicator
      })]
    }), !collapsed && /*#__PURE__*/_jsx("div", {
      className: styles.content,
      children: children
    })]
  });
};

/* harmony default export */ var Collapse_Collapse = ((/* unused pure expression or super */ null && (Collapse)));
;// CONCATENATED MODULE: ./components/ui/Collapse/index.ts


/***/ })

};
;