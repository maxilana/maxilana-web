/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 99047:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ ProductBadge_ProductBadge; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/index.js
var lib = __webpack_require__(39389);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/products/ProductBadge/ProductBadge.module.css
var ProductBadge_module = __webpack_require__(73227);
var ProductBadge_module_default = /*#__PURE__*/__webpack_require__.n(ProductBadge_module);
;// CONCATENATED MODULE: ./components/products/ProductBadge/ProductBadge.tsx






const ProductBadge = ({
  type
}) => {
  return /*#__PURE__*/jsx_runtime.jsx("span", {
    className: classnames_default()((ProductBadge_module_default()).root, (ProductBadge_module_default())[type]),
    children: type === 'shop' ? /*#__PURE__*/jsx_runtime.jsx(lib.ShopFilled, {}) : /*#__PURE__*/jsx_runtime.jsx(lib.CarFilled, {})
  });
};

/* harmony default export */ var ProductBadge_ProductBadge = (ProductBadge);
;// CONCATENATED MODULE: ./components/products/ProductBadge/index.ts


/***/ }),

/***/ 11325:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Il": function() { return /* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__.I; },
/* harmony export */   "zx": function() { return /* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_1__.z; }
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7646);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80629);
/* harmony import */ var _CheckableTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76702);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14821);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33897);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81124);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82481);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7307);









/***/ }),

/***/ 92161:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


const useToggleState = (value = false) => {
  const {
    0: state,
    1: setState
  } = useState(value);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useToggleState)));

/***/ }),

/***/ 66729:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/index.js
var lib = __webpack_require__(39389);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./api/getAllCities.ts
var getAllCities = __webpack_require__(53465);
// EXTERNAL MODULE: ./api/axios.ts
var axios = __webpack_require__(77637);
;// CONCATENATED MODULE: ./api/getBranchById.ts


const getBranchById = async id => {
  const branch = await axios/* default.get */.Z.get(`/sucursal/${id}`);
  return {
    id: branch === null || branch === void 0 ? void 0 : branch.id,
    number: branch === null || branch === void 0 ? void 0 : branch.numero,
    name: branch === null || branch === void 0 ? void 0 : branch.nombre,
    address: branch === null || branch === void 0 ? void 0 : branch.direccion,
    phone: branch === null || branch === void 0 ? void 0 : branch.telefono,
    CityId: (branch === null || branch === void 0 ? void 0 : branch.codigociudad) || (branch === null || branch === void 0 ? void 0 : branch.ciudad),
    state: branch === null || branch === void 0 ? void 0 : branch.estado,
    imgSketch: branch === null || branch === void 0 ? void 0 : branch.img_croquis,
    active: branch === null || branch === void 0 ? void 0 : branch.activo,
    mondayToFridaySchedule: branch === null || branch === void 0 ? void 0 : branch.HorarioLV,
    saturdaySchedule: branch === null || branch === void 0 ? void 0 : branch.HorarioS,
    sundaySchedule: branch === null || branch === void 0 ? void 0 : branch.HorarioD,
    constancy: branch === null || branch === void 0 ? void 0 : branch.constancia,
    mapId: branch === null || branch === void 0 ? void 0 : branch.identifcadorparamapa,
    whatsapp: branch === null || branch === void 0 ? void 0 : branch.whatsapp,
    formattedSchedule: branch === null || branch === void 0 ? void 0 : branch.HorarioConFormato,
    formattedWhatsApp: branch === null || branch === void 0 ? void 0 : branch.whatsappConFormato,
    email: branch === null || branch === void 0 ? void 0 : branch.correoelectronico,
    mondayToFridayOpeningTime: branch === null || branch === void 0 ? void 0 : branch.HoraAperturaLV,
    mondayToFridayClosingTime: branch === null || branch === void 0 ? void 0 : branch.HoraCierreLV,
    saturdayOpeningTime: branch === null || branch === void 0 ? void 0 : branch.HoraAperturaS,
    saturdayClosingTime: branch === null || branch === void 0 ? void 0 : branch.HoraCierreS,
    sundayOpeningTime: branch === null || branch === void 0 ? void 0 : branch.HoraAperturaD,
    sundayClosingTime: branch === null || branch === void 0 ? void 0 : branch.HoraCierreD
  };
};

/* harmony default export */ var api_getBranchById = (getBranchById);
// EXTERNAL MODULE: ./api/getAllBranches.ts
var getAllBranches = __webpack_require__(75315);
// EXTERNAL MODULE: ./utils/slugify.ts
var utils_slugify = __webpack_require__(32105);
;// CONCATENATED MODULE: ./api/getBranchesSlugs.ts



