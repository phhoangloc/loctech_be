import { Request, Response } from "express";
interface CustomRequest extends Request {
    id?: number;
}
export declare class PageController {
    findPage(req: Request, res: Response): Promise<void>;
    findOnePage(req: Request, res: Response): Promise<void>;
    createPage(req: CustomRequest, res: Response): Promise<void>;
    updateBlog(req: CustomRequest, res: Response): Promise<void>;
    deleteBlog(req: CustomRequest, res: Response): Promise<void>;
}
export {};
//# sourceMappingURL=page.controller.d.ts.map