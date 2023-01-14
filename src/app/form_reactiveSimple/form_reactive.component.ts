import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './form_reactive.component.html',
  styleUrls: ['./form_reactive.component.css']
})
export class Form_reactiveComponent implements OnInit{
  loginForm!:FormGroup;
  boton(){
    this.loginForm.reset();
  }
  constructor(private readonly formbuilder: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.Builder();
  }

  Builder(){
    return this.formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(4)]],
      lastname: ['',[Validators.required, Validators.minLength(4)]]
    })
  }

}