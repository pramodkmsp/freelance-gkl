import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    if(this.loginForm && this.loginForm.value && this.loginForm.value?.username == 'admin@gmail.com' && this.loginForm.value?.password == 'admin123') {
      let userInfo = {
        username: this.loginForm.value?.username,
        userType: 'admin'
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      this.dataService.setUserInfo(userInfo);
      this.submitted = false;
      this.loginForm.reset();
      this.router.navigate(['dashboard']);
    } else if(this.loginForm && this.loginForm.value) {
      let contacts: any = localStorage.getItem('contacts');
      if(contacts) {
        contacts = JSON.parse(contacts);

        if(contacts && contacts?.length > 0) {
          let isUserMatched: boolean = false;
          let userInfo = '';
          for (let i = 0; i < contacts.length; i++) {
            if(contacts[i] && contacts[i]?.email?.toLowerCase() === this.loginForm.value?.username?.toLowerCase() && contacts[i]?.password === this.loginForm.value?.password) {
              isUserMatched = true;
              userInfo = contacts[i];
              break;
            }
          }

          if(isUserMatched) {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            this.dataService.setUserInfo(userInfo);
            this.submitted = false;
            this.loginForm.reset();
            this.router.navigate(['dashboard']);
          }
        } else {
          console.error("User doesn't exist");
        }
      }
    }
  }
}