"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPageRepository = exports.IUserRepository = void 0;
const UserRepository_1 = require("./UserRepository");
const PageRepository_1 = require("./PageRepository");
class IUserRepository extends UserRepository_1.UserRepository {
}
exports.IUserRepository = IUserRepository;
class IPageRepository extends PageRepository_1.PageRepository {
}
exports.IPageRepository = IPageRepository;
//# sourceMappingURL=IRepository.js.map