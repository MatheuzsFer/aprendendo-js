class Usuario {
    nome;
    idade;
    anoNascimento;


    constructor(nome, idade, ){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = new Date().getFullYear() - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
            console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
        } else if (p2.idade > p1.idade) {
            console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
        } else {
            console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
        }
    }

    const p1 = new Usuario('Maria', 25, 'Rio de Janeiro', 'RJ');
    const p2 = new Usuario('João', 50, 'Fortaleza', 'CE');
    compararPessoas(p1, p2);