exports.id = 5315;
exports.ids = [5315];
exports.modules = {

/***/ 75315:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77637);


const getAllBranches = async () => {
  const response = await _axios__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get('/sucursales');
  return response.map(city => ({
    id: city === null || city === void 0 ? void 0 : city.id,
    slug: city === null || city === void 0 ? void 0 : city.slug,
    name: city === null || city === void 0 ? void 0 : city.ciudad,
    branches: city === null || city === void 0 ? void 0 : city.sucursales.map(item => ({
      id: item === null || item === void 0 ? void 0 : item.id,
      number: item === null || item === void 0 ? void 0 : item.numero,
      name: item === null || item === void 0 ? void 0 : item.nombre,
      address: item === null || item === void 0 ? void 0 : item.direccion,
      phone: item === null || item === void 0 ? void 0 : item.telefono,
      CityId: (item === null || item === void 0 ? void 0 : item.codigociudad) || (item === null || item === void 0 ? void 0 : item.ciudad),
      state: item === null || item === void 0 ? void 0 : item.estado,
      imgSketch: item === null || item === void 0 ? void 0 : item.img_croquis,
      active: item === null || item === void 0 ? void 0 : item.activo,
      mondayToFridaySchedule: item === null || item === void 0 ? void 0 : item.HorarioLV,
      saturdaySchedule: item === null || item === void 0 ? void 0 : item.HorarioS,
      sundaySchedule: item === null || item === void 0 ? void 0 : item.HorarioD,
      constancy: item === null || item === void 0 ? void 0 : item.constancia,
      mapId: item === null || item === void 0 ? void 0 : item.identifcadorparamapa,
      whatsapp: item === null || item === void 0 ? void 0 : item.whatsapp,
      formattedSchedule: item === null || item === void 0 ? void 0 : item.HorarioConFormato,
      formattedWhatsApp: item === null || item === void 0 ? void 0 : item.whatsappConFormato,
      email: item === null || item === void 0 ? void 0 : item.correoelectronico,
      mondayToFridayOpeningTime: item === null || item === void 0 ? void 0 : item.HoraAperturaLV,
      mondayToFridayClosingTime: item === null || item === void 0 ? void 0 : item.HoraCierreLV,
      saturdayOpeningTime: item === null || item === void 0 ? void 0 : item.HoraAperturaS,
      saturdayClosingTime: item === null || item === void 0 ? void 0 : item.HoraCierreS,
      sundayOpeningTime: item === null || item === void 0 ? void 0 : item.HoraAperturaD,
      sundayClosingTime: item === null || item === void 0 ? void 0 : item.HoraCierreD,
      slug: (item === null || item === void 0 ? void 0 : item.slug) || ''
    }))
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (getAllBranches);

/***/ })

};
;