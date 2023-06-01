let options = document.querySelectorAll(".option-box");

Array.from(options).forEach(element => {
    element.addEventListener("click", playGame)
})

function playGame(click) {
    
    function randomChoice() {
        return Math.floor(Math.random() * 3) + 1
    }

    let playerChoice = click.target.id;
    let compChoice = randomChoice()

    
}