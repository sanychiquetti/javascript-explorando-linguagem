console.log(`\nTrabalhando com condicionais - loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false; // mudamos aqui variável tipo let pois ela irá mudar conforme as condições abaixo
const destino = "Salvador";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

//TODO ESSE CÓDIGO VAMOS SIMPLIFICAR NUMA VARIÁVEL:
// if (idadeComprador >= 18 || estaAcompanhada == true ) {
// 	console.log("Boa Viagem!!! ");
// 	listaDeDestinos.splice(1, 1); // remove item, vendeu
//     temPassagemComprada = true; // se ela tem a idade ou está acompanhada então mudado para true a const da passagem.
// } else {
// 	console.log("Comprador menor de idade, e não tem acompanhante, por isso não posso vender!");
//     temPassagemComprada = false; // continua false, pois não tem idade ou não tem acompanhante
// }

//- VARIÁVEL SIMPLIFICANDO O ACIMA:
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

// agora queremos saber se nosso destino existe, para isso vamos rodar toda a lista, vamos precisar de um contador
let contador = 0; // começa com 0
let destinoExiste = false;
while (contador <3){ // enquanto meu contador for menor que minha lista, que nesse caso é 3, verifique:
    if(listaDeDestinos[contador] == destino){// se lista for igual destino imprima:
        destinoExiste = true; // se verdadeiro mudamos para verdadeiro.
        break;// se for verdadeiro, então pedimos para ele parar.
    }
    contador += 1;// aqui para não entrar em loop infinito, precisamos que ele some +1
}
console.log("Destino existe: ", destinoExiste); 

if(podeComprar && destinoExiste) {

    console.log("Boa Viagem");

}else {
    
    console.log("Descupe, não podemos atendê-lo no momento");
}