const inteiroaleatorio = function(min,max){
    const valor = Math.random() * (max-min) + min
    if (max <= min){
        return inteiroaleatorio(max,min)
    }
         return Math.floor(valor)

}
 

 
let op 
do {
    op = inteiroaleatorio(10, -1)
    console.log(`você escolheu ${op}.`) // o do/while  vai rodar pelo menos uma sequência antes de parar.

} while(op != -1)

console.log('falou!')