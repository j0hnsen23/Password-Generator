function generatePassword() {
    // Get user preferences
    const length = parseInt(document.getElementById("length").value, 10);

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";

    let chars = "";
    let password = "";

    // Build character set based on user selections
    if (document.getElementById("uppercase").checked) chars += uppercase;
    if (document.getElementById("lowercase").checked) chars += lowercase;
    if (document.getElementById("numbers").checked) chars += numbers;
    if (document.getElementById("symbols").checked) chars += symbols;
    
    // Ensure at least one character type is selected
    if (chars === "") {
        alert("Please select at least one option.");
        return;
    }
    // Generate password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
}

// Event listener for generate button
document.getElementById("generate").addEventListener("click", generatePassword);
