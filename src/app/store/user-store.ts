import { signal } from "@angular/core";
import { User } from "../type/user";

export class UserStore{
    users = signal<User[]>([])

    addUser(user: User){
        this.users.update((users)=> {
            return [...users, user];
        });
    }
}