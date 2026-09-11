"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
if (menuButton && navigation) {
  document.documentElement.classList.add("js");
  menuButton.hidden = false;
  const setMenu = (isOpen) => {
    navigation.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.querySelector("span").textContent = isOpen ? "−" : "+";
  };
  menuButton.addEventListener("click", () =>
    setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
  );
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenu(false);
  });
  window
    .matchMedia("(min-width: 801px)")
    .addEventListener("change", () => setMenu(false));
}

// The direct demo link works without JavaScript. Load Google's player only on request.
const demoButton = document.querySelector(".inline-demo-button");
if (demoButton) {
  const container = document.querySelector(".video-container");
  const project = demoButton.closest("details");
  const closeDemo = () => {
    container.replaceChildren();
    container.hidden = true;
    demoButton.setAttribute("aria-expanded", "false");
    demoButton.textContent = "Play demo here ▷";
  };
  demoButton.hidden = false;
  demoButton.setAttribute("aria-expanded", "false");
  demoButton.addEventListener("click", () => {
    const isOpen = !container.hidden;
    if (isOpen) {
      closeDemo();
    } else {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://drive.google.com/file/d/1sHNVjFjrPdqvWSs9DqRC5s-tk4BaKvtF/preview";
      iframe.title =
        "Optimal Route API with Cost-Effective Fuel Stops — project demo";
      iframe.allow = "fullscreen";
      iframe.allowFullscreen = true;
      container.append(iframe);
    }
    container.hidden = isOpen;
    demoButton.setAttribute("aria-expanded", String(!isOpen));
    demoButton.textContent = isOpen ? "Play demo here ▷" : "Close demo ×";
  });
  // Collapsing the project must also stop a playing video.
  project.addEventListener("toggle", () => {
    if (!project.open) closeDemo();
  });
}
