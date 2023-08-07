function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100 ))) ;
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100 ))) ;
}

const precoProduto = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoProduto, 10));
}   else if (formaDePagamento === 2){
    console.log(aplicarDesconto(precoProduto, 15));
}   else if (formaDePagamento === 3){
    console.log(aplicarDesconto(precoProduto));
}   else {
    console.log(aplicarJuros(precoProduto, 10));
}

console.log(200 * 0.10); 
console.log(10 / 100);
    