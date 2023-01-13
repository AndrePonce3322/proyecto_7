import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { Form_reactiveComponent } from './form_reactiveSimple/form_reactive.component';

const rutas: Routes = [{
  path:'login', component: Form_reactiveComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class RutaFormModule { }
