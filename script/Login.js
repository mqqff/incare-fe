function togglePassword() {
  const passwordField = document.getElementById('password');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
}

function showOverlay() {
  document.getElementById('overlay').style.display = 'flex';
}

function hideOverlay() {
  document.getElementById('overlay').style.display = 'none';
}
