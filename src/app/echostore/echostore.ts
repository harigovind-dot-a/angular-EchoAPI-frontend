import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    standalone: true,
    selector: 'app-echostore',
    imports: [CommonModule],
    templateUrl: './echostore.html'
})

export class EchoStore implements OnInit {
    users: any[] = [];
    readonly API_URL = 'http://127.0.0.1:8000/echo/';

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.getMessages();
    }
    getMessages(): void {
        this.http.get<any[]>(this.API_URL).subscribe(data => {
            this.users = data;
        });
    }
    deleteMessage(user: any): void {
        this.http.delete(`${this.API_URL}${user.id}/`).subscribe(() => {
            this.getMessages();
        });
    }
}