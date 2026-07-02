function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    if(username === savedUsername && password === savedPassword){
        message.style.color = "green";
        message.textContent = "Login successful!";
        //redirect after two seconds
        setTimeout(function(){
            window.location.href = "home.html";
        }, 2000);
    }else   {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
    }

    
   function signup() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);

    message.style.color = "green";
    message.textContent = "Account created successfully!";

    setTimeout(function () {
        window.location.href = "login.html";
    }, 2000);
}
}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("fullname");
    localStorage.removeItem("email");
    alert("logged out successfully.");
    window.location.href = "login.html";
}
//load farmers dashboardstatistics
function loadDashboard() {
    //get data from local storage
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    //update the dashboard statistics
    document.getElementById("total-products").textContent = products.length;
    document.getElementById("total-orders").textContent = orders.length;
    //total sales
    let totalsales=0;
    orders.forEach(function(order){
        totalsales += Number(order.amount);
    });
    document.getElementById("total-sales").textContent = 
    "Ksh" + totalsales.tolocaleString();
    // unread messages
    let unreadMessages = messages.filter(function(message){
        return message.read === false;
    });
    document.getElementById("totalMessages").textContent = unreadMessages.length + " New";
}
//run automatically when the page loads
window.onload = loadDashboard;
