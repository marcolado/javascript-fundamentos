const pessoa = {
nome: 'ana',
idade: 38,
endereco: {
    rua: 'casa do carai',
    numero: 666
}

}
const {nome, idade} = pessoa
console.log(nome,idade)

const {nome:n, idade:i}=pessoa
console.log(n,i)
const{endereco:{rua,numero,cep}}=pessoa
console.log(rua,numero,cep)