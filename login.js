const loginForm = document.getElementById("loginForm");

const message = document.getElementById("message");


loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value.trim();


    const password =
        document.getElementById("password").value;


    message.style.color = "#5667f2";

    message.textContent =
        "Checking credentials...";


    try {

        const response = await fetch(
            "http://localhost:8080/api/auth/login",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    email: email,

                    password: password

                })

            }
        );


        if (!response.ok) {

            throw new Error(
                "Invalid credentials"
            );

        }


        const user =
            await response.json();


        localStorage.setItem(
            "hmsUser",
            JSON.stringify(user)
        );


        message.style.color = "#16803c";

        message.textContent =
            "Login successful!";


        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 500);


    }

    catch (error) {

        message.style.color = "#d33";

        message.textContent =
            "Invalid email/password or backend is not running.";

    }

});