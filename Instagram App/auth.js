function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    showMessage("Please enter username and password.");
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username]) {
    showMessage("Username already exists. Please log in.");
    return;
  }

  users[username] = password;
  localStorage.setItem('users', JSON.stringify(users));
  showMessage("✅ Registered successfully. You can now log in!");
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem('users')) || {};
  if (!users[username]) {
    showMessage("User does not exist. Please register.");
    return;
  }

  if (users[username] !== password) {
    showMessage("Incorrect password.");
    return;
  }

  localStorage.setItem('currentUser', username);
  window.location.href = "index.html";
}

function showMessage(msg) {
  document.getElementById("authMessage").textContent = msg;
}
