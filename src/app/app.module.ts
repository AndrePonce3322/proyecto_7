import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Componentes
import { Form_reactiveComponent } from './form_reactiveSimple/form_reactive.component';

// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RutaFormModule } from './ruta-form.module';

@NgModule({
  declarations: [
    AppComponent,
    Form_reactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RutaFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
