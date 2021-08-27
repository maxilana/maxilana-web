exports.id = 5280;
exports.ids = [5280];
exports.modules = {

/***/ 35280:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./components/ui/index.ts
var ui = __webpack_require__(11325);
;// CONCATENATED MODULE: ./components/common/ServicePaymentCards/ServicePaymentCards.tsx




;
/**
 * Dejé el CSS de esa manera porque teoricamente no habría variantes
 */

const ServicePaymentCards = ({
  actionCard,
  contextCard
}) => {
  return /*#__PURE__*/_jsxs("div", {
    className: "grid gap-6 sm:grid-flow-col",
    children: [/*#__PURE__*/_jsx(Card, {
      children: /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("div", {
          className: "mb-6",
          children: /*#__PURE__*/_jsx(Image, {
            width: 361,
            height: 222,
            layout: "responsive",
            src: actionCard.imageSource,
            alt: "Logotipo Maxilana Vales",
            objectFit: "contain"
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "space-y-3 sm:text-left lg:space-y-4",
          children: [/*#__PURE__*/_jsx("h5", {
            className: "text-2xl",
            children: actionCard.title
          }), /*#__PURE__*/_jsx("p", {
            children: actionCard.description
          }), /*#__PURE__*/_jsx(Button, {
            size: "small",
            theme: "primary",
            text: actionCard.buttonLabel,
            href: actionCard.buttonHref
          })]
        })]
      })
    }), /*#__PURE__*/_jsx(Card, {
      children: /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h5", {
          className: "text-xl mb-3",
          children: contextCard.title
        }), /*#__PURE__*/_jsx("p", {
          className: "text-secondary",
          children: contextCard.description
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex flex-row gap-4 flex-wrap items-center my-4",
          children: [/*#__PURE__*/_jsx(Image, {
            width: 124,
            height: 29,
            layout: "fixed",
            quality: 70,
            src: "/logo-banorte.png",
            alt: "Logotipo de Banorte"
          }), /*#__PURE__*/_jsx(Image, {
            width: 124,
            height: 47,
            layout: "fixed",
            quality: 70,
            src: "/logo-farmacia-guadalajara.png",
            alt: "Logotipo de Farmacia Guadalajara"
          }), /*#__PURE__*/_jsx(Image, {
            width: 49,
            height: 47,
            layout: "fixed",
            quality: 70,
            src: "/logo-7-eleven.png",
            alt: "Logotipo de 7Eleven"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "mb-6",
          children: [/*#__PURE__*/_jsx("p", {
            className: "text-lg mb-2",
            children: /*#__PURE__*/_jsx("strong", {
              children: "N\xFAmeros de cuentra para realizar tus pagos"
            })
          }), /*#__PURE__*/_jsxs("p", {
            className: "text-secondary",
            children: [/*#__PURE__*/_jsx("em", {
              className: "text-primary font-normal",
              children: "Cuenta Banorte: "
            }), "0262179436"]
          }), /*#__PURE__*/_jsxs("p", {
            className: "text-secondary",
            children: [/*#__PURE__*/_jsx("em", {
              className: "text-primary font-normal",
              children: "Transferencia CLABE: "
            }), "072730002621794363"]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("p", {
            className: "text-secondary",
            children: "1. Realiza tu dep\xF3sito o transferencia."
          }), /*#__PURE__*/_jsx("p", {
            className: "text-secondary",
            children: "2. Env\xEDa por WhatsApp tu comprobante de pago junto a tu n\xFAmero de Vale y menciona el tipo de servicio pagado."
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var ServicePaymentCards_ServicePaymentCards = ((/* unused pure expression or super */ null && (ServicePaymentCards)));
;// CONCATENATED MODULE: ./components/common/ServicePaymentCards/index.ts


/***/ })

};
;