exports.id = 2481;
exports.ids = [2481];
exports.modules = {

/***/ 82481:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./components/ui/Calendar/Calendar.tsx









const Calendar = ({
  onSelect
}) => {
  const now = new Date();
  const {
    0: isOpen,
    1: toggleOpen
  } = useState(false);
  const {
    0: selectedDay,
    1: setSelectedDay
  } = useState(now);

  const handleDayClick = date => {
    const day = date.toDate();
    onSelect(day);
    setSelectedDay(day);
  };

  const dt = DateTime.fromJSDate(selectedDay);
  const formatted = dt.toLocaleString(DateTime.DATE_MED);
  return /*#__PURE__*/_jsxs("div", {
    className: styles.root,
    children: [/*#__PURE__*/_jsxs("div", {
      className: styles.heading,
      children: [/*#__PURE__*/_jsx("span", {
        className: styles.headingTitle,
        children: "Fecha de c\xE1lculo"
      }), /*#__PURE__*/_jsx("span", {
        className: styles.headingData,
        children: formatted
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: styles.calendarWrapper,
      children: [/*#__PURE__*/_jsx("div", {
        className: styles.calendarTrigger,
        children: /*#__PURE__*/_jsxs("span", {
          role: "checkbox",
          "aria-checked": isOpen,
          className: styles.calendarTrigger,
          onClick: () => {
            toggleOpen(!isOpen);
          },
          children: [/*#__PURE__*/_jsx("span", {
            className: cn(styles.caret, {
              [styles.caretUp]: isOpen
            }),
            children: /*#__PURE__*/_jsx(DownOutlined, {})
          }), "Calcular con otra fecha"]
        })
      }), /*#__PURE__*/_jsx("div", {
        className: cn({
          [styles.calendarExpanded]: isOpen
        }, styles.calendarTransition),
        children: /*#__PURE__*/_jsx(AntdCalendar, {
          fullscreen: false,
          onSelect: handleDayClick
        })
      })]
    })]
  });
};

/* harmony default export */ var Calendar_Calendar = ((/* unused pure expression or super */ null && (Calendar)));
;// CONCATENATED MODULE: ./components/ui/Calendar/index.ts


/***/ })

};
;