import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  nameData!: string;

  constructor(private readonly formbuilder: FormBuilder, private EnviarRuta: Router, private readonly TomarDatosRoute: ActivatedRoute) { }

  boton() {
    // Enviando los datos del name en querys
    this.EnviarRuta.navigate(['home'],{queryParams: {name: this.loginForm.value.name, lastname: this.loginForm.value.lastname}});
    // Reseteando formulario
    this.loginForm.reset();
  }

  ngOnInit(): void {
    this.loginForm = this.Builder();

    this.TomarDatosRoute.queryParams.subscribe(
      (parametros: Params) => {
        this.nameData = parametros['name'];
      }
    )

  }

  Builder() {
    return this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

}
