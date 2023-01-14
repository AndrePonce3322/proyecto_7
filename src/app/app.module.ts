import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Componentes
import { Form_reactiveComponent } from './form_reactiveSimple/form_reactive.component';
import { HomeComponent } from './home/home.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CardComponent } from './card/card.component';


// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

// rutas
import { RutasModule } from './ruta.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    Form_reactiveComponent,
    LoginComponent,
    HomeComponent,
    BienvenidaComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RutasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
