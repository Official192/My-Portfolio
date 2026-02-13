const finalnumber = 3;
const counter = document.getElementById("projectCounter");
let started = false;

window.onscroll = function() {
    const rect = counter.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if(isVisible && !started) {
        startCounting();
        started = true;
    }
};

function startCounting() {
let count =0;
let timer = setInterval(()=> {
count++;
counter.innerText = count;

if(count === finalnumber){
 clearInterval(timer);
 counter.innerText = count + "+";
}
}, 30);
}
