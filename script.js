// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Navbar button
const navButton = document.querySelector(".nav-button");

if (navButton) {
  navButton.addEventListener("click", function () {
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// Pricing buttons
document.querySelectorAll(".price-card button").forEach(button => {
  button.addEventListener("click", function () {
    alert("Thank you for choosing Northline!");
  });
});

// Simple scroll reveal
const cards = document.querySelectorAll(
  ".feature-card, .price-card, .hero-card"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15
  }
);

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(25px)";
  card.style.transition = "0.6s ease";

  observer.observe(card);
});
