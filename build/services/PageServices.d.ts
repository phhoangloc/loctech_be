export declare class PageServices {
    findAllPage(query: any): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        content: string | null;
        updateDate: Date;
        draft: boolean;
    }[]>;
    findOnePage(query: any): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        content: string | null;
        updateDate: Date;
        draft: boolean;
    } | null>;
    createPage(body: any): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        content: string | null;
        updateDate: Date;
        draft: boolean;
    }>;
    updatePage(body: any, id: number): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        content: string | null;
        updateDate: Date;
        draft: boolean;
    }>;
    deletePage(id: number): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        content: string | null;
        updateDate: Date;
        draft: boolean;
    }>;
}
//# sourceMappingURL=PageServices.d.ts.map