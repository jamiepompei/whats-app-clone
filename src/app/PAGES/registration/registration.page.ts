import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/SERVICES/api.service';
import { AuthenticationService } from 'src/app/SERVICES/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  username: string = '';

  constructor(private api: ApiService, private authService: AuthenticationService,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit(){
    let obj = {
      name: this.username
    }

    this.api.postChats(obj)
      .subscribe(resp =>{
        alert("User has been registered");
        this.authService.saveUser(resp);
        this.navCtrl.navigateForward('home');
      })
  }
}
