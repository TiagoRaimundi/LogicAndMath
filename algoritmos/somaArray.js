function somarNumeros(array){
    let soma = 0 
    for (i = 0; i < array.length; i++){
        soma += array[i]
    }

    return soma
}

const number = [55, 64, 84]
const result = somarNumeros(number)
console.log(result)