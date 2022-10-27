const DOM_el = (function () {
    const cards_container = document.querySelector(".cards");
    const player_cards = document.querySelectorAll(".card.choice");
    const computer_cards = document.querySelector(".computer .card");

    return {
        cards_container,
        player_cards,
        computer_cards,
    };
})();

export default DOM_el;
