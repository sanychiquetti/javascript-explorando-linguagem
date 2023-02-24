console.log(`Trabalhando com condicionais - simplificando`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
// Para saber se a pessoa quem esta comprando é maior de idade:
const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);
if (idadeComprador >= 18 || estaAcompanhada == true ) {
	console.log("Boa Viagem!!! ");
	listaDeDestinos.splice(1, 1);
} else {
	console.log("Comprador menor de idade, não posso vender ");
}

console.log("Embarque: \n"); //\n pula linha 
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem.");
}else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos); 

// os || quer dizer "ou", ou uma opção ou outra
// os && que dizer "e" que as duas opções devem ser verdadeira
