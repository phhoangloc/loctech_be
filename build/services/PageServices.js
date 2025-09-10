"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageServices = void 0;
const IRepository_1 = require("../repository/IRepository");
const iPageRepository = new IRepository_1.IPageRepository();
class PageServices {
    async findAllPage(query) {
        try {
            const result = await iPageRepository.findPage(query);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async findOnePage(query) {
        try {
            const result = await iPageRepository.findOnePage(query);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async createPage(body) {
        try {
            const result = await iPageRepository.createPage(body);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async updatePage(body, id) {
        try {
            const result = await iPageRepository.updatePage(body, id);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async deletePage(id) {
        try {
            const result = await iPageRepository.deletePage(id);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.PageServices = PageServices;
//# sourceMappingURL=PageServices.js.map