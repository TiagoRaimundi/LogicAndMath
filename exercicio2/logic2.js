////Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

var num1 = parseFloat(prompt("Digite um Número: "))
var num2 = parseFloat(prompt("Digite outro Número: "))

function soma(a, b){
    return a+b
}
function mult(a, b){
    return a * b
}
function sub(a, b){
    return a-b
}
function div(a, b){
    if(b === 0){
        return "Indefinido (Divisão por 0)"
    }
    return a/b
}

console.log("Soma: ", soma(num1,num2))
console.log("Multiplicação: ", mult(num1,num2))
console.log("Subtração: ", sub(num1,num2))
console.log("Divisão: ", div(num1,num2))