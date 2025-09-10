export type UserType = {
    id: number;
    username: string;
    password: string;
    email: string;
    position: string;
    active: boolean;
};
export declare class UserDTO {
    id: number;
    username: string;
    email: string;
    position: string;
    active: boolean;
    constructor({ id, username, email, position, active }: UserType);
}
//# sourceMappingURL=user.d.ts.map