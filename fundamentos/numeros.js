const a = 1.0 
const b = Number('2.0')//transforma a string em número
const c = 1.1
console.log(a+b)

console.log(Number.isInteger(b))//retorna true caso a variável seja de fato um número

console.log(typeof c)

console.log(Number.isInteger(c))

const avaliacao1 = 7.8
const avaliacao2 = 6.5

const total = avaliacao1*a + avaliacao2*b
const media = total/2 
console.log(media.toFixed(2))// a função toFixed limita as cASAS decimais que serão retornadas

//operações aritiméticas// 
console.log(media.toString())//transforma a média em string

console.log(media.toString(2))//transforma em valor binário acrescentando o 2 nos parênteses

console.log(typeof media.toString(2))

console.log(typeof Number ('2'))