function EncontrarMaiorNumero(array){
    let maior = array[0]
    for(let i = 1; i < array.length; i ++){
        if(array[i] > maior){
            maior = array[i]
        }

    } 
    return maior
}

const num = [1, 5, 7, 4 , 4552, 10, 54, 9, 71,]
const result= EncontrarMaiorNumero(num)
console.log(result)