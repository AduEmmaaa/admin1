const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const regUserBtn = document.getElementById("regUser1");
const logUser1Btn = document.getElementById("regUser");
const loginBtn = document.getElementById("login");
const Rname = document.getElementById("name");
const email = document.getElementById("email");
const email1 = document.getElementById("email1");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

regUserBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const user = {
    Name: Rname.value,
    Email: email.value,
    Password: password.value,
  };
  const Data = JSON.stringify(user);
  const requestOptions = {
    method: "POST", // or 'PUT'
    headers: { "Content-Type": "application/json" },
    body: Data,
  };
  fetch("https://firstnode-j9ix.onrender.com/register", requestOptions)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => console.log(data)) // Log the response data
    .catch((error) => console.error("Error :", error));
});

logUser1Btn.addEventListener("click", (event) => {
  event.preventDefault();
  const user = {
    email: email1.value,
    password: password1.value,
  };
  console.log(user);
});
