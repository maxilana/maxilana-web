exports.id = 6324;
exports.ids = [6324];
exports.modules = {

/***/ 99047:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./components/products/ProductBadge/ProductBadge.tsx






const ProductBadge = ({
  type
}) => {
  return /*#__PURE__*/_jsx("span", {
    className: cn(styles.root, styles[type]),
    children: type === 'shop' ? /*#__PURE__*/_jsx(ShopFilled, {}) : /*#__PURE__*/_jsx(CarFilled, {})
  });
};

/* harmony default export */ var ProductBadge_ProductBadge = ((/* unused pure expression or super */ null && (ProductBadge)));
;// CONCATENATED MODULE: ./components/products/ProductBadge/index.ts


/***/ }),

/***/ 76324:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
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
function usePrice_usePrice(data) {
  const {
    amount,
    baseAmount
  } = data !== null && data !== void 0 ? data : {};
  const value = useMemo(() => {
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

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./components/products/ProductBadge/index.ts + 1 modules
var products_ProductBadge = __webpack_require__(99047);
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
  return /*#__PURE__*/_jsxs("div", {
    className: cn(styles.root, styles.rootProduct, {
      [styles.productLink]: !!href
    }),
    children: [!!href && /*#__PURE__*/_jsx(Link, {
      href: href,
      children: /*#__PURE__*/_jsx("a", {
        className: styles.blockLink
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: styles.productImgWrapper,
      children: [/*#__PURE__*/_jsx("div", {
        className: cn(styles.productImg, {
          [styles.productPlaceholder]: image === null
        }),
        children: image !== null ? /*#__PURE__*/_jsx(Image, {
          src: image,
          alt: title,
          objectFit: "cover",
          layout: "fill"
        }) : /*#__PURE__*/_jsx(PictureOutlined, {
          style: {
            fontSize: 40,
            color: 'white'
          }
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: styles.productBadge,
        children: [/*#__PURE__*/_jsx(ProductBadge, {
          type: "shop"
        }), shipping && /*#__PURE__*/_jsx(ProductBadge, {
          type: "car"
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: styles.productBody,
      children: /*#__PURE__*/_jsxs(VStack, {
        spacing: "sm",
        children: [/*#__PURE__*/_jsx("h3", {
          className: styles.productTitle,
          children: !!href ? /*#__PURE__*/_jsx(Link, {
            href: href,
            children: /*#__PURE__*/_jsx("a", {
              children: title
            })
          }) : title
        }), /*#__PURE__*/_jsx("div", {
          className: styles.productPrice,
          children: salePrice ? /*#__PURE__*/_jsxs(React.Fragment, {
            children: [/*#__PURE__*/_jsx("span", {
              className: styles.productPriceSale,
              children: discountPrice
            }), /*#__PURE__*/_jsx("span", {
              className: styles.productCompareAtPrice,
              children: basePrice
            })]
          }) : /*#__PURE__*/_jsx("span", {
            className: styles.productPriceSale,
            children: basePrice
          })
        }), /*#__PURE__*/_jsx("span", {
          className: styles.productBranch,
          children: branch
        })]
      })
    }), onSale && /*#__PURE__*/_jsx("span", {
      className: styles.productSaleBadge,
      children: "Oferta"
    })]
  });
};

/* harmony default export */ var Card_ProductCard = ((/* unused pure expression or super */ null && (ProductCard)));

/***/ })

};
;