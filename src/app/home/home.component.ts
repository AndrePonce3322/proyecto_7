import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {

	constructor(private readonly data: Router){}

	enviar(){
		let random = Math.round( Math.random()*600);
		this.data.navigate(['registro', random]);
	}

	loginData(){
		this.data.navigate(['login'], {queryParams: {name: 'Andre'}})
	}

}
