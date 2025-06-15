const heroTitle = document.querySelector(".hero-title")
const heroTitleOverlay = document.querySelector(".hero-title[data-overlay]")

console.log("title", {text: heroTitle.textContent})

heroTitleOverlay.innerText = heroTitle.textContent;