const getBranchesSlugs = async () => {
  const response = await (0,getAllBranches/* default */.Z)();
  const branches = response.reduce((r, c) => {
    return [...r, ...c.branches];
  }, []);
  return branches.map(branch => `${branch.id}-${(0,utils_slugify/* default */.Z)(branch.name)}`);
};

/* harmony default export */ var api_getBranchesSlugs = (getBranchesSlugs);
// EXTERNAL MODULE: ./api/getProducts.ts
var getProducts = __webpack_require__(29788);
// EXTERNAL MODULE: ./components/layout/index.ts
var layout = __webpack_require__(19115);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./hooks/useToggleState.ts
var hooks_useToggleState = __webpack_require__(92161);
// EXTERNAL MODULE: ./components/ui/index.ts
var ui = __webpack_require__(11325);
;// CONCATENATED MODULE: ./components/Branches/BranchCard/BranchCard.tsx











const BranchCard_BranchCard = ({
  data
}) => {
  const [showDetails, toggleDetails] = useToggleState(false);
  return /*#__PURE__*/_jsxs(Card, {
    className: showDetails ? styles.expanded : '',
    children: [/*#__PURE__*/_jsxs("div", {
      className: styles.heading,
      children: [/*#__PURE__*/_jsx("h3", {
        className: styles.name,
        children: data.name
      }), /*#__PURE__*/_jsx("button", {
        onClick: () => toggleDetails(),
        className: styles.toggle,
        children: /*#__PURE__*/_jsx(DownOutlined, {})
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/_jsx("p", {
        className: styles.address,
        children: data.address
      }), /*#__PURE__*/_jsxs("div", {
        className: cn(styles.details),
        children: [/*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx(BranchSchedule, {
            branch: data
          })
        }), /*#__PURE__*/_jsx(Button, {
          text: "Ver remates de la tienda",
          fullWidth: true,
          theme: "primary",
          href: `/sucursales/${data === null || data === void 0 ? void 0 : data.id}-${slugify(data.name)}`
        }), /*#__PURE__*/_jsxs("div", {
          className: styles.contactOptions,
          children: [/*#__PURE__*/_jsx(CircleLink, {
            href: "#",
            text: "Llamar por tel\xE9fono",
            icon: /*#__PURE__*/_jsx(PhoneOutlined, {})
          }), /*#__PURE__*/_jsx(CircleLink, {
            href: "#",
            text: "Enviar WhatsApp",
            icon: /*#__PURE__*/_jsx(WhatsAppOutlined, {}),
            whatsapp: true
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "text-center",
          children: (data === null || data === void 0 ? void 0 : data.constancy) && /*#__PURE__*/_jsxs("a", {
            href: data === null || data === void 0 ? void 0 : data.constancy,
            className: "text-brand inline-flex items-center space-x-2 hover:underline",
            rel: "nofollow noreferrer",
            target: "_blank",
            children: [/*#__PURE__*/_jsx("span", {
              children: "Constancia de inscripci\xF3n"
            }), /*#__PURE__*/_jsx(SelectOutlined, {})]
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var Branches_BranchCard_BranchCard = ((/* unused pure expression or super */ null && (BranchCard_BranchCard)));
;// CONCATENATED MODULE: ./components/Branches/BranchCard/index.ts

;// CONCATENATED MODULE: ./components/Branches/BranchesMap/BranchesMap.tsx











const BranchesMap = ({
  cities,
  branches,
  currentCity
}) => {
  const [mapVisible, toggleMap] = useToggleState();
  return /*#__PURE__*/_jsxs("main", {
    className: cn(styles.root, {
      [styles.visible]: mapVisible
    }),
    children: [/*#__PURE__*/_jsxs("aside", {
      className: styles.container,
      children: [/*#__PURE__*/_jsx("h1", {
        className: styles.title,
        children: "Ubica tu sucursal"
      }), /*#__PURE__*/_jsx("p", {
        children: "Elige tu ciudad para ver las sucursales m\xE1s cercanas"
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx(Link, {
          href: "/sucursales",
          children: /*#__PURE__*/_jsx("a", {
            children: /*#__PURE__*/_jsx(CheckableTag, {
              className: styles.city,
              checked: !Boolean(currentCity),
              children: "Todas"
            })
          })
        }), !!(cities !== null && cities !== void 0 && cities.length) && cities.map(city => /*#__PURE__*/_jsx(Link, {
          href: `/sucursales/ciudad/${city === null || city === void 0 ? void 0 : city.slug}`,
          children: /*#__PURE__*/_jsx("a", {
            children: /*#__PURE__*/_jsx(CheckableTag, {
              className: styles.city,
              checked: (city === null || city === void 0 ? void 0 : city.id) === (currentCity === null || currentCity === void 0 ? void 0 : currentCity.id),
              children: city.name
            })
          })
        }, city.id))]
      }, (currentCity === null || currentCity === void 0 ? void 0 : currentCity.name) || 'all'), /*#__PURE__*/_jsxs("span", {
        className: styles.count,
        children: [branches === null || branches === void 0 ? void 0 : branches.length, " sucursales"]
      }), !!(branches !== null && branches !== void 0 && branches.length) && branches.map(branch => /*#__PURE__*/_jsx(BranchCard, {
        data: branch
      }, branch === null || branch === void 0 ? void 0 : branch.id))]
    }), /*#__PURE__*/_jsx("div", {
      className: styles.map,
      children: /*#__PURE__*/_jsx("iframe", {
        src: "https://www.google.com/maps/d/embed?mid=zqXiv51ICI8g.kRua7qr6zNBg"
      })
    }), /*#__PURE__*/_jsx(Button, {
      text: mapVisible ? 'Ver lista' : 'Ver mapa',
      theme: "secondary",
      icon: mapVisible ? /*#__PURE__*/_jsx(UnorderedListOutlined, {
        style: {
          fontSize: 20
        }
      }) : /*#__PURE__*/_jsx(EnvironmentOutlined, {
        style: {
          fontSize: 20
        }
      }),
      className: styles.mapOpener,
      onClick: () => toggleMap()
    })]
  });
};

/* harmony default export */ var BranchesMap_BranchesMap = ((/* unused pure expression or super */ null && (BranchesMap)));
;// CONCATENATED MODULE: ./components/Branches/BranchesMap/index.ts

// EXTERNAL MODULE: ./components/Branches/CircleLink/CircleLink.module.css
var CircleLink_module = __webpack_require__(42896);
var CircleLink_module_default = /*#__PURE__*/__webpack_require__.n(CircleLink_module);
;// CONCATENATED MODULE: ./components/Branches/CircleLink/CircleLink.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const CircleLink_CircleLink = (_ref) => {
  let {
    icon,
    text,
    className,
    whatsapp,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["icon", "text", "className", "whatsapp", "children"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("a", _objectSpread(_objectSpread({}, props), {}, {
    className: classnames_default()((CircleLink_module_default()).root, className),
    children: [/*#__PURE__*/jsx_runtime.jsx("span", {
      className: classnames_default()((CircleLink_module_default()).icon, {
        [(CircleLink_module_default()).whatsapp]: whatsapp
      }),
      children: icon
    }), /*#__PURE__*/jsx_runtime.jsx("span", {
      className: (CircleLink_module_default()).text,
      children: text
    })]
  }));
};

/* harmony default export */ var Branches_CircleLink_CircleLink = (CircleLink_CircleLink);
;// CONCATENATED MODULE: ./components/Branches/CircleLink/index.ts

// EXTERNAL MODULE: ./components/Branches/BranchSchedule/BranchSchedule.module.css
var BranchSchedule_module = __webpack_require__(4503);
var BranchSchedule_module_default = /*#__PURE__*/__webpack_require__.n(BranchSchedule_module);
;// CONCATENATED MODULE: ./components/Branches/BranchSchedule/BranchSchedule.tsx






const BranchSchedule_BranchSchedule = ({
  branch
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx("span", {
      className: (BranchSchedule_module_default()).heading,
      children: "HORARIO:"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("dl", {
      className: (BranchSchedule_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime.jsx("dt", {
        children: "Lun - Vie:"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("dd", {
        children: [branch === null || branch === void 0 ? void 0 : branch.mondayToFridaySchedule, " hrs."]
      }), /*#__PURE__*/jsx_runtime.jsx("dt", {
        children: "S\xE1b:"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("dd", {
        children: [branch === null || branch === void 0 ? void 0 : branch.saturdaySchedule, " hrs."]
      }), /*#__PURE__*/jsx_runtime.jsx("dt", {
        children: "Dom:"
      }), /*#__PURE__*/jsx_runtime.jsx("dd", {
        children: (branch === null || branch === void 0 ? void 0 : branch.sundaySchedule) === 'Cerrado' ? 'Cerrado' : `${branch === null || branch === void 0 ? void 0 : branch.sundaySchedule} hrs.`
      })]
    })]
  });
};

/* harmony default export */ var Branches_BranchSchedule_BranchSchedule = (BranchSchedule_BranchSchedule);
;// CONCATENATED MODULE: ./components/Branches/BranchSchedule/index.ts

;// CONCATENATED MODULE: ./components/Branches/index.ts



;// CONCATENATED MODULE: ./public/logo-redondo.png
/* harmony default export */ var logo_redondo = ({"src":"/_next/static/image/public/logo-redondo.8385b159b8c8fc8acf2eb86c1624dd5d.png","height":123,"width":124,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AdbY3gApJyEYm6CylMLK20L5+vwAPTUjvW1nVG3Y2uDoAf///xZ0fZnFjazWJKqITgAqJx8AjZa0ABoWDtuEfGI7AZOZrKLz9fddbWZS+QoKCAbS1dwAIyEX+n+KqQcfGBKiAV9rjeN3bVEcKSch/0RciwAvEc4Ai3EYAKi7BgHA3SbkAWJujuFvZkweHRsV/hIRVgGkmSEAW1QOAMLIBgGkwCPiAYaOpJpNSDhlLCkj+c3Q2QYMCfwAJycB+pudyQfu9Q6cAdDR2Q8CBALCBQQDLgMEAgD+/gAA/v8DAOzt7tMB+/U+AcrN1QAKCQYPtbvLjdjc6EYCAf8AJiIVunJqUHTO0t/wh+tw7kaIwDIAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./pages/sucursales/[slug].tsx














const getStaticPaths = async () => {
  const slugs = await api_getBranchesSlugs();
  return {
    paths: slugs.map(slug => ({
      params: {
        slug
      }
    })),
    fallback: false
  };
};
const getStaticProps = async ctx => {
  var _ctx$params;

  const slug = ctx === null || ctx === void 0 ? void 0 : (_ctx$params = ctx.params) === null || _ctx$params === void 0 ? void 0 : _ctx$params.slug;
  const [id] = slug.split('-');
  if (Number.isNaN(parseInt(id))) return {
    notFound: true
  };

  try {
    const branch = await api_getBranchById(parseInt(id));
    const cities = await (0,getAllCities/* default */.Z)();
    const products = await (0,getProducts/* default */.Z)({
      sucursal: id
    });
    const city = cities.find(item => item.id === branch.CityId);
    return {
      props: {
        branch,
        city,
        products: products.rows
      }
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true
    };
  }
};

const View = ({
  branch,
  city,
  products
}) => {
  const imageBaseURL = "https://www.maxilana.com/images/remates";

  if (!imageBaseURL) {
    throw Error('Environment variable NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL is missing');
  }

  return /*#__PURE__*/jsx_runtime.jsx(layout/* Layout */.Ar, {
    title: `${branch.name}, ${city === null || city === void 0 ? void 0 : city.name} ${city === null || city === void 0 ? void 0 : city.state}`,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("main", {
      className: "container mx-auto p-4 flex flex-col gap-12 md:flex-row",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("aside", {
        className: "divide-y divide-gray-300 md:min-w-[237px] xl:min-w-[300px]",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "py-4 flex flex-col items-center text-center space-y-2",
          children: [/*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            src: logo_redondo,
            alt: "Logo Maxilana",
            layout: "fixed"
          }), /*#__PURE__*/jsx_runtime.jsx("h1", {
            className: "h6",
            children: branch.name
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-secondary text-sm",
            children: branch.address
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "grid grid-cols-3 py-4",
          children: [/*#__PURE__*/jsx_runtime.jsx(Branches_CircleLink_CircleLink, {
            href: "#",
            text: "Llamar por tel\xE9fono",
            icon: /*#__PURE__*/jsx_runtime.jsx(lib.PhoneOutlined, {})
          }), /*#__PURE__*/jsx_runtime.jsx(Branches_CircleLink_CircleLink, {
            href: "#",
            text: "Ver en el mapa",
            icon: /*#__PURE__*/jsx_runtime.jsx(lib.EnvironmentOutlined, {})
          }), /*#__PURE__*/jsx_runtime.jsx(Branches_CircleLink_CircleLink, {
            href: "#",
            text: "Enviar WhatsApp",
            icon: /*#__PURE__*/jsx_runtime.jsx(lib.WhatsAppOutlined, {}),
            whatsapp: true
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "py-4 text-secondary",
          children: /*#__PURE__*/jsx_runtime.jsx(Branches_BranchSchedule_BranchSchedule, {
            branch: branch
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
        className: "mb-16",
        children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
          className: "h5 my-6",
          children: "Algunos productos que puedes encontrar en nuestra sucursal"
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "grid grid-cols-2 gap-4 mb-12 md:grid-cols-3 xl:grid-cols-4",
          children: !!(products !== null && products !== void 0 && products.length) && products.map(product => /*#__PURE__*/jsx_runtime.jsx(ui/* ProductCard */.Il, {
            href: product !== null && product !== void 0 && product.slug ? `/producto/${product === null || product === void 0 ? void 0 : product.slug}` : `/producto/${product.id}-${(0,utils_slugify/* default */.Z)(product.name)}`,
            title: product.name,
            branch: `${branch.name}, ${city === null || city === void 0 ? void 0 : city.name} ${city === null || city === void 0 ? void 0 : city.state}`,
            price: product.price,
            salePrice: product.netPrice,
            image: `${imageBaseURL}/${product.code}.jpg`
          }, product.id))
        }), /*#__PURE__*/jsx_runtime.jsx(ui/* Button */.zx, {
          href: `/busqueda?sucursal=${branch.id}`,
          text: "Ver todos",
          theme: "secondary",
          fullWidth: true
        })]
      })]
    })
  });
};

/* harmony default export */ var _slug_ = (View);

/***/ }),

/***/ 20373:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.local","contents":"NEXT_PUBLIC_API_BASEURL=https://www.maxilana.com/api\n\nNEXT_PUBLIC_PRODUCT_IMAGES_BASEURL=https://www.maxilana.com/images/remates\n# Agregar al final /[ProductId].jpg (TodPas las imágenes miden 512x512 pixeles)\n# los productos pueden tener hasta 6 imágenes para obtenerlas todas se debe agregar _1,_2 después\n# del id del producto y antes de .jpg\n# Ejemplo:  https://www.maxilana.com/images/remates/:ProductId_2.jpg\n"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(6021)

      const appMod = __webpack_require__(71476)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(66729)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/sucursales/[slug]",
        buildId: "CczD5jIf00xI7Yu6VlF5-",
        escapedBuildId: "CczD5jIf00xI7Yu6VlF5\-",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"10971749d0d071a82f42371a969a8d41",previewModeSigningKey:"eab13b487472eb0bff5fd8e933a55e93ca7a7835212f45aaf161c6aa30138ea1",previewModeEncryptionKey:"891c37a9705e6ac84c75332ae14f664442a06292b70a6b52cc95c86f16e58b0e"}
      })
      
    

/***/ }),

/***/ 4503:
/***/ (function(module) {

// Exports
module.exports = {
	"heading": "BranchSchedule_heading__290WR",
	"content": "BranchSchedule_content__isBBB"
};


/***/ }),

/***/ 42896:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "CircleLink_root__1i070",
	"icon": "CircleLink_icon__17GCv",
	"whatsapp": "CircleLink_whatsapp__1unUD",
	"text": "CircleLink_text__18lvL"
};


/***/ }),

/***/ 67294:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(72408);
} else {}


/***/ }),

/***/ 42357:
/***/ (function(module) {

"use strict";
module.exports = require("assert");;

/***/ }),

/***/ 64293:
/***/ (function(module) {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

"use strict";
module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

"use strict";
module.exports = require("string_decoder");;

/***/ }),

/***/ 33867:
/***/ (function(module) {

"use strict";
module.exports = require("tty");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [4322,9293,446,4651,9917,8647,1428,2474,8343,2481,4095,7307,629,5280,2667,4474,3382,6675,3368,2206,5315], function() { return __webpack_require__(20373); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [{"url":"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap","content":"@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"}];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			3272: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(4322);
/******/ 			__webpack_require__.e(9293);
/******/ 			__webpack_require__.e(446);
/******/ 			__webpack_require__.e(4651);
/******/ 			__webpack_require__.e(9917);
/******/ 			__webpack_require__.e(8647);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(2474);
/******/ 			__webpack_require__.e(8343);
/******/ 			__webpack_require__.e(2481);
/******/ 			__webpack_require__.e(4095);
/******/ 			__webpack_require__.e(7307);
/******/ 			__webpack_require__.e(629);
/******/ 			__webpack_require__.e(5280);
/******/ 			__webpack_require__.e(2667);
/******/ 			__webpack_require__.e(4474);
/******/ 			__webpack_require__.e(3382);
/******/ 			__webpack_require__.e(6675);
/******/ 			__webpack_require__.e(3368);
/******/ 			__webpack_require__.e(2206);
/******/ 			__webpack_require__.e(5315);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;