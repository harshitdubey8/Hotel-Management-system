// function to clear local storage

function logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("password");

  localStorage.removeItem("phone");
  localStorage.removeItem("email");

  if (localStorage.getItem("email") == undefined) {
    alert("no user logged in");
  }
  location.reload();
}
