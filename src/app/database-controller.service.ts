import { Injectable } from '@angular/core';
import {User} from './User';
import {UserList} from './UserList';

@Injectable({
  providedIn: 'root'
})
export class DatabaseControllerService {

  userList = UserList;

  constructor() { }

  userVerification(user:User):boolean{
    if((user.name != "") && (!this.alreadyExists(user))){
      return true;
    }
    return false;
  } 

  alreadyExists(user:User):boolean{
    for(let e of this.userList){
      if(e.name === user.name){
        return true;
      }
    }
    return false;
  }

  imagesExists(user: User):void{
    if(user.imgUrl == ""){
      user.imgUrl = "https://thispersondoesnotexist.com/image";
    }
  }

  addnewUser(newUser:User):void{
    if(this.userVerification(newUser) === true){
      this.imagesExists(newUser);
      let userAdded = {name: newUser.name, age: newUser.age, imgUrl: newUser.imgUrl};
      this.userList.push(userAdded);
      window.alert("Cadastro bem sucedido")
    }
    else{
      window.alert("Erro ao cadastrar");
    }
  }

  getUserlist():User[]{
    return this.userList;
  }

}
