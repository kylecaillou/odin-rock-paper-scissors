function getComputerChoice(){
    let n = Math.floor(Math.random() * 3)

    switch(n) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        default:
            return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        return 1
    } else {
        return -1
    }
}

function game() {
    let p_score = 0
    let c_score = 0

    for (let i = 1; i < 6; i++){
        const playerSelection = prompt("Enter your move").toLowerCase()
        const computerSelection = getComputerChoice().toLowerCase()

        let state = playRound(playerSelection, computerSelection)

        if (state == 0){
            console.log("Round " + i + ": Tie game")
            console.log("Score: " + p_score + ":" + c_score + " (player:computer)")
        } else if (state == 1){
            console.log("Round " + i + ": Player wins")
            p_score++
            console.log("Score: " + p_score + ":" + c_score + " (player:computer)")
        } else {
            console.log("Round " + i + ": Computer wins")
            c_score++
            console.log("Score: " + p_score + ":" + c_score + " (player:computer)")
        }
    }

    console.log("Final score: " + p_score + ":" + c_score + " (player:computer)")
    if (p_score > c_score) {
        console.log("Player wins!")
    } else {
        console.log("Computer wins!")
    }
}

game()