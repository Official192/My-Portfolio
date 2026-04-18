const counter = document.getElementById('projectCounter');
const target = 3;
let triggered = false;

window.addEventListener('scroll', () => {
    if (triggered) return;
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2) {
        triggered = true;
        let start = 0;
        const step = target / 60;
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                counter.textContent = target + "+";
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(start);
            }
        }, 1);
    }
});