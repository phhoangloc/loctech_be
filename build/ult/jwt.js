"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generateToken = async (id, secret) => {
    const payload = { id };
    if (secret) {
        const token = (0, jsonwebtoken_1.sign)(payload, secret, { expiresIn: '1d' });
        return token;
    }
    else {
        throw new Error("please set the secret password");
    }
};
exports.generateToken = generateToken;
//# sourceMappingURL=jwt.js.map