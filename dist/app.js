"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const testController = require("./controller/TestController");
const app = express();
app.set("port", process.env.PORT || 3000);
app.get('/', testController.hello);
app.post('/hi', testController.hiPost);
exports.default = app;
//# sourceMappingURL=app.js.map