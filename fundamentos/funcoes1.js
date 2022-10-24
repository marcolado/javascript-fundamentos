//funçãoo sem retorno//
function imprimirSoma(a,b) {
    console.log(a+b)
}

imprimirSoma(6,10)

//função com retorno//


function soma (a,b =1 ) { //coloca um valor padrão à variável b
    return a + b 
}
console.log(soma(2,5)) 
console.log(soma(1))//vai somar com o valor padrão já que não houve declaração, no caso, valor 1

//armazendo funções em uma variável 

const teste = function (a,b) {
    console.log(a+b)
}
teste(3,6)


//armazendando uma função arrow em uma variável
const soma2 = (a,b) => {
    return a+b
}
console.log(soma2(2,3))

//retorno implícito
const subtracao = (a,b) => a - b

console.log(subtracao(3,4))

const imprimir = a => console.log(a)
imprimir('legal!')