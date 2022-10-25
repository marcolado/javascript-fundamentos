const inteiroaleatorio = function(min,max){
    const valor = Math.random() * (max-min) + min
    return Math.ceil(valor)
}

let op = 0 

while (op != 10){
    op = inteiroaleatorio(-1,10)
    console.log(`você escolheu ${op}.`)
}
console.log('falou!')
