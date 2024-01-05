function EncontrarMaiorNumero(array){
    let maior = array[0]
    for (let i = 1; i < array.length; i++){
        if (array[i] > maior){
             maior = array[i]
        }

    }
    return maior

}

const numbers = [ 1, 2, 5, 4]
const result =  EncontrarMaiorNumero(numbers)
console.log(result)