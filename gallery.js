const image = document.getElementById("galleryImage");
const text = document.getElementById("galleryText");
const button = document.getElementById("nextSlideBtn");

const slides = [

    {
        image: "images/pic1.jpg",

        text: "From the moment Amma and Achan held you in their hands... our family became a little more beautiful 💖"
    },

    {
        image: "images/pic2.jpg",

        text: "And somewhere along the way… you became the best big sister I could ever ask for 🌸"
    },

    {
        image: "images/pic3.jpg",

        text: "The laughter, chaos, and cousin gang... some of the happiest memories ever 💫"
    },

    {
        image: "images/pic4.jpg",

        text: "No matter how much we grow up... you'll always be the Chechi I look up to 💕"
    },

    {
        image: "images/pic5.jpg",

        text: "No matter how much time passes... home will always be this love, this chaos, and us together ☀️ Happy Birthday Chechi 💖"
    }
];

let index = 0;

/* SHOW FIRST SLIDE */

showSlide();

/* BUTTON CLICK */

button.addEventListener("click", () => {

    index++;

    if(index >= slides.length){

        window.location.href = "ending.html";
    }

    showSlide();
});

/* SHOW SLIDE FUNCTION */

function showSlide(){

    image.classList.remove("show");
    text.classList.remove("show");

    setTimeout(() => {

        image.src = slides[index].image;

        text.innerHTML = slides[index].text;

        image.classList.add("show");
        text.classList.add("show");

    }, 300);
}

/* MOBILE SWIPE */

let startX = 0;

document.addEventListener("touchstart", (e) => {

    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){

        index++;

        if(index >= slides.length){
            index = 0;
        }

        showSlide();
    }
});