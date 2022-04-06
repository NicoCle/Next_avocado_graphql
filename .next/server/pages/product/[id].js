"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/Layout/index.tsx + 6 modules
var Layout = __webpack_require__(53);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: external "react-icons/ti"
const ti_namespaceObject = require("react-icons/ti");
;// CONCATENATED MODULE: ./src/components/ProductSummary/index.tsx



const ProductSummary = ({ product  })=>{
    const { name , sku , price , image , attributes  } = product;
    const { description , hardiness , shape , taste  } = attributes;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        align: "center",
        gap: "2rem",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                borderWidth: "1px",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                        src: image
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        direction: "column",
                        divider: /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {}),
                        p: "1rem",
                        gap: "1rem",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                children: price
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                children: [
                                    " SKU: ",
                                    sku
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                direction: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                        type: "number",
                                        fontWeight: "bold"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        p: "1.5rem",
                                        leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(ti_namespaceObject.TiShoppingCart, {}),
                                        colorScheme: "pink",
                                        variant: "solid",
                                        children: "Add to Cart"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                p: "1rem",
                maxW: "80%",
                borderWidth: "1px",
                divider: /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {}),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        size: "md",
                        children: "About this Avocado"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Table, {
                variant: "simple",
                w: "80%",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Thead, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tr, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                children: "Attributes"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tbody, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tr, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: "Shape"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: shape
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tr, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: "Hardiness"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: hardiness
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tr, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: "Taste"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: taste
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_ProductSummary = (ProductSummary);

;// CONCATENATED MODULE: ./src/pages/product/[id].tsx



const getStaticPaths = async ()=>{
    const response = await fetch("https://next-avocado-two.vercel.app/api/avo");
    const { data: productList  } = await response.json();
    const paths = productList.map(({ id  })=>({
            params: {
                id
            }
        })
    );
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const response = await fetch(`https://next-avocado-two.vercel.app/api/avo/${params.id}`);
    const product = await response.json();
    return {
        props: {
            product
        }
    };
};
const ProductPage = ({ product  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: product === null ? null : /*#__PURE__*/ jsx_runtime_.jsx(components_ProductSummary, {
            product: product
        })
    }));
};
/* harmony default export */ const _id_ = (ProductPage);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,53], () => (__webpack_exec__(634)));
module.exports = __webpack_exports__;

})();