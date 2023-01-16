import { NgModule } from '@angular/core'
import { RouterModule, Routes } from "@angular/router";
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Form_reactiveComponent } from "./form_reactiveSimple/form_reactive.component";
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const rutas: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'registro/:id', component: Form_reactiveComponent},
    {path: 'login', component: LoginComponent},
    // Home es igual a bienvenida component
    {path: 'home', component: BienvenidaComponent},
    {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
})

export class RutasModule{}