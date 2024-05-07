import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';

  public num1!: number;
  public num2!: number;
  public num3!: number;

  sumar() {
    this.num3 = this.num1 + this.num2;
  }

  restar() {
    if (this.num2 < 0)
      this.num3 = this.num1 + this.num2;
    else if (this.num1 < 0)
      this.num3 = this.num1 + this.num2;
    else if (this.num1 && this.num2)
      this.num3 = this.num1 - this.num2;
  }

  multiplicar() {
    this.num3 = this.num1 * this.num2;
  }

  dividir() {
    if (this.num2 == 0)
      window.alert("No es posible dividir entre 0, ingrese un nuevo número");
    else
      this.num3 = this.num1 / this.num2;
  }
}
