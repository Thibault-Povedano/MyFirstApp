import { Component, OnInit } from "@angular/core";
import { User } from "../user"
@Component({
  selector:'app-userProfil',
  templateUrl:'./userProfil.component.html',
  styleUrls: ['./userProfil.component.scss']
})
export class UserProfilComponent implements OnInit {
  user: User = {
  name : 'Doe',
  firstName : 'John',
  age : 25,
  element: true,
  show: "Afficher",
  hide: "Cacher",
  quote : '',
  photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };


constructor() { }


ngOnInit(): void {
}

toggleMyAge(){
 this.user.element=!this.user.element
 this.user.element? this.user.show ="Cacher" : this.user.show="Afficher"
  }
}
