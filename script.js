function Login() {
  var done = 0;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "Admin" && password == "admin") {
    if (confirm("Apakah anda ingin login?") == true) {
      window.location.href = "https://kuukok.site/";
    } else {
      alert("Login dibatalkan !");
    }
  } else {
    if (done == 0) {
      alert("Username/Password Salah");
    }
  }
}
