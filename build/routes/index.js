"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const controller_1 = require("../controller");
const middleware_1 = require("../middleware");
const admin_routes_1 = require("./admin.routes");
const userMiddlewear = new middleware_1.MiddleWare("user");
const adminMiddlewear = new middleware_1.MiddleWare("admin");
const controller = new controller_1.Controller();
const route = (app) => {
    app.get("/api/checkuser", controller.findUserByQuery);
    app.post("/api/signup", controller.createUser);
    app.get("/api/active", controller.active);
    app.post("/api/login", controller.login);
    // app.get("/api/blog", blogController.findBlog)
    // app.get("/api/exam", examController.findExam)
    app.use("/api/admin", adminMiddlewear.checkPosition, admin_routes_1.AdminRoutes);
    app.use("/api/user", userMiddlewear.checkPosition, () => console.log("user"));
};
exports.route = route;
//# sourceMappingURL=index.js.map