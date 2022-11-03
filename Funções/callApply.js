function getPreco(imposto = 0, moeda= 'R$'){
    return `${moeda} ${this.preco * (1- this.desc)* (1 + imposto)}`
}
const produto =  { 
    nome: 'Ipad',
    preco: 2500.00,
    desc: 0.15,
    getPreco
}
console.log(produto.getPreco())
//usando o call para chamar o objeto
console.log(getPreco.call(produto, 0.1, '$'))
console.log(getPreco.apply(produto, [0.1, '$'] ))