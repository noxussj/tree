/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/tree.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/tree.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icon-arrow.svg */ \"./src/assets/icon-arrow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".tree {\\n  font-size: 14px;\\n}\\n.tree i,\\n.tree span {\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n.tree section .section__item {\\n  height: 26px;\\n  display: flex;\\n  align-items: center;\\n}\\n.tree section .section__item .icon-arrow {\\n  margin-right: 6px;\\n  width: 8px;\\n  height: 8px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center center;\\n  background-size: 160%;\\n  transition-duration: 0.2s;\\n}\\n.tree section .section__item .icon-arrow.none {\\n  background: none;\\n}\\n.tree section .section__item span {\\n  margin-left: 3px;\\n  line-height: 14px;\\n  color: #666;\\n}\\n.tree section .section__item:hover {\\n  cursor: pointer;\\n  background-color: #f5f7fa;\\n}\\n.tree section section {\\n  padding-left: 16px;\\n}\\n.tree section.is-expand > .section__item .icon-arrow {\\n  transform: rotate(90deg);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tree/./src/styles/tree.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tree/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://tree/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tree/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/h.js":
/*!******************************************!*\
  !*** ./node_modules/snabbdom/build/h.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNS\": () => (/* binding */ addNS),\n/* harmony export */   \"fragment\": () => (/* binding */ fragment),\n/* harmony export */   \"h\": () => (/* binding */ h)\n/* harmony export */ });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vnode */ \"./node_modules/snabbdom/build/vnode.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./node_modules/snabbdom/build/is.js\");\n\n\nfunction addNS(data, children, sel) {\n    data.ns = \"http://www.w3.org/2000/svg\";\n    if (sel !== \"foreignObject\" && children !== undefined) {\n        for (let i = 0; i < children.length; ++i) {\n            const child = children[i];\n            if (typeof child === \"string\")\n                continue;\n            const childData = child.data;\n            if (childData !== undefined) {\n                addNS(childData, child.children, child.sel);\n            }\n        }\n    }\n}\nfunction h(sel, b, c) {\n    let data = {};\n    let children;\n    let text;\n    let i;\n    if (c !== undefined) {\n        if (b !== null) {\n            data = b;\n        }\n        if (_is__WEBPACK_IMPORTED_MODULE_0__.array(c)) {\n            children = c;\n        }\n        else if (_is__WEBPACK_IMPORTED_MODULE_0__.primitive(c)) {\n            text = c.toString();\n        }\n        else if (c && c.sel) {\n            children = [c];\n        }\n    }\n    else if (b !== undefined && b !== null) {\n        if (_is__WEBPACK_IMPORTED_MODULE_0__.array(b)) {\n            children = b;\n        }\n        else if (_is__WEBPACK_IMPORTED_MODULE_0__.primitive(b)) {\n            text = b.toString();\n        }\n        else if (b && b.sel) {\n            children = [b];\n        }\n        else {\n            data = b;\n        }\n    }\n    if (children !== undefined) {\n        for (i = 0; i < children.length; ++i) {\n            if (_is__WEBPACK_IMPORTED_MODULE_0__.primitive(children[i]))\n                children[i] = (0,_vnode__WEBPACK_IMPORTED_MODULE_1__.vnode)(undefined, undefined, undefined, children[i], undefined);\n        }\n    }\n    if (sel[0] === \"s\" &&\n        sel[1] === \"v\" &&\n        sel[2] === \"g\" &&\n        (sel.length === 3 || sel[3] === \".\" || sel[3] === \"#\")) {\n        addNS(data, children, sel);\n    }\n    return (0,_vnode__WEBPACK_IMPORTED_MODULE_1__.vnode)(sel, data, children, text, undefined);\n}\n/**\n * @experimental\n */\nfunction fragment(children) {\n    let c;\n    let text;\n    if (_is__WEBPACK_IMPORTED_MODULE_0__.array(children)) {\n        c = children;\n    }\n    else if (_is__WEBPACK_IMPORTED_MODULE_0__.primitive(c)) {\n        text = children;\n    }\n    else if (c && c.sel) {\n        c = [children];\n    }\n    if (c !== undefined) {\n        for (let i = 0; i < c.length; ++i) {\n            if (_is__WEBPACK_IMPORTED_MODULE_0__.primitive(c[i]))\n                c[i] = (0,_vnode__WEBPACK_IMPORTED_MODULE_1__.vnode)(undefined, undefined, undefined, c[i], undefined);\n        }\n    }\n    return (0,_vnode__WEBPACK_IMPORTED_MODULE_1__.vnode)(undefined, {}, c, text, undefined);\n}\n//# sourceMappingURL=h.js.map\n\n//# sourceURL=webpack://tree/./node_modules/snabbdom/build/h.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/htmldomapi.js":
/*!***************************************************!*\
  !*** ./node_modules/snabbdom/build/htmldomapi.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlDomApi\": () => (/* binding */ htmlDomApi)\n/* harmony export */ });\nfunction createElement(tagName, options) {\n    return document.createElement(tagName, options);\n}\nfunction createElementNS(namespaceURI, qualifiedName, options) {\n    return document.createElementNS(namespaceURI, qualifiedName, options);\n}\nfunction createDocumentFragment() {\n    return document.createDocumentFragment();\n}\nfunction createTextNode(text) {\n    return document.createTextNode(text);\n}\nfunction createComment(text) {\n    return document.createComment(text);\n}\nfunction insertBefore(parentNode, newNode, referenceNode) {\n    parentNode.insertBefore(newNode, referenceNode);\n}\nfunction removeChild(node, child) {\n    node.removeChild(child);\n}\nfunction appendChild(node, child) {\n    node.appendChild(child);\n}\nfunction parentNode(node) {\n    return node.parentNode;\n}\nfunction nextSibling(node) {\n    return node.nextSibling;\n}\nfunction tagName(elm) {\n    return elm.tagName;\n}\nfunction setTextContent(node, text) {\n    node.textContent = text;\n}\nfunction getTextContent(node) {\n    return node.textContent;\n}\nfunction isElement(node) {\n    return node.nodeType === 1;\n}\nfunction isText(node) {\n    return node.nodeType === 3;\n}\nfunction isComment(node) {\n    return node.nodeType === 8;\n}\nfunction isDocumentFragment(node) {\n    return node.nodeType === 11;\n}\nconst htmlDomApi = {\n    createElement,\n    createElementNS,\n    createTextNode,\n    createDocumentFragment,\n    createComment,\n    insertBefore,\n    removeChild,\n    appendChild,\n    parentNode,\n    nextSibling,\n    tagName,\n    setTextContent,\n    getTextContent,\n    isElement,\n    isText,\n    isComment,\n    isDocumentFragment,\n};\n//# sourceMappingURL=htmldomapi.js.map\n\n//# sourceURL=webpack://tree/./node_modules/snabbdom/build/htmldomapi.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/init.js":
