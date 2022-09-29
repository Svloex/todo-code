"use strict";
exports.__esModule = true;
var store_1 = require("../store/store");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = require("react");
var TodoItem = (0, mobx_react_lite_1.observer)(function (_a) {
    var name = _a.name, completed = _a.completed, id = _a.id;
    var store = (0, store_1.useStoreGlobal)();
    return (<>
        <li className="list__items">
            <span>{id}</span>
            <input type="checkbox" checked={completed} onChange={function () { return store.toggleComplete(id); }}/>
            <span>{name}</span> 
            <span className='delete' onClick={function () { return store.removeTodo(id); }}>&times;</span> 
        </li>
        </>);
});
exports["default"] = TodoItem;
