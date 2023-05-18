const button = document.querySelector("button");

const changeBgColor = () => {
    const randomColors = ["Rgba(133,122,200)", "Red", "Green", "#F15025"];
    const bgColor = randomColors[Math.floor(Math.random() * 4)];
    document.body.style.background = bgColor;
    const span = document.querySelector(".bg-color");
    span.innerText = bgColor;
}

button.addEventListener('click', changeBgColor);