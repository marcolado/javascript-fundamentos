Number.prototype.entre = function(inicio,fim) {
    return this >= inicio && this <= fim //this serve para deixar o objeto visível fora do escopo
}
 function teste(nota){
    if (nota.entre(9,10)) {
    console.log('fi da pé')}
    else if (nota.entre(7,8.99)){
        console.log('Aprovado')
    }
    else if(nota.entre(4,6.99)){
        console.log('recuperação')
    }
    else if(nota.entre(0,3.99)){
        console.log('Se fudeu')
    }
    else {
        console.log('nota inválida')
    }
    console.log('fim')
}

teste(5)
teste(7)
teste(1)
teste(10)
teste(100)
