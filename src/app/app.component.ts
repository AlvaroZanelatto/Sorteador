import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero = -1;
  numeroMaximo = 0; 

  sortearNumero() {
    this.numero = Math.floor(Math.random() * this.numeroMaximo)
  }
}
