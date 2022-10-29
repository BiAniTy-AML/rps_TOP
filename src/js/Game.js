import DOM_el from "./DOM_elements";
import Animations from "./Animations";

const Game = (function () {
    let player_score = 0;
    let computer_score = 0;
    let rounds = 0;

    let max_rounds = 5;

    // Gets a random int between 0 and num(exclusive)
    const random_int = (num) => {
        return Math.floor(Math.random() * num);
    };

    const update_score_elements = () => {
        DOM_el.scores.computer.number.textContent = computer_score;
        DOM_el.scores.player.number.textContent = player_score;
    };

    // Simulates a round
    const play_round = (player_choice) => {
        // Determines the player and the computer choice
        const computer_choice = computer_play();

        const hash = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper",
        };

        Animations.transition_image(computer_choice);

        const pc_type = computer_choice.type.toLowerCase();

        switch (true) {
            case player_choice === pc_type:
                return {
                    code: 0,
                    message: "It's a tie!",
                };

            case hash[player_choice] === pc_type:
                return {
                    code: 1,
                    message: "You won!",
                };

            case hash[pc_type] === player_choice:
                return {
                    code: 2,
                    message: "You lost!",
                };

            default:
                return "Error in play_round";
        }
    };

    const get_player_choice = (e) => {
        const chosen_card = e.target.closest(".card");

        let result = round_results(
            chosen_card.querySelector(".type").textContent.toLowerCase(),
        );

        chosen_card.classList.add("chosen");

        DOM_el.cards.player_container.classList.add("collapsed");

        player_score += result.scores.player;
        computer_score += result.scores.computer;
        rounds += result.rounds;

        check_scores();

        if (Animations.skip_animations[0]) {
            DOM_el.cards.computer.classList.toggle("skipped");

            update_score_elements();

            setTimeout(() => {
                restart_round(chosen_card);
            }, Animations.base_timing * 3);
        } else {
            DOM_el.cards.computer.classList.add("ready");

            // When the animation ends
            setTimeout(() => {
                update_score_elements();
            }, Animations.base_timing * 5);

            // A little bit of time so the player can see what happened
            setTimeout(() => {
                restart_round(chosen_card);
            }, Animations.base_timing * 7);
        }

        Animations.collapse_cards(chosen_card);
    };

    const check_scores = () => {
        if (player_score === max_rounds || computer_score === max_rounds) {
            const final_result_element = DOM_el.scores.final_result;
            const fr_message = final_result_element.querySelector(".message");

            final_result_element.classList.add("visible");

            switch (true) {
                case player_score === computer_score:
                    fr_message.textContent = `A tie!, you've won ${player_score} times out of ${rounds}!!!`;
                    break;

                case player_score > computer_score:
                    fr_message.textContent = `Congrats, you've won ${player_score} times out of ${rounds}!!!`;
                    break;

                case player_score < computer_score:
                    fr_message.textContent = `What a shame, you've lost ${computer_score} times out of ${rounds}.`;
                    break;

                default:
                    return "Problem with the check_scores() function";
            }

            DOM_el.cards.player.forEach((card) =>
                card.removeEventListener("click", get_player_choice),
            );
        }

        return {
            player_score,
            computer_score,
            rounds,
        };
    };

    // Scores the game and returns a final result after n rounds
    const round_results = (player_choice) => {
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
    };

    // The computer randomly chooses rock, paper or scissors
    const computer_play = () => {
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
    };

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

    const reset = () => {
        player_score = 0;
        computer_score = 0;
        rounds = 0;

        update_score_elements();

        DOM_el.scores.final_result.classList.remove("visible");

        DOM_el.cards.player.forEach((card) =>
            card.addEventListener("click", get_player_choice),
        );
    };

    return {
        play_round,
        update_score_elements,
        get_player_choice,
        check_scores,
        round_results,
        computer_play,
        restart_round,
        reset,
    };
})();

export default Game;
