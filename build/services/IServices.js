"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPageService = exports.IUserService = void 0;
const UserServices_1 = require("./UserServices");
const PageServices_1 = require("./PageServices");
class IUserService extends UserServices_1.UserServices {
}
exports.IUserService = IUserService;
class IPageService extends PageServices_1.PageServices {
}
exports.IPageService = IPageService;
//# sourceMappingURL=IServices.js.map