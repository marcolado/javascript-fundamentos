const teste = function (nota){
    switch (Math.ceil(nota)){
    case 10:
    case 9:
  console.log('fidapé')
    break
    case 8: case 7:
        console.log('aprovado')
        break
        case 4: case 5: case 6:
            console.log('recuperação')
            break
            case 0: case 1: case 2: case 3:
                console.log('se fudeu, papai')
                break
            default:
              console.log("nota inválida")
            }
}
teste(5)
teste(10)
teste(0)
teste(3)
teste(7)
teste(100)