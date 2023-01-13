import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-form_reactive',
    templateUrl: './form_reactive.component.html',
    styleUrls: ['./form_reactive.component.css']
})

export class Form_reactiveComponent implements OnInit{

    simpleForm!: FormGroup;

    constructor(private readonly builder: FormBuilder){}

    ngOnInit(): void {
        this.simpleForm = this.Estructurar();
    }

    boleano!:string;
    tomarDatos(){
        console.log(this.simpleForm.value);
        this.boleano=this.simpleForm.value;
        this.simpleForm.reset();
    }

    Estructurar(){
        return this.builder.group({
            nombre: ['',[Validators.required]],
            apellido: ['',[Validators.required]]
        })
    }

}