import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html',
})
export class VideojuegoComponent implements OnInit,DoCheck{
  public titulo:string;
  public listado:string;

  constructor(){
    this.titulo ="Componente de videojuegs"
    this.listado="Listado de los juegos mas populares"
    console.log("se ha cargado el componente videojuego.Componente")
  }

  ngOnInit(){
    console.log("OnInit");
  }

  ngDoCheck(){
    console.log("DoCheck");
  }

  cambiarTitulo(){
    this.titulo="Cambiamos titulo";
  }
}
