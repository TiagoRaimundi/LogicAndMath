function somaNumeros(array){
    soma = 0
    for (i = 0; i < array.length; i++){
        soma += array[i]
    }

    return soma

}

const numbers = [1, 2, 3]
const result = somaNumeros(numbers)
console.log(result)