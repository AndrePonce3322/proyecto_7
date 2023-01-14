import { NgModule } from '@angular/core'
import { RouterModule, Routes } from "@angular/router";
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Form_reactiveComponent } from "./form_reactiveSimple/form_reactive.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const rutas: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'registro', component: Form_reactiveComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: BienvenidaComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
})

export class RutasModule{}