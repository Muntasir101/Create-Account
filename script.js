document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;

    let isValid = true;

    // Clear previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    // Username validation
    const usernameRegex = /^(?![0-9])[A-Za-z0-9_]{3,16}$/;
    if (!usernameRegex.test(username)) {
      document.getElementById("usernameError").textContent =
        "Username must be 3-15 characters long and cannot start with a number.";
      isValid = false;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must include uppercase, lowercase, number, and special character.";
      isValid = false;
    }

    // Age validation
    if (age < 1 || age >= 30) {
      document.getElementById("ageError").textContent =
        "Age must be between 1 and 30 years.";
      isValid = false;
    }

    // If all validations pass
    if (isValid) {
      document.getElementById("successMessage").textContent =
        "Registration successful!";
      // Optionally reset the form
      document.getElementById("registrationForm").reset();
    }
  });
