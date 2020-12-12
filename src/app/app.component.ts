import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge-six';
  registrationForm: FormGroup;
  submited: boolean = false;
  users = [];
  registration: any;


  // Declaration des FormGroup / FormControl / FormArray

  ngOnInit(): void {

    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&]).{0,8}$")]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),

    });
  }

  //  fonction submit 
  onSubmit() {
    this.submited = true;
    if (this.registrationForm.value.invalid) {
      return;
    }

    this.saveUserData();
  }
  saveUserData() {
    this.users.push(this.registrationForm.value);
  }
  deleteUser(i) {
    console.log(i);

  }

}