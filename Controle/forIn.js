const notas = [2.3,5.6,7.6,5.4,5.7]

for(let i in notas) {
    
    console.log(`${notas[i]}`)

    }

const pessoa = {
    nome: 'carlão',
    idade:34,
    altura:185
}
for (let atributo in pessoa){
    console.log(`${atributo}=${pessoa[atributo]}`)
}
