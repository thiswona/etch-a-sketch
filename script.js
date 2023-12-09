const body = document.querySelector("body");
const container = document.createElement("div");
const pad = document.createElement("div");

pad.setAttribute("id", "pad");
container.setAttribute("class", "container");

container.appendChild(pad);
body.appendChild(container);

function createNumberOfSquares (number) {
    for (let i = 0; i < number; i++) {
        const rows = document.createElement("div");
        rows.setAttribute("class", "rows")
        pad.appendChild(rows);
        for (let j = 0; j < number; j++) {
            const squares = document.createElement("div");
            squares.setAttribute("class", "squares");
            rows.appendChild(squares);
            trail(squares);
        }
    }
}

function trail (querySelector) {
    querySelector.addEventListener("mouseover", () => {
        querySelector.setAttribute("style", "background-color: black;");
    });
}

const buttons = document.createElement("div");
const btnPrompt = document.createElement("button");
const btnReload = document.createElement("button");

btnPrompt.setAttribute("class", "buttons");
btnReload.setAttribute("class", "buttons");
buttons.setAttribute("class", "selection");
buttons.append(btnPrompt, btnReload);
body.appendChild(buttons);

btnPrompt.textContent = "Prompt";
btnReload.textContent = "Reload";

btnReload.addEventListener("click", () => {
    window.location.reload();
});

// btnPrompt.addEventListener("click", () => {
//     prompt("Number dimensions", createNumberOfSquares(16));
// });