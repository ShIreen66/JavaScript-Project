const card = document.querySelector(".card");
const heart = document.querySelector(".heart");
const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

card.addEventListener("dbclick", () => {
    heart.style.opacity = 0.8;
    heart.style.scale = 2;

    setTimeout(() =>{
        heart.style.opacity = 0;
        heart.style.scale = 0;
    }, 400);
});

body.addEventListener("mousemove", (e) => {
    cursor.style.left = e.x + 10 + "px"
    cursor.style.top = e.y + 5 + "px"
});

card.addEventListener("mouseover", (e) => {
    cursor.style.scale = 3;
});

card.addEventListener("mouseleave", (e) => {
    cursor.style.scale = 1;
});