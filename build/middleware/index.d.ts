import { Request, Response, NextFunction } from "express";
interface CustomRequest extends Request {
    id?: number;
}
export declare class MiddleWare {
    position: string;
    constructor(position: string);
    checkPosition(req: CustomRequest, res: Response, next: NextFunction): Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map