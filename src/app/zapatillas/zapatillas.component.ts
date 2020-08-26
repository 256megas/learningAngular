import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService],
})
export class ZapatillasComponent implements OnInit {
  public titulo: string;

  public color: string;
  public mi_marca: string;

  constructor(private _zapatillaService: ZapatillaService) {
    this.mi_marca = 'fila';
    this.color = 'red';
  }

  ngOnInit() {
    console.log(this.zapatillas);
    this.zapatillas = this._zapatillaService.getZapatillas();
  }

  marcas() {
    this.zapatillas.forEach((value, index) => {});
  }

  getMarca() {
    alert(this.mi_marca);
  }
  addMarca() {
    this.zapatillas.push(
      new Zapatilla('Reebok Classic', 80, 'reebook', 'blanca', true)
    );
  }

  borrarMarca(indice) {
    this.zapatillas.splice(indice, 1);
  }

  mostrarPalabra() {
    alert(this.mi_marca);
  }
}
