"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
// study 8(开始)
var DemoReducer = function (state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};
var Demo = function () {
    var inputELement = react_1.useRef();
    var focus = function () {
        inputELement.current.focus();
    };
    var _a = react_1.useReducer(DemoReducer, 1), state = _a[0], dispatch = _a[1];
    //   useeffect
    //   useEffect(() => {
    //     console.log('挂载之后,数据发生更新之后')
    //   })
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "Demo"),
        react_1["default"].createElement("h3", null, "\u83B7\u53D6\u7126\u70B9:"),
        react_1["default"].createElement("input", { placeholder: "\u83B7\u53D6\u7126\u70B9", ref: inputELement, type: "text" }),
        react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: focus }, "focut"),
        react_1["default"].createElement("hr", null),
        react_1["default"].createElement("h3", null, "useReducer:"),
        react_1["default"].createElement("span", null,
            "reducerState:",
            state),
        react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: function () { return dispatch({ type: 'increment' }); } }, "increment"),
        react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: function () { return dispatch({ type: 'decrement' }); } }, "decrement")));
};
exports["default"] = Demo;
