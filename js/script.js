var typed = new Typed(".typing", {
    strings:["Web Designer", "Web Developer", " Graphic Designer", "Software Developer"],
    typeSpeed:200,
    BackSpeed:150,
    loop:true
})


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");

    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Get the target section's ID from the link's href
            const targetId = link.getAttribute("href").substring(1);

            // Scroll smoothly to the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});


//SEND EMAIL
function sendEmail()
{
    Email.send({
        secureToken : "03656263-fbc8-4778-bd2d-661ef2f0a04c",
        To : 'mailtovedansh7@gmail.com',
        From : document.getElementById("email").value,
        Subject : "contact form",
        Body : "Name:" + document.getElementById("name").value
            + "<br> Email : " + document.getElementById("email").value
            + "<br> Subject : " + document.getElementById("subject").value
            + "<br> Message : " + document.getElementById("message").value
    }).then(
      message => alert("Message sent succesfully")
    );
}