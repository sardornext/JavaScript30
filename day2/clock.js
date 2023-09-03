function updateClock() {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const date = d.getDate();
    let month = d.getMonth() + 1;
    const year = d.getFullYear();

    let hDeg = h * 30 + m * (360 / 720);
    let mDeg = m * 6 + s * (360 / 3600);
    let sDeg = s * 6;

    const hEl = document.querySelector('.hour-hand');
    const mEl = document.querySelector('.minute-hand');
    const sEl = document.querySelector('.second-hand');
    const dateEl = document.querySelector('.date');
    const dayEl = document.querySelector('.day');
    const clockEl = document.querySelector('.clock');

    const day = weekday[d.getDay()];

    if (month < 10) {
        month = "0" + month;
    }

    hEl.style.transform = `rotate(${hDeg}deg)`;
    mEl.style.transform = `rotate(${mDeg}deg)`;
    sEl.style.transform = `rotate(${sDeg}deg)`;
    dateEl.textContent = `${date}/${month}/${year}`;
    dayEl.textContent = day;
}

function createDialLines() {
    const clockEl = document.querySelector('.clock');
    const dialLinesContainer = document.createElement('div');
    dialLinesContainer.classList.add('dial-lines-container');
    for (let i = 0; i < 60; i++) {
        const dialLine = document.createElement('div');
        dialLine.classList.add('dialline');
        dialLine.style.transform = `rotate(${6 * i}deg)`;
        dialLinesContainer.appendChild(dialLine);
    }
    clockEl.appendChild(dialLinesContainer);
}

// Create dial lines when the page loads
createDialLines();

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
