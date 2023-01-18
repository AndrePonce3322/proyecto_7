import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {

	iconoOff = 'bi bi-toggle-off';
	iconoOn = 'bi bi-toggle-on'

	validacionDark = this.iconoOff;
	boleanoDarkMode=false;
	contador = 0;


	constructor(private readonly data: Router) { }

	enviar() {
		let random = Math.round(Math.random() * 600);
		this.data.navigate(['registro', random]);
	}

	loginData() {
		this.data.navigate(['login'], { queryParams: { name: 'Andre' } })
	}

	modoDark() {
		++this.contador;

		if (this.contador >= 1) {
			this.validacionDark = this.iconoOn;
			this.boleanoDarkMode=true;

			
		}
		if(this.contador >= 2){
			this.validacionDark = this.iconoOff;
			this.boleanoDarkMode=false;
			this.contador = 0;
		}



	}

}
