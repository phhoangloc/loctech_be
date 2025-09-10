export declare class UserServices {
    findAllUser(query: any): Promise<{
        id: number;
        username: string;
        password: string;
        email: string;
        position: import(".prisma/client").$Enums.Role;
        active: boolean;
        archive: string;
        createdAt: Date;
    }[]>;
    findOneUser(query: any): Promise<{
        id: number;
        username: string;
        password: string;
        email: string;
        position: import(".prisma/client").$Enums.Role;
        active: boolean;
        archive: string;
        createdAt: Date;
    } | null>;
    signup(body: any): Promise<boolean>;
    active(query: any): Promise<{
        id: number;
        username: string;
        password: string;
        email: string;
        position: import(".prisma/client").$Enums.Role;
        active: boolean;
        archive: string;
        createdAt: Date;
    } | undefined>;
    login(body: any): Promise<string>;
    createUser(body: any): Promise<boolean>;
}
//# sourceMappingURL=UserServices.d.ts.map