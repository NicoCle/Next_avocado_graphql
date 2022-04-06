"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "isomorphic-unfetch"
const external_isomorphic_unfetch_namespaceObject = require("isomorphic-unfetch");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: ./src/components/Card/index.tsx



const AvoCards = ({ products  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: products.map(({ name , price , id , image  }, key)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `./product/${id}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    maxW: "sm",
                    borderWidth: "1px",
                    borderRadius: "lg",
                    overflow: "hidden",
                    p: "1rem",
                    _hover: {
                        boxShadow: "dark-lg",
                        cursor: "pointer"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                            src: image
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Badge, {
                                borderRadius: "full",
                                px: "2",
                                colorScheme: "teal",
                                children: price >= 1.3 ? "delicious" : "safe"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            mt: "1",
                            fontWeight: "semibold",
                            as: "h4",
                            lineHeight: "tight",
                            isTruncated: true,
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            children: price
                        })
                    ]
                })
            }, key));
        })
    }));
};
/* harmony default export */ const Card = (AvoCards);

// EXTERNAL MODULE: ./src/Layout/index.tsx + 6 modules
var Layout = __webpack_require__(53);
;// CONCATENATED MODULE: ./src/pages/index.tsx




const getStaticProps = async ()=>{
    const response = await external_isomorphic_unfetch_default()("https://next-avocado-two.vercel.app/api/avo");
    const { data: productList  } = await response.json();
    return {
        props: {
            productList
        }
    };
};
const HomePage = ({ productList  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Card, {
            products: productList
        })
    }));
};
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,53], () => (__webpack_exec__(4)));
module.exports = __webpack_exports__;

})();