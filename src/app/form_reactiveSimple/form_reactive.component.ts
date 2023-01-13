import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-form_reactive',
    templateUrl: './form_reactive.component.html',
    styleUrls: ['./form_reactive.component.css']
})

export class Form_reactiveComponent implements OnInit{
    constructor(private readonly fb: FormBuilder){}
    // Variables
    reactive!: FormGroup;
    ngOnInit(): void {
        this.reactive = this.construir();
    }

    // Funciones 
    construir(){
        return this.fb.group({
            name: ['',[Validators.required, Validators.minLength(5)]]
        })
    }
    tomar(){
        alert(this.reactive.value)
        console.log(this.reactive.value)
    }

}