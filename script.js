function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    if(username === "admin" && password === "password123"){
        message.style.color = "green";
        message.textcontent = "Login successful!";
        //redirect after two seconds
        setTimeout(function(){
            window.location.href = "home.html";
        }, 2000);
    }else   {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
    }
    
}