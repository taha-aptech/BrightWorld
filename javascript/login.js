
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  const loginUsername = document.getElementById("loginUsername");
  const loginPassword = document.getElementById("loginPassword");
  const saveCreds = document.getElementById("saveCreds").checked;

  if (loginUsername.value.trim() === "") {
    loginUsername.classList.add("is-invalid");
    valid = false;
  } else {
    loginUsername.classList.remove("is-invalid");
    loginUsername.classList.add("is-valid");
  }

  if (loginPassword.value.trim() === "") {
    loginPassword.classList.add("is-invalid");
    valid = false;
  } else {
    loginPassword.classList.remove("is-invalid");
    loginPassword.classList.add("is-valid");
  }

  if (valid) {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.username !== loginUsername.value.trim() || storedUser.password !== loginPassword.value) {
      alert("Invalid credentials.");
    } else {
      if (saveCreds) {
        sessionStorage.setItem("loginUser", loginUsername.value.trim());
      }
      alert("Login successful!");
      loginForm.reset();
      document.querySelectorAll(".form-control").forEach(f => f.classList.remove("is-valid"));
    }
  }
});