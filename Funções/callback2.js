// sem callback 
const notas = [ 7.4 , 5.5 , 6.7 , 8.9,5.4,7.8]
const nostasbaixas = []
    for (let i in notas){
        if (notas[i] < 7 ){
        nostasbaixas.push(notas[i])
    }
    }
    console.log(nostasbaixas)

// com callback 
const notasbaixas2 = notas.filter(function (nota){
    return nota < 7 
})
console.log(notasbaixas2)

// callback com arrow
const notasbaixas3 = notas.filter(nota => nota < 7) 
console.log(notasbaixas3)

