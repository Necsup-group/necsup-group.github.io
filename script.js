// --------------------------------------------------------------------------------------- //
// Import navbar and footer from files and create link hover effect                       //
// ------------------------------------------------------------------------------------- //
{
    fetch('/src/navbar.html')
      .then(response => { return response.text() })
      .then(html => document.querySelectorAll("nav.navbar").forEach((e) => e.innerHTML = html)
    );
    fetch('/src/navbar-phone.html')
      .then(response => { return response.text() })
      .then(html => document.querySelectorAll("nav.phone-nav").forEach((e) => e.innerHTML = html)
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
        if ( introSpans.length > 0 ) {
            cycleHeaderAppName();
            setInterval(cycleHeaderAppName, 3000);
        }
    }

    // ----------------------------------------------------- //
    // Fix opening / closing and stuff - mobile navbar      //
    // --------------------------------------------------- //
    {
        document.querySelectorAll("nav .phone-menu-opener").forEach(e => 
            e.addEventListener("click", () => document.querySelector("nav.phone-nav").classList.add("open-phone-nav")))
        document.querySelectorAll(".escapeClickBg, .phone-menu .closeMenu").forEach(e => 
            e.addEventListener("click", () => document.querySelector("nav.phone-nav").classList.remove("open-phone-nav")))
        document.querySelectorAll(".navbarDropDownClickPhone i").forEach(e => 
            e.addEventListener("click", () => document.querySelector(".navbarDropDownPhone").classList.toggle("closed-navbarDropDownPhone")))
        
        document.querySelectorAll(".navbarDropDownPhone").forEach(e => {
            e.style.maxHeight = e.clientHeight + "px";
            e.classList.add("closed-navbarDropDownPhone");
        })
    }

    document.querySelectorAll('#contactForm').forEach((e) => e.addEventListener('submit', async function(evt) {
        evt.preventDefault();
        
        const btn = e.querySelector('.btn1');
        btn.innerText = "Sending...";

        const formData = {
            name: document.querySelector('#contactForm_name').value,
            userId: document.querySelector('#contactForm_userId').value ?? "Userid not given",
            email: document.querySelector('#contactForm_email').value,
            subject: document.querySelector('#contactForm_subject').value,
            message: document.querySelector('#contactForm_message').value
        };

        try {
            const response = await fetch('https://manager.necsup.com/api/form_api.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'ncsp-form-key-857vn9w79y6UD#789rf'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Message Sent!");
                this.reset(); // Clear the form
            }
            else alert("Error: " + response.statusText);
        } catch (err) { alert("Could not connect to the ThinkPad server."); }
        
        btn.innerText = "Send Message";
    }));
})


// --------------------------------------------------------------------------------------- //
// Code firing when scrolling                                                             //
// ------------------------------------------------------------------------------------- //
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) document.querySelector("nav.navbar").classList.add("detachedNav");
    else document.querySelector("nav.navbar").classList.remove("detachedNav");
})