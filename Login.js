
    function registerUser(e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var passwordRepeat = document.getElementById("passwordRepeat").value;
        var address = document.getElementById("address").value;

        if (password !== passwordRepeat) {
            alert("Die Passwörter stimmen nicht überein. Bitte versuchen Sie es erneut.");
            return;
        }
    }
