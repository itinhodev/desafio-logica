let nomeHeroi = "Itallo"
let xpHeroi = 8500
let ranking = ""

if(xpHeroi < 1000){
    ranking = "Ferro"
}
else if (xpHeroi > 1000 && xpHeroi < 2001){
    ranking = "Bronze"
}
else if (xpHeroi > 2000 && xpHeroi < 5001){
    ranking = "Prata"
}
else if (xpHeroi > 5000 && xpHeroi < 7001){
    ranking = "Ouro"
}
else if (xpHeroi > 7000 && xpHeroi < 8001){
    ranking = "Platina"
}
else if (xpHeroi > 8000 && xpHeroi < 9001){
    ranking = "Ascendente"
}
else if (xpHeroi > 9000 && xpHeroi < 10001){
    ranking = "Imortal"
}
else {
    ranking = "Radiante"
}
console.log("O Herói " + nomeHeroi + " está no nível " + ranking)