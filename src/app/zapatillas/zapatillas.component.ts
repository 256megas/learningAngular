import { Component,OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';



@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit{
  public titulo: string;
  public zapatillas: Array<Zapatilla>;
  public color:string;
  public mi_marca:string;

  constructor() {
    this.mi_marca="fila";
    this.color="red";
    this.zapatillas = [
      new Zapatilla('Reebok Classic', 80, 'reebook', 'blanca', true),
      new Zapatilla('Nike Runner MD', 60, 'Nike', 'negras', true),
      new Zapatilla('Adidas Yezzy', 180, 'Adidas', 'gris', false),
    ];
  }

  ngOnInit(){
    console.log(this.zapatillas)
  }

  marcas(){
    this.zapatillas.forEach((value,index)=>{

    })
  }

  getMarca(){
    alert(this.mi_marca)
  }
  addMarca(){
    this.zapatillas.push(new Zapatilla('Reebok Classic', 80, 'reebook', 'blanca', true));

  }
}
