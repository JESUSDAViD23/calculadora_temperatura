import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.css']
})
export class FahrenheitComponent {
  celsius : number;

  constructor() {
    this.celsius = 0; // Inicializa la propiedad con un valor por defecto
  }
  
  calcularF(): number {
    return (this.celsius * 9/5) + 32
  }
}
