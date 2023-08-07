class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return Math.round( this.peso / (this.altura * this.altura ) );
    }

    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 18.5){
            return ('Abaixo do peso');
        }else if(imc >= 18.5 && imc  < 25){
            return ('Peso ideal');
        }else if(imc >= 25 && imc  < 30){
            return ('Sobrepeso');
        }else if(imc >= 30 && imc < 40){
            return ('Obesidade grau I');
        }else if(imc >= 40 && imc  < 50){
            return ('Obesidade grau II');
        }else{
            return ('Obesidade grau III');
        }
    }
}



const p1 = new Pessoa('Matheus', 71, 1.71);
const p2 = new Pessoa('joyce', 72, 1.60);

console.log(p1.classificarImc());

