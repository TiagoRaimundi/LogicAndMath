//Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.

//const myFavorite = ['Uva', 'Banana', 'Manga', 'abacate']

//for (let i = 0; i < myFavorite.length; i++){
    //console.log(myFavorite[i])
//}

const frutasFavoritas = [];

while (true) {
    const fruta = prompt("Digite uma fruta favorita ou pressione Cancelar para sair:");

    if (fruta === null || fruta === "") {
        break;
    }

    frutasFavoritas.push(fruta);
}

if (frutasFavoritas.length > 0) {
    alert("Suas frutas favoritas são:\n" + frutasFavoritas.join(", "));
} else {
    alert("Você não inseriu nenhuma fruta favorita.");
}