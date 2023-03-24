import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'freelance';
  userInfo: any;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.userInfo.subscribe((userInfo: any) => {
      this.userInfo = userInfo;
    })
  }
}
