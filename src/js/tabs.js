const tabs = document.querySelector(".tabs_nav--list");
const tabButton = document.querySelectorAll(".tabs_nav--button");
const tabPanel = document.querySelectorAll(".tabs--panel");

tabs.onclick = (e) => {
  const panelId = e.target.dataset.id;
  if (panelId) {
    tabButton.forEach((btn) => {
      btn.classList.remove("-active");
    });
    e.target.classList.add("-active");

    tabPanel.forEach((content) => {
      content.classList.remove("-active");
    });
    const element = document.getElementById(panelId);
    element.classList.add("-active");
  }
};
