import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-create-onomatopia',
  templateUrl: './app-create-onomatopia.component.html',
  styleUrls: ['./app-create-onomatopia.component.scss']
})
export class AppCreateOnomatopiaComponent implements OnInit {
  searchedValue: string=""
  newOnomatopia: string="";
@Output() sendOnomatopiaToParent :EventEmitter<string> =new EventEmitter();

  constructor() { }

  createOnomatopia(event:string):void{
    console.log("i'm in create", event)
    this.sendOnomatopiaToParent.emit(event)
  }
  ngOnInit(): void {
  }

}
