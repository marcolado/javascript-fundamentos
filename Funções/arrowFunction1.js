//função normal
function dobro(a){
    return console.log(2*a) 
}
 dobro(2)
 dobro(5)
 //reescrevendo de outra forma 
 let dobro2 = function(a){
     return console.log(2*a)
 }
 dobro2(3)
 //reescrevendo arrow
  let dobro3 = (b) => {
     return console.log(2*b)
  }
  dobro3(4)
  /* se houver um único parâmetro, 
  não precisa usar entre chaves nem entre colchetes*/
  let dobro4 = bc => 2*bc
 console.log(dobro4(Math.PI))