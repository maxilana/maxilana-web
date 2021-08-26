exports.id = 2667;
exports.ids = [2667];
exports.modules = {

/***/ 52667:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: FormContainer, InputField

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./components/common/Forms/InputField.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const InputField = (_ref) => {
  let {
    name,
    label,
    required,
    inline
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["name", "label", "required", "inline"]);

  const {
    id,
    type
  } = rest;
  let isInline = false;

  if (inline || type === 'radio') {
    isInline = true;
  }

  return /*#__PURE__*/_jsxs("div", {
    className: cn(styles.root, {
      [styles.inline]: isInline
    }),
    children: [/*#__PURE__*/_jsxs("label", {
      htmlFor: id !== null && id !== void 0 ? id : name,
      className: styles.label,
      children: [label, required && /*#__PURE__*/_jsx("span", {
        children: " *"
      })]
    }), /*#__PURE__*/_jsx("input", _objectSpread(_objectSpread({}, rest), {}, {
      name: name,
      id: id !== null && id !== void 0 ? id : name,
      className: styles.input
    }))]
  });
};

/* harmony default export */ var Forms_InputField = ((/* unused pure expression or super */ null && (InputField)));
;// CONCATENATED MODULE: ./components/common/Forms/FormContainer.tsx



const FormContainer = ({
  children
}) => {
  return /*#__PURE__*/_jsx("form", {
    className: styles.root,
    children: children
  });
};

/* harmony default export */ var Forms_FormContainer = ((/* unused pure expression or super */ null && (FormContainer)));
;// CONCATENATED MODULE: ./components/common/Forms/index.ts



/***/ })

};
;