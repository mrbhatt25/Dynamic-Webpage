const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    // console.log(container.classList);
})
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    // console.log(container.classList);
})