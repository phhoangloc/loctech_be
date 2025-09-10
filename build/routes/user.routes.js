"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("../controller");
const controller = new controller_1.Controller();
exports.UserRoutes = (0, express_1.Router)();
exports.UserRoutes.get("/", () => console.log("hello user"));
//# sourceMappingURL=user.routes.js.map