import { Component, EventEmitter, Output } from '@angular/core';
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
	boleanoDarkMode=false; //Emitir datos del modo dark
	contador = 0;

	@Output() boleanDark = new EventEmitter<boolean>();

	constructor(private readonly data: Router) { }

	enviar() {
		let random = Math.round(Math.random() * 600);
		this.data.navigate(['registro', random]);
	}

	loginData() {
		this.data.navigate(['login'], { queryParams: { name: '...' } })
	}

	modoDark() {
		++this.contador;

		if (this.contador >= 1) {
			this.validacionDark = this.iconoOn;
			this.boleanoDarkMode=true;
			this.boleanDark.emit(this.boleanoDarkMode); //Emitiendo si ha tocado el boton será true 
		}
		if(this.contador >= 2){
			this.validacionDark = this.iconoOff;
			this.boleanoDarkMode=false;
			this.boleanDark.emit(this.boleanoDarkMode); //Sino ha tocado el botón será false
			this.contador = 0;
		}



	}

}
