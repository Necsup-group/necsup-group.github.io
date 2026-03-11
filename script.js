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

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) document.querySelector("nav").classList.add("detachedNav");
    else document.querySelector("nav").classList.remove("detachedNav");
})