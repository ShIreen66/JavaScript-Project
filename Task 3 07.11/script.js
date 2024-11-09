const elements = document.querySelectorAll(".element");

elements.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
        element.childNodes[3].style.opacity = 1;
    });

    element.addEventListener("mousemove", (e) => {
        element.childNodes[3].style.left = '${e.x}px';
    });

    element.addEventListener("mouseleave", (e) => {
        element.childNodes[3].style.opacity = 0;
    });
});