/*!*********************************************!*\
  !*** ./node_modules/snabbdom/build/init.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./node_modules/snabbdom/build/vnode.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ \"./node_modules/snabbdom/build/is.js\");\n/* harmony import */ var _htmldomapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmldomapi */ \"./node_modules/snabbdom/build/htmldomapi.js\");\n\n\n\nfunction isUndef(s) {\n    return s === undefined;\n}\nfunction isDef(s) {\n    return s !== undefined;\n}\nconst emptyNode = (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(\"\", {}, [], undefined, undefined);\nfunction sameVnode(vnode1, vnode2) {\n    var _a, _b;\n    const isSameKey = vnode1.key === vnode2.key;\n    const isSameIs = ((_a = vnode1.data) === null || _a === void 0 ? void 0 : _a.is) === ((_b = vnode2.data) === null || _b === void 0 ? void 0 : _b.is);\n    const isSameSel = vnode1.sel === vnode2.sel;\n    return isSameSel && isSameKey && isSameIs;\n}\n/**\n * @todo Remove this function when the document fragment is considered stable.\n */\nfunction documentFragmentIsNotSupported() {\n    throw new Error(\"The document fragment is not supported on this platform.\");\n}\nfunction isElement(api, vnode) {\n    return api.isElement(vnode);\n}\nfunction isDocumentFragment(api, vnode) {\n    return api.isDocumentFragment(vnode);\n}\nfunction createKeyToOldIdx(children, beginIdx, endIdx) {\n    var _a;\n    const map = {};\n    for (let i = beginIdx; i <= endIdx; ++i) {\n        const key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;\n        if (key !== undefined) {\n            map[key] = i;\n        }\n    }\n    return map;\n}\nconst hooks = [\n    \"create\",\n    \"update\",\n    \"remove\",\n    \"destroy\",\n    \"pre\",\n    \"post\",\n];\nfunction init(modules, domApi, options) {\n    const cbs = {\n        create: [],\n        update: [],\n        remove: [],\n        destroy: [],\n        pre: [],\n        post: [],\n    };\n    const api = domApi !== undefined ? domApi : _htmldomapi__WEBPACK_IMPORTED_MODULE_1__.htmlDomApi;\n    for (const hook of hooks) {\n        for (const module of modules) {\n            const currentHook = module[hook];\n            if (currentHook !== undefined) {\n                cbs[hook].push(currentHook);\n            }\n        }\n    }\n    function emptyNodeAt(elm) {\n        const id = elm.id ? \"#\" + elm.id : \"\";\n        // elm.className doesn't return a string when elm is an SVG element inside a shadowRoot.\n        // https://stackoverflow.com/questions/29454340/detecting-classname-of-svganimatedstring\n        const classes = elm.getAttribute(\"class\");\n        const c = classes ? \".\" + classes.split(\" \").join(\".\") : \"\";\n        return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);\n    }\n    function emptyDocumentFragmentAt(frag) {\n        return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(undefined, {}, [], undefined, frag);\n    }\n    function createRmCb(childElm, listeners) {\n        return function rmCb() {\n            if (--listeners === 0) {\n                const parent = api.parentNode(childElm);\n                api.removeChild(parent, childElm);\n            }\n        };\n    }\n    function createElm(vnode, insertedVnodeQueue) {\n        var _a, _b, _c, _d;\n        let i;\n        let data = vnode.data;\n        if (data !== undefined) {\n            const init = (_a = data.hook) === null || _a === void 0 ? void 0 : _a.init;\n            if (isDef(init)) {\n                init(vnode);\n                data = vnode.data;\n            }\n        }\n        const children = vnode.children;\n        const sel = vnode.sel;\n        if (sel === \"!\") {\n            if (isUndef(vnode.text)) {\n                vnode.text = \"\";\n            }\n            vnode.elm = api.createComment(vnode.text);\n        }\n        else if (sel !== undefined) {\n            // Parse selector\n            const hashIdx = sel.indexOf(\"#\");\n            const dotIdx = sel.indexOf(\".\", hashIdx);\n            const hash = hashIdx > 0 ? hashIdx : sel.length;\n            const dot = dotIdx > 0 ? dotIdx : sel.length;\n            const tag = hashIdx !== -1 || dotIdx !== -1\n                ? sel.slice(0, Math.min(hash, dot))\n                : sel;\n            const elm = (vnode.elm =\n                isDef(data) && isDef((i = data.ns))\n                    ? api.createElementNS(i, tag, data)\n                    : api.createElement(tag, data));\n            if (hash < dot)\n                elm.setAttribute(\"id\", sel.slice(hash + 1, dot));\n            if (dotIdx > 0)\n                elm.setAttribute(\"class\", sel.slice(dot + 1).replace(/\\./g, \" \"));\n            for (i = 0; i < cbs.create.length; ++i)\n                cbs.create[i](emptyNode, vnode);\n            if (_is__WEBPACK_IMPORTED_MODULE_2__.array(children)) {\n                for (i = 0; i < children.length; ++i) {\n                    const ch = children[i];\n                    if (ch != null) {\n                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));\n                    }\n                }\n            }\n            else if (_is__WEBPACK_IMPORTED_MODULE_2__.primitive(vnode.text)) {\n                api.appendChild(elm, api.createTextNode(vnode.text));\n            }\n            const hook = vnode.data.hook;\n            if (isDef(hook)) {\n                (_b = hook.create) === null || _b === void 0 ? void 0 : _b.call(hook, emptyNode, vnode);\n                if (hook.insert) {\n                    insertedVnodeQueue.push(vnode);\n                }\n            }\n        }\n        else if (((_c = options === null || options === void 0 ? void 0 : options.experimental) === null || _c === void 0 ? void 0 : _c.fragments) && vnode.children) {\n            const children = vnode.children;\n            vnode.elm = ((_d = api.createDocumentFragment) !== null && _d !== void 0 ? _d : documentFragmentIsNotSupported)();\n            for (i = 0; i < cbs.create.length; ++i)\n                cbs.create[i](emptyNode, vnode);\n            for (i = 0; i < children.length; ++i) {\n                const ch = children[i];\n                if (ch != null) {\n                    api.appendChild(vnode.elm, createElm(ch, insertedVnodeQueue));\n                }\n            }\n        }\n        else {\n            vnode.elm = api.createTextNode(vnode.text);\n        }\n        return vnode.elm;\n    }\n    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {\n        for (; startIdx <= endIdx; ++startIdx) {\n            const ch = vnodes[startIdx];\n            if (ch != null) {\n                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);\n            }\n        }\n    }\n    function invokeDestroyHook(vnode) {\n        var _a, _b;\n        const data = vnode.data;\n        if (data !== undefined) {\n            (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, vnode);\n            for (let i = 0; i < cbs.destroy.length; ++i)\n                cbs.destroy[i](vnode);\n            if (vnode.children !== undefined) {\n                for (let j = 0; j < vnode.children.length; ++j) {\n                    const child = vnode.children[j];\n                    if (child != null && typeof child !== \"string\") {\n                        invokeDestroyHook(child);\n                    }\n                }\n            }\n        }\n    }\n    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {\n        var _a, _b;\n        for (; startIdx <= endIdx; ++startIdx) {\n            let listeners;\n            let rm;\n            const ch = vnodes[startIdx];\n            if (ch != null) {\n                if (isDef(ch.sel)) {\n                    invokeDestroyHook(ch);\n                    listeners = cbs.remove.length + 1;\n                    rm = createRmCb(ch.elm, listeners);\n                    for (let i = 0; i < cbs.remove.length; ++i)\n                        cbs.remove[i](ch, rm);\n                    const removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;\n                    if (isDef(removeHook)) {\n                        removeHook(ch, rm);\n                    }\n                    else {\n                        rm();\n                    }\n                }\n                else {\n                    // Text node\n                    api.removeChild(parentElm, ch.elm);\n                }\n            }\n        }\n    }\n    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {\n        let oldStartIdx = 0;\n        let newStartIdx = 0;\n        let oldEndIdx = oldCh.length - 1;\n        let oldStartVnode = oldCh[0];\n        let oldEndVnode = oldCh[oldEndIdx];\n        let newEndIdx = newCh.length - 1;\n        let newStartVnode = newCh[0];\n        let newEndVnode = newCh[newEndIdx];\n        let oldKeyToIdx;\n        let idxInOld;\n        let elmToMove;\n        let before;\n        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\n            if (oldStartVnode == null) {\n                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left\n            }\n            else if (oldEndVnode == null) {\n                oldEndVnode = oldCh[--oldEndIdx];\n            }\n            else if (newStartVnode == null) {\n                newStartVnode = newCh[++newStartIdx];\n            }\n            else if (newEndVnode == null) {\n                newEndVnode = newCh[--newEndIdx];\n            }\n            else if (sameVnode(oldStartVnode, newStartVnode)) {\n                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);\n                oldStartVnode = oldCh[++oldStartIdx];\n                newStartVnode = newCh[++newStartIdx];\n            }\n            else if (sameVnode(oldEndVnode, newEndVnode)) {\n                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);\n                oldEndVnode = oldCh[--oldEndIdx];\n                newEndVnode = newCh[--newEndIdx];\n            }\n            else if (sameVnode(oldStartVnode, newEndVnode)) {\n                // Vnode moved right\n                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);\n                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));\n                oldStartVnode = oldCh[++oldStartIdx];\n                newEndVnode = newCh[--newEndIdx];\n            }\n            else if (sameVnode(oldEndVnode, newStartVnode)) {\n                // Vnode moved left\n                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);\n                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);\n                oldEndVnode = oldCh[--oldEndIdx];\n                newStartVnode = newCh[++newStartIdx];\n            }\n            else {\n                if (oldKeyToIdx === undefined) {\n                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);\n                }\n                idxInOld = oldKeyToIdx[newStartVnode.key];\n                if (isUndef(idxInOld)) {\n                    // New element\n                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);\n                }\n                else {\n                    elmToMove = oldCh[idxInOld];\n                    if (elmToMove.sel !== newStartVnode.sel) {\n                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);\n                    }\n                    else {\n                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);\n                        oldCh[idxInOld] = undefined;\n                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);\n                    }\n                }\n                newStartVnode = newCh[++newStartIdx];\n            }\n        }\n        if (newStartIdx <= newEndIdx) {\n            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;\n            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);\n        }\n        if (oldStartIdx <= oldEndIdx) {\n            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);\n        }\n    }\n    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {\n        var _a, _b, _c, _d, _e;\n        const hook = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.hook;\n        (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode);\n        const elm = (vnode.elm = oldVnode.elm);\n        const oldCh = oldVnode.children;\n        const ch = vnode.children;\n        if (oldVnode === vnode)\n            return;\n        if (vnode.data !== undefined) {\n            for (let i = 0; i < cbs.update.length; ++i)\n                cbs.update[i](oldVnode, vnode);\n            (_d = (_c = vnode.data.hook) === null || _c === void 0 ? void 0 : _c.update) === null || _d === void 0 ? void 0 : _d.call(_c, oldVnode, vnode);\n        }\n        if (isUndef(vnode.text)) {\n            if (isDef(oldCh) && isDef(ch)) {\n                if (oldCh !== ch)\n                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);\n            }\n            else if (isDef(ch)) {\n                if (isDef(oldVnode.text))\n                    api.setTextContent(elm, \"\");\n                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);\n            }\n            else if (isDef(oldCh)) {\n                removeVnodes(elm, oldCh, 0, oldCh.length - 1);\n            }\n            else if (isDef(oldVnode.text)) {\n                api.setTextContent(elm, \"\");\n            }\n        }\n        else if (oldVnode.text !== vnode.text) {\n            if (isDef(oldCh)) {\n                removeVnodes(elm, oldCh, 0, oldCh.length - 1);\n            }\n            api.setTextContent(elm, vnode.text);\n        }\n        (_e = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _e === void 0 ? void 0 : _e.call(hook, oldVnode, vnode);\n    }\n    return function patch(oldVnode, vnode) {\n        let i, elm, parent;\n        const insertedVnodeQueue = [];\n        for (i = 0; i < cbs.pre.length; ++i)\n            cbs.pre[i]();\n        if (isElement(api, oldVnode)) {\n            oldVnode = emptyNodeAt(oldVnode);\n        }\n        else if (isDocumentFragment(api, oldVnode)) {\n            oldVnode = emptyDocumentFragmentAt(oldVnode);\n        }\n        if (sameVnode(oldVnode, vnode)) {\n            patchVnode(oldVnode, vnode, insertedVnodeQueue);\n        }\n        else {\n            elm = oldVnode.elm;\n            parent = api.parentNode(elm);\n            createElm(vnode, insertedVnodeQueue);\n            if (parent !== null) {\n                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));\n                removeVnodes(parent, [oldVnode], 0, 0);\n            }\n        }\n        for (i = 0; i < insertedVnodeQueue.length; ++i) {\n            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);\n        }\n        for (i = 0; i < cbs.post.length; ++i)\n            cbs.post[i]();\n        return vnode;\n    };\n}\n//# sourceMappingURL=init.js.map\n\n//# sourceURL=webpack://tree/./node_modules/snabbdom/build/init.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/is.js":
