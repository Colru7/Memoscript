const cardArray = [
    {
        name:"fries",
        img: "images/fries.png"
    },
    {
        name:"cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img: "images/hotdog.png"
    },
    {
        name:"ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name:"milkshake",
        img: "images/milkshake.png"
    },
    {
        name:"pizza",
        img: "images/pizza.png"
    },
    {
        name:"fries",
        img: "images/fries.png"
    },
    {
        name:"cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img: "images/hotdog.png"
    },
    {
        name:"ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name:"milkshake",
        img: "images/milkshake.png"
    },
    {
        name:"pizza",
        img: "images/pizza.png"
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener("click", flipcard)
        console.log(card, i)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkmatch() {
    const cards = document.querySelectorAll("img")
    const OptionOneId = cardsChosenIds[0]
    const OptiontwoId = cardsChosenIds[1]
    console.log(cards)
    console.log("check for match!")
    if (OptionOneId == OptiontwoId){
        cards[OptionOneId].setAttribute("src", "images/blank.png")
        cards[OptiontwoId].setAttribute("src", "images/blank.png")
        alert("You have clicked the same card!")
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("You found a match!")
        cards[OptionOneId].setAttribute("src", "images/white.png")
        cards[OptiontwoId].setAttribute("src", "images/white.png")
        cards[OptionOneId].removeEventListener("click", flipcard)
        cards[OptiontwoId].removeEventListener("click", flipcard)
        cardsWon.push(cardsChosen)
    } else {
        cards[OptionOneId].setAttribute("src", "images/blank.png")
        cards[OptiontwoId].setAttribute("src", "images/blank.png")
        alert("Sorry try again")
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
    if  (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = "Congratulations! You found them all!"
    }
}

function flipcard () {
    const cardId = this.getAttribute("data-id") 
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    // console.log("clicked", cardId)
    // console.log(cardsChosen)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkmatch, 500)
    }
}