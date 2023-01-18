import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  loginName!: string;
  loginLastName!:string;

  constructor(private tomarParametros: ActivatedRoute){}

  ngOnInit(): void {
    this.tomarParametros.queryParams.subscribe(
      (parametros: Params) =>{
        this.loginName = parametros['name'];
        this.loginLastName = parametros['lastname'];
      }
    )
  }

}
