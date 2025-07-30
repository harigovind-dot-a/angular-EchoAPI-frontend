import { effect, signal } from "@angular/core";
import { User } from "../type/user";

export class UserStore{
    users = signal<User[]>(this.loadFromStorage());

    constructor() {
        effect( ()=> {
            localStorage.setItem('users', JSON.stringify(this.users()));
        });
    }

    addUser(user: User){
        user.id = crypto.randomUUID();
        this.users.update((users)=> {
            return [...users, user];
        });
    }
    deleteUser(user: User){
        this.users.update((users) => {
            return users.filter( u=> u.id != user.id);
        })
    }

    private loadFromStorage(): User[] {
        const data = localStorage.getItem('users');
        return data ? JSON.parse(data) : [];
    }
}