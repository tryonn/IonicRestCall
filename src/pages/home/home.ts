import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestapiService } from '../../providers/restapi-services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


users: any;

export class HomePage {

  constructor(public navCtrl: NavController, public restapiService: RestapiService) {
  	this.getUsers();
  }

}


getUsers(){
	this.restapiService.getUsers().then(data => {
		this.users = data;
	});
}
