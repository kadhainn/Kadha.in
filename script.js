document.addEventListener("DOMContentLoaded",()=>{

document.querySelectorAll(".card").forEach(card=>{
card.onclick=()=>{
alert(card.innerText+" വിഭാഗം ഉടൻ ലഭ്യമാകും.");
};
});

document.querySelectorAll("button").forEach(button=>{
button.onclick=()=>{
alert("Coming Soon...");
};
});

});
