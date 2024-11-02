
const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
const colorCode = document.getElementById('colorCode');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

const startChangingColor = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            const newColor = generateRandomColor();
            document.body.style.backgroundColor = newColor;
            colorCode.textContent = newColor;
        }, 1500);
        startBtn.disabled = true;
        startBtn.style.opacity = '0.7';
        stopBtn.disabled = false;
        stopBtn.style.opacity = '1';
    }
};

const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
    startBtn.disabled = false;
    startBtn.style.opacity = '1';
    stopBtn.disabled = true;
    stopBtn.style.opacity = '0.7';
};

startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);

// Initialize stop button as disabled
stopBtn.disabled = true;
stopBtn.style.opacity = '0.7';
