import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  @Input() userTable : Array<object>;
  @Output() deleteuserEvent = new EventEmitter<number>();
  @Output() updateuserEvent = new EventEmitter<number>();
  
  constructor() {}

  ngOnInit(): void {
  }
 
  delete(i){
  this.deleteuserEvent.emit(i);
  }
  
  Update(i){

  }
}
