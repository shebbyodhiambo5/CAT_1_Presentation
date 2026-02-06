function welcomeMessage() {
  alert("Welcome to Shebby Modline's Personal Website!");
}

function validateForm() {
  let email = document.getElementById("email").value;
  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}
