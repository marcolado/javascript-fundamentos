function ran([min = 0, max=100]) {
    if (min>max) [min,max] = [max,min]// segue a função para inverter o min e o max caso o min seja maior que o max 
    const valor= Math.random() * (max - min) + min
    return Math.floor(valor)  /*O método Math.floor() arredonda um número para baixo para o
     número inteiro mais próximo, e retorna o resultado.
Exemplo: O valor 2.64 arrendondando (floor) = 2. */
    
}


console.log(ran([]))