/*!*******************************************!*\
  !*** ./node_modules/snabbdom/build/is.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"array\": () => (/* binding */ array),\n/* harmony export */   \"primitive\": () => (/* binding */ primitive)\n/* harmony export */ });\nconst array = Array.isArray;\nfunction primitive(s) {\n    return typeof s === \"string\" ||\n        typeof s === \"number\" ||\n        s instanceof String ||\n        s instanceof Number;\n}\n//# sourceMappingURL=is.js.map\n\n//# sourceURL=webpack://tree/./node_modules/snabbdom/build/is.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/class.js":
/*!******************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/class.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"classModule\": () => (/* binding */ classModule)\n/* harmony export */ });\nfunction updateClass(oldVnode, vnode) {\n    let cur;\n    let name;\n    const elm = vnode.elm;\n    let oldClass = oldVnode.data.class;\n    let klass = vnode.data.class;\n    if (!oldClass && !klass)\n        return;\n    if (oldClass === klass)\n        return;\n    oldClass = oldClass || {};\n    klass = klass || {};\n    for (name in oldClass) {\n        if (oldClass[name] && !Object.prototype.hasOwnProperty.call(klass, name)) {\n            // was `true` and now not provided\n            elm.classList.remove(name);\n        }\n    }\n    for (name in klass) {\n        cur = klass[name];\n        if (cur !== oldClass[name]) {\n            elm.classList[cur ? \"add\" : \"remove\"](name);\n        }\n    }\n}\nconst classModule = { create: updateClass, update: updateClass };\n//# sourceMappingURL=class.js.map\n\n//# sourceURL=webpack://tree/./node_modules/snabbdom/build/modules/class.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/eventlisteners.js":
/*!***************************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/eventlisteners.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventListenersModule\": () => (/* binding */ eventListenersModule)\n/* harmony export */ });\nfunction invokeHandler(handler, vnode, event) {\n    if (typeof handler === \"function\") {\n        // call function handler\n        handler.call(vnode, event, vnode);\n    }\n    else if (typeof handler === \"object\") {\n        // call multiple handlers\n        for (let i = 0; i < handler.length; i++) {\n            invokeHandler(handler[i], vnode, event);\n        }\n    }\n}\nfunction handleEvent(event, vnode) {\n    const name = event.type;\n    const on = vnode.data.on;\n    // call event handler(s) if exists\n    if (on && on[name]) {\n        invokeHandler(on[name], vnode, event);\n    }\n}\nfunction createListener() {\n    return function handler(event) {\n        handleEvent(event, handler.vnode);\n    };\n}\nfunction updateEventListeners(oldVnode, vnode) {\n    const oldOn = oldVnode.data.on;\n    const oldListener = oldVnode.listener;\n    const oldElm = oldVnode.elm;\n    const on = vnode && vnode.data.on;\n    const elm = (vnode && vnode.elm);\n    let name;\n    // optimization for reused immutable handlers\n    if (oldOn === on) {\n        return;\n    }\n    // remove existing listeners which no longer used\n    if (oldOn && oldListener) {\n        // if element changed or deleted we remove all existing listeners unconditionally\n        if (!on) {\n            for (name in oldOn) {\n                // remove listener if element was changed or existing listeners removed\n                oldElm.removeEventListener(name, oldListener, false);\n            }\n        }\n        else {\n            for (name in oldOn) {\n                // remove listener if existing listener removed\n                if (!on[name]) {\n                    oldElm.removeEventListener(name, oldListener, false);\n                }\n            }\n        }\n    }\n    // add new listeners which has not already attached\n    if (on) {\n        // reuse existing listener or create new\n        const listener = (vnode.listener =\n            oldVnode.listener || createListener());\n        // update vnode for listener\n        listener.vnode = vnode;\n        // if element changed or added we add all needed listeners unconditionally\n        if (!oldOn) {\n            for (name in on) {\n                // add listener if element was changed or new listeners added\n                elm.addEventListener(name, listener, false);\n            }\n        }\n        else {\n            for (name in on) {\n                // add listener if new listener added\n                if (!oldOn[name]) {\n                    elm.addEventListener(name, listener, false);\n                }\n            }\n        }\n    }\n}\nconst eventListenersModule = {\n    create: updateEventListeners,\n    update: updateEventListeners,\n    destroy: updateEventListeners,\n};\n//# sourceMappingURL=eventlisteners.js.map\n\n//# sourceURL=webpack://tree/./node_modules/snabbdom/build/modules/eventlisteners.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/props.js":
/*!******************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/props.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"propsModule\": () => (/* binding */ propsModule)\n/* harmony export */ });\nfunction updateProps(oldVnode, vnode) {\n    let key;\n    let cur;\n    let old;\n    const elm = vnode.elm;\n    let oldProps = oldVnode.data.props;\n    let props = vnode.data.props;\n    if (!oldProps && !props)\n        return;\n    if (oldProps === props)\n        return;\n    oldProps = oldProps || {};\n    props = props || {};\n    for (key in props) {\n        cur = props[key];\n        old = oldProps[key];\n        if (old !== cur && (key !== \"value\" || elm[key] !== cur)) {\n            elm[key] = cur;\n        }\n    }\n}\nconst propsModule = { create: updateProps, update: updateProps };\n//# sourceMappingURL=props.js.map\n\n//# sourceURL=webpack://tree/./node_modules/snabbdom/build/modules/props.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/modules/style.js":
/*!******************************************************!*\
  !*** ./node_modules/snabbdom/build/modules/style.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styleModule\": () => (/* binding */ styleModule)\n/* harmony export */ });\n// Bindig `requestAnimationFrame` like this fixes a bug in IE/Edge. See #360 and #409.\nconst raf = (typeof window !== \"undefined\" &&\n    window.requestAnimationFrame.bind(window)) ||\n    setTimeout;\nconst nextFrame = function (fn) {\n    raf(function () {\n        raf(fn);\n    });\n};\nlet reflowForced = false;\nfunction setNextFrame(obj, prop, val) {\n    nextFrame(function () {\n        obj[prop] = val;\n    });\n}\nfunction updateStyle(oldVnode, vnode) {\n    let cur;\n    let name;\n    const elm = vnode.elm;\n    let oldStyle = oldVnode.data.style;\n    let style = vnode.data.style;\n    if (!oldStyle && !style)\n        return;\n    if (oldStyle === style)\n        return;\n    oldStyle = oldStyle || {};\n    style = style || {};\n    const oldHasDel = \"delayed\" in oldStyle;\n    for (name in oldStyle) {\n        if (!style[name]) {\n            if (name[0] === \"-\" && name[1] === \"-\") {\n                elm.style.removeProperty(name);\n            }\n            else {\n                elm.style[name] = \"\";\n            }\n        }\n    }\n    for (name in style) {\n        cur = style[name];\n        if (name === \"delayed\" && style.delayed) {\n            for (const name2 in style.delayed) {\n                cur = style.delayed[name2];\n                if (!oldHasDel || cur !== oldStyle.delayed[name2]) {\n                    setNextFrame(elm.style, name2, cur);\n                }\n            }\n        }\n        else if (name !== \"remove\" && cur !== oldStyle[name]) {\n            if (name[0] === \"-\" && name[1] === \"-\") {\n                elm.style.setProperty(name, cur);\n            }\n            else {\n                elm.style[name] = cur;\n            }\n        }\n    }\n}\nfunction applyDestroyStyle(vnode) {\n    let style;\n    let name;\n    const elm = vnode.elm;\n    const s = vnode.data.style;\n    if (!s || !(style = s.destroy))\n        return;\n    for (name in style) {\n        elm.style[name] = style[name];\n    }\n}\nfunction applyRemoveStyle(vnode, rm) {\n    const s = vnode.data.style;\n    if (!s || !s.remove) {\n        rm();\n        return;\n    }\n    if (!reflowForced) {\n        // eslint-disable-next-line @typescript-eslint/no-unused-expressions\n        vnode.elm.offsetLeft;\n        reflowForced = true;\n    }\n    let name;\n    const elm = vnode.elm;\n    let i = 0;\n    const style = s.remove;\n    let amount = 0;\n    const applied = [];\n    for (name in style) {\n        applied.push(name);\n        elm.style[name] = style[name];\n    }\n    const compStyle = getComputedStyle(elm);\n    const props = compStyle[\"transition-property\"].split(\", \");\n    for (; i < props.length; ++i) {\n        if (applied.indexOf(props[i]) !== -1)\n            amount++;\n    }\n    elm.addEventListener(\"transitionend\", function (ev) {\n        if (ev.target === elm)\n            --amount;\n        if (amount === 0)\n            rm();\n    });\n}\nfunction forceReflow() {\n    reflowForced = false;\n}\nconst styleModule = {\n    pre: forceReflow,\n    create: updateStyle,\n    update: updateStyle,\n    destroy: applyDestroyStyle,\n    remove: applyRemoveStyle,\n};\n//# sourceMappingURL=style.js.map\n\n//# sourceURL=webpack://tree/./node_modules/snabbdom/build/modules/style.js?");

/***/ }),

