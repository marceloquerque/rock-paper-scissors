let options = document.querySelectorAll(".option-box");
let restartBtn = document.querySelector(".restart-btn");
let popupBtn = document.querySelector(".popup-btn");

Array.from(options).forEach(element => {
    element.addEventListener("click", playGame)
})

let showPlayerChoice = document.querySelector(".player-choice");
let showCompChoice = document.querySelector(".comp-choice");
let scoreInfo = document.querySelector(".score-info");
let scoreMessage = document.querySelector(".score-message");
let playerScoreElement = document.querySelector(".player-score");
let compScoreElement = document.querySelector(".comp-score");
let playerScore = 0;
let compScore = 0;

restartBtn.addEventListener("click", restartGame)
popupBtn.addEventListener("click", restartGame)
function restartGame() {
    restartBtn.addEventListener('click', () => {
        window.location.reload();
    })
    popupBtn.addEventListener('click', () => {
        window.location.reload();
    })
}

function playGame(click) {
    const playerChoice = click.target.id;
    
    function randomChoice() {
        let choice = Math.floor(Math.random() * 3) + 1
        if (choice === 1) {
            showCompChoice.innerHTML = "✊"
            return "rock"
        } else if (choice === 2) {
            showCompChoice.innerHTML = "✋"
            return "paper"
        } else if (choice === 3) {
            showCompChoice.innerHTML = "✌"
            return "scissors"
        }
    }

    const compChoice = randomChoice()

    function returnPlayerChoice() {
        if (playerChoice === "rock") {
            showPlayerChoice.innerHTML = "✊"
        } else if (playerChoice === "paper") {
            showPlayerChoice.innerHTML = "✋"
        } else if (playerChoice === "scissors"){
            showPlayerChoice.innerHTML = "✌"
        }
    }  

    returnPlayerChoice()

    const roundWinner = (playerChoice, compChoice) => {
        if (playerChoice === compChoice) {
            scoreInfo.innerHTML = "It's a draw!"
            scoreMessage.innerHTML = `Both chose ${playerChoice}`
        } else if (playerChoice === "rock" && compChoice === "scissors" || playerChoice === "paper" && compChoice === "rock" || playerChoice === "scissors" && compChoice === "paper") {
            scoreInfo.innerHTML = "You win!"
            scoreMessage.innerHTML = `${playerChoice} beats ${compChoice}`
            playerScore += 1
            playerScoreElement.innerHTML = playerScore
        } else {
            scoreInfo.innerHTML = "You lose!"
            scoreMessage.innerHTML = `${compChoice} beats ${playerChoice}`
            compScore += 1
            compScoreElement.innerHTML = compScore
        }
    }

    roundWinner(playerChoice, compChoice)

    console.log(playerChoice)
    console.log(compChoice)
    if (playerScore === 5 || compScore === 5) {
        document.querySelector("#popup").style.visibility = "visible"
        document.querySelector(".popup-winner").innerHTML = scoreInfo.innerHTML
    }
}