import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserStore } from './store/user-store';
import { User } from './type/user';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  formBuilder = inject(FormBuilder)
  userForm!: FormGroup;
  userStore: UserStore;
  constructor(){
    this.userForm = this.formBuilder.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
    });
    this.userStore = new UserStore();
  }

  save(){
    if (this.userForm.invalid){
      return;
    }
    else{
      let formValues = this.userForm.value;
      this.userStore.addUser(formValues);
      this.userForm.reset();
    }
  }

  clear(){
    this.userForm.reset();
  }

  deleteUser(user:User){
    this.userStore.deleteUser(user);
  }
}
