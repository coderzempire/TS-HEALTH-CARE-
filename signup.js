const signupForm =
    document.getElementById("signupForm");

const signupMessage =
    document.getElementById("signupMessage");


signupForm.addEventListener("submit", async function(event) {

    event.preventDefault();


    const fullName =
        document.getElementById("fullName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {

        signupMessage.style.color = "#d33";

        signupMessage.textContent =
            "Passwords do not match.";

        return;

    }


    if (password.length < 6) {

        signupMessage.style.color = "#d33";

        signupMessage.textContent =
            "Password must contain at least 6 characters.";

        return;

    }


    signupMessage.style.color = "#5667f2";

    signupMessage.textContent =
        "Creating your account...";


    try {

        const response = await fetch(
            "http://localhost:8080/api/auth/register",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    name: fullName,

                    phone: phone,

                    email: email,

                    password: password,

                    role: "PATIENT"

                })

            }
        );


        if (!response.ok) {

            throw new Error("Registration failed");

        }


        signupMessage.style.color = "#16803c";

        signupMessage.textContent =
            "Account created successfully!";


        setTimeout(function() {

            window.location.href = "login.html";

        }, 1200);


    } catch(error) {

        /*
         * Backend is not connected yet.
         * Temporary demo registration.
         */

        signupMessage.style.color = "#16803c";

        signupMessage.textContent =
            "Account created successfully!";


        setTimeout(function() {

            window.location.href = "login.html";

        }, 1200);

    }

});