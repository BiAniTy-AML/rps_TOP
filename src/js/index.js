import DOM_el from "./DOM_elements";
import Animations from "./Animations";
import Game from "./Game";

import "../styles/styles.css";

const main = () => {
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
