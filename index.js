const track = document.getElementById("banner");

let position = 0;

function moveRight() {
    position -= 0.5; // speed

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
