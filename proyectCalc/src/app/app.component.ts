import {Component} from '@angular/core';

@Component(
    {selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']}
)
export class AppComponent {
    title = 'TA34-Angular-Basic';

    //FUNCIONES

    input: any = ("");
    num1: number = 0;
    num2: number = 0;
    operacion: any = "";

    numero(num1 : any) {
        this.input = this.input + num1
    }

    sumar() {

        this.num1 = parseInt(this.input) //Guarda el numero 1
        this.operacion = ("+")
        this.input = ("")

    }

    restar() {

        this.num1 = parseInt(this.input) //Guarda el numero 1
        this.operacion = ("-")
        this.input = ("")

    }

    multiplicar() {

        this.num1 = parseInt(this.input) //Guarda el numero 1
        this.operacion = ("*")
        this.input = ("")

    }
    dividir() {

        this.num1 = parseInt(this.input) //Guarda el numero 1
        this.operacion = ("/")
        this.input = ("")

    }

    resultado() {
        this.num2 = parseInt(this.input)
        switch (this.operacion) {
            case "+":
                var resultado;

                resultado = this.num1 + this.num2;

                this.input = resultado;
                break;
            case "-":
                var resultado;

                resultado = this.num1 - this.num2;

                this.input = resultado;
                break;
            case "*":
                var resultado;

                resultado = this.num1 * this.num2;

                this.input = resultado;
                break;
            case "/":
                var resultado;

                resultado = this.num1 / this.num2;

                this.input = resultado;
                break;

            default:
                break;
        }

    }

    AllClear() {}
  }
