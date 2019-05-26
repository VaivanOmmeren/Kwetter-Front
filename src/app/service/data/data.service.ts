import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  private wsUri = 'ws://localhost:8080/socket';
  websocket = new WebSocket(this.wsUri);

  constructor() {
    this.websocket.onopen = evt => {
      alert('Connnection open...');
    };
    this.websocket.onmessage = evt => {
      alert('Received message' + evt.data);
    };
  }
}


