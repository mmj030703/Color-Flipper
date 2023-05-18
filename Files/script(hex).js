const button = document.querySelector("button");

const changeBgColor = () => {
    const hexCharacters = "0123456789abcdef";
    let bgColor = "#";
    for(let i = 1; i <= 6; i++) {
        bgColor += hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
    }
    document.body.style.background = bgColor;
    const span = document.querySelector(".bg-color");
    span.innerText = bgColor;
}

button.addEventListener('click', changeBgColor);