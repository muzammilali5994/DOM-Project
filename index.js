const track = document.getElementById("banner");

let position = 0;

function moveRight() {
    position -= 1; // speed

    track.style.transform = `translateX(${position}px)`;

    // reset when images move out
    if (Math.abs(position) > track.scrollWidth / 2) {
        position = 0;
    }

    requestAnimationFrame(moveRight);
}

if (track) {
    moveRight();
}


const endTime = new Date("Feb 20, 2026 23:59:59").getTime();

const now = new Date().getTime();

const diff = endTime - now ;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;
