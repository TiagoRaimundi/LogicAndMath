const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const escolhas = ['pedra', 'papel', 'tesoura']

function jogar(escolhaUsuario){
    const escolhaComputador = escolhas[Math.floor(Math.random() * escolhas.length)]
    console.log(`Computador escolheu: ${escolhaComputador}`)

    if(escolhaUsuario === escolhaComputador){
        return 'Empate!'
    }

    if((escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')){
            return 'Você ganhou!'
        }

        return 'Você perdeu!'
      

}

readline.question('Escolha pedra, papel ou tesoura: ', escolhaUsuario => {
    escolhaUsuario = escolhaUsuario.toLowerCase()
    if(escolhas.includes(escolhaUsuario)){
        console.log(jogar(escolhaUsuario))
    }else {
        console.log('Escolha inválida.')

    }
    readline.close()
})