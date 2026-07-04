
// ========= SCREENS =========

const startScreen = document.getElementById("startScreen");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const finalScreen = document.getElementById("finalScreen");

// ========= BUTTONS =========

const openBtn = document.getElementById("openBtn");

const yes1 = document.getElementById("yes1");
const no1 = document.getElementById("no1");

const yes2 = document.getElementById("yes2");
const no2 = document.getElementById("no2");

// ========= OPEN =========

openBtn.onclick = () => {
    startScreen.classList.add("hide");
    screen1.classList.remove("hide");
};

// ========= FIRST YES =========

yes1.onclick = () => {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");
};

// ========= SECOND YES =========

yes2.onclick = () => {
    screen2.classList.add("hide");
    finalScreen.classList.remove("hide");

    heartBurst();
};

// ========= RUN AWAY BUTTON =========

function moveButton(btn){

    const x = Math.random() * (window.innerWidth - btn.offsetWidth - 20);

    const y = Math.random() * (window.innerHeight - btn.offsetHeight - 20);

    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// Desktop

no1.addEventListener("mouseenter",()=>moveButton(no1));
no2.addEventListener("mouseenter",()=>moveButton(no2));

// Mobile

no1.addEventListener("touchstart",(e)=>{
e.preventDefault();
moveButton(no1);
});

no2.addEventListener("touchstart",(e)=>{
e.preventDefault();
moveButton(no2);
});

// ========= HEARTS =========

const hearts=document.querySelector(".hearts");

setInterval(()=>{

const heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(18+Math.random()*18)+"px";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},350);

// ========= HEART BURST =========

function heartBurst(){

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*25)+"px";
heart.style.pointerEvents="none";
heart.style.animation="burst 4s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000);

}

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes burst{

0%{
transform:translateY(0) scale(1);
opacity:1;
}

100%{
transform:translateY(-120vh) scale(2) rotate(360deg);
opacity:0;
}

}
`;

document.head.appendChild(style);