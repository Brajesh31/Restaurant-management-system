const loginBtnWrapper = document.querySelector(".loginBtnWrapper");
const loginLink = document.querySelector(".loginLink");
const registerLink = document.querySelector(".registerLink");

registerLink.addEventListener("click", ()=>{
    loginBtnWrapper.classList.add("active");
});

loginLink.addEventListener("click", ()=>{
    loginBtnWrapper.classList.remove("active");
});

const loginBtnWrapperPopup = document.querySelector(".loginBtn");
const loginBtnWrappercloseIcon = document.querySelector(".closeIcon");

loginBtnWrapperPopup.addEventListener("click", ()=>{
    loginBtnWrapper.classList.add("activeLoginBtnWrapper");
});

loginBtnWrappercloseIcon.addEventListener("click", ()=>{
    loginBtnWrapper.classList.remove("activeLoginBtnWrapper");
});