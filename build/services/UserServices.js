"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const user_1 = require("../entity/user");
const IRepository_1 = require("../repository/IRepository");
const jwt_1 = require("../ult/jwt");
const mail_1 = require("../ult/mail");
const bcryptjs_1 = require("bcryptjs");
const bcryptjs_2 = require("bcryptjs");
const iUserRepository = new IRepository_1.IUserRepository();
class UserServices {
    async findAllUser(query) {
        try {
            const result = await iUserRepository.findUser(query);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async findOneUser(query) {
        try {
            const result = await iUserRepository.findOneUser(query);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async signup(body) {
        const isUsernameExist = await iUserRepository.findOneUser({ username: body.username });
        if (isUsernameExist) {
            throw new Error("username is exited");
        }
        const isEmailExist = await iUserRepository.findOneUser({ email: body.email });
        if (isEmailExist) {
            throw new Error("email is exited");
        }
        const salt = (0, bcryptjs_1.genSaltSync)(10);
        const mahoa_password = body.password && (0, bcryptjs_1.hashSync)(body.password.toString(), salt);
        body.password = mahoa_password;
        try {
            const newUser = new user_1.User(body);
            await iUserRepository.createUser(newUser);
            await (0, mail_1.sendMailToAcceptRegister)(body.email);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
    async active(query) {
        try {
            const user = await iUserRepository.findOneUser({ email: query.email });
            if (user) {
                const id = user.id;
                try {
                    const result = await iUserRepository.updateUser(id, { active: true });
                    return result;
                }
                catch (error) {
                    throw error;
                }
            }
        }
        catch (error) {
            throw error;
        }
    }
    async login(body) {
        const user = await iUserRepository.findOneUser({ username: body.username });
        if (!user) {
            throw new Error("username is not correct");
        }
        if (!user.active) {
            throw new Error("your account is not active");
        }
        const isValid = await (0, bcryptjs_2.compare)(body.password, user.password);
        if (!isValid) {
            throw new Error("password is not correct");
        }
        try {
            const isToken = await (0, jwt_1.generateToken)(user.id, process.env.SECRETTOKEN);
            const token = isToken ? isToken : "";
            return token;
        }
        catch (error) {
            throw error;
        }
    }
    async createUser(body) {
        const isUsernameExist = await iUserRepository.findOneUser({ username: body.username });
        if (isUsernameExist) {
            throw new Error("username is exited");
        }
        const isEmailExist = await iUserRepository.findOneUser({ email: body.email });
        if (isEmailExist) {
            throw new Error("email is exited");
        }
        const salt = (0, bcryptjs_1.genSaltSync)(10);
        const mahoa_password = body.password && (0, bcryptjs_1.hashSync)(body.password.toString(), salt);
        body.password = mahoa_password;
        try {
            const newUser = new user_1.User(body);
            await iUserRepository.createUser(newUser);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.UserServices = UserServices;
//# sourceMappingURL=UserServices.js.map