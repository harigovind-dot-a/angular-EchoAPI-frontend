import { signal } from "@angular/core";
import { User } from "../type/user";

export class UserStore{
    users = signal<User[]>([])

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
}