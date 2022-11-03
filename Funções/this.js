const pessoa = { 
   saudacao: ' bom dia ',
   falar(){
    console.log(this.saudacao)//necessário o this para referenciar o objeto 
   }

}
pessoa.falar()
const falar = pessoa.falar.bind(pessoa)