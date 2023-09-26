/* =============================== toggle style switcher ==================================== */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});


//hide on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.toString("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* =============================== alternate styles ==================================== */

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title'))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled" , "true");
        }
    })
};

/* =============================== day-night ==================================== */
const dayNightToggle = document.getElementById("dn");

dayNightToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    // Check if the body has the "dark" class and set the theme preference in localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Check the local storage to see if the user had a previous theme preference
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
    document.body.classList.add(storedTheme);
    if (storedTheme === "dark") {
        dayNightToggle.checked = true; // Set the checkbox to "checked" if it's a dark theme
    }
}
