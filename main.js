// KF Panda Search
const charIn = document.getElementById("charName");
const charQuote = document.getElementById("charQuote");
const charImg = document.getElementById("img");
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let name = document.getElementById("charIn").value.toLowerCase();
  // If statements - Test the input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charIn.innerHTML = "Po";
    charQuote.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImg.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charIn.innerHTML = "Tigress";
    charQuote.innerHTML = "That was hardcore!";
    charImg.src = "img/tigress.png";
  } else if (name === "mantis") {
    charIn.innerHTML = "Mantis";
    charQuote.innerHTML = "Fear the Bug!";
    charImg.src = "img/mantis.png";
  } else if (name === "monkey") {
    charIn.innerHTML = "Monkey";
    charQuote.innerHTML = "We should hang out!";
    charImg.src = "img/monkey.png";
  } else if (name === "viper") {
    charIn.innerHTML = "Viper";
    charQuote.innerHTML = "I don't need to bite to fight!";
    charImg.src = "img/viper.png";
  } else if (name === "crane") {
    charIn.innerHTML = "Crane";
    charQuote.innerHTML = "Wings of Justice!";
    charImg.src = "img/crane.png";
  } else {
    charIn.innerHTML = "??????";
    charQuote.innerHTML = "-------------";
    charImg.src = "img/question-mark.png";
  }
}
let body = document.getElementById("body");
document.getElementById("theme-btn").addEventListener("click", clickedTheme);
function clickedTheme() {
  //Input
  let theme = document.getElementById("theme-in").value.toLowerCase();
  if (theme === "black" || theme === "dark") {
    body.style.background = "rgba(0,0,0,0.7)";
    document.getElementById("h11").style.color = "rgb(255,255,255)";
    document.getElementById("charName").style.color = "white";
    document.getElementById("charQuote").style.color = "white";
  } else if (theme === "light" || theme === "white" || theme === "bright") {
    body.style.background = "rgba(255,255,255,0.7)";
    document.getElementById("h11").style.color = "rgb(0,0,0)";
    document.getElementById("charName").style.color = "black";
    document.getElementById("charQuote").style.color = "black";
  } else if (theme === "random" || theme === "rand") {
    let x = Math.random() * 254 + 1;
    x = Math.floor(x);
    let g = Math.random() * 254 + 1;
    g = Math.floor(g);
    let b = Math.random() * 254 + 1;
    b = Math.floor(b);
    document.getElementById("body").style.background =
      "rgb( " + x + ", " + g + ", " + b + ")";
    let a = Math.random() * 254 + 1;
    a = Math.floor(a);
    let = e = Math.random() * 254 + 1;
    e = Math.floor(e);
    let c = Math.random() * 254 + 1;
    c = Math.floor(c);
    document.getElementById("h11").style.color =
      "rgb( " + a + ", " + e + ", " + c + ")";
    document.getElementById("charName").style.color =
      "rgb( " + a + ", " + e + ", " + c + ")";
    document.getElementById("charQuote").style.color =
      "rgb( " + a + ", " + e + ", " + c + ")";
  }
}
