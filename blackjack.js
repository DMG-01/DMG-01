
let cards = []
let sum = 0
let hasBlackJack =false
let isAlive = true
let message = ""

 let messageEL = document.getElementById("display")
let sumEl = document.getElementById("sum-el")
let card = document.getElementById("cards")

let playerr = {
 namee : "player",
 price : 890
}
let player = document.getElementById("arr")
player.innerText = playerr.namee + ": $" + playerr.price

function getRandomCard(){
    let omo = Math.floor(Math.random() * 13) + 1
    if(omo > 10){
        return 10
    }
else if(omo === 11){
    return 11
}
else{
    return omo
}
}
function startGame(){
    isAlive = true 
firstCard = getRandomCard()
secondCard = getRandomCard()
cards = [firstCard,secondCard]
sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    card.textContent = "CARDS:" 
    for (let i = 0; i<cards.length; i++ ){
        card.textContent +=   cards[i] + "," 
    
    }
        sumEl.textContent = "sum:" + sum
if (sum <= 20){
    message ="do you want a new card"
    hasBlackJack = false
    isAlive = true
}
else if(sum === 21){
    message = "you've got black jack"
    hasBlackJack = true
    isAlive = true
}
else {
    message = "you are out of the game"
    hasBlackJack = false
    isAlive = false
    
}
messageEL.textContent = message
}

function newCard(){
    if( isAlive === true && hasBlackJack === false){
    
   let NEW = getRandomCard()
   sum += NEW
   cards.push(NEW)
   renderGame()
    }

    }
   