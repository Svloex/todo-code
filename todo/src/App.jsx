"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InputField_1 = require("./components/InputField");
var TodoList_1 = require("./components/TodoList");
var App = function () {
    return (<div className='App'>
			<div className='container'>
				<h1>ToDo List</h1>
				<InputField_1.default />
				<TodoList_1.default />
			</div>
    	</div>);
};
exports["default"] = App;
