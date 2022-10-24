const a = [3.0,6.7,4.5,8.0]
console.log(a[0],a[3].toFixed(1))

a[4]=8.5
a[5]=10
console.log(a)
console.log(a.length)
const media = a/a.length
console.log(media)
a.push({id:3},'aqui',3,false, null)/*comando push adiciona valores ao arrey
de qualquer tipo de variável*/
console.log(a)
// evitar utilizar arrays com vários tipos//
console.log(a.pop())//tira o último elemento d array//
delete a[7]
console.log(a)