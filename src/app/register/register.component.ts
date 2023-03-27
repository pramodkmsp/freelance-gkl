import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import Validation from '../must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
        confirmPassword: ['', Validators.required],
        mobile: ['', Validators.required],
        gender: ['male'],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    let contacts: any = localStorage.getItem('contacts');
    if(contacts) {
      contacts = JSON.parse(contacts);
      if(contacts && contacts?.length > 0) {
        contacts = [...contacts, {...this.registerForm.value, userType: 'user', approved: false}];
        localStorage.setItem('contacts', JSON.stringify(contacts))
      }
    } else {
      localStorage.setItem('contacts', JSON.stringify([{...this.registerForm.value, userType: 'user', approved: false}]))
    }
    console.log(JSON.stringify(this.registerForm.value, null, 2));
    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}