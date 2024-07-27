document.addEventListener('DOMContentLoaded', () => {
    const cursorFollower = document.getElementById('cursor-follower');
    const smoothFactor = 0.1;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (event) => {
        targetX = event.pageX;
        targetY = event.pageY;
    });

    function updateCursor() {
        currentX += (targetX - currentX) * smoothFactor;
        currentY += (targetY - currentY) * smoothFactor;

        cursorFollower.style.transform = `translate(${currentX}px, ${currentY}px)`;

        requestAnimationFrame(updateCursor);
    }

    updateCursor();
});