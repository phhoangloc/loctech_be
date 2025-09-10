export declare class UserRepository {
    findUser(query: any): Promise<{
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
    createUser(body: any): Promise<{
        id: number;
        username: string;
        password: string;
        email: string;
        position: import(".prisma/client").$Enums.Role;
        active: boolean;
        archive: string;
        createdAt: Date;
    }>;
    updateUser(id: number, body: any): Promise<{
        id: number;
        username: string;
        password: string;
        email: string;
        position: import(".prisma/client").$Enums.Role;
        active: boolean;
        archive: string;
        createdAt: Date;
    }>;
    deleteUser(id: number, body: any): Promise<{
        id: number;
        username: string;
        password: string;
        email: string;
        position: import(".prisma/client").$Enums.Role;
        active: boolean;
        archive: string;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=UserRepository.d.ts.map