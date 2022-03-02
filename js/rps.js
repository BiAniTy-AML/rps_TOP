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
function play_round(player_choice) {
    // Determines the player and the computer choice
    let computer_choice = computer_play().toLowerCase();

    player.textContent = `You: ${player_choice}`;
    comp.textContent = `Computer: ${computer_choice}`;

    let res;

    // Return the results after comparing the choices
    switch (true) {
        case player_choice === computer_choice:
            res = "It's a tie!";
            result_round.textContent = res;
            choices.appendChild(result_round);
            return res;

        // Depending on the player's choice, compare with the computer's and call the results() function
        case player_choice === "rock":
            switch (computer_choice) {
                case "scissors":
                    res = results(player_choice, computer_choice, true);
                    result_round.textContent = res;
                    choices.appendChild(result_round);
                    return res;

                case "paper":
                    res = results(player_choice, computer_choice, false);
                    result_round.textContent = res;
                    choices.appendChild(result_round);
                    return res;
            }

        case player_choice === "paper":
            switch (computer_choice) {
                case "scissors":
                    res = results(player_choice, computer_choice, false);
                    result_round.textContent = res;
                    choices.appendChild(result_round);
                    return res;

                case "rock":
                    res = results(player_choice, computer_choice, true);
                    result_round.textContent = res;
                    choices.appendChild(result_round);
                    return res;
            }

        case player_choice === "scissors":
            switch (computer_choice) {
                case "rock":
                    res = results(player_choice, computer_choice, false);
                    result_round.textContent = res;
                    choices.appendChild(result_round);
                    return res;

                case "paper":
                    res = results(player_choice, computer_choice, true);
                    result_round.textContent = res;
                    choices.appendChild(result_round);
                    return res;
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
function game(player_choice) {
    let player_score = 0;
    let computer_score = 0;
    let rounds = 0;

    // Changes the score depending on the winner
    let result = play_round(player_choice);

    // console.log(result);

    switch (result.substr(4, 4)) {
        case "won!":
            rounds++;
            player_score++;
            break;

        case "lost":
            computer_score++;
            rounds++;
            break;

        case " a t":
            break;

        default:
            return "problem with the game() function";
    }

    return {
        computer_score: computer_score,
        player_score: player_score,
        rounds: rounds,
    };
}

function get_choice(e) {
    let scores = game(e.target.textContent.toLowerCase());

    player_score += scores.player_score;
    computer_score += scores.computer_score;
    rounds += scores.rounds;

    scr.style["display"] = "initial";

    c_score.textContent = `Computer: ${computer_score}`;
    p_score.textContent = `You: ${player_score}`;

    // Displays the final result message
    if (player_score === 5 || computer_score === 5) {
        switch (true) {
            case player_score === computer_score:
                final_result.textContent = `A tie!, you've won ${player_score} times out of ${rounds}!!!`;
                choices.appendChild(final_result);

                player_score = 0;
                computer_score = 0;
                rounds = 0;
                return;

            case player_score > computer_score:
                final_result.textContent = `Congrats, you've won ${player_score} times out of ${rounds}!!!`;
                choices.appendChild(final_result);

                player_score = 0;
                computer_score = 0;
                rounds = 0;
                return;

            case player_score < computer_score:
                final_result.textContent = `What a shame, you've lost ${computer_score} times out of ${rounds}.`;
                choices.appendChild(final_result);

                player_score = 0;
                computer_score = 0;
                rounds = 0;
                return;

            default:
                return "Problem with the get_choice() function";
        }
    } else if (choices.contains(final_result)) {
        choices.removeChild(final_result);
    }
}

let player_score = 0;
let computer_score = 0;
let rounds = 0;

//
const choices = document.querySelector(".choices");
const scr = document.querySelector(".scores");

//
const final_result = document.createElement("div");
const result_round = document.createElement("div");

const player = document.createElement("div");
const comp = document.createElement("div");
choices.appendChild(player);
choices.appendChild(comp);
//

const p_score = document.createElement("div");
scr.appendChild(p_score);

const c_score = document.createElement("div");
scr.appendChild(c_score);

//
const rock = document.querySelector(".rock");
rock.addEventListener("click", get_choice);

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", get_choice);

const paper = document.querySelector(".paper");
paper.addEventListener("click", get_choice);
//