/***/ "./node_modules/snabbdom/build/vnode.js":
/*!**********************************************!*\
  !*** ./node_modules/snabbdom/build/vnode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vnode\": () => (/* binding */ vnode)\n/* harmony export */ });\nfunction vnode(sel, data, children, text, elm) {\n    const key = data === undefined ? undefined : data.key;\n    return { sel, data, children, text, elm, key };\n}\n//# sourceMappingURL=vnode.js.map\n\n//# sourceURL=webpack://tree/./node_modules/snabbdom/build/vnode.js?");

/***/ }),

/***/ "./src/styles/tree.scss":
/*!******************************!*\
  !*** ./src/styles/tree.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tree_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./tree.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/tree.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tree_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tree_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tree_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tree_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tree/./src/styles/tree.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tree/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tree/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tree/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tree/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tree/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tree/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_tree_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/tree.scss */ \"./src/styles/tree.scss\");\n/* harmony import */ var _utils_tree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/tree.js */ \"./src/utils/tree.js\");\n\r\n\r\n\r\nfunction component() {\r\n    const element = document.createElement('div');\r\n    element.className = 'app';\r\n    return element;\r\n}\r\n\r\ndocument.body.appendChild(component());\r\n\r\nconst data = [\r\n    {\r\n        id: 1,\r\n        label: 'node-1',\r\n        children: [\r\n            {\r\n                id: 2,\r\n                label: 'node-1-1',\r\n            },\r\n        ],\r\n    },\r\n    {\r\n        id: 3,\r\n        label: 'node-2',\r\n        children: [\r\n            {\r\n                id: 4,\r\n                label: 'node-2-1',\r\n                children: [\r\n                    {\r\n                        id: 5,\r\n                        label: 'node-2-1-1',\r\n                    },\r\n                ],\r\n            },\r\n            {\r\n                id: 6,\r\n                label: 'node-2-2',\r\n                children: [\r\n                    {\r\n                        id: 7,\r\n                        label: 'node-2-2-1',\r\n                    },\r\n                ],\r\n            },\r\n        ],\r\n    },\r\n    {\r\n        id: 8,\r\n        label: 'node-3',\r\n        children: [\r\n            {\r\n                id: 9,\r\n                label: 'node-3-1',\r\n                children: [\r\n                    {\r\n                        id: 10,\r\n                        label: 'node-3-1-1',\r\n                    },\r\n                ],\r\n            },\r\n            {\r\n                id: 11,\r\n                label: 'node-3-2',\r\n                children: [\r\n                    {\r\n                        id: 12,\r\n                        label: 'node-3-2-1',\r\n                    },\r\n                ],\r\n            },\r\n        ],\r\n    },\r\n];\r\n\r\nconst tree = new _utils_tree_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector('.app'));\r\n\r\ntree.render(data);\r\n\n\n//# sourceURL=webpack://tree/./src/main.js?");

