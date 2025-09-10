"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("../controller");
exports.AdminRoutes = (0, express_1.Router)();
const controller = new controller_1.Controller();
exports.AdminRoutes.get("/", () => console.log("hello admin"));
//# sourceMappingURL=admin.routes.js.map