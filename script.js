// Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

// YES Button
yesBtn.addEventListener("click", () => {

    result.innerHTML = `
    💖 Yayyy!! 💖<br><br>
    I Promise To Love You Forever ❤️🥹
    `;

    createHearts();
});

// NO Button (Run Away)
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton(){

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Floating Hearts on YES
function createHearts(){

    for(let i=0;i<40;i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random()*25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "love 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);
    }
}

// Heart Animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes love{

0%{
transform:translateY(0) scale(1);
opacity:1;
}

100%{
transform:translateY(-120vh) scale(1.8) rotate(360deg);
opacity:0;
}

}
`;

document.head.appendChild(style);