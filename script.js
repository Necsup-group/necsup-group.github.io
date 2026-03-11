// --------------------------------------------------------------------------------------- //
// Import navbar and footer from files and create link hover effect                       //
// ------------------------------------------------------------------------------------- //
{
    fetch('/src/navbar.html')
      .then(response => { return response.text() })
      .then(html => document.querySelectorAll("nav").forEach((e) => e.innerHTML = html)
    );
    fetch('/src/footer.html')
      .then(response => { return response.text() })
      .then(html => document.querySelectorAll("footer").forEach((e) => e.innerHTML = html)
    );
}

// --------------------------------------------------------------------------------------- //
// All code happening after load                                                          //
// ------------------------------------------------------------------------------------- //
window.addEventListener("load", () => {
    // ----------------------------------------------------- //
    // Go through app names in home page header             //
    // --------------------------------------------------- //
    {
        let introSpans = document.querySelectorAll("#home h1 span");
        let currentintroSpans = 0;
    
        function cycleHeaderAppName() {
            introSpans.forEach(e => e.classList.remove("titleAppNamesAni"));
            introSpans[currentintroSpans].classList.add("titleAppNamesAni");
            currentintroSpans = (currentintroSpans + 1) % introSpans.length;
        }
        cycleHeaderAppName();
        setInterval(cycleHeaderAppName, 3000);
    }
})


// --------------------------------------------------------------------------------------- //
// Code firing when scrolling                                                             //
// ------------------------------------------------------------------------------------- //
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) document.querySelector("nav").classList.add("detachedNav");
    else document.querySelector("nav").classList.remove("detachedNav");
})