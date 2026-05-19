const text = document.getElementById("text");
const button = document.getElementById("nextBtn");
const image = document.getElementById("mainImage");

const messages = [
    "Hello 👀",
    "What's so special today? 🤨",
    "IT'S YOUR BIRTHDAY!!! 🎉"
];

let index = 0;

function showMessage() {

    text.style.animation = "none";
    void text.offsetWidth;
    text.style.animation = "fade 1s ease";

    text.innerHTML = messages[index];

    // FINAL SCREEN
    if(index === 2){

    image.src = "images/small.jpg";

    // MOVE IMAGE TO CENTER
    image.style.position = "relative";
    image.style.bottom = "0";
    image.style.right = "0";
    image.style.margin = "0 auto";
    image.style.display = "block";

    // BIGGER IMAGE
    image.style.width = "300px";
    image.style.height = "300px";

    image.classList.add("pop");

    startConfetti();
}

    index++;

    if(index < messages.length){
        setTimeout(showMessage, 2200);
    }
    else{
        setTimeout(() => {
            button.style.display = "inline-block";
        }, 1500);
    }
}

showMessage();

function showGallery(){
    window.location.href = "gallery.html";
}

/* CONFETTI FUNCTION */

function startConfetti(){

    const colors = [
        "#ff0",
        "#ff4f81",
        "#00e1ff",
        "#7cff00",
        "#ffffff",
        "#ff8800"
    ];

    for(let i = 0; i < 150; i++){

        const confetti = document.createElement("div");

        confetti.classList.add("confetti-piece");

        // RANDOM POSITION
        confetti.style.left =
            Math.random() * 100 + "vw";

        // RANDOM COLOR
        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        // RANDOM SPEED
        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        // RANDOM SIZE
        const size = Math.random() * 10 + 5;

        confetti.style.width = size + "px";
        confetti.style.height = size + "px";

        document.body.appendChild(confetti);

        // REMOVE AFTER FALLING
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}