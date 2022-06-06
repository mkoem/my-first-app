import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  userName='';
  //allowClearButton=false;
  constructor() { }

  ngOnInit(): void {
  }

  onUpdateUserName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    //this.allowClearButton = true;

  }

  onClearName(){
    this.userName='';
  }

}