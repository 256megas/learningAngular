import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebok Classic', 80, 'reebook', 'blanca', true),
      new Zapatilla('Nike Runner MD', 60, 'Nike', 'negras', true),
      new Zapatilla('Adidas Yezzy', 180, 'Adidas', 'gris', false),
    ];
  }

  getTexto() {
    return 'Hola Mundo';
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
