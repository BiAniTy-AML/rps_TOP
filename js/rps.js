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

// Gets a random int between 0 and num(exclusive)
function random_int(num) {
    return Math.floor(Math.random() * num);
}

// Simulates a round
function play_round() {
    // Determines the player and the computer choice
    let computer_choice = computer_play().toLowerCase();

    console.log(computer_choice);

    let player_choice = prompt("You must choose!");

    player_choice = player_choice.toLowerCase();

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
    }
}

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

console.log(play_round());
