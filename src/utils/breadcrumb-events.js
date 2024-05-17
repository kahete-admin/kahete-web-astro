const buttons = document.querySelectorAll(".nav-btn");
const panels = document.querySelectorAll(".panel");
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    panels.forEach((panel) => {
      if (panel.id === "all") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    });
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active-breadcrumb"));
    button.classList.add("active-breadcrumb");

    const targetPanelId = button.dataset.target;
    panels.forEach((panel) => {
      if (panel.id === targetPanelId) {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    });
  });
});