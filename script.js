// Scroll To Top

let topButton = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

};

topButton.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ==========================
   Typed.js Animation
========================== */

var typed = new Typed(".typing", {
    strings: [
        "Microsoft Azure",
        "Linux Administration",
        "Kubernetes (AKS)",
        "Docker",
        "Terraform",
        "DevOps Engineer",
        "Cloud Automation",
        "Azure Migration"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});


/* ==========================
   AOS Animation
========================== */

AOS.init({
    duration: 1200,
    once: false
});


/* ==========================
   Navbar Active Link
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ==========================
   Console Message
========================== */

console.log("🚀 Dinesh Portfolio Loaded Successfully");