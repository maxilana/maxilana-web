exports.id = 3368;
exports.ids = [3368];
exports.modules = {

/***/ 9524:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": function() { return /* reexport */ Stack_VStack; }
});

// UNUSED EXPORTS: HStack

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
  const className = [(Stack_module_default()).root, (Stack_module_default()).vertical, spacingStyle].join(" ");
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: className,
    children: react.Children.map(children, child => /*#__PURE__*/jsx_runtime.jsx("div", {
      children: child
    }))
  });
};

/* harmony default export */ var Stack_VStack = (VStack);
;// CONCATENATED MODULE: ./components/layout/Stack/index.ts



/***/ }),

/***/ 76324:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Card_ProductCard; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/index.js
var lib = __webpack_require__(39389);
// EXTERNAL MODULE: ./components/layout/index.ts
var layout = __webpack_require__(19115);
;// CONCATENATED MODULE: ./modules/hooks/usePrice.ts

const locale = "es-MX";
const currencyCode = "MXN";
function formatPrice({
  amount,
  locale
}) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode
  });
  return formatCurrency.format(amount);
}
function formatVariantPrice({
  amount,
  baseAmount,
  locale
}) {
  const hasDiscount = baseAmount > amount;
  const formatDiscount = new Intl.NumberFormat(locale, {
    style: 'percent'
  });
  const discount = hasDiscount ? formatDiscount.format((baseAmount - amount) / baseAmount) : null;
  const price = formatPrice({
    amount,
    locale
  });
  const basePrice = hasDiscount ? formatPrice({
    amount: baseAmount,
    locale
  }) : null;
  return {
    price,
    basePrice,
    discount
  };
}
function usePrice(data) {
  const {
    amount,
    baseAmount
  } = data !== null && data !== void 0 ? data : {};
  const value = (0,react.useMemo)(() => {
    if (typeof amount !== 'number') return '';
    return baseAmount ? formatVariantPrice({
      amount,
      baseAmount,
      locale
    }) : formatPrice({
      amount,
      locale
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, baseAmount]);
  return typeof value === 'string' ? {
    price: value
  } : value;
}
;// CONCATENATED MODULE: ./modules/hooks/index.ts

// EXTERNAL MODULE: ./components/ui/Card/Cards.module.css
var Cards_module = __webpack_require__(37985);
var Cards_module_default = /*#__PURE__*/__webpack_require__.n(Cards_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./components/products/ProductBadge/index.ts + 1 modules
var ProductBadge = __webpack_require__(99047);
;// CONCATENATED MODULE: ./components/ui/Card/ProductCard.tsx












const ProductCard = ({
  title,
  price,
  branch,
  image = null,
  onSale = null,
  shipping = null,
  salePrice = null,
  href = null
}) => {
  const {
    price: basePrice
  } = usePrice({
    amount: price
  });
  const {
    price: discountPrice
  } = usePrice(salePrice ? {
    amount: salePrice,
    baseAmount: price
  } : undefined);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((Cards_module_default()).root, (Cards_module_default()).rootProduct, {
      [(Cards_module_default()).productLink]: !!href
    }),
    children: [!!href && /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
      href: href,
      children: /*#__PURE__*/jsx_runtime.jsx("a", {
        className: (Cards_module_default()).blockLink
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (Cards_module_default()).productImgWrapper,
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: classnames_default()((Cards_module_default()).productImg, {
          [(Cards_module_default()).productPlaceholder]: image === null
        }),
        children: image !== null ? /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
          src: image,
          alt: title,
          objectFit: "cover",
          layout: "fill"
        }) : /*#__PURE__*/jsx_runtime.jsx(lib.PictureOutlined, {
          style: {
            fontSize: 40,
            color: 'white'
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (Cards_module_default()).productBadge,
        children: [/*#__PURE__*/jsx_runtime.jsx(ProductBadge/* default */.Z, {
          type: "shop"
        }), shipping && /*#__PURE__*/jsx_runtime.jsx(ProductBadge/* default */.Z, {
          type: "car"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (Cards_module_default()).productBody,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* VStack */.gC, {
        spacing: "sm",
        children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
          className: (Cards_module_default()).productTitle,
          children: !!href ? /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: href,
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              children: title
            })
          }) : title
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: (Cards_module_default()).productPrice,
          children: salePrice ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/jsx_runtime.jsx("span", {
              className: (Cards_module_default()).productPriceSale,
              children: discountPrice
            }), /*#__PURE__*/jsx_runtime.jsx("span", {
              className: (Cards_module_default()).productCompareAtPrice,
              children: basePrice
            })]
          }) : /*#__PURE__*/jsx_runtime.jsx("span", {
            className: (Cards_module_default()).productPriceSale,
            children: basePrice
          })
        }), /*#__PURE__*/jsx_runtime.jsx("span", {
          className: (Cards_module_default()).productBranch,
          children: branch
        })]
      })
    }), onSale && /*#__PURE__*/jsx_runtime.jsx("span", {
      className: (Cards_module_default()).productSaleBadge,
      children: "Oferta"
    })]
  });
};

/* harmony default export */ var Card_ProductCard = (ProductCard);

/***/ }),

/***/ 73227:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "ProductBadge_root__K1JxB",
	"shop": "ProductBadge_shop__w6rnx",
	"car": "ProductBadge_car__oaARk"
};


/***/ })

};
;