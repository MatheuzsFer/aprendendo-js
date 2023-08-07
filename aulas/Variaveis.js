function escrevaSeuNome(nome) {
    return ('Seu nome é ' + nome);
}
escrevaSeuNome('Matheus');
escrevaSeuNome('Matias');
escrevaSeuNome('Maria');

function verificarIdade( idade){
    if(idade >= 18){
        console.log(escrevaSeuNome('Matias') + ', Parabens você é maior de idade');
    }
    else{
        console.log('Que pena você é menor de idade');
    }
}

verificarIdade(10);