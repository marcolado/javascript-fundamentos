function tratarErro(erro){
    throw new Error( 'deu xabú')
    //throw 10 (lançaria apenas o  número)
}

function gritado(obj) {
 try {   console.log(obj.name.toUpperCase()+ '!!!')
}  catch (e) {
    tratarErro(e)
} finally {
    console.log('final')
} 
}    

const obj = {nome: 'Sorriso'}
gritado()
//tratamento de erro// 