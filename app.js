function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice;
    switch (randomNum) {
    case 0:
        return "Rock"
    case 1:
        return "Paper"
    case 2:
        return "Scissors"
    }
}

function capitalize(char) {
    const cap = char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
    return cap;
}

function playRound (playerSelection, computerSelection, playerWins, computerWins) {
    let winner;

    if ((computerSelection == "Rock") && (playerSelection == "Scissors")){
        winner = "Computer";
    }
    else if ((computerSelection == "Rock") && (playerSelection == "Paper")){
        winner = "Player";
    }
    else if ((computerSelection == "Paper") && (playerSelection == "Scissors")){
        winner = "Player";
    }
    else if ((computerSelection == "Paper") && (playerSelection == "Rock")){
        winner = "Computer";
    }
    else if ((computerSelection == "Scissors") && (playerSelection == "Paper")){
        winner = "Computer";
    }
    else if ((computerSelection == "Scissors") && (playerSelection == "Rock")){
        winner = "Player";
    }

    return winner;
}

function game(){
    let computerSelection;
    let playerSelection;
    let playerWins = 0;
    let computerWins = 0;
    let winner;
    for (let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose! Rock, Paper or Scissors?");
        playerSelection = capitalize(playerSelection);
        console.log(computerSelection);
        winner = (playRound(playerSelection,computerSelection));
        if (winner == "Computer"){
            computerWins++;
            console.log("You Lose! " + computerSelection + " beats " + playerSelection); 
        } 
        else if (winner == "Player"){
            playerWins++;
            console.log("You Win! " + playerSelection + " beats " + computerSelection); 
        }
        else {
            console.log("It's a Draw!");
        } 
    }
    if (computerWins > playerWins){
        console.log("You lose the match! " + computerWins + " to " + playerWins);
    }else if (computerWins < playerWins){
        console.log("You Win the match! " + playerWins + " to " + computerWins);
    }      
}

game();