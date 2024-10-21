// random color generation
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

let startChangingBgColor = function () {

    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);

    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
let stopChangingBgColor = function () {
    clearInterval(intervalId)
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingBgColor)
document.querySelector('#stop').addEventListener('click', stopChangingBgColor)
