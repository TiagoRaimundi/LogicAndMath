function encontrarMaiorNumero(array){
    let maior = array[0]
    for (let i = 1; i < array.length; i++){
        if (array[i] > maior){
            maior = array[i]
        
        }
    }
    return maior
}

const numeros = [1, 2, 5, 8, 9, 1, 3]
resultado = encontrarMaiorNumero(numeros)
console.log(resultado)