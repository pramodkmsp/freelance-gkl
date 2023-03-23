import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Validation from '../must-match.validator';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  submitted = false;
  contactById: any;
  editContactForm = this.formBuilder.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      gender: [''],
    }
  );
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
      this.contactById = res;
      this.editContactForm = this.formBuilder.group({
        firstName: [this.contactById['firstName']],
        lastName: [this.contactById['lastName']],
        email: [this.contactById['email']],
        mobile: [this.contactById['mobile']],
        gender: [this.contactById['gender']],
      });
    });

  }

  get f(): { [key: string]: AbstractControl } {
    return this.editContactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.editContactForm.invalid) {
      return;
    }
    let contacts: any = localStorage.getItem('contacts');
    if (contacts) {
      contacts = JSON.parse(contacts);
      if (contacts && contacts?.length > 0) {
        contacts.filter((contact: any) => {
          if (contact.email === this.editContactForm.controls['email'].value) {
            let i = contacts.findIndex((c: any) => c.email == this.editContactForm.controls['email'].value);
            if (i > -1) {
              contacts[i] = {
                ...contact,
                firstName: this.editContactForm.controls['firstName'].value,
                lastName: this.editContactForm.controls['lastName'].value,
                mobile: this.editContactForm.controls['mobile'].value,
                gender: this.editContactForm.controls['gender'].value,
              }
              localStorage.setItem('contacts', JSON.stringify(contacts));
            }
          }
        })
      }
    } else {
      localStorage.setItem('contacts', JSON.stringify([{...this.editContactForm.value, userType: 'user', approved: false}]))
    }
    this.router.navigate(['contacts']);
  }
}
