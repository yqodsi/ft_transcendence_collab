import { UserService } from "./user.service";
export declare const storage: {
    storage: any;
};
export declare class UserController {
    private userservice;
    constructor(userservice: UserService);
    getUsers(): Promise<import(".prisma/client").User[]>;
    signup(file: any, body: any): void;
    getUser(id: number): Promise<any>;
    upload(file: any, req: any): Promise<any>;
}
