import { Request, Response } from "express";
interface CustomRequest extends Request {
    id?: number;
}
export declare class Controller {
    createUser(req: Request, res: Response): Promise<void>;
    active(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<void>;
    findUserByMySelf(req: CustomRequest, res: Response): Promise<void>;
    findUserByQuery(req: Request, res: Response): Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map