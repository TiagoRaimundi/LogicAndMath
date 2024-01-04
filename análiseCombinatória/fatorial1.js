const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


function fatorial(n){
    if (n === 0){
        return 1
    }else{
        return n * fatorial(n - 1)

    }
}

function arranjo(n, p){
    return fatorial(n) - fatorial(n - p)
}

rl.question('Iforme O valor de n: ', (n) => {
    rl.question('Informe o valor de p: ', (p) =>{
        console.log(`O arranjo de ${n} elementos tomados ${p} a ${p} é: ${arranjo(Number(n), Number(p))}`)
        rl.close()
    })
})