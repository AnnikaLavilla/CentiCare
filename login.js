// Fake users
const users = [
    { username: "patient1", password: "1234", role: "Patient" },
    { username: "staff1", password: "1234", role: "Staff" },
    { username: "admin1", password: "1234", role: "Admin" }
];

let selectedRole = "Patient";

// Role toggle
function selectRole(button) {
    document.querySelectorAll('.toggle button').forEach(btn =>
        btn.classList.remove('active')
    );

    button.classList.add('active');
    selectedRole = button.textContent.trim();
}

// Show/hide password
function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

// LOGIN
function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(u =>
        u.username === username &&
        u.password === password &&
        u.role === selectedRole
    );

    if (user) {
        localStorage.setItem("user", JSON.stringify(user));

        // ✅ FIXED REDIRECT (safe for same folder / GitHub / live server)
        if (user.role === "Staff") {
            window.location.href = "./staff.html";
        } else if (user.role === "Admin") {
            window.location.href = "./admin.html";
        } else {
            window.location.href = "./dashboard.html";
        }

    } else {
        document.getElementById("error").textContent = "Invalid credentials or role mismatch";
    }
}

// Forgot password
function forgotPassword() {
    alert("Please contact CentiCare admin to reset your password.");
}