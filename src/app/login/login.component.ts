import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  @Output() formulario = new EventEmitter<string>();


  boton(){
    this.loginForm.reset();
    this.formulario.emit(this.loginForm.value)
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
