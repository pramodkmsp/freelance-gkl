import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  contacts: any[] = [
    {
      "firstName": "Ganesh",
      "lastName": "gani",
      "email": "ganesh@gmail.com",
      "password": "123456",
      "confirmPassword": "123456",
      "mobile": "9901858746",
      "gender": "male",
      "approved": "yes"
    },
    {
      "firstName": "Pramod",
      "lastName": "pramo",
      "email": "pramod@gmail.com",
      "password": "123456",
      "confirmPassword": "123456",
      "mobile": "1234567889",
      "gender": "male",
      "approved": "yes"
    },
    {
      "firstName": "Rupesh",
      "lastName": "rupi",
      "email": "rupesh@gmail.com",
      "password": "123456",
      "confirmPassword": "123456",
      "mobile": "9901858766",
      "gender": "male",
      "approved": "no"
    },
    {
      "firstName": "Prajwal",
      "lastName": "praju",
      "email": "prajwal@gmail.com",
      "password": "123456",
      "confirmPassword": "123456",
      "mobile": "8786854535",
      "gender": "male",
      "approved": "no"
    },
    {
      "firstName": "Appu",
      "lastName": "appi",
      "email": "appu@gmail.com",
      "password": "123456",
      "confirmPassword": "123456",
      "mobile": "6777534753",
      "gender": "male",
      "approved": "yes"
    }
  ]

  ngOnInit(): void {
  }

}
