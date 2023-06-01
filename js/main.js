let options = document.querySelectorAll(".option-box");

Array.from(options).forEach(element => {
    element.addEventListener("click", playGame)
})

function playGame(click) {
    
    function randomChoice() {
        return Math.floor(Math.random() * 3) + 1
    }

    let getClick = click.target.id;
    function returnPlayerChoice(getClick) {
        if (getClick === "rock") {
            return 1
        } else if (getClick === "paper") {
            return 2
        } else if (getClick === "scissors"){
            return 3
        }
    }  
    
    let playerChoice = returnPlayerChoice(getClick)
    let compChoice = randomChoice()

    console.log(playerChoice)
    console.log(compChoice)
}