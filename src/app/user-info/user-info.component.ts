import { Component, Input, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  
   @Input() user: User = {name: "", age: 0, imgUrl: ""};


  constructor() { }
    

  ngOnInit(): void {
  }

}
