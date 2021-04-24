"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var demoGroupState_ts_1 = require("storeDemo/demoGroupState.ts");
var modal_1 = require("./modal");
var demoAction_1 = require("./demoAction");
// study 16(3/2)
var Demo = function (props) {
    var inputELement = react_1.useRef();
    var focus = function () {
        inputELement.current.focus();
    };
    /**
     * React Hooks
     */
    var _a = react_1.useState(function () {
        return props.one || { age: 0 };
    }), state = _a[0], setState = _a[1];
    var handleAge = function () {
        setState(function (state) {
            return __assign(__assign({}, state), { age: state.age + 10 });
        });
    };
    // const [state, dispatch] = useReducer(DemoReducer, 1)
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
            props.count),
        react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: function () { return props.increment(10); } }, "increment"),
        react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: function () { return props.increment_async(100); } }, "increment_async"),
        react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: function () { return props.increment_saga_async(1000); } }, "increment_async_saga"),
        react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: function () { return props.decrement(5); } }, "decrement"),
        react_1["default"].createElement("hr", null),
        react_1["default"].createElement("h3", null, "modal"),
        react_1["default"].createElement(modal_1["default"], null),
        react_1["default"].createElement(demoAction_1["default"], null),
        react_1["default"].createElement("hr", null),
        react_1["default"].createElement("h3", null, "React Hooks"),
        react_1["default"].createElement("span", null, state.age),
        react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: function () { return setState(__assign(__assign({}, state), { age: state.age + 10 })); } }, "+ 10"),
        react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: function () { return handleAge(); } }, "handleAge")));
};
exports["default"] = demoGroupState_ts_1["default"](Demo, { reducer: 'demo', states: ['demo'] });
