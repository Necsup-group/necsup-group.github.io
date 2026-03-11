
window.addEventListener("load", () => {
    let introSpans = document.querySelectorAll("#home h1 span");
    let currentintroSpans = 0;

    function cycleHeaderAppName() {
        introSpans.forEach(e => e.classList.remove("titleAppNamesAni"));
        introSpans[currentintroSpans].classList.add("titleAppNamesAni");
        currentintroSpans = (currentintroSpans + 1) % introSpans.length;
    }
    cycleHeaderAppName();
    setInterval(cycleHeaderAppName, 3000);
})