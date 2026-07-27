// kadha.in Script

const search = document.querySelector(".hero input");

search.addEventListener("keyup", function () {

let value = this.value.toLowerCase();

document.querySelectorAll(".story").forEach(story => {

story.style.display =
story.innerText.toLowerCase().includes(value)
? "block"
: "none";

});

});

document.querySelectorAll(".card").forEach(card=>{

card.onclick=()=>{

alert(card.querySelector("h3").innerText+" കഥകൾ ഉടൻ വരുന്നു ❤️");

};

});

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});