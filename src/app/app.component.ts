import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'AAAaprendiendo-angular';
  public descripcion:string;
  public fondo:string;
  constructor(){
    this.fondo= Configuracion.fondo;
    this.descripcion=Configuracion.descripcion;
    this.title=Configuracion.titulo;
  }
}
