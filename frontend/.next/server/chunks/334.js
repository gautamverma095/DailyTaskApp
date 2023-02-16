"use strict";
exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 1334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nh": () => (/* binding */ SIGNUP_SUCCESS),
/* harmony export */   "XP": () => (/* binding */ LOGIN_SUCCESS),
/* harmony export */   "_i": () => (/* binding */ userSignUpThunk),
/* harmony export */   "vK": () => (/* binding */ userLoginThunk)
/* harmony export */ });
/* unused harmony exports USER_ERROR, LOGOUT, userSignup, userLogin, userError, logout */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const USER_ERROR = "USER_ERROR";
const LOGOUT = "LOGOUT";
const userSignup = (payload)=>{
    return {
        type: SIGNUP_SUCCESS,
        payload
    };
};
const userLogin = (payload)=>{
    return {
        type: LOGIN_SUCCESS,
        payload
    };
};
const userError = (payload)=>{
    return {
        type: USER_ERROR,
        payload
    };
};
const logout = ()=>{
    return {
        type: LOGOUT
    };
};
// middleware
const userSignUpThunk = (user)=>(dispatch)=>{
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://nextjsexpertia.onrender.com/user/signup", user).then((res)=>{
            // console.log(res.data);
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.setCookie)("token", res.data.token);
            alert("signup successfull");
            dispatch(userSignup(res.data));
        }).catch((err)=>{
            console.log(err.response.data);
            alert(err.response.data.message);
            dispatch(userError(err.response.data.message));
        });
    };
const userLoginThunk = (user)=>(dispatch)=>{
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://nextjsexpertia.onrender.com/user/login", user).then((res)=>{
            console.log(res);
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.setCookie)("token", res.data.token);
            alert("login successfull");
            dispatch(userLogin(res.data));
        }).catch((err)=>{
            console.log(err);
            alert(err.response.data.message);
            dispatch(userError(err.response.data.message));
        });
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;