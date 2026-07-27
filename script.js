const search = document.querySelector('input[type="text"]');

if (search) {
  search.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll(".story").forEach(story => {
      const text = story.textContent.toLowerCase();

      if (text.includes(value)) {
        story.style.display = "block";
      } else {
        story.style.display = "none";
      }
    });
  });
}

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert(card.querySelector("h3").innerText + " കഥകൾ ഉടൻ കൂടുതൽ ലഭ്യമാകും.");
  });
});