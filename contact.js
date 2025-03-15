document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("agTVnwhfS-G1wIpIm"); // Replace with your actual EmailJS Public Key

    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let fullName = document.getElementById("fullName").value.trim();
        let emailAddress = document.getElementById("emailAddress").value.trim();
        let userMessage = document.getElementById("userMessage").value.trim();

        if (!fullName || !emailAddress || !userMessage) {
            alert("Please fill in all fields!");
            return;
        }

        let templateParams = {
            fullName: fullName,
            emailAddress: emailAddress,
            userMessage: userMessage
        };

        emailjs.send("service_io63ive", "template_ohpqeh9", templateParams)
            .then(function (response) {
                alert("Message sent successfully!");
                document.querySelector(".contact-form").reset();
            })
            .catch(function (error) {
                alert("Failed to send message. Please try again!");
                console.error("EmailJS Error:", error);
            });
    });
});
