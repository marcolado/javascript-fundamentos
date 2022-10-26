function soma() {
let soma = 0 
 for (i in arguments) {
    soma += arguments[i]    // os parâmetros do índice vão ser somados ao soma = 0, adicionando o valor de
    // cada parâmetro ao soma 
    } return console.log(soma)
}
 
soma(1,'a','b','d','c')

function rando(min,max){
    return Math.floor (Math.random()* (max-min)+ min | 0);
}
  let numeros = [];
  for (let i = 0; i < 6; i++){
    numeros.push(rando(0,10));
    if (i == i){
        return i *= Math.floor(Math.random())
    } 
  }
  console.log(numeros)
