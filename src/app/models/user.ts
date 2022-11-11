export class User {
    id?: number;
    email: string;
    password: string;
    role_id: number;

    constructor(email: string, password: string, role_id: number) {
        this.email = email;
        this.password = password;
        this.role_id = role_id;
    }
}
