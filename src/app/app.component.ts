import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'advanced';

  user = {
    email: '',
    subscript: '',
    password: ''
  };
  submitted=false;

  onSubmit() {
    this.submitted=true;
    this.user.email= this.signupForm.value.userData.email;
    this.user.subscript= this.signupForm.value.subscript;
    this.user.password= this.signupForm.value.password;
    console.log(this.user);

    this.signupForm.reset();
  }
}
