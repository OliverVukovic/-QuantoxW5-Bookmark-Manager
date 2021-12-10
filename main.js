
const modalOne = document.getElementById("modal1");
const arrowOne = document.getElementById("a1");
const invisibleOne = document.getElementById("i1");

modalOne.addEventListener('click', () => {
    invisibleOne.style.display = "flex";
    arrowOne.style.transform = "rotate(180deg)";

    invisibleTwo.style.display = "none";
    arrowTwo.style.transform = "rotate(360deg)";
    invisibleThree.style.display = "none";
    arrowThree.style.transform = "rotate(360deg)";
    invisibleFour.style.display = "none";
    arrowFour.style.transform = "rotate(360deg)";
})


const modalTwo = document.getElementById("modal2");
const arrowTwo = document.getElementById("a2");
const invisibleTwo = document.getElementById("i2");

modalTwo.addEventListener('click', () => {
    invisibleTwo.style.display = "flex";
    arrowTwo.style.transform = "rotate(180deg)";

    invisibleOne.style.display = "none";
    arrowOne.style.transform = "rotate(360deg)";
    invisibleThree.style.display = "none";
    arrowThree.style.transform = "rotate(360deg)";
    invisibleFour.style.display = "none";
    arrowFour.style.transform = "rotate(360deg)";
})


const modalThree = document.getElementById("modal3");
const arrowThree = document.getElementById("a3");
const invisibleThree = document.getElementById("i3");

modalThree.addEventListener('click', () => {
    invisibleThree.style.display = "flex";
    arrowThree.style.transform = "rotate(180deg)";

    invisibleOne.style.display = "none";
    arrowOne.style.transform = "rotate(360deg)";
    invisibleTwo.style.display = "none";
    arrowTwo.style.transform = "rotate(360deg)";
    invisibleFour.style.display = "none";
    arrowFour.style.transform = "rotate(360deg)";
})


const modalFour = document.getElementById("modal4");
const arrowFour = document.getElementById("a4");
const invisibleFour = document.getElementById("i4");

modalFour.addEventListener('click', () => {
    invisibleFour.style.display = "flex";
    arrowFour.style.transform = "rotate(180deg)";

    invisibleOne.style.display = "none";
    arrowOne.style.transform = "rotate(360deg)";
    invisibleTwo.style.display = "none";
    arrowTwo.style.transform = "rotate(360deg)";
    invisibleThree.style.display = "none";
    arrowThree.style.transform = "rotate(360deg)";
})

