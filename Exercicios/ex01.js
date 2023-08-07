class carro{
    marca;
    modelo;
    gastoMedioPorKm;

    constructor(marca, modelo, gastoMedioPor){
        this.marca = marca;
        this.modelo = modelo;
        this.gastoMedioPorKm = gastoMedioPor;
    }

calcularGastoMedio(distancia, precoCombustivel){
    return distancia * this.gastoMedioPorKm * precoCombustivel;
    }

}

const carro1 = new carro("Ford", "Focus", 1/12);
const carro2 = new carro("Fiatts", "uno", 1/20);

console.log(carro1.calcularGastoMedio(70, 5));
