"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
const IServices_1 = require("../services/IServices");
const response_1 = require("../DTO/response");
const iPageService = new IServices_1.IPageService();
class PageController {
    async findPage(req, res) {
        const query = req.query;
        try {
            const result = await iPageService.findAllPage(query);
            res.json(new response_1.ResponseDTO(true, result));
        }
        catch (error) {
            res.json(new response_1.ResponseDTO(false, error.message));
        }
    }
    async findOnePage(req, res) {
        const params = req.params;
        try {
            const result = await iPageService.findOnePage(params);
            res.json(new response_1.ResponseDTO(true, result));
        }
        catch (error) {
            res.json(new response_1.ResponseDTO(false, error.message));
        }
    }
    async createPage(req, res) {
        const body = req.body;
        const newBody = body;
        body.host = {
            connect: { id: req.id }
        };
        try {
            await iPageService.createPage(newBody);
            res.json(new response_1.ResponseDTO(true, "you have created a new page"));
        }
        catch (error) {
            res.json(new response_1.ResponseDTO(false, error.message));
        }
    }
    async updateBlog(req, res) {
        const params = req.params;
        const id = params.id;
        const body = req.body;
        try {
            await iPageService.updatePage(body, Number(id));
            res.json(new response_1.ResponseDTO(true, "you have updated a recent page"));
        }
        catch (error) {
            res.json(new response_1.ResponseDTO(false, error.message));
        }
    }
    async deleteBlog(req, res) {
        const params = req.params;
        const id = params.id;
        try {
            await iPageService.deletePage(Number(id));
            res.json(new response_1.ResponseDTO(true, "you have delete a recent page"));
        }
        catch (error) {
            res.json(new response_1.ResponseDTO(false, error.message));
        }
    }
}
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map