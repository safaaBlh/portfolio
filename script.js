ةwindow.addEventListener("scroll", function() {
  const heroSection = document.querySelector('.hero');
  const heroPosition = heroSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (heroPosition < screenPosition) {
    document.querySelector('.hero .typewriter').classList.add('visible');
  }
});