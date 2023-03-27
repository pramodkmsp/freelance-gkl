import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userInfo: any = new BehaviorSubject(null);
  constructor(private router: Router) { 
    let userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      this.userInfo.next(JSON.parse(userInfo));
    }
  }

  setUserInfo(userInfo: any) {
    this.userInfo.next(userInfo);
  }

  logOut() {
    this.userInfo.next('');
    localStorage.removeItem('userInfo');
    this.router.navigate(['/']);
  }
}
