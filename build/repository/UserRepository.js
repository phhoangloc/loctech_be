"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserRepository {
    async findUser(query) {
        try {
            const result = await prisma.user.findMany({});
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async findOneUser(query) {
        try {
            const result = await prisma.user.findFirst({
                where: {
                    id: query.id ? Number(query.id) : undefined,
                    username: query.username ? query.username : undefined,
                    email: query.email ? query.email : undefined
                }
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async createUser(body) {
        try {
            const result = await prisma.user.create({ data: body });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async updateUser(id, body) {
        try {
            const result = await prisma.user.update({ where: { id }, data: body });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteUser(id, body) {
        try {
            const result = await prisma.user.delete({ where: { id } });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map