const a ='arceus'
console.log(a.charAt(3))//o primeiro caractere é contado como 0//
console.log(a.charCodeAt(3))//vai retornar o número correspondente da tabela unicode//

console.log(a.substring(1))//retorna apenas as letras depois da contagem//

console.log(a.substring(2,5))// vai do caractere 2 até o 4, não inclui o 5//

console.log(a.concat("2!"))//faz concatenação de strings//

console.log(a + 2 + " é mentira")// mais fácil concatenar com +//

console.log(a.replace('s','x'))// troca o primeiro parâmetro pelo segundo//

console.log(a.replace(/\w/g,'x'))/*troca todas as letras do primeiro parâmetro
(letra w, o g é o comando para englobar todas as letras s) pelo segundo*/

console.log('ana , marx , akito, makito'.split(','))// transforma uma string em um array//

console.log(typeof(a + 2))