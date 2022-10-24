console.log(Math.ceil(6.1))// arredonda pra cima 

const obj1 = {}
obj1.nome = 'bola'
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome// serve pra deixar a variável pública fora do escopo também
    this.exec= function() {
        console.log('doidera!!')
    }
}
const obj2 = new obj('cadeira')
const obj3 = new obj('outra coisa')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj.nome)
obj3.exec()

