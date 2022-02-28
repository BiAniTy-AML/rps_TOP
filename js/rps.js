// The computer randomly chooses rock, paper or scissors
function computer_play() {
    let comp_choice = random_int(3);

    switch (comp_choice) {
        case 0:
            return "Rock";

        case 1:
            return "Scissors";

        case 2:
            return "Paper";

        default:
            return "Something went wrong with the function computer_play";
    }
}

// Prompts the user for an option
function player_play() {
    return prompt("You must choose");
}

// Gets a random int between 0 and num(exclusive)
function random_int(num) {
    return Math.floor(Math.random() * num);
}

// Simulates a round
function play_round() {
    // Determines the player and the computer choice
    let computer_choice = computer_play().toLowerCase();

    console.log(computer_choice);

    let player_choice = player_play().toLowerCase();

    console.log(player_choice);

    // Return the results after comparing the choices
    switch (true) {
        case player_choice === computer_choice:
            return "It's a tie!";

        // Depending on the player's choice, compare with the computer's and call the results() function
        case player_choice === "rock":
            switch (computer_choice) {
                case "scissors":
                    return results(player_choice, computer_choice, true);

                case "paper":
                    return results(player_choice, computer_choice, false);
            }

        case player_choice === "paper":
            switch (computer_choice) {
                case "scissors":
                    return results(player_choice, computer_choice, false);

                case "rock":
                    return results(player_choice, computer_choice, true);
            }

        case player_choice === "scissors":
            switch (computer_choice) {
                case "rock":
                    return results(player_choice, computer_choice, false);

                case "paper":
                    return results(player_choice, computer_choice, true);
            }

        default:
            return "Problem with the play_round() function";
    }
}

// Returns a message with the result of the round
function results(player_choice, computer_choice, player_win) {
    // Uppercases the first letter of each choice
    computer_choice =
        computer_choice.charAt(0).toUpperCase() + computer_choice.substr(1);

    player_choice =
        player_choice.charAt(0).toUpperCase() + player_choice.substr(1);

    // Depending on the player_win boolean, it will return the win or lose messages
    switch (player_win) {
        case true:
            return `You won! ${player_choice} beats ${computer_choice}`;

        case false:
            return `You lost! ${computer_choice} beats ${player_choice}`;
    }
}

// Scores the game and returns a final result after n rounds
function game() {
    let player_score = 0;
    let computer_score = 0;

    // Changes the score depending on the winner
    for (let i = 0; i < 5; i++) {
        let result = play_round();

        switch (result.substr(4, 4)) {
            case "won!":
                player_score++;
                console.log(result);
                break;

            case "lost":
                computer_score++;
                console.log(result);
                break;

            case " a t":
                console.log(result);
                break;

            default:
                return "problem with the game() function";
        }
    }

    // Displays the final result message
    switch (true) {
        case player_score === computer_score:
            return `A tie!, you've won ${player_score} times out of 5!!!`;

        case player_score > computer_score:
            return `Congrats, you've won ${player_score} times out of 5!!!`;

        case player_score < computer_score:
            return `What a shame, you've lost ${computer_score} times out of 5.`;

        default:
            return "Problem with the game() function";
    }
}

console.log(game());
