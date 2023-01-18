import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    validacionBg = '#FFF'; //Modo claro
    validacionTxt = '#181a1b'; //Texto modo negro

    recibirDarkMode(verificacion: boolean) {
        if (verificacion == true) {
            this.validacionBg = '#181a1b'; //Modo oscuro background
            this.validacionTxt = '#FFF'; //Texto modo claro
        }else{
            this.validacionBg = '#FFF'; //Modo claro background
            this.validacionTxt = '#181a1b'; // Texto modo negro
        }
    }
}
