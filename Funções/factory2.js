// Factory simples
function produto(nome,preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(produto('tunk',2300))