/***/ }),

/***/ "./src/utils/tree.js":
/*!***************************!*\
  !*** ./src/utils/tree.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/init.js\");\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/modules/class.js\");\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/modules/props.js\");\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/modules/style.js\");\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/modules/eventlisteners.js\");\n/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! snabbdom */ \"./node_modules/snabbdom/build/h.js\");\n\r\n\r\nconst patch = (0,snabbdom__WEBPACK_IMPORTED_MODULE_0__.init)([\r\n    // Init patch function with chosen modules\r\n    snabbdom__WEBPACK_IMPORTED_MODULE_1__.classModule, // makes it easy to toggle classes\r\n    snabbdom__WEBPACK_IMPORTED_MODULE_2__.propsModule, // for setting properties on DOM elements\r\n    snabbdom__WEBPACK_IMPORTED_MODULE_3__.styleModule, // handles styling on elements with support for animations\r\n    snabbdom__WEBPACK_IMPORTED_MODULE_4__.eventListenersModule, // attaches event listeners\r\n]);\r\n\r\n/**\r\n * 虚拟化树形类\r\n */\r\nclass Tree {\r\n    constructor(dom) {\r\n        this.indent = 16;\r\n\r\n        this.checked = new Set();\r\n\r\n        this.createRootDom(dom);\r\n    }\r\n\r\n    /**\r\n     * 创建根节点\r\n     */\r\n    createRootDom(dom) {\r\n        const vnode = (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('div.tree');\r\n\r\n        patch(dom, vnode);\r\n\r\n        this.container = document.querySelector('.tree');\r\n    }\r\n\r\n    /**\r\n     * 选中节点\r\n     */\r\n    selected(dom, checked, root) {\r\n        dom.checked = checked;\r\n\r\n        checked ? this.checked.add(root.id) : this.checked.delete(root.id);\r\n\r\n        (root.children || []).forEach((x) => {\r\n            const section = document.querySelector('#tree-' + x.id);\r\n\r\n            if (section) {\r\n                this.selected(section.querySelector('input'), checked, x);\r\n            }\r\n        });\r\n    }\r\n\r\n    /**\r\n     * 渲染\r\n     */\r\n    render(data) {\r\n        /**\r\n         * 渲染子节点\r\n         */\r\n        const click = (root) => {\r\n            return (e) => {\r\n                e.stopPropagation();\r\n                const needExpand = root.children && root.children.length && !e.currentTarget.querySelector('.section__subitem').children.length;\r\n\r\n                if (needExpand) {\r\n                    const child = [];\r\n\r\n                    root.children.forEach((x) => {\r\n                        child.push(\r\n                            (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('section', { props: { id: 'tree-' + x.id }, on: { click: click(x) } }, [\r\n                                (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('div.section__item', [\r\n                                    x.children && x.children.length ? (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('i.icon-arrow') : (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('i.icon-arrow.none'),\r\n                                    (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('input', {\r\n                                        props: { type: 'checkbox' },\r\n                                        on: {\r\n                                            click: (e) => {\r\n                                                e.stopPropagation();\r\n\r\n                                                this.selected(e.target, e.target.checked, x);\r\n                                            },\r\n                                        },\r\n                                    }),\r\n                                    (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('span', x.label),\r\n                                ]),\r\n                                (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('div.section__subitem'),\r\n                            ])\r\n                        );\r\n                    });\r\n\r\n                    e.currentTarget.className = 'is-expand';\r\n\r\n                    patch(e.currentTarget.querySelector('.section__subitem'), (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('div.section__subitem', child));\r\n                } else {\r\n                    e.currentTarget.className = '';\r\n\r\n                    patch(e.currentTarget.querySelector('.section__subitem'), (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('div.section__subitem', ''));\r\n                }\r\n            };\r\n        };\r\n\r\n        /**\r\n         * 渲染首层节点\r\n         */\r\n        const vnode = [];\r\n\r\n        data.forEach((root) => {\r\n            vnode.push(\r\n                (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('section', { props: { id: 'tree-' + root.id }, on: { click: click(root) } }, [\r\n                    (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('div.section__item', [\r\n                        (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('i.icon-arrow'),\r\n                        (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('input', {\r\n                            props: { type: 'checkbox' },\r\n                            on: {\r\n                                click: (e) => {\r\n                                    e.stopPropagation();\r\n\r\n                                    this.selected(e.target, e.target.checked, root);\r\n                                },\r\n                            },\r\n                        }),\r\n                        (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('span', root.label),\r\n                    ]),\r\n                    (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('div.section__subitem'),\r\n                ])\r\n            );\r\n        });\r\n\r\n        patch(this.container, (0,snabbdom__WEBPACK_IMPORTED_MODULE_5__.h)('div.tree', vnode));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);\r\n\n\n//# sourceURL=webpack://tree/./src/utils/tree.js?");

/***/ }),

/***/ "./src/assets/icon-arrow.svg":
/*!***********************************!*\
  !*** ./src/assets/icon-arrow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8d26ab7bcbdda8e21ab.svg\";\n\n//# sourceURL=webpack://tree/./src/assets/icon-arrow.svg?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;