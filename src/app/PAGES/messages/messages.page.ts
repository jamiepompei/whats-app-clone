import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/SERVICES/api.service';
import { AuthenticationService } from 'src/app/SERVICES/authentication.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  data: any;
  chat: string = '';

  constructor(private route: ActivatedRoute, private router: Router,
    private authService: AuthenticationService, private api: ApiService) {
    this.route.queryParams.subscribe(params=>{
      this.data = this.router.getCurrentNavigation().extras.state.chat;
      console.log('data ', this.data);
    })
   }

  ngOnInit() {
  }

  postMessage(){
    let user = JSON.parse(this.authService.getUser());
    let obj ={
      message: this.chat,
      from: user._id,
      chat_id: this.data._id,
      time: Date.now()
    }
    console.log('obj ', obj);
    this.api.postResource('/messages', obj)
    .subscribe(resp =>{
      console.log(resp);
      this.chat = '';
    });
  }
}
