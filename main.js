let playerScore = 0
let computerScore = 0
let roundNumber = 0

function computerPlay () {
    return options[Math.floor(Math.random()*options.length)];
}

let options = ["rock","paper","scissor"];

function playRound(playerSelection, computerSelection) {
    roundNumber++;
    console.log(roundNumber);
    playerSelection = window.prompt ("What will you choose?","");
    playerSelectionAlt = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    console.log(playerSelectionAlt);
    console.log(computerSelection);

    if( playerSelectionAlt==computerSelection ) {
        window.alert('It\'s a Draw!');
        playerScore=playerScore;
        computerScore=computerScore;
        console.log(("Player Score:" + playerScore),("Computer Score:" + computerScore));
    }
    else if( (playerSelectionAlt==="scissor" && computerSelection==="rock") || (playerSelectionAlt==="rock" && computerSelection==="paper") || (playerSelectionAlt==="paper" && computerSelection==="scissor")) {
        window.alert('Player Loses This Time');
        playerScore=playerScore;
        computerScore=computerScore+1
        console.log(("Player Score:" + playerScore),("Computer Score:" + computerScore));
    }
    else if( (playerSelectionAlt==="scissor" && computerSelection==="paper") || (playerSelectionAlt==="rock" && computerSelection==="scissor") || (playerSelectionAlt==="paper" && computerSelection==="rock")) {
        window.alert('Player Wins This Time');
        playerScore=playerScore+1;
        computerScore=computerScore;
        console.log(("Player Score:" + playerScore),("Computer Score:" + computerScore));
    }
    else {
        window.alert('Something has gone wrong. Please try again.')
    }
}

function game() {
    if(roundNumber<=5) {
        playRound();
    }
    else {
        (playerScore>computerScore) ? "Player Wins!" : "Computer Wins!";	
    }
}