
// Dark Mode
let sunIcon = document.querySelector(".sun");
let moonIcon = document.querySelector(".moon");
let setTheme = document.body;
let IconToggleDark = document.querySelector(".toggleDark");
let flicker = document.querySelector(".flicker");
let toggleDark = document.querySelector(".toggleDark");
IconToggleDark.addEventListener("click", () => {
  setTheme.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
if (localStorage.getItem("theme") === "dark") {
  setTheme.classList.add("dark");
  setTheme.style.transition = ".8s";
  flicker.classList.remove("open");
}
toggleDark.addEventListener("click", (eo) => {
  flicker.classList.toggle("open");
});
localStorage.setItem(
  "icondark",
  flicker.classList.contains("open") ? "open" : "noopen"
);
if (localStorage.getItem("icondark") === "noopen") {
  flicker.classList.add("open");
} else {
  flicker.classList.remove("open");
}
// Show Menu Box When Click On Menu Icon
let menuIcon = document.querySelector("#menu");
let menuBox = document.querySelector(".menu-box");

let menuOpen = false;
menuIcon.addEventListener("click", () => {
  menuBox.classList.toggle("open");
  if (!menuOpen) {
    menuIcon.classList.add("open");
    menuOpen = true;
  } else {
    menuIcon.classList.remove("open");
    menuOpen = false;
  }
});
let menuBoxLink = document.querySelectorAll(".menu-links li a");
menuBoxLink.forEach((item) => {
  item.onclick = function () {
    menuBox.classList.remove("open");
    menuIcon.classList.remove("open");
    menuOpen = false;
  };
});


const text = document.querySelector(".sec-txt");
const textLoad = () =>{
  setTimeout(() =>{
   text.textContent = "Web Design"; 
  }, 0);
  setTimeout(() =>{
    text.textContent = "UI/UX Designer"; 
   }, 8000);
}
textLoad();
setInterval(textLoad, 12000);