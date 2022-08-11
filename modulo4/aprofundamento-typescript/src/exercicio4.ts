// EXERCICIO 4

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Como você faria, já com a extensão instalada, para transpilar(converter) 
// esse arquivo typescript em um arquivo javascript?
// Se não houvesse uma pasta src, eu iria criar um arquivo .js e em seguida iria escrever 
// no terminar tsc "nomeDoArquivo.ts"

// c) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
// Já com o arquivo .ts numa pasta src, faria um arquivo package.json com as linhas :
// "scripts": { "start": "tsc && node ./build/nomeDoArquivo.js }". Além disso, no arquivo tsconfig.json
// acrescentaria a linha: include": ["scripts/**/*"] e digitaria tsc no terminal.

// d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, 
// explique como fazer.
// Caso varios arquivos estejam na pasta src, apenas digite no termnar tsc que todos os arquivos
// serão transpilados no build


