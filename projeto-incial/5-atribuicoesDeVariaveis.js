console.log("Trabalhando com atribuições de variáveis");

//const nome = "Sany";
const sobreNome = "Chiquetti";

//console.log(nome + sobreNome);  aqui ele vai escrever tudo junto.
//console.log(nome, sobreNome);   aqui ele vai escrevere separado
//console.log(nome + " " + sobreNome);  aqui tb ele vai escrever separado, veja que tem um espaço ente as aspas.

//Interpolação:
//console.log(`Meu nome é ${nome} ${sobreNome}`);  dessa forma colocamos as crases para escrever um texto e chamamos a variável por meio do ${}, dentro da crase.

//Sobre escrever uma váriavel já declarada (veja que nesse caso não preciso colocar o const, pois ela já foi declarada):
// nome = nome + sobreNome; ele não vai deixar, pois uma const não pode ser sobre encrita, então precisa na declaração usar o let no lugar com const:

let nome = "Sany";
nome = nome + sobreNome; // agora ele reconhece que é para sobreescrever o valor do nome.
console.log(nome);
//não é boa prática fazer, isso pois é difícil achar erros 

//Coque nomes nas variáveis da forma mais precisa possível: Ex: nome coloque primeiroNome.

let idade; // declaração da variável
idade = 45;// atribuição do valor
idade = idade+1; // reatribuindo valor
console.log(idade);