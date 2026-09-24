document.addEventListener("DOMContentLoaded", function() {

    const savedUser =
        localStorage.getItem("hmsUser");


    if (savedUser) {

        try {

            const user =
                JSON.parse(savedUser);


            const name =
                user.name || "User";


            const role =
                user.role || "PATIENT";


            document.getElementById("userName")
                .textContent = name;


            document.getElementById("welcomeName")
                .textContent = name;


            document.getElementById("userRole")
                .textContent = role;

        }

        catch(error) {

            console.log(
                "User data could not be loaded."
            );

        }

    }

});


function logout() {

    localStorage.removeItem("hmsUser");

    window.location.href =
        "login.html";

}