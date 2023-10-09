function validation() {
    try {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let validUsername = /^[a-zA-Z0-9._-]+@(gmail|yahoo|hotmail|carsu)\.(com|org|ph|edu(\.ph)?)$/;
        let validPassword = /^[a-zA-Z0-9]{8,20}$/;

        let usernameValid = validUsername.test(username);
        let passwordValid = validPassword.test(password);

        if (!usernameValid && !passwordValid) {
            throw Error("Invalid Email and Password");
        } else if (!usernameValid) {
            throw Error("Invalid Email");
        } else if (!passwordValid) {
            throw Error("Invalid Password");
        }

        alert("Successfully Submitted");
        return true;
    } catch (error) {
        if (error.message.includes("Invalid Email")) {
            alert("Error: " + error.message);
            alert("Don't forget to add '@' and use accepted domains like gmail, yahoo, etc., and valid extensions like .com, .org, etc.");
        } else if (error.message.includes("Invalid Password")) {
            alert("Error: " + error.message);
            alert("Password should only contain uppercase and lowercase letters and numbers, without special characters.");
        } else {
            alert("Error: " + error.message);
        }
        console.log(error.message);
        return false;
    } finally {
        console.log("---- Finally ----"); 
    }
}

// settimeout

// disable button