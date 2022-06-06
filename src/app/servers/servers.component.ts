import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName='Testserver';
  allowNewServer=false;
  serverCreationStatuss = 'No server was created';
  serverCreated=false;
  servers = ['Testserver', 'Testserver2']

  constructor() { 
    setTimeout(()=>{this.allowNewServer=true;
  },2000);
}

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatuss='Server was created! Server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}