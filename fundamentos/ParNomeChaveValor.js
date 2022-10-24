const saudacao = 'oi'//variavel de fora 
function exec() {
      const saudacao = 'coé'
      return saudacao
}

const cliente = {
    nome: 'Marx',
    idade: 32,
    peso: 130,
    endeco: {
        rua: 'tatiana castro',
        numero: 3502
    }
}
console.log(saudacao)//retornará sempre a variavel mais global fora da função
console.log(exec())// retornará a função e executará a variável presente nela 
console.log(cliente)
