"use strict";
exports.__esModule = true;
exports.StoreProvider = exports.useStoreGlobal = exports.Store = void 0;
var mobx_1 = require("mobx");
var react_1 = require("react");
var Store = /** @class */ (function () {
    function Store() {
        var _this = this;
        this.txt = '';
        this.List = [];
        this.status = 'Все';
        this.addTask = function () {
            if (_this.txt === '')
                return;
            if (!_this.List.length) {
                _this.List.push({
                    name: _this.txt,
                    completed: false,
                    id: 0
                });
                _this.txt = '';
                return;
            }
            _this.List.push({
                name: _this.txt,
                completed: false,
                id: _this.List[_this.List.length - 1].id + 1
            });
            _this.txt = '';
            return;
        };
        this.handleInput = function (value) {
            _this.txt = value;
        };
        this.toggleComplete = function (id) {
            _this.List.find(function (t) {
                if (t.id === id) {
                    t.completed = !t.completed;
                    //console.log(this.List.map(i=>i.id))
                }
                return '';
            });
        };
        this.removeTodo = function (id) {
            _this.List = _this.List.filter(function (t) {
                return t.id !== id;
            });
        };
        this.filter = function (value) {
            if (value === 'Все')
                _this.status = 'Все';
            if (value === 'Выполненные')
                _this.status = 'Выполненные';
            if (value === 'Невыполненные')
                _this.status = 'Невыполненные';
            return;
        };
        (0, mobx_1.makeAutoObservable)(this);
    }
    return Store;
}());
exports.Store = Store;
var StoreContext = (0, react_1.createContext)(new Store());
var StoreProvider = function (_a) {
    var children = _a.children;
    var instance = new Store();
    return <StoreContext.Provider value={instance}>{children}</StoreContext.Provider>;
};
exports.StoreProvider = StoreProvider;
var useStoreGlobal = function () {
    return (0, react_1.useContext)(StoreContext);
};
exports.useStoreGlobal = useStoreGlobal;
