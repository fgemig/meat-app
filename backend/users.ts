export class User {
    constructor(public email: string, public name: string, private password: string) { }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password);
    }
}

export const users: { [key: string]: User } = {
    'fabio@gmail.com': new User('fabio@gmail.com', 'Fabio', 'fabio123'),
    'martinelli@gmail.com': new User('martinelli@gmail.com', 'Martinelli', 'martinelli123')
}
