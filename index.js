const fs = require ('fs');
const jsonStr = fs.readFileSync('./product_details.json', "utf-8");
const produtoSource = JSON.parse(jsonStr);


const nomeSemDestructuring = produtoSource.produto.nome
const fotoPrincipalSemDestructuring = produtoSource.produto.fotos.fotoPrincipal

const {produto: {nome}} = produtoSource;
const {produto: {fotos: {fotoPrincipal}}} = produtoSource;

console.log(nome);
console.log(fotoPrincipal);