const menu = document.querySelector(".nav__menu")
const ul = document.querySelector(".nav__ul")

menu.addEventListener("click", () => {
    ul.classList.toggle("active")
})