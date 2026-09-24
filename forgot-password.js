const forgotForm =
    document.getElementById("forgotForm");

const forgotMessage =
    document.getElementById("forgotMessage");


forgotForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        document.getElementById("forgotEmail").value.trim();


    if (!email) {

        forgotMessage.style.color = "#d33";

        forgotMessage.textContent =
            "Please enter your email.";

        return;

    }


    forgotMessage.style.color = "#5667f2";

    forgotMessage.textContent =
        "Checking your account...";


    setTimeout(function() {

        forgotMessage.style.color = "#16803c";

        forgotMessage.textContent =
            "If this email is registered, a password reset link will be sent.";

    }, 1000);

});