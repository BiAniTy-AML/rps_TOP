import DOM_el from "./DOM_elements";
import Animations from "./Animations";
import Game from "./Game";

import "../styles/styles.css";

const main = () => {
    const mq = window.matchMedia("(min-width: 500px)");

    const change_direction_class = (baseline) => {
        DOM_el.cards.player.forEach((card) => {
            if (baseline.matches) {
                card.classList.add("vertical");
                card.classList.remove("horizontal");
            } else {
                card.classList.add("horizontal");
                card.classList.remove("vertical");
            }
        });

        // TODO: remove this repetition
        if (baseline.matches) {
            DOM_el.cards.computer.classList.remove("horizontal");
            DOM_el.cards.computer.classList.add("vertical");
        } else {
            DOM_el.cards.computer.classList.add("horizontal");
            DOM_el.cards.computer.classList.remove("vertical");
        }
    };

    change_direction_class(mq);

    // media query handler function
    const window_change = (e) => {
        change_direction_class(e);
    };

    mq.addEventListener("change", window_change);

    DOM_el.cards.player.forEach((card) =>
        card.addEventListener("click", Game.get_player_choice),
    );

    DOM_el.skip_animations.addEventListener("click", (e) => {
        const button = e.target;
        button.classList.toggle("selected");

        Animations.skip_animations[0] = !Animations.skip_animations[0];

        if (button.classList.contains("selected")) {
            button.textContent = "Show animations";
        } else {
            button.textContent = "Skip animations";
        }
    });

    DOM_el.scores.final_result.addEventListener("click", Game.reset);

    Game.update_score_elements();
};

main();
