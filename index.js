let player ={
    name: "wiss",
    money: 145
}

let firstCard = getRand()
let secondCard = getRand()
let cards=[firstCard ,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "
messageEl = document.getElementById('ti')
sumEl = document.getElementById('sum')
cardEl = document.getElementById('ca')


let playerEl = document.getElementById("player")
playerEl.textContent = player.name + ": " + player.money + "$"


function getRand(){
let number = Math.floor(Math.random()*13) + 1
        if(number === 1){
        return 11
    }else if(number>10){
        return 10
    }else return number
}

function start(){
    sumEl.textContent = "sum : " + sum
    cardEl.textContent = " cards:" 
    for(i=0 ; i<cards.length;i++ ){
        cardEl.textContent += cards[i] + " "
    }

if(sum <= 20){
    message = " do you want to draw a new card?"

} else if(sum === 21){
    message = "you've got blackjack !"
    hasBlackJack = true
    

}else if(sum > 21){
    message = "you're out of the game"
    isAlive = false
  
}
messageEl.textContent = message
}

function newca(){
if(isAlive==true && hasBlackJack == false && player.money != 0){
  let card = getRand()
  cards.push(card)
  sum += card
  start() 
    }
}

