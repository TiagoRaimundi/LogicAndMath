function maiorNUmero(array){
    let maior = array[0]

    for (let i = 1; i < array.length; i++){
        if(maior < array[i]){
            maior = array[i]
        }

    }
    return maior
   
}

const numbers = [1,87,7,89]
const result = maiorNUmero(numbers)
console.log(result)