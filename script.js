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

    // TEXT ANIMATION
    text.style.animation = "none";
    void text.offsetWidth;
    text.style.animation = "fade 1s ease";

    // SHOW CURRENT MESSAGE
    text.innerHTML = messages[index];

    // LAST MESSAGE SCREEN
    if(index === 2){

        // CHANGE IMAGE
        image.src = "images/small.jpg";

        // CENTER IMAGE
        image.style.position = "relative";

        image.style.bottom = "0";
        image.style.right = "0";

        image.style.margin = "20px auto";

        image.style.display = "block";

        // BIGGER IMAGE
        image.style.width = "300px";
        image.style.height = "300px";

        // POP EFFECT
        image.classList.remove("pop");
        void image.offsetWidth;
        image.classList.add("pop");

        // CONFETTI
        startConfetti();

        // SHOW BUTTON AFTER CONFETTI STARTS
        setTimeout(() => {

            button.style.display = "inline-block";

            button.innerHTML = "Oii click this 😤💖";

        }, 1200);
    }

    index++;

    // CONTINUE MESSAGES
    if(index < messages.length){

        setTimeout(showMessage, 2200);
    }
}

// START
showMessage();

/* BUTTON FUNCTION */

function showGallery(){

    window.location.href = "gallery.html";
}

/* CONFETTI */

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

        // REMOVE CONFETTI
        setTimeout(() => {

            confetti.remove();

        }, 5000);
    }
}