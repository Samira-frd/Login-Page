const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".password-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const signinMsg = document.querySelector(".signin-status");
const signinBtn = document.querySelector(".login-button");


signinBtn.addEventListener("click", SignIn);

function SignIn(event){
    event.preventDefault();
    const usernameValue = usernameInput.value;
    usernameMsg.innerHTML = "";
    const passwordValue = passwordInput.value;
    passwordMsg.innerHTML = "";
    
    let ifSendData = true;

    if(usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1){
        usernameMsg.innerHTML = "Please enter a valid email.";
        ifSendData = false;
    }

    if(passwordValue.length === 0){
        passwordMsg.innerHTML = "Please enter your password.";
        ifSendData = false;
    } else if(passwordValue.length <= 4){
        passwordMsg.innerHTML = "Your password is too short.";
        ifSendData = false;
    }

    if(ifSendData){
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue
        })

        const headers = {
            "Content-Type": "application/json"
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        })

        .then(response => {
            if(response.ok){
                signinMsg.innerHTML = "You've signed in successfully."
            }
        })
    }
}
