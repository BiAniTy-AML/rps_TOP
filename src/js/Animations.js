import DOM_el from "./DOM_elements";

const Animations = (function () {
    const base_timing = 1000;

    // Array because easier to modify
    const skip_animations = [false];

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
        const chosen_left = chosen_rect.left + window.scrollX;

        const position = DOM_el.cards.player[0].classList.contains("horizontal")
            ? "horizontal"
            : "vertical";

        // Attracts the other cards into the one the was selected
        // by overlapping their position, using their top as reference
        for (const [_, value] of Object.entries(cards_rect)) {
            // Distance the card has to travel
            // adds scrollY to the top to get an absolute value

            console.log(value.rect.left);

            let distance = null;

            if (position === "horizontal") {
                distance = chosen_top - (value.rect.top + window.scrollY);

                value.element.setAttribute(
                    "style",
                    `transform: translateY(${distance}px);`,
                );
            } else {
                distance = chosen_left - (value.rect.left + window.scrollX);

                value.element.setAttribute(
                    "style",
                    `transform: translateX(${distance}px);`,
                );
            }
        }
    };

    // Show what the computer picked after a brief animation
    const transition_image = (chosen) => {
        const card = DOM_el.cards.computer;
        const { type, icon } = chosen;

        const symbol_el = card.querySelector(".symbol");
        const type_el = card.querySelector(".type");

        // TODO: fix the repetition here
        if (skip_animations[0]) {
            type_el.textContent = type;
            symbol_el.textContent = icon;
        } else {
            setTimeout(() => {
                type_el.textContent = "Rock";
                symbol_el.textContent = "R";
            }, base_timing * 1);

            setTimeout(() => {
                type_el.textContent = "Paper";
                symbol_el.textContent = "P";
            }, base_timing * 2);

            setTimeout(() => {
                type_el.textContent = "Scissors";
                symbol_el.textContent = "S";
            }, base_timing * 3);

            setTimeout(() => {
                type_el.textContent = type;
                symbol_el.textContent = icon;
            }, base_timing * 4);
        }
    };

    return {
        skip_animations,
        base_timing,
        collapse_cards,
        transition_image,
    };
})();

export default Animations;
