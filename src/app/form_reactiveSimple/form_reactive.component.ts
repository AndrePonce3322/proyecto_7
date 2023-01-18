import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './form_reactive.component.html',
  styleUrls: ['./form_reactive.component.css']
})
export class Form_reactiveComponent implements OnInit{
  loginForm!:FormGroup;
  userID!:string;

  constructor(private readonly formbuilder: FormBuilder, private readonly idRoute: ActivatedRoute, private readonly sendData: Router){}

  boton(){
    this.sendData.navigate(['home'], {queryParams: {name: this.loginForm.value.name, lastname: this.loginForm.value.lastname}});

    this.loginForm.reset();
  }

  ngOnInit(): void {
    this.idRoute.params.subscribe(
      (parametros: Params) =>{
        this.userID = parametros['id'];
      }
    )

    this.loginForm = this.Builder();
  }

  Builder(){
    return this.formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(7)]],
      lastname: ['',[Validators.required, Validators.minLength(7)]]
    })
  }

}