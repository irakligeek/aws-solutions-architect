import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded.");

  // Select all expand buttons
  const expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the target case study ID based on data-id attribute
      const caseStudyId = this.getAttribute("data-id");
      const content = document.getElementById(`case-study-${caseStudyId}`);
      const text = this.querySelector("span");
      const arrow = this.querySelector("svg");

      // Toggle the visibility of the case study content
      content.classList.toggle("hidden");

      // Change the button text and rotate the arrow
      if (content.classList.contains("hidden")) {
        text.textContent = "Show More →";
        arrow.style.transform = "rotate(0deg)";
      } else {
        text.textContent = "Show Less ↑"; // Arrow points up
        arrow.style.transform = "rotate(180deg)";
      }
    });
  });

  // Handle toggle text buttons
  document.querySelectorAll(".toggle-text-btn").forEach((button) => {
    button.addEventListener("click", () => toggleText(button));
  });
});

function toggleCaseStudy(id) {
  const content = document.getElementById(`case-study-${id}`);
  const toggleText = document.getElementById(`toggle-text-${id}`);

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    toggleText.innerHTML = "Show Less ↑"; // Change text when expanded
  } else {
    content.classList.add("hidden");
    toggleText.innerHTML = "Show More →"; // Change back when collapsed
  }
}

function toggleText(button) {
  const card = button.parentElement;
  const moreText = card.querySelector("#more-text");
  const certificationLink = card.querySelector("#certification-link");

  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    certificationLink.classList.remove("hidden");
    button.textContent = "Show Less ↑";
  } else {
    moreText.classList.add("hidden");
    certificationLink.classList.add("hidden");
    button.textContent = "Show More →";
  }
}
