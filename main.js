
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





const simply = document.getElementById("simply");
const easy = document.getElementById("easy");
const speedy = document.getElementById("speedy");

const imgOne = document.getElementById("m1");
const imgTwo = document.getElementById("m2");
const imgThree = document.getElementById("m3");


simply.addEventListener('click', () => {
    imgOne.style.display = "flex";
    imgTwo.style.display = "none";
    imgThree.style.display = "none";
})

speedy.addEventListener('click', () => {
    imgTwo.style.display = "flex";
    imgOne.style.display = "none";
    imgThree.style.display = "none";
})

easy.addEventListener('click', () => {
    imgThree.style.display = "flex";
    imgTwo.style.display = "none";
    imgOne.style.display = "none";
})


function sendMail() {

    let emailValue=document.getElementById("email").value;
      if (!emailValue || !validateEmail(emailValue)) {
        document.getElementById("correct").className="hidd";
        document.getElementById("wrong").className="";
        document.getElementById("email").style.border = "2px solid #FA5959"

      } else {
        document.getElementById("correct").className="";
        document.getElementById("wrong").className="hidd";
        document.getElementById("email").style.border = "2px solid green"
      }
    } 
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
      }