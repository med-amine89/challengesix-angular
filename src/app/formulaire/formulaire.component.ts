import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  registrationForm: FormGroup;
  submited: boolean = false;
 

  constructor() {

  }
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

    console.log(this.registrationForm.value);

  }
}
