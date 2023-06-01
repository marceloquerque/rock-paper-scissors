let options = document.querySelectorAll(".option-box");

Array.from(options).forEach(element => {
    element.addEventListener("click", playGame)
})

function playGame(click) {
    let showPlayerChoice = document.querySelector(".player-choice");

    function randomChoice() {
        return Math.floor(Math.random() * 3) + 1
    }

    const compChoice = randomChoice()

    const getClick = click.target.id;
    function returnPlayerChoice(getClick) {
        if (getClick === "rock") {
            showPlayerChoice.innerHTML = "✊"
            return 1
        } else if (getClick === "paper") {
            showPlayerChoice.innerHTML = "✋"
            return 2
        } else if (getClick === "scissors"){
            showPlayerChoice.innerHTML = "✌"
            return 3
        }
    }  
    
    const playerChoice = returnPlayerChoice(getClick)

    console.log(playerChoice)
    console.log(compChoice)
}