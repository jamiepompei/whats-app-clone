import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/SERVICES/api.service';
import { AuthenticationService } from 'src/app/SERVICES/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  username: string = '';

  constructor(private api: ApiService, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(){
    let obj = {
      name: this.username
    }

    this.api.postChats(obj)
      .subscribe(resp =>{
        alert("User has been registered");
        console.log(resp);
      })
  }
}
