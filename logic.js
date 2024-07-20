let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn")
let newbtn = document.querySelector("#new_btn")
let msg = document.querySelector("#msg")
let result = document.querySelector(".result")

let turn0 = true;
const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
}
const showWinner = (winner) => {
    msg.innerText = `Cogratulation, ${winner} is a winner`
    result.classList.remove("hide");
    disableBtn();
}
const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const resetgame = () => {
    turn0 = true;
    enableBtn();
    result.classList.add("hide");
}
const enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}
newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);