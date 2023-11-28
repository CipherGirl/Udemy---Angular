import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = '';
  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
