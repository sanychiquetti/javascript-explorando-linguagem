console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
// Para saber se a pessoa quem esta comprando é maior de idade:
const idadeComprador = 15;
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade ");//se é maior de idade, então ele pode comprar um item, que seria o comando de remover um item da lista.
    listaDeDestinos.splice(1,1);// será removido "vendido" um destino para ele.
}else{
    console.log("Comprador menor de idade, não posso vender ");
}
console.log(listaDeDestinos);

//(condições) ou operadores lógicos:
console.log(idadeComprador > 18); //maior que  
console.log(idadeComprador < 18); // menor que 
console.log(idadeComprador >= 18); // maior ou igual
console.log(idadeComprador <= 18); // menor ou igual
console.log(idadeComprador == 18); // igualdade (comparando dois valores)


