"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PageRepository {
    async findPage(query) {
        try {
            const result = await prisma.page.findMany({});
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async findOnePage(query) {
        try {
            const result = await prisma.page.findFirst({
                where: {
                    id: query.id ? Number(query.id) : undefined,
                }
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async createPage(body) {
        try {
            const result = await prisma.page.create({ data: body });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async updatePage(id, body) {
        try {
            const result = await prisma.page.update({ where: { id }, data: body });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async deletePage(id) {
        try {
            const result = await prisma.page.delete({ where: { id } });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.PageRepository = PageRepository;
//# sourceMappingURL=PageRepository.js.map