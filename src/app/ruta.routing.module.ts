import { NgModule } from '@angular/core'
import { RouterModule, Routes } from "@angular/router";
import { Form_reactiveComponent } from "./form_reactiveSimple/form_reactive.component";
import { LoginComponent } from './login/login.component';

const rutas: Routes = [
    {path: 'registro', component: Form_reactiveComponent},
    {path: 'login', component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
})

export class RutasModule{}