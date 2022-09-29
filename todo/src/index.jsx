"use strict";
exports.__esModule = true;
var client_1 = require("react-dom/client");
require("./index.scss");
var App_1 = require("./App");
var store_1 = require("./store/store");
var react_1 = require("react");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(<store_1.StoreProvider>
      <App_1.default />
    </store_1.StoreProvider>);
