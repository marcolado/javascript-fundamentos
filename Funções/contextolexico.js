const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {//vai retornar o escopo mais abrangente, pois está executando a função com outro contexto
    const valor = 'Local'
    minhaFuncao()
}

exec()