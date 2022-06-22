import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-onomatopoeias',
  templateUrl: './app-onomatopoeias.component.html',
  styleUrls: ['./app-onomatopoeias.component.scss']
})
export class AppOnomatopoeiasComponent implements OnInit {

  public onomatopoeias: string[]=[];

  constructor() { }

  onReceiveNewOnomatopia(event:string){
    console.log("i'm in onomatop comp",event);
    this.onomatopoeias.push(event);
  }

  ngOnInit(): void {
  }

}
