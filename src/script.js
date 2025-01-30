

const buttons = document.querySelectorAll('.button');
const containerSection = document.querySelectorAll('.container-section');
const container = document.querySelector('.container');
const timed = document.getElementById("timed");
const located = document.getElementById("located");

const handleClick = (e) => {
    const handleSection = e.target.getAttribute("data-section");
    const section = document.querySelector(handleSection);
    handleSection !== "#about"? container.classList.add("is-active"): container.classList.remove("is-active");

    container.setAttribute("data-state", handleSection);

    containerSection.forEach((s) => s.classList.remove("is-active"));
    buttons.forEach((b) => b.classList.remove("is-active"));

    e.target.classList.add("is-active");
    section.classList.add("is-active")
}

buttons.forEach((btn) => {
    btn.addEventListener("click", handleClick)
});

const time = new Date();
const currentTime = time.toLocaleTimeString();
console.log(currentTime)
timed.textContent = currentTime;



