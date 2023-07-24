const container = document.querySelector('.skills-container');
const cards = document.querySelectorAll('.skills-card');

function updateCardOpacity() {
  const containerCenter = container.scrollLeft + container.offsetWidth / 2;

  cards.forEach((card) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 6;
    const distanceFromCenter = Math.abs(containerCenter - cardCenter);
    const maxDistance = container.offsetWidth / 1.75;
    const opacity = Math.max(0, 1 - distanceFromCenter / maxDistance);

    card.style.opacity = opacity;
  });
}

// Update card opacity when page loads
updateCardOpacity();

// Update card opacity when user scrolls
container.addEventListener('scroll', updateCardOpacity);

// Allow horizontal scrolling with mouse wheel
container.addEventListener('wheel', (event) => {
  event.preventDefault();
  const scrollAmount = event.deltaX || event.deltaY *1.65;
  container.scrollLeft += scrollAmount;
});
