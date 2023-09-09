document.addEventListener("DOMContentLoaded", function () {
    const bubble = document.getElementById("bubble");
    const scoreDisplay = document.getElementById("score");
    const startButton = document.getElementById("start-button");
    let score = 0;

    function getRandomPosition() {
        const maxWidth = 350;
        const maxHeight = 350;
        const x = Math.random() * maxWidth;
        const y = Math.random() * maxHeight;
        return { x, y };
    }

    bubble.addEventListener("click", () => {
        const position = getRandomPosition();
        bubble.style.left = position.x + "px";
        bubble.style.top = position.y + "px";
        score++;
        scoreDisplay.innerText = "Score: " + score;
    });

    startButton.addEventListener("click", () => {
        score = 0;
        scoreDisplay.innerText = "Score: " + score;
        const position = getRandomPosition();
        bubble.style.left = position.x + "px";
        bubble.style.top = position.y + "px";
    });
});
