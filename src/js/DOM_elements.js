const DOM_el = (function () {
    const cards = {
        container: document.querySelector(".cards"),
        player_container: document.querySelector(".player.choices"),
        player: document.querySelectorAll(".player .card"),
        computer: document.querySelector(".computer .card"),
    };

    const scores = {
        container: document.querySelector(".scores"),
        values: document.querySelector(".values"),
        names: document.querySelectorAll(".name"),
        numbers: document.querySelectorAll(".number"),

        player: {
            container: document.querySelector(".score.player"),
            name: document.querySelector(".score.player .name"),
            number: document.querySelector(".score.player .number"),
        },

        computer: {
            container: document.querySelector(".score.computer"),
            name: document.querySelector(".score.computer .name"),
            number: document.querySelector(".score.computer .number"),
        },
    };

    return {
        cards,

        scores,
    };
})();

export default DOM_el;
