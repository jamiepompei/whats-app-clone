// declare const Pusher: any;
import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';



@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;

  constructor() {
    this.pusher = new Pusher('ca0478730270c9e290b6',{
      cluster: 'us2',
      forceTLS: true
    })
   }
   subscribeToChannel(channelName: String, events: String[], cb: Function){
     
     var channel = this.pusher.subscribe(channelName);

     events.forEach(event =>{
       console.log("whats the event ", event);
       channel.bind(event, function(data){
         cb(data)
       });
     })
   }

   unsubscribe(channelName){
     console.log("pusher service unsub from ", channelName);
     this.pusher.unsubscribe(channelName);
   }
}
