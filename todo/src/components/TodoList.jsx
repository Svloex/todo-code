"use strict";
exports.__esModule = true;
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = require("react");
var store_1 = require("../store/store");
var TodoItem_1 = require("./TodoItem");
var TodoList = (0, mobx_react_lite_1.observer)(function () {
    var store = (0, store_1.useStoreGlobal)();
    console.log('List');
    return (<>
        <select name="" id="" onChange={function (e) { return store.filter(e.target.value); }}>
                <option value={'Все'}>Все</option>
                <option value={'Выполненные'}>Выполненные</option>
                <option value={'Невыполненные'}>Невыполненные</option>
        </select>
        <h2>{store.List.filter(function (i) { return i.completed === true; }).length} завершено
        из {store.List.length}</h2>        
        <ul className="list">
            {store.List.length > 0 && store.List.map(function (t) {
            if (store.status === 'Все') {
                return <TodoItem_1.default name={t.name} completed={t.completed} key={t.id} id={t.id}/>;
            }
            if (store.status === 'Выполненные') {
                if (t.completed) {
                    return <TodoItem_1.default name={t.name} completed={t.completed} key={t.id} id={t.id}/>;
                }
                return true;
            }
            if (store.status === 'Невыполненные') {
                if (!t.completed) {
                    return <TodoItem_1.default name={t.name} completed={t.completed} key={t.id} id={t.id}/>;
                }
                return true;
            }
            return true;
        })}
        </ul>
        </>);
});
exports["default"] = TodoList;
