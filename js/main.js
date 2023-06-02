let options = document.querySelectorAll(".option-box");
let restartBtn = document.querySelector(".restart-btn");
let popupBtn = document.querySelector(".popup-btn");
let showPlayerChoice = document.querySelector(".player-choice");
let showCompChoice = document.querySelector(".comp-choice");
let scoreInfo = document.querySelector(".score-info");
let scoreMessage = document.querySelector(".score-message");
let playerScoreElement = document.querySelector(".player-score");
let compScoreElement = document.querySelector(".comp-score");
let playerScore = 0;
let compScore = 0;

<<<<<<< Updated upstream
Array.from(options).forEach(element => {
    element.addEventListener("click", playGame)
})
=======
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
// test asd
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

function playGame(click) {
    const playerChoice = click.target.id;
    const compChoice = randomChoice()
    
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

    if (playerScore === 5 || compScore === 5) {
        document.querySelector("#popup").style.visibility = "visible"
        document.querySelector(".popup-winner").innerHTML = scoreInfo.innerHTML
        Array.from(options).forEach(element => {
            element.removeEventListener("click", playGame)
        })
    }
}

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