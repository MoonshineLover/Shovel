// categories div opening script
const container = document.getElementById("categories-content");
const button = document.getElementById("toggleButton");
button.addEventListener("click", () => {
container.classList.toggle("open");
});

// email sending feedback script
const email_button = document.getElementById("send-email-button");
const email_fill = document.getElementById("email-fill");
const message = document.getElementById("message");
email_button.addEventListener("click", function() {
    message.textContent = "Спасибо! Подписка оформлена";
});

