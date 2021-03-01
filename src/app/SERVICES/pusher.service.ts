declare const Pusher: any;
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  constructor() {
    this.pusher = new Pusher('ca0478730270c9e290b6',{
      cluster: 'ap2',
      forceTLS: true
    })
   }
   subscribeToChannel(channelName: String, events: String[], cb: Function){
     var channel = this.pusher.subscribe(channelName);

     events.forEach(event =>{
       channel.bind(event, function(data){
         cb(data)
       });
     })
   }
}
