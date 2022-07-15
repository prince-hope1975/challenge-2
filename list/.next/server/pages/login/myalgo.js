"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login/myalgo";
exports.ids = ["pages/login/myalgo"];
exports.modules = {

/***/ "./context.tsx":
/*!*********************!*\
  !*** ./context.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppProvider\": () => (/* binding */ AppProvider),\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst AppProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: wallet , 1: setWallet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: modalMessage , 1: setModalMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Hello\");\n    const { 0: metadata , 1: setMetadata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: 0,\n        img: \"\",\n        price: 0,\n        time_in_secs: 0,\n        desc: \"\",\n        owner: \"\",\n        previous_prices: []\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(state);\n    }, [\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            state,\n            setState,\n            wallet,\n            setWallet,\n            modalMessage,\n            setModalMessage,\n            showModal,\n            setShowModal,\n            metadata,\n            data,\n            setData,\n            // @ts-ignore\n            setMetadata\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/prince/Documents/Reach/Reach challenge/challenge 2/list/context.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\nconst useGlobalContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQU9lO0FBWWYsTUFBTUksVUFBVSxpQkFBR0osMERBQW1CLENBQ3BDLEVBQUUsQ0FtQkg7QUFDTSxNQUFNTSxXQUFXLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQXFCLEdBQUs7SUFDOUQsTUFBTSxFQXpDUixHQXlDU0MsS0FBSyxHQXpDZCxHQXlDZ0JDLFFBQVEsTUFBSVAsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxFQTFDUixHQTBDU1EsTUFBTSxHQTFDZixHQTBDaUJDLFNBQVMsTUFBSVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSxFQTNDUixHQTJDU1UsU0FBUyxHQTNDbEIsR0EyQ29CQyxZQUFZLE1BQUlYLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQ2pELE1BQU0sRUE1Q1IsR0E0Q1NZLElBQUksR0E1Q2IsR0E0Q2VDLE9BQU8sTUFBSWIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDcEMsTUFBTSxFQTdDUixHQTZDU2MsWUFBWSxHQTdDckIsR0E2Q3VCQyxlQUFlLE1BQUlmLCtDQUFRLENBQUMsT0FBTyxDQUFRO0lBQ2hFLE1BQU0sRUE5Q1IsR0E4Q1NnQixRQUFRLEdBOUNqQixHQThDbUJDLFdBQVcsTUFBSWpCLCtDQUFRLENBQUM7UUFDdkNrQixFQUFFLEVBQUUsQ0FBQztRQUNMQyxHQUFHLEVBQUUsRUFBRTtRQUNQQyxLQUFLLEVBQUUsQ0FBQztRQUNSQyxZQUFZLEVBQUUsQ0FBQztRQUNmQyxJQUFJLEVBQUUsRUFBRTtRQUNSQyxLQUFLLEVBQUUsRUFBRTtRQUNUQyxlQUFlLEVBQUUsRUFBRTtLQUNwQixDQUFDO0lBQ0Z2QixnREFBUyxDQUFDLElBQU07UUFDZHdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcEIsS0FBSyxDQUFDLENBQUM7S0FDcEIsRUFBRTtRQUFDQSxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBQ1oscUJBQ0UsOERBQUNKLFVBQVUsQ0FBQ3lCLFFBQVE7UUFDbEJDLEtBQUssRUFBRTtZQUNMdEIsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsU0FBUztZQUNUSyxZQUFZO1lBQ1pDLGVBQWU7WUFDZkwsU0FBUztZQUNUQyxZQUFZO1lBQ1pLLFFBQVE7WUFDUkosSUFBSTtZQUNKQyxPQUFPO1lBQ1AsYUFBYTtZQUNiSSxXQUFXO1NBQ1o7a0JBRUFaLFFBQVE7Ozs7O2lCQUNXLENBQ3RCO0NBQ0gsQ0FBQztBQUNLLE1BQU13QixnQkFBZ0IsR0FBRyxJQUFNOUIsaURBQVUsQ0FBQ0csVUFBVSxDQUFDO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZ29oYWNrLy4vY29udGV4dC50c3g/NDdlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgUHJvcHNXaXRoQ2hpbGRyZW4sXG4gIHVzZUNvbnRleHQsXG4gIHVzZVN0YXRlLFxuICAvLyB1c2VSZWR1Y2VyLFxuICB1c2VFZmZlY3QsXG4gIC8vICAgRGlzcGF0Y2hXaXRob3V0QWN0aW9uLFxufSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB0eXBlIG1ldGEgPSB7XG4gIGlkOiBudW1iZXI7XG4gIGltZzogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICB0aW1lX2luX3NlY3M6IG51bWJlcjtcbiAgZGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBvd25lcjogc3RyaW5nO1xuICBwcmV2aW91c19wcmljZXM6IG51bWJlcltdO1xuICBjb250cmFjdEluZm8/OiBhbnk7XG59O1xuXG5jb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcbiAge30gYXMge1xuICAgIGRpc3BhdGNoOiBSZWFjdC5EaXNwYXRjaDx7XG4gICAgICB0eXBlOiBcIlNFVF9GQUxMQkFDS1wiO1xuICAgICAgcGF5bG9hZDogXCJteWFsZ29cIiB8IFwicGVyYVwiO1xuICAgIH0+O1xuICAgIHN0YXRlOiBhbnk7XG4gICAgc2hvd01vZGFsOiBib29sZWFuO1xuICAgIHNldFNob3dNb2RhbDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xuICAgIHNldFN0YXRlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjx7fT4+O1xuICAgIHdhbGxldDogYW55O1xuICAgIHNldFdhbGxldDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248e30+PjtcbiAgICBhcHBTdGF0ZToge1xuICAgICAgZmFsbGJhY2s6IG51bGwgfCBcIm15YWxnb1wiIHwgXCJwZXJhXCI7XG4gICAgfTtcbiAgICBtb2RhbE1lc3NhZ2U6IGFueTtcbiAgICBzZXRNb2RhbE1lc3NhZ2U6IFJlYWN0LkRpc3BhdGNoPGFueT47XG4gICAgbWV0YWRhdGE6IG1ldGE7XG4gICAgc2V0TWV0YWRhdGE6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG1ldGE+PjtcbiAgfVxuKTtcbmV4cG9ydCBjb25zdCBBcHBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzV2l0aENoaWxkcmVuKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbd2FsbGV0LCBzZXRXYWxsZXRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFttb2RhbE1lc3NhZ2UsIHNldE1vZGFsTWVzc2FnZV0gPSB1c2VTdGF0ZShcIkhlbGxvXCIgYXMgYW55KTtcbiAgY29uc3QgW21ldGFkYXRhLCBzZXRNZXRhZGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgaWQ6IDAsXG4gICAgaW1nOiBcIlwiLFxuICAgIHByaWNlOiAwLFxuICAgIHRpbWVfaW5fc2VjczogMCxcbiAgICBkZXNjOiBcIlwiLFxuICAgIG93bmVyOiBcIlwiLFxuICAgIHByZXZpb3VzX3ByaWNlczogW10sXG4gIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgfSwgW3N0YXRlXSk7XG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHN0YXRlLFxuICAgICAgICBzZXRTdGF0ZSxcbiAgICAgICAgd2FsbGV0LFxuICAgICAgICBzZXRXYWxsZXQsXG4gICAgICAgIG1vZGFsTWVzc2FnZSxcbiAgICAgICAgc2V0TW9kYWxNZXNzYWdlLFxuICAgICAgICBzaG93TW9kYWwsXG4gICAgICAgIHNldFNob3dNb2RhbCxcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHNldERhdGEsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2V0TWV0YWRhdGEsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsIndhbGxldCIsInNldFdhbGxldCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRhdGEiLCJzZXREYXRhIiwibW9kYWxNZXNzYWdlIiwic2V0TW9kYWxNZXNzYWdlIiwibWV0YWRhdGEiLCJzZXRNZXRhZGF0YSIsImlkIiwiaW1nIiwicHJpY2UiLCJ0aW1lX2luX3NlY3MiLCJkZXNjIiwib3duZXIiLCJwcmV2aW91c19wcmljZXMiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUdsb2JhbENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context.tsx\n");

