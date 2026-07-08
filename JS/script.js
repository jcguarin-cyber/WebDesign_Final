// Wait until the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // MOBILE MENU
    // ==============================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
            });
        });

    }

    // ==============================
    // DYNAMIC GREETING
    // ==============================

    const greeting = document.getElementById("greeting");

    if (greeting) {

        const hour = new Date().getHours();

        if (hour < 12) {
            greeting.textContent = "☀️ Good Morning! Start your day with a fresh cup of coffee.";
        }
        else if (hour < 18) {
            greeting.textContent = "☕ Good Afternoon! Take a relaxing coffee break.";
        }
        else {
            greeting.textContent = "🌙 Good Evening! Unwind with your favorite brew.";
        }

    }

    // ==============================
    // CURRENT DATE
    // ==============================

    const dateTime = document.getElementById("dateTime");

    if (dateTime) {

        const today = new Date();

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        dateTime.textContent =
            today.toLocaleDateString("en-US", options);

    }

    // ==============================
    // CONTACT FORM
    // ==============================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            const formMessage = document.getElementById("formMessage");

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name === "") {
                formMessage.style.color = "red";
                formMessage.textContent = "Please enter your full name.";
                return;
            }

            if (!emailPattern.test(email)) {
                formMessage.style.color = "red";
                formMessage.textContent = "Please enter a valid email address.";
                return;
            }

            if (subject === "") {
                formMessage.style.color = "red";
                formMessage.textContent = "Please enter a subject.";
                return;
            }

            if (message.length < 10) {
                formMessage.style.color = "red";
                formMessage.textContent = "Message must contain at least 10 characters.";
                return;
            }

            formMessage.style.color = "green";
            formMessage.textContent = "Message sent successfully!";

            contactForm.reset();

        });

    }

    // ==============================
    // CHECKOUT FORM
    // ==============================

    const checkoutForm = document.getElementById("checkoutForm");

    if (checkoutForm) {

        checkoutForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const fullname = document.getElementById("fullname").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const address = document.getElementById("address").value.trim();
            const payment = document.getElementById("payment").value;

            const checkoutMessage = document.getElementById("checkoutMessage");

            if (
                fullname === "" ||
                phone === "" ||
                address === "" ||
                payment === ""
            ) {

                checkoutMessage.style.color = "red";
                checkoutMessage.textContent = "Please complete all required fields.";

                return;

            }

            checkoutMessage.style.color = "green";
            checkoutMessage.textContent = "🎉 Your order has been placed successfully! Thank you for choosing Brew Haven Café.";

            checkoutForm.reset();

        });

    }

});