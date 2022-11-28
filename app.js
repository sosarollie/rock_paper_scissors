function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    let choice;
    if (num == 0) {
        choice = "Rock";
    } else if (num == 1) {
        choice = "Paper";
    } else { 
        choice = "Scissors";
    }
    return choice;
}

const computerSelection = getComputerChoice();

let playerSelection = prompt("Choose! Rock, Paper or Scissors?");

function capitalize(char) {
    const cap = char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
    return cap;
}

playerSelection = capitalize(playerSelection);

console.log(playerSelection);

function playRound (playerSelection, computerSelection) {
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

    if (winner == "Computer"){
        return "You Lose! " + computerSelection + " beats " + playerSelection; 
    } 
    else if (winner == "Player"){
        return "You Win! " + playerSelection + " beats " + computerSelection; 
    }
    else {
        return "It's a Draw!";
    }
}

console.log(playRound(playerSelection,computerSelection));
