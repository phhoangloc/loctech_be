"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const IServices_1 = require("../services/IServices");
const cookie_1 = require("../ult/cookie");
const user_1 = require("../DTO/user");
const response_1 = require("../DTO/response");
const iUserService = new IServices_1.IUserService();
class Controller {
    async createUser(req, res) {
        const body = req.body;
        try {
            await iUserService.signup(body);
            res.json(new response_1.ResponseDTO(true, "check mail to active your account"));
        }
        catch (error) {
            const responseDTO = new response_1.ResponseDTO(false, error.message);
            res.json(responseDTO);
        }
    }
    async active(req, res) {
        const query = req.query;
        try {
            await iUserService.active(query);
            res.json(new response_1.ResponseDTO(true, "your account is active"));
        }
        catch (error) {
            const responseDTO = new response_1.ResponseDTO(false, error.message);
            res.json(responseDTO);
        }
    }
    async login(req, res) {
        const body = req.body;
        try {
            const token = await iUserService.login(body);
            if (token) {
                (0, cookie_1.saveCookie)(token, res);
                res.json(new response_1.ResponseDTO(true, "login success"));
            }
        }
        catch (error) {
            const responseDTO = new response_1.ResponseDTO(false, error.message);
            res.json(responseDTO);
        }
    }
    async findUserByMySelf(req, res) {
        const id = req.id;
        try {
            const result = await iUserService.findOneUser({ id });
            res.json(new response_1.ResponseDTO(true, new user_1.UserDTO(result)));
        }
        catch (error) {
            res.json(new response_1.ResponseDTO(false, error.message));
        }
    }
    async findUserByQuery(req, res) {
        let query = req.query;
        try {
            const result = await iUserService.findOneUser(query);
            if (!result) {
                throw Error("there is no account like this");
            }
            res.json(new response_1.ResponseDTO(true, null));
        }
        catch (error) {
            res.json(new response_1.ResponseDTO(false, error.message));
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=index.js.map