function carro(velocidadeMax=200, delta=5){
    //atributo privado
    let velocidadeAtual= 0 
    //método público
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax}
    }
    //método público
this.getvelocidadeAtual = function(){
    return velocidadeAtual
   }
}

const uno = new carro 
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari =  new carro(350,50)
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())