console.log(`Trabalhando com condicionais - if´s else´s`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
// Para saber se a pessoa quem esta comprando é maior de idade:
const idadeComprador = 16;
const estaAcompanhada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Boa Viagem!!! ");//se é maior de idade, então ele pode comprar um item, que seria o comando de remover um item da lista.
    listaDeDestinos.splice(1,1);// será removido "vendido" um destino para ele.
}else{
    //outra condição, se a pessoa é menor de idade, mas está acompanhada, pode comprar
    if(estaAcompanhada){
        console.log("Comprador menor de idade mas está acompanhada de um maior de idade ");//nesse caso pode comprar então pode (vender, remover)splice...
        listaDeDestinos.splice(1,1);// será removido "vendido" um destino para ele.
    }else{
        console.log("Comprador menor de idade, não posso vender "); // se a pessoa é menor de idade, mostra essa frase e não tem splice...
    }
}
console.log(listaDeDestinos);