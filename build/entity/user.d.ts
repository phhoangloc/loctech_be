export type UserType = {
    id: number;
    username: string;
    password: string;
    email: string;
    position: string;
    active: boolean;
};
export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    position: string;
    active: boolean;
    constructor({ id, username, password, email, position, active }: UserType);
}
//# sourceMappingURL=user.d.ts.map