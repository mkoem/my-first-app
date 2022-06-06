import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
    serverName='';
    allowNewServer=false;
    serverCreated=false;
    elements = [];
  
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    onCreateServer(){
      //this.serverCreated=true;
      //this.serverName = Date.now.toString();
      this.elements.push(new Date());
      //this.serverCreationStatuss=' ' + this.serverName;
    }

    getColor(j : number){
      return j<4 ? '':'blue';
    }
  }