
const timer = document.querySelector('.timer');
const dial = document.getElementById('dial');

let allSeconds = 87;
let timerInterval = null;

function updateTimer(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    dial.textContent = `${paddedMinutes} : ${paddedSeconds}`
};

updateTimer(allSeconds);

timer.addEventListener('click', (e)=> {
    const target = e.target;
    const btn = e.target.closest('button');

    if (!btn) return;

    const action = btn.dataset.action;
    
    if(action === 'start') {
        if (timerInterval !== null) {
            return;
        };

        timerInterval = setInterval(()=> {
            allSeconds--;
            updateTimer(allSeconds);

        if (allSeconds === 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            dial.textContent = 'Час вийшов!';
            if (action === 'start') {
                allSeconds = 88;
            }
        };

        }, 1000);
    } else if (action === 'stop') {
        clearInterval(timerInterval);
        timerInterval = null;
    };
});