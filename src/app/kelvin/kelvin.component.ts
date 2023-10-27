import { Component } from '@angular/core';

@Component({
  selector: 'app-kelvin',
  templateUrl: './kelvin.component.html',
  styleUrls: ['./kelvin.component.css']
})
export class KelvinComponent {
  celsius : number;

  constructor() {
    this.celsius = 0; // Inicializa la propiedad con un valor por defecto
  }
  
  calcularK(): number {
    return this.celsius + 273.15
  }
}
