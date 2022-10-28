const DOM_el = (function () {
    const cards_container = document.querySelector(".cards");
    const player_cards_container = document.querySelector(".player.choices");
    const player_cards = document.querySelectorAll(".card.choice");
    const computer_card = document.querySelector(".computer .card");

    return {
        cards_container,
        player_cards_container,
        player_cards,
        computer_card,
    };
})();

export default DOM_el;
