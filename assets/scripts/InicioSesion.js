// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Change icon (optional - you can add different SVG for eye-slash)
    if (type === "text") {
        this.style.color = "#4A7FFF";
    } else {
        this.style.color = "#999";
    }
});

// Form submission handler
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation
    if (fullName.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    // Here you would typically send the data to your server
    console.log("Form submitted:", { fullName, email, password });
    alert("Account created successfully!");

    // Reset form
    signupForm.reset();
});

// Social button handlers
const googleBtn = document.querySelector(".btn-google");
const linkedinBtn = document.querySelector(".btn-linkedin");

googleBtn.addEventListener("click", function () {
    console.log("Sign up with Google clicked");
    alert("Google sign up functionality would be implemented here");
});

linkedinBtn.addEventListener("click", function () {
    console.log("Sign up with LinkedIn clicked");
    alert("LinkedIn sign up functionality would be implemented here");
});

// Add input focus animation
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("focus", function () {
        this.parentElement.style.transform = "scale(1.02)";
    });

    input.addEventListener("blur", function () {
        this.parentElement.style.transform = "scale(1)";
    });
});
