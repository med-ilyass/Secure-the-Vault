// Step 2: Create a message for the user
let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// Step 3:Create 3 variables using different arithmetic operations
let code1 = 1500 - 1490;
let code2 = 10 * 4;
let code3 = (70 / 2) + 4;

// step 4: Display the message and combination on the page
document.getElementById("message").innerText = message;
document.getElementById("combination").innerText = "Vault Combination: " + code1 + " - " + code2 + " - " + code3;