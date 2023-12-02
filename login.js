const signUp = document.querySelector(".sign-up");
const logIn = document.querySelector(".login");
const forgetPwd = document.querySelector(".forget-password");

function signup() {
  signUp.classList.add("active");
  logIn.classList.remove("active");
}

function login() {
  logIn.classList.add("active");
  signUp.classList.remove("active");
}

function forgetPassword() {
  forgetPwd.classList.add("active");
  signUp.classList.remove("active");
  logIn.classList.remove("active");
}