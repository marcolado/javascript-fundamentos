function area(altura,largura){
    const area = altura * largura;
    if(area > 20){
        console.log(`área maior que o permitido: ${area}m²`);
    } else{
        return area
    }
}
area(1,90)