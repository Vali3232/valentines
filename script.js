const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const messages = [
    "Esti sigura?",
    "N-a fost o intrebare",
    "Ultima sansa",
    "Ok"
];

let index = 0;
let scale = 1;

noButton.addEventListener("click", function () {
    noButton.textContent = messages[index];

    if (index < messages.length - 1) {
        index++;
    }

    scale += 0.2;
    yesButton.style.transform = `scale(${scale})`;
});

yesButton.addEventListener("click", function () {
    window.location.href = "yes.html";
});
