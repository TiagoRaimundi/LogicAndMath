function maiorNumero(array){
    let maior = array[0]
    for (i = 1; i < array.length; i++){
        if(maior < array[i]){
            maior = array[i]
        }
    }
    return maior
}

const number = [ 1, 56, 8]
const result =  maiorNumero(number)
console.log(result)