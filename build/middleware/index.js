"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddleWare = void 0;
const IServices_1 = require("../services/IServices");
const response_1 = require("../DTO/response");
const iUserService = new IServices_1.IUserService();
class MiddleWare {
    position;
    constructor(position) {
        this.position = position;
        this.checkPosition = this.checkPosition.bind(this);
    }
    async checkPosition(req, res, next) {
        try {
            const user = await iUserService.findOneUser({ id: req.id });
            if (!user) {
                throw new Error("id is not Existed");
            }
            if (user.position !== this.position && user.position !== "admin") {
                throw new Error("you don't have permission");
            }
            console.log(user);
            next();
        }
        catch (error) {
            res.json(new response_1.ResponseDTO(false, error.message));
        }
    }
}
exports.MiddleWare = MiddleWare;
//# sourceMappingURL=index.js.map