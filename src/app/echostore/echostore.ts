import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { EchoMessageStore, Message } from "../echo/echo-message-store";


@Component({
    standalone: true,
    selector: 'app-echoform',
    imports: [CommonModule],
    templateUrl: './echostore.html'
})

export class EchoStore {
    constructor(public echomessagestore: EchoMessageStore) {}

    deleteMessage(user: Message): void{
        this.echomessagestore.deleteMessage(user);
    }
}