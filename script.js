// Search Stories
const search = document.querySelector('input[type="text"]');

if (search) {
  search.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll(".story").forEach(story => {
      const text = story.textContent.toLowerCase();

      story.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

// Category Click
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;

    switch (title) {
      case "പ്രണയം":
        window.location.href = "categories/pranayam.html";
        break;

      case "ഹൊറർ":
        window.location.href = "categories/horror.html";
        break;

      case "ത്രില്ലർ":
        window.location.href = "categories/thriller.html";
        break;

      case "കോമഡി":
        window.location.href = "categories/comedy.html";
        break;

      default:
        alert(title + " ഉടൻ ലഭ്യമാകും.");
    }
  });
});

// Fade Animation
window.addEventListener("load", () => {
  document.querySelectorAll(".story").forEach((story, i) => {
    story.style.opacity = "0";
    story.style.transform = "translateY(30px)";

    setTimeout(() => {
      story.style.transition = "0.5s";
      story.style.opacity = "1";
      story.style.transform = "translateY(0)";
    }, i * 150);
  });
});