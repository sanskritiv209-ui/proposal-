// ================= SCREENS =================

const startScreen = document.getElementById("startScreen");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const finalScreen = document.getElementById("finalScreen");

// ================= BUTTONS =================

const openBtn = document.getElementById("openBtn");

const yes1 = document.getElementById("yes1");
const no1 = document.getElementById("no1");

const yes2 = document.getElementById("yes2");
const no2 = document.getElementById("no2");

// ================= OPEN BUTTON =================

openBtn.addEventListener("click", () => {

    startScreen.classList.add("hide");
    screen1.classList.remove("hide");

});

// ================= FIRST YES =================

yes1.addEventListener("click", () => {

    screen1.classList.add("hide");
    screen2.classList.remove("hide");

});

// ================= SECOND YES =================

yes2.addEventListener("click", () => {

    screen2.classList.add("hide");
    finalScreen.classList.remove("hide");

    heartBurst();

});

// ================= RUN AWAY BUTTON =================

function moveButton(btn){

    const maxX = window.innerWidth - btn.offsetWidth - 30;
    const maxY = window.innerHeight - btn.offsetHeight - 30