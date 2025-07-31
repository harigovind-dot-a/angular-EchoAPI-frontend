import { effect, Injectable, signal } from "@angular/core";

export interface Message {
  id: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class EchoMessageStore{
    users = signal<Message[]>(this.loadFromStorage());

    constructor() {
        effect( ()=> {
            localStorage.setItem('users', JSON.stringify(this.users()));
        });
    }

    addMessage(user: Message){
        user.id = crypto.randomUUID();
        this.users.update((users)=> {
            return [...users, user];
        });
    }
    deleteMessage(user: Message){
        this.users.update((users) => {
            return users.filter( u=> u.id != user.id);
        })
    }

    private loadFromStorage(): Message[] {
        const data = localStorage.getItem('users');
        return data ? JSON.parse(data) : [];
    }
}