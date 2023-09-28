//Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.

const favoriteFruits = []

while(true){
    const fruit = prompt("Enter your favorite fruit: ")
    if(fruit === null || fruit === " "){
        break
    }
    favoriteFruits.push(fruit)
}

if(favoriteFruits.length > 0){
    alert("Your favorite fruit are: " + favoriteFruits.join(", "))
}else{
    alert("You don't have any fruit, you don't have any fruit")
}