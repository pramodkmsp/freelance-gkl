import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactList: any[] = [];
  searchText: string = '';
  contacts: any[] = [];
  userInfo: any;
  constructor() {
  }

  ngOnInit(): void {
    let userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
    }
    let contact = localStorage.getItem('contacts');
    if (contact) {
      this.contactList = JSON.parse(contact);
      this.contacts = this.contactList;
    }
  }

  toggleApprove(event: any) {
    if(event?.target?.checked) {
      this.contactList = this.contacts.filter(contact => contact.approved);
    } else {
      this.contactList = this.contacts;
    }
  }

  approvedContact(index: number) {
    let contact = this.contactList[index];
    contact = {...contact, approved: true};
    let i = this.contacts.findIndex(c => c.email == contact.email);
    if(i > -1) {
      this.contacts[i] = contact;
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
  }

  deleteContact(index: number) {
    this.contactList.splice(index, 1);
    // this.contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

}


// contacts: any[] = [
//   {
//     "firstName": "Ganesh",
//     "lastName": "gani",
//     "email": "ganesh@gmail.com",
//     "password": "123456",
//     "confirmPassword": "123456",
//     "mobile": "9901858746",
//     "gender": "male",
//     "approved": true,
//     "userType": "user"
//   },
//   {
//     "firstName": "Pramod",
//     "lastName": "pramo",
//     "email": "pramod@gmail.com",
//     "password": "123456",
//     "confirmPassword": "123456",
//     "mobile": "1234567889",
//     "gender": "male",
//     "approved": true,
//     "userType": "user"
//   },
//   {
//     "firstName": "Rupesh",
//     "lastName": "rupi",
//     "email": "rupesh@gmail.com",
//     "password": "123456",
//     "confirmPassword": "123456",
//     "mobile": "9901858766",
//     "gender": "male",
//     "approved": false,
//     "userType": "user"
//   },
//   {
//     "firstName": "Prajwal",
//     "lastName": "praju",
//     "email": "prajwal@gmail.com",
//     "password": "123456",
//     "confirmPassword": "123456",
//     "mobile": "8786854535",
//     "gender": "male",
//     "approved": false,
//     "userType": "user"
//   },
//   {
//     "firstName": "Appu",
//     "lastName": "appi",
//     "email": "appu@gmail.com",
//     "password": "123456",
//     "confirmPassword": "123456",
//     "mobile": "6777534753",
//     "gender": "male",
//     "approved": true,
//     "userType": "admin"
//   }
// ];