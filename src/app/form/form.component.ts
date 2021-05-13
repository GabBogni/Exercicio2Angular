import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {DatabaseControllerService} from '../database-controller.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  user:User;

  constructor( private databaseControllerService: DatabaseControllerService) { 
    this.user = {name:"", age: 0, imgUrl: ''}
  }

  restartForm(){
    this.user.name = '';
    this.user.age = 0;
    this.user.imgUrl = '';
  }

  addNewUser(){
    this.databaseControllerService.addnewUser(this.user);
    this.restartForm();
  }

  ngOnInit(): void {

  }

}
