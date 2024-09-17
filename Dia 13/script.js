async function capturarTempo() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return new Date(data.datetime);
    } catch (error) {
        console.error('Erro ao buscar o horário:', error);
        return new Date();
    }
}

async function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) {
        console.error('Elemento com id "clock" não encontrado.');
        return;
    }

    const now = await capturarTempo();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.innerHTML = `
        <span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>
    `;
}

setInterval(updateClock, 1000);
updateClock();
