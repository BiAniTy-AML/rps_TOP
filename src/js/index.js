import DOM_el from "./DOM_elements";

import "../styles/styles.css";

// The computer randomly chooses rock, paper or scissors
function computer_play() {
    let comp_choice = random_int(3);

    switch (comp_choice) {
        case 0:
            return {
                type: "Rock",
                icon: "R",
            };

        case 1:
            return { type: "Scissors", icon: "S" };

        case 2:
            return { type: "Paper", icon: "P" };

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
    const computer_choice = computer_play();

    const hash = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    transition_image(computer_choice);

    const pc_type = computer_choice.type.toLowerCase();

    switch (true) {
        case player_choice === computer_choice:
            return {
                code: 0,
                message: "It's a tie!",
            };

        case hash[player_choice] === pc_type:
            return {
                code: 1,
                message: "You won!",
            };

        case hash[pc_type] !== player_choice:
            return {
                code: 2,
                message: "You lost!",
            };

        default:
            return "Error in play_round";
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

    // 0 = tie
    // 1 = player won
    // 2 = computer won
    switch (result.code) {
        case 0:
            break;

        case 1:
            rounds++;
            player_score++;
            break;

        case 2:
            rounds++;
            computer_score++;
            break;

        default:
            break;
    }

    const scores = {
        computer: computer_score,
        player: player_score,
    };

    return {
        scores,
        rounds,
    };
}

function check_scores(player_score, computer_score, rnds) {
    if (player_score === max_rounds || computer_score === max_rounds) {
        switch (true) {
            case player_score === computer_score:
                // final_result.textContent = `A tie!, you've won ${player_score} times out of ${rounds}!!!`;
                // choices.appendChild(final_result);
                break;

            case player_score > computer_score:
                // final_result.textContent = `Congrats, you've won ${player_score} times out of ${rounds}!!!`;
                // choices.appendChild(final_result);
                break;

            case player_score < computer_score:
                // final_result.textContent = `What a shame, you've lost ${computer_score} times out of ${rounds}.`;
                // choices.appendChild(final_result);
                break;

            default:
                return "Problem with the get_choice() function";
        }

        player_score = 0;
        computer_score = 0;
        rnds = 0;
    }

    return {
        player_score,
        computer_score,
        rounds,
    };
}

function get_choice(e) {
    const chosen_card = e.target.closest(".card");

    let result = game(
        chosen_card.querySelector(".type").textContent.toLowerCase(),
    );

    const { player, computer } = result.scores;

    chosen_card.classList.add("chosen");

    DOM_el.cards.player_container.classList.add("collapsed");
    DOM_el.cards.computer.classList.add("ready");

    collapse_cards(chosen_card);

    player_score += player;
    computer_score += computer;
    rounds += result.rounds;

    // Displays the final result message
    const scrs = check_scores(player_score, computer_score, rounds);

    // player_score = scrs.player_score;
    // computer_score = scrs.computer_score;
    // rounds = scrs.rounds;

    DOM_el.scores.player.number.textContent = player_score;
    DOM_el.scores.computer.number.textContent = computer_score;

    setTimeout(() => {
        restart_round(chosen_card);
    }, 6000);
}

let player_score = 0;
let computer_score = 0;
let rounds = 0;

const max_rounds = 5;

//
const choices = document.querySelector(".choices");

//

// const p_score = document.createElement("div");
// scr.appendChild(p_score);

// const c_score = document.createElement("div");
// scr.appendChild(c_score);

// Animation for the cards collapsing into each other when one of them is clicked
const collapse_cards = (chosen_card) => {
    const chosen_rect = chosen_card.getBoundingClientRect();

    const cards_rect = {};
    DOM_el.cards.player.forEach((card) => {
        if (!card.classList.contains("chosen")) {
            cards_rect[card.querySelector(".type").textContent] = {
                element: card,
                rect: card.getBoundingClientRect(),
            };
        }
    });

    const chosen_top = chosen_rect.top + window.scrollY;

    // Attracts the other cards into the one the was selected
    // by overlapping their position, using their top as reference
    for (const [key, value] of Object.entries(cards_rect)) {
        // Distance the card has to travel
        // adds scrollY to the top to get an absolute value
        const distance = chosen_top - (value.rect.top + window.scrollY);

        value.element.setAttribute(
            "style",
            `transform: translateY(${distance}px);`,
        );
    }
};

// Show what the computer picked after a brief animation
const transition_image = (chosen) => {
    const card = DOM_el.cards.computer;
    const { type, icon } = chosen;

    const symbol_el = card.querySelector(".symbol");
    const type_el = card.querySelector(".type");

    setTimeout(() => {
        type_el.textContent = "Rock";
        symbol_el.textContent = "R";
    }, 1000);

    setTimeout(() => {
        type_el.textContent = "Paper";
        symbol_el.textContent = "P";
    }, 2000);

    setTimeout(() => {
        type_el.textContent = "Scissors";
        symbol_el.textContent = "S";
    }, 3000);

    setTimeout(() => {
        type_el.textContent = type;
        symbol_el.textContent = icon;
    }, 4000);
};

const main = () => {
    DOM_el.cards.player.forEach((card) =>
        card.addEventListener("click", get_choice),
    );
};

main();

const restart_round = (chosen_card) => {
    const comp_card = DOM_el.cards.computer;

    comp_card.classList.remove("ready");

    DOM_el.cards.player_container.classList.remove("collapsed");

    comp_card.querySelector(".symbol").textContent = "?";
    comp_card.querySelector(".type").innerHTML =
        "Waiting <span>.</span> <span>.</span> <span>.</span>";

    DOM_el.cards.player.forEach((card) => {
        if (!card.classList.contains("chosen")) {
            card.setAttribute("style", "");
        }
    });

    chosen_card.classList.remove("chosen");
};
