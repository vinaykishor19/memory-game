const cordArray =[
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
    
]

cordArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cordsChosen =[]
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for(let i = 0; i < cordArray.length; i++){
        const cord = document.createElement('img')
        cord.setAttribute('src', 'images/blank.png')
        cord.setAttribute('data-id',i)
        cord.addEventListener('click', flipCard)
        gridDisplay.appendChild(cord)
    }
}

createBoard()

function checkMatch(){
   const cards = document.querySelectorAll('img')
   const optionOneId = cardsChosenIds[0]
   const optionTwoId = cardsChosenIds[1]
   if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    
   }

   if( cordsChosen[0] == cordsChosen[1]) {
    
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cordsChosen)
   } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    
   }
   resultDisplay.textContent = cardsWon.length
   cordsChosen = []
   cardsChosenIds = []

   if(cardsWon.length == cordArray.length/2){
    resultDisplay.innerHTML = 'congratulations you found them all'
   }
}
function flipCard(){
    let cardId = this.getAttribute('data-id')
    cordsChosen.push(cordArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cordArray[cardId].img)
    if(cordsChosen.length===2){
        setTimeout(checkMatch, 500)
    }
}