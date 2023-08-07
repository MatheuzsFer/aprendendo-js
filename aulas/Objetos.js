const user1 = {
    nome: 'Matheus Ferreira',
    idade: 20,
    cidade: 'Fortaleza',

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        }
};

user1.descrever();

const atributo = (user1.cidade);
console.log(`Minha cidade é ${atributo}`);

