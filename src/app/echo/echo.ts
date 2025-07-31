import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { EchoMessageStore } from "./echo-message-store";

@Component({
    standalone: true,
    selector: 'app-echo',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './echo.html',
})

export class Echo{
    echoform;

    tempecho  = signal<string[]>([]);
    constructor(private formbuilder: FormBuilder, public echomessagestore: EchoMessageStore){
        this.echoform = this.formbuilder.nonNullable.group({
            description: ''
        });
    }

    save(){
        const desc = this.echoform.value.description;
        if (desc){
            this.echomessagestore.addMessage({id: '', description: desc });
            this.tempecho.update((msgs)=>[...msgs, desc]);
            this.echoform.reset();
        }
    }
    clear(){
        this.echoform.reset();
    }
}