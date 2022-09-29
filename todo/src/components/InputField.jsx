"use strict";
exports.__esModule = true;
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = require("react");
var store_1 = require("../store/store");
var InputField = (0, mobx_react_lite_1.observer)(function () {
    var store = (0, store_1.useStoreGlobal)();
    return (<div className="input">
            <input type="text" value={store.txt} onChange={function (e) { return store.handleInput(e.target.value); }}/>
            <button onClick={store.addTask}>Add Todo</button>
        </div>);
});
exports["default"] = InputField;
