console.log(`Trabalhando com listas - Deletando itens`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
console.log(listaDeDestinos);

//se desejo remover um item da lista posso usar o slice:
listaDeDestinos.slice(2,1); //Temos que dar 2 valores para ele separado por vírgula, o primeiro valor será a posição na lista do que vamos remover, o segundo valor será a qtdade que quero remover - nesse caso 2,1 - ele vai remover e Rio de Janeiro, pois a contagem começa em 0 
console.log(listaDeDestinos);
