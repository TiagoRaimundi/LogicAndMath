function somarNumeros(array){
    let soma = 0
    for ( i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma
}

const numbers = [1, 2, 3, 4, 5]
const result = somarNumeros(numbers)
console.log(result)