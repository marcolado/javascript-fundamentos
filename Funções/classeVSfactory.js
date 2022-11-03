class pessoa{
    constructor(nome){
        this.nome= nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}!`)
    }
}
const p1 = new pessoa('marx')
p1.falar()
///
const pessoa2=nome  => {
    return {
        falar: () => console.log(`meu nome é ${nome}!`)}

}
const p2= pessoa2('Adriane') 
p2.falar()