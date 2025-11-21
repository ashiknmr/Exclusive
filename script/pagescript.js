document.addEventListener("DOMContentLoaded", function() {
  const starsContainers = document.querySelectorAll(".stars");

  starsContainers.forEach(container => {
    const rating = parseFloat(container.getAttribute("data-rating"));
    const totalStars = 5;
    container.innerHTML = "";

    for (let i = 1; i <= totalStars; i++) {
      const star = document.createElement("img");

      if (i <= Math.floor(rating)) {
        star.src = "../Assets/Gold Star.png"; 
      } else if (i - rating <= 0.5 && rating % 1 !== 0) {
        star.src = "../Assets/Gold Star.png";
        star.style.clipPath = "inset(0 50% 0 0)";
      } else {
        star.src = "../Assets/Star.png"; 
      }

      star.style.width = "20px";
      star.style.height = "20px";
      star.style.marginRight = "2px";
      star.style.verticalAlign = "middle";

      container.appendChild(star);
    }
  });
});