import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  activeContactsCount = 0;
  allContactsCount = 0;
  constructor() { }

  ngOnInit(): void {
    let contacts: any = localStorage.getItem('contacts');
    if(contacts) {
      contacts = JSON.parse(contacts);

      if(contacts && contacts?.length > 0) {
        this.allContactsCount = contacts?.length;
        this.activeContactsCount = contacts?.filter((c: any) => c?.approved)?.length;
      }
    }
  }

}
