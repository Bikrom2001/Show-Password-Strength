const password = document.getElementById("password");
const message = document.getElementById("message");
const strenght = document.getElementById("strenght");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  if (password.value.length < 4) {
    strenght.innerHTML = "Weak";

    password.style.borderColor = "#ff5925";
    message.style.color = "#ff5925";
  } else if (password.value.length >= 4 && password.value.length < 8) {
    strenght.innerHTML = "Medium";

    password.style.borderColor = "yellow";
    message.style.color = "yellow";

  } else if (password.value.length >= 8) {
    strenght.innerHTML = "Strong";

    password.style.borderColor = "#26d739";
    message.style.color = "#26d739";
  }
});
