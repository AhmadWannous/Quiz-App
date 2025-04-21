function showTab(tab) {
    document.getElementById("login").style.display = tab === "login" ? "block" : "none";
    document.getElementById("register").style.display = tab === "register" ? "block" : "none";
}

function register() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();

    if (!firstName || !lastName || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(user => user.email === email)) {
        alert("This email is already registered. Please use a different email.");
        return;
    }

    users.push({
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
        password: password
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now log in.");
    showTab("login");
}

function login() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    if (email === "admin@quiz.com" && password === "admin123") {
        localStorage.setItem("currentUser", JSON.stringify({email: email, password: password}));
        window.location.href = "dashboard.html";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user =>user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "home.html";
    }else {
        alert("Incorrect email or password.Please try again.")
    }
}