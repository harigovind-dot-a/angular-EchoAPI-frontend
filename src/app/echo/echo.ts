import { CommonModule } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
    standalone: true,
    selector: 'app-echo',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './echo.html',
})

export class Echo{
    echoform: FormGroup;
    messages = signal<string[]>([]);
    readonly API_URL = 'http://127.0.0.1:8000/echo/';

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.echoform = this.fb.group({
            description: ['', Validators.required]
        });
    }
    save(): void {
        if (this.echoform.valid) {
            const content = this.echoform.value.description;
            this.http.post(this.API_URL, { content }).subscribe(() => {
                this.echoform.reset();
                this.messages.update(msgs => [...msgs, content]);
            });
        }
    }
    clear(): void {
        this.echoform.reset();
    }
    tempecho(): string[] {
        return this.messages();
    }
}