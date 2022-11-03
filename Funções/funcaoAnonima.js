const soma = function(a,b){
    return a+b
}
soma(2,2)
//
//
function soma2(x,y,operacao = soma ){
    console.log(operacao(x,y))
}
soma2(3,4)
//
///
soma2(3,4, function(a,b){
    return a - b 
})
soma2(5,6, (x,y) => x * y )
//
//
//
const pessoa = {
   falar: function(){
      console.log('oi')
   },
   falar2: function(){
      console.log('hello')
   }

}
pessoa.falar()
pessoa.falar2()