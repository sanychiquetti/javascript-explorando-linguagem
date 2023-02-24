console.log("Trabalhando com Conversão de Tipos");
//concatenação:
console.log("ano" + 2020); // ele vai juntar o numero mais o texto: ano2020
console.log("2" + "2"); // ele vai juntar os dois textos: 22

console.log(parseInt("2") + parseInt("2")); // podemos padir para ele converter em número, usando o parseInt. o resultado aqui seria: 4

console.log("10" / "2"); // veja que o JS é muito "inteligente" ele consegue entender que são números e faz a conversão: 5, pois a / (divisão só serve para números)

console.log("10" / "ano"); //ele não vai entender e vai retornar NaN... que quer dizer Not a Number
