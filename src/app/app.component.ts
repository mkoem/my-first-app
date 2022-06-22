import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbidenUsernames= ['Chris','Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        'username': new FormControl(null, [Validators.required,this.forbidenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });
    this.signupForm.statusChanges.subscribe(
      (value)=> console.log(value)
    );
    this.signupForm.setValue({
      'userData': {
        'username': 'Martin',
        'email': 'm@z.com'
      },
      'gender': 'male',
      'hobbies': []
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbidenNames(control: FormControl): {[s: string] : boolean} {
    if(this.forbidenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbiden': true}
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(() =>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        } else{
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
}




