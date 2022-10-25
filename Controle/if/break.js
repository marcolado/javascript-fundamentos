const nums = [1,2,3,4,5,6,7,8,9,10]
for(let x in nums ) {
    if (x==5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}


for(let y in nums ) {
    if (y==5) {
        continue // eles interrompe, neste caso, no índice 5 = 6 e continua no 6 = 7
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums){      // NÃO USAR ESSE TIPO DE ESTRUTURA
    for (b in nums){
        if (a==2&& b==3) break externo
        console.log(`par = ${a},${b}`)
    }
}