/***/ }),

/***/ "./pages/login/myalgo.tsx":
/*!********************************!*\
  !*** ./pages/login/myalgo.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reach_sh_stdlib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach-sh/stdlib */ \"@reach-sh/stdlib\");\n/* harmony import */ var _reach_sh_stdlib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_sh_stdlib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context.tsx */ \"./context.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nconst reach = (0,_reach_sh_stdlib__WEBPACK_IMPORTED_MODULE_2__.loadStdlib)(process.env.REACH_CONNECTOR_MODE = \"ALGO\");\n\n\nconst Myalgo = ()=>{\n    const { appState , dispatch , state , setState , setWallet  } = (0,_context_tsx__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();\n    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        check();\n    }, []);\n    const check = async ()=>{\n        const wallet = window.localStorage.getItem(\"current_wallet\");\n        console.log(\"Appstate\", wallet);\n        if (wallet !== \"myalgo\") {\n            window.localStorage.setItem(\"current_wallet\", \"myalgo\");\n            // @ts-ignore\n            Router.reload();\n        } else {\n            try {\n                const acct = await reach.getDefaultAccount();\n                console.log(\"getting acct\", acct);\n                setWallet(acct);\n            } catch (e) {\n                console.log(e);\n            }\n            Router.push(\"/\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"myalgo\"\n    }, void 0, false, {\n        fileName: \"/home/prince/Documents/Reach/Reach challenge/challenge 2/list/pages/login/myalgo.tsx\",\n        lineNumber: 38,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Myalgo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi9teWFsZ28udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNLO0FBQzlDLE1BQU1HLEtBQUssR0FBR0QsNERBQVUsQ0FBRUUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG9CQUFvQixHQUFHLE1BQU0sQ0FBRTtBQUVoQjtBQUNiO0FBRXhDLE1BQU1HLE1BQU0sR0FBRyxJQUFNO0lBQ25CLE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFQyxTQUFTLEdBQUUsR0FBR1AsOERBQWdCLEVBQUU7SUFDN0UsTUFBTVEsTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBQzFCUCxnREFBUyxDQUFDLElBQU07UUFHWmUsS0FBSyxFQUFFO0tBQ1YsRUFBRSxFQUFFLENBQUMsQ0FDTDtJQUVELE1BQU1BLEtBQUssR0FBRyxVQUFZO1FBQ3hCLE1BQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1REMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFTCxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJQSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3ZCQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0ksT0FBTyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELGFBQWE7WUFDYlIsTUFBTSxDQUFDUyxNQUFNLEVBQUUsQ0FBQztTQUNqQixNQUFNO1lBQ04sSUFBRztnQkFDRCxNQUFNQyxJQUFJLEdBQUcsTUFBTXRCLEtBQUssQ0FBQ3VCLGlCQUFpQixFQUFFO2dCQUM3Q0wsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFRyxJQUFJLENBQUM7Z0JBQ2pDWCxTQUFTLENBQUNXLElBQUksQ0FBQyxDQUFDO2FBQ2hCLENBQ0QsT0FBTUUsQ0FBQyxFQUFDO2dCQUNQTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssQ0FBQyxDQUFDO2FBRWQ7WUFDQVosTUFBTSxDQUFDYSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7S0FDRjtJQUNELHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLFFBQU07Ozs7O2lCQUFNLENBQUM7Q0FDMUI7QUFFRCxpRUFBZXBCLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZ29oYWNrLy4vcGFnZXMvbG9naW4vbXlhbGdvLnRzeD9hMWRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGxvYWRTdGRsaWIgfSBmcm9tIFwiQHJlYWNoLXNoL3N0ZGxpYlwiO1xuY29uc3QgcmVhY2ggPSBsb2FkU3RkbGliKChwcm9jZXNzLmVudi5SRUFDSF9DT05ORUNUT1JfTU9ERSA9IFwiQUxHT1wiKSk7XG5pbXBvcnQgeyBBTEdPX015QWxnb0Nvbm5lY3QgYXMgTXlBbGdvQ29ubmVjdCB9IGZyb20gXCJAcmVhY2gtc2gvc3RkbGliXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQudHN4XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTXlhbGdvID0gKCkgPT4ge1xuICBjb25zdCB7IGFwcFN0YXRlLCBkaXNwYXRjaCwgc3RhdGUsIHNldFN0YXRlLCBzZXRXYWxsZXQgfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcbiAgY29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgXG4gXG4gICAgICBjaGVjaygpXG4gIH0sIFtdKVxuICA7XG5cbiAgY29uc3QgY2hlY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgd2FsbGV0ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF93YWxsZXRcIik7XG4gICAgY29uc29sZS5sb2coXCJBcHBzdGF0ZVwiLCB3YWxsZXQpO1xuICAgIGlmICh3YWxsZXQgIT09IFwibXlhbGdvXCIpIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRfd2FsbGV0XCIsIFwibXlhbGdvXCIpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgUm91dGVyLnJlbG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgIHRyeXtcbiAgICAgICBjb25zdCBhY2N0ID0gYXdhaXQgcmVhY2guZ2V0RGVmYXVsdEFjY291bnQoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIGFjY3QnLCBhY2N0KVxuICAgICAgc2V0V2FsbGV0KGFjY3QpO1xuICAgICB9XG4gICAgIGNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSlcblxuICAgICB9XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gPGRpdj5teWFsZ288L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeWFsZ287XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJsb2FkU3RkbGliIiwicmVhY2giLCJwcm9jZXNzIiwiZW52IiwiUkVBQ0hfQ09OTkVDVE9SX01PREUiLCJ1c2VHbG9iYWxDb250ZXh0IiwidXNlUm91dGVyIiwiTXlhbGdvIiwiYXBwU3RhdGUiLCJkaXNwYXRjaCIsInN0YXRlIiwic2V0U3RhdGUiLCJzZXRXYWxsZXQiLCJSb3V0ZXIiLCJjaGVjayIsIndhbGxldCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInJlbG9hZCIsImFjY3QiLCJnZXREZWZhdWx0QWNjb3VudCIsImUiLCJwdXNoIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login/myalgo.tsx\n");

/***/ }),

/***/ "@reach-sh/stdlib":
/*!***********************************!*\
  !*** external "@reach-sh/stdlib" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reach-sh/stdlib");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login/myalgo.tsx"));
module.exports = __webpack_exports__;

})();