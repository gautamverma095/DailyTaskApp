"use strict";
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 5475:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xz": () => (/* binding */ GET_TASK),
/* harmony export */   "ai": () => (/* binding */ addTaskThunk),
/* harmony export */   "ol": () => (/* binding */ getTaskThunk)
/* harmony export */ });
/* unused harmony export addTask */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const GET_TASK = "GET_TASK";
const addTask = (payload)=>{
    return {
        type: GET_TASK,
        payload
    };
};
// middleware
const addTaskThunk = (data)=>(dispatch)=>{
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://nextjsexpertia.onrender.com/task/add", {
            task: data.task
        }, {
            headers: {
                "Authorization": data.token
            }
        }).then((res)=>{
            // console.log(res.data);
            let obj = {
                token: data.token
            };
            dispatch(getTaskThunk(obj));
            alert("task added");
        }).catch((err)=>{
            console.log(err.response.data);
            alert(err.response.data.message);
        });
    };
const getTaskThunk = (data)=>(dispatch)=>{
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://nextjsexpertia.onrender.com/task/get", {
            headers: {
                "Authorization": data.token
            }
        }).then((res)=>{
            // console.log(res);
            dispatch(addTask(res.data));
        }).catch((err)=>{
            console.log(err);
        // alert(err.response.data.message)
        });
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;