import { Component, OnInit } from '@angular/core';
import {DatabaseControllerService} from '../database-controller.service';
import {User} from '../User';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userlist: User[];
  selectedItem:any = "menu";


  constructor(private databaseControllerService: DatabaseControllerService) {
    this.userlist = databaseControllerService.getUserlist();
   }

  
  ngOnInit(): void {
  }

  select(user:any){
    this.selectedItem = user;
  }

}
