console.log(`\nTrabalhando com condicionais - loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false; 
const destino = "Curitiba";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0; 
let destinoExiste = false;
while (contador <3){ e:
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
    contador += 1;
}
console.log("Destino existe: ", destinoExiste); 

if(podeComprar && destinoExiste) {

    console.log("Boa Viagem");

}else {
    
    console.log("Descupe, não podemos atendê-lo no momento");
}

//Agora vamos trabalhar com o for, a contagem é iniciada diferente, ele é / em 3 partes: inicializador; contador (condicional); incremento;
for (let i = 0; i < 3; i++ ){ e:
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
}